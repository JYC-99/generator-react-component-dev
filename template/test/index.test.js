import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import <%= exportName %> from '../src/index';

configure({ adapter: new Adapter() });

describe('<%= exportName %>', () => {
  test('should not throw any errors', () => {
    expect(() => {
      renderer.create(<<%= exportName %> />);
    }).not.toThrow();
  });

  test('should match the snapshot', () => {
    const component = renderer.create(<<%= exportName %> />);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
