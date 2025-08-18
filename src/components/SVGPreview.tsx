import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { NeonDesign } from '../types/configurator';

interface SVGPreviewProps {
  design: NeonDesign;
  width: number;
  height: number;
  className?: string;
}

const SVGPreview: React.FC<SVGPreviewProps> = ({
  design,
  width,
  height,
  className = "w-20 h-20"
}) => {
  const [showModal, setShowModal] = useState(false);
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Check if we have an uploaded SVG (from NeonMockupStage)
  const hasUploadedSvg = () => {
    // Check if there's an SVG in the DOM from the mockup stage
    const mockupStage = document.querySelector('[data-mockup-stage] svg');
    return !!mockupStage;
  };

  const getUploadedSvg = () => {
    const mockupStage = document.querySelector('[data-mockup-stage] svg');
    if (mockupStage) {
      return mockupStage.outerHTML;
    }
    return null;
  };

  const handlePreviewClick = () => {
    if (hasUploadedSvg()) {
      const svg = getUploadedSvg();
      setSvgContent(svg);
      setShowModal(true);
    } else {
      // Fallback to design mockup image
      setShowModal(true);
    }
  };

  const renderPreview = () => {
    if (hasUploadedSvg()) {
      const svg = getUploadedSvg();
      return (
        <div 
          className={`${className} bg-white border-2 border-gray-200 rounded-lg p-2 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow group relative`}
          onClick={handlePreviewClick}
        >
          <div 
            className="max-w-full max-h-full"
            dangerouslySetInnerHTML={{ __html: svg || '' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-lg flex items-center justify-center">
            <ZoomIn className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      );
    }

    // Fallback to mockup image
    return (
      <div 
        className={`${className} bg-white border-2 border-gray-200 rounded-lg p-2 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow group relative`}
        onClick={handlePreviewClick}
      >
        <img
          src={design.mockupUrl}
          alt={design.name}
          className="max-w-full max-h-full object-contain rounded"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-lg flex items-center justify-center">
          <ZoomIn className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    );
  };

  return (
    <>
      {renderPreview()}

      {/* Modal for enlarged view */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{design.name}</h3>
                <p className="text-sm text-gray-600">{width}×{height}cm</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
              <div className="flex items-center justify-center min-h-[400px] bg-gray-50 rounded-lg">
                {svgContent ? (
                  <div 
                    className="max-w-full max-h-full"
                    style={{ maxWidth: '800px', maxHeight: '600px' }}
                    dangerouslySetInnerHTML={{ __html: svgContent }}
                  />
                ) : (
                  <img
                    src={design.mockupUrl}
                    alt={design.name}
                    className="max-w-full max-h-full object-contain"
                    style={{ maxWidth: '800px', maxHeight: '600px' }}
                  />
                )}
              </div>
              
              {/* Design Info */}
              <div className="mt-4 bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">{width}cm</div>
                    <div className="text-gray-600">Breite</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">{height}cm</div>
                    <div className="text-gray-600">Höhe</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">{design.elements}</div>
                    <div className="text-gray-600">Elemente</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">{design.ledLength}m</div>
                    <div className="text-gray-600">LED-Länge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SVGPreview;