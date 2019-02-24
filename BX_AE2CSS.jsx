//Script by bigxixi, contact xixi@bigxixi.com
//localizition
var bx_str = {};
bx_str.CheckAccessTip = {
    en:"Please check this option:\n'Preferences->General->Allow Scripts to Write Files and Access Network'",
    cn:"请勾选 ‘首选项’->'常规'->'允许脚本写入文件和访问网络'。"
}
bx_str.tFunc = {
    en:"Timing Function",
    cn:"插值方式"
};
bx_str.reloadUI = {
    en:"Close and rerun the script to update UI language.",
    cn:"脚本界面已换成简体中文，请重新运行脚本以生效。" 
}
bx_str.loopCount = {
    en:"Loop(0 for infinit)",
    cn:"循环次数(0为无限循环)"
}
bx_str.aniDirection = {
    en:"Ani Direction",
    cn:"动画方向"
}
bx_str.fillMode = {
    en:"Fill Mode",
    cn:"动画填充模式"
}
bx_str.preFixed = {
    en:"Name Prefix",
    cn:"自定义前缀"
}
bx_str.options = {
    en:"Options",
    cn:"选项"
}
bx_str.frameByFrame = {
    en:"Frame by Frame",
    cn:"逐帧导出"
}
bx_str.splitCSSfile = {
    en:"Split CSS File",
    cn:"独立CSS文件"
}
bx_str.spriteOptions = {
    en:"Sprite Animation Options",
    cn:"精灵图设置"
}
bx_str.maxWidth = {
    en:"Max Width",
    cn:"最大宽度"
}
bx_str.skipFrame = {
    en:"Skip Frames",
    cn:"跳过多少帧"
}
bx_str.compLength = {
    en:"Full Length",
    cn:"完整长度"
}
bx_str.workAreaLength = {
    en:"WorkArea Length",
    cn:"根据工作区裁剪"
}
bx_str.btnMarkCSS = {
    en:"Mark CSS",
    cn:"标记 CSS"
}
bx_str.btnMarkSprite = {
    en:"Mark Sprite",
    cn:"标记 精灵图"
}
bx_str.btnSetting = {
    en:"Settings",
    cn:"设置"
}
bx_str.btnHelp = {
    en:"Help",
    cn:"帮助"
}
bx_str.btnExport = {
    en:"Export CSS",
    cn:"导出 CSS"
}
bx_str.autoModewarning = {
    en:"Auto Timing Function Mode is not ready yet, please use Frame by Frame Mode.",
    cn:"非逐帧模式未开发完成，请使用逐帧模式."
}
bx_str.timingFunNotReady = {
    en:"Timing Function Mode is not ready yet, please use Frame by Frame Mode.",
    cn:'非逐帧模式未开发完成，请使用逐帧模式.'
}
bx_str.bigPic = {
    en:"The picture is warped due to the max width.",
    cn:"精灵图将进行折行处理。"
}
bx_str.compSizeLimitation = {
    en:"Export failed! The sprite image size is larger than AE's limitation (30000px width or height)!",
    cn:"导出失败！精灵图尺寸过大，超出 AE 尺寸限制（大于30000px宽或高）。"
}
bx_str.languageSetting = {
    en:"Language:",
    cn:"界面语言:"
}
bx_str.layerParentOut1 = {
    en:"Layer ",
    cn:'图层「'
}
bx_str.layerParentOut2 = {
    en:"\"s parent layer \"",
    cn:'」的父级「'
}
bx_str.layerParentOut3 = {
    en:"\" hasn't marked for export, the animation may not export correctly!",
    cn:'」未打上导出标记，动画可能会出错！'
}
bx_str.moreHelp = {
    en:"Online Tutorial",
    cn:"在线教程"
}
bx_str.helpText = {
    cn:"更多信息请点击下方的在线教程，或访问网址：\n"+
    "https://github.com/bigxixi/ae2css\n"+
    "\n"+
    "注意事项：\n"+
    "1、目前只能导出纯色层和图像图层的「位移、旋转、缩放、透明度」动画，支持表达式和父子级。复杂动画请用精灵图方式导出。\n"+
    "2、不建议导出太长的动画，数据量会很大。\n"+
    "\n"+
    "使用步骤：\n"+
    "1、在 AE合成 中选中需要导出的图层，并打上对应的「导出标记」。\n"+
    "2、若图层是图像图层（png、jpg）或者是希望导出为图像的预合成，使用「标记 CSS」按钮标记；若希望导出精灵图，请将精灵图动画放进预合成，并使用「标记 精灵图」按钮来标记。\n"+
    "3、确认设置无误后，按下「导出 CSS」按钮以导出动画。\n"+
    "\n"+
    "参数说明：\n"+
    "·插值方式 - 默认为「steps(1)」即「不插值」，配合默认的逐帧导出可以避免一些跳帧现象。如需在导出后手工调整关键帧可选择其他方式，详见 CSS Animation 官方说明。\n"+
    "·循环次数 - 顾名思义，默认为无限循环。\n"+
    "·动画方向 - 决定动画是正着播放还是反向。\n"+
    "·动画填充模式 - 动画播放开始和结束时的行为，具体参考 CSS Animation 官方说明。\n"+
    "·自定义前缀 - 导出的类名格式为「BX_+前缀+_Class+图层序号」，加入自定义前缀可防止与项目中其他类名冲突。默认为空。\n"+
    "·逐帧导出 - 目前只能逐帧导出动画，代码会稍微冗长。后续版本将尝试加入自动贝塞尔插值以优化导出的代码。\n"+
    "·独立CSS文件 - 是否生成独立的 CSS 文件。也可以导出整体的 Html 预览代码。\n"+
    "\n"+
    "精灵图参数：\n"+
    "·最大宽度 - 拼合后的精灵图文件最大宽度，超过这个值将会换行。注意拼好的图最大只能到 30000x30000 像素，若超过这个值将导出失败。\n"+
    "·跳过多少帧 - 减少精灵图尺寸，跳过帧越多动画越卡顿。\n"+
    "·完整长度/根据工作区裁剪 - 如果精灵图动画与合成工作区时长不一致，「完整长度」模式将会保持精灵图动画的时长，「根据工作区裁剪」则将精灵图动画的时间范围限制在合成工作区内。",
    en:"Click \"Online Tutorial\" to learn more, or visit:\n"+
    "https://github.com/bigxixi/ae2css\n"+
    "\n"+
    "Note:\n"+
    "1. This script now can only export solid layers and image layers which has animations on position, rotation, scale, opacity properties. Support parenting and expressions. If the animation is too complex, you'd better export as sprite animation.\n"+
    "2. Keep the animation short.\n"+
    "\n"+
    "How to use:\n"+
    "1. In the AE composition, select the layers you're going to export and Mark them.\n"+
    "2. If the layer is an image layer(png/jpg), or a composition layer that you using as an image, you should click the \"Mark CSS\" botton.\n"+
    "3. Check the settings, then click \"Export CSS\" botton.\n"+
    "\n"+
    "Parameters:\n"+
    ">Timing Fucntion - Default \"steps(1)\" means no interpolation between keyframes, which would avoid some bad behaviors in the frame by frame animation.\n"+
    ">Loop - Loop counts. 0 for infinite loop.\n"+
    ">Ani Direction - Play in positive direction or reverse.\n"+
    ">Fill Mode - Specifies the behavior for the the animation is not playing (before it starts, after it ends, or both).\n"+
    ">Name Prefix - Class name format will be \"BX_+prefix+Class+(layer index)\". Default is empty.\n"+
    ">Frame by Frame - Now only frame by frame mode is supported, other modes are under development.\n"+
    ">Split CSS File - Export unique css file. You can also warp the CSS codes in the demo HTML file.\n"+
    "\n"+
    "Sprite Parameters:\n"+
    ">Max Width - The sprite image would warp to another line if reach this value. The maximum size of The sprite is 30000x30000.\n"+
    ">Skip Frames - The more you skip the less size you will get, but the FPS of animation will be lower.\n"+
    ">Full/WorkArea Length - When the sprite animation's duration not fit the composition's workarea, the Full Length mode will ignore the composition's workarea and keep the sprite full, while the WorkArea mode will cut the animation if it expand the workarea."
}

var theLan = '';
function updateLan(){
    if (app.settings.haveSetting("BX_parameters", "language")){
        theLan = app.settings.getSetting("BX_parameters", "language");
    }else{
        theLan = $.locale.toLowerCase();
    }
}
updateLan();

function BXLocolize(str){
    updateLan();
    switch(theLan){
        case "zh_cn":
            return str.cn;
        case "en_us":
            return str.en;
        default:
            return str.en;
    }
    
}

var scriptVersion =  '0.1';
var scriptName = 'BX AE2CSS';
var sctiptTitle = scriptName + ' v' + scriptVersion;

var bannerBin = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u00DF\x00\x00\x00;\b\x03\x00\x00\x00\u00CC\u00F2\u00AF\u008A\x00\x00\x02\u00FAPLTE\x00\x00\x00IIn9)c2\x11[5\x1B`1\x15\\1\rU-\fU.\x0BU-\fV.\x10U-\tR.\x0BT,\nR,\x0BS-\x0EU,\tR,\rS+\x0BQ-\rS,\fR+\x0BQ-\x0FT.\rS-\fT,\x0BQ+\nQ,\x0BR+\x0BR,\rS,\nR,\nR,\nQ+\nQ,\rS,\nQ+\x0BQ+\nQ+\nQ+\x0BQ+\x0BR+\tQ,\x0FP*\nQ\u0095\u0095\u009B\u00FE\u00FD\u00FE\u00FA\u00F9\u00FB+\tQ+\nQ+\tP+\nQ+\tQ+\nQ+\tP+\tQ\u00DA\u00D5\u00E1+\x0BR\u00C3\u0093\u00EB+\nR\u00D4\u00CD\u00DC\u00D2\u00CB\u00DB0\u008E\u00D7oE\u0095\u00A0\u0091\u00B20\u0090\u00D80\u0089\u00D1*\nQ\u009D\u008D\u00AE\u00F6\u00F4\u00F7\u0097\u0097\u009A\u0099\u0098\u009A\u00CF\u009D\u00F7\u00C5\u0093\u00EB0\u008B\u00D20\u008B\u00D4\u008E\u008A\u0093+\rT\\Cu\u00B9\u008A\u00E0\u0097\u0095\u0099.W\u009E\u00DA\u00D4\u00E1<$fU=xU<{\u00F9\u00F7\u00FA\u00DE\u00D9\u00E40|\u00C5\u00E8\u00E5\u00ED\x7Ft\u008C0\u0084\u00CC0\u008E\u00D7\u00B2\u0083\u00D8/k\u00B3\u00F1\u00EF\u00F4\u009E\u008F\u00B0-@\u0088-E\u008D0{\u00C3\u00ED\u00EA\u00F08\"d\u00B3\u0083\u00D9\u00A0\u0096\u00AD4J\u0095\u009B\u009B\u009C/v\u00BE\u0091\u008E\u0095\u008F\u008C\u00940\u0089\u00D1\u00E1\u00DC\u00E7\x7Fv\u0089O4lU8uS:qn\\\u0084/|\u00C4\u00F3\u00F1\u00F5\u00CD\u00C5\u00D6\u00EB\u00E8\u00EF\u00B8\u0088\u00DF\u00E9\u00E6\u00EE\u0096\u0094\u0098+\x1Bcqd\u00809\x1F_/C\u008A\u009B\u009B\u009C0\u0082\u00CA.b\u00A9-P\u0098\u00E3\u00DF\u00E9-\fT0\u0087\u00CF\u0099\u0098\u009B\u00AC\u009F\u00BB]Cz\u00C1\u00B7\u00CC/X\u009F\x7Fn\u0090\u009C\u008C\u00AE1i\u00B0?*j\x7Fo\u0093\u0084X\u00A8\u00D3\u009F\u00FA\u00CB\u0099\u00F2\u00C5\u0093\u00EB\u00A8\u009A\u00B8.O\u0097\u0096\u0095\u0099]@}\u00F5\u00F3\u00F7-6~-*q,,s0\u0084\u00CC\u00CE\u00C6\u00D7\u0090\u008C\u0095/d\u00AC,&n? d\u00BC\u00B1\u00C70\x7F\u00C6XAq\u00A9\u009B\u00B9^Ks\u0081V\u00A70\\\u00A4kE\u008F\u0085o\u009CnT\u008A0P\u0098\u0091\x7F\u00A9\u0085m\u009B\u00EB\u00E8\u00EE\u0087\u0081\u008EqZ\u008A~j\u0095/j\u00B2\u00AC}\u00D3\u0080w\u0089.7~4\x1B`[=z\u00A1s\u00C8\u00E8\u00E6\u00ED\u00DF\u00D9\u00E5\u00CE\u00C6\u00D7\u0091f\u00B8\u008F\u0088\u00970m\u00B5\u00BD\u00B3\u00C9sb\u0085\u0090~\u00A40T\u009A\u008F~\u00A9\u0096\u0085\u00A9\u00BF\u00B5\u00CA\u00B0\u00A3\u00BE\u00ED\u00E9\u00F0/j\u00B3\u00A2\u0093\u00B2.[\u00A3wi\u0087\u0097\u0095\u0099\u00F1\u00EF\u00F30u\u00BD\u00DF\u00DA\u00E5\u00B1\u00A5\u00C0\u00AE\x7F\u00D5\u00E0\u00DC\u00E6\u00A2\u0092\u00B31q\u00BA\u00AB|\u00D3\u00C6\u00BF\u00D4\u009C\u009C\u009C\u00CA\u00C2\u00D3\u00AE\u00A1\u00BC\u0093\u0082\u00A7\u0083X\u00A9\u00C5\u0094\u00EC.K\u0094\u0088\u0083\u0090S5r-$j\u008C\u0084\u0097\u00DC\u00D6\u00E2.8\u0080\u00BA\u00AD\u00C5U?o\u00B5\u00A9\u00C2\u00CB\u00C2\u00D3\u00BD\u008C\u00E3\u0089^\u00B0\u00B2\u0082\u00D9L+q\u0096i\u00BCoY\u008A\u00B8\u00AD\u00C5\u00CA\u00C1\u00D3\u00BB\u00AF\u00C7kY\u0081-:\u0082\u00A1s\u00C7\u00A0\u0090\u00B1\u0098k\u00BE\u00B8\u00AC\u00C4G$m\u0086[\u00AD\u00A1\u0093\u00B4\u00FF\u00FF\u00FF0\u0090\u00D8\u00D4\u00A1\u00FB\u009C\u009C\u009C\u00C4\u00E3\u0089\u00AF\x00\x00\x00\u00FAtRNS\x00\x03\x06\x0F\t\x0B\x13\x1C\x18\x16\x1F714.$Q<V?BZ!&+Eeb^(NKi\x7F9Hy\u0094\u008Ft\u00ACn#\u00B0T\u00FD\u00F9\u008B\u0098\u0088\u0084q\u009D\u00A1\u00A5\u00E0\u00B8\u009F\u00BE\u00B4\u00B0\u00FC\u0093\u0081\u00FE\u00DE\u00B4|\u00E0S\u00F0\u00FC\u00F6\u00FB\u00EB\u00C7\u0096,\u00F3\u00E6\u00D6\u00C2J\"\x1B\u00EF\u00EF\u00A2\u00A1\u0091\u00F5\u00F4\u00F2\u00E8\u00DD\u00D7\u00D4\u00C5\u00BC\u009Dzu,'\u00F6\u00ED\u00E0\u00D6\u00D5\u00C9\u00BAtXBA\u00F3\u00F1\u00EE\u00D2\u00CB\u00C0\u00BC\u00B9\u00A2][\u00FC\u00E7\u00E0\u00DD\u00D4\u00D0\u00CB\u00C5\u00C1\u00B9\u00AA\u008E|j]VUQ\u00FC\u00EE\u00DF\u00D9\u00D3\u00D1\u00CC\u00CA\u00C9\u00C8\u00BF\u00B9\u00A9\u00A9\u00A2\u009F\u009E\u009B\u0090\u0090\u008C\u0084\x7FrojbLB(\u00F4\u00CE\u00C3\u00BE\u00BC\u00B5\u00A9\u00A9\u00A8\u00A7\u009E\u0097\u0096\u0096\u0090\u008E\u0089\u0080te8\x1E\u00E4\u00E3\u00DE\u00DD\u00D2\u00CA\u00BE\u00B8\u00B3\u00B2\u00AD\u00A8\u0098\u0085}yuM>\u00FC\u00D2\u00D2\u00D2\u00D0\u00BE\u00B2\u00AB\u0098\u0084tnlfd]Q\u00ED\u00EA\u00E6\u00E6\u00D5\u00D0\u00CF\u00BE\u00B5\u0092\u008E\u0088s\u00EF\u00E1\u00D0\u00AB\u00A6\b\u00EC\u0098\u00CE\x00\x00\x13&IDATh\u00DE\u00EDZg\u0094\x13U\x14vSf2\u00BD\u00A6L&\u0099\u00D4M[\u00B7d\u00B3\u00BB\"6\u00C0u\x15a]:\u0082\u008A\u0080\u0088\bRE\x04\x04+\n\u00A2b\u00EF\u00BD\u00F7\u00DE{\u00EF\u00BD\u00F7\u00DE{o\u00A39\u00C7\u00FB\u00DEL\u0092\u00CD\x06\u008Ep\u00C4\u00C29~? \u00EF\u00E6\u00CD\u00CD\u00FB\u00DE\u00BD\u00EF\u00967\u00BB\u00D1\u00FF\u00F8\x1F\u00FF\u00E3\u00DFF]\u009D\x03PW\u00B7\u00D1\u0086\u008E\u00D5\x12\u00A9s\u00B8\u00DC\u00CE\u00FB\u00A7Nu96t\u0082\u00C0d\u00EA\u00D4\u00FB\u009Dn\u00CC\u00A4\"t\u008F\u00BAu\u00B4i\u009A\u00F7\u00BB6x~\u00AE\u00A9\u00C0c\u00F4\u00AD\u00A3\u00DC\u00BD\b:\u00DC\u009E'\u00CD\u00CE\u00A7o\u00BBm\u00A4s\x037`\u009D\u00C39\u00F2\u00B6\u00DB\u009E\u00EE4\u009F\u00F4\u00B8\x1D\x15\u00CE\u00D4\x15\u008D\u009DGET\u00D6G`\x03\u00D6U\u00C1f\\\x19\u00D4\x0E+\u00A8\u00FD\u00AEF_\u00EDw\u00B5'\u00A8\u00F6\f\u00C14[Z\u00B7\u00E6\u00B9@\u0085\u00F0\u00B1jd\u00CE\u00FC\u00C6+\u00A8\u00B2/:\u009C\u00BE\u00BB\u00CD\u00CD\u00BD\u00A2\u00CA\u00D2\u00C0\u00CF:\u008CN'A\x10N\x00ve\x00\u0096\u0096\u00FD\u00BA2\u00AAeh\x7F\u00E7.}\x07\u008F\u00BAA@\u0094`\u00EB\u00C43a\u00AA\u00DB\u00ED\u00C2\u00A3\u00CA\u00D3N\u0082\x1A\u00B9\x07EX\u00B3*:\t\u00C2\u00B3\u0087\x07\x1EG\u00D2\u00B2b\u0098\u00BBGy.\u00E6G\u00B3\u00AA\u00E8\u00DD\u00CC\u00BC\u00DB\u00E7,\x19\u00D0E\x05n7\u009F\u00F1F\x18?\u0085\x16\u00E5r>\u00B7\u00DB\u008E%\u00DC\u00FA\u00DC{\x1FS\u00A0\u00D2\u00E1zi\u00B7\u00DDv\u00DBq\u00B7\u00F7\b\x17,\x1B\u00E6\u00C0\x10\u00F0\x12\u00ECG\u00AD\u008B\u00BC\u00B8)\u00C2\u0095n\u009B\u0084{\u00EA\u00A6}\u00F1\"|\u0087\u0098P/\u00BDw\u00EBs\x1F_I\u00E0\u00A9\u00D6d\u00E2\u00BE\u00F3\u00F6\u00DA\u00E9\u00B7\u00DFv\u00DA\u00EB\u00F4#)'\u00FC\u0098\u00CD\u0099|a\u00D9\u00F6\x03~\x1B\u00B0\u00FD\u00B2\u00F3\u00F6\u00C0\u00B3\u00ED\u00B9c\u00F1\u00DC\u0081\u00F6\\$\u00F3\u00F8\u0099\u0088\u00F7\x19\u00F3\u00F6\x00\u00E5\u00B2\x17\u00E4&\u00B9\u00CD\u00CD\x0B\f)\u00EC\u00819\u00B0<\u00F2d\u00B3\n\u009D\u00CFQN71r\u0082\t\u00C0vG\u00BB\u0084G\u009D\u00B5\x07\x16=\u00FF\u00C6\u00EF\b\u00CF\u00C2\x11\u00B0\u00BC\u00FF\u00C5\u00DF\u00AB\u0081\u00BFs\u00B9\u009C#om2\u00B1\u00D2\x1D\u00AF\u00C4\u00DB\u0086\u00F6\u008D<o\u008B\u00DFJ\u00D8\u00EBH\u00D8p\u00BCh\u00EA\u0085\u00ED\u00CB\u00D2\u009D\u00C6\u00EE\x01\u00EBD\u008B\u00B8\u00EF\u00F4\x01}\u00E7\u0082\x06OX\x12/0\u00CF\u00E0Hw\u009D\u00CD\u008F\u008Eofn\u00A5\u00F1\u00B0\x1E\u00F4\u0098\u0087_`\u00F6\u00C1m4E\x06\u00EEm4\x01\x0B\u00FC\u0094\x0B\u009C\u00FCv\u00BC\u00AE{a\u0093\u00FA\u00F2s\u0093\u00F3\u008E\u00C1\x1C\u008EC_b\u00EF\u00BF\u00B4\u0096\u009F\u009FrRWT\u00F6\u00B1\u00E9\x03X\x1D^\u00F2\u00B2\u00DFz\u00E3<\u00D2\u00E9@;vW\u0095t\x19\u00C4\t\x07\u00CC\x1D\u00D8[\u00B8\u00C5\u0091\u00D6\u00FA\x1Dn\u0092\u00D7\u00B627g\u00E8\x12?\u00A7O\u00DA\u00CC\u00DCZ\u00CA\u0081*\u00B4>\u009Fr\u00B0\u00D9\x17\x1F\b\x02'~\u0083?\u00DE-\x10\x04\u00BD\no\u00FC7\"\u00EB\u00E9\u00CB\u00CFA\x04n\u00B1I\\\x06\x1A\u0091\u00F7\u00F3\x17\u00D5\u00F0\u00BB\u0085\u00F3\u0091\u00DD\u00A3\u00CD\nF_\x01\x04\u00DD\u00D4\u00E5\u00D8L\x15\fx\u0081t\"\u00DF\x1C`Q\x18l\u008BO\u00F7\x11N\"\u00BC\u00975\x18\u00BC\u0085m\u00D7\u00CB\u00D1b\u00C0\u00DA\u0084 \x01?\u00C9\u00E7,\u00F1\u00CB!~\u0088/\x1E\u0085#\u0098\u00DF>\u00BB\x02\u008E\u00FF\u00E9*\x13as6\u00C0\u0088\u00C91x%s\x05\x1F\u008Bg\u008CI\u00D6\u00F2\x03g\u0090\u008E\u00B3I\\\u00CF\u00C2\x11\x00\x7F`,~;\u0094\u00F0\u00C9'\u00C7\u00DD!\x05x\u00EC\x02M\u00FB\x1C\u00BFO\u00C9/\u009C\u0094\u00BD\u00E4\u00F1\u00BB\x1Ct\u00CAA{\u00DAV!\t\x0F\u008F\r\u00B5\u00E7\u00A9\u0083\x06\u00F5;\u00C5\x12/\u00A5=\u00B9\u008B\u00F1\u00F7',\x1E4h\u00F10Lqr\u0098pXK`\x10\u00BF\\\u0089\x1F!(\x15~\u00B0\u00FF\u00F2&&\u00E0\u0081~\u0099\u008E\u008ELC\u00FF}\u00D0\u00E0`\u0085g#\u0085\u009B\u00B1\u00D56\u0093\u00E2wc\u00EF\u00BC\u00B9\x10\x01\u008D}\u00CD\x17\u00BE\u00A4d\u00A4cU\u009F\x1B|\u008ET\u00B6D\u00A3m\x0F\u00E9?\u00A8\x01!\u00D3Q\u009F\u0094\x15nn\x13\u00A2w\x12\u00AC\u00F9$\u00ACvn\u008E\u00F4[n\u00B8\x0BL\u00CC4\u00F4\u009Bh-\u009A\u00A7\u00FD#\x06 \u00D2\u00FD2\u00EDm\u00ED\u0099~{#\u00E9]\u00AC\u009F{\n}8\u00A1\u00A1\u00A3\u00AD\u00AD\u00A3a\"\u00FA\u00BC=\x03G\u00AE\u00C2O\u00A8\u00E6\u00C7\u00916?\u00DE\u00E2\u00B7k{\u00AA5\u0096\u00AF\u00CF|\u0089\x03I\u0084\x0FH\u00A1\u00FC\u00AE\u0098\u00D7\u00CA\x0F\u00B1g\x1D\u009F\x0F\u00C5\u00D1\u009ET\x01\u00ACu=b\u00B33\u00FA\u00E7\u00A2\x00\u00E1\u0080_S-~\u00FD:\u0086\u00A6\u009A\x11Z\u00D3\u00A1D\\z\u00C6\x04\u00BC\u0096iki\u00CF`\u00B5[q\x01e{LoP{}\u00BE\u00B5\u00B9%3\x11{\u009D\u00C23\u0087cqG*\u0099N\u00E6\u00DBN\u00C0\u00AC%N\u00C3F=\u00AD\u00A55\u009D\u008E\u00D5g\x06c\u00AB\u00E6\u009Ck\u00C3\u00CF\u008B\u00F9=\u00DA\x1A\u00F5\u00CA\u00A1l\u00F3rl?\u0091\u00F7\x05\u00B4l\x0B\u00FE\u00E6\u00E1W\u00B0w\u00B6d\x13~\u00C2\u00D1\u00D7=}#\u00B6E\u00BE\u00F89\u00A2\u00B4o\u009CtU\u00F8\u00B5\u00C5\u00B2z\b\u00E0\u0095\r\u0085\u00E3\u00D4\x15h\u00ABnjN\x16\u0092\u00A9kL\u00C0\nM9\x0B{\u00DC\u00E2\u00FAdP\u0086_\u00CEw`S],\u00A9\u0098\u00DF\u00F8\u00A1\x059b\u00E8\u00C9\u00B3\u0087\r\x1B\u00F6\u00D8\u00E1\u009A\"\x1E\u0080\u00A4\u0093b\u00BA\x18\u0091\u00A3\u00F9I \u00BCn\u00A9\x7F\x1D\u00F8\x1D\u00965$F\u0091\u00D3\u008F\u00E2\u0081\x18\u00F0\u0090\u00AC\x18[\u00DEd\u00DAh\\\x1E\u0093W\x17]\u00F8;\x10\u0099O\x0F\u00D9\x0E\u00FE=f\u008E\u00E0t\u0094\u00F9\u00E5\u0083\u0086\"\x01\u00E2\f\x1F\x16xm8(\u00B9\u00AA9*&\u00E4\u00F4\u00B5&\u00E0WY\u009C\u008C\u00EDT_\x10%\u0096\u00E74=v\u00E3\u00A4Io\u009E\u00F5\u00BE\x12\u0099\u0082\u00DD\u00F6\u0080\u00C3#qF\u00F3\x16\u00F2\u00A9|AVU\u00F9\x11\u00BC\x1B\u00D7\u00BD\u00AF0\u0092\x11\u008C\u00A5R1]\u0085\u0080\u00B6\u00F6\u00FC\u00A2#\x18v\u00EE\u00D6_#F\u009BL\u0089\u00F8\t'\x1D\x0F\u00E5_3m\u00EC\u00DA\u00ACK5\u00DE\t\u0087-\u00BE/\"\u00F3\u00F3!\u009F\u00E20\t\x11\u00A6\u00CC\u00EF\u00EDK.;\u00DA\u00C2\x15\u00DDtX\u00FDz\u00CC\u00981\u00AFd#,\u00AF\u00E8_\u0099\u0080ou\u00DD\u00B2\bD-\u009A\"<~IN\u00B76\u00C7\u00F4\u0084\u0094\u0088\u008E\u00B7#\u00E4\u00E9w-Mx\u00A3\u00D9\u00A8\u00AC2\u0092\u00FC\u00A6\x1DL\x07\u008E\u00BDx\u0084\u00A8g\u00B3z\u0084\u00EBu\u00FE6\u00AB\u00E27\u00BC\x0F\u00BFj<\u00D4\u0092Uh\u00A7\u008B\u00F0k\u00D9\u00A1\x10n,\u00EF,\u00D4z'\x04_\u00FF\x1C\x1C*\x1B2'\u00E1\x14\u00A8\u00D0n\u00CC\u00AF\x0Fv\u00A7\u00FDR(\u0096jN\u008B\u009C\u00CF\u00C7\u00DC\u0083#M,\u009A\u00C5\u0087\u00E8l=N\u00BA\x1D\x0E\u00C8\u00B1\u008C\u00E1\u00D5\u00BD\t\u0086S\u00F5\x1B+9\x7F\u00FB\u00C9\u0087\u0083\x7F\u00B3a\u00D6H\u00EER\u00C9}{=\u00F5\u00BE\u0098`r\u0084\u00CB\u00E6\u00B7\u00B59\\\x11\u0088\x12?\u00BF2\u00D3\u00BCt\u00CD\u00FC\u009Avm\x0E1\x1E\u00C8\u00A8\x14+\u00C7\u0096[\u00B2\u00E5\u00AD\u00D8;\u00ED\x02\u00B7T\u00F9\u00C2\f\u009C\u00FC^oI\u00B5o\u0087>\\\x12\x06\u00B3\u00D7\u00F2{6\u00EC\u00E7\x12\u00A1hP\u0094\u00FC\u00A4\x7F\u00D5||\u00DC\u0093\u00D1w\u00F0Zc\x06D%\\I\u0092\x01\x06|\x19e\u00DE\u00D8$\u00A0^\u00A1x\x17'\u00D0~%8t\u00CF\u00DE\u0099r\u00F2\u00D2\u0080\u00C7\u00CE\u00E0$\u00F7\u00AE9S\u00F1#~\u0098\u0091_\u009D`\u00CE\u00E1HW-?\x1B\u00F3\u00EFaQY\u00E6\u00F4\u00A9\u00D9W-\u00C9W\x05M\x00m\u00A8\x06\x1C5j\u00D4\u00C8Q\x00\u00A7\x0B\u00CE\u009Ar,:w\u00E7\u00C4\u0092\u00F9/p\n\u00E4<\u00C4j\u00F8}\u00CF\n~V\u00D1T&\u0090\u00F3\u00DF\u008D\u008F\u00F4&\u00CD\u00D9\u00E0w\u00D8\x14i\u00CD\u00E7.\u0095\u0097\x1E\u0092\u00A4\bJP\u00F4\u00E6\u00C5\x07\u0082\t\u00CB\x18\u00EB'iVL\u00B6M\x1C\u00DF\u009B\u00F6\u00E5\u00A4\u00C5\u00CFEr\u0097\u0099\x0F\u00AB\u00E0^\x16?*0\u00A2q~\x04\u00CC\x01\u0083\n\u00BF}\u008E?\u00FE\u00D5W\u008F\x7Fp\u00BEi%u\x12\u00A72ie\u00A3\x1D^\u00C6\u00C1\u00E9C\u00C5\u00EA\u00C7f\tO\x12N*\u0080S\u00F9g\u00B0\u00D8\u00E4\u00CDv\n\u00A4|6\u00BF\u00ED\u00CA8\u00F6\x0E\u00C6\u00E7!}~\u00C0\u00BC\u0085&\u00FE\u00B1s\u0092!\u00AF\x15F\u00A6(\u00A4U\x18\u00E3\u00EE\x00:\x03\u00D0\u009A\u0088\u00E6;\x16O\u00DCep\u0085\u00A0@\u00E6\u00E2r\u00B2%s\u00EAA{\u00F7\"\bF\u00C09\u008A\u008D\u008Cn\x1C\u0081\u00DD\x00\x0F\u00F9\u00E7\u00CD\u00CD\x13<\u00E5\u00A8\u00E2\x07\u00F9\u00BD\u00BD\u00BD\u00A3\u00A1\u00FFI8\u00D9\u00DD\u008E\u00AC\x05\u00E6\u0099P.\u00BAG\x00?\u00A8\u00F5>*\u00F3[(\u0090>+\u00BA\u00BC\u00FE\u00F6\u00EC\u00D9S\u00CE\u00C1\x0Ez\x11O\nj%\u00BFg\x00\u00ED)8v$Z7)|0\u00DA:\u00E0m\u00B1PD\u00CCbk|\x07\u00FC\u00EC\u0096\u0088\u00D8\x030\u00CA\t-O$\x18\u00AB\u00EFh\u00E8Wf3\u00E0\u00F2\x1C\x1D\u0096\u00E4B\u00BE-3\u00A8\x7F\u0099\u00F8d\x01(\u00E1\u008A0\u00B1\u0099\u00F9<\u00EF\u00B1\u00F48ifB\u00E3ej\u0098\u00A8\u00E6\u0087\u00F3{k\u00AA\u00AD\u00E15\u009C\u00F38\u00A8\u00F8\u0089\u00C0\x19\u00D8vV\u00C9\x16 \\\x10r~(\u00F3\u009B\u00C9\u0084yH~U\u0080\x14(\u0084\u00B5R~oI\x01PzW\u00C3P\u00A4\u00BB)\u00E1i\x13\u00E1\u00AAkZb^\u0095\u00D1\u00A2\u00F8<\u009D\u00A5\u00D2n\u00BB\u0095;\x0F\u009B\u00CAC\u0091\u00E1x\u00C4\x1BM\u00B6\u00D6C\u00F9r*LB\u00B3\u0090\u0087\u00AB\u00A2^\u0088\u00A5Z\u00C0\b\x07a\u0086;1p\u00C6p\r\u00A5^\u00D28\u0081\u00A1\u009Du\u0098\u00EDG\x0B\u00CD\x15F\u00DC\x07\u00A3\u009A\u00FC.\u00EBv\u00F6\x1D\u00AD\u00FA\u00A0\u00AC\u00B6Z\u0088\x07\u00F6\u00C1,\u008F\u00A0\u009Dn\u008A\u00DF\u00BA\u00C2O\u00E5\u00A4;\u00AA\u00C8\u00E1\x14\u00C8\u00F3Z9\u00BF\x07q~7\x14\u009Et\u00C2\u00DEt[\u00BE\u00F9\u00E0M\u00F5I\u00AF\x14\b\u00C7\u00F5Gp\u009AK@`\u00C7\u00F4\u0084e8\u00BF\x07.\x1F\bXf\u0088\u00DE`\u00A1\u00B5>\u00D3\x1F\u009B\u00F0:m,\u0092\x1E.\u00CA\u00A1h\u00B2\u00B9m\u00D0D\u00CC\u00FA(\u00EBQ\u00A7/.\u00AE0\x17~\u0084\u00DD\u0095\x10Lhn\x13\u00AC\x07v\u00AD:\u00FF%8\u009E\u0095D+\u00FB6\x19(\u00C1c\u00EF\x1Cs\u00C8\u00E7M\u00D8C!vxx\u00A3\u0090j\u00CF44t\u00B4\u00C4tMJ\x1CW\u00DB)H\\\u00C2\u00E2\u00D7\n\u00A9\u008Ca\x18\u008E\u00E5\x05\x0F\u00E1v\x13\u00DD\x0B\u00B0\u00E2k\u00DB\u009B\u00B3r<\x07\u00DA\u00E5\x1B\u00F1\"\x0F\u00C7\u00B1\u00CCA\u00E4\u0096\x0E@\u009E\u00B8D\x19a\u00AD]\u008AK\u009A\x1Cmm?\b\u00F3\x0BM\u00C6\x1E\u00A9\u00C4\u00E3J$\u0094\u00AEo\u00D8\x02\u00CF\u00E5\t\u009C\u00E0=l\u00C2{\u00AEi\u00FAP\u00BC\u00F1\u00F0M\u00E6\u0082%\u00D8=\u00AB\u00F9\u0085\u00E2\x02I\x07\u00D4\u00E0+8\u00BE\u00C9\u009C\u00C0[\u00DEyR\u00FF\u00FE\x0F\u00D8\x1E\u00EA\u00F1\u0084\u00D5P2\u009F\u00AAO5\u00C7\u00A2\u00A2\u00AA^\u0082\u0089\u00EClc\x07\u009C\x02\x13\u0092a\u00F1K\u008AL8\u0097\u00CB\u00F9|\u00B4\u0087\u0080\u00EB\n\u00CB9\u009B\u0096\u00B7\u00E7\u00B3b\u00DC\x0Fa2\x1C\u00B12\u00DA\x16\x17\u00FB)\u00A0OK\x03\u00B19u\u00D1\u00C0e\u00E9S\u00F1\u0080?\u00CC%\u0082y<\u00E9\u00CD\u00C2Y8\u00A4,e\u00C3\u00FE\x00T\x027\u00E2\u00B9^\x16\u0082\u0088\u00E5\u00A0K\x16\u0098M<\u00CA`$7g\x05d\x0B\u00A1\u0086\u009F\u00AE\x04Fv\u00CF;b\u00B8\u0089G\u00DE8ky\u00E7C\x1D-m\u00991\u0096\u0087\u00C2\x06\u00F0\u00AA\x18\u00D2\u0083A]\u008E(q\r\u0097\u00D6?\x1E\u00D2\x1F\u00E2\b\u009C\u00FBC\u00B0\x01/I\u0088\u0098\u00DF1\u00BF\u00DC\u00F1\u00FD\u00EE%\u00BC\u00E8\u00C9\u00ADjD\u00F4\u00BE\u00CC\u00A4\u00A6,\x19\u00C1vC\u0086\x11\u00D4\u00E8\u00D9\u0083q\u00F0\x18{\u00A4@\u0087/\u00B6\u00BA\u00D7\x1B\u00A3\u00B2\u00F7:\u00EB\u00C8\u00C5\u00FD>\u0088)\u008F\r\u00C0U@\u00F2\x1D\u00FC\u00FF\u00C0\u00A5\u0081\u009C\u00C0&\u00A6\u00E0\u00D2\u00E7\u00912?\x01z\u00D8\x15\u0090\u00F2\u00DC\u0088\u009F\u00A1\x1Fl\x1EQ\u00C3\u00AF\nM\u00E7{\u00D5\x11\x13p0\u00B8\t\n\u00F6\u00E6\u00E5\u0098j\u00E7\\\u00DAC\n<\u0087\u00BD.\x10\u00E0\"\u00C7\"\"'eZR\u00F9|s}\u00FB\u00A0\u009Dq\n\x14\u00BD\u00C0\u00AF\x0F\u00DE\b03\u00CDj<\x19f\u00E4\u00D8\u00B0RA2\u00D0Nw\x07B\u00FD\u00EC}g\u00BC]\u009E\u008D\x1D;\x19l\u0089\u0098\u00E4\u0093\u00B1\u00C7\u00EC\u008B\u0089\u00A7\u00CE\x1B\u00BB\f\u00CF\x1E|\u00B6\u00CC\x136\u00BF#\u00CC\u0099\u00BA\u0081\u00F9Q\x01\u00CD\u00BB\u00D2\\\u0088.\x13\u00D6\u00C8\u00AF\u00F1\u00F1\u00A4\x1C\x01\u00EF\x04\\\u00D3\u00AA\x1Bb4\u00F5P\u00C9C\t\u0082\u00A0(\u008F\u0087\u00A2(\u009A\u00BB\b\u00A7\u00B9\u00F6\u00D6\u00AC\u00EE\u00F5\u00C2\u00B1\u00AF\x7F\x1D\u00A7@]_\r?M\u009CoVc!\u00CBj\u00D1\u00D40d\u0095\n\u00F6\x1E\u009A5T\u00B1\x00v\u00ED#NG\x0B\u00CD\x07\u00FEV\u008DI\u00E9Rh\u00A2\x02\x0B\u00CD\u0095^\rs\u0082\u00F4`x\u009B\u009A0\u00D7r\u00FFW\u008D1\u00D7\u00E6\u00A3\u00E2\u00A5\u008D8\u00D8\u00A5\u0082\x1A\u00CBE\n\u00E7\\U\u008A\u00A1.\u0087\x057\u00C9\u00E0\u00E4\u00F7E\u00AB\u00AE1,\u00CBIb\u00E1\x1C|\x11\u00B3e\u00B4\u0096\u00DF\u00BE\u00DE\u00D9f\x1F\u00CC\u008C\u00F3\u009CQ\x18z\u00DA\u00F8^5\u00D7\u00817\u00C1\u00A1e\u0095P+\u0092V\u00B0\u00E7MI\u00AF\u00E1M\x0F=\u00B0\u00F7f\f>!\u00AFC?f\x17hMM^\u0083\u00A1\u00AD\u00FB\u0091\u00B0\"/0W\u00E5``\u00F5\u00EFbo~\u00F3\u00C7<xMGsV\u008CL\u00C0\u00A3s\n\u0091\x00Isr\u00ECZ+\u00CBw\x13\u008Er\u00EB0\x17'\u00BF\u009B\u0083j\u00D8C\x11`N1\u00F9\x19\u00E6\u00B2:~\u00D1q}\u00F9\rW\x02~NL\u00D7g\x0E\x1Co\u00B3\u00DB\u00F3\u00B4\u00B6\u00987\x0EGQ\r\u00E6;&\u00EE]fw\n\u0088UF\u0081\u00F2\u00A5R\u00B5\r\x1E\u0096Ie\x13a\u00CB=\u009D\u00C2*s\u0081\u00A8\u0084)\u00BB\u00DC\u00E6\u008C\u0099\u00E6\u00BDv9S\u00E7\x14\u00B4l}\u00A6_\u00FF\u00FE\u00FD\u00CA\u00D7\t1\u00E8\u00DC\x141\u00DB\u00DC\u00DEQ\u008F\u00AE\\\u00A0\u00A0\u0080\u00EA\u00BF-\u00D3\x01\x1A\u00ED\u00A7\u00F0\u00A6\u00C5C\u00AD-\u00ED)\u00D8\x00\n\u00D9\u00D4I\u00C3\u00B8\u00AD}h,\u00AAg\u00F3\u00ED\u00FD\u00FA\u0083B\x0B\u00832m\u00F9t0\x1Aki\x00\x19\u00FE\x15\u009C^B\x12\u00D4?\u009C\x01s3\u00A7N<h\u00D8\u00C4S\x1B\u00A0a\u00F7J9\u00C2\u00E9\th\u00C1XK\u00C7\u00E2S&\r;a\u00D2i\u00E8z\u00C3\u00AB\u0084i!.\u00A7!5\u009Dv\u00CA\t\u00C3&\u009D\u00B2\x18tF#<\u00E48\u00AB\u00E0<\u00C2\x1Cnp4\u008C\u00ECrf\u00B8\u00F9C\u00A9\u009C\x01?\u0093\x0B\u00AD\u00A9\u00A1C\u00EB\x01\u00A8\u00DCHB\u00BB\u00C5\x06X-\u0094\u008E\u00C5\u00B2\"2:\u00A4^\u00C5\u009Bn\u0085BD)\u00F7HuP\u00F5\x19\u00D1d2*\u0096\x1B\x11\u00BF\n\u008F\u00C0\u00D3\u0086\x1C\u008D\u00A5\u00EA[Z\u0090F\u00AC4V\b\u00C9r0\u00D9\\\u0092\u00E1\u00F4b\u00B0$A\u0090<\u00FCL\u00BE\u00BE\u00AD\u00BD\u00BD\u00AD\x05d\"\u0083n\x02\u00DD\u00C8\u00C3\u00B2P\u00A8\u00B4\u00B5\u00B5\u00B5\u00D4#q\\\u00A0`\u0093\u00B9H0\u0099\u00AF\u00C7\u00D2\x14\u00ACE\u00E3\u00A1\u00AF*\x17\u009C\u00C3\u00A1\u00E0t\u0095\u00AE\u00844(\u00D7X\u009B\u009F\u008B\u00C81\x11Y\x0FZ\u00D0C\x10\u00F8\u00D9\x1C\u00E9\u00F1A5$\u008B\x1AG\x03!8\u00C0B<\"\u00CB\u00A2\u00CA\u0093\u00C8\u00AB\u00CB\u00CF%DQciK\x04\u0093\u00C2\u0092!\u008A\u0090\u00D4%\r\u00E5\u00902t\u00D9P\u00E3 \u00F3\u00EA\u00BDD\tD\u00C5e\u00DD>G\x0B\u00E9t!\x1A\x12\u00A1\u00CEA\u00F7\u00BE@0\u00C7i\u00B2^\x12\u00AB<\r\u00AC\u00E1\u00DA0 \x19\u00D0\u00ED\u00820\x1B\u0084\u00E7\u00FD\u00E8\u00FE\x13\u00F3#Y\u00E8o{et\u00BF\u008A\u00FBw\u00F0V\u00FB\n?\u00CCr\f\u00C0\u00AA6\u00FC4\u00E5\u0084|K\u00FAy> \u00A0+n<\x07\u0086\u00F0\x15\u00FA\u00FD\u00F2K(x\u00AE4\x03\u0080\u0096\x05\x02>\u00EC\u00A3}~\x1E\u00EB+\u00EB\f\b\u00D52\x10\u0085iL\x05)f%U\u00D3T\u0089\x0B\u00D0\x14^1\u00BE\u0094\u00CE\u00F1\u008C\u00A2Yb\x1F\u00E5D\u00CD&\u00FEA\x0E\u00CD\u00D5\u00948\u008B\u0096\u0082'\u00E3\u00F0\x02\u00F7\x13\u00B8?\u00B2\u00FB\u00DB\u00F2\u00FD\x04\x00\u00AC\u00E3F!\x1F\u0083\u00A2\u00ECw\x17\u00F8\u00FD\x06|\u00B6uXo6\b\u00C2\rk\u00EA\u00FDb\x04\u00F530\u00A3\"\x00\u00E0w5\u00B6B[i\u008D\fDX\x15~\u0088\"i(rHKTQ\x05\x1DU\u0095\x183\u00C4s\u00A1\"\u00A2\u00EC\u0095U\u00F8\u00E1\u00FE\u00BD\u00F6\u00FE\u00C5z\u00B07\u0090\u00B2\u00CA{\u00DF\u00EA9\u00F6\u00D0\x16\u00D5UfTOr\u00D4\u00A0Ff\u00AB\u00B2_*\x01\\U\u00DA\u0091ik\u00C4\u0095\u00B9\u00AE\u0092\u00B0r\u00BF\u00AB\u00D4\u00DE/\u00FDg\u00DEm\u00D6\x01V'\x05\u00FC\u00B9\u00D4\u00E6'\u00FD\u0087\u00F9\u00AD3\u00FE\u00E7\u00B7\u00D5\u00FA\u00E4W\x07\u00A8}\u00B7\\\u00FD\u00B2\u00BB\x16\x7F\x1F?\u00E9\f\u00F3\x02\u0086^_\u00FCJl\u00AA^XC\u00C8\u00B4\u00C3@%X\u00B8\x10\u00DC\x18.\x147\u00D6\x1F?x\u00BFY\u00E1\u00E7\u00CCI\u00E7\u009A\u00E7\u00AEG~.\u00F7\u00A2E(O\u00D8p\u00B8G\x16\u008B\u00C5\u0097O\u009CG=q(\u008A\x7F@\u00F7\u00CA\u00AEC=\u00DD]\u008B@@\x1D\u00DA\u00D5M\x1E\u00DA3\u00F2\u00DD\"<\u00B0\u00DE\u00F8\x01\x1F)W\u00E6\u00E7\u0093.\u00C0\u00F7\u00BD\u00EB\u00E7\x07\u00E0\u00D2\u00D0\u00B3h\x114\u00E9\u0096\u0081\x1C\u0090\u00E7\u00BB\u008B\u008B\u00EE\x19W\u00BC\u00D3?o\u009E\u0095\u00FA(\u00FA\u00DD\u00E2\u00CA3\u00A7\u00CD\x15\u00E6\u00CD\u00F3\u00CF\u009Bv\u00E6\u00CA\u00E2\u00A5\u00FE\u00EEU\u00C4\u00FA!X\x07\u00F5\n\u00DC\u00C7_\u0080.\u0094\u00CA|\u00E745]\u00CA\u0092\u00E8\u00B5\u00F6:(Z=@\x1F%,\u00EA9q\u00DA\u0099\u00E4\u009D`\u00A4\u009E\u008D\u009D\u0084on\u00F1\x06}vq\u009Ct\u00E6\x13B\u00F7\x13\u00D3\x0E=\u00F1N^\x1A\u00D2\x05c\u00EE\u00CCE\u008C2\u00EE\u00E5\u00AE!\n\u00B3\u00B2\x07\u00D5BkR\u00BA\x0E\u008B\u0082\u00BA\u008D\u00BD\u00B4\u00A9\u00E9(\u00DB\x1F\u00AD\u00EB\u0098\u00C8\n\u00B3\u00B1\u00F3\u00E4\u0093\u00D7\u00E1\u00EF\u0097\u00B0\u00E3\u00D5\x02I\u00E1\x07\u0086t}xO\u00F1\u009E\u00CB\u008A\u00AB\u00EE\u00EC\x1AI\u0091\u0081\x11\u00C5\u00E2\u00FE\u00C5\u00AE\u00D9\u00C6\u0090\x13\u0099q\u00D3\u00E6\\\u00B6\u00FF[\u00AAqa\u00B1\u00CBkhCN\u0084\u00D2tZq\u00B6\u00A8\u008D+\nP?\u00AEA)`\u00AD\u00CF\u00C6\u00FD'\u009F\u00DC\u00D9h\u009E\x1B\u00A9\u00BC\u00DC\u0082BX\u0095\u00B7\x1A>\u00A1\u00B3\u00F3J(\u00EC\u00D6\u0096\u00DE\u00D4m\x00\x1BW\x03\u0089\u00A6\u00BA\b_|\u00C8\x10\u00DD;\u00ED\u0086D\u00CF['\u009E\u00E9\u00A7}\u00ECQ\u00C5\u00C7[[{\u00A6\u0087\u0086\u00CC\u0088\u00BC\u00D5c\x18=7\u0088\u00A1\u00E9]\u00C5\u00C7\u00BD\u00C6\u0090\x19bh\u00D6\u00FE\u00D3f\u0084\u00C4qEti\u00B8F\u00A5kI\x106\u00F7\u00CA\u00CE\u00CE\u0087\u0087\u00DF)\u00ABa\u00CAa\x0B\u00A1U\u00E3\x12\u00B2\u008CJ\x7Fb-\rhWF\u00CE\u00BE\u0080#\u0087\u00BA'\u00F0\u00BE)\u00E7\x17\u00BF\u00F5\u00DE0\u00AD\u00F8!\u009B\u00CBqG\x15\u00AF~\u00FB\u00E6\u009E\u00E9\u00D1\u00ABg\u00C8\u00FB\x15\u00F7\u00DB\u00AFxChV\u00F1\u00FC\u00AB\u00F7\u00BFP\x1E2C\u00BE\u00B0\u00F88\u00C8\u00E4qE\x0E\x1A\u00885*]\u00CB}\u00C7\x7F\u00DF\u00A3\u0089\u00B2\u009C\u00E0\u00A0\u008D\u00A9\b\x05N\u008B$\u0094u\u00E2g\u00AF\u00A4v-\u0098\x1F\u0098\u00E7j=8\u00E5\u00E5\u00E9\x06\u0097C\u00F6\x03\x07\u009D~>\u00F0\x0B\x05gM\u009F\u00D53\u00EB\u00C2\u00FDg\u00A5\u00A7t\u00F5,\x192cI\u00D7\u00F4tz\u00C6\u00FE\u00B31?\u00F7\x1A\u0095\u00AE\x0B?%\x11\u00D18\u00A1\x17\x15\u0088p>\u00E8VX?z\u00C1\u00F4\u00D7\u00ED\x07\u00EE\x10\t\x05g\u00EB\u00FAl0L\u0084\u00A5\u00C9\u00B0\u00EA\u0085.\rn\u009Dd\u00D9{\u00E1\u008C\u00F3\u00CF/\u00EE\u00A7\u00A3\u00D6/$\x1B\u0086!\u00A2VS\u00F7\u008A\t\u0085\u00A7\u00FF\u00B2\u00FDp\u00EC\u00F6\u00B3\f\u00C7\u00FB\u00A0\u00B5\u00EAm\f\u00C2C\u00D3$j\u00DD\u00D6!\u0087\u00BBV\x07t\u00D3\u00E4\tK\x11\x11p\u00E1\u00F4Y\u00B2\x1A\u00F0P\u00C8\u00FD\u00BD^\u00D9Hh\u0089\u00C8\u0092Y]=\u00B3tY\x04j\x11M\x05h\x11#\x12I@_\u0087vw\u008DJ\u00D76\u00C0@\u00F8\x04&\u0090\u009C\u00AA,^\u00FE\u00EB\u00B9\u00BA\u00BF\x1E?q\u0084\x0EpL\x1CZt\u00C3@g\u00DAI\u00E5XIQ$\u00E8\u0095\u00D9\u00B8&\u0087th\u00C1\u00E3\f\u00CB\u00B2<\x02\u008B\u00C1\x07r\u00B0\u00BB\u00EB!~\u00D6\u00AD\u00E1\x0F\u00FF\u00CAy\u00E6\u00AF\u00E7?\u00BC\u0087>\u009F\x10f\x19\u0086\u00C5\u00B7\x0E\x04\u00E9\x13r>\u00D2C\u00D2~|:\u00E2\u00BC@\u0093\x00\x0F\u0080$\u00ADO\u00A8w\u00FE\x0B\u00F9o]\u0088\u00FC\u00F5\u00FA\x13\u00F6\u0090\u00C0\r7\tUI\u00B9\u00FE\u0084\u00B3E\u00D1a\x16\u00BF`\u0081Q5\\\x1B\u00D0_\x7F#/\u00C3\u00A4\u00CAF\u00B1\u00DC\f\u00DF>xH(\u00DD`\u00D4\x07\x1B\x0E\u00BB\u009A6\u00A2\u00FA\u00A0\u00FF\u00B3\u00A6\u00FA\x036\u0093~\u00A3\u00E6\u0096\x03\u0085\x00\x00\x00\x00IEND\u00AEB`\u0082";
var bannerIMG = ScriptUI.newImage(bannerBin);

var mainPalette = new Window("palette",sctiptTitle,undefined);
    mainPalette.alignChildren = "fill";

var theBanner = mainPalette.add('image',undefined,bannerIMG);

var mainGroup = mainPalette.add("group");
    mainGroup.orientation = "column";
    mainGroup.alignChildren = "fill";

var ddl2 = mainGroup.add("dropdownlist",undefined,["steps(1)","linear","ease","auto"]);
    ddl2.title = BXLocolize(bx_str.tFunc);
    ddl2.selection = 0;

var grp3 = mainGroup.add("group");
var loopDsp =grp3.add("statictext",undefined,BXLocolize(bx_str.loopCount));
    grp3.orientation = "row";
    grp3.alignChildren = "fill";
var grp4 = grp3.add("group");
    grp4.orientation = "column";
    grp4.alignChildren = "fill";
    grp4.alignment = ['fill','fill'];
var loopInput = grp4.add("edittext",undefined,"0");

var drt = mainGroup.add("dropdownlist",undefined,["normal","alternate"]);
    drt.title = BXLocolize(bx_str.aniDirection);
    drt.selection = 0;

var ddl1 = mainGroup.add("dropdownlist",undefined,["forwards","backwards","none","both","initial","inherit"]);
    ddl1.title = BXLocolize(bx_str.fillMode);
    ddl1.selection = 2;

var grp5 = mainGroup.add("group");
var preFixedDsp =grp5.add("statictext",undefined,BXLocolize(bx_str.preFixed));
    grp5.orientation = "row";
    grp5.alignChildren = "fill";
var grp6 = grp5.add("group");
    grp6.orientation = "column";
    grp6.alignChildren = "fill";
    grp6.alignment = ['fill','fill'];
var preFixedInput = grp6.add("edittext",undefined,"");

var pal2 = mainGroup.add("panel",undefined,BXLocolize(bx_str.options));
    pal2.orientation = "row";
    pal2.alignChildren = "fill";
    pal2.margins = [8, 16, 8, 8];
var ckb1 = pal2.add("checkbox",undefined,BXLocolize(bx_str.frameByFrame));
    ckb1.value = true;
var ckb2 = pal2.add("checkbox",undefined,BXLocolize(bx_str.splitCSSfile));
    ckb2.value = true;
    ckb2.alignment = ['right','fill']; 

var pal3 = mainGroup.add("panel",undefined,BXLocolize(bx_str.spriteOptions));
    pal3.orientation = "row";
    pal3.alignChildren = "fill";

var sprGrp1 = pal3.add("group");
    sprGrp1.orientation = "column";
    sprGrp1.alignChildren = "fill";
    sprGrp1.alignment = ['fill','fill'];    

var grp7 = sprGrp1.add("group");
    grp7.orientation = "row";
    grp7.alignChildren = "fill";

var mxWidthDsp = grp7.add("statictext",undefined,BXLocolize(bx_str.maxWidth));
var grp8 = grp7.add("group");
    grp8.orientation = "column";
    grp8.alignChildren = "fill";
    grp8.alignment = ['fill','fill'];
var mxWidth = grp8.add("edittext",undefined,"4096");

var grp9 = sprGrp1.add("group");
    grp9.orientation = "row";
    grp9.alignChildren = "fill";
var skipFrameDsp = grp9.add("statictext",undefined,BXLocolize(bx_str.skipFrame));
var grp10 = grp9.add("group");
    grp10.orientation = "column";
    grp10.alignChildren = "fill";
    grp10.alignment = ['fill','fill'];
var skipFrame = grp10.add("edittext",undefined,"0");

var sprGrp2 = pal3.add("group");
    sprGrp2.orientation = "column";
    sprGrp2.alignChildren = "fill";
    sprGrp2.alignment = ['fill','fill'];

var grp11 = sprGrp2.add("group");
    grp11.orientation = "column";
    grp11.alignChildren = "fill"; 
    grp11.margins = [0, 4, 0, 0];

var rdb1 = grp11.add("radiobutton",undefined,BXLocolize(bx_str.compLength));
    rdb1.value = true;

var rdb2 = grp11.add("radiobutton",undefined,BXLocolize(bx_str.workAreaLength));
    rdb2.value = false;
    
var grp1 = mainPalette.add("group");
    grp1.orientation = "row";
    grp1.alignChildren = "fill";
var btnGrp1 = grp1.add("group");
    btnGrp1.orientation = "column";
    btnGrp1.alignChildren = "fill";
    btnGrp1.alignment = ['fill','fill'];
var markCSSbtn = btnGrp1.add("button",undefined,BXLocolize(bx_str.btnMarkCSS));
var markSPRbtn = btnGrp1.add("button",undefined,BXLocolize(bx_str.btnMarkSprite));

var btnGrp2 = grp1.add("group");
    btnGrp2.orientation = "column";
    btnGrp2.alignChildren = "fill";
    btnGrp2.alignment = ['fill','fill'];
var settingBtn = btnGrp2.add("button",undefined,BXLocolize(bx_str.btnSetting));
var helpBtn = btnGrp2.add("button",undefined,BXLocolize(bx_str.btnHelp));

var expBtn = mainPalette.add("button",undefined,BXLocolize(bx_str.btnExport));

mainPalette.show();
//----------script ui functions----------
markCSSbtn.onClick=addMarks1;
markSPRbtn.onClick=addMarks2;
expBtn.onClick=exportCSS;
helpBtn.onClick=BXHelp;
settingBtn.onClick=BXSettings;
loopInput.onChange=looping;
drt.onChange=direction;
ddl1.onChange=fillModeSel;
ddl2.onChange=timingFuncCal;
ckb1.onClick=keyMode;
ckb2.onClick=cssFileMode;
preFixedInput.onChange=getPreFixed;
//----------default parameters----------
var keyFlag = 0;
var tFunc = "linear";
var delayT = "0";
var loopCount = "infinite";
var fillMode = "none";
var aniDirection = "normal";
var ExportMark0 = "BXExport";
var ExportMark1 = ExportMark0+"_CSS";
var ExportMark2 = ExportMark0+"_Sprite";
var preFixed = 'BX_';
var splitCSSfile = true;
//set as an option?
var accurate = 2;
var osSlash;
if($.os.toLowerCase().indexOf("mac") == 0){
    osSlash = "/";
}else{
    osSlash = "\\";
}

//----------set divs----------
function filterName(str){
    var pattern = new RegExp("[\"' ]");
    var specialStr = "";
    for(var i=0;i<str.length;i++){
        specialStr += str.substr(i, 1).replace(pattern, '_'); 
    }
    return specialStr;
}
function getLayerChain(curLayer,slLayers){
    var parentLayers = [];
    function getParentChain(layer,layerGroup){
        for(var i=0;i<layerGroup.length;i++){
            if(layer.parent == layerGroup[i]){
                parentLayers.push(layerGroup[i]);
                getParentChain(layerGroup[i],layerGroup);
            }
        }
    }
    getParentChain(curLayer,slLayers);
    return parentLayers;
}

function genDIV(layer,hasBG,type){
    var divTemp;
    var layerNameTemp = layer.index+"."+filterName(layer.name);
    var theClass = preFixed + "Class" + layer.index;
    var theBG = preFixed + "BG" + layer.index;
    var theAni = preFixed + "Ani" + layer.index;
    if(hasBG==true){
        var idNameTemp = preFixed + "Layer" + layer.index;
        var classNameTemp = theClass + " " + theBG + " " + theAni;
        switch(type){
            case ExportMark1:
                divTemp = <div class={classNameTemp} id={idNameTemp} AELayerName={layerNameTemp}></div>;
                break;
            case ExportMark2:
                var theSpr = preFixed + "Sprite" + layer.index;
                classNameTemp = theClass + " " + theAni;
                divTemp = <div class={classNameTemp} id={idNameTemp} AELayerName={layerNameTemp}></div>;
                divSprTemp = <div class={theSpr}></div>;
                divTemp.appendChild(divSprTemp);
                break;
            default:
                divTemp = <div class={classNameTemp} id={idNameTemp} AELayerName={layerNameTemp}></div>;
        }
            
    }else{
        var classNameTemp = theClass + " " + theAni;
        divTemp = <div class={classNameTemp} AELayerName={layerNameTemp}></div>;
    }
    return divTemp;
}

function getRot(layer,time){
    var rotation;
    if(layer.threeDLayer == true){
        var Rx = Number(layer.transform.xRotation.valueAtTime(time,false)+layer.transform.orientation.valueAtTime(time,false)[0]).toFixed(accurate);
        var Ry = Number(layer.transform.yRotation.valueAtTime(time,false)+layer.transform.orientation.valueAtTime(time,false)[1]).toFixed(accurate);
        var Rz = Number(layer.transform.zRotation.valueAtTime(time,false)+layer.transform.orientation.valueAtTime(time,false)[2]).toFixed(accurate);
        rotation = ' rotateX(-'+ Rx +'deg) rotateY('+ Ry +'deg) rotateZ('+ Rz +'deg)';
    }else{
        rotation = ' rotate('+Number(layer.transform.rotation.valueAtTime(time,false)).toFixed(accurate)+'deg)';
    }
    return rotation;
}

function printDivs(divss){
    var tempDivs='';
    for(var t=0;t<divss.length;t++){
        tempDivs+=divss[t]+'\n';
    }
    return tempDivs.replace(new RegExp("/>","gm"),"></div>");
}
//----------css animation modes----------
function direction(){
    if(drt.selection.index == 0){
        aniDirection = "normal";
    }else{
        aniDirection = "alternate";
    }
}
function looping(){
    if(loopInput.text == "0"){
        loopCount="infinite";
    }else{
        loopCount=loopInput.text;
    }
}
function keyMode(){
    if(ckb1.value == false){
        alert(BXLocolize(bx_str.timingFunNotReady));
        keyFlag = 0;
        ckb1.value = true;
    }
}
function timingFuncSelect(){
    var timingFunTemp='';
    switch(ddl2.selection.index){
        case 0: 
            timingFunTemp = "steps(1)";
            break;
        case 1: 
            timingFunTemp = "linear";
            break;
        case 2: 
            timingFunTemp = "ease";
            break;
        case 3: 
            timingFunTemp = "auto";
            break;
        default:
            //timingFunTemp = "auto";
            timingFunTemp = "steps(1)";
    }
    return timingFunTemp;
}
function fillModeSel(){
    switch(ddl1.selection.index){
        case 0: 
            fillMode = "forwards";
            break;
        case 1: 
            fillMode = "backwards";
            break;
        case 2: 
            fillMode = "both";
            break;
        case 3: 
            fillMode = "none";
            break;
        case 4: 
            fillMode = "initial";
            break;
        case 5: 
            fillMode = "inherit";
            break;
        default:
            fillMode = "none";
    }
}
function timingFuncCal(){
    var modeTemp = timingFuncSelect();
    if(modeTemp=="auto"){
        //calculate timing function(not done yet, return linear for now...)
        alert(BXLocolize(bx_str.autoModewarning));
        modeTemp = "linear";
        ddl2.selection = 1;
    }
    return modeTemp;
}
function getPreFixed(){
    preFixed = 'BX_'+filterName(preFixedInput.text)+'_';
}
function cssFileMode(){
    splitCSSfile = ckb2.value;
}
function savePNG(theComp,theLocation) {
    //if the resolution isnt 'Full', store current resolution and set to Full, then restore later;
    var res = [1,1];
    if(theComp.resolutionFactor != "1,1"){
        res = theComp.resolutionFactor;
        theComp.resolutionFactor = [1,1];
        }
    if(theLocation != null){
        //close the renderQueue panel
        app.project.renderQueue.showWindow(false);
        //show the correct charactar in the path
        theLocation = decodeURIComponent(theLocation);
        //backup the render queue status, then uncheck the queued items
        var RQbackup = storeRenderQueue();
        //check if renderQ rendering, if so,return "R".
        if(RQbackup[RQbackup.length-1] == "rendering"){
            //**an option is to render through 'saveFrameToPng()': **
            //alert("Render Queue is rendering item, now export the png using saveFrameToPng().");
            //theComp.saveFrameToPng(0, theLocation);
            //*******************************************************
            return "R";
        }else{
            //call command "save frame as" to add current frame to render queue
            theComp.openInViewer();
            app.executeCommand(2104);
            app.project.renderQueue.item(app.project.renderQueue.numItems).render = true;
            var templateTemp = app.project.renderQueue.item(app.project.renderQueue.numItems).outputModule(1).templates;
            //call hidden template '_HIDDEN X-Factor 16 Premul', which exports png with alpha
            var setPNG = app.project.renderQueue.item(app.project.renderQueue.numItems).outputModule(1).templates[templateTemp.length-1];
            app.project.renderQueue.item(app.project.renderQueue.numItems).outputModule(1).applyTemplate(setPNG);
            app.project.renderQueue.item(app.project.renderQueue.numItems).outputModule(1).file = new File(theLocation);
            //var finalpath = app.project.renderQueue.item(app.project.renderQueue.numItems).outputModule(1).file.fsName;
            app.project.renderQueue.render();
            //remove the rendered item and restored the render queue items
            app.project.renderQueue.item(app.project.renderQueue.numItems).remove();
            
            if(RQbackup != null){
                restoreRenderQueue(RQbackup);					
            }
            app.activeViewer.setActive();
            app.project.activeItem.resolutionFactor = res;
        }
    }
    //store the renderQ,return the index of active render items
    function storeRenderQueue(){
        var checkeds = [];
        for(var p = 1;p <= app.project.renderQueue.numItems; p++){
            if (app.project.renderQueue.item(p).status == RQItemStatus.RENDERING){
                checkeds.push("rendering");
                break;
            }else if(app.project.renderQueue.item(p).status == RQItemStatus.QUEUED){
                    checkeds.push(p);
                    app.project.renderQueue.item(p).render = false;
            }
        }
        return checkeds;
    }

    //restore the renderQ
    function restoreRenderQueue(checkedItems){
        for(var q = 0;q < checkedItems.length; q++){
            app.project.renderQueue.item(checkedItems[q]).render = true;
        }
    }
}
function GenerateSprite(mainComp,layer,theLocation,sprAniName,skipPara,maxW,ioOrCompLength){
    var oriComp = layer.source;
    var oriR = oriComp.frameRate;
    var skip = Number(skipPara);
    var compR = Number(oriR/(skip+1)).toFixed(3);
    var oriW = oriComp.width;
    var oriH = oriComp.height;
    var oriL,startTimeTemp;
    var waEnd = mainComp.workAreaStart + mainComp.workAreaDuration;
    if(ioOrCompLength == true){
        oriL = oriComp.duration;
        var layerCount = compR*oriL;
        startTimeTemp = 0;
        var layerDelay = layer.startTime - mainComp.workAreaStart;
    }else{
        oriL = Math.min(layer.outPoint,waEnd) - Math.max(layer.inPoint,mainComp.workAreaStart);
        oriLFull = Number(mainComp.workAreaDuration).toFixed(accurate);
        startTimeTemp = Math.max(layer.inPoint,mainComp.workAreaStart);
        var layerDelay = 0;
        var layerCount = compR*oriL;
    }

    var framePosX=[];
    var framePosY=[];
    
    var rows,columns = 1;
    var limitW = limitH = maxW;
    var compW = oriW*Math.ceil(oriL*compR);
    var compH = oriH;
    var posExp = "[thisLayer.width/2+(index-1)*thisLayer.width,value[1]]";
    if(theLocation != null){
        var imgURL = theLocation + '/sprite' + layer.index + '.png';
        var imgURLforReturn = 'imgs/sprite' + layer.index + '.png';
        var cssCodeAni = "";
        var cssCodeKeys = "";
        //keep resolution
        var res = [1,1];
        if(oriComp.resolutionFactor != "1,1"){
            res = oriComp.resolutionFactor;
            oriComp.resolutionFactor = [1,1];
            }
        //calculate the size of the final img asset.
        if((oriW < limitW) && (compW > limitW)){
            for(var j=0;j<compR*oriL;j++){
                if((j+1)*oriW>limitW){
                    columns = j;
                    rows = Math.ceil(Math.ceil(oriL*compR)/j);
                    break;
                }
            }
            //alert(BXLocolize(bx_str.bigPic));
            compW = oriW*columns;
            compH = oriH*rows;
            if(compW > 30000 || compH > 30000){
                alert(BXLocolize(bx_str.compSizeLimitation));
            }
            posExp ='var columns =' + columns +';\n' +
                    'var rows =' + rows +';\n' +
                    'var x,y;\n' +
                    'if(index%columns == 0){\n' +
                    '    x = thisLayer.width*(columns-0.5);\n' +
                    '}else{\n' +
                    '    x = thisLayer.width*(index%columns-0.5);\n' +
                    '}\n' +
                    'y = thisLayer.height*(Math.ceil(index/columns)-0.5);\n' +
                    '[x,y]\n'; 
        }
        var tempComp = app.project.items.addComp('TempComp'+startTimeTemp,compW,compH,1,oriL,compR);
            tempComp.openInViewer();
        var startTimeTemp2;
        if(layer.inPoint < mainComp.workAreaStart && ioOrCompLength != true){
            startTimeTemp2 = layer.inPoint - mainComp.workAreaStart;
        }else{
            startTimeTemp2 = 0;
        }
        app.project.activeItem.layers.add(oriComp);
        app.project.activeItem.layer(1).startTime = startTimeTemp2;
        app.project.activeItem.layer(1).position.expression = posExp;
        for(var i=1;i<layerCount;i++){
            app.project.activeItem.layers[i].name = 'Start_at_'+(-(skip+i-1)/compR + startTimeTemp2).toString();
            app.project.activeItem.layers[i].duplicate();
            app.project.activeItem.layers[i+1].startTime=-(skip+i)/compR + startTimeTemp2;
        }
        savePNG(tempComp,imgURL);
        var picCount = app.project.activeItem.layers.length;
        for(var m=1;m<=picCount;m++){
            framePosX[m-1] = -(app.project.activeItem.layers[m].position.valueAtTime(0,false)[0]-oriW/2);
            framePosY[m-1] = -(app.project.activeItem.layers[m].position.valueAtTime(0,false)[1]-oriH/2);
        }
        
        cssCodeAni = sprAniName+" "+oriL+"s " + "steps(1) "+layerDelay+"s ";
        cssCodeKeys += "@keyframes "+sprAniName+" {\n" + 
                    "\t0% { background-position: 0px 0px; }\n";
        if(ioOrCompLength == true){
            for(var n=1;n<picCount;n++){
                cssCodeKeys += "\t" + Number(n/(picCount-1)*100).toFixed(2) + "% { background-position: " + framePosX[n] + "px " + framePosY[n] +"px; }\n";
            }
        }else{
            cssCodeAni = sprAniName+" "+oriLFull+"s " + "steps(1) "+layerDelay+"s ";
            var startCount = Math.round((startTimeTemp - mainComp.workAreaStart)*compR);
            var endCount = Math.round((waEnd - Math.min(waEnd,layer.outPoint))*compR);
            if(startTimeTemp > mainComp.workAreaStart){
                var perTemp = (startTimeTemp - mainComp.workAreaStart)/mainComp.workAreaDuration;
            }else{
                var perTemp = 0;
            }
            var perTemp = (startTimeTemp - mainComp.workAreaStart)/mainComp.workAreaDuration;
            if(startCount != 0){
                cssCodeKeys += "\t" + Number(100*perTemp).toFixed(2) + "% { background-position: 0px 0px; }\n";
            }
            for(var n=1;n<picCount;n++){
                cssCodeKeys += "\t" + Number(100*(perTemp+n/(oriLFull*mainComp.frameRate))).toFixed(2) + "% { background-position: " + framePosX[n] + "px " + framePosY[n] +"px; }\n";
            }
            if(endCount != 0){
                cssCodeKeys += "\t100% { background-position:  " + framePosX[framePosX.length - 1] + "px " + framePosY[framePosY.length - 1] +"px; }\n";
            }
        }

        cssCodeKeys += "}\n";

    }
    oriComp.resolutionFactor = res;
    tempComp.remove();
    return [imgURLforReturn,cssCodeAni,cssCodeKeys];
}

function BXHelp(){
    var helpPal = new Window("palette",'Help',undefined);
        helpPal.alignChildren = "fill";
    var helpText = helpPal.add("edittext",undefined,BXLocolize(bx_str.helpText),{readonly:1,noecho:0,borderless:1,multiline:1,enterKeySignalsOnChange:0});
        helpText.bounds = {x:0,y:95,width:300,height:300};
    
    var helpBtnGroup = helpPal.add("group");
        helpBtnGroup.orientation = "row";
        helpBtnGroup.alignChildren = "fill";

    var cancelHlepBtn = helpBtnGroup.add("button",undefined,'OK');
        cancelHlepBtn.onClick = function() {
            helpPal.close();
        }
        cancelHlepBtn.alignment = ['center','fill']; 

    var onlineHelpBtn = helpBtnGroup.add("button",undefined,BXLocolize(bx_str.moreHelp));
        onlineHelpBtn.onClick = function(){
            var helpUrl = "https://github.com/bigxixi/ae2css";
            if($.os.toLowerCase().indexOf("mac") == 0){ 
                system.callSystem("open " + helpUrl);
            }else{
                system.callSystem("cmd /c start " + helpUrl);
            }
        }
        onlineHelpBtn.alignment = ['center','fill']; 
    helpPal.show();

}
function BXSettings(){

    var settingPal = new Window("palette",'Settings',undefined);
        settingPal.alignChildren = "fill";
    
    var lanSel = settingPal.add("dropdownlist",undefined,["简体中文","English"]);
        lanSel.title = BXLocolize(bx_str.languageSetting);
    //check saved settings
    switch(theLan){
        case "zh_cn":
            lanSel.selection = 0;
            break;
        case "en_us":
            lanSel.selection = 1;
            break;
        default:
            lanSel.selection = 1;
    }

    lanSel.onChange = function(){
        switch(lanSel.selection.index){
            case 0:
                app.settings.saveSetting("BX_parameters","language","zh_cn");
                break;
            case 1:
                app.settings.saveSetting("BX_parameters","language","en_us");
                break;
            default:
        }
        alert(BXLocolize(bx_str.reloadUI));
    }

    var setOKBtn = settingPal.add("button",undefined,'OK');
        setOKBtn.onClick = function() {
            settingPal.close();
        }
    settingPal.show();
}

//----------scrip functions----------
function addMarks1(){
    app.beginUndoGroup('addmark1');
    var click1 = new MarkerValue(ExportMark1);
    var lys=app.project.activeItem.selectedLayers;
    for(var i=0;i<lys.length;i++){
        var pLayer1 = lys[i];
        pLayer1.property("ADBE Marker").setValueAtTime(0, click1);
    }
    app.endUndoGroup();
}
function addMarks2(){
    app.beginUndoGroup('addmark2');
    var click2 = new MarkerValue(ExportMark2);
    var lys2=app.project.activeItem.selectedLayers;
    for(var i=0;i<lys2.length;i++){
        var pLayer2 = lys2[i];
        pLayer2.property("ADBE Marker").setValueAtTime(0, click2);
    }
    app.endUndoGroup();
}

function exportCSS(){
    if(!app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY")){
        alert(BXLocolize(bx_str.CheckAccessTip));
        app.executeCommand(2359);
        return;
    }
    var comp = app.project.activeItem;
    var layerInfo = {};
    var aniName = '';
    var SprAniName = '';
    var SprClassName = '';
    var SprStyle = '';
    var aniClassName = '';
    var className = '';
    var bgName = '';
    var aniLength = Number(comp.workAreaDuration).toFixed(2);
    var divs=[];
    var MarkedLayers = [];
    var divTemp = '<div class="' + preFixed + 'AEComposition" AELayerName="' + filterName(comp.name) + '">\n';
    var styleHead = '\t*{\n' + 
                    '\t    margin: 0 auto;\n' + 
                    '\t    padding: 0 auto;\n' + 
                    '\t}\n' + 
                    '\thtml{\n' + 
                    '\t    position: relative;\n' + 
                    '\t    width:100%;\n' + 
                    '\t    height:100%;\n' + 
                    '\t}\n' + 
                    '\tbody{\n' + 
                    '\t    width: 100%;\n' + 
                    '\t    height: 100%;\n' +
                    '\t    position: relative;\n' + 
                    '\t    margin: 0 auto;\n' + 
                    '\t    padding: 0;\n' + 
                    '\t}\n';
    var CSSStyle =  '.' + preFixed + 'AEComposition{\n' + 
                    '    background: transparent;\n' + 
                    '    width: ' + comp.width + 'px;\n' + 
                    '    height: ' + comp.height + 'px;\n' + 
                    '    display: block;\n' + 
                    '    overflow: hidden;\n' + 
                    '    position: relative;\n' + 
                    '    transform: translate3D(0,0,0) scale(1,1);\n'+
                    '    transform-origin:50% 0%;\n'+
                    '}\n';

    var theLocation = File.saveDialog();
    if(theLocation != null){
    var ExportFolder = new Folder(theLocation);
        ExportFolder.create();
    for(var i=comp.layers.length;i>0;i--){
        var curLayer = comp.layers[i];
        if(curLayer.property("ADBE Marker").numKeys > 0 && curLayer.property("ADBE Marker").keyValue(1).comment.split("_")[0] == ExportMark0){
            //check if any layers are parenting out to no marking layers
            if(curLayer.parent != null){
                if(curLayer.parent.property("ADBE Marker").numKeys == 0 || (curLayer.parent.property("ADBE Marker").numKeys > 0 && curLayer.parent.property("ADBE Marker").keyValue(1).comment.split("_")[0] != ExportMark0)){
                    alert(BXLocolize(bx_str.layerParentOut1)+curLayer.index+'.'+curLayer.name+BXLocolize(bx_str.layerParentOut2)+curLayer.parent.index+'.'+curLayer.parent.name+BXLocolize(bx_str.layerParentOut3));
                }
            }
            MarkedLayers.push(curLayer);
            //var assetName;
            var bgTemp = '';
            var imgFolder = theLocation.fsName + osSlash + "imgs";
            var theFolder = new Folder(imgFolder);
                theFolder.create();
            layerInfo.width = curLayer.width;
            layerInfo.height = curLayer.height;
            layerInfo.left = Number(curLayer.transform.position.valueAtTime(comp.workAreaStart,false)[0] - curLayer.transform.anchorPoint.valueAtTime(comp.workAreaStart,false)[0]).toFixed(accurate);
            layerInfo.top = Number(curLayer.transform.position.valueAtTime(comp.workAreaStart,false)[1] - curLayer.transform.anchorPoint.valueAtTime(comp.workAreaStart,false)[1]).toFixed(accurate);
            className = preFixed + "Class" + curLayer.index;
            aniClassName = preFixed + "Ani" + curLayer.index;
            aniName = preFixed + "AniKey" + curLayer.index;
            SprClassName = preFixed + "Sprite" + curLayer.index;
            SprAniName = preFixed + "SprAniKey" + curLayer.index;
            bgName = preFixed + 'BG' + curLayer.index;
            AELayerName = filterName(curLayer.name); 
            if(curLayer.source.file != null){
                var assetName = curLayer.source.file.name;
                //genarate assets
                var copyfile = new File(curLayer.source.file);
                    copyfile.copy(imgFolder + osSlash + assetName);
                    copyfile.close();

                layerInfo.url = "imgs/" + assetName;
                bgTemp = 'url("' + layerInfo.url + '")';
            }else if(curLayer.source instanceof CompItem){
                var compTemp = app.project.activeItem;
                switch(curLayer.property("ADBE Marker").keyValue(1).comment){
                    case ExportMark1:
                        var assetName = filterName(curLayer.name) + '.png';
                        var imgPathTemp = imgFolder + osSlash + assetName;
                        savePNG(curLayer.source,imgPathTemp);
                        compTemp.openInViewer();
                        layerInfo.url = "imgs/" + assetName;
                        bgTemp = 'url("' + layerInfo.url + '")';
                        break;
                    case ExportMark2:
                        bgTemp = 'transparent';
                        var sprPara = GenerateSprite(comp,curLayer,imgFolder,SprAniName,skipFrame.text,mxWidth.text,rdb1.value);
                        //compTemp = app.project.activeItem;
                        SprStyle += '.'+SprClassName+' {\n'+
                                    '    background-image: url("'+sprPara[0]+'");\n'+
                                    '    width: '+layerInfo.width+'px;\n'+
                                    '    height: '+layerInfo.height+'px;\n'+
                                    '    animation: '+sprPara[1]+loopCount+ ' ' + aniDirection + ' ' + fillMode+';\n'+
                                    '}';
                        SprStyle += '\n'+sprPara[2]+'\n';
                        break;
                    default:
                        bgTemp = 'transparent';
                }
            }else{

            }            
                CSSStyle += '.' + className + '{\n' + 
                            '    left: ' + layerInfo.left +'px;\n' + 
                            '    top: ' + layerInfo.top +'px;\n' + 
                            '    width: ' + layerInfo.width +'px;\n' + 
                            '    height: ' + layerInfo.height +'px;\n'+
                            '    transform-style: preserve-3d;\n' +
                            // '    z-index: '+i+';\n'+
                            '    transform:'+' translate3D(0,0,'+Number(curLayer.transform.position.valueAtTime(comp.workAreaStart,false)[2]).toFixed(accurate) +
                            'px)'+ getRot(curLayer,comp.workAreaStart)+' scale('+Number(curLayer.transform.scale.valueAtTime(comp.workAreaStart,false)[0]/100).toFixed(accurate)+','+Number(curLayer.transform.scale.valueAtTime(comp.workAreaStart,false)[1]/100).toFixed(accurate)+');\n';
                            //
                CSSStyle += '    opacity: ' + Number(curLayer.transform.opacity.valueAtTime(comp.workAreaStart,false)/100).toFixed(accurate) +';\n';
                            if((curLayer.transform.anchorPoint.valueAtTime(comp.workAreaStart,false)[0] != curLayer.width) || (curLayer.transform.anchorPoint.valueAtTime(comp.workAreaStart,false)[0] != curLayer.height)){

                                var transOX = Number(100*curLayer.transform.anchorPoint.valueAtTime(comp.workAreaStart,false)[0]/curLayer.width).toFixed(accurate);
                                var transOY = Number(100*curLayer.transform.anchorPoint.valueAtTime(comp.workAreaStart,false)[1]/curLayer.height).toFixed(accurate);
                                CSSStyle += '    transform-origin:'+transOX+'% '+transOY+'%;\n';

                            }
                            CSSStyle += '    display: block;\n'; 
                    CSSStyle +='    position: absolute; \n}\n';
                    CSSStyle += '.' + bgName + '{\n';
                    if(curLayer.source.mainSource instanceof SolidSource){
                        var bgR = Math.round(255*curLayer.source.mainSource.color[0]);
                        var bgG = Math.round(255*curLayer.source.mainSource.color[1]);
                        var bgB = Math.round(255*curLayer.source.mainSource.color[2]);
                        bgTemp = "rgb("+bgR+", "+bgG+", "+bgB+")";
                    }
                    CSSStyle += '    background: ' + bgTemp + ';\n';
                    CSSStyle += '}\n';
                    //class for animations
                    CSSStyle += '.' + aniClassName + '{\n' + 
                                '    /* animation: name duration timing-function delay iteration-count direction fill-mode; */\n'+
                                '    animation:' + aniName  + ' ' + Number(aniLength).toFixed(accurate) + 's ' + timingFuncCal() + ' ' + Number(delayT).toFixed(accurate) + 's ' + loopCount + ' ' + aniDirection + ' ' + fillMode+';\n'+
                                '}\n';
                var keysMark = checkKeys(curLayer,curLayer.threeDLayer);
                //set keyframes
                    var p0 = curLayer.transform.position.valueAtTime(comp.workAreaStart,false);
                    CSSStyle += '@keyframes ' + aniName + '{\n';
                    var checkSameFrams = [];
                        checkSameFrams.push('');
                    var frameIndex = 1;
                    for(var j=0;j<comp.workAreaDuration+comp.frameDuration;j+=comp.frameDuration){
                        var percentage = Number((j)/comp.workAreaDuration*100);
                        if(percentage <= 100){
                            var percentageTemp ='\t' + percentage.toFixed(2) + '% {';
                            var cssKeyTemp = '';
                            if((keysMark.p == true) || (keysMark.s == true) || (keysMark.r == true)){
                                cssKeyTemp += 'transform:';
                                cssKeyTemp += ' translate3D('+ Number(curLayer.transform.position.valueAtTime((j+comp.workAreaStart),false)[0] - p0[0]).toFixed(accurate) + 'px,'+Number(curLayer.transform.position.valueAtTime((j+comp.workAreaStart),false)[1] - p0[1]).toFixed(accurate) + 'px,'+Number(curLayer.transform.position.valueAtTime((j+comp.workAreaStart),false)[2] - p0[2]).toFixed(accurate) + 'px)';
                                cssKeyTemp += getRot(curLayer,j+comp.workAreaStart);
                                cssKeyTemp += ' scale(' + (curLayer.transform.scale.valueAtTime((j+comp.workAreaStart),false)[0]/100) + ',' + (curLayer.transform.scale.valueAtTime((j+comp.workAreaStart),false)[1]/100) + ')';
                                cssKeyTemp += ';';
                            }

                            if(keysMark.o == true || curLayer.inPoint > comp.workAreaStart || curLayer.outPoint < comp.workAreaStart+comp.workAreaDuration){
                                if((j+comp.workAreaStart) < curLayer.inPoint || (j+comp.workAreaStart) > curLayer.outPoint ){
                                    if(curLayer.property("ADBE Marker").keyValue(1).comment == ExportMark2 && rdb1.value == true){
                                        cssKeyTemp += 'opacity: ' + Number(curLayer.transform.opacity.valueAtTime(j+comp.workAreaStart,false)/100).toFixed(accurate) +';';
                                    }else{
                                        cssKeyTemp += 'opacity: 0;';
                                    }
                                }else{
                                    cssKeyTemp += 'opacity: ' + Number(curLayer.transform.opacity.valueAtTime(j+comp.workAreaStart,false)/100).toFixed(accurate) +';';
                                }
                            }
                            if(checkSameFrams[frameIndex-1] != cssKeyTemp || percentage.toFixed(0) == 100){
                                if(cssKeyTemp != ''){
                                    CSSStyle += percentageTemp;
                                    CSSStyle += cssKeyTemp;
                                    CSSStyle += '}\n';
                                }else{
                                    CSSStyle += '/* \t\tThis layer has no animations to export */\n';
                                }
                            }
                            checkSameFrams[frameIndex] = cssKeyTemp;
                        }
                        frameIndex++;
                    }
                    CSSStyle +='\t}\n';
                CSSStyle += SprStyle;
                SprStyle = '';
               
        }
    }
    //generate divs
    for(var j=0;j<MarkedLayers.length;j++){
        var tempGroup = [MarkedLayers[j]];
            tempGroup = tempGroup.concat(getLayerChain(MarkedLayers[j],MarkedLayers));
        if(tempGroup.length==1){
            if(tempGroup[0].enabled==false){
                divs.push(genDIV(tempGroup[0],false,tempGroup[0].property("ADBE Marker").keyValue(1).comment).toXMLString());
            }else{
                divs.push(genDIV(tempGroup[0],true,tempGroup[0].property("ADBE Marker").keyValue(1).comment).toXMLString());
            }
        }else{
            var divTempGroups = []
            for(var m=0;m<tempGroup.length;m++){
                if(m!=0 || tempGroup[m].enabled==false){
                    divTempGroups[m]=genDIV(tempGroup[m],false,ExportMark1);
                }else{
                    if(m!=0){
                        divTempGroups[m]=genDIV(tempGroup[m],true,ExportMark1);
                    }else{
                        divTempGroups[m]=genDIV(tempGroup[m],true,tempGroup[0].property("ADBE Marker").keyValue(1).comment);
                    }
                }
            }
            for(var n=0;n<divTempGroups.length-1;n++){        
                divTempGroups[n+1].appendChild(divTempGroups[n]);
            }
            divs.push(divTempGroups[divTempGroups.length-1].toXMLString());
        }
    }
    divTemp += printDivs(divs);
    divTemp += '</div>\n'
    var htmlCode = '<!-- Generated via BX-AE2CSS by BigXiXi -->\n' + 
                    '<!DOCTYPE html>\n' + 
                    '<meta charset="UTF-8">\n' + 
                    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n' + 
                    '<meta http-equiv="X-UA-Compatible" content="chrome=1,IE=edge" />\n' + 
                    '<meta name="viewport" content="target-densitydpi=device-dpi,width=' + comp.width + ',user-scalable=no" /> \n';

    if(splitCSSfile == true){
        var cssFile = preFixed + filterName(comp.name) + '_style.css';
        htmlCode += '<link rel="stylesheet" type="text/css" href="'+cssFile+'">\n' + 
                    '<title>' + comp.name + '</title>\n<head>\n';
        CSSStyle = '/* Generated via BX-AE2CSS by BigXiXi */\n' + CSSStyle;

        var saveCSS = new File(theLocation.fsName + osSlash + cssFile);
            saveCSS.open("w");
            saveCSS.encoding = "UTF-8";
            saveCSS.write(CSSStyle);
            saveCSS.close();

            htmlCode += '    <style>\n' + 
                            styleHead +
                        '    </style>\n';     
    }else{
        htmlCode += '<title>' + comp.name + '</title>\n<head>\n';
        htmlCode += '    <style>\n' + 
                        styleHead +
                        CSSStyle +
                    '    </style>\n'; 
    }

    htmlCode += '</head>\n' + 
                '<body>\n' + 
                divTemp +
                '</body>\n' + 
                '</html>';
                
    var htmlName = preFixed + filterName(comp.name) + '.html';
    var runHtml = new File(theLocation.fsName + osSlash + htmlName);
        runHtml.open("w");
        runHtml.encoding = "UTF-8";
        runHtml.write(htmlCode);
        runHtml.close();
    var openFolder = new Folder(theLocation.fsName);
        openFolder.execute();
    }

    function checkKeys(layer, is3D){
        var tempTransform = {};
            tempTransform.l = 0;
        if(is3D == true){
            tempTransform.d = "3d";
            if((layer.transform.anchorPoint.numKeys != 0) || (layer.transform.anchorPoint.expressionEnabled == true)){
                tempTransform.a = true;
                tempTransform.l++;
            }
            if((layer.transform.position.numKeys != 0) || (layer.transform.position.expressionEnabled == true)){
                tempTransform.p = true;
                tempTransform.l++;
            }
            if((layer.transform.xPosition.numKeys != 0) || (layer.transform.xPosition.expressionEnabled == true) || (layer.transform.yPosition.numKeys != 0) || (layer.transform.yPosition.expressionEnabled == true) || (layer.transform.zPosition.numKeys != 0) || (layer.transform.zPosition.expressionEnabled == true)){
                tempTransform.p = true;
                tempTransform.l++;
            }
            if((layer.transform.scale.numKeys != 0) || (layer.transform.scale.expressionEnabled == true)){
                tempTransform.s = true;
                tempTransform.l++;
            }
            if((layer.transform.xRotation.numKeys != 0) || (layer.transform.xRotation.expressionEnabled == true) || (layer.transform.yRotation.numKeys != 0) || (layer.transform.yRotation.expressionEnabled == true) || (layer.transform.zRotation.numKeys != 0) || (layer.transform.zRotation.expressionEnabled == true)){
                tempTransform.r = true;
                tempTransform.l++;
            }
            if((layer.transform.opacity.numKeys != 0) || (layer.transform.opacity.expressionEnabled == true)){
                tempTransform.o = true;
                tempTransform.l++;
            }
        }else{
            tempTransform.d = "2d";
            if((layer.transform.anchorPoint.numKeys != 0) || (layer.transform.anchorPoint.expressionEnabled == true)){
                tempTransform.a = true;
                tempTransform.l++;
            }
            if((layer.transform.position.numKeys != 0) || (layer.transform.position.expressionEnabled == true)){
                tempTransform.p = true;
                tempTransform.l++;
            }
            if((layer.transform.xPosition.numKeys != 0) || (layer.transform.xPosition.expressionEnabled == true) || (layer.transform.yPosition.numKeys != 0) || (layer.transform.yPosition.expressionEnabled == true)){
                tempTransform.p = true;
                tempTransform.l++;
            }
            if((layer.transform.scale.numKeys != 0) || (layer.transform.scale.expressionEnabled == true)){
                tempTransform.s = true;
                tempTransform.l++;
            }
            if((layer.transform.rotation.numKeys != 0) || (layer.transform.rotation.expressionEnabled == true)){
                tempTransform.r = true;
                tempTransform.l++;
            }
            if((layer.transform.opacity.numKeys != 0) || (layer.transform.opacity.expressionEnabled == true)){
                tempTransform.o = true;
                tempTransform.l++;
            }
        }
        return tempTransform;
    }
 }
