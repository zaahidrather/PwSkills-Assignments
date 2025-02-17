async function fetchData() {
    const toDo = await fetch( "https://jsonplaceholder.typicode.com/todos/1").then(function f(response) {return response.json()});
    const post = await fetch( "https://jsonplaceholder.typicode.com/posts/1").then(function f(response) { return response.json()});
    console.log({
        todo: toDo,
        post: post,
    });

}

fetchData();