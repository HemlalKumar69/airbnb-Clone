const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
        description: String,
        image: {
            type: String,
            default: 
                "https://www.freepik.com/free-photo/palm-tree-beach_3503701.htm#fromView=keyword&page=1&position=3&uuid=c3a92502-e952-48c2-90ec-bbdcf52b4692&query=Beach+Sunset",
        set: (v) => v === "" ?
        "https://www.freepik.com/free-photo/palm-tree-beach_3503701.htm#fromView=keyword&page=1&position=3&uuid=c3a92502-e952-48c2-90ec-bbdcf52b4692&query=Beach+Sunset" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;