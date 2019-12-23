import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDrawerComponentComponent } from './sample-drawer-component.component';

describe('SampleDrawerComponentComponent', () => {
  let component: SampleDrawerComponentComponent;
  let fixture: ComponentFixture<SampleDrawerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDrawerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDrawerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
