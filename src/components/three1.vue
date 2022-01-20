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

                let ANIMATION_FRAME_LENGTH = 30,
                    INTERACT_DISTANCE = 2.5,
                    animationQueue = [],
                    animationQueue1 = [];
                let objetArray = [];

                let color2 = [0 / 255, 209 / 255, 255 / 255],
                    color1 = [4 / 255, 244 / 255, 188 / 255];

                let bitmap = [];
                let BITMAP_SKIP = 1;

                let fov = 90;
                let cameraPos = [0, 0, 27];
                let cameraLookAt = [0, 0, 0];
                let viewHeight = 2 * Math.tan(THREE.Math.degToRad(fov / 2)) * cameraPos[2],
                    viewWidth = viewHeight * SCREEN_ASPECT_RATIO;
                let mouse = new THREE.Vector3(10000, 10000, -1),
                    mouseScaled = new THREE.Vector3(10000, 10000, -1);


                //背景star
                let starList = [];

                //let frame = 0;
                canvas = document.getElementById("canvas");
                //loader = new THREE.JSONLoader();
                function init() {
                    canvas.addEventListener('mousemove', onDocumentMouseMove, false);

                    // stats = new Stats();
                    // stats.domElement.classList.add("canvas-stats");
                    // stats.domElement.id = "canvas-stats-" + CANVAS_ID;

                    /* If you are familiar with python and opencv
                       you can use this python script to generate custom bitmaps
                       --------------------
                       https://git.io/vdBAu
                       --------------------
                    */
                    let data = `#000000011111111100000000000000
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

                    for (let i = 0; i < data.length; i++) {
                        if (data[i] == '#') {
                            bitmap.push([]);
                        }
                        else {
                            bitmap[bitmap.length - 1].push(data[i] - '0');
                        }
                    }

                    //container.appendChild(stats.domElement);

                    // Renderer
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
                    // camera = new THREE.OrthographicCamera(-viewWidth, viewWidth, viewHeight, -viewHeight, 1, 300);
                    camera.position.set(cameraPos[0], cameraPos[1], cameraPos[2]);
                    camera.lookAt(new THREE.Vector3(cameraLookAt[0], cameraLookAt[1], cameraLookAt[2]));
                    //Scene
                    scene = new THREE.Scene();

                    //背景星星
                    function initStars(){
                        function random(min, max) {
                            return Math.random() * (max - min) + min;
                        }
                        let width = SCREEN_WIDTH/2;
                        let height = SCREEN_HEIGHT/2;
                        let starNumber = 160;
                        let starGeometry = new THREE.OctahedronGeometry();
                        let starMaterial = new THREE.MeshMatcapMaterial( { color: 0xC0C0C0 } );
                        for (let i = 0; i < starNumber; i++) {
                            let starMesh = new THREE.Mesh( starGeometry, starMaterial );
                            let x = random(-width,width);
                            let y = random(-height,height);
                            let z = -200;
                            if( x*x + y*y < width*height ){
                                starMesh.position.set( x, y ,z);
                                scene.add( starMesh );
                                starList.push([ starMesh, random(0,10)]);
                            }
                        }
                    }
                    initStars();
                    // Making Object Array
                    let xOffset = -bitmap[0].length / (BITMAP_SKIP * 2);
                    let yOffset = bitmap.length / (BITMAP_SKIP * 2);

                    //rect and circle

                    for (let i = 0; i < bitmap.length; i += BITMAP_SKIP) {
                        for (let j = 0; j < bitmap[i].length; j += BITMAP_SKIP) {
                            if (bitmap[i][j] == 1) {
                                let planeGeometry = new THREE.PlaneGeometry(1, 1);
                                let circleGeometry = new THREE.CircleGeometry(1, 5);
                                let frac = i / bitmap.length;
                                // Materials
                                // let planeColor = new THREE.Color(`hsl(${360*frac}, 100%, 50%)`);
                                let planeColor = new THREE.Color(
                                    color1[0] * frac + color2[0] * (1 - frac),
                                    color1[1] * frac + color2[1] * (1 - frac),
                                    color1[2] * frac + color2[2] * (1 - frac)
                                );
                                let planeMaterial = new THREE.MeshBasicMaterial({
                                    color: planeColor,
                                    transparent: true,
                                    opacity: THREE.Math.randFloat(0.4, 0.6),
                                    side: THREE.DoubleSide
                                });

                                let circleMaterial = new THREE.MeshBasicMaterial({
                                    color: new THREE.Color(1, 1, 1),
                                    transparent: true,
                                    opacity: THREE.Math.randFloat(0.8, 1),
                                    side: THREE.DoubleSide
                                });

                                // Mesh
                                let planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
                                planeMesh.position.set(xOffset + j / BITMAP_SKIP + 25, yOffset - i / BITMAP_SKIP, 0);
                                let randWidth = THREE.Math.randFloat(0.6, 1.2);
                                let randHeight = randWidth
                                planeMesh.scale.set(randWidth, randHeight, 1);
                                scene.add(planeMesh);
                                objetArray.push({ mesh: planeMesh, animating: false, startPoint: planeMesh.position.clone()});


                                let circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);
                                circleMesh.position.set(xOffset + j / BITMAP_SKIP + THREE.Math.randFloat(-0.5, 0.5) + 25, yOffset - i / BITMAP_SKIP + THREE.Math.randFloat(-0.5, 0.5), 0.1);
                                let randRadius = THREE.Math.randFloat(0.04, 0.08);
                                circleMesh.scale.set(randRadius, randRadius, 1);
                                scene.add(circleMesh);
                                objetArray.push({ mesh: circleMesh, animating: false, startPoint: circleMesh.position.clone()});
                            }
                        }
                    }

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
                    renderer.render(scene, camera);
                }

                function animate() {
                    if(_self.canvasStop){
                        return false;
                    }
                    frame = requestAnimationFrame(animate);
                    render();
                    // controls.update();
                    //frame++;
                }
                function render() {

                    while (animationQueue.length > 0) {
                        let obj_index = animationQueue[0].index;
                        let ani_frame = animationQueue[0].frame;
                        if (ani_frame > ANIMATION_FRAME_LENGTH) {
                            objetArray[obj_index].animating = false;
                            animationQueue.shift();
                        }
                        else {
                            break;
                        }
                    }
                    while (animationQueue1.length > 0) {
                        let obj_index = animationQueue1[0].index;
                        let ani_frame = animationQueue1[0].frame;
                        if (ani_frame > ANIMATION_FRAME_LENGTH) {
                            objetArray[obj_index].animating = false;
                            animationQueue1.shift();
                        }
                        else {
                            break;
                        }
                    }
                    let length = objetArray.length;
                    for (let i = 0; i < length; i++) {

                        let obj = objetArray[i].mesh;
                        //let width = objetArray[i][2];

                        let isAnimating = objetArray[i].animating;
                        if (isAnimating == false) {
                            let px = obj.position.x;
                            let py = obj.position.y;
                            let pz = obj.position.z;
                            let dist = Math.sqrt(Math.pow(px - mouseScaled.x, 2) + Math.pow(py - mouseScaled.y, 2));
                            if ( dist < INTERACT_DISTANCE) {//Math.random()*10 > 9.9
                                let startPosVector = objetArray[i].startPoint.clone();
                                let mouseRepelVector = new THREE.Vector3().subVectors(startPosVector, mouseScaled).multiplyScalar(THREE.Math.randFloat(INTERACT_DISTANCE + 0.5, INTERACT_DISTANCE + 2) - dist);
                                let endPosVector = new THREE.Vector3().addVectors(startPosVector, mouseRepelVector);
                                //let endPosVector = new THREE.Vector3(px,py+0.5,pz+0.5);
                                animationQueue.push({ index: i, frame: 0, start: startPosVector, end: endPosVector });
                                objetArray[i].animating = true;
                            }
                            if( objetArray[i].animating.toString() == 'false' && Math.random()*10 > 9.991 && animationQueue1.length<80){
                                let startPosVector = objetArray[i].startPoint.clone();
                                let endPosVector = new THREE.Vector3(px+0.1,py+0.5,pz+0.5);
                                animationQueue1.push({ index: i, frame: 0, start: startPosVector, end: endPosVector });
                            }
                        }
                    }
                    for (let i = 0; i < animationQueue1.length; i++) {
                        let obj = objetArray[animationQueue1[i].index].mesh;
                        let ani_frame = animationQueue1[i].frame;
                        let startPosVector = animationQueue1[i].start;
                        let endPosVector = animationQueue1[i].end;
                        let curPosVector = new THREE.Vector3();
                        let frac = 1 - Math.abs(ani_frame - (ANIMATION_FRAME_LENGTH / 2)) / (ANIMATION_FRAME_LENGTH / 2);
                        frac = easeOutQuad(frac);
                        curPosVector.lerpVectors(startPosVector, endPosVector, frac);

                        obj.position.x = curPosVector.x;
                        obj.position.y = curPosVector.y;
                        obj.position.z = curPosVector.z;
                        animationQueue1[i].frame += 1;
                    }
                    for (let i = 0; i < animationQueue.length; i++) {
                        let obj = objetArray[animationQueue[i].index].mesh;
                        let ani_frame = animationQueue[i].frame;
                        let startPosVector = animationQueue[i].start;
                        let endPosVector = animationQueue[i].end;
                        let curPosVector = new THREE.Vector3();
                        let frac = 1 - Math.abs(ani_frame - (ANIMATION_FRAME_LENGTH / 2)) / (ANIMATION_FRAME_LENGTH / 2);
                        frac = easeOutQuad(frac);
                        curPosVector.lerpVectors(startPosVector, endPosVector, frac);

                        obj.position.x = curPosVector.x;
                        obj.position.y = curPosVector.y;
                        obj.position.z = curPosVector.z;
                        animationQueue[i].frame += 1;
                    }


                    //镜头偏移旋转
                    let sX = _self.normalizedOrientation.x - camera.position.x;
                    let sY = _self.normalizedOrientation.y - camera.position.y;
                    camera.position.x += sX * 0.05;
                    camera.position.y += sY * 0.05;

                    // camera.quaternion.x += sX * 0.0002;
                    // camera.quaternion.y += sY * 0.0002;

                    renderer.render(scene, camera);
                }

                function onWindowResize() {
                    if (resizeTimer) {
                        clearTimeout(resizeTimer);
                    }
                    resizeTimer = setTimeout(function () {
                        // SCREEN_HEIGHT = Math.min(window.innerWidth, window.innerHeight);
                        // SCREEN_WIDTH = SCREEN_HEIGHT;
                        viewHeight = 2 * Math.tan(THREE.Math.degToRad(fov / 2)) * cameraPos[2];
                        viewWidth = viewHeight * SCREEN_ASPECT_RATIO;
                        SCREEN_ASPECT_RATIO = window.innerWidth / window.innerHeight;
                        SCREEN_WIDTH = window.innerWidth;
                        SCREEN_HEIGHT = window.innerHeight;
                        camera.aspect = SCREEN_ASPECT_RATIO;
                        camera.updateProjectionMatrix();
                        //renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                    }, 1000);
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

                init();
                if(_self.browser.versions.fireFox || _self.browser.versions.edge){
                    return false;
                }
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
        background: radial-gradient(ellipse at 500% 0,#0e0e0f 50%, #202231 80%, rgb(101, 244, 198) 100%);
    }
</style>
