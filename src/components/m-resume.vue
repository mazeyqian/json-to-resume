<template>
  <div class="m-resume-box">
    <div class="m-resume">
      <div class="resume-title">
        <h1>{{ resume.title }}</h1>
      </div>
      <!--基本信息-->
      <div class="resume-item">
        <h3>基本信息</h3>
        <div class="resume-item-content resume-item-between">
          <ul>
            <li v-for="( info, index ) in resume.personInfo.left"
              :key="`resume-person-info-left-${index}`"
            >
              <span class="resume-info-name">{{ info.name }}：</span>
              <span>{{ info.value }}</span>
            </li>
          </ul>
          <ul>
            <li v-for="( info, index) in resume.personInfo.right"
              :key="`resume-person-info-right-${index}`"
            >
              <span class="resume-info-name">{{ info.name }}：</span>
              <span>{{ info.value }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!--工作经历-->
      <m-resume-experience :projects="resume.companies" title="工作经历"></m-resume-experience>
      <!--项目经验-->
      <m-resume-experience :projects="resume.projects" title="项目经验"></m-resume-experience>
      <!--个人项目-->
      <m-resume-experience :projects="resume.individualProjects" title="个人项目"></m-resume-experience>
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
          <div class="patent-item" v-for="( patent, index ) in resume.patents" :key="`patent-item-${index}`">
            <span class="icon-html5" alt="Patent ICON"></span>
            <span>{{ patent.name }}[<a :href="patent.link" target="_blank" rel="noopener">{{ patent.publishNumber }}</a>]</span>
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
  import MResumeExperience from './m-resume-experience.vue'
  export default {
    name: 'm-resume',
    components: {
      MResumeExperience,
    },
    data () {
      return {
        resume,
      }
    },
    created () {
      document.title = this.resume.pageAndFileName // `${this.name}-${this.position}-${this.experience.replace(/\s/gmi, '')}`
    }
  }
</script>
