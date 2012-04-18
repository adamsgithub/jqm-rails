function onLoadFailed( event, data ) {
  var text = data.xhr.responseText,
    newHtml = text.split( /<\/?html[^>]*>/gmi )[1];
  $( "html" ).html( newHtml );
}

$( document ).on( "pageloadfailed", onLoadFailed);