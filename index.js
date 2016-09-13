/*
* @author : abhishek goswami (hiro)
* github : abhishekg785
*
* HTMLCutter.js  : removes the special characters from the html string
* preventing js injection or to display the html and js code into the web
* page without executing.
*/


var HTMLCutter = {

  /*
  * Removes the special characters from the html string.
  *
  * @param { String } html
  * @return { String }
  */
  cutHTML : function(htmlString){
    return String(htmlString)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  },

  /*
  * Converts the given string having special chracters to the html String
  *
  * @param { String }
  * @return { String } html
  */
  toHTML : function(string){
    return String(string)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
  }
}

module.exports = HTMLCutter;
