import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test('should render Header Component with a login button', () => {

    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
})

test('should render Header Component with a cart items 0', () => {

    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 Items)");

    expect(cartItems).toBeInTheDocument();
})

test('should render Header Component with a cart item', () => {

    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
})

test('should change login button to logout', () => {

    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(
        loginButton
    );

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
})
