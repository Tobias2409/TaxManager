const {app, BrowserWindow} = require('electron')

let win;

function createWindow(){
    win = new BrowserWindow({
       width: 800,
       height: 600,
       backgroundColor: '#ffffff',
    });

    win.loadURL(`file://${__dirname}/dist/tax-manager/browser/index.html`);

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (win === null) createWindow()
})
