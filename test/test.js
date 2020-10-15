// describe("тест шкалы", function() {
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

describe("тест расположения bubble", function() {
  it("при min = 0, max = 10 и val = 6 .bubble-single left: calc(60% + -10px)", function () {
    view.newValueFunc(0, 10, 6)
    $(".bubble-single").css('left', countPosition)
    assert.equal(view.countPosition, 'calc(60% + -10px)')
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