import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifGridItem from "../../components/GifGridItem"

describe('Tests in GifGridItem.js', () => {

  const url = 'http://localhost/img.jpg'
  const title = 'Title'
  const wrapper = shallow(<GifGridItem title={title} url={url}/>)

  test('shoud render <GifGridItem />', () => {

    expect(wrapper).toMatchSnapshot()

  });

  test('should have paragraph with title', () => {

    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)

  });

  test('should have same img at url & props', () => {
    
    const img = wrapper.find('img')

    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)

  });

  test('should have className="animate__fadeIn"', () => {

    const div = wrapper.find('div')

    expect(div.hasClass('animate__fadeIn')).toBe(true)

    // const className = div.prop('className')
    // expect(className.includes('animate__fadeIn')).toBe(true) 

  });

})
