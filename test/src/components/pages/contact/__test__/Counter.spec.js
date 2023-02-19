import {render,fireEvent,screen} from "@testing-library/react";
import renderer from "react-test-renderer"
import Counter from "../Contact.jsx"

describe("Counter",()=>{
it("should increment counter", ()=>{
    render (<Counter/>)
    const counter= screen.getByTestId("counter")
    const incrementBtn=screen.getByTestId("increment")
    fireEvent.click(incrementBtn)
    expect(counter).toHaveTextContent("2")
})
it("should decrement counter", ()=>{
    render (<Counter/>)
    const counter= screen.getByTestId("counter")
    const decrementBtn=screen.getByTestId("decrement")
    fireEvent.click(decrementBtn)
    expect(counter).toHaveTextContent("0")
})
})

describe('Counter Snapshot', () => {
  it("should matches dom Snapshot",()=>{
const tree=renderer.create(<Counter/>).toJSON();
expect(tree).toMatchSnapshot()
})
})
