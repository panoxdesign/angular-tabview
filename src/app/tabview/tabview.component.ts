import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
} from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'dev-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss'],
})
export class TabviewComponent implements OnInit, AfterContentInit {
  @Input() selectFirst: boolean = false;

  @ContentChildren(TabComponent)
  allTabs: QueryList<TabComponent>;

  activeTab: TabComponent = null;

  constructor() {}

  ngOnInit(): void {}

  activate(nextActiveTab: TabComponent) {
    if (this.activeTab) {
      this.activeTab.active = false;
    }
    nextActiveTab.active = true;
    this.activeTab = nextActiveTab;
  }

  ngAfterContentInit(): void {
    if (this.selectFirst) {
      this.activate(this.allTabs.first);
    }
  }
}
