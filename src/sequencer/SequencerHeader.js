import React from 'react';

const SequencerHeader = ({barSize, bars, removeBarItem}) => {
  const onRemoveBarClick = (barId) => {
    removeBarItem(barId);
  }

  let barHeaderItems = [
    <th key="0" rowSpan="2"></th>
  ];
  let beatHeaderItems = [];

  if (bars) {
    barHeaderItems = barHeaderItems.concat(bars.map((bar, index) => (
        <th key={bar.barId} colSpan={barSize} className="bar-header-item">
          {index + 1}
          <i className="remove-icon" onClick={() => onRemoveBarClick(bar.barId)}></i>
        </th>
    
        )));

    const beats = bars.reduce((aggregatedBeats, bar) => 
      aggregatedBeats.concat(bar.beats), []);

    beatHeaderItems = beats.map((beat, index) => 
      <th key={beat.beatId} className="beat-header">{index + 1}</th>);
  }

  barHeaderItems.push(<th key={barHeaderItems.length} rowSpan="2"></th>);

  return (
    <thead>
      <tr>
        {barHeaderItems}
      </tr>
      <tr>
        {beatHeaderItems}
      </tr>
    </thead>
  );
};

export default SequencerHeader;