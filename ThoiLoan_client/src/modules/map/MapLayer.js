

var MapLayer = cc.Layer.extend({
    map: null,
    scale: 50,
    ctor:function(){
        this._super();
        this.map = new cc.TMXTiledMap("Map/42x42map.tmx");
        this.map.setPosition(-400,-400);
        this.addChild(this.map, 0 , 99);
        this.setScale(this.scale/100);
    }
});