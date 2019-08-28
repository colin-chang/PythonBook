module.exports = {
    title: 'python学习笔记',
    description: 'python—人工智能主流语言',
    base: '/python/',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        ['@vuepress/google-analytics', {
            ga: 'UA-131744342-1'
        }]
    ],
    themeConfig: {
        repo: 'https://github.com/colin-chang/python',
        nav: [{
                text: 'Get Start',
                link: '/basic/intro'
            },
            {
                text: 'Books',
                items: [
                    { text: '.Net Core', link: 'https://colin-chang.site/netcore/' },
                    { text: 'Linux', link: 'https://colin-chang.site/linux/' },
                    { text: '系统架构设计', link: 'https://colin-chang.site/architecture/' }
                  ]
            },
            {
                text: 'Blog',
                link: 'https://colin-chang.site/'
            }
        ],
        sidebar:[
            {
                title: 'python基础',
                collapsable: false,
                children: [
                    '/basic/intro',
                    '/basic/ide',
                    '/basic/standard',
                    '/basic/io',
                    '/basic/datatype',
                    '/basic/operator',
                    '/basic/processctrl',
                    '/basic/str',
                    '/basic/list',
                    '/basic/dict',
                    '/basic/function',
                    '/basic/oo',
                    '/basic/module',
                    '/basic/accessibility',
                    '/basic/copy',
                    '/basic/file',
                    '/basic/exception',
                    '/basic/logging'
                ]
            },
            {
                title: 'python高级',
                collapsable: false,
                children: [
                    '/senior/generator',
                    '/senior/iterator',
                    '/senior/decorator',
                    '/senior/contextmanager',
                    '/senior/dynamic',
                    '/senior/metaclass',
                    '/senior/intern',
                    '/senior/gc',
                    '/senior/pdb',
                    '/senior/process',
                    '/senior/thread',
                    '/senior/coroutine',
                    '/senior/network',
                    '/senior/udp',
                    '/senior/tcp'
                ]
            },
            {
                title: '算法与数据结构',
                collapsable: false,
                children: [
                    '/datastructure/algorithm',
                    'datastructure/sort',
                    '/datastructure/datastructure',
                    'datastructure/sequencelist',
                    'datastructure/linkedlist',
                    'datastructure/stackqueue',
                    'datastructure/tree'
                ]
            },
            {
                title: '数据操作',
                collapsable: false,
                children: [
                    '/database/mysql'
                ]
            }
        ],
        displayAllHeaders: true,
        lastUpdated: '更新时间',
    },
    markdown: {
        lineNumbers: true
    }
}