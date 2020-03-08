import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct adress /trip/abc', () => {
    const id = 'abc';
    const component = shallow(<TripSummary id={id} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${id}`);
  });

  it('should render images', () => {
    const expectedSRC = 'image';
    const expectedALT = 'Lorem';
    const component = shallow(<TripSummary image={expectedSRC} name={expectedALT} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(expectedSRC);
    expect(component.find('img').prop('alt')).toEqual(expectedALT);
  });

  it('should render correct props name, cost, days', () => {
    const component = shallow(<TripSummary tags={[]} name={'correctname'} cost={'correctcost'} days={7}/>);
    expect(component).toBeTruthy();
  });

  it('should thorw error without required props',() => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should check if tags are rendered in proper order', () => {
    const tagsArray = ['sec', 'min', 'hour'];
    const component = shallow(<TripSummary tags={tagsArray} />);
    expect(component.find('.tags span').at(0)).toEqual[tagsArray[0]];
    expect(component.find('.tags span').at(1)).toEqual[tagsArray[1]];
    expect(component.find('.tags span').at(2)).toEqual[tagsArray[2]];
  });

  it('should not render tags if props = undefined', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.exists('div.tags')).toEqual(true);
  });
});
