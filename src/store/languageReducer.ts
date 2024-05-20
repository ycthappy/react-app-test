interface LanguageState {
    language:'en'|'zh',
    languageList:{
        name:string,
        code:string
    }[]
}

const defaultLanguageState:LanguageState = {
    language:"en",
    languageList:[
        {
            name:'中文',
            code:'zh'
        },{
            name:'英文',
            code:'en'
        }
    ]
}

const languageReducer = (state = defaultLanguageState,action:any)=>{
    return state
}
export default languageReducer;