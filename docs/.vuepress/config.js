module.exports = {
    title: "Optimal UI",
    description:"一个好用的UI组件库",
    themeConfig: {
        mode: 'dark',
        modePicker:true,
        nav: [
            {
                text: '主页',
                link:'/'
            },
            {
                text: '文档',
                link:'/install/'
            }, 
            {
                text: 'Github',
                link:'https://github.com/bobwang171/Optimal-ui/'
            }
            
        ],
        sidebar: [
            {
                title: '入门',   // 必要的
                collapsable: false, 
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/install/',
                    '/get-started/', 
                ]
            },
            {
                title: '组件',   // 必要的
                collapsable: false, 
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/button/',
                    '/input/',
                    '/layout/',
                    '/tabs/',
                    '/toast/',
                ]
              },

      ]
    },
    head:[
        ["script", { src: "//at.alicdn.com/t/c/font_3824556_0tb9b4otg41.js" }]
      ]
  }