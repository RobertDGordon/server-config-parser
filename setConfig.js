const parseScript = require('./parseScript.js');

const getConfig = (mode = false, filepath = './config.txt') => {
    if (filepath !== './config.txt') {
        console.log('\nSetting server config from:', filepath);
    } else {
        console.log('\nUsing default config path');
    }
    
    const server_config = parseScript(filepath)

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


// Calling function to test from command line
if (process.argv[2] === '-t'){
    const cli_mode = (process.argv[3] || false);
    const cli_filepath = (process.argv[4] || './config.txt');
    if (process.argv[4]){
        getConfig(cli_mode, cli_filepath)
    }else {
        getConfig(cli_mode);
    }
}


module.exports = getConfig;