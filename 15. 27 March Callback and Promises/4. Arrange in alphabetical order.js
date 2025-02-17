const books = [
    {
        title: "Computer Networks",
        author: "Andrew S. Tanenbaum",
        year: 1981,
    },
    {
        title: "Operating System Concepts",
        author: " Peter B. Galvin",
        year: 1983,
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
    },
    {
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell",
        year: 1995,
    },
    {
        title: "The C Programming Language",
        author: "Dennis M. Ritchie",
        year: 1978,
    },
]

function extractTitles (arr,callback) {
    let titlesArr = [];

    arr.map(function (item) {
        titlesArr.push(item.title)
    })
    callback(titlesArr);
}

function display(titles){
    console.log(titles.sort().join(', '));
}
extractTitles(books,display);