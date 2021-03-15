import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThearqiveComponent } from './thearqive.component';

describe('ThearqiveComponent', () => {
  let component: ThearqiveComponent;
  let fixture: ComponentFixture<ThearqiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThearqiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThearqiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
