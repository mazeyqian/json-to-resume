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
            <li><span class="resume-info-name">工作年限：</span>2年</li>
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
            <span>基于HTML5协议的浏览器全屏显示方法及显示装置[CN110083409A]</span>
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
              name: 'PinnacleSolution智能招聘系统',
              timeRange: '2018 年 7 月 - 至今',
              tags: [
                {
                  name: 'CRM',
                  bgc: 'crm'
                },
                // {
                //   name: '效率',
                //   bgc: 'green'
                // },
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
                  value: '作为项目前端负责人，参与前期需求确认到项目稳定上线的整个过程。'
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
                  value: '前期就项目进行讨论，约定接口格式，并对照视觉图进行职责分配及项目排期；开发阶段根据后端提供接口文档模拟数据进行页面渲染；后期与后端进行联调并进一步改进项目。'
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
