const books = [
    {
        title: "Book 1",
        author: "Sam",
        year: 2020,
    },
    {
        title: "Book 2",
        author: "vicky",
        year: 2018,
    },
    {
        title: "Book 3",
        author: "John",
        year: 2005,
    },
    {
        title: "Book 4",
        author: "frank",
        year: 2008,
    },
    {
        title: "Book 5",
        author: "dennis",
        year: 2015,
    },
];

// Filtering books published before year 2010 :
let filteredBooks = books.filter((book) => {
    if(book.year > 2010){
        return book;
    }
});

// console.log(filteredBooks);

// Capitalizing author name of books published before 2010 :

let finalList = filteredBooks.map((book) => {
    book.author = (book.author.charCodeAt(0) < 97 ? book.author.charAt(0) : book.author.charAt(0).toUpperCase()) + book.author.substring(1);
    return book;
})

console.log(finalList);