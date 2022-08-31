# server-config-parser
Parses text file and returns JSON config file for servers

## Command line options
Silent mode:
> setConfig -s

Set file path: (default: './config.txt')
> setConfig -- './yourfile.txt'

## Logic used
1. Read text file & convert to string
2. Separate new lines into array, ignore comments
3. Iterate over each line, replace all spaces, split key/value at =
4. Convert values to boolean or number(float) and push to object literal