# Keystone Ski Classes Registration

A React-based website for Keystone ski class registration, focused on first-timers and beginners. The application allows users to register multiple participants with different age ranges and skill levels, then generates a WhatsApp message with all the relevant information.

## Features

- 🎿 **User-friendly interface** with Tailwind CSS styling
- 👥 **Multiple participants** - Add as many people as needed for your group
- 📊 **Age range selection** - Choose from 4 different age groups:
  - 3-5 years
  - 6-12 years
  - 13-17 years
  - 18+ years
- 🏔️ **Skill level options** for beginners:
  - First-timer (Never skied before)
  - Beginner (Limited experience)
- 📱 **WhatsApp integration** - Automatically generates a formatted message for wa.me
- ✅ **Form validation** - Ensures all participant information is complete before sending

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/IanDalton/ski-class-site.git
cd ski-class-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Fill in the age range and skill level for the first participant
2. Click "+ Add Another Participant" to add more people to your group
3. Complete the information for all participants
4. Click "📱 Send via WhatsApp" to generate and send your registration request

The app will open WhatsApp (web or mobile) with a pre-formatted message containing all participant details.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing

## License

This project is open source and available under the MIT License.
