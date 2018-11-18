import React from 'react';

const SequencerInstrumentRoll = ({ barSize, bars, switchNoteItem, addBarItem }) => {
  const noteItems = [ 
    {value: 'A0', title: 'A'}, 
    {value: 'B0', title: 'B'}, 
    {value: 'C1', title: 'C'}, 
    {value: 'D1', title: 'D'}, 
    {value: 'E1', title: 'E'}, 
    {value: 'F1', title: 'F'}, 
    {value: 'G1', title: 'G'} 
  ];

  const beats = bars.reduce((aggregatedBeats, bar) => 
    aggregatedBeats.concat(bar.beats), []);

  const onNoteItemClick = (beatId, noteValue) => {
    switchNoteItem(beatId, noteValue);
  }

  const onAddBeatClick = () => {
    addBarItem(barSize);
  }

  const getColumns = (noteValue) => beats.map((beat) => {
    const isNoteActive = beat.values.includes(noteValue);
    const beatClassName = isNoteActive ? 'active-note': 'inactive-note';
    return (
      <td key={beat.beatId} onClick={() => onNoteItemClick(beat.beatId, noteValue)} className={beatClassName}>
        {isNoteActive && '•'}
      </td>
    );
  });

  const rows = noteItems.map((item, index) => (
    <tr key={item.value}>
      <td>{item.title}</td>
      {getColumns(item.value)}
      {index === 0 && 
      <td className="add-bar-item" rowSpan={noteItems.length}>
        <i className="add-icon" onClick={() => onAddBeatClick()}></i>
      </td>}
    </tr>
  ));

  return (
    <tbody>
      {rows}
    </tbody>
  );
};

export default SequencerInstrumentRoll;