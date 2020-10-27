// const impObj = require('../src/range2.ts')
import model from '../src/range2.ts'
console.log(model)

//MODEL

describe("Тест z-index inputLeft и inputRight при перемещении мыши по слайдеру", function() {
    it("при min = 10, max = 100, sliders.width = 372.828(26vw), valueLeft = 37 и valueRight = 73 range.style.left = 30%; range.style.right = 30%", function () {
      model.setLeftValue(10,100, 37, 73)
      model.setRightValue(10,100, 37, 73)
      assert.equal(range.style.left, 30 + '%')
      assert.equal(range.style.right, 30 + '%')
    })
    it("при min = 0, max = 1500, sliders.width = 372.828(26vw), valueLeft = 200 и valueRight = 620 range.style.left = 13.3333%; range.style.right = 58.6667%", function () {
      model.setLeftValue(0,1500, 200, 620)
      model.setRightValue(0,1500, 200, 620)
      assert.equal(range.style.left, 13.3333 + '%')
      assert.equal(range.style.right, 58.6667 + '%')
    })
    it("при min = 0.5, max = 10.5, sliders.width = 372.828(26vw), valueLeft = 2 и valueRight = 4 range.style.left = 15%; range.style.right = 65%", function () {
      model.setLeftValue(0.5, 10.5, 2, 4)
      model.setRightValue(0.5, 10.5, 2, 4)
      assert.equal(range.style.left, 15 + '%')
      assert.equal(range.style.right, 65 + '%')
    })
    it("при min = 1, max = 20, sliders.width = 372.828(26vw), valueLeft = 7 и valueRight = 15 range.style.left = 31.5789%; range.style.right = 26.3158%", function () {
      model.setLeftValue(1,20, 7, 15)
      model.setRightValue(1,20, 7, 15)
      assert.equal(range.style.left, 31.5789 + '%')
      assert.equal(range.style.right, 26.3158 + '%')
    })
})
describe("Тест z-index inputLeft и inputRight при перемещении мыши по слайдеру", function() {
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

//VIEW

// describe("тест шкалы single-range", function() {
//   it("при min = 300 и max = 600 шкала имеет значения: 300, 375, 450, 525, 600", function () {
//     view.scaleSingle(300, 600)
//     assert.equal($(".first-ins").text(), 300)
//     assert.equal($(".second-ins").text(), 375)
//     assert.equal($(".third-ins").text(), 450)
//     assert.equal($(".fourth-ins").text(), 525)
//     assert.equal($(".fifth-ins").text(), 600)
//   });
//   it("при min = 0 и max = 100 шкала имеет значения: 0, 25, 50, 75, 100", function () {
//     view.scaleSingle(0, 100)
//     assert.equal($(".first-ins").text(), 0)
//     assert.equal($(".second-ins").text(), 25)
//     assert.equal($(".third-ins").text(), 50)
//     assert.equal($(".fourth-ins").text(), 75)
//     assert.equal($(".fifth-ins").text(), 100)
//   });
//   it("при min = -500 и max = 1000 шкала имеет значения: -500, -125, 250, 625, 1000", function () {
//     view.scaleSingle(-500, 1000)
//     assert.equal($(".first-ins").text(), -500)
//     assert.equal($(".second-ins").text(), -125)
//     assert.equal($(".third-ins").text(), 250)
//     assert.equal($(".fourth-ins").text(), 625)
//     assert.equal($(".fifth-ins").text(), 1000)
//   });
//   it("при min = 30 и max = 380 шкала имеет значения: 30, 117, 205, 293, 380", function () {
//     view.scaleSingle(30, 380)
//     assert.equal($(".first-ins").text(), 30)
//     assert.equal($(".second-ins").text(), 117)
//     assert.equal($(".third-ins").text(), 205)
//     assert.equal($(".fourth-ins").text(), 293)
//     assert.equal($(".fifth-ins").text(), 380)
//   });
// });

// describe("тест шкалы multi-range", function() {
//   it("при min = 300 и max = 600 шкала имеет значения: 300, 375, 450, 525, 600", function () {
//     view.scaleMulti(300, 600)
//     assert.equal($(".multi-first-ins").text(), 300)
//     assert.equal($(".multi-second-ins").text(), 375)
//     assert.equal($(".multi-third-ins").text(), 450)
//     assert.equal($(".multi-fourth-ins").text(), 525)
//     assert.equal($(".multi-fifth-ins").text(), 600)
//   });
//   it("при min = 0 и max = 100 шкала имеет значения: 0, 25, 50, 75, 100", function () {
//     view.scaleMulti(0, 100)
//     assert.equal($(".multi-first-ins").text(), 0)
//     assert.equal($(".multi-second-ins").text(), 25)
//     assert.equal($(".multi-third-ins").text(), 50)
//     assert.equal($(".multi-fourth-ins").text(), 75)
//     assert.equal($(".multi-fifth-ins").text(), 100)
//   });
//   it("при min = -500 и max = 1000 шкала имеет значения: -500, -125, 250, 625, 1000", function () {
//     view.scaleMulti(-500, 1000)
//     assert.equal($(".multi-first-ins").text(), -500)
//     assert.equal($(".multi-second-ins").text(), -125)
//     assert.equal($(".multi-third-ins").text(), 250)
//     assert.equal($(".multi-fourth-ins").text(), 625)
//     assert.equal($(".multi-fifth-ins").text(), 1000)
//   });
//   it("при min = 30 и max = 380 шкала имеет значения: 30, 117, 205, 293, 380", function () {
//     view.scaleMulti(30, 380)
//     assert.equal($(".multi-first-ins").text(), 30)
//     assert.equal($(".multi-second-ins").text(), 117)
//     assert.equal($(".multi-third-ins").text(), 205)
//     assert.equal($(".multi-fourth-ins").text(), 293)
//     assert.equal($(".multi-fifth-ins").text(), 380)
//   });
// });

// describe("тест прогресс-бара", function() {
//   it("при min = 0, max = 100 и val = 50 progress-bar width: 50%", function () {
//     view.countProgress(0, 100, 50)
//     assert.equal(progressBarWidth, 50)
//   });
//   it("при min = 44, max = 1055.5 и val = 651 progress-bar width: 60%", function () {
//     view.countProgress(44, 1055.5, 651)
//     assert.equal(Math.round(progressBarWidth), 60)
//   });
//   it("при min = 250, max = 200 и val = 60 progress-bar width: 69%", function () {
//     view.countProgress(-250, 200, 60)
//     assert.equal(Math.round(progressBarWidth), 69)
//   });
//   it("при min = 20, max = 280 и val = 215 progress-bar width: 75%", function () {
//     view.countProgress(20, 280, 215)
//     assert.equal(progressBarWidth, 75)
//   });
// });

// describe("тест расположения bubble single-range", function() {
//   it("при min = 0, max = 10 и val = 6 .bubble-single left: calc(60% + -10px)", function () {
//     view.getSingleValue(0, 10, 6)
//     assert.equal(countSinglePosition, 'calc(60% + (-10px))')
//   });
//   it("при min = 2001, max = 2020 и val = 2007 .bubble-single left: calc(31.57894736842105% + (-2.894736842105263px))", function () {
//     view.getSingleValue(2001, 2020, 2007)
//     assert.equal(countSinglePosition, 'calc(31.57894736842105% + (-2.894736842105263px))')
//   });
//   it("при min = -100, max = 100 и val = 0 .bubble-single left: calc(50% + (-7.5px))", function () {
//     view.getSingleValue(-100, 100, 0)
//     assert.equal(countSinglePosition, 'calc(50% + (-7.5px))')
//   });
//   it("при min = 1.6, max = 3759 и val = 456 .bubble-single left: calc(12.093468888060892% + (1.976632777984777px))", function () {
//     view.getSingleValue(1.6, 3759, 456)
//     assert.equal(countSinglePosition, 'calc(12.093468888060892% + (1.976632777984777px))')
//   });
// });

// describe("тест расположения bubble multi-range", function() {
//   it("при min = 0, max = 10 и val = 6 .bubble-multi-left left: calc(60% + -10px)", function () {
//     view.getLeftValue(0, 10, 6)
//     assert.equal(countMultiPosition, 'calc(60% + (-13px))')
//   });
//   it("при min = 2001, max = 2020 и val = 2007 .bubble-multi-left left: calc(31.57894736842105% + (-2.894736842105263px))", function () {
//     view.getLeftValue(2001, 2020, 2007)
//     assert.equal(countMultiPosition, 'calc(31.57894736842105% + (-11.578947368421053px))')
//   });
//   it("при min = -100, max = 100 и val = 0 .bubble-multi-right left: calc(50% + (-7.5px))", function () {
//     view.getRightValue(-100, 100, 0)
//     assert.equal(countMultiPosition, 'calc(50% + (-12.5px))')
//   });
//   it("при min = 1.6, max = 3759 и val = 456 .bubble-multi-right left: calc(12.093468888060892% + (1.976632777984777px))", function () {
//     view.getRightValue(1.6, 3759, 456)
//     assert.equal(countMultiPosition, 'calc(12.093468888060892% + (-10.604673444403044px))')
//   });
// });

// //CONTROLLER

// describe("тест добавления eventListener для multirange-slider", function() {
//   it('addEventListener при вызове controller.inTouchLeft()', function() {
//     sinon.spy(inputLeft, 'addEventListener')
//     expect(inputLeft.addEventListener.calledOnce).not.to.be.true
//     controller.inTouchLeft()
//     expect(inputLeft.addEventListener.calledOnce).to.be.true
//   })
//   it('addEventListener при вызове controller.inTouchRight()', function() {
//     sinon.spy(inputRight, 'addEventListener')
//     expect(inputRight.addEventListener.calledOnce).not.to.be.true
//     controller.inTouchRight()
//     expect(inputRight.addEventListener.calledOnce).to.be.true
//   })
//   it('addEventListener при вызове controller.inMoveLeft()', function() {
//     // sinon.spy(inputLeft, 'addEventListener')
//     expect(inputLeft.addEventListener.calledTwice).not.to.be.true
//     controller.inMoveLeft()
//     expect(inputLeft.addEventListener.calledTwice).to.be.true
//   })
//   it('addEventListener при вызове controller.inMoveRight()', function() {
//     // sinon.spy(inputRight, 'addEventListener')
//     expect(inputRight.addEventListener.calledTwice).not.to.be.true
//     controller.inMoveRight()
//     expect(inputRight.addEventListener.calledTwice).to.be.true
//   })
//   it('addEventListener при вызове controller.inGetLeft()', function() {
//     // sinon.spy(inputLeft, 'addEventListener')
//     expect(inputLeft.addEventListener.calledThrice).not.to.be.true
//     controller.inGetLeft()
//     expect(inputLeft.addEventListener.calledThrice).to.be.true
//   })
//   it('addEventListener при вызове controller.inGetRight()', function() {
//     // sinon.spy(inputRight, 'addEventListener')
//     expect(inputRight.addEventListener.calledThrice).not.to.be.true
//     controller.inGetRight()
//     expect(inputRight.addEventListener.calledThrice).to.be.true
//   })
// });
