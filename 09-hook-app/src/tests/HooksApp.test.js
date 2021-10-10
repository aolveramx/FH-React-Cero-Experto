import {shallow} from 'enzyme'
import HooksApp from "../HooksApp";


describe('Tests in <HookApp />', () => {

  
  test('should return snapshoot of <HookApp />', () => {
    
    const wrapper = shallow(<HooksApp />)
    
    expect(wrapper).toMatchSnapshot()

  });
});