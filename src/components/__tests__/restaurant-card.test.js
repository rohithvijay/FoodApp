import { BrowserRouter } from "react-router-dom";
import RestaurantListComponent from "../restaurant-card"; 
import { fireEvent, screen } from "@testing-library/react";
import  "@testing-library/jest-dom";
import MOCKDATA from "../mocks/mocks.json";
import { render } from "@testing-library/react";
import AppBody from "../body";
import {act} from "react-dom/test-utils";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCKDATA);
        },
    });
});
describe("page", () => {
    beforeAll(() =>{

    });
    
    beforeEach(() =>{
        
    });
    afterAll(() => {

    });
    afterEach(() => {

    });
    // it("should render restaurant with prop data", () => {
    //     render(<RestaurantListComponent resList= {MOCKDATA}/>);
    //     const resName = screen.getByText("Irani Std. Tea");
    //     expect(resName).toBeInTheDocument();
    // })
    
    it("should filter top restaurant", async () => {
      await act(async () =>
        render(
          <BrowserRouter>
            <AppBody />
          </BrowserRouter>
        )
      );
    
      const cardsBeforeFilter = screen.getAllByTestId("resCard");
      expect(cardsBeforeFilter.length).toBe(20);
    
      const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    
      fireEvent.click(topRatedBtn);
    
      const cardsAfterFilter = screen.getAllByTestId("resCard");
      expect(cardsAfterFilter.length).toBe(15);
    
    });
})

