'use strict'

//レンダープロセス用のipcモジュールをインポート
const ipcRenderer = electron.ipcRenderer


ipcRenderer.sendToHost('result',document.body.innerText);
