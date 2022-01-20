import Vue from 'vue';
import Vuex from 'vuex'; //引入 vuex
import axios from 'axios';
import qs from "qs";
//发送请求库

Vue.use(Vuex); //使用 vuex

export default new Vuex.Store({
    state: {
        baseURL: 'http://www.gbamr.com.cn/',//外网服务器//http://www.gbamr.com/
        mediaURL: 'http://www.gbamr.com.cn/media/',
        videoURL: 'http://www.gbamr.com.cn/video/',
        // baseURL: 'http://192.168.8.246:8002/',//本地服务器http://192.168.8.235:8888
        // mediaURL: 'http://192.168.8.246:8002/media/',
        // videoURL: 'http://192.168.8.246:8002/video/',
    },
    mutations: {

    },
    actions: {
        //3种请求方式
        post: function ({state}, data) {//post请求
            let url = data.url;
            let trans = data.trans;
            delete data.url;
            delete data.trans;
            if (trans) {//转换json对象直接转为(以?和&符连接的形式)
                data = qs.stringify(data);
            }
            return new Promise((resolve, reject) => {
                axios({
                    url: state.baseURL + url,//请求地址
                    method: 'post',//post或者get
                    headers: {//请求头部
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    data: data
                }).then(res => {
                    resolve(res.data);
                }).catch(error => {
                    reject(error);
                })
            });
        },
        get( { state }, data ){//get请求
            let url = data.url;
            delete data.url;
            return new Promise(( resolve, reject ) => {
                axios( state.baseURL + url, {
                    params: data
                }).then( res => {
                    resolve( res.data );
                }).catch( error =>{
                    reject( error );
                })
            })
        },
        uploadFile( { state }, data ){//上传文件方法
            let url = data.url;
            return new Promise(( resolve, reject ) => {
                axios.post( state.baseURL + url, data.param,{
                    'Content-Type':'multipart/form-data'
                }).then( res => {
                    resolve( res.data );
                }).catch( error =>{
                    reject( error );
                });
            });
        },
    },
    getters: {

    }
})
