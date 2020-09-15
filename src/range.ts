(function ($) {
	(<any>$.fn).rangeSliders = function (options: object) {
		var settings = $.extend({
			"step": 10,
			"vertical": false,
			"multirange": true,
			"bubbles": true,
			"width": 26,
			"min": 20,
			"max": 280
		  }, options);
		return this.each(function () {
			// var inputLeft:any = <HTMLInputElement>document.getElementById("input-left"),
			// 	inputRight:any = <HTMLInputElement>document.getElementById("input-right"),
			// 	thumbLeft = <HTMLInputElement>document.querySelector(".slider > .thumb.left"),
			// 	thumbRight = <HTMLInputElement>document.querySelector(".slider > .thumb.right"),
			// var	range = <HTMLInputElement>document.querySelector(".slider > .range"),
			var sliders:any = <HTMLElement>document.querySelector(".sliders"),
				radioMulti = document.querySelector(".choose-multi");
				// singleRange:any = document.getElementById("single-range");
				// sliderSingle = document.querySelector(".slider-single");
			
			var sliderSingle = $('<div>', {'class': 'slider-single'});
			$(sliders).append(sliderSingle);
			var bubbleSingle = $('<div>', {'class': 'bubble-single'});
			$(sliderSingle).append(bubbleSingle);
			var valueSingleSpan = $('<span>', {'class': 'value-single-span'})
			$(bubbleSingle).append(valueSingleSpan);
			var singleRange:any = $('<input>', {'id': 'single-range', 'type': 'range', 'min': '50', 'max': '250', 'value': '100'});
			$(sliderSingle).append(singleRange);
			$(sliderSingle).append($('<div>', {'class': 'progress-bar'}));
			var scaleSingle = $('<div>', {'class': 'scale'});
			$(sliderSingle).append(scaleSingle);
			var spanScaleSingle1 = $('<span>', {'style': 'left: 0%'});
			$(scaleSingle).append(spanScaleSingle1);
			$(spanScaleSingle1).append($('<ins>', {'class': 'first-ins'}));
			var spanScaleSingle2 = $('<span>', {'class': 'second', 'style': 'left: 25%'});
			$(scaleSingle).append(spanScaleSingle2);
			$(spanScaleSingle2).append($('<ins>', {'class': 'second-ins'}));
			var spanScaleSingle3 = $('<span>', {'class': 'third', 'style': 'left: 49%'});
			$(scaleSingle).append(spanScaleSingle3);
			$(spanScaleSingle3).append($('<ins>', {'class': 'third-ins'}));
			var spanScaleSingle4 = $('<span>', {'class': 'fourth', 'style': 'left: 73%'});
			$(scaleSingle).append(spanScaleSingle4);
			$(spanScaleSingle4).append($('<ins>', {'class': 'fourth-ins'}));
			var spanScaleSingle5 = $('<span>', {'style': 'left: 95%'});
			$(scaleSingle).append(spanScaleSingle5);
			$(spanScaleSingle5).append($('<ins>', {'class': 'fifth-ins'}));

			var singleRange:any = document.getElementById("single-range");



			var multiRangeSlider = $('<div>', {'class': 'multi-range-slider'});
			$(sliders).append(multiRangeSlider);
			var bubbleMultiLeft = $('<div>', {'class': 'bubble-multi-left'});
			$(multiRangeSlider).append(bubbleMultiLeft);
			var valueMultiLeftSpan = $('<span>', {'class': 'value-multi-left-span'})
			$(bubbleMultiLeft).append(valueMultiLeftSpan);
			var bubbleMultiRight = $('<div>', {'class': 'bubble-multi-right'});
			$(multiRangeSlider).append(bubbleMultiRight);
			var valueMultiRightSpan = $('<span>', {'class': 'value-multi-right-span'})
			$(bubbleMultiRight).append(valueMultiRightSpan);
			var inputLeft:any = $('<input>', {'id': 'input-left', 'type': 'range', 'min': '50', 'max': '250', 'value': '100'});
			var inputRight:any = $('<input>', {'id': 'input-right', 'type': 'range', 'min': '50', 'max': '250', 'value': '100'});
			$(multiRangeSlider).append(inputLeft);
			$(multiRangeSlider).append(inputRight);
			var slider = $('<div>', {'class': 'slider'});
			$(multiRangeSlider).append(slider);
			$(slider).append($('<div>', {'class': 'track'}));
			$(slider).append($('<div>', {'class': 'range'}));
			$(slider).append($('<div>', {'class': 'thumb left'}));
			$(slider).append($('<div>', {'class': 'thumb right'}));
			var multiScale = $('<div>', {'class': 'multi-scale'});
			$(multiRangeSlider).append(multiScale);
			var spanMultiScale1 = $('<span>', {'style': 'left: 0%'});
			$(multiScale).append(spanMultiScale1);
			$(spanMultiScale1).append($('<ins>', {'class': 'multi-first-ins'}));
			var spanMultiScale2 = $('<span>', {'class': 'second', 'style': 'left: 25%'});
			$(multiScale).append(spanMultiScale2);
			$(spanMultiScale2).append($('<ins>', {'class': 'multi-second-ins'}));
			var spanMultiScale3 = $('<span>', {'class': 'third', 'style': 'left: 49%'});
			$(multiScale).append(spanMultiScale3);
			$(spanMultiScale3).append($('<ins>', {'class': 'multi-third-ins'}));
			var spanMultiScale4 = $('<span>', {'class': 'fourth', 'style': 'left: 73%'});
			$(multiScale).append(spanMultiScale4);
			$(spanMultiScale4).append($('<ins>', {'class': 'multi-fourth-ins'}));
			var spanMultiScale5 = $('<span>', {'style': 'left: 95%'});
			$(multiScale).append(spanMultiScale5);
			$(spanMultiScale5).append($('<ins>', {'class': 'multi-fifth-ins'}));

			var range = <HTMLInputElement>document.querySelector(".slider > .range"),
				thumbLeft = <HTMLInputElement>document.querySelector(".slider > .thumb.left"),
				thumbRight = <HTMLInputElement>document.querySelector(".slider > .thumb.right"),
				inputLeft:any = <HTMLInputElement>document.getElementById("input-left"),
				inputRight:any = <HTMLInputElement>document.getElementById("input-right")


			//*-DEMO-* ФУНКЦИЯ ВЫБОРА SINGLE ИЛИ MULTIRANGE
			$("input[type='radio']").change(function(){
				if($(radioMulti).prop("checked")) {
					$(sliderSingle).hide();
					$(".multi-range-slider").show();
				} else {
					$(sliderSingle).show();
					$(".multi-range-slider").hide();
				}
			});
			
			//ИЗМЕНЕНИЕ ПОЛОЖЕНИЯ (ВЕРТИКАЛЬ) И ИЗМЕНЕНИЕ ШАГА (STEP)
			if(settings.vertical) {
				sliders.style.transform = "rotate(270deg)";
			} else {
				sliders.style.transform = "rotate(0deg)";
			}
			singleRange.step = settings.step;
			inputLeft.step = settings.step;
			inputRight.step = settings.step;


			//SINGLE ИЛИ MULTIRANGE
			if(settings.multirange) {
				$(sliderSingle).hide();
				$(".multi-range-slider").show();
			} else {
				$(sliderSingle).show();
				$(".multi-range-slider").hide();
			}

			//BUBBLES ВКЛ. ВЫКЛ.
			if(settings.bubbles) {
				$(".bubble-single").removeClass("none");
				$(".bubble-multi-right").removeClass("none");
				$(".bubble-multi-left").removeClass("none");
			} else {
				$(".bubble-single").addClass("none");
				$(".bubble-multi-right").addClass("none");
				$(".bubble-multi-left").addClass("none");
			}

			//WIDTH
			$(sliders).css("width", settings.width + "vw");
			$(inputLeft).css("width", settings.width + "vw");
			$(inputRight).css("width", settings.width + "vw");
			$(singleRange).css("width", settings.width + "vw");
			$(sliderSingle).css("width", settings.width + "vw");
			$(".scale").css("width", settings.width + "vw");
			$(".multi-scale").css("width", settings.width + "vw");

			//ИЗМЕНЕНИЕ MIN MAX
			singleRange.min = settings.min
			singleRange.max = settings.max
			inputLeft.min = settings.min
			inputRight.min = settings.min
			inputLeft.max = settings.max
			inputRight.max = settings.max


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
						var positionXY: number,
							compareInputs: boolean,
							countPosition: number,
							inputLeftMath: number,
							inputRightMath: number,
							x100: number;
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

				/////////////////////////////////MULTI
				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				getLeftValue: function() {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					var newValue = Number( (inputLeft.value - inputLeft.min) * 100 / (inputLeft.max - inputLeft.min) ),
						newPosition = -10 - (newValue * 0.05);
					$(".bubble-multi-left").css("left", `calc(${newValue}% + (${newPosition}px))`);
					$(".bubble-multi-left").css("bottom", "50px");
					//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
					$(".value-multi-left-span").text(inputLeft.value);
				},
				getRightValue: function() {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					var newValue = Number( (inputRight.value - inputRight.min) * 100 / (inputRight.max - inputRight.min) ),
						newPosition = -10 - (newValue * 0.05);
					$(".bubble-multi-right").css("left", `calc(${newValue}% + (${newPosition}px))`);
					$(".bubble-multi-right").css("bottom", "50px");
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
				},

				/////////////////////////////////SINGLE
				//ДОБАВЛЯЕТ PROGRESS BAR (SLIDER-SINGLE)
				countProgress: function() {
					$('#single-range').on('input', function(e){
						var min:any = (<HTMLInputElement>e.target).min,
							max:any = (<HTMLInputElement>e.target).max,
							val:any = (<HTMLInputElement>e.target).value;
						$('.progress-bar').css({
							'width': (val - min) * 100 / (max - min) + '%'
						});
					}).trigger('input');
				},

				//BUBBLE SINGLE СО ЗНАЧЕНИЕМ VALUE
				typeBubbleValue: function() {
					$(".value-single-span").text(singleRange.value);
				},
				getSingleValue: function() {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					var newValue = Number( (singleRange.value - singleRange.min) * 100 / (singleRange.max - singleRange.min) ),
						newPosition = 5 - (newValue * 0.25);
					$(".bubble-single").css("left", `calc(${newValue}% + (${newPosition}px))`);
					//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
					$(".value-single-span").text(singleRange.value);
				},

				//ДИАПАЗОН-ШКАЛА(SINGLE)
				scaleSingle: function() {
					$(".first-ins").text(singleRange.min);
					$(".second-ins").text(Math.floor((singleRange.max - singleRange.min) / 4 + (+singleRange.min)));
					$(".third-ins").text(Math.round((singleRange.max - singleRange.min) / 2 + (+singleRange.min)));
					$(".fourth-ins").text(Math.round(singleRange.max - ((singleRange.max - singleRange.min) / 4)));
					$(".fifth-ins").text(singleRange.max);
				}
			};
			view.getLeftValue();
			view.getRightValue();
			view.scaleMulti();
			view.countProgress();
			view.typeBubbleValue();
			view.getSingleValue();
			view.scaleSingle();

			//=======================================================================
			var controller = {
				//ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
				inTouchLeft: function() {inputLeft.addEventListener("input", model.setLeftValue);},
				inTouchRight: function() {inputRight.addEventListener("input", model.setRightValue);},
			
				//ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
				inMoveLeft: function() {inputLeft.onmousemove = function(e: number) {
					model.MouseMove.call(inputLeft, e);};
				},
				inMoveRight: function() {inputRight.onmousemove = function(e: number) {
					model.MouseMove.call(inputRight, e);};
				},

				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				inGetLeft: function() {inputLeft.addEventListener('input', view.getLeftValue);},
				inGetRight: function() {inputRight.addEventListener('input', view.getRightValue);},
				
				/////////////////////////////////SINGLE
				//BUBBLE SINGLE СО ЗНАЧЕНИЕМ VALUE
				showBubbleValue: function() {singleRange.addEventListener('input', view.getSingleValue)}
			};
			controller.inTouchLeft();
			controller.inTouchRight();
			controller.inMoveLeft();
			controller.inMoveRight();
			controller.inGetLeft();
			controller.inGetRight();
			controller.showBubbleValue();
		});
	};
})(jQuery);	

(<any>$("body")).rangeSliders();