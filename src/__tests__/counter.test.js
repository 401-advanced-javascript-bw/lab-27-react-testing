import React from 'react';
import Counter from '../components/counter/counter.js';
import renderer from 'react-test-renderer'; //used for snapshot testing

describe('<Counter/>', () => {
  test('basic rendering', () => {
    const mountedCounter = shallow(<Counter />);
    expect(mountedCounter.find('span')).toBeTruthy();
  });
  test('testing state changes', () => {
    const mountedCounter = mount(<Counter />);
    const button = mountedCounter.find('a.up');
    button.simulate('click');
    expect(mountedCounter.state('count')).toEqual(1);
  });
  test('rendering follows snapshots', () => {
    const snapshot = renderer.create(<Counter />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
