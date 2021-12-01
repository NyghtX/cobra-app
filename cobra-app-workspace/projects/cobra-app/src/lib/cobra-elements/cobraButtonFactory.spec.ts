import {CobraButtonFactory} from "./cobraButtonFactory";
import {CobraButton} from "./cobraButton";

describe("CobraButtonFactory", () => {

  it("should create an instance of a button", () => {
    const sut = CobraButton();
    expect(sut).toBeTruthy();
    expect(sut).toBeInstanceOf(CobraButtonFactory);
  })

});
