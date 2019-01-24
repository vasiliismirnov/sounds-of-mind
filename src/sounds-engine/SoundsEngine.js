import Tone from 'tone';

const TANK_SAMPLES = {
  'C3': process.env.PUBLIC_URL + '/samples/tank/C.mp3',
  'D3': process.env.PUBLIC_URL + '/samples/tank/D.mp3',
  'E3': process.env.PUBLIC_URL + '/samples/tank/E.mp3',
  'G3': process.env.PUBLIC_URL + '/samples/tank/G.mp3',
  'A3': process.env.PUBLIC_URL + '/samples/tank/A.mp3',
};

const HANG_SAMPLES = {
  'C3': process.env.PUBLIC_URL + '/samples/hang/C.mp3',
  'D3': process.env.PUBLIC_URL + '/samples/hang/D.mp3',
  'E3': process.env.PUBLIC_URL + '/samples/hang/E.mp3',
  'G3': process.env.PUBLIC_URL + '/samples/hang/G.mp3',
  'A3': process.env.PUBLIC_URL + '/samples/hang/A.mp3',
};

const TANK_SAMPLER = new Tone.Sampler(TANK_SAMPLES, { 'release': 1 }).toMaster();
const HANG_SAMPLER = new Tone.Sampler(HANG_SAMPLES, { 'release': 1 }).toMaster();
const NOTE_SIZE = 4;
const NOTE_MEASURE = `${NOTE_SIZE}n`;
const START_DELAY = "+0.1";  // +0.1 to try to avoid Tone.js notes missing (https://github.com/Tonejs/Tone.js/issues/425).

const selectSampler = (instrument) => {
  switch (instrument) {
    case 'hang':
      return HANG_SAMPLER;
    case 'tank':
      return TANK_SAMPLER;
    default:
      return HANG_SAMPLER;
  }
};

export function playSequence(notes, tempo, instrument) {
  const sampler = selectSampler(instrument);
  const events = notes.map((note, index) => [index * Tone.Time(NOTE_MEASURE), note]);

  const partToPlay = new Tone.Part(function (time, chord) {
    if (chord.length > 0) {
      sampler.triggerAttack(chord, time);
    }
  }, events).start(START_DELAY);

  partToPlay.loop = true;
  partToPlay.loopEnd = `${notes.length / NOTE_SIZE}m`;

  Tone.Transport.bpm.value = tempo;
  Tone.Transport.start(START_DELAY);

  return partToPlay;
};

export function stopSequence(partToPlay) {
  partToPlay.stop();

  Tone.Transport.stop();
};