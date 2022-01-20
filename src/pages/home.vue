<template>
<div>
  <!-- pc版 swiper-no-swiping 禁止鼠标拖动-->
  <div :class="{'pc': true, 'swiper-container':true, 'swiper-no-swiping': IsPc}" v-if="IsPc">
    <div class="swiper-wrapper">
      <div class="swiper-slide page1" style="overflow: hidden">
        <c-header></c-header>
        <div class="box">
          <div class="text1">{{ $t("page1.text1") }}</div>
          <div class="text2">{{ $t("page1.text2") }}</div>
          <div class="text2">{{ $t("page1.text3") }}</div>
        </div>
        <img class="bg" src="@/assets/home/page1.png">
      </div>
      <div class="swiper-slide page2">
        <video id="video" v-if="IsPc" :style="fixStyle" :src="video" class="bg" loop muted>浏览器不支持 video 标签，建议升级浏览器。</video>
        <div class="text1">
          {{ $t("page2.text1") }}
        </div>
        <div class="text2">{{ $t("page2.text2") }}</div>
        <div class="moreBtn" @click="toVR">{{ $t("page2.more") }}</div>
      </div>
      <div class="swiper-slide page2_c">
        <video id="video1" :style="fixStyle" :src="video1" class="bg" loop muted>浏览器不支持 video 标签，建议升级浏览器。</video>
        <div class="text1">
          {{ $t("page2_c.text1") }}
        </div>
        <div class="text2">{{ $t("page2.text2") }}</div>
        <div class="moreBtn" @click="toVR">{{ $t("page2.more") }}</div>
      </div>
      <div class="swiper-slide page3">
        <div class="top">
          <div class="bgB"></div>
          <div class="techs">
            <div class="tech">
              <img class="vr" src="@/assets/home/vr.png">
              <div>
                <div class="tt">Virtual Reality</div>
                <div class="intro">{{ $t("page3.vr") }}</div>
              </div>

            </div>
            <div class="tech">
              <img class="ar" src="@/assets/home/ar.png">
              <div>
                <div class="tt">Augmented Reality</div>
                <div class="intro">{{ $t("page3.ar") }}</div>
              </div>
            </div>
            <div class="tech">
              <img class="mr" src="@/assets/home/mr.png">
              <div>
                <div class="tt">Mixed Reality</div>
                <div class="intro">{{ $t("page3.mr") }}</div>
              </div>
            </div>
          </div>
          <div v-if="page3!='' && lang=='en'" class="items">
            <div class="item">
              <img class="bg" src="@/assets/home/bg2.png">
              <div class="tt">{{page3.case_list[0].title_en}}</div>
              <div class="intro">{{page3.case_list[0].introduction_en}}</div>
            </div>
            <div class="item">
              <div class="bg" style="background: white;"></div>
              <div class="tt" style="color: black;">{{page3.case_list[1].title_en}}</div>
              <div class="intro" style="color: #979797">{{page3.case_list[1].introduction_en}}</div>
            </div>
            <div class="item">
              <img class="bg" src="@/assets/home/bg1.png">
              <div class="tt">{{page3.case_list[2].title_en}}</div>
              <div class="intro">{{page3.case_list[2].introduction_en}}</div>
            </div>
          </div>
          <div v-if="page3!='' && lang=='zh'" class="items">
            <div class="item">
              <img class="bg" src="@/assets/home/bg2.png">
              <div class="tt">{{page3.case_list[0].title}}</div>
              <div class="intro">{{page3.case_list[0].introduction}}</div>
            </div>
            <div class="item">
              <div class="bg" style="background: white;"></div>
              <div class="tt" style="color: black;">{{page3.case_list[1].title}}</div>
              <div class="intro" style="color: #979797">{{page3.case_list[1].introduction}}</div>
            </div>
            <div class="item">
              <img class="bg" src="@/assets/home/bg1.png">
              <div class="tt">{{page3.case_list[2].title}}</div>
              <div class="intro">{{page3.case_list[2].introduction}}</div>
            </div>
          </div>
        </div>
        <div class="center">
          <div>
            {{ $t("page3.text1") }}
          </div>
          <div>
            {{ $t("page3.text2") }}
          </div>
        </div>
        <div class="bottom">
          <div class="box">
            <div class="btn">AR</div>
            <div class="btn">VR</div>
            <div class="btn">MR</div>
            <!--<div class="btn">沉浸式体验</div>-->
          </div>
          <div class="box">
            <div class="btn">{{ $t("page3.btn1") }}</div>
            <div class="btn">{{ $t("page3.btn2") }}</div>
          </div>
        </div>
      </div>
      <div class="swiper-slide page4">
        <img class="logo" @click="toPage1" src="@/assets/logo1.png">
        <img class="bg" src="@/assets/home/page4.png">
        <div class="texts">
          <div class="text1">{{ $t("page4.text1") }}</div>
          <div class="text2">{{ $t("page4.text2") }}</div>
          <div class="text3">{{ $t("page4.text3") }}</div>
        </div>
        <div class="boxes" v-if="page4!='' && lang=='en'">
          <div class="box" v-for="(item,index) of page4" :key="index">
            <div class="tt">{{item.trusted_from_en}}</div>
            <div class="intro">{{item.content_en}}</div>
          </div>
        </div>
        <div class="boxes" v-if="page4!='' && lang=='zh'">
          <div class="box" v-for="(item,index) of page4" :key="index">
            <div class="tt">{{item.trusted_from}}</div>
            <div class="intro">{{item.content}}</div>
          </div>
        </div>
      </div>
      <div class="swiper-slide page5">
        <div class="top">
          <img class="logo" @click="toPage1" src="@/assets/logo1.png">
        </div>
        <div class="center">
          <div class="box">
            <div class="tt">
              {{ $t("page5.text1") }}
            </div>
            <div class="tt">
              {{ $t("page5.text2") }}
            </div>
            <div class="items">
              <div v-for="(item,index) in page5" :key="'page5'+index" class="item">
                <img :src="item.logo">
              </div>
            </div>
            <!--                    <div class="more">{{ $t("page5.more") }}</div>-->
          </div>
        </div>
        <c-footer dataType="2"></c-footer>
      </div>
    </div>
  </div>
  <!--移动版-->
  <div class="mobile" v-if="!IsPc">
    <div class="page1">
      <c-header></c-header>
      <div class="box">
        <div>
          <div class="text1">{{ $t("page1.text1") }}</div>
          <div class="text2">{{ $t("page1.text2") }}</div>
          <div class="text2">{{ $t("page1.text3") }}</div>
        </div>
      </div>
      <img class="bg" src="@/assets/home/page1.png">
    </div>
    <div class="page2">
      <img class="bg" :src="cover">
      <div class="box">
        <div class="text1">
          {{ $t("page2.text1") }}
        </div>
        <div class="text2">{{ $t("page2.text2") }}</div>
        <div class="moreBtn" @click="toVR">{{ $t("page2.more") }}</div>
      </div>
    </div>
    <div class="page2_c">
      <img class="bg" :src="cover1">
      <div class="box">
        <div class="text1">
          {{ $t("page2_c.text1") }}
        </div>
        <div class="text2">{{ $t("page2.text2") }}</div>
        <div class="moreBtn" @click="toVR">{{ $t("page2.more") }}</div>
      </div>
    </div>
    <div class="page3">
      <div class="top" v-if="false">
        <div class="left">
          <div class="techs">
            <div class="tech">
              <img class="vr" src="@/assets/home/vr.png">
              <div>
                <div class="tt">Virtual Reality</div>
                <div class="intro">{{ $t("page3.vr") }}</div>
              </div>
            </div>
            <div class="tech">
              <img class="ar" src="@/assets/home/ar.png">
              <div>
                <div class="tt">Augmented Reality</div>
                <div class="intro">{{ $t("page3.ar") }}</div>
              </div>
            </div>
            <div class="tech">
              <img class="mr" src="@/assets/home/mr.png">
              <div>
                <div class="tt">Mixed Reality</div>
                <div class="intro">{{ $t("page3.mr") }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div v-if="page3!='' && lang=='en'" class="items">
            <div class="item">
              <img class="bg" src="@/assets/home/bg2.png">
              <div class="tt">{{page3.case_list[0].title_en}}</div>
              <div class="intro">{{page3.case_list[0].introduction_en}}</div>
            </div>
            <div class="item">
              <div class="bg" style="background: white;"></div>
              <div class="tt" style="color: black;">{{page3.case_list[1].title_en}}</div>
              <div class="intro" style="color: #979797">{{page3.case_list[1].introduction_en}}</div>
            </div>
            <div class="item">
              <img class="bg" src="@/assets/home/bg1.png">
              <div class="tt">{{page3.case_list[2].title_en}}</div>
              <div class="intro">{{page3.case_list[2].introduction_en}}</div>
            </div>
          </div>
          <div v-if="page3!='' && lang=='zh'" class="items">
            <div class="item">
              <img class="bg" src="@/assets/home/bg2.png">
              <div class="tt">{{page3.case_list[0].title}}</div>
              <div class="intro">{{page3.case_list[0].introduction}}</div>
            </div>
            <div class="item">
              <div class="bg" style="background: white;height: 100%"></div>
              <div class="tt" style="color: black;">{{page3.case_list[1].title}}</div>
              <div class="intro" style="color: #979797">{{page3.case_list[1].introduction}}</div>
            </div>
            <div class="item">
              <img class="bg" src="@/assets/home/bg1.png">
              <div class="tt">{{page3.case_list[2].title}}</div>
              <div class="intro">{{page3.case_list[2].introduction}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="text1">
          {{ $t("page3.text1") }}
        </div>
        <div class="text1">
          {{ $t("page3.text2") }}
        </div>
        <div class="box">
          <div class="btn">AR</div>
          <div class="btn">VR</div>
          <div class="btn">MR</div>
          <!--<div class="btn">沉浸式体验</div>-->
        </div>
        <div class="box">
          <div class="btn">{{ $t("page3.btn1") }}</div>
          <div class="btn">{{ $t("page3.btn2") }}</div>
        </div>
      </div>
    </div>
    <div class="page4">
      <div class="texts">
        <div class="text1">{{ $t("page4.text1") }}</div>
        <div class="text2">{{ $t("page4.text2") }}</div>
        <div class="text3">{{ $t("page4.text3") }}</div>
      </div>
      <div class="boxes" v-if="page4!='' && lang=='en'">
        <div class="box" v-for="(item,index) of page4" :key="index">
          <div class="tt">{{item.trusted_from_en}}</div>
          <div class="intro">{{item.content_en}}</div>
        </div>
      </div>
      <div class="boxes" v-if="page4!='' && lang=='zh'">
        <div class="box" v-for="(item,index) of page4" :key="index">
          <div class="tt">{{item.trusted_from}}</div>
          <div class="intro">{{item.content}}</div>
        </div>
      </div>
      <img class="bg" src="@/assets/home/page4_1.png">
    </div>
    <div class="page5">
      <div class="center">
        <div class="box">
          <div class="tt">
            {{ $t("page5.text1") }}
          </div>
          <div class="items">
            <div v-for="(item,index) in page5" :key="'page5'+index" class="item">
              <img :src="item.logo">
            </div>
          </div>
          <!--                    <div class="more">{{ $t("page5.more") }}</div>-->
        </div>
      </div>
      <c-footer dataType="2"></c-footer>
    </div>
  </div>
</div>
</template>

<script>
let mySwiper = null;
import Swiper from 'swiper';
//import canvas from '@/components/three';
import header from '@/components/header';
import footer from '@/components/footer';
export default {
  name: "home",
  components: {
    "c-header": header,
    "c-footer": footer,
    //"c-canvas": canvas
  },
  data() {
    return {
      IsPc: true,
      fixStyle: '',
      page3: '',
      page4: '',
      page5: [],
      canvasStop: false,
      video1: 'media/index/xueshan.mp4',
      cover1: 'media/index/xueshan.png',
      video: 'media/index/zhanting.mp4',
      cover: 'media/index/zhanting.png',
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    }
  },
  mounted() {
    this.IsPc = function () {
      let userAgentInfo = navigator.userAgent;
      let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
      let flag = true;
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      // eslint-disable-next-line no-console
      console.log(flag);
      return flag;
    }();
    this.getP3();
    this.getP4();
    this.getP5();
    if (!this.IsPc) {
      return false;
    }
    //背景视频自适应
    this.resize();
    window.addEventListener('resize', this.resize);
    mySwiper = new Swiper('.swiper-container', {
      speed: 600, //切换速度
      autoplay: false, //可选选项，自动滑动
      direction: 'vertical', //水平(horizontal)或垂直(vertical)
      mousewheel: true, //滚轮切换启动
      on: {
        transitionStart: function () {
          let video = document.getElementById('video');
          let video1 = document.getElementById('video1');
          if (this.activeIndex == 1) {
            video.play();
          } else if (this.activeIndex == 2) {
            video1.play();
          } else if (this.activeIndex == 0) {
            this.canvasStop = false;
          } else {
            this.canvasStop = true;
            video.pause();
            video1.pause();
          }
        },
      },
    });
  },
  methods: {
    resize() {
      const windowWidth = document.body.clientWidth;
      const windowHeight = document.body.clientHeight;
      const windowAspectRatio = windowHeight / windowWidth;
      let videoWidth;
      let videoHeight;
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth;
        videoHeight = videoWidth * 0.5625;
        this.fixStyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
    },
    toVR() {
      this.$router.push({
        path: '/VR'
      })
    },
    //返回第一页
    toPage1() {
      mySwiper.slideTo(0, 1000, false);
    },
    getP4() {
      let data = {
        url: 'index/page_4'
      };
      this.$store.dispatch('get', data).then(res => { //页面加载时读取课程列表
        this.page4 = res.data;
      });
    },
    getP3() {
      let data = {
        url: 'index/page_3'
      };
      this.$store.dispatch('get', data).then(res => { //页面加载时读取课程列表
        this.page3 = res;
      });
    },
    getP5() {
      let data = {
        url: 'index/page_5'
      };
      this.$store.dispatch('get', data).then(res => { //页面加载时读取课程列表
        this.page5 = res.data.splice(0, 8);
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  }
}
</script>

<style lang="less" scoped>
.pc {
  height: 100vh;

  .swiper-wrapper {
    transition-timing-function: ease;
  }

  .page1 {
    background: #05051F;
    color: white;
    position: relative;

    .bg {
      position: absolute;
      right: 11vw;
      top: 50%;
      transform: translate(0, -50%);
      width: 50%;
      z-index: 1;
    }

    .box {
      z-index: 2;
      position: absolute;
      left: 26vw;
      top: 50%;
      transform: translate(-50%, -50%);
      font-weight: 600;

      .text1 {
        font-family: Microsoft YaHei;
        font-size: 25px;
        color: #9F9FA9;
      }

      .text2 {
        margin-top: 15px;
        font-family: Microsoft YaHei;
        color: white;
        font-size: 70px;
        letter-spacing: 0.1em;
      }
    }
  }

  .page2,
  .page2_c {
    position: relative;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: white;

    .bg {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      top: 0;
      z-index: -1;
      height: 100%;
    }

    .text1 {
      font-size: 48px;
      margin-bottom: 5px;
    }

    .text2 {
      font-size: 21px;
      margin-bottom: 25px;
    }

    .moreBtn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: black;
      width: 363px;
      height: 65px;
      background: rgba(255, 255, 255, 1);
      border-radius: 37px;
      font-size: 25px;
      margin-bottom: 120px;
      cursor: pointer;
    }
  }

  .page3 {
    display: flex;
    flex-direction: column;

    .top {
      position: relative;
      padding-top: 6vh;

      .bgB {
        padding-top: 6vh;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 320px;
        background: #05051F;
        z-index: -5;
      }

      .techs {
        height: 220px;
        display: flex;
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .tech {
          display: flex;
          flex-direction: row;
          width: 450px;

          .tt {
            padding-top: 22px;
            color: white;
            font-size: 25px;
          }

          .intro {
            padding-top: 22px;
            color: #BFBFBF;
            font-size: 13px;
            padding-right: 20px;
          }

          .vr {
            padding: 24px 33px 0 22px;
            width: 132px;
            height: 119px;
          }

          .ar {
            padding: 0 0 0 16px;
            width: 162px;
            height: 172px;
          }

          .mr {
            padding: 11px 37px 0 0;
            width: 150px;
            height: 172px;
          }

          img {
            margin-right: 5px;
          }
        }
      }

      .items {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 300px;

        .item {
          position: relative;
          width: 450px;
          padding: 0 21px;
          box-sizing: border-box;
        }

        .tt {
          padding: 28px 0 0 0;
          color: white;
          font-size: 22px;
        }

        .intro {
          padding-top: 60px;
          color: white;
          font-size: 14px;
        }

        .bg {
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
      }
    }

    .center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      min-height: 220px;
      color: #595959;
      font-size: 48px;
    }

    .bottom {
      padding: 0px 0 8vh 0px;

      .box {
        display: flex;
        flex-direction: row;
        padding-bottom: 30px;
        justify-content: center;
      }

      .btn {
        margin: 0 25px;
        min-width: 140px;
        padding: 0 36px;
        box-sizing: border-box;
        font-size: 25px;
        line-height: 50px;
        border-radius: 32px;
        border: 1px solid rgba(151, 151, 151, 1);
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 2000px) {
    .page3 {
      display: flex;
      flex-direction: column;

      .top {
        position: relative;
        padding-top: 14vh;

        .bgB {
          padding-top: 14vh;
        }
      }
    }
  }

  .page4 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #05051F;
    position: relative;
    color: white;

    .logo {
      cursor: pointer;
      height: 44px;
      width: 47px;
      position: absolute;
      left: 60px;
      top: 16px;
    }

    .bg {
      position: absolute;
      left: 17%;
      top: 0;
      height: 100%;
      z-index: 1;
    }

    .text1 {
      font-size: 72px;
      margin: 0 0 80px 0;
    }

    .text2 {
      font-size: 22px;
      margin: 0 0 40px 0;
    }

    .text3 {
      font-size: 18px;
      color: #AAAAB3;
      margin: 0 0 0 0;
      width: 568px;
      line-height: 1.8;
    }

    .texts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      padding-left: 60px;
      margin: 5% 40% 0 15%;
      z-index: 2;
    }

    .boxes {
      z-index: 2;
      width: 1129px;
      height: 239px;
      display: flex;
      flex-direction: row;
      background: #0018A7;
      margin: 0 0 15vh 15%;

      .box {
        box-sizing: border-box;
        padding: 25px 60px 0px 60px;
        width: 33.3%;

        .tt {
          font-size: 22px;
        }

        .intro {
          padding: 25px 0 0 0;
          color: #AAB2E1;
          font-size: 18px;
        }
      }
    }
  }

  .page5 {
    display: flex;
    flex-direction: column;

    .top {
      height: 70px;
      background: #05051F;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .logo {
        cursor: pointer;
        height: 44px;
        width: 47px;
        margin-left: 60px;
      }
    }

    .center {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px 0;

      .box {
        display: flex;
        flex-direction: column;
      }

      .tt {
        font-size: 48px;
        color: #525252;
      }

      .more {
        width: 195px;
        line-height: 56px;
        font-size: 25px;
        text-align: center;
        border-radius: 32px;
        border: 1px solid rgba(245, 166, 35, 1);
        margin-top: 34px;
        align-self: flex-end;
        cursor: pointer;
      }

      .items {
        margin-top: 40px;
        width: 1524px;
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .item {
        width: 25%;
        height: 250px;
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        img {
          height: 100%;
        }
      }
    }

    .bottom {
      color: white;
      height: 224px;
      background: #05051F;
      display: flex;
      flex-direction: row;
      align-items: center;

      .logo {
        margin-left: 83px;
        width: 168px;
        height: 145px;
      }

      .weibo {
        margin-left: 90px;
        width: 37px;
        height: 30px;
      }

      .weixin {
        margin-left: 37px;
        width: 37px;
        height: 30px;
      }

      .address {
        font-size: 10px;
        margin-left: 85px;
      }

      .call {
        margin-left: 55px;
        font-size: 10px;
      }
    }
  }

  .lang-en {
    .page3 {
      .items {
        .item {
          padding: 0 15px;
        }

        .tt {
          padding-top: 20px;
          line-height: 1.2;
          height: 2.4em;
        }

        .intro {
          padding-top: 10px;
        }
      }
    }

    .page4 {
      .texts {
        padding-left: 20px;
      }

      .text1 {
        margin-bottom: 20px;
      }

      .text3 {
        width: 720px;
      }

      .boxes {
        height: auto;
        margin-bottom: 15vh;
      }

      .box {
        padding: 20px;
      }
    }
  }
}

.mobile {
  color: white;
  background: #05051F;
  font-size: 4.5vw;

  .page1 {
    position: relative;

    .bg {
      position: absolute;
      left: 50%;
      top: 55%;
      transform: translate(-50%, -50%);
      display: block;
      width: 60vw;
      z-index: 1;
      padding-left: 20vw;
    }

    .box {
      padding-right: 20vw;
      position: relative;
      z-index: 2;
      height: 65vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .text1 {
        font-size: 3.5vw;
      }

      .text2 {
        font-size: 5vw;
        font-weight: 600;
      }

    }
  }

  .page2,
  .page2_c {
    height: 65vw;
    position: relative;
    overflow: hidden;

    .bg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
      z-index: 1;
    }

    .box {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 2;

      .text1 {
        font-size: 5vw;
        font-weight: 600;
      }

      .text2 {
        font-size: 3vw;
      }

      .moreBtn {
        margin-bottom: 5vw;
        line-height: 10vw;
        color: black;
        width: 40vw;
        background: white;
        border-radius: 20vw;
        text-align: center;
      }
    }
  }

  .page3 {
    .top {
      display: flex;
      flex-direction: row;

      .left,
      .right {
        width: 50%;
        box-sizing: border-box;
        height: 100%;
      }

      .left {
        .vr {
          height: 10vw;
        }

        .ar {
          height: 18vw;
        }

        .mr {
          height: 15vw;
        }

        .tech {
          display: flex;
          flex-direction: row;

        }

        .tt {
          font-size: 1vw;
        }

        .intro {
          font-size: 1vw;
        }
      }

      .right {
        .item {
          padding: 3vw;
          position: relative;
        }

        .bg {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          z-index: 1;
          display: block;
          min-height: 100%;
        }

        .tt {
          position: relative;
          z-index: 2;
          font-size: 3.5vw;
          font-weight: 600;
        }

        .intro {
          font-size: 1vw;
          position: relative;
          z-index: 2;
        }
      }
    }

    .bottom {
      padding: 8vw 0;
      color: black;
      background: white;

      .text1 {
        line-height: 1.7;
        font-size: 4.5vw;
        text-align: center;
        color: #595959;
      }

      .box {
        padding-top: 3vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .btn {
        margin: 0 3vw;
        display: inline-block;
        border: 2px solid rgba(151, 151, 151, 1);
        border-radius: 5vw;
        padding: 1vw 5vw;
      }
    }
  }

  .page4 {

    .texts {
      width: 70vw;
      margin: auto;
      padding: 10vw 0;

      .text1 {
        font-size: 7vw;
        font-weight: 600;
      }

      .text2 {
        margin-top: 7vw;
      }

      .text3 {
        color: #B4B4BC;
        margin-top: 4vw;
        font-size: 3vw;
      }
    }

    .boxes {
      background: #0018A7;
      display: flex;
      flex-direction: row;
    }

    .box {
      width: 33.3%;
      box-sizing: border-box;
      padding: 4vw 1.5vw;

      .tt {
        font-size: 2.5vw;
        height: 2em;
        text-align: center;
        white-space: nowrap;
      }

      .intro {
        text-align: justify;
        color: #AAB2E1;
        margin-top: 4vw;
        font-size: 2.5vw;
      }
    }

    .bg {
      margin-top: 8vw;
      width: 100%;
    }
  }

  .page5 {
    background: white;
    color: #525252;

    .tt {
      padding: 5vw;
      font-size: 4.5vw;
      font-weight: 600;
    }

    .items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: auto;
      justify-content: center;
    }

    .item {
      width: 25vw;
      margin: 2vw;

      img {
        width: 100%;
      }
    }
  }

}
</style>
