import uuidv4 from 'uuid/v4';

/**
 * Track Bars map.
 * Bar is object like:
 * {
 *     barId: BAR_ID,                   // unique identifier of the bar
 *     barSize: 4,                      // size of thebar (how much beats in the bar)
 *     beats: [                         // array with beats
 *         { 
 *             beatId: BEAT_ID,     // unique identifier of the beat
 *             values: ['A3', 'C3']     // list of the note values in the beat
 *         }
 *     ]
 * }
 */
export const track = {
  bars: [
    {
      barId: uuidv4(),
      beats: [
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []}
      ]
    },
    {
      barId: uuidv4(),
      beats: [
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []}
      ]
    },
    {
      barId: uuidv4(),
      beats: [
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []}
      ]
    },
    {
      barId: uuidv4(),
      beats: [
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: []}
      ]
    },
  ],
  barSize: 4,
  tempo: 120,
  instrument: 'hang',
  playback: {
    sequence: null,
    isPlaying: false
  },
};