import Mock from "mockjs"
import banner from "./banner/banner.json"
import recommend_playlist from "./recommend_playlist/recommend_playlist.json"
import new_song from "./new_song/NewSong.json"
import hot_playlist from "./hot_playlist/hot_playlist.json"
import new_cd from "./new_cd/new_cd.json"
import new_album from "./new_album/new_album.json"
import toplist_detail from "./toplist_detail/toplist_detail.json"
import toplis_detai_1 from "./toplist_detail/toplis_detai_1.json"
import toplis_detai_2 from "./toplist_detail/toplis_detai_2.json"
import toplis_detai_3 from "./toplist_detail/toplis_detai_3.json"

// Mock.mock(rurl, template)
Mock.mock("banner?type=2", {
    banner
})
Mock.mock("personalized?limit=6", {
    recommend_playlist
})

Mock.mock("personalized/newsong", {
    new_song
})

Mock.mock("top/playlist?limit=6&order=hot", {
    hot_playlist
})
Mock.mock("album/newest", {
    new_cd
})

Mock.mock("album/list?limit=6", {
    new_album
})

Mock.mock("toplist/detail", {
    toplist_detail
})

Mock.mock("playlist/detail?id=19723756", {
    toplis_detai: toplis_detai_1
})
Mock.mock("playlist/detail?id=3779629", {
    toplis_detai: toplis_detai_2

})
Mock.mock("playlist/detail?id=2884035", {
    toplis_detai: toplis_detai_3

})