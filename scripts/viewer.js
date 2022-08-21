// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );


class viewer{
    init(data){
        this.createResize(); // ф-я задання розміра вікна
        this.createRender(data.renderer); // рендер (вимальовує обєкти)
        this.createCamera(data.camera);
        this.createScene();
        this.createLight();
        this.update();
        
    }
    createRender(settings){
        if(this.render){
            this.render.domElement.parentNode.removeChild(this.render.domElement);
            this.render.dispose();
        }
        this.render = new THREE.WebGLRenderer(settings);
        settings.parent.appendChild(this.render.domElement);
        this.render.setPixelRatio(settings.pixelRatio || devicePixelRatio);
        this.render.setSize(document.body.offsetWidth, document.body.offsetHeight);
        this.addResize("resize_render", ()=>{
            this.render.setSize(
                this.render.domElement.parentNode.offsetWidth,
                this.render.domElement.parentNode.offsetHeight
            );
        });
        this.resaizePool['resize_render']();
    }

    createResize(){
        window.addEventListener('resize', ()=>{
            this.resaize();
        });
    }
    // типу масів з ф-ями для задання розміру вікна
    resaizePool = {

    };
    addResize(name, funk){
        this.resaizePool[name] = funk;
    }
    removeResize(name){
        delete this.resaizePool[name];
    }
    resaize(){
        for(let key in this,this.resaizePool){
            this.resaizePool[key]();
        }
    }
    createCamera(settings){
        this.camera = new THREE.PerspectiveCamera(
            45,
            this.render.domElement.width / this.render.domElement.height,
            1, 
            100
        );
        this.camera.position.x = settings.position[0];
        this.camera.position.y = settings.position[1];
        this.camera.position.z = settings.position[2];
        this.camera.rotation.x = settings.rotation[0];
        this.camera.rotation.y = settings.rotation[1];
        this.camera.rotation.z = settings.rotation[2];
        this.addResize("resize_camera", ()=>{
            this.camera.aspect = this.render.domElement.width / 
            this.render.domElement.height;
            this.camera.updateProjectionMatrix();
        })
    }
    createScene(){
        this.scene = new THREE.Scene();
    }
    addScene(obj){
        this.scene.add(obj);
    }
    createLight(){
        this.light = new THREE.DirectionalLight(0xffffff,.5);
        this.scene.add(this.light);
        this.light.position.set(5,5,5);
    }
    // добавалення функції з анімацією
    setUpdate(name, func){
        this.updatePool[name] = func;
    }
    // видалення ф-ї з анімацією
    removeUpdate(name){
        delete this.updatePool[name];
    }
    updatePool = {}; // масів ф-й для анімацій
    update(){
        this.render.render(this.scene, this.camera);
        requestAnimationFrame(() => {this.update();}); 
        
        for(let key in this.updatePool){
            this.updatePool[key]();
        }
            
        
    }


}

