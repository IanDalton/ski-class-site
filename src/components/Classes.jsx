import { useTranslation } from 'react-i18next'

export default function Classes() {
  const { t } = useTranslation()

  const classes = [
    {
      title: t('classes.firstTimers.title'),
      description: t('classes.firstTimers.description')
    },
    {
      title: t('classes.kidsBeginner.title'),
      description: t('classes.kidsBeginner.description')
    },
    {
      title: t('classes.teens.title'),
      description: t('classes.teens.description')
    },
    {
      title: t('classes.adults.title'),
      description: t('classes.adults.description')
    }
  ]

  return (
    <section id="classes" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-12">{t('classes.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {classes.map((cls, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-8 border-2 border-slate-100 transition-all duration-250 hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <h3 className="text-xl font-bold text-blue-600 mb-4">{cls.title}</h3>
              <p className="text-slate-600 leading-relaxed">{cls.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
