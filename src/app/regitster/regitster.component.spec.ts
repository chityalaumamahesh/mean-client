import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitsterComponent } from './regitster.component';

describe('RegitsterComponent', () => {
  let component: RegitsterComponent;
  let fixture: ComponentFixture<RegitsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegitsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegitsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
