## Codepackniter

Make your codeigniter application webpack powered and serve the static contents in a smarter way.

- Do you still manage your static assets in older way?
- Do you want to use React, Angular or VueJS in your codeigniter application?
- Do you want your client codeigniter application modularized?

Codepackniter helps you to setup your existing codeigniter application powered by the Javascript world's most powerful tool [WEBPACK](https://webpack.js.org/ "WEBPACK"). Basically it is a small utility helper that integrates [laravel-mix](https://github.com/JeffreyWay/laravel-mix "laravel-mix") (A famous asset management wrapper built around webpack by one of my favorites [Jaffery Way](https://twitter.com/jeffrey_way "Jaffery Way")) behind the scene.

####How To Install:

`npm install codepackniter -g`

#### How To Use:
Once you are done with the package installation, go to your existing codeigniter project root and run the following command:

`codepackniter make`

The above command will setup webpack and install all the dependencies regarding laravel-mix. After finishing this command, go to your project layout file and add the following script tag for javascript compiled by mix.

`<script src="<?php echo codepackniter("js/app.js") ?>"></script>`

If you want to add the compiled sass file also, put a link tag in the same layout for app.css

`<link rel="stylesheet" href="<?php echo codepackniter("css/app.css") ?>">`


**Thats it!**

To make it more advance, you need to read the documentation for [laravel-mix](https://github.com/JeffreyWay/laravel-mix/tree/master/docs "laravel-mix")

#### Thanks To:
[Laravel Mix](https://github.com/JeffreyWay/laravel-mix "Laravel Mix")