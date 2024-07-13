import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

test('should load restaurant menu component', async () => {

    await act(async () => render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
                <RestaurantMenu />
                <Cart />
            </BrowserRouter>
        </Provider>
    ));

    const accordianHeader = screen.getByText("Veg Pizza (14)");

    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("fooditems").length).toBe(14);

    expect(screen.getByText("Cart - (0 Items)")).toBeInTheDocument();

    const addbtns = screen.getAllByRole("button", { name: "Add +" })
    fireEvent.click(addbtns[0]);

    expect(screen.getByText("Cart - (1 Items)")).toBeInTheDocument();

    fireEvent.click(addbtns[1]);

    expect(screen.getByText("Cart - (2 Items)")).toBeInTheDocument();
    
})
