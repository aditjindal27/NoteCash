const updateVal = (state = [], action) => {
    switch(action.type) {
        case "FETCH":
            return action.payload;
        case "VAL":
            return action.payload;
        case "RESET":
            return action.payload;
        default:
            return state;
    }
}

export default updateVal;