import {CobraElementFactoryBase} from "./cobraElementFactoryBase";
import {DisplayedAtFactory} from "./displayedAtFactory";
import {CobraElementConfig} from "./cobraElementConfig";
import {CobraElementPosition} from "./cobraElementPosition";

describe("CobraElementFactoryBase", () => {

  it("should create a new instance", () => {
    const sut = TestElement({});
    expect(sut).toBeTruthy();
  });

  describe("displayedAt", () => {
    it("should return the correct factory", () => {
      const sut = TestElement({})
        .displayedAt()
      expect(sut).toBeInstanceOf(DisplayedAtFactory);

    });

    it("should set the correct position - right", () => {
      const sut = TestElement({})
        .displayedAt()
        .theRight();
      expect(sut).toBeInstanceOf(TestElementFactory);
      expect(sut.config.position).toEqual(CobraElementPosition.right);
    });

    it("should set the correct position - left", () => {
      const sut = TestElement({})
        .displayedAt()
        .theLeft();
      expect(sut).toBeInstanceOf(TestElementFactory);
      expect(sut.config.position).toEqual(CobraElementPosition.left);
    });

    it("should set the correct position - center", () => {
      const sut = TestElement({})
        .displayedAt()
        .theCenter();
      expect(sut).toBeInstanceOf(TestElementFactory);
      expect(sut.config.position).toEqual(CobraElementPosition.center);
    });
  });

});

function TestElement(config?: TestElementConfig) {
  return new TestElementFactory(config || {});
}
interface TestElementConfig extends CobraElementConfig {
}

class TestElementFactory extends CobraElementFactoryBase<TestElementFactory, TestElementConfig> {
  constructor(config: TestElementConfig) {
    super(config, TestElementFactory);
  }
}
