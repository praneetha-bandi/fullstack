// Function to fetch joke
async function getJoke() {
  try {
    document.getElementById("error").textContent = ""; // clear old errors
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    
    if (!response.ok) {
      throw new Error("API error");
    }

    const joke = await response.json();
    displayJoke(joke);
  } catch (error) {
    document.getElementById("setup").textContent = "";
    document.getElementById("punchline").textContent = "";
    document.getElementById("error").textContent = "❌ Couldn’t fetch a joke, try again!";
  }
}

// Function to display joke in DOM
function displayJoke(joke) {
  document.getElementById("setup").textContent = joke.setup;
  document.getElementById("punchline").textContent = joke.punchline;
}
