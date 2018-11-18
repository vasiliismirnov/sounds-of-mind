import uuidv4 from 'uuid/v4';

// Track Bars map.
/**
 * Track Bars map.
 * Bar is object like:
 * {
 *     barId: BAR_ID,                   // unique identifier of the bar
 *     barSize: 4,                      // size of thebar (how much beats in the bar)
 *     beats: [                         // array with beats
 *         { 
 *             beatId: BEAT_ID,     // unique identifier of the beat
 *             values: ['A0', 'C1']     // list of the note values in the beat
 *         }
 *     ]
 * }
 */
export const track = {
  bars: [
    {
      barId: uuidv4(),
      beats: [
        { beatId: uuidv4(), values: ['A0', 'C1']},
        { beatId: uuidv4(), values: ['C1', 'E1']},
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: ['E1']}
      ]
    },
    {
      barId: uuidv4(),
      beats: [
        { beatId: uuidv4(), values: ['A0', 'C1']},
        { beatId: uuidv4(), values: ['C1', 'E1']},
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: ['E1']}
      ]
    },
    {
      barId: uuidv4(),
      beats: [
        { beatId: uuidv4(), values: ['A0', 'C1']},
        { beatId: uuidv4(), values: ['C1', 'E1']},
        { beatId: uuidv4(), values: []},
        { beatId: uuidv4(), values: ['E1']}
      ]
    },
    {
      barId: uuidv4(),
      beats: [
        { beatId: uuidv4(), values: ['A0', 'C1']},
        { beatId: uuidv4(), values: ['E1']},
        { beatId: uuidv4(), values: ['F1']},
        { beatId: uuidv4(), values: ['E1']}
      ]
    }
  ],
  barSize: 4,
  tempo: 120,
  playback: {
    sequence: null,
    isPlaying: false
  }
};