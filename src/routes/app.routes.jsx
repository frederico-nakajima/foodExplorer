import {Routes,Route} from 'react-router-dom'

import { AddDish } from '../pages/AddDish'
import { EditDish } from '../pages/EditDish'
import { Meal } from '../pages/Meal'
import { MealUser } from '../pages/MealUser'
import { MealAdmin } from '../pages/MealAdmin'
import { MenuUser } from '../pages/MenuUser'
import { MenuAdmin } from '../pages/MenuAdmin'
import {Details} from '../pages/Details'
import {Profile} from '../pages/Profile'




export function AppRoutes(){
    return(
        <Routes>
            
            <Route path='/add' element={<AddDish/>}/>
            <Route path='/edit' element={<EditDish/>}/>
            <Route path='/meal' element={<Meal/>}/>
            <Route path='/mealuser' element={<MealUser/>}/>
            <Route path='/mealadmin' element={<MealAdmin/>}/>           
            <Route path='/menuUser' element={<MenuUser/>}/>
            <Route path='/menuadmin' element={<MenuAdmin/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/details/:id' element={<Details/>}/>
        </Routes>
    )
}