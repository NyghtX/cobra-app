import {CobraButtonFactory} from "./cobraButtonFactory";
import {CobraButton} from "./cobraButton";
import {CobraButtonDefinition} from "./cobraButtonDefinition";

describe("CobraButtonFactory", () => {

  it("should create an instance of a button", () => {
    const sut = CobraButton("Test");
    expect(sut).toBeTruthy();
    expect(sut).toBeInstanceOf(CobraButtonFactory);
    expect(sut.config.label).toEqual("Test");
  });

  it("should get the callback right", () => {
    let x: any = {};
    const sut = CobraButton("Test")
      .thatCalls(ctx => {
        ctx.x = "Test"
      }).build(x);
    expect(sut).toBeTruthy();
    expect(sut).toBeInstanceOf(CobraButtonDefinition);

    sut.config.cb!(x);
    expect(x.x).toEqual("Test")
  });

});
