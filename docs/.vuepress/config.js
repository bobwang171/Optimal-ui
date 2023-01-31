module.exports = {
    title: "Optimal UI",
    description:"一个好用的UI框架",
    themeConfig: {
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
                    '/grid/',
                    '/tabs/',
                    '/toast/',
                    '/collapse/',
                ]
              },

      ]
    }
  }