var url=window.location.href;
if(document.domain === "www.bing.com")
{
  if(url.length>20)
  {
	this.window.stop();
    var start = url.search("=")+1;
    var end = url.search("&go");
    var search = url.slice(start,end);
	window.location.href = "https://www.google.co.il/search?q="+search;
  }
}
