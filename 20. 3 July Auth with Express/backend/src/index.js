const app = require('./app.js');

const PORT = process.env.PORT || 5000;

app.listen(3000, () => {
    console.log(`Listening at port:${PORT}`);

})