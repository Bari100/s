(function ($) {
	$.fn.rangeSliders = function () {
		return this.each(function () {
			var inputLeft = document.getElementById("input-left"),
				inputRight = document.getElementById("input-right"),
				thumbLeft = document.querySelector(".slider > .thumb.left"),
				thumbRight = document.querySelector(".slider > .thumb.right"),
				range = document.querySelector(".slider > .range"),
				singleRange = document.getElementById("single-range"),
				sliders = document.querySelector(".sliders");
			//ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
			//model
			function setLeftValue() {
				var _this = inputLeft,
					min = parseInt(_this.min),
					max = parseInt(_this.max);

				_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

				var percent = ((_this.value - min) / (max - min)) * 100;

				thumbLeft.style.left = percent + "%";
				range.style.left = percent + "%";
			}
			setLeftValue();

			function setRightValue() {
				var _this = inputRight,
					min = parseInt(_this.min),
					max = parseInt(_this.max);

				_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

				var percent = ((_this.value - min) / (max - min)) * 100;

				thumbRight.style.right = (100 - percent) + "%";
				range.style.right = (100 - percent) + "%";
			}
			setRightValue();

			//controller
			inputLeft.addEventListener("input", setLeftValue);
			inputRight.addEventListener("input", setRightValue);

			//ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
			//controller?
			inputLeft.onmousemove = function(e) {
				MouseMove.call(inputLeft, e);
			};
			inputRight.onmousemove = function(e) {
				MouseMove.call(inputRight, e);
			};
			var positionXY,
				compareInputs,
				countPosition,
				inputLeftMath,
				inputRightMath,
				x100;
			//model
				MouseMove = function(eventArg) {
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
				};

			// //BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
			// $(".value-multi-left-span").text(inputLeft.value);
			// function getLeftValue() {
			// 	//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
			// 	var newValue = Number( (inputLeft.value - inputLeft.min) * 100 / (inputLeft.max - inputLeft.min) ),
			// 		newPosition = 10 - (newValue * 0.35);
			// 	$(".bubble-multi-left").css("left", `calc(${newValue}% + (${newPosition}px))`);
			// 	//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
			// 	$(".value-multi-left-span").text(inputLeft.value);
			// }
			// inputLeft.addEventListener('input', getLeftValue);
			// $(".value-multi-right-span").text(inputRight.value);
			// function getRightValue() {
			// 	//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
			// 	var newValue = Number( (inputRight.value - inputRight.min) * 100 / (inputRight.max - inputRight.min) ),
			// 		newPosition = 10 - (newValue * 0.35);
			// 	$(".bubble-multi-right").css("left", `calc(${newValue}% + (${newPosition}px))`);
			// 	//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
			// 	$(".value-multi-right-span").text(inputRight.value);
			// }
			// inputRight.addEventListener('input', getRightValue);


			// //ДИАПАЗОН-ШКАЛА
			// $(".multi-first-ins").text(inputLeft.min);
			// $(".multi-second-ins").text(Math.floor((inputLeft.max - inputLeft.min) / 4 + (+inputLeft.min)));
			// $(".multi-third-ins").text(Math.round((inputLeft.max - inputLeft.min) / 2 + (+inputLeft.min)));
			// $(".multi-fourth-ins").text(Math.round(inputLeft.max - ((inputLeft.max - inputLeft.min) / 4)));
			// $(".multi-fifth-ins").text(inputLeft.max);//рассчет в model, .text в controller
		});
	};
})(jQuery);	

$("body").rangeSliders();