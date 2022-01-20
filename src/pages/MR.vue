<template>
<div class="mr">
  <div class="page4">
    <c-header bg="#05051F"></c-header>
    <img class="bg" src="@/assets/xr/ARBG.png">
    <div class="box">
      <div class="top">
        <img src="@/assets/xr/AR.png" class="icon">
        <div class="tt">Augmented Reality</div>
      </div>
      <div class="intro">{{ $t("ar.text1") }}</div>
      <div class="follow">{{ $t("ar.text2") }}</div>
    </div>
  </div>
  <div class="page2">
    <div class="box">
      <div class="texts">
        <div class="tt">{{ $t("mr.tt1") }}</div>
        <div class="content">{{ $t("mr.intro1") }}</div>
        <div class="tt">{{ $t("mr.tt2") }}</div>
        <div class="content">{{ $t("mr.intro2") }}</div>
      </div>
      <img class="img" src="@/assets/xr/arImg.png">
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

  <div class="page1" style="display:none">
    <img class="bg" src="@/assets/xr/MRBG.png">
    <div class="box">
      <div class="top">
        <img src="@/assets/xr/MR.png" class="icon">
        <div class="tt">Mixed Reality</div>
      </div>
      <div class="intro">{{ $t("mr.text1") }}</div>
    </div>
  </div>
  <div class="page3">
    <!--      <div class="top">-->
    <!--        <img src="@/assets/xr/mrw.png" class="icon">-->
    <!--        <div class="text">Augmented Reality</div>-->
    <!--      </div>-->
    <div class="center">
      <div class="btt">{{$t('vr.benefits')}}</div>
      <div class="box" v-if="lang=='zh'">
        <div class="item" v-for="(item,index) in introList" :key="'introList'+index">
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
      introList: []
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    }
  },
  components: {
    "c-header": header,
    "c-footer": footer
  },
  mounted() {
    this.getMR();
    this.getIntro();
  },
  methods: {
    getMR() {
      let data = {
        url: 'xr/mrProject'
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
.mr {
  background: #ECECEC;
  overflow: hidden;

  .page1 {
    background: white;
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100vh;

    .follow {
      font-size: 3.5vw;
    }

    .bg {
      position: absolute;
      top: -10%;
      left: 40%;
      transform: translate(-50%, 0);
      height: 120vh;
      z-index: 1;
    }

    .box {
      z-index: 2;
      flex: 1;
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

  .page4 {
    background: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;

    .follow {
      font-size: 3.5vw;
    }

    .bg {
      position: absolute;
      top: -10%;
      left: 40%;
      transform: translate(-50%, 0);
      height: 120vh;
      z-index: 1;
    }

    .box {
      z-index: 2;
      flex: 1;
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
    width: 1530px;
    margin: auto;
    padding-bottom: 200px;
    padding-top: 200px;

    .box {
      position: relative;
      z-index: 2;
      width: 1530px;
      display: flex;
      flex-direction: row;

      .texts {
        flex: 1;
        padding-right: 130px;

        .tt {
          font-weight: 600;
          color: black;
          font-size: 20px;
          margin-bottom: 25px;
        }

        .content {
          margin-bottom: 50px;
          font-size: 16px;
          color: #676767;
          white-space: pre-wrap;
        }
      }

      .img {
        width: 1146px;
        height: 597px;
      }
    }

    .item {
      display: flex;
      flex-direction: row;
      margin-top: 200px;
      flex-wrap: wrap;

      .tt {
        width: 100%;
        font-size: 40px;
      }

      .text {
        width: 332px;
        margin-top: 50px;
        font-size: 18px;
        white-space: pre-wrap;
      }

      .video {
        flex: 1;
        height: 696px;

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

      .bg {
        height: 100vw;
      }
    }

    .page2 {
      box-sizing: border-box;
      width: 100vw;
      padding: 4vw 2vw;

      .box {
        width: auto;

        .texts {
          padding-right: 1vw;

          .tt {
            font-size: 4.5vw;
          }

          .content {
            font-size: 4vw;
          }
        }

        .img {
          display: none;
        }

      }

      .item {
        flex-direction: column;
        margin-top: 4vw;

        .text {
          width: auto;
        }

        .video {
          margin-top: 4vw;
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
}
</style>
