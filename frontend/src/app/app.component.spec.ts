import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture : AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should create the app', () => {
    expect(fixture).toBeTruthy();
  });

  it(`should have the 'frontend' title`, () => {
    expect(fixture.title).toEqual('frontend');
  });
});
