document.getElementById("getCityInfo").addEventListener("click", async () => {
  const city = document.getElementById("city").value.trim();
  const weatherApiKey = "adb50d836dd046050dbde7e65d66fcea"; // your OpenWeatherMap key
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`;
const imageUrl = `https://source.unsplash.com/400x300/?${city}`;

  try {
    // Fetch weather
    const weatherRes = await fetch(weatherUrl);
    if (!weatherRes.ok) throw new Error("City not found!");
    const weatherData = await weatherRes.json();

    // Display data
    document.getElementById("result").innerHTML = `
      <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
      <p><b>Temperature:</b> ${weatherData.main.temp}°C</p>
      <p><b>Weather:</b> ${weatherData.weather[0].description}</p>
      <img src="${imageUrl}" alt="${city} image">
    `;

    document.getElementById("error").textContent = "";
  } catch (err) {
    document.getElementById("error").textContent = `⚠️ ${err.message}`;
    document.getElementById("result").innerHTML = "";
  }
});
