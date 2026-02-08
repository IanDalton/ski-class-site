import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-blue-900 to-blue-600 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-blue-50 mb-8 opacity-95">{t('contact.subtitle')}</p>
          {/* TODO: Replace 'yourphonenumber' with actual phone number in international format (e.g., 11234567890) */}
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-250 shadow-md hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-lg">
            {t('contact.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
