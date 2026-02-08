import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()
  const [currentResort, setCurrentResort] = useState(0)
  const [displayedText, setDisplayedText] = useState(0)
  const [isClearing, setIsClearing] = useState(false)

  const coloradoResorts = [
    'Keystone',
    'Vail',
    'Snowmass',
    'Aspen',
    'Beaver Creek',
    'Loveland',
    'Winter Park',
    'Telluride',
    'Steamboat',
    'Crested Butte'
  ]

  // Typing and clearing effect
  useEffect(() => {
    const currentResortName = coloradoResorts[currentResort]
    
    if (!isClearing && displayedText < currentResortName.length) {
      // Typing phase
      const typingInterval = setTimeout(() => {
        setDisplayedText(displayedText + 1)
      }, 50)
      
      return () => clearTimeout(typingInterval)
    } else if (!isClearing && displayedText === currentResortName.length) {
      // When typing is done, wait 2.5 seconds then start clearing
      const delayInterval = setTimeout(() => {
        setIsClearing(true)
      }, 2500)
      
      return () => clearTimeout(delayInterval)
    } else if (isClearing && displayedText > 0) {
      // Clearing phase - delete one character at a time
      const clearingInterval = setTimeout(() => {
        setDisplayedText(displayedText - 1)
      }, 50)
      
      return () => clearTimeout(clearingInterval)
    } else if (isClearing && displayedText === 0) {
      // Move to next resort
      const nextInterval = setTimeout(() => {
        setCurrentResort((prev) => (prev + 1) % coloradoResorts.length)
        setIsClearing(false)
      }, 300)
      
      return () => clearTimeout(nextInterval)
    }
  }, [displayedText, currentResort, isClearing])

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-400 py-20 min-h-[400px] flex items-center">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-8 text-9xl opacity-15 -rotate-12">⛷️</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Learn to Ski with the Best at <span className="resort-name-box">{coloradoResorts[currentResort].slice(0, displayedText)}</span></h2>
          <p className="text-lg lg:text-xl text-blue-50 mb-8 opacity-95 animate-fadeInUp" style={{animationDelay: '0.2s'}}>{t('hero.subtitle')}</p>
          <a href="#contact" className="inline-block bg-amber-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-250 shadow-md hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-lg">
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
