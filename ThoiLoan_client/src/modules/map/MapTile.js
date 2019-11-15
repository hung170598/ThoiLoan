

var MapTile = cc.TMXTiledMap.extend({
    o:[],
    cong_trinh: {},
    vat_the: {},
    tho_xay: [],
    linh: {},
    kich_thuoc: 100,
    vi_tri: cc.p(0,0),
    ctor:function(){
        this._super("Map/42x42map.tmx");
        for(var i in range(0,41)) {
            o[i] = [];
            for (var j in range(0, 41)) o[i][j] = 0;
        }
    }
});