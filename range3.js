(function ($) {
	$.fn.rangeSliders = function () {
		return this.each(function () {
			var inputLeft = document.getElementById("input-left"),
				inputRight = document.getElementById("input-right"),
				thumbLeft = document.querySelector(".slider > .thumb.left"),
				thumbRight = document.querySelector(".slider > .thumb.right"),
				range = document.querySelector(".slider > .range"),
				sliders = document.querySelector(".sliders");

			//=======================================================================
			var	model = {
					//ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
					setLeftValue: function() {
						var _this = inputLeft,
							min = parseInt(_this.min),
							max = parseInt(_this.max);

						_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

						var percent = ((_this.value - min) / (max - min)) * 100;

						thumbLeft.style.left = percent + "%";
						range.style.left = percent + "%";
					},

					setRightValue: function() {
						var _this = inputRight,
							min = parseInt(_this.min),
							max = parseInt(_this.max);

						_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

						var percent = ((_this.value - min) / (max - min)) * 100;

						thumbRight.style.right = (100 - percent) + "%";
						range.style.right = (100 - percent) + "%";
					},

					//ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
					MouseMove: function(eventArg) {
						var positionXY,
							compareInputs,
							countPosition,
							inputLeftMath,
							inputRightMath,
							x100;
						positionXY = eventArg.offsetX;//offsetX и offsetY относятся к родительскому контейнеру, тогда как pageX и pageY относятся к документу. Если в данной ситуации использовать clientX или pageX, screenX, то при display: flex данная функция будет работать некорректно.
						countPosition = ((+inputLeft.min) + (+inputLeft.max)) / $(sliders).width();
						/* percentage position Y of cursor  */
						x100 = positionXY * countPosition;
						/* absolute distance from respective slider values */
						inputLeftMath = Math.abs(inputLeft.value - x100);
						inputRightMath = Math.abs(inputRight.value - x100);
						compareInputs = inputLeftMath < inputRightMath;
						// Making the two sliders appear above one another only when no mouse button is pressed, this oondition may be removed at will
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
			model.setRightValue();

			//=======================================================================
			var view = {
				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				getLeftValue: function() {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					var newValue = Number( (inputLeft.value - inputLeft.min) * 100 / (inputLeft.max - inputLeft.min) ),
						newPosition = 10 - (newValue * 0.35);
					$(".bubble-multi-left").css("left", `calc(${newValue}% + (${newPosition}px))`);
					//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
					$(".value-multi-left-span").text(inputLeft.value);
				},
				getRightValue: function() {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					var newValue = Number( (inputRight.value - inputRight.min) * 100 / (inputRight.max - inputRight.min) ),
						newPosition = 10 - (newValue * 0.35);
					$(".bubble-multi-right").css("left", `calc(${newValue}% + (${newPosition}px))`);
					//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
					$(".value-multi-right-span").text(inputRight.value);
				},

				//ДИАПАЗОН-ШКАЛА(MULTI)
				scaleMulti: function() {
					$(".multi-first-ins").text(inputLeft.min);
					$(".multi-second-ins").text(Math.floor((inputLeft.max - inputLeft.min) / 4 + (+inputLeft.min)));
					$(".multi-third-ins").text(Math.round((inputLeft.max - inputLeft.min) / 2 + (+inputLeft.min)));
					$(".multi-fourth-ins").text(Math.round(inputLeft.max - ((inputLeft.max - inputLeft.min) / 4)));
					$(".multi-fifth-ins").text(inputLeft.max);
				}
			};
			view.scaleMulti();
			
			//=======================================================================
			var controller = {
				//ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
				inTouchLeft: function() {inputLeft.addEventListener("input", model.setLeftValue);},
				inTouchRight: function() {inputRight.addEventListener("input", model.setRightValue);},
			
				//ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
				inMoveLeft: function() {inputLeft.onmousemove = function(e) {
					model.MouseMove.call(inputLeft, e);};
				},
				inMoveRight: function() {inputRight.onmousemove = function(e) {
					model.MouseMove.call(inputRight, e);};
				},

				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				inGetLeft: function() {inputLeft.addEventListener('input', view.getLeftValue);},
				inGetRight: function() {inputRight.addEventListener('input', view.getRightValue);}
			};
			controller.inTouchLeft();
			controller.inTouchRight();
			controller.inMoveLeft();
			controller.inMoveRight();
			controller.inGetLeft();
			controller.inGetRight();
		});
	};
})(jQuery);	

$("body").rangeSliders();