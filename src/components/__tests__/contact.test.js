import Contact from "../contact.js"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Contact us testing", ()=>{

  test("Should load contact us component", ()=>{
    render(<Contact/>)
   const heading = screen.getByRole("heading");
   //Assertion
     expect(heading).toBeInTheDocument()
   
   })
   
   it("Verify If Page Contains Button or Not", ()=>{
     render(<Contact/>)
   
     const button = screen.getByRole("button")
     //Assertion
     expect(button).toBeInTheDocument()
   })
   
   test("Verify If Page Contains Button or Not", ()=>{
     render(<Contact/>)
   
     const paragraph = screen.getByText("Submit Your Details")
     //Assertion
     expect(paragraph).toBeInTheDocument()
   })

})




