import Tone from 'tone';

const samples = {
  'A0': process.env.PUBLIC_URL + '/samples/A.mp3',
  'B0': process.env.PUBLIC_URL + '/samples/B.mp3',
  'C1': process.env.PUBLIC_URL + '/samples/C.mp3',
  'D1': process.env.PUBLIC_URL + '/samples/D.mp3',
  'E1': process.env.PUBLIC_URL + '/samples/E.mp3',
  'F1': process.env.PUBLIC_URL + '/samples/F.mp3',
  'G1': process.env.PUBLIC_URL + '/samples/G.mp3'
};

const hangSampler = new Tone.Sampler(samples, {
  'release' : 1
}).toMaster();

export default hangSampler;

export function playSequence(notes) {
  var sequence = new Tone.Sequence((time, note) => {
    hangSampler.triggerAttack(note);
  }, notes, "4n").start();
  sequence.humanize = true;
  sequence.loop = true;

  Tone.Transport.bpm.value = 120;
  Tone.Transport.start();
  Tone.Transport.loop = false;

  return sequence;
};

export function stopSequence(sequence) {
  if (sequence) {
    sequence.stop();
  }
  Tone.Transport.stop();
};