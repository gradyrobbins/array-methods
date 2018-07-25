console.log("hello array-methods.js")
console.log("here are a few planets :")

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
Use the forEach method to add the name of each planet
to a section element in your HTML with an id of "planets".
Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets");

// thanks, Klaus:
planets.forEach((item) => {
    let planetString = " this is planet " + item;
    console.log(planetString);
    planetEl.innerHTML += `<li>${planetString}</li>`
})

// planetEl.innerHTML = planets.forEach((item, index) => {
    //     let planetsList = index + 1 + ` ${item}`;
    //     console.log(planetsList);
    // });;
    
    
    // planets.forEach((item, index) => {
        //     let planetsList = index + 1 + ` ${item}`;
        //     console.log(planetsList);
        // });
        
        // ul and li maker below, compliments of Tania Rascia local storage tutorial
        // const ul = document.querySelector('ul');
        
        // const liMaker = (text) => {
            //     const li = document.createElement('li');
            //     li.textContent = text;
            //     ul.appendChild(li);
            //   }
            
            // liMaker(Earth);
            
            // Create an unordered list element
            // const list = document.createElement('ul')
            
            // Create a list item for our list
            // const listItem = document.createElement('li')
            // listItem.className = "president"
            // listItem.textContent = "George Bush"
            
            // Put the list item on the unordered list
            // list.appendChild(listItem)
            
            
            
            
            
            /*
            Use the map method to create a new array where the
            first letter of each planet is capitalized. Use the
            `toUpperCase()` method on strings.
            
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
            */
           /*
           The map method lets you create a -->>new array<<-- after
           executing some logic on each item in the original
           array
           */
          
          //  below courtesy of Klaus and Dejan and Stack Overflow
          const bloop = planets.map(function(arguement) {
              return arguement.charAt(0).toUpperCase() + arguement.slice(1);
            })
            
            
            console.log("capitalizedFirstLetter", bloop)
            planetEl.innerHTML += `<li>${bloop}</li>`
            
            // more from Klaus, sent late via Slack:
            let newMapArray = planets.map((planet) => {
                return planet.charAt(0).toUpperCase() + planet.slice(1)
            })
            console.log(newMapArray)
            
            
            /*
            Use the filter method to create a new array that
            contains planets with the letter 'e'. Use the `includes()`
            method on strings.
            
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
            */
           
           /*
           The filter method ALSO creates a new array, which will
           be populated with items from the original array
           that match a certain criteria.
           */
          

        // the below function resulted from a stack overflow search, changed the variables.  it gets the planets with an E to pop up in an alert box   
        //   weather = ["sun", "clouds", "rain", "hail", "snow"];
        //   const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
          
          planets.forEach(function(arrayItem,arrayIndex,array){
              if(array[arrayIndex].match('e')){
                  alert(array[arrayIndex]);
                }
            })


// let planetsWith_E = planets.filter((supertaco) => {
    
//     planets.forEach(function(arrayItem,arrayIndex,planets){
//         if(planets[arrayIndex].match('e')){
//             return (planets[arrayIndex])
//         }
//  });
 
//  console.log("Planets that have an E in them", planetsWith_E);
 



// Use the reduce method to create a sentence from the words in the following array
// const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
