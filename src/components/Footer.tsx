import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-500 py-4 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
            <span className="font-medium text-gray-700">© 2025, Nontel Alle Rechte vorbehalten</span>
            <a href="/widerrufsrecht" className="hover:text-blue-600 transition-colors font-medium">
              Widerrufsrecht
            </a>
            <span className="text-gray-300">•</span>
            <a href="/datenschutz" className="hover:text-blue-600 transition-colors font-medium">
              Datenschutzerklärung
            </a>
            <span className="text-gray-300">•</span>
            <a href="/agb" className="hover:text-blue-600 transition-colors font-medium">
              AGB
            </a>
            <span className="text-gray-300">•</span>
            <a href="/zahlung-versand" className="hover:text-blue-600 transition-colors font-medium">
              Zahlung und Versand
            </a>
            <span className="text-gray-300">•</span>
            <a href="/impressum" className="hover:text-blue-600 transition-colors font-medium">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;