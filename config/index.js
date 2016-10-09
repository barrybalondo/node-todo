var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        //<dbuser>:<dbpassword>@ds053186.mlab.com:53186/nodetodobarry
        return 'mongodb://' + configValues.uname + ':' + configValues.pass + '@ds053186.mlab.com:53186/nodetodobarry'
    }

}
