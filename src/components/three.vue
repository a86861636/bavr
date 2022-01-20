<template>
    <div class="three">
        <div class="bg"></div>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
    var _self;
    var resizeTimer;
    import YaHei from '@/assets/fonts/Microsoft YaHei_Regular.json'
    import SiCC from '@/assets/fonts/SiCChaoCuHei-M10S_Regular.json'
    import { TimelineLite } from 'gsap'
    //import fontFile from '@/assets/fonts/Microsoft YaHei_Regular.json'
    import * as THREE from 'three'
    let frame = null;
    export default {
        name: "three.vue",

        data() {
           return {
               mousePosition: { x: 0, y: 0 },
               normalizedOrientation: null,
               cameraAmpl: { x: 2, y: 3 }
           }
        },
        mounted() {
            _self = this;
            // let _this = this;
            // window.addEventListener('resize',function(){
            //     cancelAnimationFrame(frame);
            //     _this.ThreeJSCanvas();
            // });
            this.normalizedOrientation = new THREE.Vector3();
            window.addEventListener('mousemove',this.handleMouseMove);
            this.ThreeJSCanvas();
        },
        methods: {
            handleMouseMove(event) {
                this.mousePosition.x = event.clientX || (event.touches && event.touches[0].clientX) || this.mousePosition.x;
                this.mousePosition.y = event.clientY || (event.touches && event.touches[0].clientY) || this.mousePosition.y;

                this.normalizedOrientation.set(
                    -((this.mousePosition.x / window.innerWidth) - 0.5) * this.cameraAmpl.x,
                    ((this.mousePosition.y / window.innerHeight) - 0.5) * this.cameraAmpl.y,
                    0.5,
                );
            },
            ThreeJSCanvas() {//three.js

                let canvas,renderer,camera,scene = null;

                let SCREEN_HEIGHT = window.innerHeight;
                let SCREEN_WIDTH = window.innerWidth;
                let SCREEN_ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;

                let ANIMATION_FRAME_LENGTH = 30;

                let fov = 90;
                let cameraPos = [0, 0, 27];
                let cameraLookAt = [0, 0, 0];
                let viewHeight = 2 * Math.tan(THREE.Math.degToRad(fov / 2)) * cameraPos[2],
                    viewWidth = viewHeight * SCREEN_ASPECT_RATIO;
                let mouse = new THREE.Vector3(10000, 10000, -1),
                    mouseScaled = new THREE.Vector3(10000, 10000, -1);

                // Renderer
                canvas = document.getElementById("canvas");
                canvas.addEventListener('mousemove', onDocumentMouseMove, false);
                renderer = new THREE.WebGLRenderer({
                    alpha: true,
                    antialias: true,
                    canvas: canvas,
                });
                renderer.setClearColor(0x212121, 0);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.shadowMap.enabled = true;
                renderer.shadowMap.type = THREE.PCFSoftShadowMap;
                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

                // Camera and Controls
                camera = new THREE.PerspectiveCamera(fov, SCREEN_ASPECT_RATIO, 0.1, 1000);
                camera.position.set(cameraPos[0], cameraPos[1], cameraPos[2]);
                camera.lookAt(new THREE.Vector3(cameraLookAt[0], cameraLookAt[1], cameraLookAt[2]));
                //Scene
                scene = new THREE.Scene();
                //let frame = 0;

                //图片粒子添加
                let photoData = `#000000011111111100000000000000
                                #000001111111111110000000000000
                                #000011111111111111100000000000
                                #000111111111111111110000000000
                                #001111111111111111111100000000
                                #011111111111111111111110000000
                                #011111111111111111111110000000
                                #111111111111111111111111000000
                                #111111111111111111111111100000
                                #111111111111111111111111101000
                                #111111111111111111111111101100
                                #111111111111111111111111110110
                                #111111111111111111111111110110
                                #111111111110000111111111110111
                                #011111111100000011111111110111
                                #001111111100000011111111110111
                                #000111111000000011111111110110
                                #000000011000000111111111110000
                                #000000000000000111111111110000
                                #000000000000001111111111100000
                                #100000000000011111111111100000
                                #111000000000111111111111100000
                                #011110000111111111111111000000
                                #001111111111111111111110000000
                                #000111111111111111111100000000
                                #000011111111111111111000000000
                                #000001111111111111110000000000
                                #000000011111111111000000000000
                                #000000000111111100000000000000`;

                //数组形式处理字符串photoData
                let bitmap = [];
                let BITMAP_SKIP = 1;
                let color2 = [0 / 255, 180 / 255, 255 / 255],
                    color1 = [4 / 255, 244 / 255, 166 / 255];

                for (let i = 0; i < photoData.length; i++) {
                    if (photoData[i] == '#') {
                        bitmap.push([]);
                    }
                    else {
                        bitmap[bitmap.length - 1].push(photoData[i] - '0');
                    }
                }
                let xOffset = -bitmap[0].length / (BITMAP_SKIP * 2);
                let yOffset = bitmap.length / (BITMAP_SKIP * 2);

                class planes {
                    constructor(){
                        let info = this.getInfo();
                        let geo = new THREE.BufferGeometry();
                        let mat = new THREE.ShaderMaterial({// size * ( 300.0 / - mvPosition.z )
                            blending: THREE.AdditiveBlending,
                            depthTest: false,
                            //transparent: true,
                            vertexColors: true,
                            transparent: true,
                            vertexShader: `
                                attribute float size;
                                attribute float opacity;
                                varying vec3 vColor;
                                varying float vOpacity;
                                void main() {
                                    vOpacity = opacity;
                                    vColor = color;
                                    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                                    gl_PointSize = size;
                                    gl_Position = projectionMatrix * mvPosition;
                                }`,
                            fragmentShader: `
                                uniform sampler2D pointTexture;
                                varying vec3 vColor;
                                varying float vOpacity;
                                void main() {
                                  vec3 whiteColor = vec3(1,1,1);
                                  vec2 xy = gl_PointCoord.xy - vec2(0.5);
                                  float ll = 1.0 - length(xy)/0.5;
                                  vec3 mixColor = mix(vColor, whiteColor,ll);
                                  //gl_FragColor = vec4(vColor, smoothstep(0.0,1.0,ll));
                                  //gl_FragColor = vec4(mixColor, smoothstep(0.0, 1.0,ll));
                                  gl_FragColor = vec4( vColor.x, vColor.y , vColor.z , vOpacity);
                                }
                            `
                        });
                        geo.attributes.position = new THREE.Float32BufferAttribute( info.position, 3 );
                        geo.attributes.color = new THREE.Float32BufferAttribute( info.color, 3 );
                        geo.attributes.size = new THREE.Float32BufferAttribute( info.size, 1 ).setDynamic( true );
                        geo.attributes.opacity = new THREE.Float32BufferAttribute( info.opacity, 1 ).setDynamic( true );
                        //geo.attributes.animating = info.animating;

                        let mesh = new THREE.Points( geo, mat );
                        scene.add( mesh );

                        this.info = info;//初始数据
                        this.geo = geo;//实体数据
                        this.jumpQueue = [];
                    }

                    getInfo(){
                        let item = {
                            position: [],
                            color: [],
                            opacity: [],
                            size: [],
                            animating: []
                        };

                        let size = SCREEN_WIDTH/180;
                        if( size < 9){
                            size = 9.0
                        }
                        for (let i = 0; i < bitmap.length; i += BITMAP_SKIP) {
                            for (let j = 0; j < bitmap[i].length; j += BITMAP_SKIP) {
                                if (bitmap[i][j] == 1) {
                                    item.position.push(xOffset + j / BITMAP_SKIP + 25, yOffset - i / BITMAP_SKIP, 0);
                                    //pointPosition.push( xOffset + j / BITMAP_SKIP + 25 + Math.random()*1 - 0.5, yOffset - i / BITMAP_SKIP + Math.random()*1 - 0.5, 0 );

                                    let frac = i / bitmap.length;
                                    item.color.push(color1[0] * frac + color2[0] * (1 - frac), color1[1] * frac + color2[1] * (1 - frac), color1[2] * frac + color2[2] * (1 - frac));
                                    item.size.push(Math.random() * size + size);
                                    item.opacity.push(Math.random() * 0.4 + 0.2);
                                    item.animating.push("false");
                                }
                            }
                        }
                        return item;
                    }

                    setSize(){//设置粒子大小
                        let length = this.info.size.length;
                        let info = this.info;
                        info.size = new function(){
                            let arr = [];
                            let size = SCREEN_WIDTH/180;
                            if( size < 9){
                                size = 9.0
                            }
                            // eslint-disable-next-line no-console
                            console.log(size);
                            for( let i = 0; i < length; i++ ){
                                arr.push(Math.random() * size + size);
                            }
                            return arr;
                        };
                        this.geo.attributes.size = new THREE.Float32BufferAttribute( info.size, 1 ).setDynamic( true );
                        this.geo.attributes.size.needsUpdate = true;
                    }

                    jump(){//粒子运动
                        let jumpQueue = this.jumpQueue;
                        let positionArr = this.geo.attributes.position.array;
                        let animatingArr = this.info.animating;
                        let info = this.info;

                        //移除过时的动画
                        while (jumpQueue.length > 0) {
                            let obj_index = jumpQueue[0].index;
                            let ani_frame = jumpQueue[0].frame;
                            if (ani_frame > ANIMATION_FRAME_LENGTH) {
                                animatingArr[obj_index] = "false";
                                jumpQueue.shift();
                            }
                            else {
                                break;
                            }
                        }

                        for( let i = 0; i < animatingArr.length; i++ ){
                            let item = { x: info.position[3*i],y: info.position[3*i+1], z: info.position[3*i+2] };
                            let INTERACT_DISTANCE = 2.5;
                            if( animatingArr[i] == 'false' ){
                                if(Math.random()*10 > 9.991){//粒子随机跳动
                                    let startPosVector = new THREE.Vector3(item.x,item.y,item.z);
                                    let endPosVector = new THREE.Vector3(item.x + 0.1, item.y + 0.5, item.z + 0.5 );
                                    jumpQueue.push({ index: i, frame: 0, start: startPosVector, end: endPosVector });
                                    //animatingArr[i] = "true";
                                }
                                let dist = Math.sqrt(Math.pow(item.x - mouseScaled.x, 2) + Math.pow(item.y - mouseScaled.y, 2));
                                if ( dist < INTERACT_DISTANCE) {//鼠标移动到粒子附近发生互动
                                    let startPosVector = new THREE.Vector3(item.x,item.y,item.z);
                                    let mouseRepelVector = new THREE.Vector3().subVectors(startPosVector, mouseScaled).multiplyScalar(THREE.Math.randFloat(INTERACT_DISTANCE + 0.5, INTERACT_DISTANCE + 2) - dist);
                                    let endPosVector = new THREE.Vector3().addVectors(startPosVector, mouseRepelVector);
                                    //let endPosVector = new THREE.Vector3(px,py+0.5,pz+0.5);
                                    jumpQueue.push({ index: i, frame: 0, start: startPosVector, end: endPosVector });
                                    animatingArr[i] = "true";
                                }
                            }
                        }

                        for (let i = 0; i < jumpQueue.length; i++) {
                            let item = jumpQueue[i];
                            let index = item.index*3;
                            let ani_frame = jumpQueue[i].frame;
                            let startPosVector = jumpQueue[i].start;
                            let endPosVector = jumpQueue[i].end;
                            let curPosVector = new THREE.Vector3();
                            let frac = 1 - Math.abs(ani_frame - (ANIMATION_FRAME_LENGTH / 2)) / (ANIMATION_FRAME_LENGTH / 2);
                            frac = easeOutQuad(frac);
                            curPosVector.lerpVectors(startPosVector, endPosVector, frac);

                            positionArr[index] = curPosVector.x;
                            positionArr[index+1] = curPosVector.y;
                            positionArr[index+2] = curPosVector.z;
                            item.frame += 1;
                        }

                        this.geo.attributes.position.needsUpdate = true;
                    }
                }
                let planesObj = new planes();

                class circles{
                    constructor(){
                        let info = this.getInfo();
                        let geo = new THREE.BufferGeometry();
                        let mat = new THREE.PointsMaterial({
                            color: 0xffffff,
                            size: 0.09
                        });
                        geo.attributes.position = new THREE.Float32BufferAttribute( info.position, 3 );

                        let mesh = new THREE.Points( geo, mat );
                        scene.add( mesh );

                        this.info = info;//初始数据
                        this.geo = geo;//实体数据
                        this.jumpQueue = [];
                    }

                    getInfo(){
                        let info = {
                            position: [],
                            animating: []
                        };
                        for (let i = 0; i < bitmap.length; i += BITMAP_SKIP) {
                            for (let j = 0; j < bitmap[i].length; j += BITMAP_SKIP) {
                                if (bitmap[i][j] == 1) {
                                    info.position.push( xOffset + j / BITMAP_SKIP + 25 + Math.random()*1 - 0.5, yOffset - i / BITMAP_SKIP + Math.random()*1 - 0.5, 0 );
                                    info.animating.push( 'false' );
                                }
                            }
                        }
                        return info;
                    }

                    jump(){//粒子运动
                        let jumpQueue = this.jumpQueue;
                        let positionArr = this.geo.attributes.position.array;
                        let animatingArr = this.info.animating;
                        let position = this.info.position;

                        //移除过时的动画
                        while (jumpQueue.length > 0) {
                            let obj_index = jumpQueue[0].index;
                            let ani_frame = jumpQueue[0].frame;
                            if (ani_frame > ANIMATION_FRAME_LENGTH) {
                                animatingArr[obj_index] = "false";
                                jumpQueue.shift();
                            }
                            else {
                                break;
                            }
                        }

                        for( let i = 0; i < animatingArr.length; i++ ){
                            let item = { x: position[3*i],y: position[3*i+1], z: position[3*i+2] };
                            let INTERACT_DISTANCE = 2.5;
                            if( animatingArr[i] == 'false' ){
                                if(Math.random()*10 > 9.991){//粒子随机跳动
                                    let startPosVector = new THREE.Vector3(item.x,item.y,item.z);
                                    let endPosVector = new THREE.Vector3(item.x + 0.1, item.y + 0.5, item.z + 0.5 );
                                    jumpQueue.push({ index: i, frame: 0, start: startPosVector, end: endPosVector });
                                    //animatingArr[i] = "true";
                                }
                                let dist = Math.sqrt(Math.pow(item.x - mouseScaled.x, 2) + Math.pow(item.y - mouseScaled.y, 2));
                                if ( dist < INTERACT_DISTANCE) {//鼠标移动到粒子附近发生互动
                                    let startPosVector = new THREE.Vector3(item.x,item.y,item.z);
                                    let mouseRepelVector = new THREE.Vector3().subVectors(startPosVector, mouseScaled).multiplyScalar(THREE.Math.randFloat(INTERACT_DISTANCE + 0.5, INTERACT_DISTANCE + 2) - dist);
                                    let endPosVector = new THREE.Vector3().addVectors(startPosVector, mouseRepelVector);
                                    //let endPosVector = new THREE.Vector3(px,py+0.5,pz+0.5);
                                    jumpQueue.push({ index: i, frame: 0, start: startPosVector, end: endPosVector });
                                    animatingArr[i] = "true";
                                }
                            }
                        }

                        for (let i = 0; i < jumpQueue.length; i++) {
                            let item = jumpQueue[i];
                            let index = item.index*3;
                            let ani_frame = jumpQueue[i].frame;
                            let startPosVector = jumpQueue[i].start;
                            let endPosVector = jumpQueue[i].end;
                            let curPosVector = new THREE.Vector3();
                            let frac = 1 - Math.abs(ani_frame - (ANIMATION_FRAME_LENGTH / 2)) / (ANIMATION_FRAME_LENGTH / 2);
                            frac = easeOutQuad(frac);
                            curPosVector.lerpVectors(startPosVector, endPosVector, frac);

                            positionArr[index] = curPosVector.x;
                            positionArr[index+1] = curPosVector.y;
                            positionArr[index+2] = curPosVector.z;
                            item.frame += 1;
                        }

                        this.geo.attributes.position.needsUpdate = true;
                    }
                }
                let circlesObj = new circles();

                //波浪粒子

                //文字添加
                function initText(){//字体包转json文件 http://gero3.github.io/facetype.js/
                    const fontLoader = new THREE.FontLoader();
                    let font;

                    let group = new THREE.Group();
                    function createText(text,size,color,y,fontFamily){
                        if(fontFamily=='SiCC'){
                            font = fontLoader.parse(SiCC);
                        }else{
                            font = fontLoader.parse(YaHei);
                        }
                        let basePosition = -25;
                        let letterSpacing = 0.03;
                        let letters = [...text];
                        letters.forEach((letter) => {
                            if (letter === ' ') {
                                basePosition += size * 0.5;
                            } else {
                                const geom = new THREE.ShapeGeometry(
                                    font.generateShapes(letter, size, 1),
                                );
                                geom.computeBoundingBox();
                                const mat = new THREE.MeshBasicMaterial({
                                    color,
                                });
                                const mesh = new THREE.Mesh(geom, mat);

                                mesh.position.x = basePosition;
                                mesh.position.y = y;
                                mesh.position.z = 0.01;
                                basePosition += geom.boundingBox.max.x + letterSpacing;
                                group.add(mesh);
                            }
                        });
                    }
                    let string1 = '为了更好的生活';
                    let string2 = '创新、智慧';
                    let string3 = 'For a better life,innovation,wisdom';
                    createText(string1, 2, '#ffffff',0,'SiCC');
                    createText(string2, 2, '#ffffff',-3.5,'SiCC');
                    createText(string3, 1, '#9F9FA9',3.5);
                    scene.add(group);
                }
                initText();

                let line = new TimelineLite();
                // eslint-disable-next-line no-console
                console.log(line);

                function render(){

                    planesObj.jump();
                    circlesObj.jump();
                    //镜头偏移旋转
                    let sX = _self.normalizedOrientation.x - camera.position.x;
                    let sY = _self.normalizedOrientation.y - camera.position.y;
                    camera.position.x += sX * 0.03;
                    camera.position.y += sY * 0.03;
                    camera.quaternion.x -= sX * 0.00035;
                    camera.quaternion.y -= sY * 0.00035;

                    renderer.render(scene, camera);

                }

                function animate() {
                    if(_self.canvasStop){
                        return false;
                    }
                    frame = requestAnimationFrame(animate);
                    render();
                }

                function onWindowResize() {
                    if (resizeTimer) {
                        clearTimeout(resizeTimer);
                    }
                    resizeTimer = setTimeout(function () {
                        SCREEN_WIDTH = window.innerWidth;
                        SCREEN_HEIGHT = window.innerHeight;
                        SCREEN_ASPECT_RATIO = window.innerWidth / window.innerHeight;
                        viewWidth = viewHeight * SCREEN_ASPECT_RATIO;
                        camera.aspect = SCREEN_ASPECT_RATIO;
                        camera.updateProjectionMatrix();
                        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                        planesObj.setSize();
                        canvas.addEventListener('mousemove', onDocumentMouseMove, false);
                    }, 10);
                }

                function onDocumentMouseMove(event) {

                    let rect = canvas.getBoundingClientRect();
                    mouse.x = event.clientX - rect.left;
                    mouse.y = event.clientY - rect.top;

                    mouseScaled.x = mouse.x * viewWidth / SCREEN_WIDTH - viewWidth / 2;
                    mouseScaled.y = -mouse.y * viewHeight / SCREEN_HEIGHT + viewHeight / 2;

                }

                //decelerating to zero velocity
                function easeOutQuad(t) {
                    return t * (2 - t);
                }

                //Event Handlers
                window.addEventListener("resize", onWindowResize);

                // if(_self.browser.versions.fireFox || _self.browser.versions.edge){
                //     return false;
                // }
                animate();
            },
        },
        beforeDestroy() {//清除动画
            cancelAnimationFrame(frame);
        }
    }
</script>

<style scoped>
    #canvas{
        z-index: 1;
        top: 0;
        left: 0;
        position: absolute;
    }

    .bg{
        z-index: -1;
        top: 0;
        left: 0;
        position: absolute;
        height: calc(100% + 450px);
        width: 100%;
        background: #05051F;
    }
</style>
