import {v4 as uuidv4} from 'uuid';

export const addField = (field) => {
    return {
        type: 'ADD_FIELD',
        payload: {
            id: uuidv4(),
            field: field,
        }
    }
}

export const removeField = (id) => {
    return {
        type: 'REMOVE_FIELD',
        payload: id
    }
}