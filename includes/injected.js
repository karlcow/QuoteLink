// This code is under Apache 2.0 License
// Check the README.mdown

window.addEventListener('load', function() {

    String.prototype.startsWith = function(prefix) {
        return this.indexOf(prefix) === 0;
    };
    
    // Get all "blockquote" and "q" elements in a single array.
    var quotes = document.querySelectorAll('blockquote, q');
    var cite, a, span, isbn;
    var linkstyle = "font-size:80%;font-weight:bold;text-decoration:none;margin:0;padding:0;";
    
    // Loop through the quotes array and try to get the "cite" attribute.
    for (var i = 0, quote; quote = quotes[i]; i++) {
        cite = quote.cite;
        
        // If there's a "cite" attribute, add a "read more" link
        if (cite !== '') {
            // if the cite attribute starts with urn:isbn: 
            // we link to openlibrary http://openlibrary.org/isbn/123
            
            if (cite.startsWith("urn:isbn:")) {
                isbn = cite.substring(9).replace(/\-/g, "");
                cite = "http://openlibrary.org/isbn/" + isbn;
            }
            a = document.createElement('a');
            a.setAttribute('href', cite);
            a.innerHTML = 'ⓘ';
            span = document.createElement('span');
            span.className = 'quotesource';
            a.style = linkstyle;
            a.title = "Source at " + cite
            span.appendChild(a);
            quote.appendChild(span);
        } 
    }

}, false);

