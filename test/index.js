/*
* using should provided by the chai framework
*/
var should = require('chai').should(),
    htmlCutter = require('../index'),
    cutHTML = htmlCutter.cutHTML,
    toHTML = htmlCutter.toHTML;

describe('#cutHTML', function(){

  it('converts & into &amp;', function(){
    cutHTML('&').should.equal('&amp;');
  });

  it('converts " into &quot;', function(){
    cutHTML('"').should.equal('&quot;');
  });

  it('converts \' into &#39;', function(){
    cutHTML("'").should.equal('&#39;');
  });

  it('converts < into &lt;', function(){
    cutHTML('<').should.equal('&lt;');
  });

  it('converts > into &gt;', function(){
    cutHTML('>').should.equal('&gt;');
  });
});
