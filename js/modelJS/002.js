import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

// https://codesandbox.io/s/three-jsjia-zai-3dmo-xing-forked-v6yjgy?file=/src/Scene.js
const path = "../js/models/002/"
const DecoderPath = '../js/three/jsm/libs/draco/'
const modelName = "002.gltf"

let renderer, scene, camera, controls, material;
// let width = window.innerWidth;
// let height = window.innerHeight;
let width = 800;
let height = 500;

init();

function init(){
    setScene();
    setCamera();
    setRender();
    setModel();
    setLight()
    // setMaterial();
    setControls();
    animate();
}

function setScene(){
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    scene.add( new THREE.GridHelper( 5, 10, 0x888888, 0x444444 ) );
}

function setCamera(){
    camera = new THREE.PerspectiveCamera(
        50,
        width / height,
        0.1,
        10000
      )
      let p = 4
      camera.position.set(p+2.12,p-0.47,p+0.18)
      camera.lookAt(10,10,10)
      scene.add(camera)
}

function setRender(){
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( width, height );
    document.getElementById("webgl").appendChild( renderer.domElement );
}

function setModel() {
    const gltfLoader = new GLTFLoader()
    const objLoader = new OBJLoader();

    var dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( DecoderPath );
    dracoLoader.setDecoderConfig({type: 'js'});
    gltfLoader.setDRACOLoader(dracoLoader);

    let flag = 0;
    if(flag){
      objLoader
      .setPath(path)
      .load(modelName, (obj) => {
        const s = 0.01
        obj.scale.set(s, s, s)
        scene.add(obj)
      })
    }else{
      gltfLoader
      .setPath(path)
      .load(modelName, (gltf) => {
        const s = 50
        gltf.scene.scale.set(s, s, s)
        scene.add(gltf.scene)
        console.log("加载完成");
      })
    }
  }

function setControls() {
    controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
  }

function setMaterial(){

}

function animate(){
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
    // console.log(camera.position)

}

function setLight() {
    let light = -1;
    switch(light){
      case 0:
        const spotLight = new THREE.SpotLight()
        spotLight.position.set(10, 10, 10)
        spotLight.intensity = 1000
        scene.add(spotLight)
        break;
      case 1:
        const ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
        ambientLight.intensity = 150;
        scene.add( ambientLight );
        break;
      case 2:
        const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x8d8d8d, 3 );
				hemiLight.position.set( 0, 20, 0 );
        hemiLight.intensity = 10;
				scene.add( hemiLight );
        break;
    default:
        const spotLight1 = new THREE.SpotLight()
        spotLight1.position.set(10, 3, 3)
        spotLight1.intensity = 300
        scene.add(spotLight1)

        const ambientLight1 = new THREE.AmbientLight( 0x404040 ); // soft white light
        ambientLight1.intensity = 15;
        scene.add( ambientLight1 );

        const hemiLight1 = new THREE.HemisphereLight( 0xffffff, 0x8d8d8d, 3 );
                hemiLight1.position.set( 0, 1, 0 );
        hemiLight1.intensity = 3;
                scene.add( hemiLight1 );
    }
  }