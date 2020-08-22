import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComponent } from './tab.component';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set state to active and loaded state should set to true', () => {
    expect(component.active).toBeFalse();
    expect(component.loaded).toBeFalse();
    component.active = true;
    expect(component.active).toBeTrue();
    expect(component.loaded).toBeTrue();
    component.active = false;
    expect(component.active).toBeFalse();
    expect(component.loaded).toBeTrue();
  });

  it('should render tab content if state is active', () => {
    const el = fixture.elementRef.nativeElement;
    expect(el.querySelector('div[hidden]')).not.toBeNull();
    component.active = true;
    fixture.detectChanges();
    expect(el.querySelector('div[hidden]')).toBeNull();
  });
});
