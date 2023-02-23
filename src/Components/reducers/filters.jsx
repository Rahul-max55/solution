import Api from "../api";

let newArr = []
let unique;
Api.map((v, i) => {
    newArr.push(v.name);
    console.log(newArr);
    unique = [...new Set(newArr)];
})

let initialState = {
    intialApiVal: Api,
    uniqueName: unique,
    clickedVal: [],
    filteredProd:[...unique]
};


const filters = (state = initialState, action) => {
    console.log(state.clickedVal);
    const { type, id } = action;
    switch (type) {
        case "FILTERRADIO":
            let data = state.uniqueName.filter((v, i) => {
                return i === id;
            });
            let x = data.toString();
            if (state.clickedVal.includes(x)) {
                state.clickedVal = state.clickedVal.filter((v) => {
                    return v !== x;
                })
            } else {
                state.clickedVal.push(x);
            }


            
            return { ...state, filteredProd: state.clickedVal };

        default:
            return state;
    }
}

export default filters;