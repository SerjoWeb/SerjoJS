# Custom JS Library
## SerjoJS

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

A custom JS Library similar to JQuery with only minimum functionality.
Created and still under development.
Main purpose to understand how JS works and how to create and develop your own libraries.

- Pure JavaScript
- ECMA SCRIPT latest

Still under testing, development

## How to use

- Download SerjoJS.beta.js
- Include to your project in the end of the body tag
- Initialize SerjoJS Library

```sh
 const $js = new SerjoJS();
```

## Available Functions

| Function | Description |
| ------ | ------ |
| ``` get() ``` | Function for select dom element |
| ``` html() ``` | Function for setting up text and dom elements into selected dom element |
| ``` append() ``` & ``` prepend() ``` | Functions for add dom elements before and after into selected dom element |
| ``` css() ``` | Function for setting up styles |
| ``` timeout() ``` | Function for setting up timeouts |
| ``` ajax() ``` | Function for http/https requests |

## Demo code

```sh
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test js library</title>
</head>
<body>
    <div class="test">
        <span>Text 1</span>
        <p>Text 2</p>
    </div>

    <div id="block">
        <p>Text text</p>
    </div>

    <div id="block2"></div>
    
    <script src="SerjoJS.beta.js"></script>
    <script>
        const $js = new SerjoJS();

        $js.get('.test span').html('Text 3');

        $js.get('.test p').css({
            color: '#fff',
            backgroundColor: '#000',
            display: 'flex',
            width: 'fit-content'
        });

        const val1 = 150;
        const val2 = 500;

        $js.get('#block').append('div', {class: 'test-1', id: 'tes-id-1'}, `value: ${val1}`);

        $js.get('#block').prepend('div', {class: 'test-2', id: 'tes-id-2'}, `value: ${val2}`);

        $js.timeout(() => { console.log('test'); }, 100);

        $js.ajax({
            method: 'GET',
            path: 'index.html',
            headers: {
                'X-Auth': 'auth-key',
                'Content-type': 'application/x-www-form-urlencoded'
            },
            params: {
                name: 'Mike',
                age: 23,
                position: false,
                contract: 'yes'
            }
        }, (response) => {
            console.log(response);
        });
    </script>
</body>
</html>
```