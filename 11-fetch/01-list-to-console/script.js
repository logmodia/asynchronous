/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: list to console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("#run").addEventListener("click", async () => {
        
        // Steps :
        // 1. read the Fetch documentation
        // 2. you must convert the response in a json format
        // 3. display the response in the console
        // NB: here we use an async await function, you can convert it 
        //     in a Promise or callbacks functions if you prefer
        
        const response = await fetch("http://localhost:3000/heroes");
        let responseInJson = await response.json()

        responseInJson.forEach(element => {
            console.log(`Name : ${element.name}, Alter ego : ${element.alterEgo}, Powers : ${element.abilities}`)
            
        });
        
        //Promise``
        //fetch("http://localhost:3000/heroes").then((response) => response.json().then(x=>console.log(x)))

        /* console.log(
            fetch("http://localhost:3000/heroes", (response)=>console.log(response.json(x=>console.log(x))))

        ) */
    });

})();
