<template>
  <div class="VRitem">
    <c-header></c-header>
    <div class="contianer">
      <div class="vr-box">
        <div v-for="(item,index) in vrList" :key="index" class="vr-item" @click="downLoad(item.project_file)">
          <img class="background" :src="item.image" />
          <div class="mask"></div>
          <div class="bottom">
            <div class="name">
              {{item.title}}
            </div>
            <div class="download">
              <img class="icon" src="@/assets/xr/download.png">
              <div class="text">{{ $t( "project.download" ) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <c-footer></c-footer>
  </div>
</template>

<script>
import header from "@/components/header";
import footer from "@/components/footer";
export default {
  name: "joinUs",
  components: {
    "c-header": header,
    "c-footer": footer
  },
  data() {
    return {
      vrList: []
    }
  },
  computed:{
      lang() {
          return this.$i18n.locale;
      }
  },
  mounted() {
    this.getList()
  },
  methods: {
    downLoad(path){
      if(!path){
        alert('暂不提供下载')
      }else{
        window.open( path, "_blank")
      }
    },
    getList() {
      let data = {
          url: 'experience/vr/'
      };
      this.$store.dispatch('get', data).then(res => {//页面加载时读取课程列表
          this.vrList = res.data
      });
  },
  }
};
</script>

<style scoped lang="less">
.VRitem{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.contianer{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vr-box{
  padding: 100px 0;
  width: 1500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.vr-item{
  margin: 15px;
  width: 470px;
  height: 280px;
  position: relative;
  cursor: pointer;
}
.background{
  width: 100%;
  height: 100%;
}
.mask{
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  left: 0;
  top: 0;
  display: none;
}
.vr-item:hover .bottom{
  display: flex;
}
.vr-item:hover .mask{
  display: flex;
}
.bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: rgba(0,0,0,0.45);
  display: none;
  flex-direction: row;
}
.name{
  flex: 1;
  font-size: 13px;
  color: rgba(77,200,255,1);
  text-align: center;
  overflow: hidden;
  text-overflow:ellipsis;
  line-height: 50px;
  white-space: nowrap;
  margin: 0 10px;
}
.download{
  display: flex;
  flex-direction: row;
  padding-right: 30px;
  align-items: center;
  .icon{
    width: 22px;
    height: 18px;
    margin-right: 5px;
  }
  .text{
    font-size:15px;
    color:rgba(255,255,255,1);
  }
}
@media screen and (max-width: 700px){
  .vr-box{
    width: 100%;
    padding: 50px 0;
  }
  .vr-item{
    width: 1000px;
    margin: 30px auto;
    height: 600px;
  }
  .vr-item:hover .mask{
    display: none;
  }
  .bottom{
    height: 100px;
    display: flex;
  }
  .name{
    line-height: 100px;
    font-size: 3vw;
  }
  .download{
    .icon{
      width: 2.5vw;
      height: 2vw;
    }
    .text{
      font-size: 2.5vw;
    }
  }
}
</style>
