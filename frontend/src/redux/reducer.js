let initialState = {
    pdfName:"",
    current_page:1,
    total_pages:0,
    annotations:[],
    paintMode:false,
    paintColor:"",
    lineWidth:5,
    eraseMode:false,
    paintToggle:false,
    historyIndex:0,
    history:[]
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
        case "PAINT_MODE":
            return{
                ...currentState,
                paintMode:action.payload,
            }
        case "CHANGE_LINE_WIDTH":
            return{
                ...currentState,
                lineWidth:action.payload
            }
        case "CHANGE_COLOR":
            return{
                ...currentState,
                paintColor:action.payload,
            }
        case "ERASE_MODE":
            return{
                ...currentState,
                eraseMode:action.payload,    
            }
        case "PAINT_TOGGLE":
            return{
                ...currentState,
                paintToggle:action.payload,
            }
        case "HISTORY_INDEX_INCREMENT":
            return{
                ...currentState,
                historyIndex:currentState.historyIndex + 1,
            }
        case "HISTORY_INDEX_DECREMENT":
            return{
                ...currentState,
                historyIndex:currentState.historyIndex - 1,
            }
        case "ADD_TO_HISTORY":
            return{
                ...currentState,
                history:[...currentState.history, action.payload]
            }
        default:
            return currentState
    }
}