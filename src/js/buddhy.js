okyoList = ["enmei", "daihisyu", "hakuin2", "singyo2"];

chrome.runtime.onMessage.addListener(() => {
  okyo.pause();
  okyo.currentTime = 0;
  return;
});

$(document).ready(function(){
  try {
    var okyo_name = okyoList[Math.floor(Math.random() * okyoList.length)];
    okyo = new Audio();
    okyo.src = `http://shofukuji.net/music/${okyo_name}.mp3`;
    okyo.play();
  }
  catch (e) {
    console.log(e);
  }
})
