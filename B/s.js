// //json
// console.log("===Hour 1: JSON Basics===");

// let student ={
//     name: "Afsha",
//     age: 21,
//     marks: [85,90,78]
// };

// //convert object ->JSON string
// let jsonString = JSON.stringify(student);
// console.log("JSON string:",jsonString);

// //convert JSON string -> object
// let parsedObj = JSON.parse(jsonString);
// console.log("parsed object:", parsedObj);

// let books = [
//   {
//     title: "Book One",
//     price: 15.99,
//     author: "Author A"
//   },
//   {
//     title: "Book Two",
//     price: 22.50,
//     author: "Author B"
//   },
//   {
//     title: "Book Three",
//     price: 18.75,
//     author: "Author C"
//   }
// ];

// console.log(books);


// //Hour 2: AJAX with Fetch

//  console.log("===Hour 2: AJAX with Fetch===");

//  //Fetch sample JSON from API
//  fetch("https://jsonplaceholder.typicode.com/posts/1")
//    .then(response => response.json()) //convert to JSON
//    .then(data => console.log("Fetched Data:", data))
//    .catch(error => console.error("Error:", error));

//     fetch("https://jsonplaceholder.typicode.com/posts/")
//    .then(response => response.json()) //convert to JSON
//    .then(data => console.log("Fetched Data:", data))
//    .catch(error => console.error("Error:", error));



// //ur 3: Display JSON Data on Webpage
// //Fetch all users and show in console + page
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(users => {
//     let output = "<h3>User List</h3><ul>";
//     users.forEach(user => {
//         output += `<li>${user.name} - ${user.email}</li>`;

//     });
//     output += "</ul>";
//     //Append result to page
//     document.body.innerHTML += output;
// });



// Predefined city coordinates
const cityCoords = {
    "bangalore": { lat: 12.97, lon: 77.59 },
    "delhi": { lat: 28.61, lon: 77.23 },
    "mumbai": { lat: 19.07, lon: 72.87 },
    "london": { lat: 51.51, lon: -0.13 },
    "new york": { lat: 40.71, lon: -74.01 }
};

// Event listener for button using jQuery
$(document).ready(function() {
    $("#fetchBtn").click(function() {
        let city = $("#cityInput").val().toLowerCase();

        if (!cityCoords[city]) {
            $("#Weather").html("⚠️ City not in list!");
            return;
        }

        let coords = cityCoords[city];
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

        // jQuery AJAX
        $.ajax({
            url: url,
            method: "GET",
            success: function(data) {
                if (data.current_weather) {
                    $("#Weather").html(`
                        <h3>Weather in ${city}</h3>
                        <p>🌡️ Temp: ${data.current_weather.temperature}°C</p>
                        <p>🍃 Wind: ${data.current_weather.windspeed} km/h</p>
                        <p>⏲️ Time: ${data.current_weather.time}</p>
                    `);
                } else {
                    $("#Weather").html("⚠️ Weather data not available!");
                }
            },
            error: function() {
                $("#Weather").html("⚠️ Error fetching weather data!");
            }
        });
    });
});
