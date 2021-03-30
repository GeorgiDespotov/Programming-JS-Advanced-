function createAssemblyLine() {
    const library = {
        hasClima(myCar) {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = function adjustTemp() {
                if (this.temp < this.tempSettings) {
                    this.temp += 1
                } else if (this.temp > this.tempSettings) {
                    this.temp -= 1;
                }
            }
        },
        hasAudio(myCar) {
            myCar.currentTrack = { name: null, artist: null };
            myCar.nowPlaying = function nowPlaying() {
                if (this.currentTrack.name !== null && this.currentTrack.artist !== null) {
                    console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.artist}`);
                }
            }
        },
        hasParktronic(myCar) {
            myCar.checkDistance = function checkDistance(distance) { 
                if  (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        } 
    }
    return library;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: null,
    artist: 'Rick Astley'
};
myCar.nowPlaying();


console.log(myCar);

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);


