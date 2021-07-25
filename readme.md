This a sample project where I am showing how you can use jsdoc

# Follow these steps: 

1. npm init -y
2. npm install -D jsdoc or npm install -g jsdoc 
3. add this code in package.json "scripts": { "jsdoc": "jsdoc -c jsdoc.json" }
4. make a file base on your config file like : jsdoc.json
5. put these code inside jsdoc file 
    {
        "source":{
            "include":["src"],
            "includePattern":".js$",
            "excludePattern":"(node_modules/|docs)"
        },
        "plugins":["plugins/markdown"],
        "templates":{
            "cleverLinks":true,
            "monospaceLinks":true
        },
        "opts":{
            "recurse":true,
            "destination":"./docs/",
            "template":"custom-template",
            "tutorials":"tutorials"
        }
    }

6.  make a src folder according to include array 
7.  you can make a custom docs templete by copying jsdoc default folder inside node_modules folder and rename it and link inside jsdoc.json file's opts template property
8.  you can chane custom temple publish file also


                    Thanks!