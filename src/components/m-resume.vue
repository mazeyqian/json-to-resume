<template>
  <div class="m-resume-box">
    <div class="m-resume">
      <div class="resume-title">
        <h1>{{ position }}</h1>
      </div>
      <!--基本信息-->
      <div class="resume-item">
        <h3>基本信息</h3>
        <div class="resume-item-content resume-item-between">
          <ul>
            <li><span class="resume-info-name">姓名：</span>{{ name }}</li>
            <li><span class="resume-info-name">性别：</span>男</li>
            <li><span class="resume-info-name">生日：</span>1993 年 4 月</li>
            <li><span class="resume-info-name">电话：</span>18551470413</li>
            <li><span class="resume-info-name">邮箱：</span><a href="mailto:mazeyqian@gmail.com" rel="noopener">mazeyqian@gmail.com</a></li>
            <li><span class="resume-info-name">工作年限：</span>{{ experience }}</li>
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
        <!--Lilith-->
        <div class="resume-experience" v-for="(company, index) in resume.companies" :key="`resume-experience-${index}`">
          <div class="resume-experience-timeline">
            <div class="timeline-line-before"></div>
            <div class="timeline-circle"></div>
            <div class="timeline-line"></div>
          </div>
          <div class="resume-experience-content">
            <div class="content-title">
              <div class="company">
              <span class="company-name">
                <div :class="`company-logo-${company.nameAbbr}`">
                  <i class="icon-company"></i>
                </div>
                <span>{{ company.name }}</span>
                <span class="project-badges">
                  <b-badge v-for="(tag, index) in company.tags"
                    :key="`project-badges-${index}`"
                    :pill="true"
                    class="project-badge"
                    :class="tag.bgc">{{ tag.name }}</b-badge>
                </span>
              </span>
                <span>{{ company.timeRange }}</span>
              </div>
              <div class="department">
                <span>{{ company.department }}</span>
                <span>{{ company.position }}</span>
              </div>
            </div>
            <div class="content-description">
              <span>{{ company.description }}</span>
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
                </span>
              </span>
                <span>{{ project.timeRange }}</span>
              </div>
            </div>
            <div class="project-detail" v-for="(detail, index) in project.detail" :key="`project-detail-${index}`">
              <div class="detail-name">{{ detail.name }}：</div>
              <div class="detail-content" v-html="detail.value"></div>
            </div>
          </div>
        </div>
      </div>
      <!--个人项目-->
      <div class="resume-item">
        <h3>个人项目</h3>
        <div class="resume-experience" v-for="(project, index) in resume.individualProjects" :key="`resume-experience-${index}`">
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
                </span>
              </span>
                <span>{{ project.timeRange }}</span>
              </div>
            </div>
            <div class="project-detail" v-for="(detail, index) in project.detail" :key="`project-detail-${index}`">
              <div class="detail-name">{{ detail.name }}：</div>
              <div class="detail-content" v-html="detail.value"></div>
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
  import resume from '../conf/resume.js'
  export default {
    name: 'm-resume',
    data () {
      return {
        resume,
        name: '钱程',
        position: '前端工程师',
        experience: '4 年',
      }
    },
    created () {
      document.title = `${this.name}-${this.position}-${this.experience.replace(/\s/gmi, '')}`
    }
  }
</script>
