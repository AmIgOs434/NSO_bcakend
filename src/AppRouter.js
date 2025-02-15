import React ,{useContext}  from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import { publicRoutes} from "./routes";

import { GLAV_ROUTE } from './utils/consts';
import LenisScroll from './utils/Lenis.tsx';
const AppRouter = ()=>{


    return (
        <Routes>
            {publicRoutes.map(({path,Component}) =>
            <Route key ={path} path= {path}  element={<Component/>} exact/>
            )}
        

            <Route path='*' element={<Navigate to={GLAV_ROUTE}/>} />
        </Routes>
    )
    }

export default AppRouter