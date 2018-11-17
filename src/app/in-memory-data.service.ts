/**
 * @author Yamini Gala
 */
import { InMemoryDbService } from "angular-in-memory-web-api";
import { order } from "./order/order.model";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const order:order[] = [
      {
        id: 1,
        itemName: "phone",
        name: "yami",
        noOfItem: 3,
        price: 10000,
        address: "valsad",
        phoneNo: 5327645200
      },
      {
        id: 2,
        itemName: "cloths",
        name: "tina",
        noOfItem: 2,
        price: 5000,
        address: "mumbai",
        phoneNo: 56465645236
      }
    ];
    return { order };
  }
}
