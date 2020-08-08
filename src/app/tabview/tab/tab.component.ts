import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() header: string;

  active = false;

  constructor() {}

  ngOnInit(): void {}
}
