import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LearnMore from './LearnMore'

Enzyme.configure({ adapter: new Adapter() })

describe('When LearnMore loads...',() => {
it("displays a header", () => {
const more = shallow(<LearnMore />)
expect(more.find('h3').text()).toEqual('This is the LearnMore Page')
})
})