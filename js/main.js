/**
 * Created by huchunbo on 2017/7/11.
 */
var type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type)