import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimiliComponent } from './gimili.component';

describe('GimiliComponent', () => {
  let component: GimiliComponent;
  let fixture: ComponentFixture<GimiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GimiliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GimiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
