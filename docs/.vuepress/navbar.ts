import {defineNavbarConfig} from 'vuepress-theme-plume'

export const chineseNavbar = defineNavbarConfig([
    {text: '首页', link: '/'},
    {
        text: '文档', items: [
            {text: '玩法详情', link: '/gameplay/4wibh75x/'},
            {text: '游戏规则', link: '/gamerule/jxdzh7eq/'},
        ]
    },
    {text: '论坛', link: '/#'},
])

export const enNavbar = defineNavbarConfig([
    {text: 'Home', link: '/en/'},
    {text: 'Blog', link: '/en/blog/'},
    {text: 'Tags', link: '/en/blog/tags/'},
    {text: 'Archives', link: '/en/blog/archives/'},
    {
        text: 'Notes',
        items: [{text: 'Demo', link: '/en/notes/demo/README.md'}]
    },
])

