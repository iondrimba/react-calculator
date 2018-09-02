import Howler from 'howler';

class Sound {
  setup() {
    this.sound = new Howler.Howl({
      src: './sounds/input.mp3'
    });
  }

  play() {
    this.sound.play();
  }

  mute(mute) {
    this.sound.mute(mute);
  }
}

export default Sound;
