import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectDemoComponent } from './connect-demo.component';

describe('ConnectDemoComponent', () => {
  let component: ConnectDemoComponent;
  let fixture: ComponentFixture<ConnectDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
