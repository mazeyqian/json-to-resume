export default {
  companies: [
    {
      name: '上海莉莉丝科技股份有限公司',
      nameAbbr: 'lilith',
      timeRange: '2020 年 8 月 - 至今',
      tags: [
        {
          name: '游戏',
          bgc: 'yellow'
        }
      ],
      department: '平台产品中心',
      position: '前端工程师',
      description: '维护游戏官网、礼包兑换码、会员中心、社区。'
    },
    {
      name: '上海基分文化传播有限公司',
      nameAbbr: 'qtt',
      timeRange: '2018 年 12 月 - 2020 年 8 月',
      tags: [],
      department: '技术中心 - 游戏组',
      position: '研发工程师（前端 & Golang）',
      description: '从零开始搭建集成在趣头条 App 中的游戏中心入口落地页以及面向外部游戏厂商的 JS-SDK。'
    },
    {
      name: '平纳科信息咨询有限公司',
      nameAbbr: 'pinnacle',
      timeRange: '2018 年 7 月 - 2018 年 12 月',
      tags: [],
      department: '技术部',
      position: '前端工程师',
      description: '负责公司猎头系统的前端开发，开发并完善工作流平台；承担前端项目管理和运维的工作。'
    },
    {
      name: '苏宁云商集团股份有限公司',
      nameAbbr: 'suning',
      timeRange: '2017 年 11 月 - 2018 年 4 月',
      tags: [],
      department: '苏宁技术研究院 - 数据分析部',
      position: '前端工程师',
      description: '负责集团数据可视化分析的前端工作，使苏宁易购线下线上促销活动的数据更加直观。'
    },
    {
      name: '江苏邦宁科技有限公司',
      nameAbbr: 'bangning',
      timeRange: '2016 年 6 月 - 2017 年 8 月',
      tags: [],
      department: '主站研发部',
      position: '后端工程师（ASP & PHP）',
      description: '参与公司销售网站从后端到前端的开发和维护；收集需求开发管理系统提高客服工作效率；管理服务器，承担一部分的运维工作。'
    }
  ],
  projects: [
    {
      name: '社区',
      timeRange: '2020 年 x 月 - 2021 年 x 月',
      tags: [
        {
          name: 'ToC',
          bgc: 'cyan'
        }
      ],
      detail: [
        {
          name: '前端技术',
          value: 'React，Less，SSR。'
        },
        {
          name: '项目职责',
          value: '-'
        },
        {
          name: '项目描述',
          value: `-`
        }
      ]
    },
    {
      name: '莉莉丝游戏会员中心',
      timeRange: '2020 年 x 月 - 2021 年 x 月',
      tags: [
        {
          name: 'ToC',
          bgc: 'cyan'
        },
        {
          name: 'CI/CD',
          bgc: 'gitlab'
        }
      ],
      detail: [
        {
          name: '前端技术',
          value: 'React，Webpack，Sass。'
        },
        {
          name: '后端技术',
          value: 'Node，Egg，Redis，MySQL，Sequelize，Docker。'
        },
        {
          name: '项目职责',
          value: '全栈工程师，负责项目前后端开发及 CI/CD 部署。'
        },
        {
          name: '项目描述',
          value: `莉莉丝游戏会员中心，访问地址：<a href="https://account.lilith.com" target="_blank" rel="noopener">https://account.lilith.com</a>。`
        }
      ]
    },
    {
      name: '莉莉丝游戏（万国觉醒 & 剑与远征）礼包兑换码（CDKey）网站',
      timeRange: '2020 年 x 月 - 2021 年 x 月',
      tags: [
        {
          name: 'ToC',
          bgc: 'cyan'
        },
        {
          name: '国际化',
          bgc: 'blue'
        }
      ],
      detail: [
        {
          name: '前端技术',
          value: 'React，Umi。'
        },
        {
          name: '后端技术',
          value: 'Node，Egg，Redis。'
        },
        {
          name: '项目职责',
          value: '后端工程师，项目初期承担项目后端开发，中后期维护整个项目的前后端工作。'
        },
        {
          name: '项目描述',
          value: `从零搭建日服礼包兑换码网站，并迭代至国际化，访问地址：<a href="https://cdkey.lilith.com/afk-global" target="_blank" rel="noopener">https://cdkey.lilith.com/afk-global</a>。`
        }
      ]
    },
    {
      name: '趣头条游戏中心 JS-SDK',
      timeRange: '2019 年 2 月 - 2020 年 7 月',
      tags: [
        {
          name: '支付',
          bgc: 'pay'
        },
        {
          name: '广告',
          bgc: 'a-d'
        },
        {
          name: '埋点',
          bgc: 'blue'
        },
        {
          name: '分享',
          bgc: 'green'
        },
        {
          name: 'API',
          bgc: 'api'
        },
        {
          name: '错误监控',
          bgc: 'error-monitor'
        },
        {
          name: '灰度发版',
          bgc: 'secondary'
        }
      ],
      detail: [
        {
          name: '前端技术',
          value: 'JavaScript，Docsify，Sass，Webpack，Rollup，Gulp。'
        },
        {
          name: '后端技术',
          value: 'Golang，Gin，Gorm，MySQL，MurmurHash，JsonLogic。'
        },
        {
          name: '项目职责',
          value: '技术负责人，从架构设计到后期功能迭代。'
        },
        {
          name: '项目描述',
          value: `给游戏厂商提供封装好的支付、广告、游戏任务、返回劫持、数据上报、分享以及调用原生App功能的能力，游戏SDK文档：<a href="https://mazey.cn/t/sdk" target="_blank" rel="noopener">mazey.cn/t/sdk</a>。`
        }
      ]
    },
    {
      name: '游戏中心CMS后台 - 广告配置',
      timeRange: '2019 年 12 月 - 2020 年 1 月',
      tags: [
        {
          name: 'ToA',
          bgc: 'cyan'
        },
        {
          name: '效率',
          bgc: 'green'
        }
      ],
      detail: [
        {
          name: '前端技术',
          value: 'Vue 2，Element-UI。'
        },
        {
          name: '项目职责',
          value: '项目负责人，编写 PRD 并且参与前端开发。'
        },
        {
          name: '项目描述',
          value: `随着游戏体量的增加和单平台向多平台切换的背景下，早期业务的广告全局配置已然不能满足商务工作需求，存在低效易错的问题。
          通过 CMS 后台的广告配置，单个平台只需要配置一次广告配置，为商务每天节约 1~2 小时的工作时间。`
        }
      ]
    },
    {
      name: '游戏中心开放平台 - 游戏版本和灰度控制',
      timeRange: '2019 年 8 月 - 2019 年 11 月',
      tags: [
        {
          name: 'ToB',
          bgc: 'cyan'
        },
        {
          name: '灰度发版',
          bgc: 'secondary'
        }
      ],
      detail: [
        {
          name: '前端技术',
          value: 'Vue 2，Element-UI。'
        },
        {
          name: '项目职责',
          value: '项目负责人，编写 PRD 并且参与前端开发。'
        },
        {
          name: '项目描述',
          value: `打通游戏测试、灰度、发布流程，重点游戏做版本更新的时候，先放量一部分用户体验游戏，观察数据和客诉没问题之后再全量，从而保证头部游戏（20+）的稳定性，节约了运营大量的验收成本。`
        }
      ]
    },
    {
      name: '趣头条游戏中心首页1.0 - 加载体验优化',
      timeRange: '2019 年 6 月 10 日 - 2019 年 6 月 25 日',
      tags: [
        {
          name: '性能',
          bgc: 'orange'
        },
        {
          name: '用户体验',
          bgc: 'green'
        }
      ],
      detail: [
        {
          name: '项目职责',
          value: '前端工程师'
        },
        {
          name: '项目描述',
          value: '由于早期的业务快速迭代，游戏中心 H5 页面存在加载慢体验差的问题，为了提升页面转化率和用户体验，对首页进行了一次短平快的优化，首屏时间从 3357ms 减少到 917ms（-72%），页面折损率降低 3%。'
        }
      ]
    },
    {
      name: 'PinnacleSolution 智能招聘系统',
      timeRange: '2018 年 7 月 - 2018 年 12 月',
      tags: [
        {
          name: 'CRM',
          bgc: 'crm'
        },
        {
          name: '效率',
          bgc: 'green'
        }
      ],
      detail: [
        {
          name: '前端技术',
          value: 'Vue 2，Vue-cli 3，ColorAdmin，Echarts 4，Sass。'
        },
        {
          name: '项目职责',
          value: '项目前端负责人，参与前期需求确认到项目稳定上线的整个过程。'
        },
        {
          name: '项目描述',
          value: `通过使用 Vue 全家桶构建的单页面 SPA，通过权限分配将客户经理和招聘专员的工作进行分离；整合搜索、筛选、沟通、确认模块，使招聘专员能够一站式的进行管理和操作。`
        }
      ]
    },
    {
      name: 'IDAP 智能数据分析平台',
      timeRange: '2017 年 11 月 - 2018 年 4 月',
      tags: [
        {
          name: '数据可视化',
          bgc: 'blue'
        },
        {
          name: '大屏',
          bgc: 'orange'
        },
        {
          name: '响应式',
          bgc: 'purple'
        }
      ],
      detail: [
        {
          name: '前端技术',
          value: 'Vue 2，Element-UI，Echarts 3，Webpack，Sass。'
        },
        {
          name: '项目职责',
          value: '前端工程师，前期就项目进行讨论，约定接口格式，并对照视觉图进行职责分配及项目排期；开发阶段根据后端提供接口文档模拟数据进行页面渲染；后期与后端进行联调并进一步改进项目。'
        },
        {
          name: '项目描述',
          value: '项目分为实时数据展示、历史数据分析、促销活动后台管理三个部分，引入 Echarts 做数据的可视化；在苏宁年货节、418 等大促活动中承担数据监控和分析的作用，其中大屏模块在活动期间一直投放在公司公众视野中，使全体员工了解大促进展。'
        }
      ]
    },
    {
      name: '邦宁域名备案核查系统',
      timeRange: '2017 月 4 月 – 2017 年 5 月',
      tags: [
        {
          name: 'CRM',
          bgc: 'crm'
        },
        {
          name: 'IE8+',
          bgc: 'ms'
        },
                // {
                //   name: '效率',
                //   bgc: 'green'
                // },
        {
          name: '报表',
          bgc: 'secondary'
        }
      ],
      detail: [
        {
          name: '前端技术',
          value: 'Bootstrap，jQuery，Less。'
        },
        {
          name: '后端技术',
          value: 'WindowsServer，IIS，ASP，SQLServer。'
        },
        {
          name: '项目职责',
          value: '前期收集需求，调查用户喜欢的体验；设计项目流程，数据库结构；独立完成后端到前端的开发；保证项目线上的稳定运行。'
        },
        {
          name: '项目描述',
          value: '前后端分离，前端通过 Bootstrap + jQuery 兼容到 IE8，后端提供 JSON 数据进行渲染；通过数据筛选、数据对比、批量处理数据等功能提高备案专员的工作效率。'
        }
      ]
    }
  ],
  skills: [
    {
      name: 'ES6/5/3',
      level: 80
    },
    {
      name: 'React/Vue',
      level: 75
    },
    {
      name: 'CSS',
      level: 70
    },
    {
      name: 'Sass/Less',
      level: 65
    },
    {
      name: 'Nginx',
      level: 60
    }
  ]
}
