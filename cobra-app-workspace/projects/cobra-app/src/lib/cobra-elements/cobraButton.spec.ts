import {CobraButton} from "./cobraButton";
import {CobraButtonDefinition} from "./cobraButtonDefinition";

describe("CobraButton", () => {

  it("should create an instance of a button", () => {
    const sut = CobraButton();
    expect(sut).toBeTruthy();
    expect(sut).toBeInstanceOf(CobraButtonDefinition);
  })

});
