import React, { createContext, useState, useContext } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Try to get language from localStorage
    const saved = localStorage.getItem('language')
    if (saved) return saved
    
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0]
    return browserLang === 'es' ? 'es' : 'en'
  })

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
