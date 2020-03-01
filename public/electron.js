
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const ipc = require('electron').ipcMain
const readCsv = require("./readFile")

let mainWindow;
const startUrl = url.format({
  pathname: path.join(__dirname, '../build/index.html'),
  protocol: 'file:',
  slashes: true,
    });
    console.log(startUrl)

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900, 
    height: 680,
    //backgroundColor: '#312450',     
    show: false,
    webPreferences: {
      nodeIntegration: true,
      //webSecurity: false
      preload: __dirname + '/preload.js',
    }
  });
  mainWindow.setMenu(null);
  mainWindow.webContents.openDevTools();
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : startUrl);
  mainWindow.on('closed', () => mainWindow = null);
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })
  console.log("YAY!!!!")
   

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipc.on('runCommand', async (event, arg) => {
  console.log(arg)
  var jim = await readCsv.writeJ()
  var tom = await readCsv.readJ()
  event.reply('asynchronous-reply', "file read!");
  event.reply('asynchronous-reply', tom);
});