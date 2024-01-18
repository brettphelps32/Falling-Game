class gameObject{
    constructor(){
        this.component = []
        this.markForDelete = false;
    }
    update(){
        this.component.filter(c=>c.update).forEach(c=>c.update())
    }
    draw(ctx){
        this.component.filter(c=>c.draw).forEach(c=>c.draw(ctx))
    }
    getComponent(componentString){
        return this.component.find(c=>c.constructor.name == componentString);
    }
}
export default gameObject;