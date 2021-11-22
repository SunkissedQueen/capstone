import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe('When Header loads...',() => {
it("displays a header", () => {
const header = shallow(<Header />)
expect(header.find('h3').text()).toEqual('This is the Header Page')
})
})