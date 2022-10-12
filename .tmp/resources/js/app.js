/** @param {string} path  */
function convertPath(path) {
    if(path[1] == ":")
        return path;
    if (path[0] == "/") {
        path = ".." + path;
    } else {
        path = "./" + path;
    }
    return path;
}

/** @param {string} path  */
async function fsFile(path) {
    try {
        let data = await Neutralino.filesystem.readFile(convertPath(path));
        //console.log(path, data);
        return data;
    } catch (e) {
        console.error(e);
        return "";
    }
}

/** 
 *  @param {string} path 
 *  @returns {string[]}
 */
async function fsDir(path, full) {
    try {
        let dir = await Neutralino.filesystem.readDirectory(convertPath(path));
        dir = dir.map(f => f.entry + (f.type == "DIRECTORY" ? "/" : "")).filter(f => f != "./" && f != "../").map(f => full ? path + f : f);
        return dir;
    } catch (e) {
        console.error(e);
        return [];
    }
}

function asBase64(arrayBuffer) {
    return new Promise(r => {
        let blob = new Blob([arrayBuffer])

        let reader = new FileReader();
        reader.onload = function (event) {
            r(event.target.result)
        };

        reader.readAsDataURL(blob);
    })
}

async function fsSave(path, data){
    let entry = await Neutralino.os.showSaveDialog("Export as", {
        defaultPath: "./" + path
    });
    await Neutralino.filesystem.writeFile(entry || path, data);
}

const dataCache = {};
/** @param {string} path  */
async function fsData(path) {
    if (path in dataCache) {
        return dataCache[path];
    }
    try {
        /**@type {ArrayBuffer} */
        let data = await Neutralino.filesystem.readBinaryFile(convertPath(path));
        /**@type {string} */
        let b64 = await asBase64(data);
        let ext = path.substring(path.length - 3)
        console.log({ ext, b64 });
        let b = b64.indexOf(";base64")
        let txt = `data:image/${ext}${b64.substring(b)}`;
        dataCache[path] = txt;
        return txt;
    } catch (e) {
        console.error(e);
        return "";
    }
}

async function showInfo() {
    let rm = await fsFile("README.md");
    let dir = await fsDir("/user/mods");
    document.getElementById('info').innerHTML = `
        ${NL_APPID} is running on port ${NL_PORT}  inside ${NL_OS}
        <br/><br/>
        <span>server: v${NL_VERSION} . client: v${NL_CVERSION}</span> ${JSON.stringify(dir)}
        `;
}

function setTray() {
    if (NL_MODE != "window") {
        console.log("INFO: Tray menu is only available in the window mode.");
        return;
    }
    let tray = {
        icon: "/resources/icons/trayIcon.png",
        menuItems: [
            { id: "VERSION", text: "Get version" },
            { id: "SEP", text: "-" },
            { id: "QUIT", text: "Quit" }
        ]
    };
    Neutralino.os.setTray(tray);
}

function onTrayMenuItemClicked(event) {
    switch (event.detail.id) {
        case "VERSION":
            Neutralino.os.showMessageBox("Version information",
                `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`);
            break;
        case "QUIT":
            Neutralino.app.exit();
            break;
    }
}

function onWindowClose() {
    Neutralino.app.exit();
}

Neutralino.init();

Neutralino.events.on("trayMenuItemClicked", onTrayMenuItemClicked);
Neutralino.events.on("windowClose", onWindowClose);

if (NL_OS != "Darwin") {
    setTray();
}

async function init() {
    /**@type {string} */
    let path = NL_CWD;
    //path = path.substring(-1);

    //path = "file://" + path.substring(2);
    let dir = await fsDir(".");
    if(!dir.includes["user"])
        path = path.replace(/\/[^\/]+$/, "");        
    console.log({ path });
    window["gameDir"] = path;
    window["xpediaDir"] = path + "xpedia2/";
}

init();