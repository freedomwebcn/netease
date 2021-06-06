import PlaylistInfo from "@/page/PlaylistInfo/PlaylistInfo"
import Home from "@/page/Home/Home"


export default [{
        path: '/',
        redirect: "/home"
    },

    {
        path: '/home',
        component: Home,
        meta: {
            keepAlive: true
        }
    },

    {
        path: '/playlist',
        component: PlaylistInfo,
        meta: {
            keepAlive: false
        }
    },

]