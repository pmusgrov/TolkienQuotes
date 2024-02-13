import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GollumComponent } from './gollum.component';

describe('GollumComponent', () => {
  let component: GollumComponent;
  let fixture: ComponentFixture<GollumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GollumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GollumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
