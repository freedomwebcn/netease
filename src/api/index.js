/* 
包含n个接口请求函数的模块
*/
import ajax from './ajax'

// 1、获取banner
export const reqBanner = ({
    type
}) => ajax('/banner', {
    params: {
        type
    }
})
// 2、获取推荐歌单
export const reqRecommendPlaylist = ({
    limit
}) => ajax('/personalized', {
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

// 5、排行榜内容摘要
export const reqTopList = async () => {
    const ids = []
    let topListDetailData = null
    const toplistData = await ajax('toplist/detail')
    //取前三条数据
    toplistData.list.slice(0, 3).forEach((item) => {
       topListDetailData = reqTopListDetail(item.id)
        ids.push(topListDetailData)
    }); 
    return ids
}

// 6、根据排行榜 ID 获取排行榜详情
export const reqTopListDetail = (id) => ajax(`playlist/detail?id=${id}`)