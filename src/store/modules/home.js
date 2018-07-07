const state = {
  HomeTags: [
    {
      tagName: 'JavaScript',
      tagSlug: 'javascript'
    },
    {
      tagName: 'ECMAScript6',
      tagSlug: 'ecmascript6'
    },
    {
      tagName: 'CSS',
      tagSlug: 'css'
    },
    {
      tagName: 'PHP',
      tagSlug: 'php'
    },
    {
      tagName: '算法',
      tagSlug: 'algorithm'
    },
    {
      tagName: '数据结构',
      tagSlug: 'data-structures'
    },
    {
      tagName: 'ASP',
      tagSlug: 'asp'
    },
    {
      tagName: 'Linux',
      tagSlug: 'linux'
    },
    {
      tagName: 'MySQL',
      tagSlug: 'mysql'
    },
    {
      tagName: 'HTML',
      tagSlug: 'html'
    },
    {
      tagName: 'CSS3',
      tagSlug: 'css3'
    },
    {
      tagName: 'SQLServer',
      tagSlug: 'sqlserver'
    },
    {
      tagName: '正则表达式',
      tagSlug: 'regular-expression'
    },
    {
      tagName: 'Nginx',
      tagSlug: 'nginx'
    },
    {
      tagName: 'IIS',
      tagSlug: 'iis'
    },
    {
      tagName: 'Vue',
      tagSlug: 'vue'
    },
    {
      tagName: 'Python',
      tagSlug: 'python'
    }
  ],
  HomeHotArticles: [
    {
      title: 'vue+vuex+axios+echarts画一个动态更新的中国地图',
      link: '//blog.mazey.net/794.html'
    },
    {
      title: 'HTML5全屏浏览器兼容方案',
      link: '//blog.mazey.net/799.html'
    }
  ]
}

const getters = {
  getHomeTags: state => state.HomeTags,
  getHomeHotArticles: state => state.HomeHotArticles
}

export default {
  state,
  getters
}
