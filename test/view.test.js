const Range = require('../src/range2.ts')
const View = Range.View
const Model = Range.Model
const Controller = Range.Controller
let view = new Range.View()
let model = new Model()
let controller = new Controller()

let test = Range.test

const sinon = require('sinon')//node.js does't work without this string 

describe("тест шкалы single-range", function() {
  it("при min = 300 и max = 600 шкала имеет значения: 300, 375, 450, 525, 600", function () {
    model.countScale(300, 600)
    controller.makeScale()
    view.setScaleSingle(300, 600)
    assert.equal($(".first-ins1").text(), 300)
    assert.equal($(".second-ins1").text(), 375)
    assert.equal($(".third-ins1").text(), 450)
    assert.equal($(".fourth-ins1").text(), 525)
    assert.equal($(".fifth-ins1").text(), 600)
  });
  it("при min = 0 и max = 100 шкала имеет значения: 0, 25, 50, 75, 100", function () {
    model.countScale(0, 100)
    controller.makeScale()
    view.setScaleSingle(0, 100)
    assert.equal($(".first-ins1").text(), 0)
    assert.equal($(".second-ins1").text(), 25)
    assert.equal($(".third-ins1").text(), 50)
    assert.equal($(".fourth-ins1").text(), 75)
    assert.equal($(".fifth-ins1").text(), 100)
  });
  it("при min = 30 и max = 380 шкала имеет значения: 30, 117, 205, 293, 380", function () {
    model.countScale(30, 380)
    controller.makeScale()
    view.setScaleSingle(30, 380)
    assert.equal($(".first-ins1").text(), 30)
    assert.equal($(".second-ins1").text(), 118)
    assert.equal($(".third-ins1").text(), 205)
    assert.equal($(".fourth-ins1").text(), 293)
    assert.equal($(".fifth-ins1").text(), 380)
  });
});
describe("тест шкалы multi-range", function() {
  it("при min = 300 и max = 600 шкала имеет значения: 300, 375, 450, 525, 600", function () {
    model.countScale(300, 600)
    controller.makeScale()
    view.setScaleMulti(300, 600)
    assert.equal($(".multi-first-ins1").text(), 300)
    assert.equal($(".multi-second-ins1").text(), 375)
    assert.equal($(".multi-third-ins1").text(), 450)
    assert.equal($(".multi-fourth-ins1").text(), 525)
    assert.equal($(".multi-fifth-ins1").text(), 600)
  });
  it("при min = 0 и max = 100 шкала имеет значения: 0, 25, 50, 75, 100", function () {
    model.countScale(0, 100)
    controller.makeScale()
    view.setScaleMulti(0, 100)
    assert.equal($(".multi-first-ins1").text(), 0)
    assert.equal($(".multi-second-ins1").text(), 25)
    assert.equal($(".multi-third-ins1").text(), 50)
    assert.equal($(".multi-fourth-ins1").text(), 75)
    assert.equal($(".multi-fifth-ins1").text(), 100)
  });
  it("при min = 30 и max = 380 шкала имеет значения: 30, 117, 205, 293, 380", function () {
    model.countScale(30, 380)
    controller.makeScale()
    view.setScaleMulti(30, 380)
    assert.equal($(".multi-first-ins1").text(), 30)
    assert.equal($(".multi-second-ins1").text(), 118)
    assert.equal($(".multi-third-ins1").text(), 205)
    assert.equal($(".multi-fourth-ins1").text(), 293)
    assert.equal($(".multi-fifth-ins1").text(), 380)
  });
});
describe("тест прогресс-бара", function() {
  it("View.progressBarWidth = Model.progressBarWidth", function () {
    view.setRange()
    assert.equal(View.progressBarWidth, Model.progressBarWidth)
  })
  it("при min = 44, max = 1055.5 и val = 651 progress-bar width: 60%", function () {
    model.countRange(44, 1055.5, 651)
    assert.equal(Math.round(Model.progressBarWidth), 60)
  });
  it("при min = 250, max = 200 и val = 60 progress-bar width: 69%", function () {
    model.countRange(-250, 200, 60)
    assert.equal(Math.round(Model.progressBarWidth), 69)
  });
  it("при min = 20, max = 280 и val = 215 progress-bar width: 75%", function () {
    model.countRange(20, 280, 215)
    assert.equal(Model.progressBarWidth, 75)
  });
});
describe("тест расположения bubble single-range", function() {
  it("View.bubblePosition = Model.countSingBubblePosition", function () {
    view.setBubbleSing()
    assert.equal(View.bubblePosition, Model.countSingBubblePosition)
  })
  it("при min = 2001, max = 2020 и val = 2007 .bubble-single left: calc(31.5789% + (-2.8947px))", function () {
    singleRange = document.querySelector(`.single-range1`)
    model.countBubble(singleRange, 2001, 2020, 2007)
    assert.equal(Model.countSingBubblePosition, 'calc(31.5789% + (-2.8947px))')
  });
  it("при min = -100, max = 100 и val = 0 .bubble-single left: calc(50.0000% + (-7.5000px))", function () {
    model.countBubble(singleRange, -100, 100, 0)
    assert.equal(Model.countSingBubblePosition, 'calc(50.0000% + (-7.5000px))')
  });
  it("при min = 1.6, max = 3759 и val = 456 .bubble-single left: calc(12.09346% + (1.9766px))", function () {
    model.countBubble(singleRange, 1.6, 3759, 456)
    assert.equal(Model.countSingBubblePosition, 'calc(12.0935% + (1.9766px))')
  });
})
describe("тест расположения bubble multi-range", function() {
  it("View.countMultiPositionLeft = Model.countBubblePosition", function () {
    view.setBubbleL()
    assert.equal(View.countMultiPositionLeft, Model.countBubblePosition)
  })
  it("при min = 2001, max = 2020 и val = 2007 .bubble-multi-left left: calc(31.57894736842105% + (-2.894736842105263px))", function () {
    inputLeft = document.querySelector(`.input-left1`)
    inputRight = document.querySelector(`.input-right1`)
    model.countBubble(inputLeft, 2001, 2020, 2007)
    assert.equal(Model.countBubblePosition, 'calc(31.5789% + (-11.5789px))')
  });
  it("View.countMultiPositionRight = Model.countBubblePosition", function () {
    view.setBubbleR()
    assert.equal(View.countMultiPositionRight, Model.countBubblePosition)
  })
  it("при min = 1.6, max = 3759 и val = 456 .bubble-multi-right left: calc(12.093468888060892% + (1.976632777984777px))", function () {
    model.countBubble(inputRight, 1.6, 3759, 456)
    assert.equal(Model.countBubblePosition, 'calc(12.0935% + (-10.6047px))')
  });
})
describe("тест расположения thumb и range multi-range", function() {
  it("thumbLeft.style.left = View.position, range.style.left = View.position", function () {
    var thumbLeft = document.querySelector(`.thumb1.left1`),
        range = document.querySelector('.range1')
    controller.makeThumbRangeInputHandlerL()
    assert.equal(thumbLeft.style.left, View.position.toFixed(4) + '%')
    assert.equal(range.style.left, View.position.toFixed(4) + '%')
  })
  it("thumbRight.style.right = View.position, range.style.right = View.position", function () {
    var thumbRight = document.querySelector(`.thumb1.right1`),
        range = document.querySelector('.range1')
    controller.makeThumbRangeInputHandlerR()
    assert.equal(thumbRight.style.right, (View.position).toFixed(4) + '%')
    assert.equal(range.style.right, (View.position).toFixed(4) + '%')
  })
})
describe("тест bindScaleBubbleRangeLeft и bindScaleBubbleRangeRight", function() {
  it("thumbLeft.style.left = View.position, range.style.left = View.position", function () {
    view.bindScaleBubbleRangeLeft()
    var thumbLeft = document.querySelector(`.thumb1.left1`),
        range = document.querySelector('.range1')
        inputLeft = document.querySelector(`.input-left1`)
    assert.equal($(`.bubble-multi-left1`).css("left"), View.countMultiPositionLeft.replace('+ (', ``).replace(')', '').replace('-', '- '))
    assert.equal($(`.value-multi-left-span1`).first().text(), inputLeft.value)
    assert.equal(thumbLeft.style.left, View.position.toFixed(4) + '%')
    assert.equal(range.style.left, View.position.toFixed(4) + '%')
  })
  it("thumbRight.style.right = View.position, range.style.right = View.position", function () {
    var thumbRight = document.querySelector(`.thumb1.right1`),
        range = document.querySelector('.range1')
        inputRight = document.querySelector(`.input-right1`)
    view.bindScaleBubbleRangeRight()
    assert.equal($(`.bubble-multi-right1`).css("left"), View.countMultiPositionRight.replace('+ (', ``).replace('-', '- ').replace(')', ''))
    assert.equal($(`.value-multi-left-span1`).first().text(), inputLeft.value)
    assert.equal(thumbRight.style.right, 0 + 'px')
    assert.equal(range.style.right, 0 + 'px')
  })
})
describe("тест bindScaleBubbleSing", function() {
  it("singleRange.value = View.valResultInsView, range.style.right = View.position", function () {
    assert.equal($(`.bubble-single1`).css("left"), View.bubblePosition.replace(')', '').replace('+ (', '+ '))
  })
})







describe("тест ширины range и значений Model.percentLeft, Model.percentRight в setLeftValue и setRightValue", function() {
  var range = document.querySelector(".slider1 > .range1")
  it("при min = 10, max = 100, sliders.width = 372.828(26vw), valueLeft = 37 и valueRight = 73 range.style.left = 30%; range.style.right = 30%", function () {
    Model.test = {min: 10, max: 100, leftVal: 37, rightVal: 73}
    model.countThumbRangeL()
    model.countThumbRangeR()
    controller.makeThumbRangeInputHandlerL()
    controller.makeThumbRangeInputHandlerR()
    
    assert.equal(Model.percentLeft, 30)
    assert.equal(Model.percentRight, 30)
    assert.equal(range.style.left, 30 + '%')
    assert.equal(range.style.right, 30 + '%')
  })
  it("при min = 0, max = 1500, sliders.width = 372.828(26vw), valueLeft = 200 и valueRight = 620 range.style.left = 13.3333%; range.style.right = 58.6667%", function () {
    Model.test = {min: 0, max: 1500, leftVal: 200, rightVal: 620}
    model.countThumbRangeL()
    model.countThumbRangeR()
    controller.makeThumbRangeInputHandlerL()
    controller.makeThumbRangeInputHandlerR()

    assert.equal(Model.percentLeft.toFixed(2), 13.33)
    assert.equal(Model.percentRight.toFixed(2), 58.67)
    assert.equal(range.style.left, 13.3333 + '%')
    assert.equal(range.style.right, 58.6667 + '%')
  })
  it("при min = 0.5, max = 10.5, sliders.width = 372.828(26vw), valueLeft = 2 и valueRight = 4 range.style.left = 15%; range.style.right = 65%", function () {
    Model.test = {min: 0.5, max: 10.5, leftVal: 2, rightVal: 4}
    model.countThumbRangeL()
    model.countThumbRangeR()
    controller.makeThumbRangeInputHandlerL()
    controller.makeThumbRangeInputHandlerR()

    assert.equal(Model.percentLeft, 15)
    assert.equal(Model.percentRight, 65)
    assert.equal(range.style.left, 15 + '%')
    assert.equal(range.style.right, 65 + '%')
  })
  it("при min = 1, max = 20, sliders.width = 372.828(26vw), valueLeft = 7 и valueRight = 15 range.style.left = 31.5789%; range.style.right = 26.3158%", function () {
    Model.test = {min: 1, max: 20, leftVal: 7, rightVal: 15}
    model.countThumbRangeL()
    model.countThumbRangeR()
    controller.makeThumbRangeInputHandlerL()
    controller.makeThumbRangeInputHandlerR()

    assert.equal(Math.floor(Model.percentLeft * 100) / 100, 31.57)
    assert.equal(Model.percentRight.toFixed(2), 26.32)
    assert.equal(range.style.left, 31.5789 + '%')
    assert.equal(range.style.right, 26.3158 + '%')
  })
})
describe("тест z-index inputLeft и inputRight при перемещении мыши по слайдеру", function() {
  inputLeft = document.querySelector(`.input-left1`)
  inputRight = document.querySelector(`.input-right1`)
  it("при min = 30, max = 380, sliders.width = 372.828, valueLeft = 117, valueRight = 380 и mousePosition = 147 inputLeft.zIndex = 2", function () {
    Model.test = {min: 30, max: 380, leftVal: 117, rightVal: 380}
    model.countTrackZindex(1, 372.828, 147)
    assert.equal(inputLeft.style.zIndex, 2)
    assert.equal(inputRight.style.zIndex, 1)
  })
  it("при min = 0, max = 55, sliders.width = 206.953, valueLeft = 5, valueRight = 25 и mousePosition = 66 inputLeft.zIndex = 1", function () {
    Model.test = {min: 0, max: 55, leftVal: 5, rightVal: 25}
    model.countTrackZindex(1, 206.953, 66)
    assert.equal(inputLeft.style.zIndex, 1)
    assert.equal(inputRight.style.zIndex, 2)
  })
  it("при min = 10, max = 100, sliders.width = 372.828, valueLeft = 20, valueRight = 50 и mousePosition = 120 inputRight.zIndex = 2", function () {
    Model.test = {min: 10, max: 100, leftVal: 20, rightVal: 50}
    model.countTrackZindex(1, 372.828, 120)
    assert.equal(inputRight.style.zIndex, 2)
    assert.equal(inputLeft.style.zIndex, 1)
  })
  it("при min = 0, max = 200, sliders.width = 372.828, valueLeft = 100, valueRight = 200 и mousePosition = 135 inputRight.zIndex = 1", function () {
    Model.test = {min: 0, max: 200, leftVal: 100, rightVal: 200}
    model.countTrackZindex(1, 372.828, 135)
    assert.equal(inputRight.style.zIndex, 1)
    assert.equal(inputLeft.style.zIndex, 2)
  })
  it("при min = 0, max = 100, sliders.width = 372.828, valueLeft = 15, valueRight = 50 и mousePosition = 235 inputLeft.zIndex = 1", function () {
    Model.test = {min: 0, max: 100, leftVal: 15, rightVal: 50}
    model.countTrackZindex(1, 372.828, 235)
    assert.equal(inputLeft.style.zIndex, 1)
    assert.equal(inputRight.style.zIndex, 2)
  })
})
describe('тест результата Model.percentLeft и Model.countMultiPositionLeft при клике на значения шкалы в model.bindScaleBubbleRangeMulti()', function() {
  it('при $(`.multi-first-ins${silderNum}`).text() = 20 и max = 280', function() {
    Model.test = {min: 20, max: 280, leftVal: 20}
    model.bindScaleBubbleRangeMulti()
    assert.equal(Model.percentLeft, 0)
    assert.equal(Model.countMultiPositionLeft, 'calc(0% + (-10px))')
  })
  it('при $(`.multi-second-ins${silderNum}`).text() = 25 и min = 0, max = 100', function() {
    Model.test = {min: 0, max: 100, leftVal: 25}
    model.bindScaleBubbleRangeMulti()
    assert.equal(Model.percentLeft, 25)
    assert.equal(Model.countMultiPositionLeft, 'calc(25% + (-11.25px))')
  })
  it('при $(`.multi-third-ins${silderNum}`).text() = 750 и min = 0, max = 1500', function() {
    Model.test = {min: 0, max: 1500, leftVal: 750}
    model.bindScaleBubbleRangeMulti()
    assert.equal(Model.percentLeft, 50)
    assert.equal(Model.countMultiPositionLeft, 'calc(50% + (-12.5px))')
  })
  it('при $(`.multi-fourth-ins${silderNum}`).text() = 275 и min = 200, max = 300', function() {
    Model.test = {min: 200, max: 300, leftVal: 275}
    model.bindScaleBubbleRangeMulti()
    assert.equal(Model.percentLeft, 75)
    assert.equal(Model.countMultiPositionLeft, 'calc(75% + (-13.75px))')
  })
  it('при $(`.multi-fifth-ins${silderNum}`).text() = 100000 и min = 20', function() {
    Model.test = {min: 20, max: 100000, leftVal: 100000}
    model.bindScaleBubbleRangeMulti()
    assert.equal(Model.percentLeft, 100)
    assert.equal(Model.countMultiPositionLeft, 'calc(100% + (-15px))')
  })
})
describe('тест результата Model.progressBarWidth при клике на значения шкалы в model.bindScaleBubbleRangeSing()', function() {
  it('при $(`.multi-first-ins${silderNum}`).text() = 20 и max = 280', function() {
    model.bindScaleBubbleRangeSing(20, 280, 20)
    assert.equal(Model.progressBarWidth, 0)
  })
  it('при $(`.multi-second-ins${silderNum}`).text() = 25 и min = 0, max = 100', function() {
    model.bindScaleBubbleRangeSing(0, 100, 25)
    assert.equal(Model.progressBarWidth, 25)
  })
  it('при $(`.multi-third-ins${silderNum}`).text() = 750 и min = 0, max = 1500', function() {
    model.bindScaleBubbleRangeSing(0, 1500, 750)
    assert.equal(Model.progressBarWidth, 50)
  })
  it('при $(`.multi-fourth-ins${silderNum}`).text() = 275 и min = 200, max = 300', function() {
    model.bindScaleBubbleRangeSing(200, 300, 275)
    assert.equal(Model.progressBarWidth, 75)
  })
  it('при $(`.multi-fifth-ins${silderNum}`).text() = 100000 и min = 20', function() {
    model.bindScaleBubbleRangeSing(20, 100000, 100000)
    assert.equal(Model.progressBarWidth, 100)
  })
})
describe('тест результата Model.insCountSinglePosition при клике на значения шкалы в model.bindScaleBubbleRangeSing()', function() {
  it('при $(`.multi-first-ins${silderNum}`).text() = 20 и max = 280', function() {
    model.bindScaleBubbleRangeSing(20, 280, 20)
    assert.equal(Model.insCountSinglePosition, 'calc(0% + (5px))')
  })
  it('при $(`.multi-second-ins${silderNum}`).text() = 25 и min = 0, max = 100', function() {
    model.bindScaleBubbleRangeSing(0, 100, 25)
    assert.equal(Model.insCountSinglePosition, 'calc(25% + (-1.25px))')
  })
  it('при $(`.multi-third-ins${silderNum}`).text() = 750 и min = 0, max = 1500', function() {
    model.bindScaleBubbleRangeSing(0, 1500, 750)
    assert.equal(Model.insCountSinglePosition, 'calc(50% + (-7.5px))')
  })
  it('при $(`.multi-fourth-ins${silderNum}`).text() = 275 и min = 200, max = 300', function() {
    model.bindScaleBubbleRangeSing(200, 300, 275)
    assert.equal(Model.insCountSinglePosition, 'calc(75% + (-13.75px))')
  })
  it('при $(`.multi-fifth-ins${silderNum}`).text() = 100000 и min = 20', function() {
    model.bindScaleBubbleRangeSing(20, 100000, 100000)
    assert.equal(Model.insCountSinglePosition, 'calc(100% + (-20px))')
  })
})







describe("тест добавления eventListener для multirange-slider", function() {
  inputLeft = document.querySelector(".input-left1")
  inputRight = document.querySelector(".input-right1")
  it('addEventListener при вызове controller.inTouchLeft()', function() {
    sinon.spy(inputLeft, 'addEventListener')
    expect(inputLeft.addEventListener.calledOnce).not.to.be.true
    controller.makeThumbRangeInputHandlerL()
    expect(inputLeft.addEventListener.calledOnce).to.be.true
  })
  it('addEventListener при вызове controller.inTouchRight()', function() {
    sinon.spy(inputRight, 'addEventListener')
    expect(inputRight.addEventListener.calledOnce).not.to.be.true
    controller.makeThumbRangeInputHandlerR()
    expect(inputRight.addEventListener.calledOnce).to.be.true
  })
  it('addEventListener при вызове controller.inMoveLeft()', function() {
    expect(inputLeft.addEventListener.calledTwice).not.to.be.true
    controller.makeTrackZindexMousemoveHandlerL()
    expect(inputLeft.addEventListener.calledTwice).to.be.true
  })
  it('addEventListener при вызове controller.inMoveRight()', function() {
    expect(inputRight.addEventListener.calledTwice).not.to.be.true
    controller.makeTrackZindexMousemoveHandlerR()
    expect(inputRight.addEventListener.calledTwice).to.be.true
  })
})
describe("тест .on в контроллере", function() {
  inputLeft = document.querySelector(".input-left1")
  inputRight = document.querySelector(".input-right1")
  it('при controller.inInsCatchInputLR() и клике по шкале View.countMultiPositionLeft = Model.countMultiPositionLeft, View.position = Model.percentLeft, View.countMultiPositionRight = Model.countMultiPositionRight', function() {
    // var spy = sinon.spy(model, 'bindScaleBubbleRangeMulti')
    // controller.inInsCatchInputLR()
    // model.bindScaleBubbleRangeMulti()
    $(`.multi-first-ins1, .multi-second-ins1, .multi-third-ins1, .multi-fourth-ins1, .multi-fifth-ins1`).trigger('click')
    // expect(model.bindScaleBubbleRangeMulti.called).to.be.true
    // sinon.assert.called(spy)
    assert.equal(View.countMultiPositionLeft, Model.countMultiPositionLeft)
    assert.equal(View.position, Model.percentLeft)
    assert.equal(View.countMultiPositionRight, Model.countMultiPositionRight)
  })
  it('при controller.inMultiBubble() и взаимодействии с input View.countMultiPositionLeft = Model.countBubblePosition, View.countMultiPositionRight = Model.countBubblePosition', function() {
    var spy = sinon.spy(model, 'bubbleCount')
    // const spy = sinon.stub(model, 'bubbleCount')
    controller.inMultiBubble()
    $(inputLeft).trigger('input')
    sinon.assert.called(spy)

    // spy.callsFake(() => {
    //   sinon.assert.calledOnce(spy)
    //   done()
    // })

    // $(inputLeft).trigger('input')
    // $(inputRight).trigger('input')
    // assert.equal(View.countMultiPositionLeft, Model.countBubblePosition)
    // assert.equal(View.countMultiPositionRight, Model.countBubblePosition)
  })
})