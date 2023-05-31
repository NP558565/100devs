const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  listName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("List", ListSchema);
