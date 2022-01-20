<template>
<div class="vr">
  <div class="page1">
    <c-header bg="#05051F"></c-header>
    <img class="bg" src="@/assets/xr/VRBG.png">
    <div class="box">
      <div class="top">
        <img src="@/assets/xr/VR.png" class="icon">
        <div class="tt">Virtual Reality</div>
      </div>
      <div class="intro">{{ $t("vr.text1") }}</div>
      <div class="follow">{{ $t("vr.text2") }}</div>
    </div>
  </div>
  <div class="bgC">
    <div class="page2">
      <div class="tt">{{$t("vr.apply")}}</div>
      <div class="box">
        <img class="img1" src="@/assets/xr/use.png">
        <div class="movie">{{ $t("vr.movie") }}</div>
        <div class="game">{{ $t("vr.game") }}</div>
        <div class="fitness">{{ $t("vr.fitness") }}</div>
        <div class="social">{{ $t("vr.social") }}</div>
        <div class="travel">{{ $t("vr.travel") }}</div>
        <div class="shopping">{{ $t("vr.shopping") }}</div>
        <div class="military">{{ $t("vr.military") }}</div>
        <div class="medical">{{ $t("vr.medical") }}</div>
        <div class="industrial">{{ $t("vr.industrial") }}</div>
        <div class="culture">{{ $t("vr.culture") }}</div>
        <div class="education">{{ $t("vr.education") }}</div>
        <div class="project">{{ $t("vr.project") }}</div>
        <div class="exhibition">{{ $t("vr.exhibition") }}</div>
      </div>
      <!--项目介绍-->
      <div class="item" v-for="(item,index) of itemList" :key="'itemList'+index">
        <div v-if="lang=='zh'">
          <div class="tt">展示项目-“{{item.name}}”</div>
          <div class="text" v-html="item.content"></div>
        </div>
        <div v-if="lang=='en'">
          <div class="tt">Show project-“{{item.name_en}}”</div>
          <div class="text" v-html="item.content_en"></div>
        </div>
        <video class="video" controls :src="item.media_1" :poster="item.video_picture_1"></video>
      </div>
    </div>
    <c-footer></c-footer>
  </div>
  <div class="page3" style="display:none">
    <!--            <div class="top">-->
    <!--                <img src="@/assets/xr/vrw.png" class="icon">-->
    <!--                <div class="text">Augmented Reality</div>-->
    <!--            </div>-->
    <div class="center">
      <div class="btt">{{$t('vr.benefits')}}</div>
      <div class="box" v-if="lang=='zh'">
        <div class="item" v-for="(item,index) in introList" :key="'introList'+index" sop>
          <img class="icon" :src="item.image">
          <div class="tt">{{item.name}}</div>
          <div class="intro">{{item.content}}</div>
        </div>
      </div>
      <div class="box" v-if="lang=='en'">
        <div class="item" v-for="(item,index) in introList" :key="'introList'+index">
          <img class="icon" :src="item.image">
          <div class="tt">{{item.name_en}}</div>
          <div class="intro">{{item.content_en}}</div>
        </div>
      </div>
    </div>
    <c-footer></c-footer>
  </div>
</div>
</template>

<script>
import header from '@/components/header'
import footer from '@/components/footer'
export default {
  name: "home",
  data() {
    return {
      itemList: [],
      introList: [],
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    }
  },
  components: {
    "c-header": header,
    "c-footer": footer,
  },
  mounted() {
    this.getVR();
    this.getIntro();
  },
  methods: {
    getVR() {
      let data = {
        url: 'xr/vrProject'
      };
      this.$store.dispatch('get', data).then(res => { //页面加载时读取课程列表
        this.itemList = res.data;
      });
    },
    getIntro() {
      let data = {
        url: 'xr/ProjectBenefits'
      };
      this.$store.dispatch('get', data).then(res => { //页面加载时读取课程列表
        this.introList = res.data;
      });
    },
  }
}
</script>

<style lang="less" scoped>
.vr {
  overflow: hidden;
}

.bgC {
  background: #d6d6d6;
  z-index: 2;
}

.page1 {
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 1;

  .follow {
    font-size: 3.5vw;
  }

  .bg {
    position: absolute;
    top: 1vh;
    left: -5%;
    width: 80vw;
    z-index: 1;
  }

  .box {
    flex: 1;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .top {
    flex-direction: row;
    display: flex;
    align-items: center;
  }

  .icon {
    width: 166px;
    height: 168px;
  }

  .tt {
    margin-left: 54px;
    font-size: 90px;
    font-weight: 600;
  }

  .intro {
    margin-top: 48px;
    font-size: 60px;
    color: #373737;
    text-align: center;
    width: 20em;
  }

  .btn {
    margin-top: 33px;
    line-height: 69px;
    width: 278px;
    background: black;
    color: white;
    font-size: 22px;
    border-radius: 32px;
    text-align: center;
    cursor: pointer;
  }

  .follow {
    margin-top: 30px;
    font-size: 20px;
  }
}

.page2 {
  z-index: 2;
  width: 1530px;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 200px;

  .tt {
    font-weight: 600;
    font-size: 40px;
    z-index: 2;
    position: relative;
  }

  .box {
    z-index: 2;
    margin: 100px 0 0 0;
    position: relative;
    padding: 45px 0;

    div {
      position: absolute;
      font-size: 24px;
      color: black;
      transform: translate(-50%, 0);
      font-weight: 600;
    }

    .movie {
      top: 0;
      left: 17%;
    }

    .game {
      top: 0;
      left: 30%;
    }

    .fitness {
      top: 0;
      left: 43%;
    }

    .social {
      top: 0;
      left: 56%;
    }

    .travel {
      top: 0;
      left: 69%;
    }

    .shopping {
      top: 0;
      left: 82%;
    }

    .military {
      bottom: 0;
      left: 10%;
    }

    .medical {
      bottom: 0;
      left: 23%;
    }

    .industrial {
      bottom: 0;
      left: 36%;
    }

    .culture {
      bottom: 0;
      left: 50%;
    }

    .education {
      bottom: 0;
      left: 63%;
    }

    .project {
      bottom: 0;
      left: 76%;
    }

    .exhibition {
      bottom: 0;
      left: 89%;
    }
  }

  .img1 {
    width: 100%;
  }

  .item {
    margin-top: 200px;

    .text {
      margin-top: 50px;
      font-size: 18px;
      white-space: pre-wrap;
    }

    .video {
      margin-top: 50px;
      width: 100%;
    }
  }

}

.page3 {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #05051F;

  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;

    .icon {
      width: 55px;
      height: 56px;
      margin-left: 50px;
    }

    .text {
      font-family: ahronbd;
      color: white;
      font-size: 22px;
      margin-left: 15px;
    }
  }

  .center {
    width: 1530px;
    margin: auto;
    flex: 1;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .btt {
      color: white;
      font-size: 36px;
      box-sizing: border-box;
      padding-bottom: 20px;
    }

    .box {
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      flex-wrap: wrap;

      .item {
        width: 33.3%;
        box-sizing: border-box;
        padding: 50px 60px 50px 60px;

        .icon {
          width: auto;
          height: 71px;
        }

        .tt {
          color: white;
          margin-top: 17px;
          font-size: 18px;
        }

        .intro {
          margin-top: 19px;
          color: #AAAAAA;
          font-size: 14px;
        }
      }
    }
  }

}

@media screen and (max-width: 700px) {
  .page1 {
    height: 70vw;
  }

  .page2 {
    box-sizing: border-box;
    width: 100vw;
    padding: 6vw 2vw;

    .tt {
      font-size: 4vw;
    }

    .box {
      div {
        font-size: 3vw;
      }
    }

    .item {
      margin-top: 10vw;

      .text {
        font-size: 3vw;
      }

      .video {
        background: black;
        height: 50vw;
      }
    }
  }

  .page3 {
    .center {
      width: 100vw;

      .btt {
        font-size: 5vw;
        padding-bottom: 2vw;
        padding-top: 5vw;
      }
    }

    .center {
      .box {
        .item {
          width: 100%;
          text-align: justify;

          .tt {
            font-size: 3.5vw;
          }

          .intro {
            font-size: 3vw;
          }
        }
      }
    }
  }
}
</style>
