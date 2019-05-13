import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() success;
  @Input() message;
  constructor() { }
  isDefined() {
    return this.success !== undefined
  }

  isValid() {
    return this.success
  }
  ngOnInit() {
  }

}
