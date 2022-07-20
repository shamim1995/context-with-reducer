


export const initialMsg = 'Bangladesh'

// msg reducer

export const msgReducer = (state, {type, payload}) => {

    switch (type) {
        case 'FIELD_UPDATE':
            return payload
            
    
        default:
            return state
    }
    
}


