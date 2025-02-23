/**
 * 查看资源状态
 */
const fs = require('fs')

fs.stat('./resources/fs_demo_video.mp4', (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.isFile());
    console.log(data.isDirectory());
})
