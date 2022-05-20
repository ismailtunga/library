var log = null;

module.exports.initialize = function initialize(appender = "") {
        var log4js = require('log4js');
        log4js.configure(global.log4js_json_file_path);
        log = log4js.getLogger(appender);
        return this;
}

module.exports.debug = function debug(message) {
        return log.debug(message);
}

module.exports.info = function info(message) {
        return log.info(message);
}

module.exports.error = function error(message) {
        return log.error(message);
}


module.exports.loadConfiguration = function loadConfiguration(filePath) {
        global.log4js_json_file_path = filePath;
}