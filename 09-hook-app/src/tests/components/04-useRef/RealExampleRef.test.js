import {shallow} from 'enzyme'
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('test in <RealExampleRef />', () => {
  const wrapper = shallow(<RealExampleRef />)

  test('should render>', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
  });

  test('should render component <MultipleCustomHooks />', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
  });
  
});