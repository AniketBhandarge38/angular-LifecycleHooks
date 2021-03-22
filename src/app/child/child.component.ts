import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, OnChanges {
  private chnum: number;
  constructor() {}

  @Input()
  set cnum(n: number) {
    this.chnum = n;
  }
  get cnum() {
    return this.chnum;
  }

  ngOnChanges(changes: SimpleChanges) {
    const nchange: SimpleChange = changes.cnum;

    console.log("Previous value : ", nchange.previousValue);

    console.log("Current value : ", nchange.currentValue);
  }

  ngOnInit() {}
}
