import {Routes, RouterModule} from '@angular/router';
//import {CharactersComponent} from './characters-component/characters.component';
//import {CharacterComponent} from './character/character.component';
//import {PlanetsComponent} from './planets/planets.component';
import {BaseComponent} from './base/base.component';
import {DriverComponent} from './driver/driver.component';

export const routes: Routes = [
    {path:'base', component: BaseComponent},
    {path:'drivers', component: DriverComponent},
    /*
    {path:'characters', component: CharactersComponent},
    {path:'characters/:id', component: CharacterComponent},
    {path:'planets', component: PlanetsComponent},
    */
    {path:'', redirectTo: 'base', pathMatch: 'full' }
];