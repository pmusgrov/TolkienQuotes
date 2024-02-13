import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegolasComponent } from './legolas.component';

describe('LegolasComponent', () => {
  let component: LegolasComponent;
  let fixture: ComponentFixture<LegolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegolasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
