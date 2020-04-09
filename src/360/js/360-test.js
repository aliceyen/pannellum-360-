const config = {
    autoLoad: false,  //自動載入為true
    preview: "https://staging-apac-loreal.demandware.net/on/demandware.static/-/Sites-lancome-tw-Library/zh_TW/vb364854be89676ccd89fd8e1474eedd00487a63e/event-o2o-page/360-test/images/trapboveneinde_dvoxir4000.jpg?version=1,586,401,646,000",
    // preview: ↑↑指定在加載全景圖之前要顯示的預覽圖像的URL。
    
    compass: false,
    default: {
        firstScene: "office",
        sceneFadeDuration: 1000
    },
    
    // 場景設定
    scenes: {
        
        // 場景1:辦公室
        office: {
            hfov: 180,
            pitch: 0,
            yaw: 0,
            type: "equirectangular", //圆柱投影，针对单张全景图片的处理方式
            panorama: "https://staging-apac-loreal.demandware.net/on/demandware.static/-/Sites-lancome-tw-Library/zh_TW/vb364854be89676ccd89fd8e1474eedd00487a63e/event-o2o-page/360-test/images/trapboveneinde_dvoxir4000.jpg?version=1,586,401,646,000",
            hotSpots: [
                {
                    pitch: 4,
                    yaw: 21.8,
                    type: "scene",
                    text: "前往meetingroom",  //滑鼠滑入出現的文字，可隱藏
                    sceneId: "meetingroom"
                },

                // 測試試加
                {
                    pitch: -20,   //垂直，越大越往上偏
                    yaw: -21.8,   //水平，越大越往右偏

                    //热点类型，scene 场景切换热点； info 信息展示；URL 以热点为链接，跳转到其他页面的url
                    type: "info",
                    text: "外部連結", //滑鼠滑入出現的文字，可隱藏
                    URL: "https://www.dc.com.tw/",  //另開視窗
                    cssClass:"textBox"  //★★★★ 動態生成文字class ★★★★
                }
                ,
                {
                    pitch: 40, //垂直，越大越往上偏
                    yaw: 50,   //水平，越大越往右偏
                    type: "info",
                    text: "滑鼠滑入show圖片",  //滑鼠滑入出現的文字，可隱藏
                    image:"https://staging-apac-loreal.demandware.net/on/demandware.static/-/Sites-lancome-tw-Library/zh_TW/vb364854be89676ccd89fd8e1474eedd00487a63e/event-o2o-page/360-test/images/test01.jpg?version=1,586,401,646,000"
                }
                ,
                {
                    pitch: -40, //垂直，越大越往上偏
                    yaw: -50,   //水平，越大越往右偏
                    type: "info",
                    text: "我是LightBox",  //滑鼠滑入出現的文字，可隱藏
                    cssClass:"myLightBox"  //★★★★ 按鈕動態生成class ★★★★
                }

            ]
        },
        
        // 場景2:會議室
        meetingroom: {
            hfov: 180,
            pitch: 0,
            yaw: 90,
            type: "equirectangular", //圆柱投影，针对单张全景图片的处理方式
            panorama: "https://staging-apac-loreal.demandware.net/on/demandware.static/-/Sites-lancome-tw-Library/zh_TW/vb364854be89676ccd89fd8e1474eedd00487a63e/event-o2o-page/360-test/images/vergaderzaal_sq7baz4000.jpg?version=1,586,401,646,000",
            hotSpots: [
                {
                    pitch: 8, //垂直，越大越往上偏
                    yaw: -58,   //水平，越大越往右偏
                    type: "scene",
                    sceneId: "office"
                }
            ]
        },
    }
};
pannellum.viewer('panorama', config);




//★★★★ 上方的按鈕動態生成class後，需使用下方 "on click" 的方式，一般click方式無效 ★★★★
$(document).on('click','.myLightBox',function (){
    $("#openLightBox01").fadeIn(300);
});

$(document).ready(function(){
    
    // 提示幾秒後消失
    setTimeout(function () { 
        $("#tips").fadeOut(1000);
    }, 3000);

    // 打開lightbox後，關閉lightbox
    $("#closeLightBox01").click(function(event) {
        $("#openLightBox01").fadeOut(300);
    });  
});