import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActnowComponent } from './actnow.component';

describe('ActnowComponent', () => {
  let component: ActnowComponent;
  let fixture: ComponentFixture<ActnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
