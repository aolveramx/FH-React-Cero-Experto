import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')

describe('Tests in GifGrid.js', () => {

  const category = 'Dragon Ball'

  test('should render sucessful', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot()
    
  });

  test('should render items when image rendering useFetchGifs', () => {

    const gifs = [
    {
      id: 'ABC',
      url: 'http://localhost/cualquierCosa.jpg',
      title: 'cualquier cosa',
    },
    {
      id: 'CBA',
      url: 'http://localhost/cualquierCosa.jpg',
      title: 'cualquier cosa',
    }
  ]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })

    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

  });
  
});