import { fireEvent, render } from "@testing-library/react";
import { expect, test } from "vitest";
import { TweetsProvider } from "../context/TweetContext";
import { ThemeProvider } from "../context/ThemeContext";
import { AddTweetAreaContainer } from "../components/AddTweetArea/AddTweetAreaContainer";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { homePageRoute } from "../const/routing";
import Home from "../pages/Home";
import Feed from "../components/Feed/Feed";

test("Add tweet function", async () => {
  sessionStorage.setItem("username", "TestUser123");
  const tweetContent = "Test tweets content";

  const addTweetComponents = render(
    <MemoryRouter initialEntries={[homePageRoute]}>
      <TweetsProvider>
        <ThemeProvider>
          <Routes>
            <Route
              path='/'
              element={
                <Home>
                  <Feed />
                  <AddTweetAreaContainer />
                </Home>
              }
            />
          </Routes>
        </ThemeProvider>
      </TweetsProvider>
    </MemoryRouter>
  );

  const userInputArea = addTweetComponents.getByTestId("content-input");
  const submitButton = addTweetComponents.getByTestId("submit-button");

  await fireEvent.change(userInputArea, {
    target: { value: tweetContent },
  });

  await fireEvent.click(submitButton);

  expect(userInputArea.value).toBe("");

  const tweetsList = addTweetComponents.getByTestId("tweets-list");

  expect(tweetsList.textContent).toContain(tweetContent);

  expect(document.body.textContent).toContain(tweetContent);
});
