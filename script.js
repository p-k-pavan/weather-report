document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById("submit");
    const dropdown = document.getElementById("dropdown");
    const cityName = document.getElementById("cityName");
    const weatherProps = ['Cloud_pct', 'Temp', 'Feels_like', 'Humidity', 'Min_temp', 'Max_temp', 'Wind_speed', 'Sunrise', 'Sunset'];

    async function fetchData(city) {
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '74dd44de4cmsh53ec58e5e16cf1ep1e0490jsnaa573c8f63e9',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();

            weatherProps.forEach(prop => document.getElementById(prop).textContent = data[prop.toLowerCase()]);
            
           
            cityName.textContent = city + "-";
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const input = document.getElementById("city").value;
        if (input) {
            fetchData(input);
        } else {
            console.log('Please enter a city name.');
        }
    });

    dropdown.addEventListener('change', function(e) {
        e.preventDefault();
        const input = dropdown.value;
        if (input !== "Select a City") {
            fetchData(input);
        } else {
            console.log('Please select a city.');
        }
    });

   
});
