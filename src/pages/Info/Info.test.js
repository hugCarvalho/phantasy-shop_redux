import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import Info from "./Info";

Enzyme.configure({ adapter: new Adapter() });

test("make snapshot component", () => {
  expect(shallow(<Info />)).toMatchSnapshot();
});

test("snapshot", () => {
  const tree = renderer.create(<Info />).toJSON();
  expect(tree).toMatchSnapshot();
});
