// const axios = require('axios').default;
const Client = require('fortnite');
require('dotenv').config();
let Profile;
let playerUrl;
// my api key ****** 3080c06a-ddf2-4516-933b-a6c19cc4bda7
const apiKEY = process.env.FORTNITE_TRACKER_API;
// const baseUrl = "https://api.fortnitetracker.com/v1/profile/pc/";

// playerUrl = baseUrl + player;
const fortnite = new Client(apiKEY);

const API = function (player, platform) {

    this.player = player;
    this.platform = platform;

    this.getUser = function () {

        // fortnite.user('username', 'platform [pc, xbl, psn]').then(console.log);
        // fortnite.store().then(console.log);
        // fortnite.challenges().then(console.log);

        var userPlatform = 'platform' + '[' + 'pc' + ']'

        fortnite.user('weatherfields', 'pc').then((res) => {
            // All data coming back from the API is stored in the res object
            console.log('RESPONSE:', res)
        })

        // This function makes an API call to get store info
        // fortnite.store().then((res) => {
        //     console.log('store response', res)
        // })

        // // This function makes an API call to get challenges info
        // fortnite.challenges().then((res) => {
        //     console.log('challenges response', res)
        // })
    };

    this.getStore = function () {
        fortnite.store().then(console.log);
    };

    this.getChallenges = function () {
        fortnite.challenges().then(console.log);
    };
}


module.exports = API;