import Howler from 'howler';
import inputSound from '../../sounds/input';

class Sound {
    constructor() {
        console.log('Sound');
    }
    setup() {
        this.sound = new Howler.Howl({
            src: './sounds/input.mp3'
        });
    }
    play() {
        this.sound.play();
    }
    mute(mute) {
        console.log('mute', mute);
        this.sound.mute(mute);
    }
}

export default Sound;
