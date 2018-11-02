import Tone from 'tone';

const standardSamples = {
  'A0': process.env.PUBLIC_URL + '/samples/standard_hang/A.mp3',
  'B0': process.env.PUBLIC_URL + '/samples/standard_hang/B.mp3',
  'C1': process.env.PUBLIC_URL + '/samples/standard_hang/C.mp3',
  'D1': process.env.PUBLIC_URL + '/samples/standard_hang/D.mp3',
  'E1': process.env.PUBLIC_URL + '/samples/standard_hang/E.mp3',
  'F1': process.env.PUBLIC_URL + '/samples/standard_hang/F.mp3',
  'G1': process.env.PUBLIC_URL + '/samples/standard_hang/G.mp3',
  'A10': process.env.PUBLIC_URL + '/samples/standard_hang/pause.mp3', // Temp workaround to skip note
};

const standardHangSampler = new Tone.Sampler(standardSamples, {
  'release' : 1
}).toMaster();

const etnicSamples = {
  'A0': process.env.PUBLIC_URL + '/samples/etnic_hang/01_A3.wav',
  'D1': process.env.PUBLIC_URL + '/samples/etnic_hang/02_D4.wav',
  'D#1': process.env.PUBLIC_URL + '/samples/etnic_hang/03_Dsharp4.wav',
  'F#1': process.env.PUBLIC_URL + '/samples/etnic_hang/04_Fsharp4.wav',
  'G1': process.env.PUBLIC_URL + '/samples/etnic_hang/05_G4.wav',
  'A1': process.env.PUBLIC_URL + '/samples/etnic_hang/06_A4.wav',
  'A#1': process.env.PUBLIC_URL + '/samples/etnic_hang/07_Asharp4.wav',
  'C#2': process.env.PUBLIC_URL + '/samples/etnic_hang/08_Csharp5.wav',
  'D2': process.env.PUBLIC_URL + '/samples/etnic_hang/09_D5.wav',
  'A10': process.env.PUBLIC_URL + '/samples/standard_hang/pause.mp3', // Temp workaround to skip note
};

const etnicHangSampler = new Tone.Sampler(etnicSamples, {
  'release' : 1
}).toMaster();

const samplersMap = {
  etnic: etnicHangSampler,
  standard: standardHangSampler
};

export default samplersMap;

export function playSequence(playbackNotes) {
  var sequences = [];

  for (const hang in playbackNotes) {
    var notes = playbackNotes[hang].map(note => note.value);

    var sequence = new Tone.Sequence((time, note) => {
      samplersMap[hang].triggerAttack(note);
    }, notes, "4n").start();

    sequence.humanize = true;
    sequence.loop = true;

    sequences.push(sequence);
  }

  Tone.Transport.bpm.value = 120;
  Tone.Transport.start();
  Tone.Transport.loop = false;

  return sequences;
};

export function stopSequence(sequences) {
  if (sequences) {
    sequences.forEach((sequence) => {
      sequence.stop();
    });
  }
  Tone.Transport.stop();
};