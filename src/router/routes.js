import playlist from "@/page/PlaylistInfo/playlist"
import home from "@/page/Home/Home"


export default [{
        path: '/',
        redirect: "/home"
    },

    {
        path: '/home',
        component: home,
        meta: {
            keepAlive: true
        }
    },

    {
        path: '/playlist',
        component: playlist,
        meta: {
            keepAlive: false
        }
    },

]