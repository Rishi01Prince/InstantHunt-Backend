const mongoose = require('mongoose')
const mongoURI = 'mongodb://rishi01prince:9905382307@ac-kqth4a6-shard-00-00.dzada0m.mongodb.net:27017,ac-kqth4a6-shard-00-01.dzada0m.mongodb.net:27017,ac-kqth4a6-shard-00-02.dzada0m.mongodb.net:27017/InstantHuntData?ssl=true&replicaSet=atlas-13fvbx-shard-0&authSource=admin&retryWrites=true&w=majority'

console.log("Hello");


//making exportable function
const mongoDB = async () => {
    //Connecting to the mongoose

    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {

        if (err) console.log("---" + err)
        else {


            console.log("connected to mongo")
            
            //Fetchinng the Vechicle Data Collection from Instant Hunt Database
            const vechicleCollection = await mongoose.connection.db.collection("VechicleData");

            //Saara data nikal rahe hai :-
            vechicleCollection.find({}).toArray( async function (err, data) { //callback function

                //Fetchinng the VechicleCatetegory Collection from Instant Hunt Database
                const VechicleRelated = await mongoose.connection.db.collection("VechicleCategory");

                VechicleRelated.find({}).toArray(async function (err, catData) {
                    // callback(err, data, Catdata);
                    if (err) {
                        console.log(err);
                    }
                    else {
                        global.VechicleData = data;
                        global.VechicleCategory = catData;
                        // console.log(global.VechicleCategory);
                    }
                })

            });
        }
    });
};

module.exports = mongoDB();
