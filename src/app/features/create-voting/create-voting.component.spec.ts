import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVotingComponent } from './create-voting.component';

describe('CreateVotingComponent', () => {
  let component: CreateVotingComponent;
  let fixture: ComponentFixture<CreateVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVotingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
