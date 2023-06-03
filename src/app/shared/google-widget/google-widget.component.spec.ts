import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleWidgetComponent } from './google-widget.component';

describe('GoogleWidgetComponent', () => {
  let component: GoogleWidgetComponent;
  let fixture: ComponentFixture<GoogleWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
