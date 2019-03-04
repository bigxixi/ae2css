# BX-AE2CSS
将 AE 制作的动画导出为 CSS 代码。  
[Readme in English](https://github.com/bigxixi/ae2css/blob/master/README_en.md)

[<img src="https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/ui.png" width="50%" height="30%">](http://bigxixi.com/donate/index.html)


## 如何安装
下载 BX-AE2CSS.jsx 文件，[`在这里右键 - 链接另存为`](https://raw.githubusercontent.com/bigxixi/ae2css/master/BX_AE2CSS.jsx).</br>
打开AE, 点击 `文件`->`脚本`->`运行脚本文件...` 然后选择刚才下载的 `BX_AE2CSS.jsx`。    
</br>
或者可以复制 `BX_AE2CSS.jsx` 到AE的脚本文件夹:
>**Windows:**  
>`C:\Program Files\Adobe\Adobe After Effects <版本>\Support Files\Script\`  
>**Mac:**  
>`/Applications/Adobe After Effects <版本>/Scripts/`

</br>
这样你就可以从 `文件`->`脚本` 中直接选择`BX_AE2CSS.jsx`了  

[详细步骤](https://helpx.adobe.com/cn/after-effects/using/scripts.html)</br>

## 注意事项

1、目前只能导出纯色层和图像图层的「位移、旋转、缩放、透明度」动画，支持表达式和父子级。复杂动画请用精灵图方式导出。  
2、不建议导出太长的动画，数据量会很大。  

## 如何使用

1、在 AE合成 中选中需要导出的图层，并打上对应的「导出标记」。  
2、若图层是图像图层（png、jpg）或者是希望导出为图像的预合成，使用「标记 CSS」按钮标记；若希望导出精灵图，请将精灵图动画放进预合成，并使用「标记 精灵图」按钮来标记。  
3、确认设置无误后，按下「导出 CSS」按钮以导出动画。    

![demoGIF](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/markdemo1.gif)
![demoGIF](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/markdemo2.gif)
![demoGIF](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/markdemo3.gif)  


详细操作可以观看这个视频  
https://www.bilibili.com/video/av44621898/

## 参数说明

**插值方式** - 默认为「steps(1)」即「不插值」，配合默认的逐帧导出可以避免一些跳帧现象。如需在导出后手工调整关键帧可选择其他方式，详见[ CSS Animation 说明](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)。  
**循环次数** - 顾名思义，默认为无限循环。  
**动画方向** - 决定动画是正着播放还是反向。  
**动画填充模式** - 动画播放开始和结束时的行为，具体参考 CSS Animation 官方说明。  
**自定义前缀** - 导出的类名格式为「BX_+前缀+_Class+图层序号」，加入自定义前缀可防止与项目中其他类名冲突。默认为空。  
**逐帧导出** - 由于能力有限暂时只能逐帧导出动画，导出的代码会稍微冗长一点。后续版本将尝试加入自动贝塞尔插值以优化导出的代码。  
**独立CSS文件** - 是否生成独立的 CSS 文件。也可以导出整体的 Html 预览代码。  

## 精灵图参数

**最大宽度** - 拼合后的精灵图文件最大宽度，超过这个值将会换行。注意拼好的图最大只能到 30000x30000 像素，若超过这个值将导出失败。  
**跳过多少帧** - 减少精灵图尺寸，跳过帧越多动画越卡顿。  
**完整长度/根据工作区裁剪** - 如果精灵图动画与合成工作区时长不一致，「完整长度」模式将会保持精灵图动画的时长，「根据工作区裁剪」则将精灵图动画的时间范围限制在合成工作区内。  

## 参考案例  
![demo1](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/basicdemo.gif)  

[[AE 工程文件](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/basicdemo.zip)]  [[在线演示](http://bigxixi.com/ae2css/samples/basic/BX__Basic-marked.html)] 


![demo2](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/lanterndemo.gif)  
[[AE 工程文件](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/lanterndemo.zip)]
[[在线演示](http://bigxixi.com/huadeng)]  


![demo3](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/bikingdemo.gif)  

[[AE 工程文件](https://raw.githubusercontent.com/bigxixi/ReadMe-Resources/master/ae2css/bikingdemo.zip)][ 
[在线演示](http://bigxixi.com/ae2css/samples/biking/BX_biking_P7)]  

----

## Donation - 求打赏:
如果您觉得本插件好用，欢迎打赏，感谢您的支持！  

[<img src="https://raw.githubusercontent.com/bigxixi/bigxixi.github.io/master/donate/index.hyperesources/wechat.png" width="30%" height="30%">](http://bigxixi.com/donate/index.html)
[<img src="https://raw.githubusercontent.com/bigxixi/bigxixi.github.io/master/donate/index.hyperesources/alipay%402x.jpg" width="30%" height="30%">](http://bigxixi.com/donate/index.html)  

也欢迎使用 PayPal：  

[<img src="https://raw.githubusercontent.com/bigxixi/bigxixi.github.io/master/donate/index.hyperesources/paypal.png" width="30%" height="30%">](https://www.paypal.me/bigxixi/)  
