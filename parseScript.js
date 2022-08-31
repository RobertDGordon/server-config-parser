const fs = require('fs');
const default_filepath = './config.txt';

const readFile = (filepath) => {
    const raw_file = fs.readFileSync(filepath);
    const file_string = raw_file.toString();
    return file_string;
}

const convertToBoolean = (value) => {
    if (parseFloat(value)){
        return parseFloat(value);
    } else {
        switch(value) {
            case true:
            case 'true':
            case 'on':
            case 'yes':
                return true;
            case false:
            case 'off':
            case "no":
                return false;
            default:
                return value;
        }
    }
}

const convertToJSON = (filepath) => {
    let file = filepath;
    if (filepath === undefined){
        file = default_filepath;
    }
    let obj = {};
    // split config file at each new line
    const config_txt = readFile(file).split(/\r?\n|\r|\n/g);
    for (let i = 0; i < config_txt.length; i++) {
        // check for #comment and skip
        if (config_txt[i][0] !== '#'){
            const separated = config_txt[i].replace(/\s/g,'').split('=');
            const key = separated[0];
            const value = convertToBoolean(separated[1]);
            //add new key value to object
            obj = {...obj, [key]: value};
        }
    }
    return obj;
}

module.exports = convertToJSON;