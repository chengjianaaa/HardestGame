module.exports = {
    GameObject: null,
    CollsionTypeZero:0, //圆圈tag
    CollsionTypeOne:1, //发射的子弹
    CollsionTypeTwo:2, //依靠的子弹
    LevelInfo:[
        {"TagetNum":10,"Time":60,"RoteSpeed":1.88,"IsReturn":false,"ChangeTime":20},//通关限定数目,通关限定时间,转速,是否可翻转
        {"TagetNum":12,"Time":45,"RoteSpeed":2.11,"IsReturn":true,"ChangeTime":30},
        {"TagetNum":14,"Time":30,"RoteSpeed":2.99,"IsReturn":true,"ChangeTime":40},
        {"TagetNum":14,"Time":30,"RoteSpeed":3.11,"IsReturn":true,"ChangeTime":50},
        {"TagetNum":14,"Time":30,"RoteSpeed":4.55,"IsReturn":true,"ChangeTime":60}
    ],
};