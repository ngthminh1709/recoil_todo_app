const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String },
    images: { type: Array },
    description: { type: String },
    category: { type: String },
    rating: { type: Object, default: { rate: "", count: 0 } },
    storage: { type: Array },
    discount: { type: Number, min: 0, max: 100, default: 0 },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
