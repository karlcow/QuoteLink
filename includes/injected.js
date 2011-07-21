// This code is under Apache 2.0 License
// Check the README.mdown

window.addEventListener('load', function() {

    String.prototype.startsWith = function(prefix) {
        return this.indexOf(prefix) === 0;
    };
    
    // Get all "blockquote" and "q" elements in a single array.
    var quotes = document.querySelectorAll('blockquote, q');
    var cite, a, div, isbn;
    
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
            a.style.textDecoration = "none";
            a.style.color = "#333";
            a.title = "Source at " + cite;
            quote.style.position = "relative";
            // wrapping it in a div
            div = document.createElement('div');
            div.className = 'quotesource';
            div.style.position = "absolute";
            div.style.margin = "0";
            div.style.padding = "0";
            div.style.zIndex = "10";
            // two cases: BLOCKQUOTE OR QUOTE
            if (quote.tagName == 'BLOCKQUOTE') {
                div.style.right = "5px";
                div.style.top = "10px";
                div.style.fontSize = "1.5em";
                div.style.fontWeight = "800";
            } else {
                div.style.display = "inline";
                div.style.right = "5px";
                div.style.top = "-10px";
                div.style.fontSize = ".8em";
            }

            div.appendChild(a);
            quote.appendChild(div);
        } 
    }

}, false);