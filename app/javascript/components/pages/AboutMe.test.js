import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutMe from './AboutMe'

Enzyme.configure({ adapter: new Adapter() })

describe('When AboutMe loads...',() => {
it("displays a header", () => {
const about = shallow(<AboutMe />)
expect(about.find('h3').text()).toEqual('This is the AboutMe Page')
})
})