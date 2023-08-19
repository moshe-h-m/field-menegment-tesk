const initialInput = {
    FieldList: []
}

const allReducers = (state = initialInput, action) => {
    switch (action.type) {
        case 'ADD_FIELD':

            const {id, field} = action.payload

            return {
                ...state,
                FieldList: [
                    ...state.FieldList, {
                        id: id,
                        field: field
                    }]
            }

        case 'REMOVE_FIELD':
            const newList = state.FieldList.filter((field) => field.id !== action.payload)
            return {
                ...state,
                FieldList: newList
            }

        default:
            return state
    }
}



export default allReducers;