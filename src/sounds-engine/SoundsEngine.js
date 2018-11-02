import Tone from 'tone';

const samples = {
  'A0': '/samples/A.mp3',
  'B0': '/samples/B.mp3',
  'C1': '/samples/C.mp3',
  'D1': '/samples/D.mp3',
  'E1': '/samples/E.mp3',
  'F1': '/samples/F.mp3',
  'G1': '/samples/G.mp3'
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