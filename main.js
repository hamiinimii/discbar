//厳格モード
'use strict';

// main.js
// -src/index.html
//  -//view.js

const {app,BrowserWindow,dialog,ipcMain,Menu,Tray} = require('electron')

//オブジェクトが勝手に破棄されないように、空オブジェクトのグローバル変数を宣言します。
let win;
let settingsWin;
let appIcon;
let backgroundColor = 'skyblue';

//ipcによるやりとり。処理の引数はイベント及びその値
// ipcMain.on('settings_changed', function(event, color){ //onは変化を取得
//   win.webContents.send('set_bgcolor', color);
// });
ipcMain.on('settings_changed', function(event, color){ //onは変化を取得
  win.webContents.send('iconChange', color);
});


// ipcMain.on('get_bgcolor', function(event){ //同期通信はeventのみを引数に受け取る
//   event.returnValue = backgroundColor; //
// });
// ここでconsole.logしたらターミナルの方に行った

//functions
let createWindow =()=> {
  Menu.setApplicationMenu(menu); //Menuを生成する。
  win = new BrowserWindow({'width': 800,'height': 600})   // Windowのサイズを決めて、オブジェクト生成する。
  win.loadURL(`file://${__dirname}/src/index.html`) // index.htmlを読み込む
  win.webContents.openDevTools() // Chromium のDevToolsを有効にする。

  win.on('closed', () => {win = null}) // 表示したWindowを閉じたときの初期化処理
}

// Electronの初期化が完了し、ブラウザウインドウの作成準備が完了したときに呼び出される。
app.on('ready', createWindow)

// ステータスバー等の通知エリアでのアイコンを作成
app.on('ready',() => {
  appIcon = new Tray(__dirname +'/images/icon.png');
  let contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio'}
  ])
  appIcon.setToolTip('This is my application.')
  appIcon.setContextMenu(contextMenu)
})

// 全てのウィンドウが閉じられた時の処理
app.on('window-all-closed', () => {
  app.quit()
  //}
})
