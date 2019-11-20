

var BanDo = cc.TMXTiledMap.extend({
    o:[],
    _scale: 30,
    _mapSize: null,
    background: [],
    vi_tri: cc.p(0, 0),
    ctor:function(){
        this._super("ThoiLoan/Map/42x42map.tmx");
        this.setAnchorPoint(0.5,0.5);
        var size = cc.p(this.mapWidth*this.tileWidth, this.mapHeight*this.tileHeight);
        this.background.push(cc.Sprite.create("ThoiLoan/Map/1_0000_Layer-3.png"));
        this.background[0].setAnchorPoint(1, 0);
        this.background[0].setPosition(size.x/2, size.y/2);
        this.background.push(cc.Sprite.create("ThoiLoan/Map/1_0001_Layer-1.png"));
        this.background[1].setAnchorPoint(1, 1);
        this.background[1].setPosition(size.x/2, size.y/2);
        this.background.push(cc.Sprite.create("ThoiLoan/Map/1_0002_Layer-4.png"));
        this.background[2].setAnchorPoint(0, 0);
        this.background[2].setPosition(size.x/2, size.y/2);
        this.background.push(cc.Sprite.create("ThoiLoan/Map/1_0003_Layer-2.png"));
        this.background[3].setAnchorPoint(0, 1);
        this.background[3].setPosition(size.x/2, size.y/2);
        this._mapSize = {
            width: this.background[0].width*4*this._scale/100,
            height: this.background[0].height*4*this._scale/100
        };
        //cc.log(this._mapSize.width + " " + this._mapSize.height);
        for( var i = 0; i < 4; i++){
            this.background[i].setScale(2);
            this.addChild(this.background[i]);
        }
        this.setScale(this._scale/100);
    },
    scaleMap:function(ratio){
        var tmp = Math.max(winSize.width/(this.background[0].width*4),
            winSize.height/(this.background[0].height*4));

        this._scale*=ratio;
        //cc.log(tmp+ ' ' + this._scale);
        if(this._scale <=60 && this._scale >= tmp*100) {
            this.setScale(this._scale / 100);
            this._mapSize.width*=ratio;
            this._mapSize.height*=ratio;
            if(this.x + this._mapSize.width/2 < winSize.width)
                this.x = winSize.width - this._mapSize.width/2 + 20;
            if(this.x - this._mapSize.width/2 > 0)
                this.x = this._mapSize.width/2;
            if(this.y + this._mapSize.height/2 < winSize.height)
                this.y = winSize.height - this._mapSize.height/2;
            if(this.y - this._mapSize.height/2 > 0)
                this.y = this._mapSize.height/2;
        }
        else this._scale/=ratio;
    }
});