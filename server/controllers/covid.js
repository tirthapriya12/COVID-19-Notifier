const StateMap = require("./../services/stateMap");
const axios = require("axios");
const Delta = require("./../model/Delta");

class CovidController {

    constructor() {

    }
    onCovidData() {

    }

    init(collection) {

        collection.find({}).toArray((err, data) => {
            console.log(data);
            if (!data) {
                collection.insert({
                    total_case: [],
                    Delta: { lastUpdated: Date.now(), delta_list: [] }
                },(err,result)=>{
                    console.log(err,res);
                })
            }
        });

        axios
            .get("https://api.covid19india.org/data.json")
            .then(function (response) {
                // handle success
                // let stateList = response.data.statewise;

                // const stateWiseData = StateMap.getStateList(stateList);
            })
    }
}

const covidCtrl = new CovidController();
module.exports = covidCtrl;