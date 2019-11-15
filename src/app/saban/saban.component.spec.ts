import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SabanComponent } from './saban.component';

describe('SabanComponent', () => {
  let component: SabanComponent;
  let fixture: ComponentFixture<SabanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
