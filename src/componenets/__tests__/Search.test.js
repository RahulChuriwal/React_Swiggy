import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })

})

test('should Search Res List for Pizza input', async () => {
    await act(() =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    )

    const befcards = screen.getAllByTestId("resCards");

    expect(befcards.length).toBe(9);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {
        target: { value: "pizza" }
    })

    fireEvent.click(searchBtn)

    const cards = screen.getAllByTestId("resCards");

    expect(cards.length).toBe(1);
})


test('should give Top Rated Restaurants', async () => {
    await act(() =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    )

    const befcards = screen.getAllByTestId("resCards");

    expect(befcards.length).toBe(9);

    const searchBtn = screen.getByRole("button", { name: "Top-Rated-Restaurant" });

    const toprated = screen.getByTestId("top");

    fireEvent.click(toprated)

    const cards = screen.getAllByTestId("resCards");

    expect(cards.length).toBe(8);
})