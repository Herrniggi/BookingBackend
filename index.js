const express = require("express");
<<<<<<< HEAD
const bodyParser = require("body-parser");
const {MongoClient, ObjectId} = require("mongodb");

const PORT = 8080;

const app = express();
app.use(bodyParser.json());
const DB_Name = "bookings";
const bookings_Collection = "bookings"
const MONGO_URL = ""

MongoClient.connect(MONGO_URL, {useNewUrlParser: true})
    .then(client => {
        console.log("Connection Successful");
        const db = client.db(DB_Name);
        const bookingsCollection = db.collection("bookings")


        //Neue Buchung
        app.post("/api/v1/booking", async (req,res)=> {
            const newBooking = req.body;
                    await bookings_Collection.insertOne(newBooking);
                    res.status(201).json(newBooking);
        })

        app.get("/api/v1/booking", async (req,res) => {
            const bookings = await bookings_Collection.find().toArray();
            res.json(bookings);
        })


        app.listen(8080, () => {console.log("I'm watching you on Port: 8080")})

    })
=======
const PORT = 8080;

const app = express();

app.listen(8080, () => {console.log("Listening on Port 8080")})
>>>>>>> 921971de31f0313b1261ed104bf51953454277b1
