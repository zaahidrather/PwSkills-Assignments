const http = require('http');

// Sample data for men and women products
const menProducts = [
    { id: 1, name: "Men's Casual Shirt", category: "Shirts", price: 29.99, sizes: ["S", "M", "L", "XL"], color: "Blue", inStock: true },
    { id: 2, name: "Men's Leather Jacket", category: "Jackets", price: 89.99, sizes: ["M", "L", "XL", "XXL"], color: "Black", inStock: false },
    { id: 3, name: "Men's Running Shoes", category: "Footwear", price: 69.99, sizes: [8, 9, 10, 11], color: "Grey", inStock: true },
    { id: 4, name: "Men's Slim Fit Jeans", category: "Jeans", price: 49.99, sizes: ["S", "M", "L", "XL"], color: "Dark Blue", inStock: true },
    { id: 5, name: "Men's Formal Blazer", category: "Suits & Blazers", price: 119.99, sizes: ["M", "L", "XL"], color: "Navy", inStock: false },
    { id: 6, name: "Men's Cotton T-Shirt", category: "T-Shirts", price: 19.99, sizes: ["S", "M", "L"], color: "White", inStock: true },
    { id: 7, name: "Men's Chino Pants", category: "Pants", price: 39.99, sizes: ["S", "M", "L", "XL", "XXL"], color: "Khaki", inStock: true },
    { id: 8, name: "Men's Casual Sneakers", category: "Footwear", price: 59.99, sizes: [8, 9, 10, 11, 12], color: "White", inStock: true },
    { id: 9, name: "Men's Sports Watch", category: "Accessories", price: 149.99, color: "Black", inStock: true },
    { id: 10, name: "Men's Woolen Scarf", category: "Accessories", price: 25.99, color: "Grey", inStock: true }
  ];
  
  const womenProducts = [
    { id: 1, name: "Women's Floral Dress", category: "Dresses", price: 39.99, sizes: ["XS", "S", "M", "L"], color: "Red", inStock: true },
    { id: 2, name: "Women's Leather Jacket", category: "Jackets", price: 99.99, sizes: ["S", "M", "L", "XL"], color: "Black", inStock: true },
    { id: 3, name: "Women's High-Heel Sandals", category: "Footwear", price: 49.99, sizes: [6, 7, 8, 9], color: "Gold", inStock: true },
    { id: 4, name: "Women's Skinny Jeans", category: "Jeans", price: 44.99, sizes: ["XS", "S", "M", "L", "XL"], color: "Light Blue", inStock: false },
    { id: 5, name: "Women's Blouse", category: "Tops", price: 29.99, sizes: ["S", "M", "L"], color: "White", inStock: true },
    { id: 6, name: "Women's Winter Coat", category: "Outerwear", price: 129.99, sizes: ["M", "L", "XL"], color: "Beige", inStock: false },
    { id: 7, name: "Women's Sports Leggings", category: "Activewear", price: 34.99, sizes: ["XS", "S", "M", "L"], color: "Black", inStock: true },
    { id: 8, name: "Women's Casual Sneakers", category: "Footwear", price: 59.99, sizes: [6, 7, 8, 9], color: "White", inStock: true },
    { id: 9, name: "Women's Crossbody Bag", category: "Accessories", price: 79.99, color: "Brown", inStock: true },
    { id: 10, name: "Women's Woolen Scarf", category: "Accessories", price: 24.99, color: "Grey", inStock: true }
  ];

const port = 1000;
const hostName = 'localhost';

const server = http.createServer((req, res) => {

    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to Men & Women Dummy Data')
    } else if (req.url == '/men') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(menProducts)); // without JSON.stringify -> response isn't sent . It gives error.
    } else if (req.url == '/women') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(womenProducts))
    } else {
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(('Page not found'))
    }
});

server.listen(port, () => {
    console.log(`Server running at ${hostName}:${port}`);
});

