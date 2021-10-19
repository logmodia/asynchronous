/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: list to template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");

    document.querySelector("#run").addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes");

        // your code here
        let responseInJson = await response.json()
        
        
        for(let element of responseInJson){
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
})();
