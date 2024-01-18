class game{
    static scenes = [];
    static currentSceneIndex = 0;
    static nextSceneIndex = -1;
    static scene(){
        return game.scenes[game.currentSceneIndex];
    }
    static findByType(type){
        return game.scene().gameObjects.filter(go => go.constructor.name == type);
    }
    static updateScene(){
        if(game.nextSceneIndex != -1){
            game.currentSceneIndex = game.nextSceneIndex;
            game.nextSceneIndex = -1;
            game.scene().restart();
        }
    }
    static changeScene(index){
        game.nextSceneIndex = index;
    }
    static instantiate(gameObject){
        game.scene().gameObjects.push(gameObject);
    }
}
export default game;