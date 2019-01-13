import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpachshipComponent } from './spachship.component';

describe('SpachshipComponent', () => {
  let component: SpachshipComponent;
  let fixture: ComponentFixture<SpachshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpachshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpachshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
