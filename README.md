# server-config-parser
Parses text file and returns JSON config file for servers

## How to call function
Function is exported as getConfig
> getConfig(mode, filepath)
##### Args
mode = '-s',
filepath = './config.txt' (default)

## Command line options
Test:
> node setConfig -t

Silent mode:
> node setConfig -s

Set file path: (default: './config.txt')
> node setConfig -t -set './yourfile.txt'

## Logic used
1. Read text file & convert to string
2. Separate new lines into array, ignore comments
3. Iterate over each line, replace all spaces, split key/value at =
4. Convert values to boolean or number(float) and push to object literal

## TODO:
- Need to adjust argument parameters to better select multiple args and different filepath

