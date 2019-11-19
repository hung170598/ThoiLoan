
var Building = cc.Sprite.extend({
    _state: null,
    id: 0,
    HP: 100,
    size: 3,
    level: 1,
    timeSlider: null,
    timeLeft: 0,
    hpSlider: null,
    isClick: false,
    type: 0,
    ctor:function(){
        var link = ""
        this._super();
    }
});