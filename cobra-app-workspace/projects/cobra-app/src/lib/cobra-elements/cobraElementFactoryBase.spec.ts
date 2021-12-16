import {CobraElementFactoryBase} from "./cobraElementFactoryBase";
import {DisplayedAtFactory} from "./displayedAtFactory";
import {CobraElementConfig} from "./cobraElementConfig";
import {CobraElementPosition} from "./cobraElementPosition";
import {CobraElementBase} from "./cobraElementBase";

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

  describe("addCss", () => {
    it("should return the correct type", () => {
      const sut = TestElement({})
        .addCss("")
      expect(sut).toBeInstanceOf(TestElementFactory);

    });

    it("should add the css config", () => {
      const sut = TestElement({})
        .addCss("height: 10px;");
      expect(sut).toBeInstanceOf(TestElementFactory);
      expect(sut.config.styles).toEqual("height: 10px;");
    });

    it("should concat multiple css configs", () => {
      const sut = TestElement({})
        .addCss("height: 10px;")
        .addCss("width: 12px;");
      expect(sut).toBeInstanceOf(TestElementFactory);
      expect(sut.config.styles).toEqual("width: 12px;height: 10px;");
    });



  });

});

function TestElement(config?: TestElementConfig) {
  return new TestElementFactory(config || {});
}
interface TestElementConfig extends CobraElementConfig {
}

class TestElementDefinition extends CobraElementBase<TestElementConfig> {

}

class TestElementFactory extends CobraElementFactoryBase<TestElementDefinition, TestElementConfig, TestElementFactory> {
  constructor(config: TestElementConfig) {
    super(config, TestElementFactory);
  }
}
