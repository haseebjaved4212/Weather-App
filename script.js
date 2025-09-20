// Handle Enter key press in input field
function handleKeyPress(event) {
  if (event.key === "Enter") {
    getWeather();
  }
}

// Typing animation function
function typeWriter(element, text, speed = 50) {
  return new Promise((resolve) => {
    element.innerHTML = "";
    element.classList.add("typing-text");
    let i = 0;

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.remove("typing-text");
        element.classList.add("typing-text", "no-cursor");
        setTimeout(() => {
          element.classList.remove("typing-text", "no-cursor");
          resolve();
        }, 500);
      }
    }
    type();
  });
}

// Smooth background transition function
function setBackgroundSmooth(imageUrl) {
  const overlay = document.getElementById("backgroundOverlay");

  // Preload the image
  const img = new Image();
  img.onload = function () {
    // Set the new background image
    overlay.style.backgroundImage = `url(${imageUrl})`;

    // Trigger the transition
    overlay.classList.add("active");

    // After transition completes, reset for next transition
    setTimeout(() => {
      overlay.classList.remove("active");
      // Update the body background for fallback
      document.body.style.backgroundImage = `url(${imageUrl})`;
    }, 1500);
  };

  img.src = imageUrl;
}

// Enhanced weather display with animations
function displayWeatherWithAnimation(name, country, temp, condition, wind) {
  const resultBox = document.getElementById("weatherResult");

  // Create weather info container
  const weatherContainer = document.createElement("div");
  weatherContainer.className = "weather-info";

  // Create elements for different parts
  const locationElement = document.createElement("h2");
  const tempElement = document.createElement("p");
  const conditionElement = document.createElement("p");
  const windElement = document.createElement("p");

  tempElement.className = "temperature";
  conditionElement.className = "condition";
  windElement.className = "wind";

  // Add elements to container
  weatherContainer.appendChild(locationElement);
  weatherContainer.appendChild(tempElement);
  weatherContainer.appendChild(conditionElement);
  weatherContainer.appendChild(windElement);

  // Clear previous content and add new container
  resultBox.innerHTML = "";
  resultBox.appendChild(weatherContainer);

  // Animate each element with typing effect
  async function animateWeatherDisplay() {
    await typeWriter(locationElement, `📍 ${name}, ${country}`, 40);
    await new Promise((resolve) => setTimeout(resolve, 200));

    await typeWriter(tempElement, `🌡️ ${temp}°C`, 60);
    await new Promise((resolve) => setTimeout(resolve, 200));

    await typeWriter(conditionElement, `☁️ ${condition}`, 50);
    await new Promise((resolve) => setTimeout(resolve, 200));

    await typeWriter(windElement, `💨 Wind: ${wind} km/h`, 50);
  }

  animateWeatherDisplay();
}

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const resultBox = document.getElementById("weatherResult");
  const button = document.getElementById("weatherBtn");

  if (!city) {
    await typeWriter(resultBox, "⚠️ Please enter a city name.", 30);
    return;
  }

  // Show loading state
  button.innerHTML = '<div class="loading"></div> Loading...';
  button.disabled = true;
  resultBox.innerHTML = "";

  try {
    // Step 1: Get coordinates from city name
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        city
      )}&count=1`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      await typeWriter(resultBox, "❌ City not found. Please try again.", 30);
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Step 2: Get weather using coordinates
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    const weather = weatherData.current_weather;
    const temp = weather.temperature;
    const wind = weather.windspeed;
    const code = weather.weathercode;

    // Step 3: Map weather code to condition
    const conditionText = getWeatherCondition(code);

    // Step 4: Change background with smooth transition
    const backgroundImage = getBackgroundImage(conditionText.toLowerCase());
    setBackgroundSmooth(backgroundImage);

    // Step 5: Display weather with typing animation
    setTimeout(() => {
      displayWeatherWithAnimation(name, country, temp, conditionText, wind);
    }, 300);
  } catch (err) {
    console.error(err);
    await typeWriter(
      resultBox,
      "⚠️ Something went wrong. Please try again.",
      30
    );
  } finally {
    // Reset button state
    button.innerHTML = "Get Weather";
    button.disabled = false;
  }
}

function getWeatherCondition(code) {
  const conditions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    95: "Thunderstorm",
    96: "Thunderstorm + hail",
  };
  return conditions[code] || "Unknown";
}

function getBackgroundImage(condition) {
  // Define background images for different weather conditions with higher quality URLs
  const backgrounds = {
    "clear sky":
      "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=1920&auto=format&fit=crop&q=80",
    "mainly clear":
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&auto=format&fit=crop&q=80",
    "partly cloudy":
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920&auto=format&fit=crop&q=80",
    overcast:
      "https://images.unsplash.com/photo-1419833479618-c595710db9ec?w=1920&auto=format&fit=crop&q=80",
    fog: "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=1920&auto=format&fit=crop&q=80",
    "depositing rime fog":
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&auto=format&fit=crop&q=80",
    "light drizzle":
      "https://images.unsplash.com/photo-1541919329513-35f7af297129?w=1920&auto=format&fit=crop&q=80",
    "moderate drizzle":
      "https://images.unsplash.com/photo-1541919329513-35f7af297129?w=1920&auto=format&fit=crop&q=80",
    "dense drizzle":
      "https://images.unsplash.com/photo-1541919329513-35f7af297129?w=1920&auto=format&fit=crop&q=80",
    "slight rain":
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1920&auto=format&fit=crop&q=80",
    "moderate rain":
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1920&auto=format&fit=crop&q=80",
    "heavy rain":
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=1920&auto=format&fit=crop&q=80",
    "slight snow":
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&auto=format&fit=crop&q=80",
    "moderate snow":
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&auto=format&fit=crop&q=80",
    "heavy snow":
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&auto=format&fit=crop&q=80",
    thunderstorm:
      "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1920&auto=format&fit=crop&q=80",
    "thunderstorm + hail":
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&auto=format&fit=crop&q=80",
    unknown:
      "https://images.unsplash.com/photo-1710761819460-0c3a06821a2b?w=1920&auto=format&fit=crop&q=80",
  };

  // Get the appropriate background image or use default
  return backgrounds[condition] || backgrounds["unknown"];
}

// Legacy function for backward compatibility
function setBackground(condition) {
  const backgroundImage = getBackgroundImage(condition);
  setBackgroundSmooth(backgroundImage);
}
