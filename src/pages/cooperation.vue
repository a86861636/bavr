<template>
<div class="cooperation">
  <c-header></c-header>
  <div class="partner">
    <div class="box">
      <div class="tt">{{ $t( "cooperation.tt1" ) }}</div>
      <div class="line"></div>
    </div>
    <div class="content">
      <div class="item" v-for="(item,index) in partnerList" :key="index">
        <img :class="{'logo':true,'black':item.logo==='http://www.gbamr.com/media/cooperation/agency/xrlscm.png'}" :src="item.logo" @click="toLink(item.link)" :alt="item.title_en">
      </div>
    </div>
  </div>
  <div class="expert">
    <div class="box">
      <div class="tt">{{ $t( "cooperation.tt2" ) }}</div>
      <div class="line"></div>
    </div>
    <div class="content">
      <div class="item" v-for="(item,index) in expertList" :key="index">
        <img @click="toLink(item.link)" :src="item.image" class="img" />
        <div class="intro" v-if="locale === 'zh'">
          <div @click="toLink(item.link)" class="name">{{item.name}}</div>
          <div class="title">{{item.titles}}</div>
          <div class="brief" v-html="item.brief_intro"></div>
        </div>
        <div class="intro" v-if="locale==='en'">
          <div  @click="toLink(item.link)" class="name">{{item.name_en}}</div>
          <div class="title">{{item.titles_en}}</div>
          <div class="brief" v-html="item.brief_intro_en"></div>
        </div>
      </div>
    </div>
  </div>
  <c-footer dataType="2"></c-footer>
</div>
</template>

<script>
import header from '@/components/header'
import axios from 'axios';
import footer from '@/components/footer'
export default {
  name: 'Cooperation',
  components: {
    "c-header": header,
    "c-footer": footer
  },
  data() {
    return {
      partnerList: [{
        img: require('@/assets/cooperation/SCM_Logo.png'),
        link: 'https://www.scm.cityu.edu.hk'
      }
      // }, {
      //   logo: require('@/assets/cooperation/xrlscm.png'),
      //   link: 'https://xr-lab.org'
      // }
      ],
      expertList: [{

      }]
    }
  },
  mounted() {
    this.getData()
  },
  computed: {
    locale() {
      return this.$i18n.locale
    }
  },
  methods: {
    getData() {
      axios('http://www.gbamr.com/cooperation/').then(res => {
        this.partnerList = res.data.agency_info
        this.expertList = res.data.expert_info
      })
    },
    toLink(url) {
      if (!url) {
        return false
      }
      window.open(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.box {
  background: rgb(51, 51, 72);
  margin: 40px 0;
  padding-bottom: 40px;
}

.tt {
  padding: 20px 0 0px 0;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  color: white;
}

.line {
  width: 1200px;
  margin: 20px auto 0 auto;
  height: 5px;
  background-image: linear-gradient(to right, #ccc 0%, #ccc 80%, transparent 20%);
  background-size: 20px 5px;
  background-repeat: repeat-x;
}

.partner {
  margin-bottom: 120px;

  .content {
    display: flex;
    flex-direction: row;
    width: 1440px;
    margin: auto;
    align-items: center;
    justify-content: center;

    .item {
      cursor: pointer;

      .logo {
        max-height: 300px;
        max-width: 600px;
        margin: 0 50px;
      }

      .black {
        background: rgb(21, 21, 21);
      }

      .title {
        margin-top: 50px;
        text-align: center;
      }
    }
  }
}

.expert {
  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1440px;
    margin: auto;
    font-size: 18px;

    .item {
      margin: 0 40px 80px 40px;
      text-align: center;
      width: 400px;

      .img {
        width: 250px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
      }

      .title {
        margin-top: 10px;
        color: rgba(0, 0, 0, 0.54);
      }

      .name {
        margin-top: 10px;
        font-size: 24px;
        font-weight: 600;
        cursor: pointer;
      }

      .brief {
        margin-top: 10px;
        text-align: left;
        color: rgba(0, 0, 0, 0.54);
        text-indent: 2em;
        text-align: justify;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .expert {
    .content {
      width: 80%;

      .item {
        width: 100%;
      }
    }
  }
}
</style>
