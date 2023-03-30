let initialState = {
    pdfName:"",
    current_page:1,
    total_pages:0,
    annotations:[]
}

export default function reducer(currentState= initialState, action){
    
    switch (action.type){
        case "CHANGE_PAGE_NUM":
            return{
                ...currentState,
                current_page:action.payload
            }
        case "SET_TOTAL_PAGES":
            return{
                ...currentState,
                total_pages:action.payload
            }
        default:
            return currentState
    }
}