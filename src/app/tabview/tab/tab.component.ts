import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'dev-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() header: string;

  @ContentChild('content')
  lazyContent: TemplateRef<any>;

  _active = false;
  loaded = false;

  set active(active: boolean) {
    this._active = active;
    this.loaded = true;
  }

  get active(): boolean {
    return this._active;
  }
  constructor() {}

  ngOnInit(): void {}
}
