(function(){

	if ( ! window.console ) {
		console = { log: function(){} };
	}

	/**
	 * Page Word Obfuscator
	 *
	 * @author 2015 Michael Neuhaus (XSilent)
	 */
	var pageWordObfuscator = function()
	{
		walkElements();

		/**
		 * Obfuscate given word
		 *
		 * @param word
		 * @returns {*}
		 */
		function obfuscateWord(word)
		{
			if (word.length <= 3) {
				return word;
			}

			var between = [];
			for(var i in word) {
				if ((i == 0) || (i == word.length - 1)) {
					continue;
				}
				between.push(word[i]);
			}

			between = shuffle(between);

			word = word[0] + between.join('') + word[word.length - 1];

			return word;
		}

		/**
		 * Walk through all DOM elements
		 * beeing children of body element
		 * and obfuscate the text
		 */
		function walkElements()
		{
			var bodyElement = document.getElementsByTagName("body")[0];
			var allElements = bodyElement.getElementsByTagName("*");

			var obfuscated;
			for (var element in allElements) {

				if (typeof allElements[element].tagName !== 'undefined') {

					obfuscated = obfuscate(allElements[element].innerText);

					try {
						allElements[element].innerText = obfuscated;
					} catch (e) {
						console.log(e);
					}
				}
			}
		}

		/**
		 *
		 * @param text
		 * @returns {string}
		 */
		function obfuscate(text)
		{
			var word = '';
			var result = '';
			for(var i in text) {

				if (text[i] != ' ') {
					word += text[i];
				} else {
					result += obfuscateWord(word) + ' ';
					word = '';
				}
			}
			result += obfuscateWord(word) + ' ';

			return result;
		}

		/**
		 * Shuffle array entries
		 * by random
		 *
		 * @param array
		 * @returns {*}
		 */
		function shuffle(array)
		{
			var currentIndex = array.length, temporaryValue, randomIndex ;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				// And swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			return array;
		}
	};

	// wait till DOM is ready
	document.addEventListener("DOMContentLoaded", function(event)
	{
		var obfuscator = new pageWordObfuscator();
	});

})();

