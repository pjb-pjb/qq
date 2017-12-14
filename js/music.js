$(function(){
	function playMusic() {
        var music;
        var random = parseInt(Math.random()*5);
        switch (random) {
            case 0:
                music = "0";
                break
            case 1:
                music = "1";
                break
            case 2:
                music = "2";
                break
            case 3:
                music = "3";
                break
            case 4:
                music = "4";
        }
        console.log(music);
        console.log(random);
//      console.log(Math.random() * 5);
//	$("#a").attr("src", "mp3/" + 4 + ".mp3").attr("autoplay", "autoplay");
   }
	playMusic();
        var music;
        $(".song-list").delegate("a", "click", function () {
            music = $(this).text().substring(4, $(this).text().length);
            console.log($(this).text().substring(4, $(this).text().length));
            $("#a").attr("src", "mp3/" + music + ".mp3").attr("autoplay", "autoplay");
//          console.log(t);
        });
});
