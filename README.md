# PageTextObfuscator
Use to obfuscate text from the website the script has been included in.

Why? Just for fun!

Embed the pageWordObfuscator.js in your site, use GreaseMonkey, or just inject the script with the following code via JS console in your browser:

var script = document.createElement("script");
script.src = 'https://cdn.rawgit.com/XSilent/PageTextObfuscator/eb98e83d4aaeaf2d74d7ebda3bee870e7c87ce5a/pageWordObfuscator.js';
document.getElementsByTagName('head')[0].appendChild(script);
script.onload = function(){
	var obfuscator = new pageWordObfuscator();
	obfuscator.init();
};

