var mongoose = require('mongoose');
var Product = require('./model/product');
var dotenv = require('dotenv');

dotenv.config();

mongoose.connect('mongodb://localhost:27017/' + process.env.DATABASENAME );

var db  =mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'))

db.once('open',function(){
    console.log("Connection Successful!");
    var product1 = new Product({name:'laptop',price: '400',imgUrl: 'public/images/products/images.jpg'});
    product1.save(function(err,product){
        if(err) return console.error(err);
        console.log(product.name+ " has been saved to  the product collection");
    });
})
