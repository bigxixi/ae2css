# BX-AE2CSS
Export AE animations to CSS  
[中文介绍点这里](https://github.com/bigxixi/ae2css/blob/master/README.md)

[<img src="https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/uien.png" width="50%" height="30%">](http://bigxixi.com/donate/index.html)


## How to Install
Download `BX_AE2CSS.jsx`, [`Right click here - Save as...`](https://raw.githubusercontent.com/bigxixi/ae2css/master/BX_AE2CSS.jsx).</br>
Run AE, Click  `File`->`Scripts`->`Run Script File...` then choose the `BX_AE2CSS.jsx`。    
</br>
Or you can copy `BX_AE2CSS.jsx` to AE's script folder:
>**Windows:**  
>`C:\Program Files\Adobe\Adobe After Effects <version>\Support Files\Script\`  
>**Mac:**  
>`/Applications/Adobe After Effects <version>/Scripts/`

</br>

Then you can run it from  `File` -> `Scripts`.  

[Details](https://helpx.adobe.com/after-effects/using/scripts.html)</br>

## Note:
1. This script now can only export **++solid layers,pre-composed layers and image layers++** which has animations on position, rotation, scale, opacity properties. Support parenting and expressions. If the animation is too complex, you'd better export as sprite animation.  
2. Keep the animation short.  

## How to use:
1. In the AE composition, select the layers you're going to export and Mark them.  
2. If the layer is an image layer(png/jpg), or a composition layer that you using as an image, you should click the "Mark CSS" botton.  
3. Check the settings, then click "Export CSS" botton.  

![demoGIF](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/guide1_new.gif)
![demoGIF](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/guide2_new.gif)
![demoGIF](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/guide3_new.gif)  


Watch this video for more details:    
https://youtu.be/kImip8GDzx0

## Parameters:

**Timing Fucntion** - Default "steps(1)" means no interpolation between keyframes, which would avoid some bad behaviors in the frame by frame animation. See [ CSS Animation ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations).  
**Loop** - Loop counts. 0 for infinite loop.  
**Ani Direction** - Play in positive direction or reverse.  
**Fill Mode** - Specifies the behavior for the the animation is not playing (before it starts, after it ends, or both).  
**Name Prefix** - Class name format will be "BX_+prefix+Class+(layer index)". Default is empty.  
**Frame by Frame** - Now only frame by frame mode is supported, other modes are under development.  
**Split CSS File** - Export unique CSS file. You can also warp the CSS codes in the demo HTML file.  

## Sprite Parameters:

**Max Width** - The sprite image would warp to another line if reach this value. The maximum size of The sprite is 30000x30000.  
**Skip Frames** - The more you skip the less size you will get, but the FPS of animation will be lower.  
**Full/WorkArea Length** - When the sprite animation's duration not fit the composition's workarea, the `Full Length` mode will ignore the composition's workarea and keep the sprite full, while the `WorkArea` mode will cut the animation if it expand the workarea.  

## Examples  
![demo1](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/basicdemo.gif)  

[[AE project file](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/basicdemo.zip)]  [[Online Demo](http://bigxixi.com/ae2css/samples/basic/BX__Basic-marked.html)] 


![demo2](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/lanterndemo.gif)  
[[AE project file](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/lanterndemo.zip)]
[[Online Demo](http://bigxixi.com/huadeng)]  


![demo3](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/bikingdemo.gif)  

[[AE project file](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/bikingdemo.zip)][ 
[Online Demo](http://bigxixi.com/ae2css/samples/biking/BX_biking_P7)]  

----

## Buy me a coffee 😃   

[<img src="https://raw.githubusercontent.com/bigxixi/bigxixi.github.io/master/donate/index.hyperesources/paypal.png" width="61%" height="70%">](https://www.paypal.me/bigxixi/)  
[<img src="https://raw.githubusercontent.com/bigxixi/bigxixi.github.io/master/donate/index.hyperesources/wechat.png" width="30%" height="30%">](http://bigxixi.com/donate/index.html)
[<img src="https://raw.githubusercontent.com/bigxixi/bigxixi.github.io/master/donate/index.hyperesources/alipay%402x.jpg" width="30%" height="30%">](http://bigxixi.com/donate/index.html)  


