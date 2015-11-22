

function getAllTabUrl(callback) {
  var queryInfo = {			//condition that makes all tabs in current window to be put into array
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) { //this calls the queryInfo in which puts into array

  var holdTabs = []; //will hold our url's
  var index;
  	for( index = 0; index < tabs.length; index ++ ){
  		holdTabs[index] = tabs[index].url; // each tab url is in array holdTabs
  	}


 callback(holdTabs);

});

}

