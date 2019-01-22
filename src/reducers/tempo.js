const tempo = (state = 120, action) => {
    switch (action.type) {
        case 'CHANGE_TEMPO':
          const tempoValue = action.payload;
          return tempoValue;
        default:
          return state;
    }
}

export default tempo;