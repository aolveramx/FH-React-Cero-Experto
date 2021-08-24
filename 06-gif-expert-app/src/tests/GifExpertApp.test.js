import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test in GifExpertApp.js', () => {

  test('should render successful', () => {
    
    const wrapper = shallow(<GifExpertApp />)

    expect(wrapper).toMatchSnapshot()

  });

  test('should render list categories', () => {
    
    const categories = ['Ninja Gayden', 'Dragon Ball']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  });
  
})