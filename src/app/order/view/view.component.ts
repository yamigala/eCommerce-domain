/**
 * @author Yamini Gala
 */
import { Component, OnInit } from "@angular/core";

//-----------------------------------------------------------//
import { OrderService } from "../order.service";
import { order } from "../order.model";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  constructor(private service: OrderService) {}
  /**
   * declare model type
   */
  public orders: order[];
  public orderList: order[];

  ngOnInit() {
    this.getdata();
  }
  /**
   * get data from fake backend
   */
  getdata(): void {
    this.service.getData().subscribe(order => {
      this.orderList = order;
      console.log(this.orderList);
    });
  }
  /**
   *
   * @param id :id type
   * id is used for deleting data
   */
  delete(id: number) {
    this.service.delete(id).subscribe();
    this.getdata();
  }
}
