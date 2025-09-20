# 🌤️  Weather App

**A stunning weather application that brings weather information to life with smooth typing animations and dynamic background transitions that change based on real-time weather conditions.**

> Experience weather like never before with glassmorphism design, typewriter effects, and seamless visual transitions that make checking the weather a delightful experience.

--- 


[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)]()
[![API](https://img.shields.io/badge/API-Open--Meteo-blue)]()

---

## 📋 Quick Overview

**🎯 What it does:** Get real-time weather information for any city worldwide with beautiful visual effects

**✨ Key Features:**

- 🎭 **Smooth typing animations** for weather display
- 🖼️ **Dynamic backgrounds** that change with weather conditions
- 🎨 **Glassmorphism UI** with blur effects and modern design
- ⌨️ **Keyboard support** (Enter key to search)
- 📱 **Fully responsive** design for all devices
- ⚡ **No setup required** - just open and use

**🚀 Perfect for:** Showcasing modern web development skills, learning animations, or simply enjoying a beautiful weather experience.

## ✨ Features

### 🎨 **Dynamic Visual Effects**

- **Smooth Background Transitions**: Background images change dynamically with 1.5-second smooth transitions based on current weather conditions
- **Typing Animations**: Weather information appears with realistic typewriter effects and blinking cursors
- **Glassmorphism Design**: Modern UI with backdrop blur effects and translucent containers
- **High-Quality Backgrounds**: 1920px resolution images for crisp, beautiful visuals

### 🌡️ **Weather Features**

- **Real-time Weather Data**: Fetches current weather information using the Open-Meteo API
- **City Search**: Search for weather information by city name with Enter key support
- **Comprehensive Info**: Displays temperature, weather conditions, and wind speed
- **Global Coverage**: Works for cities worldwide

### 🎯 **User Experience**

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Loading Animations**: Beautiful spinning loader during data fetch
- **Error Handling**: Smooth animated error messages
- **Interactive Elements**: Hover effects, focus animations, and smooth transitions
- **Keyboard Navigation**: Full Enter key support for quick searches

### 🎭 **Animation Details**

- **Sequential Typing**: Each weather element appears one after another
- **Variable Speed**: Different typing speeds for different content types
- **Slide-in Effects**: Weather container slides up smoothly
- **Color-coded Display**: Temperature, conditions, and wind in different colors
- **Emoji Integration**: Weather icons for enhanced visual appeal

## 🌍 How to Use

1. **Enter City Name**: Type any city name in the search field
2. **Search**: Press **Enter** or click the "Get Weather" button
3. **Watch the Magic**: Enjoy the smooth background transition and typing animations
4. **View Results**: See temperature, conditions, and wind speed with beautiful effects

## 🚀 Live Preview

[Weather App]( https://haseebjaved4212.github.io/Weather-App/)

### 🎆 **Animation Experience**

- 📍 **Location** appears first with typing effect
- 🌡️ **Temperature** follows with smooth animation
- ☁️ **Weather condition** types out beautifully
- 💨 **Wind information** completes the display

### 🌏 **Try These Cities for Different Experiences**:

- **London** - Experience cloudy/rainy backgrounds with smooth transitions
- **Dubai** - Watch clear sky backgrounds with bright animations
- **Tokyo** - See partly cloudy effects with dynamic changes
- **Moscow** - Enjoy snowy landscapes with cool transitions
- **Singapore** - Experience thunderstorm backgrounds with dramatic effects
- **Reykjavik** - See foggy atmospheres with mysterious transitions



### 🎭 **Visual Effects by Weather Type**:

| Weather Condition | Background Theme          | Animation Style         |
| ----------------- | ------------------------- | ----------------------- |
| ☀️ Clear/Sunny    | Bright sunny skies        | Fast, cheerful typing   |
| ☁️ Cloudy         | Dramatic cloud formations | Steady, calm typing     |
| 🌧️ Rainy          | Rain-soaked landscapes    | Gentle, rhythmic typing |
| ❄️ Snowy          | Winter wonderlands        | Slow, peaceful typing   |
| ⛈️ Thunderstorms  | Stormy, dramatic skies    | Bold, dynamic typing    |
| 🌫️ Foggy          | Misty, mysterious scenes  | Mysterious, slow typing |

## 🚀 Technologies Used

- **HTML5**: Structure and semantic markup with enhanced accessibility
- **CSS3**: Advanced styling with:
  - Glassmorphism effects and backdrop filters
  - Smooth transitions and keyframe animations
  - Responsive design with modern CSS Grid/Flexbox
  - Custom loading spinners and hover effects
- **JavaScript (ES6+)**:
  - Async/await for API interactions
  - Dynamic DOM manipulation
  - Custom typing animation engine
  - Smooth background transition system
- **Open-Meteo API**: Free, reliable weather data source
- **Unsplash**: High-quality 1920px background imagery

## 💿 Installation & Setup

### 📁 **Quick Start**

1. **Download** or clone this repository to your local machine
2. **Navigate** to the project directory
3. **Double-click** `index.html` to open in your default browser
4. **Start searching** for cities and enjoy the animations!

### 💻 **For Development**

1. Open the project folder in your preferred code editor
2. Modify `script.js` for functionality changes
3. Update CSS in `index.html` for styling modifications
4. Test changes by refreshing the browser

**No additional dependencies, build steps, or server setup required!**

## Project Structure

```
Weather App/
│
├── index.html          # Main HTML file
├── index.css           # Styling file
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## Usage

1. **Open** the application in your web browser
2. **Enter** a city name in the input field
3. **Click** "Get Weather" button
4. **View** the weather information and enjoy the dynamic background

### Example Cities to Try:

- London
- New York
- Tokyo
- Paris
- Sydney
- Mumbai
- Karachi

## API Reference

### Open-Meteo APIs Used

1. **Geocoding API**: `https://geocoding-api.open-meteo.com/v1/search`

   - Converts city names to coordinates
   - Parameters: `name` (city name), `count` (number of results)

2. **Weather API**: `https://api.open-meteo.com/v1/forecast`
   - Fetches current weather data
   - Parameters: `latitude`, `longitude`, `current_weather=true`

## Weather Condition Mapping

The app supports the following weather conditions with corresponding weather codes:

| Code  | Condition                | Background Theme      |
| ----- | ------------------------ | --------------------- |
| 0     | Clear sky                | Bright sunny sky      |
| 1     | Mainly clear             | Sunny with few clouds |
| 2-3   | Partly cloudy / Overcast | Cloudy skies          |
| 45-48 | Fog conditions           | Misty/foggy scenes    |
| 51-55 | Drizzle (light to dense) | Light rain imagery    |
| 61-65 | Rain (slight to heavy)   | Rainy weather scenes  |
| 71-75 | Snow (slight to heavy)   | Snowy landscapes      |
| 95-96 | Thunderstorm             | Stormy weather        |

## 🎨 Customization

### 🖼️ **Changing Background Images**

To customize background images, modify the `getBackgroundImage()` function in `script.js`:

```javascript
const backgrounds = {
  "clear sky": "your-custom-sunny-image-url",
  rainy: "your-custom-rain-image-url",
  snowy: "your-custom-snow-image-url",
  // ... add more conditions
};
```

### 🎨 **Styling Modifications**

Update the CSS in `index.html` to customize:

- **Colors & Fonts**: Change color schemes and typography
- **Animation Speed**: Modify transition durations and typing speeds
- **Container Styling**: Adjust glassmorphism effects and shadows
- **Responsive Breakpoints**: Update mobile layouts
- **Button Appearance**: Customize gradients and hover effects

### ⚙️ **Animation Customization**

Adjust typing speeds in the `typeWriter()` function:

```javascript
// Fast typing (30ms per character)
await typeWriter(element, text, 30);

// Slow typing (80ms per character)
await typeWriter(element, text, 80);
```

## 🌐 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Privacy & Security

- **No API Key Required**: Uses free, public APIs
- **No Data Storage**: No user data is stored locally or remotely
- **HTTPS Ready**: All API calls use secure HTTPS connections

## 🔧 Troubleshooting

### 🚫 **Common Issues & Solutions**:

1. **"City not found" error**

   - ✅ Check spelling of city name
   - ✅ Try using full city name or including country (e.g., "Paris, France")
   - ✅ Verify internet connection

2. **Weather data not loading**

   - ✅ Check internet connection stability
   - ✅ Ensure Open-Meteo APIs are accessible
   - ✅ Try refreshing the page

3. **Background not changing smoothly**

   - ✅ Verify image URLs are accessible
   - ✅ Check browser console for errors (F12)
   - ✅ Ensure you have a stable internet connection for image loading

4. **Typing animation issues**

   - ✅ Clear browser cache and reload
   - ✅ Ensure JavaScript is enabled in your browser
   - ✅ Try a different browser (Chrome recommended)

5. **Mobile responsiveness issues**
   - ✅ Ensure you're using an updated browser
   - ✅ Try rotating your device for better experience
   - ✅ Clear browser cache if layout seems broken

## 🚀 Future Enhancements

Potential features for future versions:

### 🎆 **Animation & Visual**

- [ ] Weather-specific particle effects (rain drops, snow flakes)
- [ ] 3D weather icons with CSS transforms
- [ ] Aurora effects for extreme weather
- [ ] Seasonal theme variations

### 📈 **Data & Functionality**

- [ ] 5-day animated weather forecast
- [ ] Hourly weather timeline with smooth scrolling
- [ ] Geolocation support with auto-detection
- [ ] Unit conversion (Celsius/Fahrenheit) with smooth toggles
- [ ] Weather alerts and notifications

### 📋 **User Experience**

- [ ] Favorite cities list with quick access
- [ ] Search history with suggestions
- [ ] Weather maps integration
- [ ] Dark/light theme toggle with smooth transitions
- [ ] Voice search integration
- [ ] Offline mode with cached weather data

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available for Learning and use.

## Support

If you encounter any issues or have questions:

- Check the troubleshooting section above
- Open an issue in the repository
- Review the code comments for implementation details

## 🙏 Acknowledgments

- **Open-Meteo**: For providing free weather API services
- **Unsplash**: For high-quality background images
- **Font**: Segoe UI for clean typography

## 🔍 **Technical Specifications**

### 🎭 **Animation System**

- **Typing Speed**: 30-80ms per character (customizable)
- **Background Transition**: 1.5-second smooth fade
- **Image Preloading**: Prevents transition lag
- **Sequential Animation**: Staged information display

### 🖼️ **Image Quality**

- **Resolution**: 1920px high-definition backgrounds
- **Format**: Optimized WebP with JPEG fallback
- **Compression**: Balanced quality vs. loading speed
- **CDN**: Unsplash reliable image delivery

### 📱 **Performance**

- **Loading Time**: <2 seconds on average connection
- **Image Caching**: Browser-optimized caching
- **Responsive**: Adapts to all screen sizes
- **Lightweight**: Minimal dependencies

---

**Built with ❤️, modern web technologies, and attention to detail**

_Experience weather like never before with smooth animations and stunning visuals!_
