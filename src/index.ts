const { app, BrowserWindow } = require("electron")

function createWindow() {

    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: false,
            allowRunningInsecureContent: true,
            contextIsolation: false
        },
        icon: "assets/favicon.ico"
    })

    window.setMenuBarVisibility(false)
    window.maximize()

    console.log("[TRACE] Reading url.txt...")

    const fs = require("fs")
    fs.readFile("url.txt", function (err, data) {
        if (err) {
            console.log("[ERROR] Reading failed!")
            console.log("[TRACE] Showing error page...")
            window.loadFile("src/error.html")
        } else {
            console.log("[INFO] Reading was successful!")
            console.log("[TRACE] Loading url page...")
            window.loadURL(data.toString())
        }
    })

}

app.whenReady().then(createWindow)
