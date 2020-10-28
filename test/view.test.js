const View = require('../src/range2.ts')
let view = new View()

// VIEW

describe("тест шкалы single-range", function() {
  it("при min = 300 и max = 600 шкала имеет значения: 300, 375, 450, 525, 600", function () {
    view.scaleSingle(300, 600)
    assert.equal($(".first-ins").text(), 300)
    assert.equal($(".second-ins").text(), 375)
    assert.equal($(".third-ins").text(), 450)
    assert.equal($(".fourth-ins").text(), 525)
    assert.equal($(".fifth-ins").text(), 600)
  });
  it("при min = 0 и max = 100 шкала имеет значения: 0, 25, 50, 75, 100", function () {
    view.scaleSingle(0, 100)
    assert.equal($(".first-ins").text(), 0)
    assert.equal($(".second-ins").text(), 25)
    assert.equal($(".third-ins").text(), 50)
    assert.equal($(".fourth-ins").text(), 75)
    assert.equal($(".fifth-ins").text(), 100)
  });
  it("при min = -500 и max = 1000 шкала имеет значения: -500, -125, 250, 625, 1000", function () {
    view.scaleSingle(-500, 1000)
    assert.equal($(".first-ins").text(), -500)
    assert.equal($(".second-ins").text(), -125)
    assert.equal($(".third-ins").text(), 250)
    assert.equal($(".fourth-ins").text(), 625)
    assert.equal($(".fifth-ins").text(), 1000)
  });
  it("при min = 30 и max = 380 шкала имеет значения: 30, 117, 205, 293, 380", function () {
    view.scaleSingle(30, 380)
    assert.equal($(".first-ins").text(), 30)
    assert.equal($(".second-ins").text(), 117)
    assert.equal($(".third-ins").text(), 205)
    assert.equal($(".fourth-ins").text(), 293)
    assert.equal($(".fifth-ins").text(), 380)
  });
});

describe("тест шкалы multi-range", function() {
  it("при min = 300 и max = 600 шкала имеет значения: 300, 375, 450, 525, 600", function () {
    view.scaleMulti(300, 600)
    assert.equal($(".multi-first-ins").text(), 300)
    assert.equal($(".multi-second-ins").text(), 375)
    assert.equal($(".multi-third-ins").text(), 450)
    assert.equal($(".multi-fourth-ins").text(), 525)
    assert.equal($(".multi-fifth-ins").text(), 600)
  });
  it("при min = 0 и max = 100 шкала имеет значения: 0, 25, 50, 75, 100", function () {
    view.scaleMulti(0, 100)
    assert.equal($(".multi-first-ins").text(), 0)
    assert.equal($(".multi-second-ins").text(), 25)
    assert.equal($(".multi-third-ins").text(), 50)
    assert.equal($(".multi-fourth-ins").text(), 75)
    assert.equal($(".multi-fifth-ins").text(), 100)
  });
  it("при min = -500 и max = 1000 шкала имеет значения: -500, -125, 250, 625, 1000", function () {
    view.scaleMulti(-500, 1000)
    assert.equal($(".multi-first-ins").text(), -500)
    assert.equal($(".multi-second-ins").text(), -125)
    assert.equal($(".multi-third-ins").text(), 250)
    assert.equal($(".multi-fourth-ins").text(), 625)
    assert.equal($(".multi-fifth-ins").text(), 1000)
  });
  it("при min = 30 и max = 380 шкала имеет значения: 30, 117, 205, 293, 380", function () {
    view.scaleMulti(30, 380)
    assert.equal($(".multi-first-ins").text(), 30)
    assert.equal($(".multi-second-ins").text(), 117)
    assert.equal($(".multi-third-ins").text(), 205)
    assert.equal($(".multi-fourth-ins").text(), 293)
    assert.equal($(".multi-fifth-ins").text(), 380)
  });
});

describe("тест прогресс-бара", function() {
  it("при min = 0, max = 100 и val = 50 progress-bar width: 50%", function () {
    view.countProgress(0, 100, 50)
    assert.equal(progressBarWidth, 50)
  });
  it("при min = 44, max = 1055.5 и val = 651 progress-bar width: 60%", function () {
    view.countProgress(44, 1055.5, 651)
    assert.equal(Math.round(progressBarWidth), 60)
  });
  it("при min = 250, max = 200 и val = 60 progress-bar width: 69%", function () {
    view.countProgress(-250, 200, 60)
    assert.equal(Math.round(progressBarWidth), 69)
  });
  it("при min = 20, max = 280 и val = 215 progress-bar width: 75%", function () {
    view.countProgress(20, 280, 215)
    assert.equal(progressBarWidth, 75)
  });
});

describe("тест расположения bubble single-range", function() {
  it("при min = 0, max = 10 и val = 6 .bubble-single left: calc(60% + -10px)", function () {
    view.getSingleValue(0, 10, 6)
    assert.equal(countSinglePosition, 'calc(60% + (-10px))')
  });
  it("при min = 2001, max = 2020 и val = 2007 .bubble-single left: calc(31.57894736842105% + (-2.894736842105263px))", function () {
    view.getSingleValue(2001, 2020, 2007)
    assert.equal(countSinglePosition, 'calc(31.57894736842105% + (-2.894736842105263px))')
  });
  it("при min = -100, max = 100 и val = 0 .bubble-single left: calc(50% + (-7.5px))", function () {
    view.getSingleValue(-100, 100, 0)
    assert.equal(countSinglePosition, 'calc(50% + (-7.5px))')
  });
  it("при min = 1.6, max = 3759 и val = 456 .bubble-single left: calc(12.093468888060892% + (1.976632777984777px))", function () {
    view.getSingleValue(1.6, 3759, 456)
    assert.equal(countSinglePosition, 'calc(12.093468888060892% + (1.976632777984777px))')
  });
});

describe("тест расположения bubble multi-range", function() {
  it("при min = 0, max = 10 и val = 6 .bubble-multi-left left: calc(60% + -10px)", function () {
    view.getLeftValue(0, 10, 6)
    assert.equal(countMultiPosition, 'calc(60% + (-13px))')
  });
  it("при min = 2001, max = 2020 и val = 2007 .bubble-multi-left left: calc(31.57894736842105% + (-2.894736842105263px))", function () {
    view.getLeftValue(2001, 2020, 2007)
    assert.equal(countMultiPosition, 'calc(31.57894736842105% + (-11.578947368421053px))')
  });
  it("при min = -100, max = 100 и val = 0 .bubble-multi-right left: calc(50% + (-7.5px))", function () {
    view.getRightValue(-100, 100, 0)
    assert.equal(countMultiPosition, 'calc(50% + (-12.5px))')
  });
  it("при min = 1.6, max = 3759 и val = 456 .bubble-multi-right left: calc(12.093468888060892% + (1.976632777984777px))", function () {
    view.getRightValue(1.6, 3759, 456)
    assert.equal(countMultiPosition, 'calc(12.093468888060892% + (-10.604673444403044px))')
  });
});