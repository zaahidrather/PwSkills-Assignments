let list = [
    '➡️HTML and Semantics',
    '➡️Starting with CSS',
    '➡️Working Template',
    '➡️Mobile responsive webpages',
    '➡️Grid and Flex-box in CSS',
    '➡️Projects using HTML & CSS',
    '➡️Version Control and Git',
    '➡️Getting Started with JavaScript',
    '➡️Advance JavaScript',
    '➡️Working with DOM',
    '➡️Making Projects using HTML, CSS and JavaScript',
    '➡️Understanding Fundamental of Computer Science',
    '➡️Getting Started with Database',
    '➡️Understanding the Database',
    '➡️Starting with NodeJS and Express',
    '➡️Understanding React and its Fundamentals',
    '➡️Understanding Hooks and Routers',
    '➡️Starting and Completing Foll Fledge Projects',
];

let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let i = 0;

btn.addEventListener("click",addItems);
function addItems(){
    if(i < list.length){
        let li = document.createElement("li");
        let node = document.createTextNode(list[i]);
        li.appendChild(node);
        ol.appendChild(li);
        i+=1;
    }
    else
        alert("All items have been added.")
}