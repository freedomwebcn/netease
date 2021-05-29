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
// 3、随机推荐的歌
export const reqRandomSong = () => ajax('personalized/newsong')
