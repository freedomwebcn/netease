/* 
包含n个接口请求函数的模块
*/
import ajax from './ajax'

// 1、获取banner
export const reqBanner = ({type}) => ajax('/banner', {
    params: {
        type
    }
})
// 2、获取推荐歌单
export const reqRecommendPlaylist = ({limit}) => ajax('/personalized', {
    params: {
        limit
    }
})
// 3、新歌
export const reqRandomSong = () => ajax('personalized/newsong')

// 4、热门歌单
export const reqHotPlaylist = () => ajax('top/playlist?limit=6&order=hot')

// 5、新碟
export const reqNewCd = () => ajax('album/newest')

// 4、数字专辑
export const reqNewAlbum = () => ajax('album/list?limit=6')



