import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private pnum: number = 100;

  set counter(n: number) {
    this.pnum = n;
  }

  get counter() {
    return this.pnum;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
