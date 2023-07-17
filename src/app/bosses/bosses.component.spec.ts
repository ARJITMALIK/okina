import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossesComponent } from './bosses.component';

describe('BossesComponent', () => {
  let component: BossesComponent;
  let fixture: ComponentFixture<BossesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BossesComponent]
    });
    fixture = TestBed.createComponent(BossesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
