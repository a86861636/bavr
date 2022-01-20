<template>
<div class="joinUs">
  <c-header bg="#FFFFFF" color="black" menu="2"></c-header>
  <div class="box">
    <img class="global" src="@/assets/joinUs/global.png">
    <div>
      <div class="text"><img class="icon1" src="@/assets/joinUs/point.png" />{{ $t( "joinUs.address" ) }}</div>
      <div class="text" style="margin-top: 20px"><img class="icon2" src="@/assets/joinUs/cell.png" />（020）31603680</div>
    </div>
  </div>
</div>
</template>

<script>
import header from '@/components/header';
export default {
  name: "joinUs",
  components: {
    "c-header": header
  }
}
</script>

<style lang="less" scoped>
.joinUs {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #05051F;
  min-width: 1000px;
}

.global {
  padding-top: 70px;
  height: 80vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.box {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1;
  color: white;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow: hidden;

  .text {
    position: relative;
    z-index: 2;
    display: flex;
    font-size: 35px;
    flex-direction: row;
    align-items: center;
  }

  .icon1 {
    width: 20px;
    padding: 0 5px;
    margin-right: 20px;
  }

  .icon2 {
    width: 30px;
    margin-right: 20px;
  }
}

@media screen and (max-width: 700px) {
  .box {
    .text {
      font-size: 4.5vw;
    }

    .icon1 {
      width: 4vw;
      padding: 0 0.5vw;
    }

    .icon2 {
      width: 5vw;
    }
  }

}
</style>
