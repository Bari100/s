(function ($) {
	(<any>$.fn).rangeSliders = function (options: object) {
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
			var sliders:any = <HTMLElement>document.querySelector(".sliders"),
				radioMulti = document.querySelector(".choose-multi");
			
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
			class Model {
					//ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
				setLeftValue(testMin:number = -666.666, testMax:number = -666.666, testLeftVal:number = -666.666, testRightVal:number = -666.666) {
					let	min = settings.min,
						max = settings.max
					inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - 1)
					let testCountVal = Math.min(testLeftVal, testRightVal - 1)
					let percent
					if(testLeftVal == -666.666) {
						percent = ((inputLeft.value - min) / (max - min)) * 100
					} else {percent = ((testCountVal - testMin) / (testMax - testMin)) * 100}
					thumbLeft.style.left = percent + "%"
					range.style.left = percent + "%"
				}

				setRightValue(testMin:number = -666.666, testMax:number = -666.666, testLeftVal:number = -666.666, testRightVal:number = -666.666) {
					let	min = settings.min,
						max = settings.max
					inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + 1)
					let testCountVal = Math.max(testRightVal, testLeftVal + 1)
					let percent
					if(testRightVal == -666.666){
						percent = ((inputRight.value - min) / (max - min)) * 100
					} else {percent = ((testCountVal - testMin) / (testMax - testMin)) * 100}
					thumbRight.style.right = (100 - percent) + "%"
					range.style.right = (100 - percent) + "%"
				}

					//ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
					MouseMove(eventArg, min:number, max:number, width, testValLeft:number = -666.666, testValRight:number = -666.666, testPosition:number = -666.666) {
						var positionXY: number,
							compareInputs: boolean,
							countPosition: number,
							inputLeftMath: number,
							inputRightMath: number,
							x100: number;
                        positionXY = eventArg.offsetX;//offsetX и offsetY относятся к родительскому контейнеру, тогда как pageX и pageY относятся к документу. Если в данной ситуации использовать clientX или pageX, screenX, то при display: flex данная функция будет работать некорректно.
                        countPosition = ((+inputLeft.min) + (+inputLeft.max)) / $(sliders).width()
                        let testCountPosition = (min + max) / width
                        /* percentage position Y of cursor  */
                        if(testPosition == -666.666) {
                            x100 = positionXY * countPosition
                        } else {x100 = testPosition * testCountPosition}
                        
                        /* absolute distance from respective slider values */
                        inputLeftMath = Math.abs(inputLeft.value - x100)
                        inputRightMath = Math.abs(inputRight.value - x100)
                        let testInputLeftMath = Math.abs(testValLeft - x100)
                        let testInputRightMath = Math.abs(testValRight - x100)
                        if(testValLeft == -666.666 && testValRight == -666.666) {
                            compareInputs = inputLeftMath < inputRightMath
                        } else {compareInputs = testInputLeftMath < testInputRightMath}
                        
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
			let model = new Model
			model.setLeftValue();
			model.setRightValue();
			module.exports = Model
			//=======================================================================
			class View {
				/////////////////////////////////MULTI
				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				static countMultiPosition:number|string
				getLeftValue(min:number, max:number, testVal:number = -666.666) {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$('#single-range').on('input', function(){
						let newValue
						let val = inputLeft.value
						if (testVal == -666.666) {
							newValue = (val - min) * 100 / (max - min)
						} else {newValue = (testVal - min) * 100 / (max - min)}
						let newPosition = -10 - (newValue * 0.05);
						View.countMultiPosition = `calc(${newValue}% + (${newPosition}px))`
						$(".bubble-multi-left").css("left", View.countMultiPosition)
						$(".bubble-multi-left").css("bottom", "50px")
						//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
						$(".value-multi-left-span").text(inputLeft.value)
					}).trigger('input')
				}
				getRightValue(min:number, max:number, testVal:number = -666.666) {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$('#single-range').on('input', function(){
						let newValue
						let val = inputRight.value
						if (testVal == -666.666) {
							newValue = (val - min) * 100 / (max - min)
						} else {newValue = (testVal - min) * 100 / (max - min)}
						let newPosition = -10 - (newValue * 0.05)
						View.countMultiPosition = `calc(${newValue}% + (${newPosition}px))`
						$(".bubble-multi-right").css("left", View.countMultiPosition)
						$(".bubble-multi-right").css("bottom", "50px")
						//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
						$(".value-multi-right-span").text(inputRight.value)
					}).trigger('input')
				}

				//ДИАПАЗОН-ШКАЛА(MULTI)
				scaleMulti(min:number, max:number) {
					let scaleMultiObj = {
						first: min,
						second: Math.floor((max - min) / 4 + (+min)),
						third: Math.round((max - min) / 2 + (+min)),
						fourth: Math.round(max - ((max - min) / 4)),
						fifth: max
					}

					$(".multi-first-ins").first().text(scaleMultiObj.first);//.first() because .text() makes double value when testing scaleMulti()
					$(".multi-second-ins").first().text(scaleMultiObj.second);
					$(".multi-third-ins").first().text(scaleMultiObj.third);
					$(".multi-fourth-ins").first().text(scaleMultiObj.fourth);
					$(".multi-fifth-ins").first().text(scaleMultiObj.fifth);
				}

				/////////////////////////////////SINGLE
				//ДОБАВЛЯЕТ PROGRESS BAR (SLIDER-SINGLE)
				static progressBarWidth:number//because can't create const or let here
				countProgress(min:number, max:number, testVal:number = -666.666) {
					$('#single-range').on('input', function(e){
						let val:number = +((<HTMLInputElement>e.target).value);
						if (testVal == -666.666) {
							View.progressBarWidth = (val - min) * 100 / (max - min)
						} else {View.progressBarWidth = (testVal - min) * 100 / (max - min)}
						$('.progress-bar').css({
							'width': View.progressBarWidth + '%'
						});
					}).trigger('input');
				}

				//BUBBLE SINGLE СО ЗНАЧЕНИЕМ VALUE
				static countSinglePosition:number|string//because can't create const or let here
				getSingleValue(min:number, max:number, testVal:number = -666.666) {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$('#single-range').on('input', function(){
						let newValue:number
						let val = singleRange.value;
						if (testVal == -666.666) {
							newValue = (val - min) * 100 / (max - min)
						} else {newValue = (testVal - min) * 100 / (max - min)}
						let	newPosition = 5 - (newValue * 0.25)
						View.countSinglePosition = `calc(${newValue}% + (${newPosition}px))`
						$(".bubble-single").css("left", View.countSinglePosition);
						//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
						$(".value-single-span").text(singleRange.value);
					}).trigger('input')
				}

				//ДИАПАЗОН-ШКАЛА(SINGLE)
				scaleSingle(min:number, max:number) {
					let scaleSingleObj = {
						first: min,
						second: Math.floor((max - min) / 4 + (+min)),
						third: Math.round((max - min) / 2 + (+min)),
						fourth: Math.round(max - ((max - min) / 4)),
						fifth: max
					}
					// console.log(scaleSingleObj.first)
					$(".first-ins").first().text(scaleSingleObj.first);//.first() because .text() makes double value when testing scaleSingle()
					$(".second-ins").first().text(scaleSingleObj.second);
					$(".third-ins").first().text(scaleSingleObj.third);
					$(".fourth-ins").first().text(scaleSingleObj.fourth);
					$(".fifth-ins").first().text(scaleSingleObj.fifth);
				}
			}
			let view = new View
			module.exports = View
			view.getLeftValue(settings.min, settings.max);
			view.getRightValue(settings.min, settings.max);
			view.scaleMulti(settings.min, settings.max);
			view.countProgress(settings.min, settings.max);
			// view.typeBubbleValue();
			view.getSingleValue(settings.min, settings.max);
			view.scaleSingle(settings.min, settings.max);

			//=======================================================================
			class Сontroller {
				//ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
				inTouchLeft() {inputLeft.addEventListener("input", model.setLeftValue);}
				inTouchRight() {inputRight.addEventListener("input", model.setRightValue);}
			
				//ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
				// inMoveLeft() {inputLeft.onmousemove = function(e: number) {
				// 	model.MouseMove.call(inputLeft, e);};
				// }
				// inMoveRight() {inputRight.onmousemove = function(e: number) {
				// 	model.MouseMove.call(inputRight, e);};
				// }
				inMoveLeft() {inputLeft.addEventListener('mousemove', model.MouseMove)}
				inMoveRight() {inputRight.addEventListener('mousemove', model.MouseMove)}

				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				inGetLeft() {inputLeft.addEventListener('input', view.getLeftValue)}
				inGetRight() {inputRight.addEventListener('input', view.getRightValue)}
				
				/////////////////////////////////SINGLE
				//BUBBLE SINGLE СО ЗНАЧЕНИЕМ VALUE
				// showBubbleValue: function() {singleRange.addEventListener('input', view.getSingleValue)}
			};
			let controller = new Сontroller
			module.exports = Сontroller
			controller.inTouchLeft();
			controller.inTouchRight();
			controller.inMoveLeft();
			controller.inMoveRight();
			controller.inGetLeft();
			controller.inGetRight();
			// controller.showBubbleValue();
		});
	};
})(jQuery);	

(<any>$("body")).rangeSliders();