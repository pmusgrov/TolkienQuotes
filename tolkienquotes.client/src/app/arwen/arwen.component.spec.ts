import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArwenComponent } from './arwen.component';

describe('ArwenComponent', () => {
  let component: ArwenComponent;
  let fixture: ComponentFixture<ArwenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArwenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArwenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
