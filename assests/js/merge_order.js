const { ipcRenderer } = require("electron");
ipcRenderer.on("orderInfoForMerge", (e,orderInfo)=>{
    console.log(" for merge",orderInfo);
})