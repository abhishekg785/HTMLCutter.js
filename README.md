HTMLCutter
==========

A node module that do two things better :

cutHTML : removes all the special characters in the html string so that they can be displayed on the page without execution , as a plain string.
Prevents JS injection and can be used where we need to display the html code into our web page.
eg: <h1>Hii!</h1> will be converted into &lt;h1&gt;Hii!&lt;/h1&gt; .

toHTML : reverse of what cutHTML do.It converts the string obtained from the cutHTML back into the html string.
eg: &lt;h1&gt;Hii!&lt;/h1&gt; will be converted to <h1>Hii!</h1>

##Installation
  npm install htmlCutter --save

##Usage
<code>
  var htmlCutter = require('htmlCutter'),

      cutHTML = htmlCutter.cutHTML,

      toHTML = htmlCutter.toHTML;
</code>
<code>
  var html = "<h1>hi!</h1>",
</code>
<code>
      safeString = cutHTML(html),

      htmlString = toHTML(safeString);

  console.log('html', html, 'Safe String', safeString, 'htmlString', htmlString);
</code>

##Tests
  npm test

##Release History

* 0.1.1 Initial Release
