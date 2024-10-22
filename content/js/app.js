let searchBoxElem = document.querySelector(".search-box")
let cityElem = document.querySelector(".city")
let dateElem = document.querySelector(".date")
let tempElem = document.querySelector(".temp")
let weatherElem = document.querySelector(".weather")
let windElem = document.querySelector(".wind")

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

searchBoxElem.addEventListener("keyup",event=>{

    if (event.keyCode === 13) {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBoxElem.value}&appid=93c84e2d201829407edff093c6c679f6`)
            .then(data => data.json())
            .then(res=>{
                console.log(res)
                cityElem.innerHTML = res.name

                let now= new Date()
                let day = days[now.getDay()]
                let month = months[now.getMonth()]
                let year = now.getFullYear()

                dateElem.innerHTML = `${day} ${month} ${year}`

                let temp = (res.main.temp)-273.15;

                tempElem.innerHTML = `${Math.round(temp)}°C`
                weatherElem.innerHTML = `${res.weather[0].main}`
                windElem.innerHTML = `Wind Speed : ${res.wind.speed} m/s`

            })
             .catch(error => console.error('Error:', error));
        }
    })