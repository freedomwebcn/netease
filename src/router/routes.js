import palylist from "@/page/PlaylistInfo/palylist"
import home from "@/page/Home/Home"


export default [
     {
         path: '/',
         redirect:"/home"
     },
     {
         path: '/home',
         component: home
     },
    
    {
        path: '/playlist/:id',
        component: palylist
    },

]