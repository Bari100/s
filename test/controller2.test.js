
const Сontroller = require('../src/range2.ts')
let controller = new Сontroller()
const sinon = require('sinon')//node.js does't work without this string 

//CONTROLLER

describe("тест добавления eventListener для multirange-slider", function() {
  var inputLeft = document.querySelector(".input-left1"),
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
    // sinon.spy(inputLeft, 'addEventListener')
    expect(inputLeft.addEventListener.calledTwice).not.to.be.true
    controller.inMoveLeft()
    expect(inputLeft.addEventListener.calledTwice).to.be.true
  })
  it('addEventListener при вызове controller.inMoveRight()', function() {
    // sinon.spy(inputRight, 'addEventListener')
    expect(inputRight.addEventListener.calledTwice).not.to.be.true
    controller.inMoveRight()
    expect(inputRight.addEventListener.calledTwice).to.be.true
  })
  it('addEventListener при вызове controller.inGetLeft()', function() {
    // sinon.spy(inputLeft, 'addEventListener')
    expect(inputLeft.addEventListener.calledThrice).not.to.be.true
    controller.inGetLeft()
    expect(inputLeft.addEventListener.calledThrice).to.be.true
  })
  it('addEventListener при вызове controller.inGetRight()', function() {
    // sinon.spy(inputRight, 'addEventListener')
    expect(inputRight.addEventListener.calledThrice).not.to.be.true
    controller.inGetRight()
    expect(inputRight.addEventListener.calledThrice).to.be.true
  })
});