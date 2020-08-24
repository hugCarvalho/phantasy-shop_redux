import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

test.skip("make snapshot component", () => {
  expect(shallow(<Home />)).toMatchSnapshot();
});

test("snapshot", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
