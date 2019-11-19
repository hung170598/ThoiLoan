


var QuanlyGame = cc.Layer.extend({
    _map: null,
    ctor:function(){
        this._super();
        this._map = new BanDo();
        this._map.vi_tri = cc.p(winSize.width/2, winSize.height/2);
        this._map.setPosition(winSize.width/2, winSize.height/2);
        cc.log(winSize.width + ' ' + winSize.height);
        this.addChild(this._map);
        if(cc.sys.capabilities.hasOwnProperty('keyboard') && 'mouse' in cc.sys.capabilities){
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: function(key, event){
                    GC.KEYS[key] = true;
                },
                onKeyReleased: function(key, event){
                    GC.KEYS[key] = false;
                }
            },this);
        }
        if ('mouse' in cc.sys.capabilities)
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: function(event){
                    cc.log(event.getButton());
                },
                onMouseMove: function(event){
                    if(event.getButton() == cc.EventMouse.BUTTON_LEFT)
                        event.getCurrentTarget().processEvent(event);
                },
                onMouseScroll: function(event){
                    if(!GC.KEYS[cc.KEY.ctrl]) return;
                    if(event.getScrollY() > 0) event.getCurrentTarget()._map.scaleMap(0.9);
                    else event.getCurrentTarget()._map.scaleMap(1.1);
                }
            }, this);

        if(cc.sys.capabilities.hasOwnProperty('touches'))
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ALL_AT_ONCE,
                _point0: null,
                onTouchBegan: function(touches, event){
                    _point0 = touches[-1];
                },
                onTouchesMove: function(touches, event){
                    var touch = touches[0];
                    if(touches.length > 1){
                        var point1 = touches[0].getLocation();
                        var point2 = touches[1].getLocation();
                        var delta1 = touches[0].getDelta();
                        var delta2 = touches[1].getDelta();
                        var point3 = cc.pSub(point1, delta1);
                        var point4 = cc.pSub(point2, delta2);
                        var ratio = cc.pDistance(point1, point2)/cc.pDistance(point3, point4);
                        this._map.scaleMap(ratio);
                    }
                    if (this.prevTouchId != touch.getID())
                        this.prevTouchId = touch.getID();
                    else event.getCurrentTarget().processEvent(touches[0]);
                }
            }, this);
    },
    processEvent:function (event) {
        var size = cc.director.getWinSize();
        var mapSize = this._map._mapSize;
        var delta = event.getDelta();
        var curPos = cc.p(this._map.x, this._map.y);
        curPos = cc.pAdd(curPos, delta);
        curPos = cc.pClamp(curPos,
            cc.p(size.width - mapSize.width/2 + 20, size.height - mapSize.height/2),
            cc.p(mapSize.width/2, mapSize.height/2));
        this._map.x = curPos.x;
        this._map.y = curPos.y;
        curPos = null;
    }
});