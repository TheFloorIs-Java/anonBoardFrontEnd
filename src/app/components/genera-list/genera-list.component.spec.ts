import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraListComponent } from './genera-list.component';

describe('GeneraListComponent', () => {
  let component: GeneraListComponent;
  let fixture: ComponentFixture<GeneraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
