export const useFetchReducer =(state,action)=>{
    switch (action.type) {
        case 'MAKE_REQUEST':
            return {
                ...state,
                loading:true,
            }

        case 'GET_DATA':
            return {
                ...state,
                data:action.payload,
                loading:false,
            }
    
        default:
            return state;
    }
}