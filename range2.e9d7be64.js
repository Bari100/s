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
})({"range2.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
;

(function ($) {
  $.fn.rangeSliders = function (silderNum, vertical) {
    var settings = {
      step: 1,
      vertical: false,
      multirange: true,
      bubbles: true,
      width: 26,
      min: 20,
      max: 280
    };
    return this.each(function () {
      var sliders = document.querySelector(".js-sliders" + silderNum); // radioMulti = document.querySelector(`.js-choose-multi${silderNum}`);

      var $sliderSingle = $('<div>', {
        'class': "slider-single" + silderNum
      });
      $(sliders).append($sliderSingle);
      var $bubbleSingle = $('<div>', {
        'class': "bubble-single" + silderNum + " js-bubble-single" + silderNum
      });
      $($sliderSingle).append($bubbleSingle);
      var $valueSingleSpan = $('<span>', {
        'class': "value-single-span" + silderNum + " js-value-single-span" + silderNum
      });
      $($bubbleSingle).append($valueSingleSpan);
      var $singleRange = $('<input>', {
        'class': "single-range" + silderNum,
        'type': 'range',
        'min': '50',
        'max': '250',
        'value': '50'
      });
      $($sliderSingle).append($singleRange);
      $($sliderSingle).append($('<div>', {
        'class': "progress-bar" + silderNum + " js-progress-bar" + silderNum
      }));
      var $scaleSingle = $('<div>', {
        'class': "scale" + silderNum + " js-scale" + silderNum
      });
      $($sliderSingle).append($scaleSingle);
      var $spanScaleSingle1 = $('<span>', {
        'style': 'left: 0%'
      });
      $($scaleSingle).append($spanScaleSingle1);
      $($spanScaleSingle1).append($('<ins>', {
        'class': "first-ins" + silderNum + " js-first-ins" + silderNum
      }));
      var $spanScaleSingle2 = $('<span>', {
        'class': 'second',
        'style': 'left: 25%'
      });
      $($scaleSingle).append($spanScaleSingle2);
      $($spanScaleSingle2).append($('<ins>', {
        'class': "second-ins" + silderNum + " js-second-ins" + silderNum
      }));
      var $spanScaleSingle3 = $('<span>', {
        'class': 'third',
        'style': 'left: 49%'
      });
      $($scaleSingle).append($spanScaleSingle3);
      $($spanScaleSingle3).append($('<ins>', {
        'class': "third-ins" + silderNum + " js-third-ins" + silderNum
      }));
      var $spanScaleSingle4 = $('<span>', {
        'class': 'fourth',
        'style': 'left: 73%'
      });
      $($scaleSingle).append($spanScaleSingle4);
      $($spanScaleSingle4).append($('<ins>', {
        'class': "fourth-ins" + silderNum + " js-fourth-ins" + silderNum
      }));
      var $spanScaleSingle5 = $('<span>', {
        'style': 'left: 95%'
      });
      $($scaleSingle).append($spanScaleSingle5);
      $($spanScaleSingle5).append($('<ins>', {
        'class': "fifth-ins" + silderNum + " js-fifth-ins" + silderNum
      }));
      var singleRange = document.querySelector(".single-range" + silderNum);
      var $multiRangeSlider = $('<div>', {
        'class': "multi-range-slider" + silderNum + " js-multi-range-slider" + silderNum
      });
      $(sliders).append($multiRangeSlider);
      var $bubbleMultiLeft = $('<div>', {
        'class': "bubble-multi-left" + silderNum + " js-bubble-multi-left" + silderNum
      });
      $($multiRangeSlider).append($bubbleMultiLeft);
      var $valueMultiLeftSpan = $('<span>', {
        'class': "value-multi-left-span" + silderNum + " js-value-multi-left-span" + silderNum
      });
      $($bubbleMultiLeft).append($valueMultiLeftSpan);
      var $bubbleMultiRight = $('<div>', {
        'class': "bubble-multi-right" + silderNum + " js-bubble-multi-right" + silderNum
      });
      $($multiRangeSlider).append($bubbleMultiRight);
      var $valueMultiRightSpan = $('<span>', {
        'class': "value-multi-right-span" + silderNum + " js-value-multi-right-span" + silderNum
      });
      $($bubbleMultiRight).append($valueMultiRightSpan);
      var $inputLeft = $('<input>', {
        'class': "input-left" + silderNum + " js-input-left" + silderNum,
        'type': 'range',
        'min': '50',
        'max': '250',
        'value': '100'
      });
      var $inputRight = $('<input>', {
        'class': "input-right" + silderNum + " js-input-right" + silderNum,
        'type': 'range',
        'min': '50',
        'max': '250',
        'value': '200'
      });
      $($multiRangeSlider).append($inputLeft);
      $($multiRangeSlider).append($inputRight);
      var $slider = $('<div>', {
        'class': "slider" + silderNum + " js-slider" + silderNum
      });
      $($multiRangeSlider).append($slider);
      $($slider).append($('<div>', {
        'class': "track" + silderNum
      }));
      $($slider).append($('<div>', {
        'class': "range" + silderNum + " js-range" + silderNum
      }));
      $($slider).append($('<div>', {
        'class': "thumb" + silderNum + " left" + silderNum + " js-thumb" + silderNum + " js-left" + silderNum
      }));
      $($slider).append($('<div>', {
        'class': "thumb" + silderNum + " right" + silderNum + " js-thumb" + silderNum + " js-right" + silderNum
      }));
      var $multiScale = $('<div>', {
        'class': "multi-scale" + silderNum + " js-multi-scale" + silderNum
      });
      $($multiRangeSlider).append($multiScale);
      var $spanMultiScale1 = $('<span>', {
        'style': 'left: 0%'
      });
      $($multiScale).append($spanMultiScale1);
      $($spanMultiScale1).append($('<ins>', {
        'class': "multi-first-ins" + silderNum + " js-multi-first-ins" + silderNum
      }));
      var $spanMultiScale2 = $('<span>', {
        'class': 'second',
        'style': 'left: 25%'
      });
      $($multiScale).append($spanMultiScale2);
      $($spanMultiScale2).append($('<ins>', {
        'class': "multi-second-ins" + silderNum + " js-multi-second-ins" + silderNum
      }));
      var $spanMultiScale3 = $('<span>', {
        'class': 'third',
        'style': 'left: 49%'
      });
      $($multiScale).append($spanMultiScale3);
      $($spanMultiScale3).append($('<ins>', {
        'class': "multi-third-ins" + silderNum + " js-multi-third-ins" + silderNum
      }));
      var $spanMultiScale4 = $('<span>', {
        'class': 'fourth',
        'style': 'left: 73%'
      });
      $($multiScale).append($spanMultiScale4);
      $($spanMultiScale4).append($('<ins>', {
        'class': "multi-fourth-ins" + silderNum + " js-multi-fourth-ins" + silderNum
      }));
      var $spanMultiScale5 = $('<span>', {
        'style': 'left: 95%'
      });
      $($multiScale).append($spanMultiScale5);
      $($spanMultiScale5).append($('<ins>', {
        'class': "multi-fifth-ins" + silderNum + " js-multi-fifth-ins" + silderNum
      }));
      var range = document.querySelector(".js-slider" + silderNum + " > .js-range" + silderNum),
          thumbLeft = document.querySelector(".js-slider" + silderNum + " > .js-thumb" + silderNum + ".js-left" + silderNum),
          thumbRight = document.querySelector(".js-slider" + silderNum + " > .js-thumb" + silderNum + ".js-right" + silderNum),
          inputLeft = document.querySelector(".js-input-left" + silderNum),
          inputRight = document.querySelector(".js-input-right" + silderNum),
          $scaleValuesMult = $(".js-multi-first-ins" + silderNum + ", .js-multi-second-ins" + silderNum + ", .js-multi-third-ins" + silderNum + ", .js-multi-fourth-ins" + silderNum + ", .js-multi-fifth-ins" + silderNum),
          $scaleValuesSing = $(".js-first-ins" + silderNum + ", .js-second-ins" + silderNum + ", .js-third-ins" + silderNum + ", .js-fourth-ins" + silderNum + ", .js-fifth-ins" + silderNum); //*-DEMO-* ФУНКЦИЯ ВЫБОРА SINGLE ИЛИ MULTIRANGE

      $(".choose-multi" + silderNum).on('click', function () {
        $($sliderSingle).hide();
        $(".multi-range-slider" + silderNum).show();
        $(".change-value-multi-block" + silderNum).show();
        $(".change-value-block" + silderNum).hide();
      });
      $(".choose-single" + silderNum).on('click', function () {
        $($sliderSingle).show();
        $(".multi-range-slider" + silderNum).hide();
        $(".change-value-multi-block" + silderNum).hide();
        $(".change-value-block" + silderNum).show();
      });

      if (settings.multirange) {
        $(".change-value-block" + silderNum).hide();
      } //*-DEMO-* BUBBLE ON/OFF


      $(".bubble-on" + silderNum).on('click', function () {
        $(".bubble-single" + silderNum).removeClass("none");
        $(".bubble-multi-right" + silderNum).removeClass("none");
        $(".bubble-multi-left" + silderNum).removeClass("none");
      });
      $(".bubble-off" + silderNum).on('click', function () {
        $(".bubble-single" + silderNum).addClass("none");
        $(".bubble-multi-right" + silderNum).addClass("none");
        $(".bubble-multi-left" + silderNum).addClass("none");
      });
      $(".width-value" + silderNum).val(''); //*-DEMO-* ФУНКЦИЯ ВЫБОРА ГОРИЗОНТ ИЛИ ВЕРТИКАЛЬ

      $(".horizontal" + silderNum).on('click', function () {
        sliders.style.transform = "rotate(0deg)"; // settings.width = settings.width

        var width = settings.width;
        if ($(".width-value" + silderNum).val() > 0) width = +$(".width-value" + silderNum).val();
        $(sliders).css("width", width + "vw");
        $(inputLeft).css("width", width + "vw");
        $(inputRight).css("width", width + "vw");
        $(singleRange).css("width", width + "vw");
        $($sliderSingle).css("width", width + "vw");
        $(".scale" + silderNum).css("width", width + "vw");
        $(".multi-scale" + silderNum).css("width", width + "vw");
      });
      $(".vertical" + silderNum).on('click', function () {
        sliders.style.transform = "rotate(270deg)";
        var width = settings.width;
        if ($(".width-value" + silderNum).val() > 0) width = +$(".width-value" + silderNum).val();
        var newWidth = window.screen.width * window.devicePixelRatio * width / 100;
        $(sliders).css("width", newWidth + "px");
        $(inputLeft).css("width", newWidth + "px");
        $(inputRight).css("width", newWidth + "px");
        $(singleRange).css("width", newWidth + "px");
        $($sliderSingle).css("width", newWidth + "px");
        $(".scale" + silderNum).css("width", newWidth + "px");
        $(".multi-scale" + silderNum).css("width", newWidth + "px");
      }); //*-DEMO-* ФУНКЦИЯ STEP

      $(".change-step" + silderNum).on('click', function () {
        $(singleRange).on('input', function () {
          singleRange.step = document.getElementById("step_number" + silderNum).value;
        });
        inputLeft.step = document.getElementById("step_number" + silderNum).value;
        inputRight.step = document.getElementById("step_number" + silderNum).value;
      });
      $(".first-ins" + silderNum + ", .second-ins" + silderNum + ", .third-ins" + silderNum + ", .fourth-ins" + silderNum + ", .fifth-ins" + silderNum).on('mouseout', function () {
        $(singleRange).on('input', function () {
          singleRange.step = document.getElementById("step_number" + silderNum).value;
        });
      }); //*-DEMO-* ФУНКЦИЯ ИЗМЕНЕНИЯ И ОТОБРАЖЕНИЯ VALUE

      $(".change-value" + silderNum).on('click', function () {
        singleRange.value = document.getElementById("slider-value" + silderNum).value;
        Model.progressBarWidth = (singleRange.value - settings.min) * 100 / (settings.max - settings.min);
        $(".progress-bar" + silderNum).css({
          'width': Model.progressBarWidth + '%'
        });
        var newValue;
        newValue = (singleRange.value - settings.min) * 100 / (settings.max - settings.min);
        var newPosition = 5 - newValue * 0.25;
        Model.insCountSinglePosition = "calc(" + newValue + "% + (" + newPosition + "px))";
        $(".bubble-single" + silderNum).css("left", Model.insCountSinglePosition);
        $(".value-single-span" + silderNum).text(singleRange.value);
      }); // $(singleRange).on('input', function(){
      // 	(<HTMLInputElement>document.getElementById(`slider-value${silderNum}`)).value = singleRange.value
      // })
      // $(`.first-ins${silderNum}`).on('click', function(){
      // 	(<HTMLInputElement>document.getElementById(`slider-value${silderNum}`)).value = $(`.first-ins${silderNum}`).text()
      // })
      // $(`.second-ins${silderNum}`).on('click', function(){
      // 	(<HTMLInputElement>document.getElementById(`slider-value${silderNum}`)).value = $(`.second-ins${silderNum}`).text()
      // })
      // $(`.third-ins${silderNum}`).on('click', function(){
      // 	(<HTMLInputElement>document.getElementById(`slider-value${silderNum}`)).value = $(`.third-ins${silderNum}`).text()
      // })
      // $(`.fourth-ins${silderNum}`).on('click', function(){
      // 	(<HTMLInputElement>document.getElementById(`slider-value${silderNum}`)).value = $(`.fourth-ins${silderNum}`).text()
      // })
      // $(`.fifth-ins${silderNum}`).on('click', function(){
      // 	(<HTMLInputElement>document.getElementById(`slider-value${silderNum}`)).value = $(`.fifth-ins${silderNum}`).text()
      // })

      $(".change-value-multi" + silderNum).on('click', function () {
        inputLeft.value = document.getElementById("multislider-value-1" + silderNum).value;
        inputRight.value = document.getElementById("multislider-value-2" + silderNum).value;
        inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - 1);
        Model.percentLeft = (inputLeft.value - settings.min) / (settings.max - settings.min) * 100;
        inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + 1);
        Model.percentRight = (inputRight.value - settings.min) / (settings.max - settings.min) * 100;
        thumbLeft.style.left = Model.percentLeft + "%";
        range.style.left = Model.percentLeft + "%";
        thumbRight.style.right = 100 - Model.percentRight + "%";
        range.style.right = 100 - Model.percentRight + "%";
        var newValueLeft;
        var newValueRight;
        newValueLeft = (inputLeft.value - settings.min) * 100 / (settings.max - settings.min);
        newValueRight = (inputRight.value - settings.min) * 100 / (settings.max - settings.min);
        var newPositionLeft = -10 - newValueLeft * 0.05;
        var newPositionRight = -10 - newValueLeft * 0.05;
        Model.countMultiPositionLeft = "calc(" + newValueLeft + "% + (" + newPositionLeft + "px))";
        Model.countMultiPositionRight = "calc(" + newValueRight + "% + (" + newPositionRight + "px))";
        $(".bubble-multi-left" + silderNum).css("left", Model.countMultiPositionLeft);
        $(".bubble-multi-right" + silderNum).css("left", Model.countMultiPositionRight);
        $(".value-multi-left-span" + silderNum).text(inputLeft.value);
        $(".value-multi-right-span" + silderNum).text(inputRight.value);
      }); // $(inputLeft).on('input', function(){
      // 	(<HTMLInputElement>document.getElementById(`multislider-value-1${silderNum}`)).value = inputLeft.value
      // })
      // $(`.multi-first-ins${silderNum}`).on('click', function(){
      // 	(<HTMLInputElement>document.getElementById(`multislider-value-1${silderNum}`)).value = $(`.multi-first-ins${silderNum}`).text()
      // })
      // $(`.multi-second-ins${silderNum}`).on('click', function(){
      // 	(<HTMLInputElement>document.getElementById(`multislider-value-1${silderNum}`)).value = $(`.multi-second-ins${silderNum}`).text()
      // })
      // $(`.multi-third-ins${silderNum}`).on('click', function(){
      // 	(<HTMLInputElement>document.getElementById(`multislider-value-1${silderNum}`)).value = $(`.multi-third-ins${silderNum}`).text()
      // })
      // $(`.multi-fourth-ins${silderNum}`).on('click', function(){
      // 	(<HTMLInputElement>document.getElementById(`multislider-value-1${silderNum}`)).value = $(`.multi-fourth-ins${silderNum}`).text()
      // })
      // $(`.multi-fifth-ins${silderNum}`).on('click', function(){
      // 	(<HTMLInputElement>document.getElementById(`multislider-value-1${silderNum}`)).value = $(`.multi-fifth-ins${silderNum}`).text()
      // })
      // $(inputRight).on('input', function(){
      // 	(<HTMLInputElement>document.getElementById(`multislider-value-2${silderNum}`)).value = inputRight.value
      // })
      // $(`.multi-first-ins${silderNum}, .multi-second-ins${silderNum}, .multi-third-ins${silderNum}, .multi-fourth-ins${silderNum}, .multi-fifth-ins${silderNum}`)
      // 	.on('click', () => {(<HTMLInputElement>document.getElementById(`multislider-value-2${silderNum}`)).value = $(`.multi-fifth-ins${silderNum}`).text()})
      //!!!!!!!!!!!!!!!!!ПЕРЕМЕСТИТЬ В MODEL И CONTROLLER 		
      // $(`.first-ins${silderNum}, .second-ins${silderNum}, .third-ins${silderNum}, .fourth-ins${silderNum}, .fifth-ins${silderNum}`)
      // 	.on('mouseover', function(){singleRange.step = 1})
      // 	.on('mouseout', function(){
      // 		$(singleRange).on('input', function(){singleRange.step = settings.step})})//!!!!!!!!!!!!!!!!!ПЕРЕМЕСТИТЬ В MODEL И CONTROLLER 
      //*-DEMO-* ИЗМЕНЕНИЕ WIDTH

      $(".change-width" + silderNum).on('click', function () {
        $(sliders).css("width", $(".width-value" + silderNum).val() + "vw");
        $(inputLeft).css("width", $(".width-value" + silderNum).val() + "vw");
        $(inputRight).css("width", $(".width-value" + silderNum).val() + "vw");
        $(singleRange).css("width", $(".width-value" + silderNum).val() + "vw");
        $sliderSingle.css("width", $(".width-value" + silderNum).val() + "vw");
        $scaleSingle.css("width", $(".width-value" + silderNum).val() + "vw");
        $multiScale.css("width", $(".width-value" + silderNum).val() + "vw");
      }); //*-DEMO-* ИЗМЕНЕНИЕ MIN MAX

      $(".change-min-max" + silderNum).on('click', function () {
        if (+$(".min-value" + silderNum).val() < 0 || +$(".max-value" + silderNum).val() < 0) {
          $(".min-value" + silderNum).val(0);
          $(".max-value" + silderNum).val(100);
        }

        if (+$(".min-value" + silderNum).val() > +$(".max-value" + silderNum).val()) {
          var oldMinVal = $(".min-value" + silderNum).val();
          $(".min-value" + silderNum).val($(".max-value" + silderNum).val());
          $(".max-value" + silderNum).val(oldMinVal);
        }

        settings.min = +$(".min-value" + silderNum).val();
        settings.max = +$(".max-value" + silderNum).val();
        singleRange.min = settings.min;
        singleRange.max = settings.max;
        inputLeft.min = settings.min;
        inputRight.min = settings.min;
        inputLeft.max = settings.max;
        inputRight.max = settings.max;
        inputLeft.value = settings.min;
        inputRight.value = settings.max;
        model.countThumbRangeL();
        model.countThumbRangeR();
        model.countBubble(inputLeft, settings.min, settings.max);
        model.countBubble(inputRight, settings.min, settings.max);
        model.countBubble(singleRange, settings.min, settings.max);
        controller.makeBubbleMultInputHandler();
        controller.makeBubbleSingInputHandler();
        model.countScale(settings.min, settings.max);
        model.countRange(settings.min, settings.max);
        controller.makeRangeInputHandler();
        controller.makeScale();
      }); //WIDTH

      $(sliders).css("width", settings.width + "vw");
      $(inputLeft).css("width", settings.width + "vw");
      $(inputRight).css("width", settings.width + "vw");
      $(singleRange).css("width", settings.width + "vw");
      $sliderSingle.css("width", settings.width + "vw");
      $scaleSingle.css("width", settings.width + "vw");
      $multiScale.css("width", settings.width + "vw"); //ИЗМЕНЕНИЕ ПОЛОЖЕНИЯ (ВЕРТИКАЛЬ) И ИЗМЕНЕНИЕ ШАГА (STEP)

      if (settings.vertical) {
        sliders.style.transform = "rotate(270deg)";
        var newWidth = window.screen.width * window.devicePixelRatio * settings.width / 100;
        $(sliders).css("width", newWidth + "px");
        $(inputLeft).css("width", newWidth + "px");
        $(inputRight).css("width", newWidth + "px");
        $(singleRange).css("width", newWidth + "px");
        $sliderSingle.css("width", newWidth + "px");
        $scaleSingle.css("width", newWidth + "px");
        $multiScale.css("width", newWidth + "px");
      } else {
        sliders.style.transform = "rotate(0deg)";
      }

      singleRange.step = settings.step;
      inputLeft.step = settings.step;
      inputRight.step = settings.step; //SINGLE ИЛИ MULTIRANGE

      if (settings.multirange) {
        $sliderSingle.hide();
        $multiRangeSlider.show();
      } else {
        $sliderSingle.show();
        $multiRangeSlider.hide();
      } //BUBBLES ВКЛ. ВЫКЛ.


      if (settings.bubbles) {
        $bubbleSingle.removeClass("none");
        $bubbleMultiRight.removeClass("none");
        $bubbleMultiLeft.removeClass("none");
      } else {
        $bubbleSingle.addClass("none");
        $bubbleMultiRight.addClass("none");
        $bubbleMultiLeft.addClass("none");
      } //ИЗМЕНЕНИЕ MIN MAX


      singleRange.min = settings.min;
      singleRange.max = settings.max;
      inputLeft.min = settings.min;
      inputRight.min = settings.min;
      inputLeft.max = settings.max;
      inputRight.max = settings.max; //=====================================================================================================================================================================================================================

      var Model =
      /** @class */
      function () {
        function Model() {}

        Model.trackZindexL = function () {};

        Model.trackZindexR = function () {}; //РАСЧЁТ ДЛЯ ПЕРЕМЕЩЕНИЯ THUMB И RANGE (MULTIRANGE SLIDER)


        Model.prototype.countThumbRangeL = function (tests) {
          if (tests === void 0) {
            tests = Model.test;
          }

          var min = settings.min,
              max = settings.max,
              test = Model.test,
              defaultNum = Model.defaultNum;
          inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - 1);
          var testCountVal = Math.min(test.leftVal, test.rightVal - 1);
          test.leftVal == defaultNum ? Model.percentLeft = (inputLeft.value - min) / (max - min) * 100 : Model.percentLeft = (testCountVal - test.min) / (test.max - test.min) * 100;
        };

        Model.prototype.countThumbRangeR = function (tests) {
          if (tests === void 0) {
            tests = Model.test;
          }

          var min = settings.min,
              max = settings.max,
              test = Model.test,
              defaultNum = Model.defaultNum;
          inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + 1);
          var testCountVal = Math.max(test.rightVal, test.leftVal + 1);
          test.rightVal == defaultNum ? Model.percentRight = 100 - (inputRight.value - min) / (max - min) * 100 : Model.percentRight = 100 - (testCountVal - test.min) / (test.max - test.min) * 100;
        }; //ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ


        Model.prototype.countTrackZindex = function (eventArg, width, testPosition, tests) {
          if (testPosition === void 0) {
            testPosition = Model.defaultNum;
          }

          if (tests === void 0) {
            tests = Model.test;
          }

          var positionXY,
              countPosition,
              inputLeftMath,
              inputRightMath,
              x100,
              test = Model.test,
              defaultNum = Model.defaultNum;
          positionXY = eventArg.offsetX; //offsetX и offsetY относятся к родительскому контейнеру, тогда как pageX и pageY относятся к документу. Если в данной ситуации использовать clientX или pageX, screenX, то при display: flex данная функция будет работать некорректно.

          countPosition = (+inputLeft.min + +inputLeft.max) / $(sliders).width();
          var testCountPosition = (test.min + test.max) / width;
          /* percentage position Y of cursor  */

          testPosition == defaultNum ? x100 = positionXY * countPosition : x100 = testPosition * testCountPosition;
          /* absolute distance from respective slider values */

          inputLeftMath = Math.abs(inputLeft.value - x100);
          inputRightMath = Math.abs(inputRight.value - x100);
          var testInputLeftMath = Math.abs(test.leftVal - x100);
          var testInputRightMath = Math.abs(test.rightVal - x100);
          test.leftVal == defaultNum && test.rightVal == defaultNum ? Model.compareInputs = inputLeftMath < inputRightMath : Model.compareInputs = testInputLeftMath < testInputRightMath;

          if (!eventArg.buttons) {
            if (Model.compareInputs) {
              Model.trackZindexL();
            } else {
              Model.trackZindexR();
            }
          }
        };

        Model.prototype.bindScaleBubbleRangeMulti = function (tests) {
          if (tests === void 0) {
            tests = Model.test;
          }

          var newValue,
              test = Model.test,
              defaultNum = Model.defaultNum;
          $(".js-multi-first-ins" + silderNum).on('click', function () {
            inputLeft.value = +$(".js-multi-first-ins" + silderNum).text();
          });
          $(".js-multi-second-ins" + silderNum).on('click', function () {
            inputLeft.value = +$(".js-multi-second-ins" + silderNum).text();
          });
          $(".js-multi-third-ins" + silderNum).on('click', function () {
            inputLeft.value = +$(".js-multi-third-ins" + silderNum).text();
          });
          $(".js-multi-fourth-ins" + silderNum).on('click', function () {
            inputLeft.value = +$(".js-multi-fourth-ins" + silderNum).text();
          });
          $(".js-multi-fifth-ins" + silderNum).on('click', function () {
            inputLeft.value = +$(".js-multi-fifth-ins" + silderNum).text();
          });
          test.leftVal == defaultNum ? newValue = (inputLeft.value - settings.min) * 100 / (settings.max - settings.min) : newValue = (test.leftVal - test.min) * 100 / (test.max - test.min);
          var newPosition = -10 - newValue * 0.05;
          Model.countMultiPositionLeft = "calc(" + newValue + "% + (" + newPosition + "px))";
          test.leftVal == defaultNum ? Model.percentLeft = (inputLeft.value - settings.min) / (settings.max - settings.min) * 100 : Model.percentLeft = (test.leftVal - test.min) / (test.max - test.min) * 100;
          var newValueRight = (+$(".multi-fifth-ins" + silderNum).text() - settings.min) * 100 / (settings.max - settings.min);
          var newPositionRight = -10 - newValueRight * 0.05;
          Model.countMultiPositionRight = "calc(" + newValueRight + "% + (" + newPositionRight + "px))";
        };

        Model.prototype.countRange = function (min, max, testVal) {
          if (testVal === void 0) {
            testVal = Model.defaultNum;
          }

          $(singleRange).on('input', function () {
            var val = singleRange.value;
            testVal == Model.defaultNum ? Model.progressBarWidth = (val - min) * 100 / (max - min) : Model.progressBarWidth = (testVal - min) * 100 / (max - min);
          }).trigger('input');
        };

        Model.prototype.bindScaleBubbleRangeSing = function (testMin, testMax, testVal) {
          if (testMin === void 0) {
            testMin = Model.defaultNum;
          }

          if (testMax === void 0) {
            testMax = Model.defaultNum;
          }

          if (testVal === void 0) {
            testVal = Model.defaultNum;
          }

          var newValue;
          $(".js-first-ins" + silderNum).on('click', function () {
            Model.valResultIns = +$(".js-first-ins" + silderNum).text();
            singleRange.value = $(".js-first-ins" + silderNum).text();
          });
          $(".js-second-ins" + silderNum).on('click', function () {
            Model.valResultIns = +$(".js-second-ins" + silderNum).text();
            singleRange.value = $(".js-second-ins" + silderNum).text();
          });
          $(".js-third-ins" + silderNum).on('click', function () {
            Model.valResultIns = +$(".js-third-ins" + silderNum).text();
            singleRange.value = $(".js-third-ins" + silderNum).text();
          });
          $(".js-fourth-ins" + silderNum).on('click', function () {
            Model.valResultIns = +$(".js-fourth-ins" + silderNum).text();
            singleRange.value = $(".js-fourth-ins" + silderNum).text();
          });
          $(".js-fifth-ins" + silderNum).on('click', function () {
            Model.valResultIns = +$(".js-fifth-ins" + silderNum).text();
            singleRange.value = $(".js-fifth-ins" + silderNum).text();
          });
          testVal == Model.defaultNum ? newValue = (Model.valResultIns - settings.min) * 100 / (settings.max - settings.min) : newValue = (testVal - testMin) * 100 / (testMax - testMin);
          var newPosition = 5 - newValue * 0.25;
          Model.insCountSinglePosition = "calc(" + newValue + "% + (" + newPosition + "px))";
          testVal == Model.defaultNum ? Model.progressBarWidth = (Model.valResultIns - settings.min) * 100 / (settings.max - settings.min) : Model.progressBarWidth = (testVal - testMin) * 100 / (testMax - testMin);
        };

        Model.prototype.countBubble = function (input, min, max, testVal) {
          if (testVal === void 0) {
            testVal = Model.defaultNum;
          }

          $(input).on('input', function () {
            var newValue;
            var newPosition;
            testVal == Model.defaultNum ? newValue = (input.value - min) * 100 / (max - min) : newValue = (testVal - min) * 100 / (max - min);
            var newSingPosition = 5 - newValue * 0.25;
            newPosition = -10 - newValue * 0.05;
            Model.countBubblePosition = "calc(" + newValue.toFixed(4) + "% + (" + newPosition.toFixed(4) + "px))";
            Model.countSingBubblePosition = "calc(" + newValue.toFixed(4) + "% + (" + newSingPosition.toFixed(4) + "px))";
          }).trigger('input');
        };

        Model.prototype.countScale = function (min, max) {
          Model.scaleValues = [Math.round((max - min) / 4 + +min), Math.round((max - min) / 2 + +min), Math.round(max - (max - min) / 4)];
        };

        Model.defaultNum = -666.666;
        Model.test = {
          min: Model.defaultNum,
          max: Model.defaultNum,
          leftVal: Model.defaultNum,
          rightVal: Model.defaultNum
        };
        return Model;
      }();

      ;
      var model = new Model();
      model.countThumbRangeL();
      model.countThumbRangeR();
      model.bindScaleBubbleRangeSing();
      model.countRange(settings.min, settings.max);
      model.countBubble(inputLeft, settings.min, settings.max);
      model.countBubble(inputRight, settings.min, settings.max);
      model.countBubble(singleRange, settings.min, settings.max);
      model.bindScaleBubbleRangeMulti();
      model.countScale(settings.min, settings.max); //=====================================================================================================================================================================================================================

      var View =
      /** @class */
      function () {
        function View() {}

        View.prototype.setThumbRangeL = function () {
          thumbLeft.style.left = View.position + "%";
          range.style.left = View.position + "%";
        };

        View.prototype.setThumbRangeR = function () {
          thumbRight.style.right = View.position + "%";
          range.style.right = View.position + "%";
        };

        View.prototype.setTrackZindexL = function () {
          inputLeft.style.zIndex = 2;
          inputRight.style.zIndex = 1;
        };

        View.prototype.setTrackZindexR = function () {
          inputRight.style.zIndex = 2;
          inputLeft.style.zIndex = 1;
        };

        View.prototype.bindScaleBubbleRangeLeft = function () {
          $bubbleMultiLeft.css("left", View.countMultiPositionLeft);
          $valueMultiLeftSpan.text(inputLeft.value);
          thumbLeft.style.left = View.position + "%";
          range.style.left = View.position + "%";
        };

        View.prototype.bindScaleBubbleRangeRight = function () {
          $bubbleMultiRight.css("left", View.countMultiPositionRight);
          $valueMultiRightSpan.text(settings.max);
          thumbRight.style.right = '0';
          range.style.right = '0';
        }; /////////////////////////////////MULTI
        //BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE


        View.prototype.setBubbleL = function () {
          //ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
          $(inputLeft).on('input', function () {
            $bubbleMultiLeft.css("left", View.countMultiPositionLeft);
            $bubbleMultiLeft.css("bottom", "50px"); //ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE

            $valueMultiLeftSpan.text(inputLeft.value);
          }).trigger('input');
        };

        View.prototype.setBubbleR = function () {
          //ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
          $(inputRight).on('input', function () {
            $bubbleMultiRight.css("left", View.countMultiPositionRight);
            $bubbleMultiRight.css("bottom", "50px"); //ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE

            $valueMultiRightSpan.text(inputRight.value);
          }).trigger('input');
        }; //ДИАПАЗОН-ШКАЛА(MULTI)


        View.prototype.setScaleMulti = function (min, max) {
          var scaleMultiObj = {
            first: min,
            second: View.scaleValues[0],
            third: View.scaleValues[1],
            fourth: View.scaleValues[2],
            fifth: max
          };
          $(".js-multi-first-ins" + silderNum).first().text(scaleMultiObj.first); //.first() because .text() makes double value when testing scaleMulti()

          $(".js-multi-second-ins" + silderNum).first().text(scaleMultiObj.second);
          $(".js-multi-third-ins" + silderNum).first().text(scaleMultiObj.third);
          $(".js-multi-fourth-ins" + silderNum).first().text(scaleMultiObj.fourth);
          $(".js-multi-fifth-ins" + silderNum).first().text(scaleMultiObj.fifth);
        }; /////////////////////////////////SINGLE
        //ДОБАВЛЯЕТ PROGRESS BAR (SLIDER-SINGLE)


        View.prototype.setRange = function () {
          $(".js-progress-bar" + silderNum).css({
            'width': View.progressBarWidth + '%'
          });
        }; //BUBBLE SINGLE СО ЗНАЧЕНИЕМ VALUE


        View.prototype.setBubbleSing = function () {
          //ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
          $bubbleSingle.css("left", View.bubblePosition); //ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE

          $valueSingleSpan.text(singleRange.value);
        }; //ДИАПАЗОН-ШКАЛА(SINGLE)


        View.prototype.setScaleSingle = function (min, max) {
          var scaleSingleObj = {
            first: min,
            second: View.scaleValues[0],
            third: View.scaleValues[1],
            fourth: View.scaleValues[2],
            fifth: max
          };
          $(".js-first-ins" + silderNum).first().text(scaleSingleObj.first); //.first() because .text() makes double value when testing scaleSingle()

          $(".js-second-ins" + silderNum).first().text(scaleSingleObj.second);
          $(".js-third-ins" + silderNum).first().text(scaleSingleObj.third);
          $(".js-fourth-ins" + silderNum).first().text(scaleSingleObj.fourth);
          $(".js-fifth-ins" + silderNum).first().text(scaleSingleObj.fifth);
        };

        View.prototype.bindScaleBubbleSing = function () {
          singleRange.value = View.valResultInsView;
          $bubbleSingle.css("left", View.bubblePosition);
          $valueSingleSpan.text(View.valResultInsView);
        };

        View.scaleValues = [];
        return View;
      }();

      var view = new View();
      view.setThumbRangeL();
      view.setThumbRangeR();
      view.setBubbleL();
      view.setBubbleR();
      view.setRange();
      view.setBubbleSing(); //=====================================================================================================================================================================================================================

      var Controller =
      /** @class */
      function () {
        function Controller() {} //РАСЧЁТ ДЛЯ ПЕРЕМЕЩЕНИЯ THUMB И RANGE (MULTIRANGE SLIDER)


        Controller.prototype.makeThumbRangeInputHandlerL = function () {
          inputLeft.addEventListener("input", model.countThumbRangeL);
          $(inputLeft).on("input", function () {
            View.position = Model.percentLeft;
          }).trigger('input').on("input", view.setThumbRangeL).trigger('input');
        };

        Controller.prototype.makeThumbRangeInputHandlerR = function () {
          inputRight.addEventListener("input", model.countThumbRangeR);
          $(inputRight).on("input", function () {
            View.position = Model.percentRight;
          }).trigger('input').on("input", view.setThumbRangeR).trigger('input');
        }; //ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ


        Controller.prototype.makeTrackZindexMousemoveHandlerL = function () {
          Model.trackZindexL = view.setTrackZindexL;
          inputLeft.addEventListener('mousemove', model.countTrackZindex);
        }; //!!!!!!!!!!


        Controller.prototype.makeTrackZindexMousemoveHandlerR = function () {
          Model.trackZindexR = view.setTrackZindexR;
          inputRight.addEventListener('mousemove', model.countTrackZindex);
        }; //!!!!!!!!!!


        Controller.prototype.makeScaleBubbleRangeMultiClickHandler = function () {
          $scaleValuesMult.on('click', function () {
            model.bindScaleBubbleRangeMulti();
            View.countMultiPositionLeft = Model.countMultiPositionLeft;
            View.position = Model.percentLeft;
            view.bindScaleBubbleRangeLeft();
            View.countMultiPositionRight = Model.countMultiPositionRight;
            view.bindScaleBubbleRangeRight();
          });
        }; //BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE


        Controller.prototype.makeBubbleMultInputHandler = function () {
          $(inputLeft).on('input', function () {
            View.countMultiPositionLeft = Model.countBubblePosition;
          }).on('input', model.countBubble(inputLeft, settings.min, settings.max)).trigger('input');
          inputLeft.addEventListener('input', view.setBubbleL);
          $(inputRight).on('input', function () {
            View.countMultiPositionRight = Model.countBubblePosition;
          }).on('input', model.countBubble(inputRight, settings.min, settings.max)).trigger('input');
          inputRight.addEventListener('input', view.setBubbleR);
        }; /////////////////////////////////SINGLE


        Controller.prototype.makeScaleBubbleRangeSingClickHandler = function () {
          $scaleValuesSing.on('click', function () {
            model.bindScaleBubbleRangeSing();
            View.valResultInsView = Model.valResultIns;
            View.bubblePosition = Model.insCountSinglePosition;
            view.bindScaleBubbleSing();
            View.progressBarWidth = Model.progressBarWidth;
            view.setRange();
          }).trigger('input');
        };

        Controller.prototype.makeBubbleSingInputHandler = function () {
          $(singleRange).on('input', function () {
            View.bubblePosition = Model.countSingBubblePosition;
          });
          singleRange.addEventListener('input', model.countBubble(singleRange, settings.min, settings.max));
          $(singleRange).on('input', view.setBubbleSing).trigger('input');
        };

        Controller.prototype.makeRangeInputHandler = function () {
          $(singleRange).on('input', function () {
            View.progressBarWidth = Model.progressBarWidth;
          }).on('input', view.setRange).trigger('input');
        };

        Controller.prototype.makeScale = function () {
          View.scaleValues[0] = Model.scaleValues[0];
          View.scaleValues[1] = Model.scaleValues[1];
          View.scaleValues[2] = Model.scaleValues[2];
          view.setScaleSingle(settings.min, settings.max);
          view.setScaleMulti(settings.min, settings.max);
        };

        return Controller;
      }();

      var controller = new Controller();
      controller.makeThumbRangeInputHandlerL();
      controller.makeThumbRangeInputHandlerR();
      controller.makeTrackZindexMousemoveHandlerL();
      controller.makeTrackZindexMousemoveHandlerR();
      controller.makeScaleBubbleRangeSingClickHandler();
      controller.makeRangeInputHandler();
      controller.makeScaleBubbleRangeMultiClickHandler();
      controller.makeBubbleMultInputHandler();
      controller.makeBubbleSingInputHandler();
      controller.makeScale();
      module.exports = {
        Model: Model,
        View: View,
        Controller: Controller
      };
    });
  };
})(jQuery); // (<any>$("body")).rangeSliders(1)
},{}],"C:/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62936" + '/');

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
},{}]},{},["C:/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","range2.ts"], null)
//# sourceMappingURL=/range2.e9d7be64.js.map