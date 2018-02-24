const { format } = require('url');
const { join } = require('path');

const { app, BrowserWindow } = require('electron');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800, height: 600,
    minWidth: 800, minHeight: 600,
    center: true
  });

  mainWindow.loadURL(format({
    pathname: join(__dirname, 'src/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', () => mainWindow = null);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
