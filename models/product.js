
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

// Return model
module.exports = restful.model('Products', productSchema);


// for (var i = 1; i < 51; i++) {
//
//     var element = driver.findElement(By.xpath('//*[@id="dataList"]/table/tbody/tr[' + i + ']/td[1]/a'));
//     driver.executeScript("arguments[0].click();", element);
//
// }
