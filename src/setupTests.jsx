
import '@testing-library/jest-dom';
import { Button } from './components/TestComponent';
import { screen, render } from "@testing-library/react";


// eslint-disable-next-line no-undef
describe("Components on the page", () => {
    // eslint-disable-next-line no-undef
    describe("Attributes tests", () => {           
            // eslint-disable-next-line no-undef
            it('should set type="button" by default', () => {
                // eslint-disable-next-line react/react-in-jsx-scope
                render(<Button />);
                // eslint-disable-next-line no-undef
                expect(screen.getByRole("button")).toHaveAttribute("type", "button");
            });  
        });
});




  