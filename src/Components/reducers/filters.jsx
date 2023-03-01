import Api from "../api";

const getUniqueData = (data, arrayKey) => {
    let x = data.map((v) => {
        return v[arrayKey];
    })
    let unique = [...new Set(x)];
    return unique;
}


const uniqueN = getUniqueData(Api, "name");
const uniqueP = getUniqueData(Api, "price");



let initialState = {
    initialApiVal: Api,
    filteredProd: [...Api],
    uniqueN: uniqueN,
    uniqueP: uniqueP,
};

let arr = [];
const filterArray = (val, filterProducts) => {
    if (arr.length === 0) {
        arr.push(val);
    } else {
        if (arr.includes(val)) {
            arr = arr.filter((v) => v !== val);
        } else {
            arr.push(val)
        }
    }
    filterProducts(arr);
}


const filters = (state = initialState, action) => {
    const { type, val } = action;
    let data = "";
    let objKey = "";
    typeof (val) === 'number' ? objKey = 'price' : objKey = 'name';
    const filterProducts = (arr) => {
        data = state.initialApiVal.filter((v) => {
            return arr.some((arrData) => arrData === v[objKey]);
        })
    }


    switch (type) {
        case "FILTERNAME":
            filterArray(val, filterProducts);
            return { ...state, filteredProd: data }

        default:
            return state;
    }
}

export default filters;