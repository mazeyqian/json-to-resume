<template>
  <div class="m-resume-box">
    <div class="m-resume">
      <div class="resume-title">
        <h1>前端工程师</h1>
      </div>
      <!--基本信息-->
      <div class="resume-item">
        <h3>基本信息</h3>
        <div class="resume-item-content resume-item-between">
          <ul>
            <li><span class="resume-info-name">姓名：</span>钱程</li>
            <li><span class="resume-info-name">性别：</span>男</li>
            <li><span class="resume-info-name">生日：</span>1993 年 4 月</li>
            <li><span class="resume-info-name">电话：</span>18551470413</li>
            <li><span class="resume-info-name">邮箱：</span>mazey@mazey.net</li>
            <li><span class="resume-info-name">工作年限：</span>3 年</li>
          </ul>
          <ul>
            <li><span class="resume-info-name">院校：</span>三江学院<span class="resume-small">（2012 年 9 月 - 2016 年 6 月）</span></li>
            <li><span class="resume-info-name">专业：</span>电气工程及其自动化</li>
            <li><span class="resume-info-name">学历：</span>本科</li>
            <li><span class="resume-info-name">英语：</span>CET-6</li>
            <li><span class="resume-info-name">博客：</span><a href="https://blog.mazey.net/" target="_blank" rel="noopener">blog.mazey.net</a></li>
            <li><span class="resume-info-name">GitHub：</span><a href="https://github.com/mazeyqian" target="_blank" rel="noopener">mazeyqian</a></li>
          </ul>
        </div>
      </div>
      <!--工作经历-->
      <div class="resume-item">
        <h3>工作经历</h3>
        <!--QTT-->
        <div class="resume-experience">
          <div class="resume-experience-timeline">
            <div class="timeline-line-before"></div>
            <div class="timeline-circle"></div>
            <div class="timeline-line"></div>
          </div>
          <div class="resume-experience-content">
            <div class="content-title">
              <div class="company">
              <span class="company-name">
                <div class="company-logo-pinnacle">
                  <i class="icon-company"></i>
                </div>
                <span>上海基分文化传播有限公司</span>
              </span>
                <span>2018 年 12 月 - 2020 年 1 月</span>
              </div>
              <div class="department">
                <span>技术部</span>
                <span>前端工程师</span>
              </div>
            </div>
            <div class="content-description">
              <span>负责公司猎头系统的前端开发，开发并完善工作流平台；承担前端项目管理和运维的工作。</span>
            </div>
          </div>
        </div>
        <!--Pinnacle-->
        <div class="resume-experience">
          <div class="resume-experience-timeline">
            <div class="timeline-line-before"></div>
            <div class="timeline-circle"></div>
            <div class="timeline-line"></div>
          </div>
          <div class="resume-experience-content">
            <div class="content-title">
              <div class="company">
              <span class="company-name">
                <div class="company-logo-pinnacle">
                  <i class="icon-company"></i>
                </div>
                <span>平纳科信息咨询有限公司</span>
              </span>
                <span>2018 年 7 月 - 2018 年 12 月</span>
              </div>
              <div class="department">
                <span>技术部</span>
                <span>前端工程师</span>
              </div>
            </div>
            <div class="content-description">
              <span>负责公司猎头系统的前端开发，开发并完善工作流平台；承担前端项目管理和运维的工作。</span>
            </div>
          </div>
        </div>
        <!--苏宁云商-->
        <div class="resume-experience">
          <div class="resume-experience-timeline">
            <div class="timeline-line-before"></div>
            <div class="timeline-circle"></div>
            <div class="timeline-line"></div>
          </div>
          <div class="resume-experience-content">
            <div class="content-title">
              <div class="company">
              <span class="company-name">
                <div class="company-logo-suning">
                  <i class="icon-company"></i>
                </div>
                <span>苏宁云商集团股份有限公司</span>
              </span>
                <span>2017 年 11 月 - 2018 年 4 月</span>
              </div>
              <div class="department">
                <span>苏宁技术研究院 - 数据分析部</span>
                <span>前端工程师</span>
              </div>
            </div>
            <div class="content-description">
              <span>负责集团数据可视化分析的前端工作，使苏宁线下线上促销活动的数据更加直观。</span>
            </div>
          </div>
        </div>
        <!--邦宁-->
        <div class="resume-experience">
          <div class="resume-experience-timeline">
            <div class="timeline-line-before"></div>
            <div class="timeline-circle"></div>
            <div class="timeline-line"></div>
          </div>
          <div class="resume-experience-content">
            <div class="content-title">
              <div class="company">
              <span class="company-name">
                <div class="company-logo-bangning">
                  <i class="icon-company"></i>
                </div>
                <span>江苏邦宁科技有限公司</span>
              </span>
                <span>2016 年 6 月 - 2017 年 8 月</span>
              </div>
              <div class="department">
                <span>主站研发部</span>
                <span>ASP工程师</span>
              </div>
            </div>
            <div class="content-description">
              <span>参与公司销售网站从后端到前端的开发和维护；收集需求开发管理系统提高客服工作效率；管理服务器，承担一部分的运维工作。</span>
            </div>
          </div>
        </div>
      </div>
      <!--项目经验-->
      <div class="resume-item">
        <h3>项目经验</h3>
        <div class="resume-experience" v-for="(project, index) in resume.projects" :key="`resume-experience-${index}`">
          <div class="resume-experience-timeline">
            <div class="timeline-line-before"></div>
            <div class="timeline-circle"></div>
            <div class="timeline-line"></div>
          </div>
          <div class="resume-experience-content">
            <div class="content-title">
              <div class="project">
              <span class="project-name">
                <span>{{ project.name }}</span>
                <span class="project-badges">
                  <b-badge v-for="(tag, index) in project.tags"
                    :key="`project-badges-${index}`"
                    :pill="true"
                    class="project-badge"
                    :class="tag.bgc">{{ tag.name }}</b-badge>
                  <!--<b-badge pill variant="primary" class="project-badge">人工智能</b-badge>-->
                  <!--<b-badge pill variant="secondary" class="project-badge">招聘</b-badge>-->
                  <!--<b-badge pill variant="success" class="project-badge">爬虫</b-badge>-->
                  <!--<b-badge pill variant="danger" class="project-badge">大数据</b-badge>-->
                  <!--<b-badge pill variant="warning" class="project-badge">数据可视化</b-badge>-->
                  <!--<b-badge pill variant="info" class="project-badge">管理</b-badge>-->
                </span>
              </span>
                <span>{{ project.timeRange }}</span>
              </div>
            </div>
            <div class="project-detail" v-for="(detail, index) in project.detail" :key="`project-detail-${index}`">
              <div class="detail-name">{{ detail.name }}：</div>
              <div class="detail-content">{{ detail.value }}</div>
            </div>
          </div>
        </div>
      </div>
      <!--技能-->
      <div class="resume-item">
        <h3>技能</h3>
        <div class="skill-show">
          <div class="skill-item" v-for="(skill, index) in resume.skills" :key="`skill-item-${index}`">
            <span class="skill-name">{{ skill.name }}</span>
            <b-progress
              :value="skill.level"
              height="12px"
              class="skill-progress"></b-progress>
          </div>
        </div>
      </div>
      <!--专利-->
      <div class="resume-item">
        <h3>专利</h3>
        <div class="patent">
          <div class="patent-item">
            <img class="icon-html5" alt="h5" src="../assets/img/html5.png"/>
            <span>基于HTML5协议的浏览器全屏显示方法及显示装置[<a href="https://mazey.cn/static/patent/CN102018000076427CN00001100834090APDFZH20190802CN00N.PDF" target="_blank" rel="noopener">CN110083409A</a>]</span>
          </div>
        </div>
      </div>
      <!--底部-->
      <div class="resume-footer">
        <div class="footer-line"></div>
        <div class="footer-content">
          <span>Made with 💖 by Mazey（End）</span>
        </div>
        <div class="footer-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // 15 + 6 + 4?
  export default {
    name: 'm-resume',
    data () {
      return {
        resume: {
          projects: [
            {
              name: '广告专项 - DSP激励视频',
              timeRange: '2019 年 12 月 - 2020 年 1 月',
              tags: [],
              detail: [
                {
                  name: '项目职责',
                  value: '前端工程师'
                },
                {
                  name: '项目描述',
                  value: `H5 激励视频的体验和扩展相对于 NA 激励视频存在诸多限制，推动 DSP 激励视频在发行游戏的扩量以及多平台的上线，CPM 提升 30%，Show CVR 提升 14%。`
                }
              ]
            },
            {
              name: '游戏中心CMS后台 - 广告配置',
              timeRange: '2019 年 12 月 - 2020 年 1 月',
              tags: [
                {
                  name: 'ToA',
                  bgc: 'blue'
                },
                {
                  name: 'Vue',
                  bgc: 'vue'
                }
              ],
              detail: [
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
              name: '游戏体验优化 - 接入Cocos',
              timeRange: '2019 年 11 月 - 2020 年 12 月',
              tags: [
                {
                  name: 'ToC',
                  bgc: 'blue'
                }
              ],
              detail: [
                {
                  name: '项目职责',
                  value: '前端工程师'
                },
                {
                  name: '项目描述',
                  value: `游戏中心低端机用户占约 15%，减轻低端机兼容性问题，提高游戏性能，收入将得到绝对的提升，Cocos 原生广告部分联调并上线以及入口灰度的推动。`
                }
              ]
            },
            {
              name: '游戏中心开放平台 - 游戏版本和灰度控制',
              timeRange: '2019 年 8 月 - 2019 年 11 月',
              tags: [
                {
                  name: 'ToB',
                  bgc: 'blue'
                },
                {
                  name: 'Vue',
                  bgc: 'vue'
                }
              ],
              detail: [
                {
                  name: '项目职责',
                  value: '项目负责人，编写 PRD 并且参与前端开发。'
                },
                {
                  name: '项目描述',
                  value: `
                  打通游戏测试、灰度、发布流程，重点游戏做版本更新的时候，先放量一部分用户体验游戏，观察数据和客诉没问题之后再全量，从而保证头部游戏的稳定性。
                  接入灰度的游戏：赚遍全球、植物战僵尸、零点街机捕鱼、王者大脑、趣种菜、装个球球、天天斗地主、疯狂切菜、全民烧脑、豆子斗地主、开心小农场。
                  另外，之前厂家测试游戏需要运营花费巨大的时间精力将游戏挂载在冷门分类的底部位置，这样不仅不方便还容易出错，现在开放一个仅供厂商测试栏位，节约了运营大量的验收成本。`
                }
              ]
            },
            {
              name: '离线包一期 / 二期',
              timeRange: '2019 年 6 月 10 日 - 2019 年 6 月 25 日',
              tags: [],
              detail: [
                {
                  name: '项目职责',
                  value: '前端工程师'
                },
                {
                  name: '项目描述',
                  value: `一期：为了优化外部厂商的游戏体验，将离线包功能开放给厂商使用，转化率提升 5%。
                  二期：趣头条平台的 CDN 由于游戏的大离线包流程成本骤增，将游戏的离线包拆分 CDN 域名并且打散削峰值，成本降低约 80%，并且持续接入多达 30 款游戏，
                  覆盖 100% 的发行游戏。`
                }
              ]
            },
            {
              name: '游戏中心首页1.0 - 加载体验优化',
              timeRange: '2019 年 6 月 10 日 - 2019 年 6 月 25 日',
              tags: [
                {
                  name: '性能',
                  bgc: 'blue'
                },
                {
                  name: '用户体验',
                  bgc: 'blue'
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
              name: '游戏中心 - SDK',
              timeRange: '2019 年 2 月 - 2019 年 11 月',
              tags: [
                {
                  name: '支付',
                  bgc: 'blue'
                },
                {
                  name: '广告',
                  bgc: 'blue'
                },
                {
                  name: '埋点',
                  bgc: 'blue'
                },
                {
                  name: '分享',
                  bgc: 'blue'
                },
                {
                  name: 'API',
                  bgc: 'blue'
                },
                {
                  name: '错误监控',
                  bgc: 'blue'
                }
              ],
              detail: [
                {
                  name: '前端技术',
                  value: 'Raven-js，Docsify，Sass。'
                },
                {
                  name: '项目职责',
                  value: '前端工程师，负责从刚开始架构设计到后期功能迭代。'
                },
                {
                  name: '项目描述',
                  value: '给游戏厂商提供封装好的支付、广告、游戏任务、返回劫持、数据上报、分享以及调用原生App功能的能力，\n游戏SDK文档：https://newidea4-gamecenter-frontend.1sapp.com/sdk/docs/#/sdk/README。'
                }
              ]
            },
            {
              name: 'PinnacleSolution智能招聘系统',
              timeRange: '2018 年 7 月 - 2018 年 12 月',
              tags: [
                {
                  name: 'CRM',
                  bgc: 'crm'
                },
                {
                  name: 'Vue',
                  bgc: 'vue'
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
                  value: '通过使用 Vue 全家桶构建的单页面 SPA，通过权限分配将客户经理和招聘专员的工作进行分离；整合搜索、筛选、沟通、确认模块，使招聘专员能够一站式的进行管理和操作。'
                }
              ]
            },
            {
              name: 'IDAP智能数据分析平台',
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
                },
                {
                  name: 'Vue',
                  bgc: 'vue'
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
                  value: '项目分为实时数据展示，历史数据分析，促销活动后台管理三个部分，引入 Echarts 做数据的可视化；在苏宁年货节、418 等大促活动中承担数据监控和分析的作用，其中大屏模块在活动期间一直投放在公司公众视野中，使全体员工了解大促进展。'
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
                  value: '前后端分离，前端通过 Bootstrap + jQuery 兼容到 IE8，后端提供 JSON 数据进行渲染；通过数据筛选，数据对比，批量处理数据等功能提高备案专员的工作效率。'
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
              name: 'Vue',
              level: 75
            },
            {
              name: 'CSS',
              level: 70
            },
            {
              name: 'Sass',
              level: 65
            },
            {
              name: 'Nginx',
              level: 60
            }
          ]
        }
      }
    },
    created () {
      document.title = '钱程-前端工程师-2年'
    }
  }
</script>
