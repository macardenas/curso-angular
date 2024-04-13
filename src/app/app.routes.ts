import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { I18nComponent } from './components/i18n/i18n.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ApirestComponent } from './components/apirest/apirest.component';
import { FormulariosComponent } from './components/formularios/formularioTemplate/formularios.component';
import { FormularioReactivoComponent } from './components/formulario/formulario-reactivo/formulario-reactivo.component';
export const routes: Routes = [
    { path: '',title:"LogIn Page", component: DirectivasComponent },
    { path: 'languaje',title:"languaje", component: I18nComponent },
    { path: 'pipes',title:"pipes", component: PipesComponent },
    { path: 'apirest',title:"apirest", component: ApirestComponent },
    { path: 'formtemplate',title:"formtemplate", component: FormulariosComponent }, 
    { path: 'formreactivo',title:"formreactico", component: FormularioReactivoComponent }
];
