import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })

describe('When Footer loads...',() => {
it("displays a header", () => {
const footer = shallow(<Footer />)
expect(footer.find('h3').text()).toEqual('This is the Footer Page')
})
})