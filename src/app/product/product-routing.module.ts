import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{ path: '', component: ViewAllComponent  },
{path:'view/:id',component:ViewComponent},
{path:'edit/:id',component:EditComponent},
{path:'delete/:id',component:DeleteComponent},
{path:'add',component: AddComponent},
];
                        
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
