import { ADD_LANGUAGE, CHANGE_LANGUAGE, LanguageAction } from "./languageActions";

export interface LanguageState {
    language:string,
    languageList:{languageName:string,languageCode:string}[]
}

const defaultState:LanguageState = {
    language:'en',
    languageList:[
        {languageName:'中文',languageCode:'zh'},
        {languageName:'英文',languageCode:'en'}
    ]
}
const languageReducer = (state = defaultState,action:LanguageAction)=>{
    console.log(action)
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language:action.payload
            }
            break;
        case ADD_LANGUAGE:
            return{
                ...state,
                languageList:[...state.languageList,action.payload]
            }
            break
        default:
            return state;
            break;
    }
}

export default languageReducer;