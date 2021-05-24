//----------------------
// console.log('content_script');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "myAction") {
      hogehoge();
  }
}); 

function hogehoge() {
  console.log("hogehoge");
}

// ページロードの度にbackgroundに状態を確認
chrome.runtime.sendMessage(
  { cmd: "isTranslate" },
  function(isTranslate) {
    if (isTranslate) {
      // アイコンがonだった時（常に実行されている気がする）
      console.log("アイコンがonです");
    }
  }
);
