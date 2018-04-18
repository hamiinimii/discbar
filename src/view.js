'use strict'

//レンダープロセス用のipcモジュールをインポート
const ipcRenderer = electron.ipcRenderer

ipcRenderer.on('iconChange', function(){
  let iconChange = document.getElementByClassName('content');
  ipcRenderer.sendToHost('iconChange',content.innerText);

})
//ipcRenderer.sendToHost('result',document.body.innerText);
