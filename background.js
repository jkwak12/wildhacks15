

function getAllTabUrl(callback) {
  var queryInfo = {			//condition that makes all tabs in current window to be put into array
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) { //this calls the queryInfo in which puts into array

  var holdTabs = []; //will hold our url's
  var index;
  	for( index = 0; index < tabs.length; index ++ ){
  		holdTabs[index] = tabs[index]; // each tab object is in array holdTabs so you can get url and id seperately 
  	}


 callback(holdTabs);

});

}

function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var url = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    //var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
   // console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}




	// body...


document.addEventListener('DOMContentLoaded', function() {


getAllTabUrl(function(holdTabs) {
getCurrentTabUrl(function(url) {

var loop;
for(loop = 1; loop  < holdTabs.length; loop++){
	if(holdTabs[loop].url == url.url){
		chrome.tabs.remove(url.id);

	}
}






} );

} ) ;
} ) ;

