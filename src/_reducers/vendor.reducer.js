const initialState = { 
    anchor: 'left',
    vendor: [],
    open: false,
    id: '',  
    horse_name: '',
    horse_number: '',
    color: ''
 };


export function vendor(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_VENDOR':
            return {
                ...state,
                vendor: action.vendor
            };
        case 'VENDOR_DETAIL':
            return {
                ...state,
                id: action.id,  
                horse_name: action.horse_name,
                horse_number: action.horse_number,
                color: action.color
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };    
        default:
            return state
    }
  }