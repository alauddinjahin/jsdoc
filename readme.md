This a sample project where I am showing how you can use *jsdoc*

<a id="top"></a>

***
Follow these steps: 
-------------------

[//]: # (jsdoc installation & working process)

[comment]: <> (second commets way)

[//]: <> (3rd commets way)

1. npm init -y
2. npm install -D jsdoc or npm install -g jsdoc 
3. add this code in ***package.json*** "scripts": `{ "jsdoc": "jsdoc -c jsdoc.json" }`
4. make a file base on your config file like : jsdoc.json
5. put these code inside <code>~~jsdoc~~</code> jsdoc.json file <br/>
    ```javascript
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
    ```

6.  make a src folder according to include array 
7.  you can make a custom docs templete by copying jsdoc __default folder__ inside node_modules folder and rename it and link inside jsdoc.json file's opts template property
8.  you can chane **custom temple** publish file also


***<p align="center">Thanks...</p>***

<!-- 
no | icon | effect
---|------|-------
01| 😄 | `:smile:`
02| 💓 | `:heart:`

  - [ ] check box
  - [x] check box  -->


<br/>

[Go to top ⬆️ ](#top)
