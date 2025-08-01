const fs = require('fs');
const path = require('path');
module.exports = class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
        const p = path.join(
            path.dirname(require.main.filename),
            'data',
            'products.json');
        fs.readFile(p, (err,fileContent) => {
            console.log("file", fileContent);
            let products = [];
            if(!err){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        });
    }

    static fetchAll(cb){
        const p = path.join(
            path.dirname(require.main.filename),
            'data',
            'products.json');
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
}