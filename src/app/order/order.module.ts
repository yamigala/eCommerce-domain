import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { OrderRoutingModule } from "./order-routing.module";
import { AddComponent } from "./add/add.component";
import { ViewComponent } from "./view/view.component";
import { EditComponent } from "./edit/edit.component";
import { OrderService } from "./order.service";

@NgModule({
  imports: [
    CommonModule, 
    OrderRoutingModule,
    ReactiveFormsModule
  ],
  
  declarations: [
    AddComponent, 
    ViewComponent, 
    EditComponent
  ],
  providers:[OrderService]
})
export class OrderModule {}
