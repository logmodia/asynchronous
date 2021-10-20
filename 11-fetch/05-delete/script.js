/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: delete an element
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const inputID = document.querySelector("#hero-id")

    document.querySelector("#run").addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes");

        let id = parseInt(inputID.value,10)

        if (isNaN(id) || (id < 1) ){
            alert("The id must be a whole number and not less than 1")
            inputID.value = 1

        } else{

            try {
                let responseInJson = await response.json()
                let copie_responseInJson = [...responseInJson]

                console.log("-----------befor delete -------------------------")
                console.log(copie_responseInJson)

                let ToDelete =responseInJson[id-1]

                if(ToDelete===undefined){
                    alert("This id does not correspond to any X-Men")
                }else{
                    console.log("-----------After delete -------------------------")
                    responseInJson.splice([id-1],1)
                    console.log(responseInJson)
                }

            } catch (error) {
                console.error(error)
            }

        }
        
    });

})();
