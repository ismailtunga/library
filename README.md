# Library
 - Config
 - Logging

## Configuration
	.env file content

e.g
>     NODE_ENV=production

**Configuration Usage:**

    const {NODE_ENV} = require('qbitra-library/config');
    console.log(NODE_ENV);
***


## Logging

log4js.json file

    {
        "appenders": {
        "console" : {
            "type": "console",
            "category": "console"
        },
        "logstash": {
            "type": "@log4js-node/logstashudp",
            "host": "localhost",
            "port": 1403
          },
        "file" : {
            "category": "test-file-appender",
            "type": "file",
            "filename": "log_file.log",
            "maxLogSize": 10240,
            "backups": 3,
            "pattern": "yyyyMMdd"
        }
        },
        "categories": {
            "default" :{"appenders": ["logstash","console","file"], "level": "ALL"}
        }
    }

**Log Usage**

	    const {logger} = require('qbitra-library/logging');
	    logger.loadConfiguration('log4js.json')-
	    logger.log().error('Deneme');

***
"# library" 
