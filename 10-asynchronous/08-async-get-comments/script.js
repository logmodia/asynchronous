/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.querySelector("#run").addEventListener("click", () => {
        
        const asyncfunct = async(resolve)=>{

            const PostResult = await window.lib.getPosts(resolve)

            PostResult.forEach(async(post) => {
                let comment = await window.lib.getComments(post.id)
                post.comment = comment

                console.log(post)
            });
        }
    
        asyncfunct()

    })  


})();
