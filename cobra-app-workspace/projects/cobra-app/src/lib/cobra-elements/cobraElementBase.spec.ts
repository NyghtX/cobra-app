import {CobraElementBase} from "./cobraElementBase";
import {DisplayedAtFactory} from "./displayedAtFactory";
import {CobraElementConfig} from "./cobraElementConfig";
import {CobraElementPosition} from "./cobraElementPosition";

describe("CobraElementBase", () => {

  it("should create a new instance", () => {
    const sut = new TestElement({});
    expect(sut).toBeTruthy();
  });

  describe("displayedAt", () => {
    it("should return the correct factory", () => {
      const sut = new TestElement({})
        .displayedAt()
      expect(sut).toBeInstanceOf(DisplayedAtFactory);

    });

    it("should set the correct position - right", () => {
      const sut = new TestElement({})
        .displayedAt()
        .theRight();
      expect(sut).toBeInstanceOf(TestElement);
      expect(sut.config.position).toEqual(CobraElementPosition.right);
    });

    it("should set the correct position - left", () => {
      const sut = new TestElement({})
        .displayedAt()
        .theLeft();
      expect(sut).toBeInstanceOf(TestElement);
      expect(sut.config.position).toEqual(CobraElementPosition.left);
    });

    it("should set the correct position - center", () => {
      const sut = new TestElement({})
        .displayedAt()
        .theCenter();
      expect(sut).toBeInstanceOf(TestElement);
      expect(sut.config.position).toEqual(CobraElementPosition.center);
    });
  });

});

interface TestElementConfig extends CobraElementConfig {
}

class TestElement extends CobraElementBase<TestElement, TestElementConfig> {

}
