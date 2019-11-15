/**
 * Created by GSN on 7/6/2015.
 */

var ScreenMenu = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,

    ctor:function() {
        this._super();
        winSize = cc.director.getVisibleSize();
        var size = winSize;

        var yBtn = 3*size.height/5;

        var btnNetwork = gv.commonButton(200, 64, cc.winSize.width/4, yBtn,"Network");
        this.addChild(btnNetwork);
        btnNetwork.addClickEventListener(this.onSelectNetwork.bind(this));

        var btnPlayGame = gv.commonButton(200, 64, 3*cc.winSize.width/4, yBtn,"Play Game");
        this.addChild(btnPlayGame);
        btnPlayGame.addClickEventListener(this.onSelectPlay.bind(this));

    },
    onEnter:function(){
        this._super();
    },
    onSelectNetwork:function(sender)
    {
        fr.view(ScreenNetwork);
    },
    onSelectPlay:function(){
        fr.view(MapLayer);
    }

});