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
        console.clear()
        
        //let id = inputID.value
        let id = parseInt(inputID.value,10)

        if (isNaN(id) || (id < 10) ){
            alert("The id must be a whole number and not less than 1")
            inputID.value = 1

        } else{

            try {
                function fetchdata(){
                    
                }
                const response = await fetch("http://localhost:3000/heroes"+"/"+inputID.value, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    /* body: JSON.stringify({
                        id: inputID.value
                    }), */
                })
                .then((response)=>{
                   
                    if (response.ok){
                        console.log("ok")
                    }else{
                        console.log("ko")
                    }
                })
                
                const response2 = await fetch("http://localhost:3000/heroes");
                const responseInJson = await response2.json();
                console.log(responseInJson)
                
            } catch (error) {
                console.error("Id not found ",error);
            }

            /* try {
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
            } */

        }
        
    });

})();

/*
const asyncPostCall = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                 method: 'POST',
                 headers: {
                   'Content-Type': 'application/json'
                   },
                   body: JSON.stringify({
             // your expected POST request payload goes here
                     title: "My post title",
                     body: "My post content."
                    })
                 });
                 const data = await response.json();
              // enter you logic when the fetch is successful
                 console.log(data);
               } catch(error) {
             // enter your logic for when there is an error (ex. error toast)

                  console.log(error)
                 } 
            }

asyncPostCall()

*/
