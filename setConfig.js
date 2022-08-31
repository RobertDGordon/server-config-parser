const parseScript = require('./parseScript.js');

const mode = (process.argv[2] || false);
const config_filepath = (process.argv[3] || './config.txt');

const getConfig = (mode, config_filepath) => {
    if (config_filepath) {
        console.log('\nSetting server config from:', config_filepath);
    } else {
        console.log('\nUsing default config path');
    }
    
    const server_config = parseScript(config_filepath)

    if (mode !== '-s') {
        if (server_config.verbose){
            console.log(server_config)
        }
        if (server_config.debug_mode){
            console.log('\n***Debug mode enabled!***')
        }
        console.log(`\nConfiguration set for ${server_config.host} at ${server_config.server_id}`)
    }
    
    return server_config
}

// Calling function to test
getConfig(mode);

module.exports = getConfig;