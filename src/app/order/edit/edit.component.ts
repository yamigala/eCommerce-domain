/**
 * @author Yamini Gala
 */

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

//--------------------------------------------------------------//
import { order } from "../order.model";
import { OrderService } from "../order.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  /**
   * declare model type
   */
  public orders;
  public orderList: order[];
  public orderDetails: FormGroup;
  updateOrder: order[];
  id: number;
  temp;
  /**
   *
   * @param service : injecting orderServcice
   * @param fb :injecting FormBuilder
   * @param router :injecting Router
   * @param route :injecting ActivatedRoute
   */
  constructor(
    private service: OrderService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    /**
     * required validation
     */
  ) {
    this.orderDetails = this.fb.group({
      id: [""],
      itemName: ["", Validators.required],
      name: ["", Validators.required],
      noOfItem: ["", Validators.required],
      price: ["", Validators.required],
      address: ["", Validators.required],
      phoneNo: ["", Validators.required]
    });
  }
  /**
   * edit method
   */
  ngOnInit() {
    this.editData();
  }
  /**
   * by using id data will be taken and edit method will run
   */
  editData() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.service.getDataById(id).subscribe(order => {
      this.orders = order;
      /**
       * patchvalue for particular field
       */
      this.orderDetails.patchValue({
        id: this.orders.id,
        itemName: this.orders.itemName,
        name: this.orders.name,
        noOfItem: this.orders.noOfItem,
        price: this.orders.price,
        address: this.orders.address,
        phoneNo: this.orders.phoneNo
      });
    });
  }
  /**
   * updating data in form
   */
  onUpdate() {
    this.service
      .updateOrder(this.orderDetails.value)
      .subscribe(() => console.log(this.orderDetails.value));
    this.router.navigate(["/order/view"]);
  }
}
