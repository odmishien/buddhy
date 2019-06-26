okyoList = ["enmei", "daihisyu", "hakuin2", "singyo2"];
adultSiteDomainList = ["www.tokyo-porn-tube.com", "www.xvideos.com", "video.fc2.com/a/", "jp.xhamster.com", "jp.tube8.com", "jp.pornhub.com", "avgle.com"];

chrome.runtime.onMessage.addListener(() => {
  okyo.pause();
  okyo.currentTime = 0;
  return;
});

$(document).ready(function(){
  let domain = $(location).attr('hostname');
  if (pageIsAdult(domain)) {
    try {
      var okyo_name = okyoList[Math.floor(Math.random() * okyoList.length)];
      okyo = new Audio();
      okyo.src = `http://shofukuji.net/music/${okyo_name}.mp3`;
      okyo.play();
    }
    catch (e) {
      console.log(e);
    }
  }
});

function pageIsAdult(domain) {
  if (adultSiteDomainList.indexOf(domain) == -1) {
    return false;
  } else {
    return true;
  }
}
