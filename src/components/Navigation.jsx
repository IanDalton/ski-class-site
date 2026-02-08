import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Navigation() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-[1000] bg-white shadow-md transition-all duration-250">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600">{t('nav.brand')}</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-700 font-medium relative transition-colors duration-150 hover:text-blue-600 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-250 hover:after:w-full"
                >
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a 
                  href="#why-us" 
                  className="text-gray-700 font-medium relative transition-colors duration-150 hover:text-blue-600 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-250 hover:after:w-full"
                >
                  {t('nav.whyUs')}
                </a>
              </li>
              <li>
                <a 
                  href="#classes" 
                  className="text-gray-700 font-medium relative transition-colors duration-150 hover:text-blue-600 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-250 hover:after:w-full"
                >
                  {t('nav.classes')}
                </a>
              </li>
              <li>
                <a 
                  href="#schedule" 
                  className="text-gray-700 font-medium relative transition-colors duration-150 hover:text-blue-600 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-250 hover:after:w-full"
                >
                  {t('nav.schedule')}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-700 font-medium relative transition-colors duration-150 hover:text-blue-600 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-250 hover:after:w-full"
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 rounded-lg bg-blue-600 text-white font-semibold text-sm transition-colors duration-150 hover:bg-blue-700"
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button and Language Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-lg bg-blue-600 text-white font-semibold text-sm transition-colors duration-150 hover:bg-blue-700"
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="#home" 
                  onClick={closeMenu}
                  className="block text-gray-700 font-medium hover:text-blue-600 transition-colors duration-150"
                >
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a 
                  href="#why-us" 
                  onClick={closeMenu}
                  className="block text-gray-700 font-medium hover:text-blue-600 transition-colors duration-150"
                >
                  {t('nav.whyUs')}
                </a>
              </li>
              <li>
                <a 
                  href="#classes" 
                  onClick={closeMenu}
                  className="block text-gray-700 font-medium hover:text-blue-600 transition-colors duration-150"
                >
                  {t('nav.classes')}
                </a>
              </li>
              <li>
                <a 
                  href="#schedule" 
                  onClick={closeMenu}
                  className="block text-gray-700 font-medium hover:text-blue-600 transition-colors duration-150"
                >
                  {t('nav.schedule')}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={closeMenu}
                  className="block text-gray-700 font-medium hover:text-blue-600 transition-colors duration-150"
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
