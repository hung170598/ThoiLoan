

var MapLayer = cc.Layer.extend({
    map: null,
    ctor:function(){
        this.map = cc.TMXTiledMap.create("Map/42x42map.tmx");
        this.map.setPosition(winSize.width/2, winSize.height/2);
        this.addChild(this.map);
    }
});