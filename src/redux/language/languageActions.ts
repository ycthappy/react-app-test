export const CHANGE_LANGUAGE = 'change_language';
export const ADD_LANGUAGE = 'add_language';

interface ChangeLanguageAction {
    type:typeof CHANGE_LANGUAGE,
    payload:string
}

export interface AddLanguageAction {
    type:typeof ADD_LANGUAGE,
    payload:{languageName:string,languageCode:string}
}

export type LanguageAction = ChangeLanguageAction | AddLanguageAction
export const changeLanguageActionCreator = (languageCode:string):ChangeLanguageAction=>{
    return{
        type:CHANGE_LANGUAGE,
        payload:languageCode
    }
}

export const addLanguageActionCreator = (languageName:string,languageCode:string):AddLanguageAction=>{
    return{
        type:ADD_LANGUAGE,
        payload:{
            languageName,languageCode
        }
    }
}

