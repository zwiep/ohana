import {HeaderComponent} from "./header.component";

describe('header component', () => {

  let component = new HeaderComponent();

  it('should have title Ohana', () => {
    expect(component.title).toBe('Ohana');
  });
});
