import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamwiseComponent } from './samwise.component';

describe('SamwiseComponent', () => {
  let component: SamwiseComponent;
  let fixture: ComponentFixture<SamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SamwiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
