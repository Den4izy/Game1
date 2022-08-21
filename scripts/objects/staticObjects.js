
class floor{
    init() {
        this.createObject();
    }
    createObject(){
        this.object = new THREE.Mesh(
            new THREE.BoxGeometry(30,0.01,30),
            new THREE.MeshStandardMaterial({color: 'brown'})
        )
        this.object.position.z = -15;
        Viewer.scene.add(this.object);
    }
}