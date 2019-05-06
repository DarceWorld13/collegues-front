import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasTrouveComponentComponent } from './pas-trouve-component.component';

describe('PasTrouveComponentComponent', () => {
  let component: PasTrouveComponentComponent;
  let fixture: ComponentFixture<PasTrouveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasTrouveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasTrouveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
