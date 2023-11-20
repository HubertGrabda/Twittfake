import { expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import SignInPageContainer from "../components/SignInPage/SignInPageContainer";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { signInRoute } from "../const/routing";

test("should log in with the passed data", async () => {
  const pages = render(
    <MemoryRouter initialEntries={[signInRoute]}>
      <ThemeProvider>
        <Routes>
          <Route path='/SignIn' element={<SignInPageContainer />} />
          <Route path='/' element={<div data-testid='home-page' />} />
        </Routes>
      </ThemeProvider>
    </MemoryRouter>
  );

  const usernameInput = pages.getByTestId("username-input");
  const passwordInput = pages.getByTestId("password-input");
  const submitButton = pages.getByTestId("submit-button");

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "testpass" } });
  fireEvent.click(submitButton);

  const homePage = pages.queryByTestId("home-page");

  expect(homePage).toBeTruthy();
  expect(usernameInput.className).not.toBe("form__input form__input--error");
  expect(sessionStorage.getItem("username")).toBe("testuser");

  pages.unmount();
});

test("should not log in because of wrong passed data", async () => {
  const pages = render(
    <MemoryRouter initialEntries={[signInRoute]}>
      <ThemeProvider>
        <Routes>
          <Route path='/SignIn' element={<SignInPageContainer />} />
          <Route path='/' element={<div data-testid='home-page' />} />
        </Routes>
      </ThemeProvider>
    </MemoryRouter>
  );

  const usernameInput = pages.getByTestId("username-input");
  const passwordInput = pages.getByTestId("password-input");
  const submitButton = pages.getByTestId("submit-button");

  fireEvent.change(usernameInput, { target: { value: "null" } });
  fireEvent.change(passwordInput, { target: { value: "null" } });
  fireEvent.click(submitButton);

  const homePage = pages.queryByTestId("home-page");

  expect(homePage).toBeNull();
  expect(usernameInput.className).toBe("form__input form__input--error");
  expect(passwordInput.className).toBe("form__input form__input--error");

  pages.unmount();
});
