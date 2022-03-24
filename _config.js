var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://Becky:<password>@week5ipcluster.mfxxe.mongodb.net/Week5IPCluster?retryWrites=true&w=majority',
    development: 'mongodb+srv://Becky:<password>@week5ipcluster.mfxxe.mongodb.net/Week5IPCluster?retryWrites=true&w=majority',
    test: 'mongodb+srv://Becky:<password>@week5ipcluster.mfxxe.mongodb.net/Week5IPCluster?retryWrites=true&w=majority',
}
module.exports = config;
