import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe('When Home loads...',() => {
it("displays a header", () => {
const home = shallow(<Home />)
expect(home.find('h3').text()).toEqual('This is the Home Page')
})
})