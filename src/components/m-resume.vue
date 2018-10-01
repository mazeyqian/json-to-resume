<template>
  <div class="m-resume">
    <div class="resume-title">
      <h1>前端工程师</h1>
    </div>
    <div class="resume-item">
      <h3>
        <span>基本信息</span>
      </h3>
      <div class="resume-item-content resume-item-between">
        <ul>
          <li><span class="resume-info-name">姓<span class="info-padding"></span>名：</span>钱程</li>
          <li><span class="resume-info-name">性<span class="info-padding"></span>别：</span>男</li>
          <li><span class="resume-info-name">生<span class="info-padding"></span>日：</span>1993 年 4 月</li>
          <li><span class="resume-info-name">电<span class="info-padding"></span>话：</span>18551470413</li>
          <li><span class="resume-info-name">邮<span class="info-padding"></span>箱：</span>mazey@mazey.net</li>
          <li><span class="resume-info-name">工作年限：</span>2年</li>
        </ul>
        <ul>
          <li><span class="resume-info-name">院校：</span>三江学院<span class="resume-small">（2012年9月 - 2016年6月）</span></li>
          <li><span class="resume-info-name">专业：</span>电气工程及其自动化</li>
          <li><span class="resume-info-name">学历：</span>本科</li>
          <li><span class="resume-info-name">英语：</span>CET-6</li>
          <li><span class="resume-info-name">博客：</span><a href="http://blog.mazey.net/" target="_blank">blog.mazey.net</a></li>
          <li><span class="resume-info-name">GitHub：</span><a href="https://github.com/mazeyqian" target="_blank">mazeyqian</a></li>
        </ul>
      </div>
    </div>
    <div class="resume-item">
      <h3>工作经历</h3>
      <h4>1.苏宁云商集团 / 苏宁技术研究院 / 数据分析部</h4>
      <ul>
        <li>工作时间：2017 年 11 月 - 2018 年 4 月</li>
        <li>职位名称：前端工程师</li>
        <li>工作描述：负责集团数据可视化分析的前端工作，制定前端编码规范以及培训新人。</li>
      </ul>
      <h4>2.邦宁集团 / 江苏邦宁科技有限公司 / 主站研发部</h4>
      <ul>
        <li>工作时间：2016 年 6 月 - 2017 年 8 月</li>
        <li>职位名称：研发工程师</li>
        <li>工作描述：负责公司网站从服务器端到前端的开发和维护，对接第三方接口；根据客服需求定制管理系统。</li>
      </ul>
    </div>
    <div class="resume-item">
      <h3>项目经验</h3>
      <h4>1.IDAP智能数据分析平台</h4>
      <ul>
        <li>项目时间：2017年11月 - 2018年4月</li>
        <li>前端技术：Vue2，Echarts3，Sass，Webpack，Element-UI</li>
        <li>项目概述：项目分为实时数据，数据分析，后台管理三个部分，包括图表展示、大小屏切换、用户增删改查数据等模块。</li>
        <li>职责描述：前期就项目进行讨论，约定接口格式，并对照视觉图进行职责分配及项目排期；开发阶段根据后端提供接口文档模拟数据进行页面渲染；后期与后端进行联调并进一步改进项目。</li>
      </ul>
      <h4>2.邦宁备案核查系统</h4>
      <ul>
        <li>项目时间：2017月4月 – 2017年5月</li>
        <li>前端技术：Bootstrap，jQuery，Less。</li>
        <li>后端技术：Windows，IIS，ASP，SQLServer。</li>
        <li>项目概述：用户登录，数据筛选，数据对比，定时任务。</li>
        <li>职责描述：独立完成从前端页面渲染到后端的系统架构设计，数据库设计。</li>
      </ul>
      <h4>3.邦宁集团企业站（<a href="http://www.bangning.top" target="_blank">www.bangning.top</a>）</h4>
      <ul>
        <li>项目时间：2016年7月 – 2016年8月</li>
        <li>前端技术：Bootstrap，jQuery</li>
        <li>后端技术：Windows，IIS，ASP，SQLServer</li>
        <li>项目概述：展示页面及后台 CMS。</li>
      </ul>
    </div>
    <div class="resume-item">
      <h3>专业技能</h3>
      <ul>
        <li>两年从后端到前端开发经验，有数据可视化、CMS、企业站等上线项目并运行至今。</li>
        <li>制定前端编码规范，带新人，定期为团队分享新技术；有从零开始组建前端团队的经验。</li>
      </ul>
    </div>
    <div class="resume-item">
      <h3>技术文章</h3>
      <ul>
        <li>Bootstrap实战 <a href="https://read.douban.com/column/6946508/" target="_blank">[//read.douban.com/column/6946508/]</a></li>
        <li>vue+vuex+axios+echarts画一个动态更新的中国地图 <a href="http://blog.mazey.net/794.html" target="_blank">[//blog.mazey.net/794.html]</a></li>
        <li>HTML5全屏浏览器兼容方案 <a href="http://blog.mazey.net/799.html" target="_blank">[//blog.mazey.net/799.html]</a></li>
      </ul>
    </div>
    <div class="resume-item">
      <h3>专利</h3>
      <ul>
        <li>基于HTML5协议的浏览器全屏显示方法及显示装置[WHD18002（PT20180080-DD-P）]</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'm-resume'
  }
</script>
