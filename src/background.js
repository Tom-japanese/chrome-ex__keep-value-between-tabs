//----------------------

console.log('background.js');

// var script01 = function(){
//   alert("拡張機能を実行しました");
// };
 
// (function(){
//   chrome.browserAction.onClicked.addListener(script01);
// })();



// 状態保持（初期設定）
var isTranslate = false;

// 拡張機能のクリックを検知
chrome.browserAction.onClicked.addListener(function(tab) {
  // content_scriptにクリックされたことを教える処理
  chrome.tabs.sendMessage(tab.id, "onclick");
  // 真偽値の反転
  isTranslate = !isTranslate;
  // 状態をバッジとして表示する
  if (isTranslate)
    chrome.browserAction.setBadgeText({text : "ON" });
  else
    chrome.browserAction.setBadgeText({text: ""});
});

// contents_scriptからのメッセージ処理
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (isTranslate) {
      switch (request.cmd) {
        case "isTranslate": // 状態の取得
          sendResponse(isTranslate);
          return;
        default:
          break;
      }
    }
    sendResponse("");
  }
);