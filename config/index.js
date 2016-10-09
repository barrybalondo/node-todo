var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pass + '@ds053186.mlab.com:53186/nodetodobarry';
    }

}
