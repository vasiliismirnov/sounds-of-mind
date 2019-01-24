const instrument = (state = 'hang', action) => {
    switch (action.type) {
        case 'CHANGE_INSTRUMENT':
          const instrumentValue = action.payload;
          return instrumentValue;
        default:
          return state;
    }
}

export default instrument;