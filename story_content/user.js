function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6l2bC9Tkd2Y":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="sunny.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

