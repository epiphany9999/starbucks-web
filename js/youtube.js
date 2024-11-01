//youtube API 불러오는 부분
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//플레이어 변수 설정
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {

    videoId: 'pWnfjGgVMBg', // 최초 재생할 유튜브 영상 id
    playerVars: {
        autoplay:true, // 자동재생 유무
        loop:true, // 반복재생 유무
        playlist:'pWnfjGgVMBg' // 반복재생할 유튜브 영상 id 목록
    },
    events: {
        onReady:function (event) {
            event.target.mute() // 음소거
        }
    }

  });
}

