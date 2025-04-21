const products = [];
exports.getAddProducts = (req,res,next)=> {
    console.log("inside another middleware");
    res.render('add-product',{
            pageTitle:"Add Product",
            path:"/admin/add-product",
            formsCSS:true,
            productCSS: true,
            activeAddProduct: true
        })
}

exports.postAddProducts = (req,res,next)=> {
    console.log("Product",req.body);
    products.push({'title':req.body.title});
    res.redirect('/');
}

exports.getProducts = (req,res,next)=> {
    console.log("inside another middleware");
    console.log("shop.js products",products)
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop',{
        prods:products,
        pageTitle:'Shop',
        path:'/', 
        hasProducts: products.length>0,
        activeShop: true,
        productCSS: true
    });
}

