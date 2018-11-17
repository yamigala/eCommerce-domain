/**
 * @author Yamini Gala
 */

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

//--------------------------------------------------------------------/

import { order } from "../order.model";
import { OrderService } from "../order.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  /**
   * declare model type
   */
  public orderDetails: FormGroup;
  public orders: order[];
  public orderList: order[];
  /**
   *
   * @param service : injecting order service
   * @param fb :injecting formbuilder
   */
  constructor(private service: OrderService, private fb: FormBuilder) {}
  /**
   * using group property of formbuilder
   */
  ngOnInit() {
    this.orderDetails = this.fb.group({
      itemName: ["", Validators.required],
      name: ["", [Validators.required]],
      noOfItem: ["", Validators.required],
      price: ["", Validators.required],
      address: ["", Validators.required],
      phoneNo: ["", Validators.required]
    });
  }
  /**
   *
   * @param addorder :it will post data on browser
   */
  onSubmit(addorder) {
    this.service.addOrder(addorder).subscribe(order => {
      this.orders = order;
      console.log(this.orders);
    });
  }
}
