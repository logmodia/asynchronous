/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");
    const inputID = document.querySelector("#hero-id")

    function selectedXMen(array, id){
        array.forEach(element => {

            if (element.id === id){
                let cloneTemplate = document.importNode(tpl.content, true)
    
                let name = cloneTemplate.querySelector(".name")
                let alter_ego = cloneTemplate.querySelector(".alter-ego")
                let powers = cloneTemplate.querySelector(".powers")

                name.textContent = element.name
                alter_ego.textContent = element.alterEgo
                powers.textContent = element.abilities

                target.appendChild(cloneTemplate)
            }
            
        });
        
    }

    document.querySelector("#run").addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes");

        let id = parseInt(inputID.value,10)

        if (isNaN(id) || (id < 0) ){
            console.error("The id must be a whole number and not less than 0")
            inputID.value=0

        } else{

            try {
                let responseInJson = await response.json()
                selectedXMen(responseInJson,id)

            } catch (error) {
                console.error(error)
            }

        }

        
        
        /* for(let element of responseInJson){
            let cloneTemplate = document.importNode(tpl.content, true)
    
            let name = cloneTemplate.querySelector(".name")
            let alter_ego = cloneTemplate.querySelector(".alter-ego")
            let powers = cloneTemplate.querySelector(".powers")

            name.textContent = element.name
            alter_ego.textContent = element.alterEgo
            powers.textContent = element.abilities

            target.appendChild(cloneTemplate)
        } */
        
    });

})();
