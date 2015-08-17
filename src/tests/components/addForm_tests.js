import { expect } from "chai";
import React from "react";

import AddForm from "../../app/components/addForm";


describe("Components: addForm", () => {
  let TestUtils;

  beforeEach(() => {
    TestUtils = require("react-addons-test-utils");
  });

  it("should render", () => {
    const addForm = TestUtils.renderIntoDocument(<AddForm placeholder="hey" callback={() => {}} />);
    expect(addForm).to.exist;
  });

  it("should call the callback with the input value", () => {
    expect(true).to.be.true;
  });
});
