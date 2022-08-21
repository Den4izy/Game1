
class person{
    init(data){
        this.createObject(data);
    }
    createObject(settings){
        this.height = 1;
        this.object = new THREE.Mesh(
            new THREE.BoxGeometry(
                this.height / 4,
                this.height,
                this.height / 4),
            new THREE.MeshStandardMaterial({color:"yellow"})
        )
        this.object.position.x = settings.position[0];
        this.object.position.y = settings.position[1] + this.height / 2;
        this.object.position.z = settings.position[2];
        console.log(this.object);
        settings.scene.add(this.object);

        //return this.object;

        let handR = new THREE.Mesh(
            new THREE.BoxGeometry(
                this.height / 4,
                this.height / 8,
                this.height / 8),
            new THREE.MeshStandardMaterial({color:"green"})
        )
        let handL = new THREE.Mesh(
            new THREE.BoxGeometry(
                this.height / 4,
                this.height / 8,
                this.height / 8),
            new THREE.MeshStandardMaterial({color:"green"})
        )

        handR.position.x = this.height / 4 ;
        handR.position.y = (this.height / 4) + (this.height / 8);
        handR.position.z = 0;
        handL.position.x = - this.height / 4 ;
        handL.position.y = (this.height / 4) + (this.height / 8);
        handL.position.z = 0;
        this.object.add(handR);
        this.object.add(handL);

    }
    rotationObject(x,y,z){
        Viewer.setUpdate('rotation-person', ()=>{
            this.object.rotation.x += x;
            this.object.rotation.y += y;
            this.object.rotation.z += z;
        });
    }

}
