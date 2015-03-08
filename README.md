# PageTextObfuscator
Use to obfuscate text from the website the script has been included in.

Why? Just for fun!

Embed the pageWordObfuscator.js in your site, use GreaseMonkey, create a bookmarklet or just inject the script with the following code via JS console in your browser:

var script = document.createElement("script");
script.src = 'https://cdn.rawgit.com/XSilent/PageTextObfuscator/12a2ca59d97590f7f27bce3fc0d8c3c616030b6e/pageWordObfuscator.js';
document.getElementsByTagName('head')[0].appendChild(script);
script.onload = function(){
	var obfuscator = new pageWordObfuscator();
	obfuscator.init();
};

