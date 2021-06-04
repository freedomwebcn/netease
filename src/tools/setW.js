// 设置类名singer最大宽度
function setSingerMaxWidth(refel, dom) {
    // 复用组件传ref引用 页面内某个模块用 传dom元素
    let musicInfo = refel || Array.from(document.querySelectorAll(dom))
    // 获取父元素宽
    const songInfo_W = Math.ceil(musicInfo[0].clientWidth);
    musicInfo.forEach((songInfo, index) => {
        // 获取歌名的宽度
        const songName_W = Math.ceil(songInfo.children[0].clientWidth);
        // 歌名的最大宽度
        const songNameMax_W = Math.ceil(getComputedStyle(songInfo.children[0]).maxWidth.slice(0, -2))
        // 获取 分割符 的左右外边距 和宽度 
        const separator_M = Math.ceil(getComputedStyle(songInfo.children[1]).marginLeft.slice(0, -2) * 2);
        const separator_W = Math.ceil(songInfo.children[1].clientWidth);
        // 如果歌名的宽度小于它的最大宽度
        if (songName_W < songNameMax_W) {
            // 父容器的宽度减去歌名的宽度
            const set_W = parseInt(songInfo_W - (songName_W + separator_M + separator_W) - 0.1)
            // 设置歌手容器的最大宽度
            songInfo.children[2].style.maxWidth = set_W + 'px'
        } else {
            // 如果歌名的宽度等于它的最大宽度 用父容器宽度 减去歌名的最大宽 和 连接符的宽度 
            const set_W = parseInt(songInfo_W - songNameMax_W - (separator_M + separator_W) - 0.1)
            // 设置歌手容器的最大宽度
            songInfo.children[2].style.maxWidth = set_W + "px";
        }
    });
}
export {
    setSingerMaxWidth
}