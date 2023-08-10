import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/graphql", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const schema = new mongoose.Schema({
    url: String,
    description: String
})

const Link = mongoose.model("link", schema);

export default Link;