// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/range2.ts":[function(require,module,exports) {
(function ($) {
  $.fn.rangeSliders = function (options) {
    var settings = $.extend({
      "step": 1,
      "vertical": false,
      "multirange": false,
      "bubbles": true,
      "width": 26,
      "min": 20,
      "max": 280
    }, options);
    return this.each(function () {
      //     let settings = { ///DELETE THIS
      // 	"step": 1,
      // 	"vertical": false,
      // 	"multirange": true,
      // 	"bubbles": true,
      // 	"width": 26,
      // 	"min": 10,
      // 	"max": 100
      //   };///DELETE THIS
      var sliders = document.querySelector(".sliders"),
          radioMulti = document.querySelector(".choose-multi");
      var sliderSingle = $('<div>', {
        'class': 'slider-single'
      });
      $(sliders).append(sliderSingle);
      var bubbleSingle = $('<div>', {
        'class': 'bubble-single'
      });
      $(sliderSingle).append(bubbleSingle);
      var valueSingleSpan = $('<span>', {
        'class': 'value-single-span'
      });
      $(bubbleSingle).append(valueSingleSpan);
      var singleRange = $('<input>', {
        'id': 'single-range',
        'type': 'range',
        'min': '50',
        'max': '250',
        'value': '100'
      });
      $(sliderSingle).append(singleRange);
      $(sliderSingle).append($('<div>', {
        'class': 'progress-bar'
      }));
      var scaleSingle = $('<div>', {
        'class': 'scale'
      });
      $(sliderSingle).append(scaleSingle);
      var spanScaleSingle1 = $('<span>', {
        'style': 'left: 0%'
      });
      $(scaleSingle).append(spanScaleSingle1);
      $(spanScaleSingle1).append($('<ins>', {
        'class': 'first-ins'
      }));
      var spanScaleSingle2 = $('<span>', {
        'class': 'second',
        'style': 'left: 25%'
      });
      $(scaleSingle).append(spanScaleSingle2);
      $(spanScaleSingle2).append($('<ins>', {
        'class': 'second-ins'
      }));
      var spanScaleSingle3 = $('<span>', {
        'class': 'third',
        'style': 'left: 49%'
      });
      $(scaleSingle).append(spanScaleSingle3);
      $(spanScaleSingle3).append($('<ins>', {
        'class': 'third-ins'
      }));
      var spanScaleSingle4 = $('<span>', {
        'class': 'fourth',
        'style': 'left: 73%'
      });
      $(scaleSingle).append(spanScaleSingle4);
      $(spanScaleSingle4).append($('<ins>', {
        'class': 'fourth-ins'
      }));
      var spanScaleSingle5 = $('<span>', {
        'style': 'left: 95%'
      });
      $(scaleSingle).append(spanScaleSingle5);
      $(spanScaleSingle5).append($('<ins>', {
        'class': 'fifth-ins'
      }));
      var singleRange = document.getElementById("single-range");
      var multiRangeSlider = $('<div>', {
        'class': 'multi-range-slider'
      });
      $(sliders).append(multiRangeSlider);
      var bubbleMultiLeft = $('<div>', {
        'class': 'bubble-multi-left'
      });
      $(multiRangeSlider).append(bubbleMultiLeft);
      var valueMultiLeftSpan = $('<span>', {
        'class': 'value-multi-left-span'
      });
      $(bubbleMultiLeft).append(valueMultiLeftSpan);
      var bubbleMultiRight = $('<div>', {
        'class': 'bubble-multi-right'
      });
      $(multiRangeSlider).append(bubbleMultiRight);
      var valueMultiRightSpan = $('<span>', {
        'class': 'value-multi-right-span'
      });
      $(bubbleMultiRight).append(valueMultiRightSpan);
      var inputLeft = $('<input>', {
        'id': 'input-left',
        'type': 'range',
        'min': '50',
        'max': '250',
        'value': '100'
      });
      var inputRight = $('<input>', {
        'id': 'input-right',
        'type': 'range',
        'min': '50',
        'max': '250',
        'value': '100'
      });
      $(multiRangeSlider).append(inputLeft);
      $(multiRangeSlider).append(inputRight);
      var slider = $('<div>', {
        'class': 'slider'
      });
      $(multiRangeSlider).append(slider);
      $(slider).append($('<div>', {
        'class': 'track'
      }));
      $(slider).append($('<div>', {
        'class': 'range'
      }));
      $(slider).append($('<div>', {
        'class': 'thumb left'
      }));
      $(slider).append($('<div>', {
        'class': 'thumb right'
      }));
      var multiScale = $('<div>', {
        'class': 'multi-scale'
      });
      $(multiRangeSlider).append(multiScale);
      var spanMultiScale1 = $('<span>', {
        'style': 'left: 0%'
      });
      $(multiScale).append(spanMultiScale1);
      $(spanMultiScale1).append($('<ins>', {
        'class': 'multi-first-ins'
      }));
      var spanMultiScale2 = $('<span>', {
        'class': 'second',
        'style': 'left: 25%'
      });
      $(multiScale).append(spanMultiScale2);
      $(spanMultiScale2).append($('<ins>', {
        'class': 'multi-second-ins'
      }));
      var spanMultiScale3 = $('<span>', {
        'class': 'third',
        'style': 'left: 49%'
      });
      $(multiScale).append(spanMultiScale3);
      $(spanMultiScale3).append($('<ins>', {
        'class': 'multi-third-ins'
      }));
      var spanMultiScale4 = $('<span>', {
        'class': 'fourth',
        'style': 'left: 73%'
      });
      $(multiScale).append(spanMultiScale4);
      $(spanMultiScale4).append($('<ins>', {
        'class': 'multi-fourth-ins'
      }));
      var spanMultiScale5 = $('<span>', {
        'style': 'left: 95%'
      });
      $(multiScale).append(spanMultiScale5);
      $(spanMultiScale5).append($('<ins>', {
        'class': 'multi-fifth-ins'
      }));
      var range = document.querySelector(".slider > .range"),
          thumbLeft = document.querySelector(".slider > .thumb.left"),
          thumbRight = document.querySelector(".slider > .thumb.right"),
          inputLeft = document.getElementById("input-left"),
          inputRight = document.getElementById("input-right"); //*-DEMO-* ФУНКЦИЯ ВЫБОРА SINGLE ИЛИ MULTIRANGE

      $("input[type='radio']").change(function () {
        if ($(radioMulti).prop("checked")) {
          $(sliderSingle).hide();
          $(".multi-range-slider").show();
        } else {
          $(sliderSingle).show();
          $(".multi-range-slider").hide();
        }
      }); //ИЗМЕНЕНИЕ ПОЛОЖЕНИЯ (ВЕРТИКАЛЬ) И ИЗМЕНЕНИЕ ШАГА (STEP)

      if (settings.vertical) {
        sliders.style.transform = "rotate(270deg)";
      } else {
        sliders.style.transform = "rotate(0deg)";
      }

      singleRange.step = settings.step;
      inputLeft.step = settings.step;
      inputRight.step = settings.step; //SINGLE ИЛИ MULTIRANGE

      if (settings.multirange) {
        $(sliderSingle).hide();
        $(".multi-range-slider").show();
      } else {
        $(sliderSingle).show();
        $(".multi-range-slider").hide();
      } //BUBBLES ВКЛ. ВЫКЛ.


      if (settings.bubbles) {
        $(".bubble-single").removeClass("none");
        $(".bubble-multi-right").removeClass("none");
        $(".bubble-multi-left").removeClass("none");
      } else {
        $(".bubble-single").addClass("none");
        $(".bubble-multi-right").addClass("none");
        $(".bubble-multi-left").addClass("none");
      } //WIDTH


      $(sliders).css("width", settings.width + "vw");
      $(inputLeft).css("width", settings.width + "vw");
      $(inputRight).css("width", settings.width + "vw");
      $(singleRange).css("width", settings.width + "vw");
      $(sliderSingle).css("width", settings.width + "vw");
      $(".scale").css("width", settings.width + "vw");
      $(".multi-scale").css("width", settings.width + "vw"); //ИЗМЕНЕНИЕ MIN MAX

      singleRange.min = settings.min;
      singleRange.max = settings.max;
      inputLeft.min = settings.min;
      inputRight.min = settings.min;
      inputLeft.max = settings.max;
      inputRight.max = settings.max; //=======================================================================

      var Model =
      /** @class */
      function () {
        function Model() {} //ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)


        Model.prototype.setLeftValue = function (testMin, testMax, testLeftVal, testRightVal) {
          if (testMin === void 0) {
            testMin = -666.666;
          }

          if (testMax === void 0) {
            testMax = -666.666;
          }

          if (testLeftVal === void 0) {
            testLeftVal = -666.666;
          }

          if (testRightVal === void 0) {
            testRightVal = -666.666;
          }

          var min = settings.min,
              max = settings.max;
          inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - 1);
          var testCountVal = Math.min(testLeftVal, testRightVal - 1);
          var percent;

          if (testLeftVal == -666.666) {
            percent = (inputLeft.value - min) / (max - min) * 100;
          } else {
            percent = (testCountVal - testMin) / (testMax - testMin) * 100;
          }

          thumbLeft.style.left = percent + "%";
          range.style.left = percent + "%";
        };

        Model.prototype.setRightValue = function (testMin, testMax, testLeftVal, testRightVal) {
          if (testMin === void 0) {
            testMin = -666.666;
          }

          if (testMax === void 0) {
            testMax = -666.666;
          }

          if (testLeftVal === void 0) {
            testLeftVal = -666.666;
          }

          if (testRightVal === void 0) {
            testRightVal = -666.666;
          }

          var min = settings.min,
              max = settings.max;
          inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + 1);
          var testCountVal = Math.max(testRightVal, testLeftVal + 1);
          var percent;

          if (testRightVal == -666.666) {
            percent = (inputRight.value - min) / (max - min) * 100;
          } else {
            percent = (testCountVal - testMin) / (testMax - testMin) * 100;
          }

          thumbRight.style.right = 100 - percent + "%";
          range.style.right = 100 - percent + "%";
        }; //ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ


        Model.prototype.MouseMove = function (eventArg, min, max, width, testValLeft, testValRight, testPosition) {
          if (testValLeft === void 0) {
            testValLeft = -666.666;
          }

          if (testValRight === void 0) {
            testValRight = -666.666;
          }

          if (testPosition === void 0) {
            testPosition = -666.666;
          }

          var positionXY, compareInputs, countPosition, inputLeftMath, inputRightMath, x100;
          positionXY = eventArg.offsetX; //offsetX и offsetY относятся к родительскому контейнеру, тогда как pageX и pageY относятся к документу. Если в данной ситуации использовать clientX или pageX, screenX, то при display: flex данная функция будет работать некорректно.

          countPosition = (+inputLeft.min + +inputLeft.max) / $(sliders).width();
          var testCountPosition = (min + max) / width;
          /* percentage position Y of cursor  */

          if (testPosition == -666.666) {
            x100 = positionXY * countPosition;
          } else {
            x100 = testPosition * testCountPosition;
          }
          /* absolute distance from respective slider values */


          inputLeftMath = Math.abs(inputLeft.value - x100);
          inputRightMath = Math.abs(inputRight.value - x100);
          var testInputLeftMath = Math.abs(testValLeft - x100);
          var testInputRightMath = Math.abs(testValRight - x100);

          if (testValLeft == -666.666 && testValRight == -666.666) {
            compareInputs = inputLeftMath < inputRightMath;
          } else {
            compareInputs = testInputLeftMath < testInputRightMath;
          } // Making the two sliders appear above one another only when no mouse button is pressed, this oondition may be removed at will


          if (!eventArg.buttons) {
            if (compareInputs) {
              inputLeft.style.zIndex = 2;
              inputRight.style.zIndex = 1;
            } else {
              inputRight.style.zIndex = 2;
              inputLeft.style.zIndex = 1;
            }
          }
        };

        return Model;
      }();

      ;
      var model = new Model();
      model.setLeftValue();
      model.setRightValue(); // module.exports = Model
      //=======================================================================

      var View =
      /** @class */
      function () {
        function View() {}

        View.prototype.getLeftValue = function (min, max, testVal) {
          if (testVal === void 0) {
            testVal = -666.666;
          } //ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB


          $('#single-range').on('input', function () {
            var newValue;
            var val = inputLeft.value;

            if (testVal == -666.666) {
              newValue = (val - min) * 100 / (max - min);
            } else {
              newValue = (testVal - min) * 100 / (max - min);
            }

            var newPosition = -10 - newValue * 0.05;
            View.countMultiPosition = "calc(" + newValue + "% + (" + newPosition + "px))";
            $(".bubble-multi-left").css("left", View.countMultiPosition);
            $(".bubble-multi-left").css("bottom", "50px"); //ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE

            $(".value-multi-left-span").text(inputLeft.value);
          }).trigger('input');
        };

        View.prototype.getRightValue = function (min, max, testVal) {
          if (testVal === void 0) {
            testVal = -666.666;
          } //ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB


          $('#single-range').on('input', function () {
            var newValue;
            var val = inputRight.value;

            if (testVal == -666.666) {
              newValue = (val - min) * 100 / (max - min);
            } else {
              newValue = (testVal - min) * 100 / (max - min);
            }

            var newPosition = -10 - newValue * 0.05;
            View.countMultiPosition = "calc(" + newValue + "% + (" + newPosition + "px))";
            $(".bubble-multi-right").css("left", View.countMultiPosition);
            $(".bubble-multi-right").css("bottom", "50px"); //ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE

            $(".value-multi-right-span").text(inputRight.value);
          }).trigger('input');
        }; //ДИАПАЗОН-ШКАЛА(MULTI)


        View.prototype.scaleMulti = function (min, max) {
          var scaleMultiObj = {
            first: min,
            second: Math.floor((max - min) / 4 + +min),
            third: Math.round((max - min) / 2 + +min),
            fourth: Math.round(max - (max - min) / 4),
            fifth: max
          };
          $(".multi-first-ins").first().text(scaleMultiObj.first); //.first() because .text() makes double value when testing scaleMulti()

          $(".multi-second-ins").first().text(scaleMultiObj.second);
          $(".multi-third-ins").first().text(scaleMultiObj.third);
          $(".multi-fourth-ins").first().text(scaleMultiObj.fourth);
          $(".multi-fifth-ins").first().text(scaleMultiObj.fifth);
        };

        View.prototype.countProgress = function (min, max, testVal) {
          if (testVal === void 0) {
            testVal = -666.666;
          }

          $('#single-range').on('input', function (e) {
            var val = +e.target.value;

            if (testVal == -666.666) {
              View.progressBarWidth = (val - min) * 100 / (max - min);
            } else {
              View.progressBarWidth = (testVal - min) * 100 / (max - min);
            }

            $('.progress-bar').css({
              'width': View.progressBarWidth + '%'
            });
          }).trigger('input');
        };

        View.prototype.getSingleValue = function (min, max, testVal) {
          if (testVal === void 0) {
            testVal = -666.666;
          } //ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB


          $('#single-range').on('input', function () {
            var newValue;
            var val = singleRange.value;

            if (testVal == -666.666) {
              newValue = (val - min) * 100 / (max - min);
            } else {
              newValue = (testVal - min) * 100 / (max - min);
            }

            var newPosition = 5 - newValue * 0.25;
            View.countSinglePosition = "calc(" + newValue + "% + (" + newPosition + "px))";
            $(".bubble-single").css("left", View.countSinglePosition); //ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE

            $(".value-single-span").text(singleRange.value);
          }).trigger('input');
        }; //ДИАПАЗОН-ШКАЛА(SINGLE)


        View.prototype.scaleSingle = function (min, max) {
          var scaleSingleObj = {
            first: min,
            second: Math.floor((max - min) / 4 + +min),
            third: Math.round((max - min) / 2 + +min),
            fourth: Math.round(max - (max - min) / 4),
            fifth: max
          }; // console.log(scaleSingleObj.first)

          $(".first-ins").first().text(scaleSingleObj.first); //.first() because .text() makes double value when testing scaleSingle()

          $(".second-ins").first().text(scaleSingleObj.second);
          $(".third-ins").first().text(scaleSingleObj.third);
          $(".fourth-ins").first().text(scaleSingleObj.fourth);
          $(".fifth-ins").first().text(scaleSingleObj.fifth);
        };

        return View;
      }();

      var view = new View(); // module.exports = View

      view.getLeftValue(settings.min, settings.max);
      view.getRightValue(settings.min, settings.max);
      view.scaleMulti(settings.min, settings.max);
      view.countProgress(settings.min, settings.max); // view.typeBubbleValue();

      view.getSingleValue(settings.min, settings.max);
      view.scaleSingle(settings.min, settings.max); //=======================================================================

      var Сontroller =
      /** @class */
      function () {
        function Сontroller() {} //ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)


        Сontroller.prototype.inTouchLeft = function () {
          inputLeft.addEventListener("input", model.setLeftValue);
        };

        Сontroller.prototype.inTouchRight = function () {
          inputRight.addEventListener("input", model.setRightValue);
        }; //ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
        // inMoveLeft() {inputLeft.onmousemove = function(e: number) {
        // 	model.MouseMove.call(inputLeft, e);};
        // }
        // inMoveRight() {inputRight.onmousemove = function(e: number) {
        // 	model.MouseMove.call(inputRight, e);};
        // }


        Сontroller.prototype.inMoveLeft = function () {
          inputLeft.addEventListener('mousemove', model.MouseMove);
        };

        Сontroller.prototype.inMoveRight = function () {
          inputRight.addEventListener('mousemove', model.MouseMove);
        }; //BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE


        Сontroller.prototype.inGetLeft = function () {
          inputLeft.addEventListener('input', view.getLeftValue);
        };

        Сontroller.prototype.inGetRight = function () {
          inputRight.addEventListener('input', view.getRightValue);
        };

        return Сontroller;
      }();

      ;
      var controller = new Сontroller();
      module.exports = Сontroller;
      controller.inTouchLeft();
      controller.inTouchRight();
      controller.inMoveLeft();
      controller.inMoveRight();
      controller.inGetLeft();
      controller.inGetRight(); // controller.showBubbleValue();
    });
  };
})(jQuery);

$("body").rangeSliders();
},{}],"test.js":[function(require,module,exports) {
var Model = require('../src/range2.ts');

var model = new Model(); //MODEL

describe("Тест z-index inputLeft и inputRight при перемещении мыши по слайдеру", function () {
  var range = document.querySelector(".slider > .range");
  it("при min = 10, max = 100, sliders.width = 372.828(26vw), valueLeft = 37 и valueRight = 73 range.style.left = 30%; range.style.right = 30%", function () {
    model.setLeftValue(10, 100, 37, 73);
    model.setRightValue(10, 100, 37, 73);
    assert.equal(range.style.left, 30 + '%');
    assert.equal(range.style.right, 30 + '%');
  });
  it("при min = 0, max = 1500, sliders.width = 372.828(26vw), valueLeft = 200 и valueRight = 620 range.style.left = 13.3333%; range.style.right = 58.6667%", function () {
    model.setLeftValue(0, 1500, 200, 620);
    model.setRightValue(0, 1500, 200, 620);
    assert.equal(range.style.left, 13.3333 + '%');
    assert.equal(range.style.right, 58.6667 + '%');
  });
  it("при min = 0.5, max = 10.5, sliders.width = 372.828(26vw), valueLeft = 2 и valueRight = 4 range.style.left = 15%; range.style.right = 65%", function () {
    model.setLeftValue(0.5, 10.5, 2, 4);
    model.setRightValue(0.5, 10.5, 2, 4);
    assert.equal(range.style.left, 15 + '%');
    assert.equal(range.style.right, 65 + '%');
  });
  it("при min = 1, max = 20, sliders.width = 372.828(26vw), valueLeft = 7 и valueRight = 15 range.style.left = 31.5789%; range.style.right = 26.3158%", function () {
    model.setLeftValue(1, 20, 7, 15);
    model.setRightValue(1, 20, 7, 15);
    assert.equal(range.style.left, 31.5789 + '%');
    assert.equal(range.style.right, 26.3158 + '%');
  });
});
describe("Тест z-index inputLeft и inputRight при перемещении мыши по слайдеру", function () {
  var inputLeft = document.getElementById("input-left"),
      inputRight = document.getElementById("input-right");
  it("при min = 30, max = 380, sliders.width = 372.828, valueLeft = 117, valueRight = 380 и mousePosition = 147 inputLeft.zIndex = 2", function () {
    model.MouseMove(1, 30, 380, 372.828, 117, 380, 147);
    assert.equal(inputLeft.style.zIndex, 2);
    assert.equal(inputRight.style.zIndex, 1);
  });
  it("при min = 0, max = 55, sliders.width = 206.953, valueLeft = 5, valueRight = 25 и mousePosition = 66 inputLeft.zIndex = 1", function () {
    model.MouseMove(1, 0, 55, 206.953, 5, 25, 66);
    assert.equal(inputLeft.style.zIndex, 1);
    assert.equal(inputRight.style.zIndex, 2);
  });
  it("при min = 10, max = 100, sliders.width = 372.828, valueLeft = 20, valueRight = 50 и mousePosition = 120 inputRight.zIndex = 2", function () {
    model.MouseMove(1, 10, 100, 372.828, 20, 50, 120);
    assert.equal(inputRight.style.zIndex, 2);
    assert.equal(inputLeft.style.zIndex, 1);
  });
  it("при min = 0, max = 200, sliders.width = 372.828, valueLeft = 100, valueRight = 200 и mousePosition = 135 inputRight.zIndex = 1", function () {
    model.MouseMove(1, 0, 200, 372.828, 100, 200, 135);
    assert.equal(inputRight.style.zIndex, 1);
    assert.equal(inputLeft.style.zIndex, 2);
  });
  it("при min = 0, max = 100, sliders.width = 372.828, valueLeft = 15, valueRight = 50 и mousePosition = 235 inputLeft.zIndex = 1", function () {
    model.MouseMove(1, 0, 100, 372.828, 15, 50, 235);
    assert.equal(inputLeft.style.zIndex, 1);
    assert.equal(inputRight.style.zIndex, 2);
  });
}); // const View = require('../src/range2.ts')
// let view = new View()
// // VIEW
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
},{"../src/range2.ts":"../src/range2.ts"}],"C:/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56243" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map