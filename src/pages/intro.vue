<template>
    <div class="intro">
        <c-header></c-header>
        <div class="tt">{{ $t( "intro.tt" ) }}</div>
        <div class="container">
            <img class="img" src="@/assets/intro/bavr.png">
            <div class="text" v-html='$t( "intro.text" )'>
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
    }
</script>

<style scoped lang="less">

    .intro{
        background: #05051F;
        color: white;
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
    }

    .tt{
        padding: 60px 0 40px 0;
        text-align: center;
        font-size: 40px;
    }

    .img{
        float: right;
        width: 50%;
        padding: 0 0 30px 70px;
        box-sizing: border-box;
    }

    .text{
        font-size:20px;
        text-indent: 2em;
    }

    .footer{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    @media screen and (max-width: 700px){
        .tt{
            font-size: 5vw;
            font-weight: 600;
        }
        .container{
            width: auto;
            box-sizing: border-box;
            padding: 0 4vw 4vw 4vw;

            .text{
                font-size: 4vw;
            }
        }
    }
</style>
