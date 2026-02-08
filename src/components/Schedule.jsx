import { useTranslation } from 'react-i18next'

export default function Schedule() {
  const { t } = useTranslation()

  return (
    <section id="schedule" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-12">{t('schedule.title')}</h2>

        {/* First-Timers (Ages 3 to 5) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-blue-600">{t('schedule.firstTimers.title')}</h3>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6 border-l-4 border-blue-600">
            <p className="text-slate-700 font-semibold mb-2"><strong>{t('schedule.firstTimers.vibe')}</strong> {t('schedule.firstTimers.vibeDesc')}</p>
            <p className="text-slate-600"><strong>{t('schedule.firstTimers.tip')}</strong> {t('schedule.firstTimers.tipText')}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-slate-700">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 font-bold">{t('schedule.table.option')}</th>
                  <th className="px-6 py-4 font-bold">{t('schedule.table.time')}</th>
                  <th className="px-6 py-4 font-bold">{t('schedule.table.happening')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">{t('schedule.firstTimers.morning')}</td>
                  <td className="px-6 py-4">9:00 AM to 12:00 PM</td>
                  <td className="px-6 py-4">{t('schedule.firstTimers.morningDesc')}</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">{t('schedule.firstTimers.afternoon')}</td>
                  <td className="px-6 py-4">1:00 PM to 4:00 PM</td>
                  <td className="px-6 py-4">{t('schedule.firstTimers.afternoonDesc')}</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">{t('schedule.firstTimers.fullDay')}</td>
                  <td className="px-6 py-4">9:00 AM to 3:00 PM</td>
                  <td className="px-6 py-4">{t('schedule.firstTimers.fullDayDesc')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Kids Beginners (Ages 6 to 12) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-blue-600">{t('schedule.kidsBeginner.title')}</h3>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6 border-l-4 border-blue-600">
            <p className="text-slate-700"><strong>{t('schedule.kidsBeginner.vibe')}</strong> {t('schedule.kidsBeginner.vibeDesc')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
              <p className="text-slate-600 mb-2">
                <span className="font-bold text-blue-600">{t('schedule.kidsBeginner.halfDay')}</span> {t('schedule.kidsBeginner.halfDayDesc')}
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
              <p className="text-slate-600 mb-2">
                <span className="font-bold text-blue-600">{t('schedule.kidsBeginner.fullDay')}</span> {t('schedule.kidsBeginner.fullDayDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Teen First-Timers (Ages 13 to 17) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-blue-600">{t('schedule.teens.title')}</h3>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6 border-l-4 border-blue-600">
            <p className="text-slate-700"><strong>{t('schedule.teens.vibe')}</strong> {t('schedule.teens.vibeDesc')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
              <p className="text-slate-600 mb-2">
                <span className="font-bold text-blue-600">{t('schedule.teens.fullDay')}</span> <br/>
                <span className="text-sm text-slate-500">10:00 AM to 4:00 PM</span>
              </p>
              <p className="text-slate-600 text-sm">{t('schedule.teens.fullDayDesc')}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
              <p className="text-slate-600 mb-2">
                <span className="font-bold text-blue-600">{t('schedule.teens.quickStart')}</span> <br/>
                <span className="text-sm text-slate-500">3 Hours</span>
              </p>
              <p className="text-slate-600 text-sm">{t('schedule.teens.quickStartDesc')}</p>
            </div>
          </div>
        </div>

        {/* Adult Beginners (18+) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-blue-600">{t('schedule.adults.title')}</h3>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6 border-l-4 border-blue-600">
            <p className="text-slate-700"><strong>{t('schedule.adults.vibe')}</strong> {t('schedule.adults.vibeDesc')}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-slate-700">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 font-bold">{t('schedule.table.option')}</th>
                  <th className="px-6 py-4 font-bold">{t('schedule.table.time')}</th>
                  <th className="px-6 py-4 font-bold">{t('schedule.table.why')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">{t('schedule.adults.intensive')}</td>
                  <td className="px-6 py-4">9:00 AM to 12:00 PM</td>
                  <td className="px-6 py-4">{t('schedule.adults.intensiveDesc')}</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-semibold">{t('schedule.adults.deepDive')}</td>
                  <td className="px-6 py-4">9:00 AM to 3:00 PM</td>
                  <td className="px-6 py-4">{t('schedule.adults.deepDiveDesc')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Private Lessons */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">{t('schedule.whyPrivate.title')}</h3>
          <p className="text-lg leading-relaxed">{t('schedule.whyPrivate.description')}</p>
        </div>
      </div>
    </section>
  )
}
