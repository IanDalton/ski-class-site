import { useState } from 'react'

function App() {
  const [participants, setParticipants] = useState([
    { id: 1, ageRange: '', level: '' }
  ])

  const ageRanges = [
    '3-5 years',
    '6-12 years', 
    '13-17 years',
    '18+ years'
  ]

  const skillLevels = [
    'First-timer (Never skied before)',
    'Beginner (Limited experience)'
  ]

  const addParticipant = () => {
    setParticipants([
      ...participants,
      { id: participants.length + 1, ageRange: '', level: '' }
    ])
  }

  const removeParticipant = (id) => {
    setParticipants(participants.filter(p => p.id !== id))
  }

  const updateParticipant = (id, field, value) => {
    setParticipants(participants.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ))
  }

  const generateWhatsAppMessage = () => {
    const header = "🎿 Keystone Ski Class Registration\n\n"
    
    const participantsList = participants
      .filter(p => p.ageRange && p.level)
      .map((p, idx) => 
        `Person ${idx + 1}:\n` +
        `  Age: ${p.ageRange}\n` +
        `  Level: ${p.level}\n`
      )
      .join('\n')
    
    if (participantsList === '') {
      alert('Please complete all participant information before generating the message.')
      return
    }

    const fullMessage = header + participantsList + '\nPlease confirm availability and pricing. Thank you!'
    
    const encodedMessage = encodeURIComponent(fullMessage)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  const isFormValid = participants.every(p => p.ageRange && p.level)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            ⛷️ Keystone Ski Classes
          </h1>
          <p className="text-gray-600 text-lg">
            Perfect for first-timers and beginners! Sign up your group below.
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            About Our Classes
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Professional instructors with years of experience
            </p>
            <p className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Small group sizes for personalized attention
            </p>
            <p className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Age-appropriate teaching methods
            </p>
            <p className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Safe, fun environment for all skill levels
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Register Participants
          </h2>

          {participants.map((participant, index) => (
            <div key={participant.id} className="mb-6 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-blue-900">
                  Participant {index + 1}
                </h3>
                {participants.length > 1 && (
                  <button
                    onClick={() => removeParticipant(participant.id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {/* Age Range Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age Range
                  </label>
                  <select
                    value={participant.ageRange}
                    onChange={(e) => updateParticipant(participant.id, 'ageRange', e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select age range</option>
                    {ageRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Skill Level Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skill Level
                  </label>
                  <select
                    value={participant.level}
                    onChange={(e) => updateParticipant(participant.id, 'level', e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select skill level</option>
                    {skillLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addParticipant}
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 mb-4"
          >
            + Add Another Participant
          </button>

          <button
            onClick={generateWhatsAppMessage}
            disabled={!isFormValid}
            className={`w-full py-4 px-6 font-bold rounded-lg transition duration-200 text-lg ${
              isFormValid
                ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            📱 Send via WhatsApp
          </button>
          
          {!isFormValid && (
            <p className="text-sm text-gray-600 text-center mt-2">
              Please complete all participant information to send via WhatsApp
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm">
          <p>Questions? Contact us via WhatsApp!</p>
        </div>
      </div>
    </div>
  )
}

export default App
