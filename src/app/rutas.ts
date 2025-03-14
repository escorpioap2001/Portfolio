import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TextestComponent } from "./textest/textest.component";
import { ContactComponent } from "./contact/contact.component";
import { ConocimientoComponent } from "./conocimiento/conocimiento.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProyectoDetalleComponent } from "./proyecto-detalle/proyecto-detalle.component";

export const rutas: Routes = [
    { path: 'inicio', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'conocimiento', component: ConocimientoComponent},
    { path: 'project/:id', component: ProyectoDetalleComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
   ];