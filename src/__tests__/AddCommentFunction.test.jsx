import { fireEvent, render } from "@testing-library/react";
import { TweetsProvider } from "../context/TweetContext";
import { ThemeProvider } from "../context/ThemeContext";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";
import Feed from "../components/Feed/Feed";
import AddCommentAreaContainer from "../components/AddCommentArea/AddCommentAreaView";
import TweetContainer from "../components/Tweet/TweetContainer";
import { expect, test } from "vitest";

test("Should add comment to a tweet", async () => {
  sessionStorage.setItem("username", "TestUser123");

  const newComment = "Test comment content";

  const tweetComponents = render(
    <MemoryRouter>
      <TweetsProvider>
        <ThemeProvider>
          <Home>
            <Feed></Feed>
            <TweetContainer />
            <AddCommentAreaContainer />
          </Home>
        </ThemeProvider>
      </TweetsProvider>
    </MemoryRouter>
  );

  const commentInput = tweetComponents.getAllByTestId("comment-input")[0];
  const commentSubmitButton = tweetComponents.getAllByTestId("submit-input")[0];

  await fireEvent.change(commentInput, {
    target: { value: newComment },
  });

  await fireEvent.click(commentSubmitButton);

  expect(commentInput.value).toBe("");

  expect(document.body.textContent).toContain(newComment);
});
