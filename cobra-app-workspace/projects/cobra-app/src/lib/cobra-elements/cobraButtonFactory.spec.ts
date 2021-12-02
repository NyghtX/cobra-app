import {CobraButtonFactory} from "./cobraButtonFactory";
import {CobraButton} from "./cobraButton";

describe("CobraButtonFactory", () => {

  it("should create an instance of a button", () => {
    const sut = CobraButton("Test");
    expect(sut).toBeTruthy();
    expect(sut).toBeInstanceOf(CobraButtonFactory);
    expect(sut.config.label).toEqual("Test");
  })

});
