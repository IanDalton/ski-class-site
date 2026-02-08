import { useTranslation } from 'react-i18next'

export default function WhyUs() {
  const { t } = useTranslation()

  return (
    <section id="why-us" className="py-16 md:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-12">{t('whyUs.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden bg-white rounded-xl shadow-md p-8 transition-all duration-250 hover:-translate-y-2 hover:shadow-xl before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-600 before:to-cyan-400 before:scale-x-0 before:transition-transform before:duration-250 group-hover:before:scale-x-100">
            <div className="text-5xl mb-4 transition-transform duration-250 group-hover:animate-bounce">💰</div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">{t('whyUs.pricing.title')}</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">{t('whyUs.pricing.description')}</p>
            <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-2 px-4 rounded font-semibold text-sm mt-2">{t('whyUs.pricing.highlight')}</div>
          </div>
          <div className="group relative overflow-hidden bg-white rounded-xl shadow-md p-8 transition-all duration-250 hover:-translate-y-2 hover:shadow-xl before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-600 before:to-cyan-400 before:scale-x-0 before:transition-transform before:duration-250 group-hover:before:scale-x-100">
            <div className="text-5xl mb-4 transition-transform duration-250 group-hover:animate-bounce">🏆</div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">{t('whyUs.experience.title')}</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">{t('whyUs.experience.description')}</p>
            <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-2 px-4 rounded font-semibold text-sm mt-2">{t('whyUs.experience.highlight')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
