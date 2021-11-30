import {CobraComponent} from "./cobra-component-decorator";

describe("CobraComponentDecorator", () => {
  it("should attach to a class", () => {
    const sut = new TestClass();
    const sutAsAny = sut as any;
    expect(sutAsAny.cobraComponent).toBeTruthy();
  });
})

@CobraComponent({
  title: "Test"
})
class TestClass {

}
