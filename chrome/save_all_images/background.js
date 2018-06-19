chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    'id':'saveall',
    'type':'normal',
    'title':'保存所有图片',
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
  if(info.menuItemId == 'saveall'){
    chrome.tabs.executeScript(tab.id, {file: 'main.js'}, function(results){
      if (results && results[0] && results[0].length){
        results[0].forEach(function(url) {
          if(url.indexOf(".jpg") != -1 || url.indexOf(".png") != -1){
            chrome.downloads.download({
              url: url,
              conflictAction: 'overwrite',
              saveAs: false
            });
          }
        });
      }
    });
  }
});
