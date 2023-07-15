// Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(camelWord) {
    return camelWord.split('-').map(function (word, index) {

        if (index == 0) {
            return word.toLowerCase()
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join('')
}

console.log(camelize("background-color"))
