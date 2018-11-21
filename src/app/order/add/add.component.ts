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
   * declare regular expression
   */
  public characterRegx : string;
  public numberRegx : string;
  /**
   *
   * @param service : injecting order service
   * @param fb :injecting formbuilder
   */
  constructor(private service: OrderService, private fb: FormBuilder) {
    this.characterRegx = '^[a-zA-Z \-\]+';
  this.numberRegx = '^[0-9]*$';
  }
  /**
   * using group property of formbuilder
   */
  // public get itemName(){
  //   return this.orderDetails.get('itemName');
  // }
  ngOnInit() {
    this.orderDetails = this.fb.group({
      itemName: ["", [Validators.required]],
      name: ["",[Validators.required,Validators.minLength(5)]],
      noOfItem: ["", Validators.required],
      price: ["", [Validators.required,Validators.pattern(this.numberRegx)]],
      address: ["", [Validators.required,Validators.pattern(this.characterRegx)]],
      phoneNo: ["", [Validators.required,Validators.maxLength(10)]],
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
