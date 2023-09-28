import { expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import SignInPageContainer from "../components/SignInPage/SignInPageContainer";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";

test("signing-in process #1 - user passes the right data ", async () => {
  const signInPage = render(
    <BrowserRouter>
      <ThemeProvider>
        <SignInPageContainer />
      </ThemeProvider>
    </BrowserRouter>
  );

  const usernameInput = signInPage.getByTestId("username-input");
  const passwordInput = signInPage.getByTestId("password-input");
  const submitButton = signInPage.getByTestId("submit-button");

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "testpass" } });
  fireEvent.click(submitButton);

  expect(window.location.pathname).toBe("");
  expect(usernameInput.class).not.toBe("form__input form__input--error");
  expect(sessionStorage.getItem("username")).toBe("testuser");

  signInPage.unmount();
});

test("signing-in process #2 - user passes the wrong data ", async () => {
  const signInPage = render(
    <BrowserRouter>
      <ThemeProvider>
        <SignInPageContainer />
      </ThemeProvider>
    </BrowserRouter>
  );

  const usernameInput = signInPage.getByTestId("username-input");
  const passwordInput = signInPage.getByTestId("password-input");
  const submitButton = signInPage.getByTestId("submit-button");

  fireEvent.change(usernameInput, { target: { value: "null" } });
  fireEvent.change(passwordInput, { target: { value: "null" } });
  fireEvent.click(submitButton);

  expect(window.location.pathname).toBe("");
  expect(usernameInput.className).toBe("form__input form__input--error");
  expect(passwordInput.className).toBe("form__input form__input--error");
  expect(sessionStorage.getItem("username")).toBe("testuser");

  signInPage.unmount();
});
