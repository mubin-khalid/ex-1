import React from "react";
import store from "../../../src/redux/store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Search from "../../../src/container/Search/SearchContainer";

it("renders correctly", () => {
  const tree = renderer
  .create(
    <Provider store={store}>
      <Search />
    </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});