import { render, screen } from '@testing-library/react';
import App from './App';
import EnquiryForm from './components/EnquiryForm';


test("check input for name", () =>{
  render(<EnquiryForm />);
  screen.getByRole('textbox', {  name: /name/i})
})

test("check input for email", () =>{
  render(<EnquiryForm />);
  screen.getByRole('textbox', {  name: /email/i})
})

test("check input for address", () =>{
  render(<EnquiryForm />);
  screen.getByRole('textbox', {  name: /address/i})
})
test("check valid output on click", () => {
  render(<EnquiryForm />);
  screen.getByRole('button', {  name: /send enquiry/i})
})
