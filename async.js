const input = document.getElementById("locationInput")
const locName = document.querySelector(".locationName")
const locTemp = document.querySelector(".locationTemp")

async function getLocation(cityName) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=bb8c3bd257604f5e8c412846230109&q=${cityName}`)
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    const cityData = await response.json()

    locName.textContent = cityData.location.name
    locTemp.textContent = cityData.current.temp_c + "°C /" + cityData.current.temp_f + "°F"
  } catch (error) {
    console.error("Error:", error)
  }
}

input.addEventListener("change", () => {
  const cityName = input.value
  getLocation(cityName)
})