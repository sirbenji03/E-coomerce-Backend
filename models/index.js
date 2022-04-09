// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  foreignKey: "category_id"
});


Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "SET TO NULL"
});


Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tags_on_product'
});


Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'products_with_tag'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
