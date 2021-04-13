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
})({"range.227ef839.js":[function(require,module,exports) {
// // (function ($) {
// 	// ($.fn).rangeSliders = function range(options) {
// 		// var settings = $.extend({
// 		// 	"step": 1,
// 		// 	"vertical": false,
// 		// 	"multirange": true,
// 		// 	"bubbles": true,
// 		// 	"width": 26,
// 		// 	"min": 20,
// 		// 	"max": 280
// 		//   });
// 		//   options
var settings = {
  "step": 1,
  "vertical": false,
  "multirange": true,
  "bubbles": true,
  "width": 26,
  "min": 10,
  "max": 100
}; // return this.each(function () {

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

var model = {
  //ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
  setLeftValue: function setLeftValue(testMin, testMax) {
    var testLeftVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'empty';
    var testRightVal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'empty';
    var min = parseInt(settings.min),
        max = parseInt(settings.max);
    inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - 1);
    var testCountVal = Math.min(testLeftVal, testRightVal - 1);
    var percent;

    if (testLeftVal == 'empty') {
      percent = (inputLeft.value - min) / (max - min) * 100;
    } else {
      percent = (testCountVal - testMin) / (testMax - testMin) * 100;
    }

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
  },
  setRightValue: function setRightValue(testMin, testMax) {
    var testLeftVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'empty';
    var testRightVal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'empty';
    var min = parseInt(settings.min),
        max = parseInt(settings.max);
    inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + 1);
    var testCountVal = Math.max(testRightVal, testLeftVal + 1);
    var percent;

    if (testRightVal == 'empty') {
      percent = (inputRight.value - min) / (max - min) * 100;
    } else {
      percent = (testCountVal - testMin) / (testMax - testMin) * 100;
    }

    thumbRight.style.right = 100 - percent + "%";
    range.style.right = 100 - percent + "%";
  },
  //ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
  MouseMove: function MouseMove(eventArg, min, max, width) {
    var testValLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'empty';
    var testValRight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'empty';
    var testPosition = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'empty';
    var positionXY, compareInputs, countPosition, inputLeftMath, inputRightMath, x100;
    positionXY = eventArg.offsetX; //offsetX и offsetY относятся к родительскому контейнеру, тогда как pageX и pageY относятся к документу. Если в данной ситуации использовать clientX или pageX, screenX, то при display: flex данная функция будет работать некорректно.

    countPosition = (+inputLeft.min + +inputLeft.max) / $(sliders).width(); // console.log($(sliders).width())
    // console.log(positionXY)

    testCountPosition = (min + max) / width;
    /* percentage position Y of cursor  */

    if (testPosition == 'empty') {
      x100 = positionXY * countPosition;
    } else {
      x100 = testPosition * testCountPosition;
    }
    /* absolute distance from respective slider values */


    inputLeftMath = Math.abs(inputLeft.value - x100);
    inputRightMath = Math.abs(inputRight.value - x100);
    testInputLeftMath = Math.abs(testValLeft - x100);
    testInputRightMath = Math.abs(testValRight - x100);

    if (testValLeft == 'empty' && testValRight == 'empty') {
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
  }
};
model.setLeftValue();
model.setRightValue(); //=======================================================================

var view = {
  /////////////////////////////////MULTI
  //BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
  countMultiPosition: Number,
  getLeftValue: function getLeftValue(min, max) {
    var testVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'empty';
    //ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
    $('#single-range').on('input', function () {
      var newValue;
      var val = inputLeft.value;

      if (testVal == 'empty') {
        newValue = (val - min) * 100 / (max - min);
      } else {
        newValue = (testVal - min) * 100 / (max - min);
      }

      var newPosition = -10 - newValue * 0.05;
      countMultiPosition = "calc(".concat(newValue, "% + (").concat(newPosition, "px))");
      $(".bubble-multi-left").css("left", countMultiPosition);
      $(".bubble-multi-left").css("bottom", "50px"); //ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE

      $(".value-multi-left-span").text(inputLeft.value);
    }).trigger('input');
  },
  getRightValue: function getRightValue(min, max) {
    var testVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'empty';
    //ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
    $('#single-range').on('input', function () {
      var newValue;
      var val = inputRight.value;

      if (testVal == 'empty') {
        newValue = (val - min) * 100 / (max - min);
      } else {
        newValue = (testVal - min) * 100 / (max - min);
      }

      var newPosition = -10 - newValue * 0.05;
      countMultiPosition = "calc(".concat(newValue, "% + (").concat(newPosition, "px))");
      $(".bubble-multi-right").css("left", countMultiPosition);
      $(".bubble-multi-right").css("bottom", "50px"); //ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE

      $(".value-multi-right-span").text(inputRight.value);
    }).trigger('input');
  },
  //ДИАПАЗОН-ШКАЛА(MULTI)
  scaleMultiObj: {},
  scaleMulti: function scaleMulti(min, max) {
    scaleMultiObj = {
      first: min,
      second: Math.floor((max - min) / 4 + +min),
      third: Math.round((max - min) / 2 + +min),
      fourth: Math.round(max - (max - min) / 4),
      fifth: max
    };
    $(".multi-first-ins").text(scaleMultiObj.first);
    $(".multi-second-ins").text(scaleMultiObj.second);
    $(".multi-third-ins").text(scaleMultiObj.third);
    $(".multi-fourth-ins").text(scaleMultiObj.fourth);
    $(".multi-fifth-ins").text(scaleMultiObj.fifth);
  },
  /////////////////////////////////SINGLE
  //ДОБАВЛЯЕТ PROGRESS BAR (SLIDER-SINGLE)
  progressBarWidth: Number,
  countProgress: function countProgress(min, max) {
    var testVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'empty';
    $('#single-range').on('input', function (e) {
      var val = e.target.value;

      if (testVal == 'empty') {
        progressBarWidth = (val - min) * 100 / (max - min);
      } else {
        progressBarWidth = (testVal - min) * 100 / (max - min);
      }

      $('.progress-bar').css({
        'width': progressBarWidth + '%'
      });
    }).trigger('input');
  },
  //BUBBLE SINGLE СО ЗНАЧЕНИЕМ VALUE
  countSinglePosition: Number,
  getSingleValue: function getSingleValue(min, max) {
    var testVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'empty';
    //ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
    $('#single-range').on('input', function () {
      var newValue;
      var val = singleRange.value;

      if (testVal == 'empty') {
        newValue = (val - min) * 100 / (max - min);
      } else {
        newValue = (testVal - min) * 100 / (max - min);
      }

      var newPosition = 5 - newValue * 0.25;
      countSinglePosition = "calc(".concat(newValue, "% + (").concat(newPosition, "px))");
      $(".bubble-single").css("left", countSinglePosition); //ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE

      $(".value-single-span").text(singleRange.value);
    }).trigger('input');
  },
  //ДИАПАЗОН-ШКАЛА(SINGLE)
  scaleSingleObj: {},
  scaleSingle: function scaleSingle(min, max) {
    scaleSingleObj = {
      first: min,
      second: Math.floor((max - min) / 4 + +min),
      third: Math.round((max - min) / 2 + +min),
      fourth: Math.round(max - (max - min) / 4),
      fifth: max
    };
    $(".first-ins").text(scaleSingleObj.first);
    $(".second-ins").text(scaleSingleObj.second);
    $(".third-ins").text(scaleSingleObj.third);
    $(".fourth-ins").text(scaleSingleObj.fourth);
    $(".fifth-ins").text(scaleSingleObj.fifth);
  }
};
view.getLeftValue(settings.min, settings.max);
view.getRightValue(settings.min, settings.max);
view.scaleMulti(settings.min, settings.max);
view.countProgress(settings.min, settings.max); // view.typeBubbleValue();

view.getSingleValue(settings.min, settings.max);
view.scaleSingle(settings.min, settings.max); //=======================================================================

var controller = {
  //ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
  inTouchLeft: function inTouchLeft() {
    inputLeft.addEventListener("input", model.setLeftValue);
  },
  inTouchRight: function inTouchRight() {
    inputRight.addEventListener("input", model.setRightValue);
  },
  //ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
  // inMoveLeft: function(){inputLeft.onmousemove = function(e) {
  // 	model.MouseMove.call(inputLeft, e);
  // }},
  inMoveLeft: function inMoveLeft() {
    inputLeft.addEventListener('mousemove', model.MouseMove);
  },
  // inMoveRight: function(){inputRight.onmousemove = function(e) {
  // 	model.MouseMove.call(inputRight, e);
  // }},
  inMoveRight: function inMoveRight() {
    inputRight.addEventListener('mousemove', model.MouseMove);
  },
  //BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
  inGetLeft: function inGetLeft() {
    inputLeft.addEventListener('input', view.getLeftValue);
  },
  inGetRight: function inGetRight() {
    inputRight.addEventListener('input', view.getRightValue);
  } /////////////////////////////////SINGLE
  //BUBBLE SINGLE СО ЗНАЧЕНИЕМ VALUE
  // showBubbleValue: singleRange.addEventListener('input', view.getSingleValue)

};
controller.inTouchLeft();
controller.inTouchRight();
controller.inMoveLeft();
controller.inMoveRight();
controller.inGetLeft();
controller.inGetRight(); // controller.showBubbleValue();
// 		// });
// 	// };
// // })(jQuery);	
// // ($("body")).rangeSliders();
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50263" + '/');

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
},{}]},{},["C:/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","range.227ef839.js"], null)
//# sourceMappingURL=/range.227ef839.25a8295f.js.map