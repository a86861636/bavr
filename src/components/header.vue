<template>
<div class="header" :style="'color:'+ color">
  <div class="bg" :style="'background:'+bg"></div>
  <div class="left">
    <img class="logo" @click="toHome" src="@/assets/logo.png">
  </div>
  <div id="center" v-if="show" :style="display" class="center">
    <div v-for="(nav,index) in navs" :key="'nav-'+index" class="nav">
      <div @click="toPath(nav.path)">{{nav.name}}</div>
      <div class="box" v-if="nav.children">
        <div v-for="(nav2,index2) in nav.children" class="nav2" :key="'nav2-'+index2" @click="toPath(nav2.path)">{{nav2.name}}</div>
      </div>
    </div>
  </div>
  <div class="right">
    <div class="lang" @click="changeLang('zh')">中</div>
    <div class="slash">/</div>
    <div class="lang" @click="changeLang('en')">EN</div>
    <img v-if="menu=='1'" class="menu" @click="open" src="@/assets/home/menu.png">
    <img v-else class="menu" @click="open" src="@/assets/home/menu1.png">
  </div>
  <div class="mesh" :style="display" v-if="show" @click="toggle"></div>
</div>
</template>

<script>
// import i18n from '@/locales/index.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      display: '',
      show: true,
    }
  },
  props: {
    bg: {
      type: String,
      default: '#333348'
    },
    color: {
      type: String,
      default: '#FFFFFF'
    },
    menu: {
      type: String,
      default: '1'
    }
  },
  computed: {
    navs() {
      const data = [{
        name: 'MR',
        path: '',
        children: [{
            name: 'VR',
            path: '/VR'
          },
          {
            name: 'AR',
            path: '/AR'
          }
          // ,
          // {
          //   name: 'MR',
          //   path: '/MR'
          // }
        ]
      }, {
        name: this.$t('nav.vrProject'),
        path: '/VRitem',
      }, {
        name: this.$t('nav.state'),
        path: '/stage',
      }, {
        name: this.$t('nav.intro'),
        path: '/intro',
      }, {
        name: this.$t('nav.cooperation'),
        path: '/cocoAgency',
      }, {
        name: this.$t('nav.joinUs'),
        path: '/joinUs',
      }]
      return data
    }
  },
  methods: {
    toPath(path) {
      if (path == '' || this.$route.path == path) {
        return false;
      }
      this.show = !this.show;
      this.$router.push({
        path: path
      });
    },
    open() {
      this.show = true;
      if (this.show) {
        this.display = 'display: block';
      }
    },
    toggle() {
      this.show = !this.show;
      if (this.show) {
        this.display = 'display: block';
      }
    },
    changeLang(lang) {
      this.$i18n.setup(lang); //关键语句
      // eslint-disable-next-line no-console
      console.log(this.$t('nav.vrProject'))
    },
    toHome() {
      this.$router.push({
        path: '/home'
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.header {
  font-weight: 600;
  z-index: 10;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 70px;
  position: relative;
}

.bg {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}

.left {
  z-index: 2;
  display: flex;
  align-items: center;
  width: 25%;

  .logo {
    width: 47px;
    height: 44px;
    margin-left: 65px;
    cursor: pointer;
  }
}

.right {
  padding-right: 60px;
  width: 25%;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: flex-end;
  box-sizing: border-box;
  z-index: 2;

  .lang {
    cursor: pointer;
  }

  div {
    padding: 0 5px;
  }
}

.center {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .nav {
    margin: 0 30px;
    cursor: pointer;
    line-height: 70px;
    position: relative;
    z-index: 2;
    white-space: nowrap;

    .box {
      display: none;
      line-height: 40px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      padding: 10px 32px;
      text-align: center;
      background: #ECECEC;
      color: black;
      font-size: 17px;
    }

    .box::before {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -90%);
      content: " ";
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #ECECEC transparent;
      height: 0px;
      width: 0px;
      z-index: 3;
    }

    .nav2 {
      white-space: nowrap;
      padding-bottom: 2px;
    }

    .nav2:hover {
      color: #6C6C6C;
      padding-bottom: 0px;
      border-bottom: #6C6C6C 2px solid;
    }
  }

  .nav:hover .box {
    display: block;
  }

}

.mesh {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #929292;
  opacity: 0.5;
  z-index: 1;
}

.menu {
  display: none;
}

@media screen and (max-width: 700px) {
  .header {
    height: 13vw;
    font-weight: 500;
  }

  .left {
    .logo {
      width: 6vw;
      height: 6vw;
    }
  }

  .center {
    display: none;
    position: fixed;
    right: 0;
    top: 0;
    transform: translate(0, 0);
    flex-direction: column;
    justify-content: flex-start;
    background: rgb(51, 51, 72);
    z-index: 3;
    width: 70vw;
    height: 100%;

    .nav {
      margin: 0;
      font-size: 4.5vw;
      line-height: 2.7;
      text-align: left;
      text-indent: 1.5em;
      border-bottom: 2px solid rgba(255, 255, 255, 0.18);

      .box {
        text-indent: 2.5em;
        padding: 0;
        text-align: left;
        position: relative;
        display: block;
        transform: translate(0, 0);
        left: 0;
        font-size: 4vw;
        line-height: 2.7;
        background: #3c3c57;
      }

      .box::before {
        display: none;
      }

      .nav2 {
        color: #b5b5b5;
      }
    }
  }

  .slash {
    display: none;
  }

  .lang {
    display: none;
  }

  .menu {
    width: 6.5vw;
    height: 6.5vw;
    display: block;
  }
}
</style>
