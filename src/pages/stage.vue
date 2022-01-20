<template>
    <div class="intro">
        <c-header></c-header>
        <div class="container">
            <div class="tt">{{ $t( "stage.tt" ) }}</div>
            <img class="img" src="@/assets/stage/img1.png">
            <div class="text" v-html='$t( "stage.text" )'>
            </div>
            <img class="img1" src="@/assets/stage/img2.png">
            <img class="img2" src="@/assets/stage/img3.png">
            <img class="img1" src="@/assets/stage/img4.png">
            <img class="img2" src="@/assets/stage/img5.png">

        </div>
        <div class="videoBox">
            <div class="tt">{{ $t( "stage.video" ) }}</div>
            <div class="line"></div>
            <video class="video" v-if="stage.video_1" controls :src="stage.video_1"></video>
        </div>
        <div class="bottom">
            <div class="tt">{{ $t( "stage.realize" ) }}</div>
            <div class="line"></div>
            <div class="imgBox">
                <div class="more">{{ $t( "stage.more" ) }}</div>
                <img class="img" src="@/assets/stage/img6.png"/>
            </div>
        </div>
        <c-footer class="footer"></c-footer>
    </div>
</template>

<script>
    import header from '@/components/header'
    import footer from '@/components/footer'
    export default {
        name: "intro",
        components:{
            'c-header': header,
            'c-footer': footer
        },
        data() {
            return {
                stage: {},
            }
        },
        mounted(){
            this.getStage();
        },
        methods: {
            getStage() {
                let data = {
                    url: 'ExhibitionCase/cases/ '
                };
                this.$store.dispatch('get', data).then(res => {//页面加载时读取课程列表
                    this.stage = res.case_list[0];
                    // eslint-disable-next-line no-console
                    console.log(this.stage);
                });
            },
        },
        computed: {
        }
    }
</script>

<style scoped lang="less">

    .intro{
        min-height: 100vh;
        position: relative;
        box-sizing: border-box;
        padding-bottom: 230px;
        overflow: hidden;
    }

    .container{
        width: 1400px;
        margin: auto;
        padding: 0 40px 80px 40px;

        .tt{
            padding: 60px 0 40px 0;
            text-align: center;
            font-size: 40px;
            font-weight: 600;
        }

        .img{
            float: right;
            width: 50%;
            padding: 0 0 30px 70px;
            box-sizing: border-box;
        }

        .img1{
            padding: 30px 30px 30px 0px;
            width: 50%;
            box-sizing: border-box;
        }

        .img2{
            padding: 30px 0 30px 30px;
            width: 50%;
            box-sizing: border-box;
        }

        .text{
            font-size:20px;
            text-indent: 2em;
            padding-bottom: 20px;
        }
    }



    .footer{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .videoBox{
        background: #05051F;
        padding: 50px 0 80px 0;
        color: white;

        .tt{
            text-align: center;
            font-size:40px;
            font-weight: 600;
        }

        .line{
            width:649px;
            margin: 25px auto 0 auto;
            height: 5px;
            background-image: linear-gradient(to right, #ccc 0%, #ccc 80%, transparent 20%);
            background-size: 20px 5px;
            background-repeat: repeat-x;
        }

        .video{
            width: 1400px;
            background: black;
            margin: 25px auto 0 auto;
            display: block;
        }
    }

    .bottom{
        padding: 50px 0 0px 0;
        .tt{
            text-align: center;
            font-size:40px;
            font-weight: 600;
        }

        .line{
            width:649px;
            margin: 25px auto 0 auto;
            height: 5px;
            background-image: linear-gradient(to right, #ccc 0%, #ccc 80%, transparent 20%);
            background-size: 20px 5px;
            background-repeat: repeat-x;
        }

        .imgBox{
            position: relative;
            width: 100%;
        }

        .img{
            min-width: 100%;
            max-height: 100vh;
            background: black;
            margin: 25px auto 0 auto;
            display: block;
        }

        .more{
            font-weight: 600;
            font-size:25px;
            color: #030303;
            width: 214px;
            line-height: 61px;
            background: rgba(255,255,255,0.8);
            border-radius: 30px;
            position: absolute;
            left: 50%;
            bottom: 25%;
            transform: translate(-50%,0);
            text-align: center;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 700px){
        .container{
            box-sizing: border-box;
            width: 100vw;

            .tt{
                font-size: 5vw;
            }
            .text{
                font-size: 4vw;
            }
        }
        .bottom{
            .img{
                width: 100vw;
            }
        }

    }
</style>
