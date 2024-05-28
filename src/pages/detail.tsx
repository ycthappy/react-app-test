import React from 'react'
import { useSelector } from '../redux/hook'

const Detail:React.FC<{}> = ()=>{
    const { language,languageList } = useSelector(state=>state)
    return(
        <div>
            {language}
        </div>
    )
}

export default Detail