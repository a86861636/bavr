<template>
    <div>
        <div v-if="dataType == '2'" class="footer" style="background: #05051F;color: white;">
            <img class="logo" src="@/assets/logo3.png" />
            <div class="address">地址：广州开发区开源大道136号穗开科技园B1栋第五层</div>
            <div class="call">联系方式：（020）31603680</div>
            <div class="provider">
                <a
                    class="link1"
                    target="_blank"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011202001061"
                >
                    <img class="police" src="@/assets/police.png" />
                    粤公网安备 44011202001061号
                </a>
                <a class="link2" target="_blank" href="https://beian.miit.gov.cn">粤ICP备20032318号</a>
            </div>
        </div>
        <div v-else class="footer black" style="background: #ECECEC;color: #05051F">
            <img class="logo" src="@/assets/home/logoB.png" />
            <div class="address">地址：广州开发区开源大道136号穗开科技园B1栋第五层</div>
            <div class="call">联系方式：（020）31603680</div>
            <div class="provider">
                <a
                    class="link1"
                    target="_blank"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011202001061"
                >
                    <img class="police" src="@/assets/police.png" />
                    粤公网安备 44011202001061号
                </a>
                <a class="link2" target="_blank" href="https://beian.miit.gov.cn">粤ICP备20032318号</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "c-footer",
    props: {
        dataType: {
            type: String,
            default: '1'
        }
    }
}
</script>

<style scoped lang="less">
a {
    color: white;
    text-decoration: none;
}
a:visited {
    color: white;
    text-decoration: none;
}
.black {
    a {
        color: rgb(5, 5, 31);
    }
    a:visited {
        color: rgb(5, 5, 31);
        text-decoration: none;
    }
}
.footer {
    justify-content: center;
    width: 100%;
    color: white;
    height: 224px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    .link1 {
        position: relative;
        padding-left: 25px;
    }
    .link2 {
        margin-left: 30px;
    }
    .police {
        height: 25px;
        width: 25px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
    }
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
    .address,
    .provider,
    .call {
        margin-left: 55px;
    }
}
@media screen and (max-width: 700px) {
    .footer {
        font-size: 2vw;
    }
}
</style>
