/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.querySelector("#run").addEventListener("click", () => {

        const asyncfunct = async(resolve,reject)=>{
            try {
                const personsTable = await window.lib.getPersons(resolve)
                console.log(personsTable)
            } catch (error) {
                console.error(error)
            }

            //It walks also
            /* const personsTable = await window.lib.getPersons((resolve,reject)=>{
                if (resolve){
                    return console.log(resolve)
                }else if(reject){
                    return console.error(reject)
                }
            })
            console.log(personsTable) */
            
        }

        asyncfunct()

    });

})();
