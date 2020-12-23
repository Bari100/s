const Range = require('../src/range2.ts')
const View = Range.View
const Model = Range.Model
const Controller = Range.Controller
let view = new Range.View()
let model = new Model()
let controller = new Controller()

const sinon = require('sinon')//node.js does't work without this string 

describe("тест шкалы single-range", function() {
  it("при min = 300 и max = 600 шкала имеет значения: 300, 375, 450, 525, 600", function () {
    view.scaleSingle(300, 600)
    assert.equal($(".first-ins1").text(), 300)
    assert.equal($(".second-ins1").text(), 375)
    assert.equal($(".third-ins1").text(), 450)
    assert.equal($(".fourth-ins1").text(), 525)
    assert.equal($(".fifth-ins1").text(), 600)
  });
  it("при min = 0 и max = 100 шкала имеет значения: 0, 25, 50, 75, 100", function () {
    view.scaleSingle(0, 100)
    assert.equal($(".first-ins1").text(), 0)
    assert.equal($(".second-ins1").text(), 25)
    assert.equal($(".third-ins1").text(), 50)
    assert.equal($(".fourth-ins1").text(), 75)
    assert.equal($(".fifth-ins1").text(), 100)
  });
  it("при min = -500 и max = 1000 шкала имеет значения: -500, -125, 250, 625, 1000", function () {
    view.scaleSingle(-500, 1000)
    assert.equal($(".first-ins1").text(), -500)
    assert.equal($(".second-ins1").text(), -125)
    assert.equal($(".third-ins1").text(), 250)
    assert.equal($(".fourth-ins1").text(), 625)
    assert.equal($(".fifth-ins1").text(), 1000)
  });
  it("при min = 30 и max = 380 шкала имеет значения: 30, 117, 205, 293, 380", function () {
    view.scaleSingle(30, 380)
    assert.equal($(".first-ins1").text(), 30)
    assert.equal($(".second-ins1").text(), 117)
    assert.equal($(".third-ins1").text(), 205)
    assert.equal($(".fourth-ins1").text(), 293)
    assert.equal($(".fifth-ins1").text(), 380)
  });
});

describe("тест шкалы multi-range", function() {
  it("при min = 300 и max = 600 шкала имеет значения: 300, 375, 450, 525, 600", function () {
    view.scaleMulti(300, 600)
    assert.equal($(".multi-first-ins1").text(), 300)
    assert.equal($(".multi-second-ins1").text(), 375)
    assert.equal($(".multi-third-ins1").text(), 450)
    assert.equal($(".multi-fourth-ins1").text(), 525)
    assert.equal($(".multi-fifth-ins1").text(), 600)
  });
  it("при min = 0 и max = 100 шкала имеет значения: 0, 25, 50, 75, 100", function () {
    view.scaleMulti(0, 100)
    assert.equal($(".multi-first-ins1").text(), 0)
    assert.equal($(".multi-second-ins1").text(), 25)
    assert.equal($(".multi-third-ins1").text(), 50)
    assert.equal($(".multi-fourth-ins1").text(), 75)
    assert.equal($(".multi-fifth-ins1").text(), 100)
  });
  it("при min = -500 и max = 1000 шкала имеет значения: -500, -125, 250, 625, 1000", function () {
    view.scaleMulti(-500, 1000)
    assert.equal($(".multi-first-ins1").text(), -500)
    assert.equal($(".multi-second-ins1").text(), -125)
    assert.equal($(".multi-third-ins1").text(), 250)
    assert.equal($(".multi-fourth-ins1").text(), 625)
    assert.equal($(".multi-fifth-ins1").text(), 1000)
  });
  it("при min = 30 и max = 380 шкала имеет значения: 30, 117, 205, 293, 380", function () {
    view.scaleMulti(30, 380)
    assert.equal($(".multi-first-ins1").text(), 30)
    assert.equal($(".multi-second-ins1").text(), 117)
    assert.equal($(".multi-third-ins1").text(), 205)
    assert.equal($(".multi-fourth-ins1").text(), 293)
    assert.equal($(".multi-fifth-ins1").text(), 380)
  });
});

describe("тест прогресс-бара", function() {
  it("View.progressBarWidth = Model.progressBarWidth", function () {
    view.countProgress()
    assert.equal(View.progressBarWidth, Model.progressBarWidth)
  })
  it("при min = 44, max = 1055.5 и val = 651 progress-bar width: 60%", function () {
    model.countProgress(44, 1055.5, 651)
    assert.equal(Math.round(Model.progressBarWidth), 60)
  });
  it("при min = 250, max = 200 и val = 60 progress-bar width: 69%", function () {
    model.countProgress(-250, 200, 60)
    assert.equal(Math.round(Model.progressBarWidth), 69)
  });
  it("при min = 20, max = 280 и val = 215 progress-bar width: 75%", function () {
    model.countProgress(20, 280, 215)
    assert.equal(Model.progressBarWidth, 75)
  });
});

describe("тест расположения bubble single-range", function() {
  it("View.bubblePosition = Model.countSingBubblePosition", function () {
    view.getSingleValue()
    assert.equal(View.bubblePosition, Model.countSingBubblePosition)
  })
  it("при min = 2001, max = 2020 и val = 2007 .bubble-single left: calc(31.57894736842105% + (-2.894736842105263px))", function () {
    singleRange = document.querySelector(`.single-range1`)
    model.bubbleCount(singleRange, 2001, 2020, 2007)
    assert.equal(Model.countSingBubblePosition, 'calc(31.57894736842105% + (-2.894736842105263px))')
  });
  it("при min = -100, max = 100 и val = 0 .bubble-single left: calc(50% + (-7.5px))", function () {
    model.bubbleCount(singleRange, -100, 100, 0)
    assert.equal(Model.countSingBubblePosition, 'calc(50% + (-7.5px))')
  });
  it("при min = 1.6, max = 3759 и val = 456 .bubble-single left: calc(12.093468888060892% + (1.976632777984777px))", function () {
    model.bubbleCount(singleRange, 1.6, 3759, 456)
    assert.equal(Model.countSingBubblePosition, 'calc(12.093468888060892% + (1.976632777984777px))')
  });
})

describe("тест расположения bubble multi-range", function() {
  it("View.countMultiPositionLeft = Model.countBubblePosition", function () {
    view.getLeftValue()
    assert.equal(View.countMultiPositionLeft, Model.countBubblePosition)
  })
  it("при min = 2001, max = 2020 и val = 2007 .bubble-multi-left left: calc(31.57894736842105% + (-2.894736842105263px))", function () {
    inputLeft = document.querySelector(`.input-left1`)
    inputRight = document.querySelector(`.input-right1`)
    model.bubbleCount(inputLeft, 2001, 2020, 2007)
    assert.equal(Model.countBubblePosition, 'calc(31.57894736842105% + (-11.578947368421053px))')
  });
  it("View.countMultiPositionRight = Model.countBubblePosition", function () {
    view.getRightValue()
    assert.equal(View.countMultiPositionRight, Model.countBubblePosition)
  })
  it("при min = 1.6, max = 3759 и val = 456 .bubble-multi-right left: calc(12.093468888060892% + (1.976632777984777px))", function () {
    model.bubbleCount(inputRight, 1.6, 3759, 456)
    assert.equal(Model.countBubblePosition, 'calc(12.093468888060892% + (-10.604673444403044px))')
  });
})







describe("тест ширины range и значений Model.percentLeft, Model.percentRight", function() {
  var range = document.querySelector(".slider1 > .range1")
  it("при min = 10, max = 100, sliders.width = 372.828(26vw), valueLeft = 37 и valueRight = 73 range.style.left = 30%; range.style.right = 30%", function () {
    model.setLeftValue(10,100, 37, 73)
    model.setRightValue(10,100, 37, 73)
    controller.inTouchLeft()
    controller.inTouchRight()
    
    assert.equal(Model.percentLeft, 30)
    assert.equal(Model.percentRight, 70)
    assert.equal(range.style.left, 30 + '%')
    assert.equal(range.style.right, 30 + '%')
  })
  it("при min = 0, max = 1500, sliders.width = 372.828(26vw), valueLeft = 200 и valueRight = 620 range.style.left = 13.3333%; range.style.right = 58.6667%", function () {
    model.setLeftValue(0,1500, 200, 620)
    model.setRightValue(0,1500, 200, 620)
    controller.inTouchLeft()
    controller.inTouchRight()

    assert.equal(Math.floor(Model.percentLeft * 100) / 100, 13.33)
    assert.equal(Math.floor(Model.percentRight * 100) / 100, 41.33)
    assert.equal(range.style.left, 13.3333 + '%')
    assert.equal(range.style.right, 58.6667 + '%')
  })
  it("при min = 0.5, max = 10.5, sliders.width = 372.828(26vw), valueLeft = 2 и valueRight = 4 range.style.left = 15%; range.style.right = 65%", function () {
    model.setLeftValue(0.5, 10.5, 2, 4)
    model.setRightValue(0.5, 10.5, 2, 4)
    controller.inTouchLeft()
    controller.inTouchRight()

    assert.equal(Model.percentLeft, 15)
    assert.equal(Model.percentRight, 35)
    assert.equal(range.style.left, 15 + '%')
    assert.equal(range.style.right, 65 + '%')
  })
  it("при min = 1, max = 20, sliders.width = 372.828(26vw), valueLeft = 7 и valueRight = 15 range.style.left = 31.5789%; range.style.right = 26.3158%", function () {
    model.setLeftValue(1,20, 7, 15)
    model.setRightValue(1,20, 7, 15)
    controller.inTouchLeft()
    controller.inTouchRight()

    assert.equal(Math.floor(Model.percentLeft * 100) / 100, 31.57)
    assert.equal(Math.floor(Model.percentRight * 100) / 100, 73.68)
    assert.equal(range.style.left, 31.5789 + '%')
    assert.equal(range.style.right, 26.3158 + '%')
  })
})
describe("тест z-index inputLeft и inputRight при перемещении мыши по слайдеру", function() {
  inputLeft = document.querySelector(`.input-left1`)
  inputRight = document.querySelector(`.input-right1`)
  it("при min = 30, max = 380, sliders.width = 372.828, valueLeft = 117, valueRight = 380 и mousePosition = 147 inputLeft.zIndex = 2", function () {
    model.MouseMove(1, 30, 380, 372.828, 117, 380, 147)
    assert.equal(inputLeft.style.zIndex, 2)
    assert.equal(inputRight.style.zIndex, 1)
  });
  it("при min = 0, max = 55, sliders.width = 206.953, valueLeft = 5, valueRight = 25 и mousePosition = 66 inputLeft.zIndex = 1", function () {
    model.MouseMove(1, 0, 55, 206.953, 5, 25, 66)
    assert.equal(inputLeft.style.zIndex, 1)
    assert.equal(inputRight.style.zIndex, 2)
  });
  it("при min = 10, max = 100, sliders.width = 372.828, valueLeft = 20, valueRight = 50 и mousePosition = 120 inputRight.zIndex = 2", function () {
    model.MouseMove(1, 10, 100, 372.828, 20, 50, 120)
    assert.equal(inputRight.style.zIndex, 2)
    assert.equal(inputLeft.style.zIndex, 1)
  });
  it("при min = 0, max = 200, sliders.width = 372.828, valueLeft = 100, valueRight = 200 и mousePosition = 135 inputRight.zIndex = 1", function () {
    model.MouseMove(1, 0, 200, 372.828, 100, 200, 135)
    assert.equal(inputRight.style.zIndex, 1)
    assert.equal(inputLeft.style.zIndex, 2)
  });
  it("при min = 0, max = 100, sliders.width = 372.828, valueLeft = 15, valueRight = 50 и mousePosition = 235 inputLeft.zIndex = 1", function () {
    model.MouseMove(1, 0, 100, 372.828, 15, 50, 235)
    assert.equal(inputLeft.style.zIndex, 1)
    assert.equal(inputRight.style.zIndex, 2)
  });
});







describe("тест добавления eventListener для multirange-slider", function() {
  inputLeft = document.querySelector(".input-left1")
  inputRight = document.querySelector(".input-right1")
  it('addEventListener при вызове controller.inTouchLeft()', function() {
    sinon.spy(inputLeft, 'addEventListener')
    expect(inputLeft.addEventListener.calledOnce).not.to.be.true
    controller.inTouchLeft()
    expect(inputLeft.addEventListener.calledOnce).to.be.true
  })
  it('addEventListener при вызове controller.inTouchRight()', function() {
    sinon.spy(inputRight, 'addEventListener')
    expect(inputRight.addEventListener.calledOnce).not.to.be.true
    controller.inTouchRight()
    expect(inputRight.addEventListener.calledOnce).to.be.true
  })
  it('addEventListener при вызове controller.inMoveLeft()', function() {
    expect(inputLeft.addEventListener.calledTwice).not.to.be.true
    controller.inMoveLeft()
    expect(inputLeft.addEventListener.calledTwice).to.be.true
  })
  it('addEventListener при вызове controller.inMoveRight()', function() {
    expect(inputRight.addEventListener.calledTwice).not.to.be.true
    controller.inMoveRight()
    expect(inputRight.addEventListener.calledTwice).to.be.true
  })
  // it('addEventListener при вызове controller.inGetLeft()', function() {
  //   // sinon.spy(inputLeft, 'addEventListener')
  //   expect(inputLeft.addEventListener.calledThrice).not.to.be.true
  //   controller.inGetLeft()
  //   expect(inputLeft.addEventListener.calledThrice).to.be.true
  // })
  // it('addEventListener при вызове controller.inGetRight()', function() {
  //   // sinon.spy(inputRight, 'addEventListener')
  //   expect(inputRight.addEventListener.calledThrice).not.to.be.true
  //   controller.inGetRight()
  //   expect(inputRight.addEventListener.calledThrice).to.be.true
  // })
})