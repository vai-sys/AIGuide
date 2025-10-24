# 🌍 AI Travel Planner

An intelligent travel planning application that generates personalized day-by-day itineraries using AI, provides real-time weather updates, and offers curated destination suggestions. Built with React, Node.js, Google Gemini AI, and OpenWeather API.



## 📸 Screenshots

### Custom Itinerary Builder
<img width="880" height="766" alt="Screenshot 2025-10-24 082357" src="https://github.com/user-attachments/assets/766c9887-24d7-49a4-a229-35a7552f23bb" />


### Suggested Trips Gallery
<img width="1895" height="850" alt="Screenshot 2025-10-24 082316" src="https://github.com/user-attachments/assets/8cddddd8-ef43-43fb-8786-5f3da4efe0ad" />


### Generated Itinerary with Weather
<img width="1900" height="862" alt="Screenshot 2025-10-24 082337" src="https://github.com/user-attachments/assets/e9305cc6-16f9-41a1-9d4e-0b0af465bdac" />



---

## ✨ Features

### 🤖 AI-Powered Itinerary Generation
- Generate personalized day-by-day travel plans using Google Gemini AI
- Custom itineraries based on destination, duration, and interests
- Intelligent activity suggestions with local food recommendations
- Travel tips and highlights for each destination

### 🌤️ Real-Time Weather Integration
- Live weather data from OpenWeather API
- Temperature, humidity, and wind speed information
- Weather conditions display for better trip planning
- Automatic weather fetch after itinerary generation

### 🗺️ Curated Destination Suggestions
- 6 handpicked premium destinations
- Pre-defined trip details (duration, best time to visit)
- Key highlights and attractions
- One-click trip planning from suggestions
- Beautiful card-based UI with categories

### 🎨 Modern User Interface
- Beautiful gradient design with smooth animations
- Tab-based navigation (Build Itinerary / Suggested Trips)
- Responsive design (mobile, tablet, desktop)
- Loading states and error handling
- Interactive hover effects

---

## 🚀 Tech Stack

### Frontend
- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Beautiful icons
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Google Generative AI** - AI itinerary generation
- **OpenWeather API** - Weather data
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

You'll also need API keys for:
- [Google Gemini AI](https://ai.google.dev/) - For itinerary generation
- [OpenWeather API](https://openweathermap.org/api) - For weather data

---

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/vai-sys/AIGuide.git
cd AIGuide
```

### 2. Backend Setup

#### Navigate to backend directory
```bash
cd backend
```

#### Install dependencies
```bash
npm install
```

#### Create `.env` file
```bash
touch .env
```

#### Add your API keys to `.env`
```env
GEMINI_API_KEY=your_gemini_api_key_here
OPENWEATHER_API_KEY=your_openweather_api_key_here
PORT=5000
```

#### Start the backend server
```bash
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

#### Open a new terminal and navigate to frontend directory
```bash
cd frontend
```

#### Install dependencies
```bash
npm install
```

#### Start the development server
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` 

---

## 📁 Project Structure

```
ai-travel-planner/
├── backend/
│   ├── controllers/
│   │   ├── itineraryController.js    # AI itinerary generation logic
│   │   └── weatherController.js      # Weather API integration
│   ├── routes/
│   │   ├── itineraryRoutes.js        # Itinerary endpoints
│   │   └── weatherRoutes.js          # Weather endpoints
│   ├── .env                           # Environment variables (create this)
│   ├── index.js                      # Express server setup
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── TravelItineraryApp.jsx  # Main app component
│   │   ├── App.jsx                      # Root component
│   │                       
│   ├── index.html
│   ├
│   └── package.json
│
└── README.md
```

---

## 🔌 API Endpoints

### Generate Itinerary
```http
POST /api/itinerary/generate
Content-Type: application/json

{
  "destination": "Tokyo, Japan",
  "days": 5,
  "interests": "Food, Culture, Technology"
}
```

**Response:**
```json
{
  "itinerary": "Day 1: Arrive in Tokyo...\nDay 2: Visit Shibuya..."
}
```

### Get Weather
```http
GET /api/weather?city=Tokyo
```

**Response:**
```json
{
  "city": "Tokyo",
  "temperature": 22.5,
  "description": "clear sky",
  "humidity": 65,
  "windSpeed": 3.5
}
```

---

## 🎯 Usage Guide

### Building a Custom Itinerary

1. **Navigate to "Build Itinerary" tab**
2. **Fill in the form:**
   - Destination (e.g., "Paris, France")
   - Number of days (1-30)
   - Interests (optional, e.g., "Food, Museums, Shopping")
3. **Click "Generate Itinerary"**
4. **View your personalized plan** with day-by-day activities and weather

### Using Suggested Trips

1. **Navigate to "Suggested Trips" tab**
2. **Browse 6 curated destinations:**
   - Bali, Indonesia
   - Tokyo, Japan
   - Swiss Alps, Switzerland
   - Santorini, Greece
   - Maldives
   - Dubai, UAE
3. **Click "Plan This Trip"** on any destination
4. **Form auto-fills** with destination details
5. **Generate customized itinerary** with AI

---

## 🎨 Customization

### Adding New Suggested Trips

Edit `frontend/src/components/TravelItineraryApp.jsx`:

```javascript
const suggestedTrips = [
  {
    id: 7,
    destination: "Paris, France",
    image: "🗼",
    duration: "5-7 days",
    bestTime: "April - October",
    highlights: ["Eiffel Tower", "Louvre Museum", "French Cuisine", "Seine River"],
    description: "Experience the city of lights with world-class art, cuisine, and romance.",
    category: "City & Culture",
    icon: Building2,
  },
  // Add more destinations...
];
```



### Customizing AI Prompts

Edit `backend/controllers/itineraryController.js`:

```javascript
const prompt = `Create a ${days}-day travel itinerary for ${destination}. 
Interests: ${interests || "general sightseeing"}. 
Include 3-4 activities per day, local food recommendations, and travel tips.
Format with clear Day 1, Day 2, etc. headers.`;
```

---

## 🔐 Environment Variables

### Backend `.env` Configuration

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `GEMINI_API_KEY` | Google Gemini AI API key | Yes | `AIzaSyC...` |
| `OPENWEATHER_API_KEY` | OpenWeather API key | Yes | `a1b2c3d4...` |
| `PORT` | Backend server port | No | `5000` |

### Getting API Keys

#### Google Gemini AI
1. Visit [Google AI Studio](https://ai.google.dev/)
2. Sign in with your Google account
3. Click "Get API Key"
4. Create a new project or select existing
5. Copy your API key

#### OpenWeather API
1. Visit [OpenWeather](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to API keys section
4. Generate a new API key
5. Copy your API key (may take a few hours to activate)

---



---

## 🐛 Troubleshooting

### Common Issues

#### Backend won't start
```bash
# Check if port 5000 is already in use
lsof -i :5000
# Kill the process or change PORT in .env
```

#### API Key Errors
```
Error: Failed to generate itinerary
```
- Verify `GEMINI_API_KEY` is correct in `.env`
- Check API key has proper permissions
- Ensure you haven't exceeded API quota

#### Weather API 404 Error
```
Error: Failed to fetch weather
```
- Verify `OPENWEATHER_API_KEY` in `.env`
- Check if API key is activated (takes ~2 hours for new keys)
- Try a different city name format (e.g., "London,UK")

#### CORS Issues
```
Access to fetch blocked by CORS policy
```
- Ensure backend is running on port 5000
- Check `cors()` middleware is enabled in `server.js`
- Verify frontend is calling correct backend URL

#### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```







## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) - AI itinerary generation
- [OpenWeather API](https://openweathermap.org/) - Weather data
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [React](https://react.dev/) - UI library

---





<div align="center">
  <p>Made with ❤️ and ☕</p>
  <p>Happy Traveling! 🌍✈️</p>
</div>
