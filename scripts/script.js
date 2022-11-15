
// function greet (UserName, time = "Day") {
//     // console.log(`Good ${time} ${userName}`) 
// // console.log(`Hello ${userName}`);  
//     return(`Good ${time} ${userName}`) 
// }

// const result = greet("Neda", "Night");
// console.log(result)
// -----------------------------------------------------------
// let greet = function (userName) {
//     // console.log("Hello" + userName);
//     console.log(`Hello ${userName}`);
// };                                         // This one has a semi colon after the }

// let greet = (userName) => {
//     // console.log("Hello" + userName);
//     console.log(`Hello ${userName}`);
// };  
// -----------------------------------------------------------


const unorderedListElement = document.querySelector(".shopping");   // DOM element
function populateList (list)
{
    for (let i = 0; i <list.length ; i++)
    {
        console.log(list[i])  // for each of these items, create and li, append it to unorderedlistElement
        const listItemElement = document.createElement("li");
        listItemElement.textContent = list[i];
        unorderedListElement.appendChild(listItemElement);
    }
}

let shoppingList = ["cheese", "bread", "green pepper"];


populateList(shoppingList); 



