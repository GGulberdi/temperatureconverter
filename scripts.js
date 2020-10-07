console.log('It is working');

// get an input from a user for celcuis degree

const celsius = prompt('Enter the celcius') * 1;

// calculate Kalvin degee based on Celsius given

let kelvin = celsius + 273.15;
//Round the result to he nearest intiger number
// to kelvin = Math.round(kelvin)
kelvin = kelvin.toFixed(2);
//print the result (calcuaated to Kelvin) to user on console
 alert(`${celsius} Celcius degree equals ${kelvin} Kelvin`);
