let Viewer = new viewer;
let Person = new person;
let Floor = new floor;

let elem = document.querySelector("#div2");
class app{
    constructor(){
        Viewer.init(
            {
                renderer:{
                    parent:document.body,
                    antialias: true, // зглажування
                    alpha: false, // прозрорысть фону
                    pixelRatio: 1, // щільність пікселів(чим менше тим гірша якість) 1 по замовчуванні
                },
                camera:{
                    position: [0,15,0],
                    rotation: [-Math.PI/4,0,0],
                }
            }
        );
        Person.init(
            {
                name: person,
                position: [0,0,-15],
                scene: Viewer.scene

        })
        Person.rotationObject(0, 0.01, 0);
        Floor.init();

    }
}

let ap = new app;


