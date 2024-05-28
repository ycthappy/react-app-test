import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { AddLanguageAction, LanguageAction, addLanguageActionCreator, changeLanguageActionCreator } from '../redux/language/languageActions'
import { useSelector } from '../redux/hook'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { useNavigate } from 'react-router-dom'
import store from '../redux/store'

const Home:React.FC<{}> = ()=>{
    const navigate = useNavigate()
    const language = useSelector((state)=>state.language)
    const languageList = useSelector((state)=>state.languageList)
    const dispatch:Dispatch<LanguageAction> = useDispatch()
    
    console.log(store.getState())
    const _onAddLanguage = ()=>{
        const action = addLanguageActionCreator('新语言','new_code')
        dispatch(action)
    }

    const _onClick = (languageCode:string)=>{
        const action = changeLanguageActionCreator(languageCode)
        dispatch(action)
    }

    const _onDetail = ()=>{
        navigate('/detail')
    }
    return(
        <>
            <div>

                <div>语言{language}</div>
                <Button type='primary' onClick={_onAddLanguage}>新增语言</Button>
                <Button type='default' onClick={_onDetail}>跳转</Button>
                {
                    languageList.map((item,index)=>{
                        return <div key={index} onClick={()=>_onClick(item.languageCode)}>{item.languageName}</div>
                    })
                }
            </div>
        </>
    )
}

export default Home;