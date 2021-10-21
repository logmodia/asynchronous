/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: add an element
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let heroName = document.querySelector("#hero-name");
    let alterego = document.querySelector("#hero-alter-ego");
    let heroPower = document.querySelector("#hero-powers");
    let firstLoad = false;
    let responseInJson;
    var newID;

    document.querySelector("#run").addEventListener("click", async () => {
        console.clear();

        if (heroName.value === "" || alterego.value === "" || heroPower.value === "") {

            alert("Each field must be filled in");

        } else {

            let arrPower = heroPower.value.split(/\s*(?:,|$)\s*/);

            try {
                firstLoad = false;

                async function refresh() {
                    const response = await fetch("http://localhost:3000/heroes");
                    responseInJson = await response.json();

                    newID = responseInJson.length;
                    
                    if (firstLoad == true) {
                        console.log(responseInJson);
                    }
                    
                    firstLoad = true;
                }
                refresh();
                newID +=1

                const response = await fetch("http://localhost:3000/heroes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: newID,
                        name: heroName.value,
                        alterEgo: alterego.value,
                        abilities: arrPower,
                    }),
                });
                //const data = await response.json();
                refresh();
                
            } catch (error) {
                console.error(error);
            }

            // responseInJson.push({id:newID, name:heroName.value, alterEgo:alterego.value, abilities : arrPower})
            // console.log(responseInJson)
        }
    });

})();
