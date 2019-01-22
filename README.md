# Sound of Mind

## Description

Simple Sequencer for the [Steel Tongue Drum](https://en.wikipedia.org/wiki/Steel_tongue_drum).

Created as Ract/Redux and Web Audio API learning project. 

## Getting started

You can play with drum sounds [here](https://vasiliismirnov.github.io/sounds-of-mind/).

### How to use
* There is notes grid in **Sequence** section. Rows are tones, columns are beats within bars. 
 
  * To enable/disable note - click on related cell of the grid.

  * Click **Add bar** button to add new empty bar to the end of sequence.

  * Click **-** button on right corner of each bar to remove it.

  * Click **Reset** button to delete all changes and return back to initial state.

* Click **Play/Stop** buttons from **Playback** section to listen your track.

* Drag input range control from the **Controls** section to change tempo of the track.

* Enjoy!

## Local setup

* Clone repository
* From the project folder run `npm install`, then run `npm start`
* Started application will appear in browser, if not, go to `localhost:3000`

## Built With

* [Create React App](https://github.com/facebook/create-react-app) - This project was bootstrapped with Create React App
* [Tone.js](https://tonejs.github.io/) - WebAudio manipulations

