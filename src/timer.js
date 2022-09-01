export class Timer {
    constructor() {
        this._id;
        this._elapsed = 0;
    }
    start(timeInSEC, intervalInSEC, callback) {
        this._elapsed = timeInSEC;
        callback(this._elapsed);

        this._id = setInterval(() => {
            this._elapsed--;
            if (this._elapsed === -1) {
                this.stop();
                return;
            }

            callback(this._elapsed);
        }, intervalInSEC * 1000);
    }
    stop() {
        clearInterval(this._id);
        
        const sound = new Howl({
            src: ['../media/timer.wav']
        });
          
        sound.play();
    }
}