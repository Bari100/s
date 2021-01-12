import { htmlPrefilter } from "jquery";

;(function ($) {
	(<any>$.fn).rangeSliders = function (silderNum: number, vertical: boolean) {
		let settings = {
			step: 1,
			vertical: false,
			multirange: true,
			bubbles: true,
			width: 26,
			min: 20,
			max: 280,
		  };
		return this.each(function () {
			var sliders:any = <HTMLElement>document.querySelector(`.sliders${silderNum}`),
				radioMulti = document.querySelector(`.choose-multi${silderNum}`);

			var sliderSingle = $('<div>', {'class': `slider-single${silderNum}`});
			$(sliders).append(sliderSingle);
			var bubbleSingle = $('<div>', {'class': `bubble-single${silderNum}`});
			$(sliderSingle).append(bubbleSingle);
			var valueSingleSpan = $('<span>', {'class': `value-single-span${silderNum}`})
			$(bubbleSingle).append(valueSingleSpan);
			var singleRange:any = $('<input>', {'class': `single-range${silderNum}`, 'type': 'range', 'min': '50', 'max': '250', 'value': '50'});
			$(sliderSingle).append(singleRange);
			$(sliderSingle).append($('<div>', {'class': `progress-bar${silderNum}`}));
			var scaleSingle = $('<div>', {'class': `scale${silderNum}`});
			$(sliderSingle).append(scaleSingle);
			var spanScaleSingle1 = $('<span>', {'style': 'left: 0%'});
			$(scaleSingle).append(spanScaleSingle1);
			$(spanScaleSingle1).append($('<ins>', {'class': `first-ins${silderNum}`}));
			var spanScaleSingle2 = $('<span>', {'class': 'second', 'style': 'left: 25%'});
			$(scaleSingle).append(spanScaleSingle2);
			$(spanScaleSingle2).append($('<ins>', {'class': `second-ins${silderNum}`}));
			var spanScaleSingle3 = $('<span>', {'class': 'third', 'style': 'left: 49%'});
			$(scaleSingle).append(spanScaleSingle3);
			$(spanScaleSingle3).append($('<ins>', {'class': `third-ins${silderNum}`}));
			var spanScaleSingle4 = $('<span>', {'class': 'fourth', 'style': 'left: 73%'});
			$(scaleSingle).append(spanScaleSingle4);
			$(spanScaleSingle4).append($('<ins>', {'class': `fourth-ins${silderNum}`}));
			var spanScaleSingle5 = $('<span>', {'style': 'left: 95%'});
			$(scaleSingle).append(spanScaleSingle5);
			$(spanScaleSingle5).append($('<ins>', {'class': `fifth-ins${silderNum}`}));
			
			var singleRange:any = document.querySelector(`.single-range${silderNum}`);



			var multiRangeSlider = $('<div>', {'class': `multi-range-slider${silderNum}`})
			$(sliders).append(multiRangeSlider)
			var bubbleMultiLeft = $('<div>', {'class': `bubble-multi-left${silderNum}`})
			$(multiRangeSlider).append(bubbleMultiLeft)
			var valueMultiLeftSpan = $('<span>', {'class': `value-multi-left-span${silderNum}`})
			$(bubbleMultiLeft).append(valueMultiLeftSpan)
			var bubbleMultiRight = $('<div>', {'class': `bubble-multi-right${silderNum}`})
			$(multiRangeSlider).append(bubbleMultiRight)
			var valueMultiRightSpan = $('<span>', {'class': `value-multi-right-span${silderNum}`})
			$(bubbleMultiRight).append(valueMultiRightSpan)
			var inputLeft:any = $('<input>', {'class': `input-left${silderNum}`, 'type': 'range', 'min': '50', 'max': '250', 'value': '100'})
			var inputRight:any = $('<input>', {'class': `input-right${silderNum}`, 'type': 'range', 'min': '50', 'max': '250', 'value': '200'})
			$(multiRangeSlider).append(inputLeft)
			$(multiRangeSlider).append(inputRight)
			var slider = $('<div>', {'class': `slider${silderNum}`})
			$(multiRangeSlider).append(slider)
			$(slider).append($('<div>', {'class': `track${silderNum}`}))
			$(slider).append($('<div>', {'class': `range${silderNum}`}))
			$(slider).append($('<div>', {'class': `thumb${silderNum} left${silderNum}`}))
			$(slider).append($('<div>', {'class': `thumb${silderNum} right${silderNum}`}))
			var multiScale = $('<div>', {'class': `multi-scale${silderNum}`})
			$(multiRangeSlider).append(multiScale)
			var spanMultiScale1 = $('<span>', {'style': 'left: 0%'});
			$(multiScale).append(spanMultiScale1)
			$(spanMultiScale1).append($('<ins>', {'class': `multi-first-ins${silderNum}`}))
			var spanMultiScale2 = $('<span>', {'class': 'second', 'style': 'left: 25%'})
			$(multiScale).append(spanMultiScale2)
			$(spanMultiScale2).append($('<ins>', {'class': `multi-second-ins${silderNum}`}))
			var spanMultiScale3 = $('<span>', {'class': 'third', 'style': 'left: 49%'})
			$(multiScale).append(spanMultiScale3)
			$(spanMultiScale3).append($('<ins>', {'class': `multi-third-ins${silderNum}`}))
			var spanMultiScale4 = $('<span>', {'class': 'fourth', 'style': 'left: 73%'})
			$(multiScale).append(spanMultiScale4)
			$(spanMultiScale4).append($('<ins>', {'class': `multi-fourth-ins${silderNum}`}))
			var spanMultiScale5 = $('<span>', {'style': 'left: 95%'})
			$(multiScale).append(spanMultiScale5)
			$(spanMultiScale5).append($('<ins>', {'class': `multi-fifth-ins${silderNum}`}))

			var range = <HTMLInputElement>document.querySelector(`.slider${silderNum} > .range${silderNum}`),
				thumbLeft = <HTMLInputElement>document.querySelector(`.slider${silderNum} > .thumb${silderNum}.left${silderNum}`),
				thumbRight = <HTMLInputElement>document.querySelector(`.slider${silderNum} > .thumb${silderNum}.right${silderNum}`),
				inputLeft:any = <HTMLInputElement>document.querySelector(`.input-left${silderNum}`),
				inputRight:any = <HTMLInputElement>document.querySelector(`.input-right${silderNum}`)


			//*-DEMO-* ФУНКЦИЯ ВЫБОРА SINGLE ИЛИ MULTIRANGE
			$(`.choose-multi${silderNum}`).on('click', function(){
				$(sliderSingle).hide()
				$(`.multi-range-slider${silderNum}`).show()
				$(`.change-value-multi-block${silderNum}`).show()
				$(`.change-value-block${silderNum}`).hide()
			})
			$(`.choose-single${silderNum}`).on('click', function(){
				$(sliderSingle).show()
				$(`.multi-range-slider${silderNum}`).hide()
				$(`.change-value-multi-block${silderNum}`).hide()
				$(`.change-value-block${silderNum}`).show()
			})
			
			if(settings.multirange){$(`.change-value-block${silderNum}`).hide()}

			//*-DEMO-* BUBBLE ON/OFF
			$(`.bubble-on${silderNum}`).on('click', function(){
				$(`.bubble-single${silderNum}`).removeClass("none")
				$(`.bubble-multi-right${silderNum}`).removeClass("none")
				$(`.bubble-multi-left${silderNum}`).removeClass("none")
			})
			$(`.bubble-off${silderNum}`).on('click', function(){
				$(`.bubble-single${silderNum}`).addClass("none")
				$(`.bubble-multi-right${silderNum}`).addClass("none")
				$(`.bubble-multi-left${silderNum}`).addClass("none")
			})

			//*-DEMO-* ФУНКЦИЯ ВЫБОРА ГОРИЗОНТ ИЛИ ВЕРТИКАЛЬ
			$(`.horizontal${silderNum}`).on('click', function(){
				sliders.style.transform = "rotate(0deg)"
				// settings.width = settings.width
				$(sliders).css("width", settings.width + "vw")
				$(inputLeft).css("width", settings.width + "vw")
				$(inputRight).css("width", settings.width + "vw")
				$(singleRange).css("width", settings.width + "vw")
				$(sliderSingle).css("width", settings.width + "vw")
				$(`.scale${silderNum}`).css("width", settings.width + "vw")
				$(`.multi-scale${silderNum}`).css("width", settings.width + "vw")
			})
			$(`.vertical${silderNum}`).on('click', function(){
				sliders.style.transform = "rotate(270deg)"
				let newWidth = (window.screen.width * window.devicePixelRatio*settings.width)/100
				$(sliders).css("width", newWidth + "px")
				$(inputLeft).css("width", newWidth + "px")
				$(inputRight).css("width", newWidth + "px")
				$(singleRange).css("width", newWidth + "px")
				$(sliderSingle).css("width", newWidth + "px")
				$(`.scale${silderNum}`).css("width", newWidth + "px")
				$(`.multi-scale${silderNum}`).css("width", newWidth + "px")
			})

			//*-DEMO-* ФУНКЦИЯ STEP
			$(`.change-step${silderNum}`).on('click', function(){
				$(singleRange).on('input', function(){singleRange.step = (<HTMLInputElement>document.getElementById(`step_number${silderNum}`)).value})
				inputLeft.step = (<HTMLInputElement>document.getElementById(`step_number${silderNum}`)).value
				inputRight.step = (<HTMLInputElement>document.getElementById(`step_number${silderNum}`)).value
			})
			$(`.first-ins${silderNum}, .second-ins${silderNum}, .third-ins${silderNum}, .fourth-ins${silderNum}, .fifth-ins${silderNum}`)
				.on('mouseout', function(){
					$(singleRange).on('input', function(){singleRange.step = (<HTMLInputElement>document.getElementById(`step_number${silderNum}`)).value})})
				
			//*-DEMO-* ФУНКЦИЯ ИЗМЕНЕНИЯ И ОТОБРАЖЕНИЯ VALUE
			$(`.change-value${silderNum}`).on('click', function(){
				singleRange.value = (<HTMLInputElement>document.getElementById(`slider-value${silderNum}`)).value
				Model.progressBarWidth = (singleRange.value - settings.min) * 100 / (settings.max - settings.min)
				$(`.progress-bar${silderNum}`).css({
					'width': Model.progressBarWidth + '%'
				})

				let newValue
				newValue = (singleRange.value - settings.min) * 100 / (settings.max - settings.min)
				let	newPosition = 5 - (newValue * 0.25)
				Model.insCountSinglePosition = `calc(${newValue}% + (${newPosition}px))`
				$(`.bubble-single${silderNum}`).css("left", Model.insCountSinglePosition)
				$(`.value-single-span${silderNum}`).text(singleRange.value);
			})
			// $(singleRange).on('input', function(){
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

			$(`.change-value-multi${silderNum}`).on('click', function(){
				inputLeft.value = (<HTMLInputElement>document.getElementById(`multislider-value-1${silderNum}`)).value
				inputRight.value = (<HTMLInputElement>document.getElementById(`multislider-value-2${silderNum}`)).value
				inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - 1)
				Model.percentLeft = ((inputLeft.value - settings.min) / (settings.max - settings.min)) * 100
				inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + 1)
				Model.percentRight = ((inputRight.value - settings.min) / (settings.max - settings.min)) * 100
				thumbLeft.style.left = Model.percentLeft + "%"
				range.style.left = Model.percentLeft + "%"
				thumbRight.style.right = (100 - Model.percentRight) + "%"
				range.style.right = (100 - Model.percentRight) + "%"

				let newValueLeft
				let newValueRight
				newValueLeft = (inputLeft.value - settings.min) * 100 / (settings.max - settings.min)
				newValueRight = (inputRight.value - settings.min) * 100 / (settings.max - settings.min)
				let newPositionLeft = -10 - (newValueLeft * 0.05)
				let newPositionRight = -10 - (newValueLeft * 0.05)
				Model.countMultiPositionLeft = `calc(${newValueLeft}% + (${newPositionLeft}px))`
				Model.countMultiPositionRight = `calc(${newValueRight}% + (${newPositionRight}px))`
				$(`.bubble-multi-left${silderNum}`).css("left", Model.countMultiPositionLeft)
				$(`.bubble-multi-right${silderNum}`).css("left", Model.countMultiPositionRight)
				$(`.value-multi-left-span${silderNum}`).text(inputLeft.value)
				$(`.value-multi-right-span${silderNum}`).text(inputRight.value)
			})
			// $(inputLeft).on('input', function(){
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


			//WIDTH
			$(sliders).css("width", settings.width + "vw")
			$(inputLeft).css("width", settings.width + "vw")
			$(inputRight).css("width", settings.width + "vw")
			$(singleRange).css("width", settings.width + "vw")
			$(sliderSingle).css("width", settings.width + "vw")
			$(`.scale${silderNum}`).css("width", settings.width + "vw")
			$(`.multi-scale${silderNum}`).css("width", settings.width + "vw")

			//ИЗМЕНЕНИЕ ПОЛОЖЕНИЯ (ВЕРТИКАЛЬ) И ИЗМЕНЕНИЕ ШАГА (STEP)
			if(settings.vertical) {
				sliders.style.transform = "rotate(270deg)"
				let newWidth = (window.screen.width * window.devicePixelRatio*settings.width)/100
				$(sliders).css("width", newWidth + "px")
				$(inputLeft).css("width", newWidth + "px")
				$(inputRight).css("width", newWidth + "px")
				$(singleRange).css("width", newWidth + "px")
				$(sliderSingle).css("width", newWidth + "px")
				$(`.scale${silderNum}`).css("width", newWidth + "px")
				$(`.multi-scale${silderNum}`).css("width", newWidth + "px")
			} else {
				sliders.style.transform = "rotate(0deg)"
			}
			singleRange.step = settings.step;
			inputLeft.step = settings.step;
			inputRight.step = settings.step;


			//SINGLE ИЛИ MULTIRANGE
			if(settings.multirange) {
				$(sliderSingle).hide();
				$(`.multi-range-slider${silderNum}`).show();
			} else {
				$(sliderSingle).show();
				$(`.multi-range-slider${silderNum}`).hide();
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

			//ИЗМЕНЕНИЕ MIN MAX
			singleRange.min = settings.min
			singleRange.max = settings.max
			inputLeft.min = settings.min
			inputRight.min = settings.min
			inputLeft.max = settings.max
			inputRight.max = settings.max

			//=====================================================================================================================================================================================================================
			class Model {
				static percentLeft:number
				static percentRight:number
				static scaleValues:number[]
				static countMultiPositionRight:number|string
				static progressBarWidth:number//because can't create const or let here
				static insCountSinglePosition:number|string
				static valResultIns:number
				static countMultiPositionLeft:number|string
				static countBubblePosition:number|string
				static countSingBubblePosition:number|string
				static defaultNum:number = -666.666
				static test = {
					min: Model.defaultNum,
					max: Model.defaultNum,
					leftVal: Model.defaultNum,
					rightVal: Model.defaultNum,
				}

				//ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
				setLeftValue(tests = Model.test) {//!!!!!!!!!!
					let	min = settings.min,
						max = settings.max,
						test = Model.test,
						defaultNum = Model.defaultNum

					inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - 1)
					let testCountVal = Math.min(test.leftVal, test.rightVal - 1)
					test.leftVal == defaultNum
						? Model.percentLeft = ((inputLeft.value - min) / (max - min)) * 100
						: Model.percentLeft = ((testCountVal - test.min) / (test.max - test.min)) * 100
				}

				setRightValue(tests = Model.test) {//!!!!!!!!!!
					let	min = settings.min,
						max = settings.max,
						test = Model.test,
						defaultNum = Model.defaultNum

					inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + 1)
					let testCountVal = Math.max(test.rightVal, test.leftVal + 1)
					test.rightVal == defaultNum
						? Model.percentRight = 100 - (((inputRight.value - min) / (max - min)) * 100)
						: Model.percentRight = 100 - (((testCountVal - test.min) / (test.max - test.min)) * 100)
				}

				//ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
				MouseMove(eventArg, width, testPosition:number = Model.defaultNum, tests = Model.test) {//!!!!!!!!!!
					let positionXY: number,
						compareInputs: boolean,
						countPosition: number,
						inputLeftMath: number,
						inputRightMath: number,
						x100: number,
						test = Model.test,
						defaultNum = Model.defaultNum

					positionXY = eventArg.offsetX;//offsetX и offsetY относятся к родительскому контейнеру, тогда как pageX и pageY относятся к документу. Если в данной ситуации использовать clientX или pageX, screenX, то при display: flex данная функция будет работать некорректно.
					countPosition = ((+inputLeft.min) + (+inputLeft.max)) / $(sliders).width()
					let testCountPosition = (test.min + test.max) / width
					/* percentage position Y of cursor  */
					testPosition == defaultNum
						? x100 = positionXY * countPosition
						: x100 = testPosition * testCountPosition
					
					/* absolute distance from respective slider values */
					inputLeftMath = Math.abs(inputLeft.value - x100)
					inputRightMath = Math.abs(inputRight.value - x100)
					let testInputLeftMath = Math.abs(test.leftVal - x100)
					let testInputRightMath = Math.abs(test.rightVal - x100)
					test.leftVal == defaultNum && test.rightVal == defaultNum
						? compareInputs = inputLeftMath < inputRightMath
						: compareInputs = testInputLeftMath < testInputRightMath
					
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

				bindScaleBubbleRangeMulti(tests = Model.test){//!!!!!!!!!!
					let	newValue,
						test = Model.test,
						defaultNum = Model.defaultNum

					$(`.multi-first-ins${silderNum}`).on('click', function(){
						inputLeft.value = +$(`.multi-first-ins${silderNum}`).text()
					})
					$(`.multi-second-ins${silderNum}`).on('click', function(){
						inputLeft.value = +$(`.multi-second-ins${silderNum}`).text()
					})
					$(`.multi-third-ins${silderNum}`).on('click', function(){
						inputLeft.value = +$(`.multi-third-ins${silderNum}`).text()
					})
					$(`.multi-fourth-ins${silderNum}`).on('click', function(){
						inputLeft.value = +$(`.multi-fourth-ins${silderNum}`).text()
					})
					$(`.multi-fifth-ins${silderNum}`).on('click', function(){
						inputLeft.value = +$(`.multi-fifth-ins${silderNum}`).text()
					})

					test.leftVal == defaultNum 
						? newValue = (inputLeft.value - settings.min) * 100 / (settings.max - settings.min)
						: newValue = (test.leftVal - test.min) * 100 / (test.max - test.min)
					let newPosition = -10 - (newValue * 0.05)
					Model.countMultiPositionLeft = `calc(${newValue}% + (${newPosition}px))`

					test.leftVal == defaultNum
						? Model.percentLeft = ((inputLeft.value - settings.min) / (settings.max - settings.min)) * 100
						: Model.percentLeft = ((test.leftVal - test.min) / (test.max - test.min)) * 100
					
					let newValueRight = (+$(`.multi-fifth-ins${silderNum}`).text() - settings.min) * 100 / (settings.max - settings.min)
					let newPositionRight = -10 - (newValueRight * 0.05)
					Model.countMultiPositionRight = `calc(${newValueRight}% + (${newPositionRight}px))`
				}

				countProgress(min:number, max:number, testVal:number = Model.defaultNum) {//!!!!!!!!!!
					$(singleRange).on('input', function(){
						let val:number = singleRange.value
						if (testVal == Model.defaultNum) {
							Model.progressBarWidth = (val - min) * 100 / (max - min)
						} else {Model.progressBarWidth = (testVal - min) * 100 / (max - min)}
					}).trigger('input')
				}

				bindScaleBubbleRangeSing(testMin:number = Model.defaultNum, testMax:number = Model.defaultNum, testVal:number = Model.defaultNum){//!!!!!!!!!!
					let newValue:number
					$(`.first-ins${silderNum}`).on('click', function(){
						Model.valResultIns = +$(`.first-ins${silderNum}`).text()
						singleRange.value = $(`.first-ins${silderNum}`).text()
					})
					$(`.second-ins${silderNum}`).on('click', function(){
						Model.valResultIns = +$(`.second-ins${silderNum}`).text()
						singleRange.value = $(`.second-ins${silderNum}`).text()
					})
					$(`.third-ins${silderNum}`).on('click', function(){
						Model.valResultIns = +$(`.third-ins${silderNum}`).text()
						singleRange.value = $(`.third-ins${silderNum}`).text()
					})
					$(`.fourth-ins${silderNum}`).on('click', function(){
						Model.valResultIns = +$(`.fourth-ins${silderNum}`).text()
						singleRange.value = $(`.fourth-ins${silderNum}`).text()
					})
					$(`.fifth-ins${silderNum}`).on('click', function(){
						Model.valResultIns = +$(`.fifth-ins${silderNum}`).text()
						singleRange.value = $(`.fifth-ins${silderNum}`).text()
					})

					if (testVal == Model.defaultNum) newValue = (Model.valResultIns - settings.min) * 100 / (settings.max - settings.min)
					else newValue = (testVal - testMin) * 100 / (testMax - testMin)
					let	newPosition = 5 - (newValue * 0.25)
					Model.insCountSinglePosition = `calc(${newValue}% + (${newPosition}px))`

					if (testVal == Model.defaultNum) Model.progressBarWidth = (Model.valResultIns - settings.min) * 100 / (settings.max - settings.min)
					else Model.progressBarWidth = (testVal - testMin) * 100 / (testMax - testMin)
				}

				bubbleCount(input, min:number, max:number, testVal:number = Model.defaultNum) {//!!!!!!!!!!
					$(input).on('input', function(){
						let newValue
						let newPosition
						if (testVal == Model.defaultNum) newValue = (input.value - min) * 100 / (max - min)
						else newValue = (testVal - min) * 100 / (max - min)
						let newSingPosition = 5 - (newValue * 0.25)
						newPosition = -10 - (newValue * 0.05)
						Model.countBubblePosition = `calc(${newValue.toFixed(4)}% + (${newPosition.toFixed(4)}px))`
						Model.countSingBubblePosition = `calc(${newValue.toFixed(4)}% + (${newSingPosition.toFixed(4)}px))`
					}).trigger('input')
				}

				countScale(min:number, max:number) {
					Model.scaleValues = [
						Math.round((max - min) / 4 + (+min)),
						Math.round((max - min) / 2 + (+min)),
						Math.round(max - ((max - min) / 4)),
					]
				}
				
			};
			let model = new Model
			model.setLeftValue();
			model.setRightValue();
			model.bindScaleBubbleRangeSing()
			model.countProgress(settings.min, settings.max)
			model.bubbleCount(inputLeft, settings.min, settings.max)
			model.bubbleCount(inputRight, settings.min, settings.max)
			model.bubbleCount(singleRange, settings.min, settings.max)
			model.bindScaleBubbleRangeMulti()
			model.countScale(settings.min, settings.max)

			//=====================================================================================================================================================================================================================
			class View {
				static position:number
				static countMultiPositionLeft:number|string
				static countMultiPositionRight:number|string
				static progressBarWidth:number//because can't create const or let here
				static bubblePosition:number|string
				static valResultInsView:number
				static scaleValues:number[] = []


				setLeftValueView(){//!!!!!!!!!!
					thumbLeft.style.left = View.position + "%"
					range.style.left = View.position + "%"
				}
				setRightValueView(){//!!!!!!!!!!
					thumbRight.style.right = View.position + "%"
					range.style.right = View.position + "%"
				}
				
				bindScaleBubbleRangeLeft(){//!!!!!!!!!!
					$(`.bubble-multi-left${silderNum}`).css("left", View.countMultiPositionLeft)
					$(`.value-multi-left-span${silderNum}`).text(inputLeft.value)
					thumbLeft.style.left = View.position + "%"
					range.style.left = View.position + "%"
				}
				bindScaleBubbleRangeRight(){//!!!!!!!!!!
					$(`.bubble-multi-right${silderNum}`).css("left", View.countMultiPositionRight)
					$(`.value-multi-right-span${silderNum}`).text(settings.max)
					thumbRight.style.right = '0'
					range.style.right = '0'
				}

				/////////////////////////////////MULTI
				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				getLeftValue() {//!!!!!!!!!!
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$(inputLeft).on('input', function(){
						$(`.bubble-multi-left${silderNum}`).css("left", View.countMultiPositionLeft)
						$(`.bubble-multi-left${silderNum}`).css("bottom", "50px")
						//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
						$(`.value-multi-left-span${silderNum}`).text(inputLeft.value)
					}).trigger('input')
				}
				getRightValue() {//!!!!!!!!!!
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$(inputRight).on('input', function(){
						$(`.bubble-multi-right${silderNum}`).css("left", View.countMultiPositionRight)
						$(`.bubble-multi-right${silderNum}`).css("bottom", "50px")
						//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
						$(`.value-multi-right-span${silderNum}`).text(inputRight.value)
					}).trigger('input')
				}

				//ДИАПАЗОН-ШКАЛА(MULTI)
				scaleMulti(min:number, max:number) {//!!!!!!!!!!
					let scaleMultiObj = {
						first: min,
						second: View.scaleValues[0],
						third: View.scaleValues[1],
						fourth: View.scaleValues[2],
						fifth: max
					}

					$(`.multi-first-ins${silderNum}`).first().text(scaleMultiObj.first);//.first() because .text() makes double value when testing scaleMulti()
					$(`.multi-second-ins${silderNum}`).first().text(scaleMultiObj.second);
					$(`.multi-third-ins${silderNum}`).first().text(scaleMultiObj.third);
					$(`.multi-fourth-ins${silderNum}`).first().text(scaleMultiObj.fourth);
					$(`.multi-fifth-ins${silderNum}`).first().text(scaleMultiObj.fifth);
				}

				/////////////////////////////////SINGLE
				//ДОБАВЛЯЕТ PROGRESS BAR (SLIDER-SINGLE)
				countProgress() {//!!!!!!!!!!
					$(`.progress-bar${silderNum}`).css({
						'width': View.progressBarWidth + '%'
					})
				}

				//BUBBLE SINGLE СО ЗНАЧЕНИЕМ VALUE
				getSingleValue() {//!!!!!!!!!!
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$(`.bubble-single${silderNum}`).css("left", View.bubblePosition)

					//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
					$(`.value-single-span${silderNum}`).text(singleRange.value)
				}

				//ДИАПАЗОН-ШКАЛА(SINGLE)
				scaleSingle(min:number, max:number) {//!!!!!!!!!!
					let scaleSingleObj = {
						first: min,
						second: View.scaleValues[0],
						third: View.scaleValues[1],
						fourth: View.scaleValues[2],
						fifth: max
					}

					$(`.first-ins${silderNum}`).first().text(scaleSingleObj.first);//.first() because .text() makes double value when testing scaleSingle()
					$(`.second-ins${silderNum}`).first().text(scaleSingleObj.second);
					$(`.third-ins${silderNum}`).first().text(scaleSingleObj.third);
					$(`.fourth-ins${silderNum}`).first().text(scaleSingleObj.fourth);
					$(`.fifth-ins${silderNum}`).first().text(scaleSingleObj.fifth);
				}

				bindScaleBubbleSing(){//!!!!!????
					singleRange.value = View.valResultInsView
					$(`.bubble-single${silderNum}`).css("left", View.bubblePosition)
					$(`.value-single-span${silderNum}`).text(View.valResultInsView)
				}
			}
			let view = new View
			view.setLeftValueView()
			view.setRightValueView()
			view.getLeftValue()
			view.getRightValue()
			view.countProgress()
			view.getSingleValue()

			//=====================================================================================================================================================================================================================
			class Controller {
				//ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
				inTouchLeft() {//!!!!!!!!!!
					inputLeft.addEventListener("input", model.setLeftValue)
					$(inputLeft).on("input", function(){View.position = Model.percentLeft}).trigger('input').on("input", view.setLeftValueView).trigger('input')
				}
				inTouchRight() {//!!!!!!!!!!
					inputRight.addEventListener("input", model.setRightValue)
					$(inputRight).on("input", function(){View.position = Model.percentRight}).trigger('input').on("input", view.setRightValueView).trigger('input')
				}
			
				//ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
				inMoveLeft() {inputLeft.addEventListener('mousemove', model.MouseMove)}//!!!!!!!!!!
				inMoveRight() {inputRight.addEventListener('mousemove', model.MouseMove)}//!!!!!!!!!!

				inInsCatchInputLR() {//!!!!!!???
					$(`.multi-first-ins${silderNum}, .multi-second-ins${silderNum}, .multi-third-ins${silderNum}, .multi-fourth-ins${silderNum}, .multi-fifth-ins${silderNum}`)
						.on('click', () => {
							model.bindScaleBubbleRangeMulti()
							View.countMultiPositionLeft = Model.countMultiPositionLeft
							View.position = Model.percentLeft
							view.bindScaleBubbleRangeLeft()

							View.countMultiPositionRight = Model.countMultiPositionRight
							view.bindScaleBubbleRangeRight()
						})
				}

				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				inMultiBubble() {
					$(inputLeft)
						.on('input', function(){View.countMultiPositionLeft = Model.countBubblePosition})
						.on('input',  model.bubbleCount(inputLeft, settings.min, settings.max)).trigger('input')
					inputLeft.addEventListener('input', view.getLeftValue)
					$(inputRight)
						.on('input', function(){View.countMultiPositionRight = Model.countBubblePosition})
						.on('input',  model.bubbleCount(inputRight, settings.min, settings.max)).trigger('input')
					inputRight.addEventListener('input', view.getRightValue)
				}
				
				/////////////////////////////////SINGLE
				inInsCatchBubbleProgress(){
					$(`.first-ins${silderNum}, .second-ins${silderNum}, .third-ins${silderNum}, .fourth-ins${silderNum}, .fifth-ins${silderNum}`)
						.on('click', model.bindScaleBubbleRangeSing).trigger('input')
						.on('click', function(){
							View.valResultInsView = Model.valResultIns})
						.on('click', function(){
							View.bubblePosition = Model.insCountSinglePosition})
						.on('click', view.bindScaleBubbleSing)
						.on('click', function(){View.progressBarWidth = Model.progressBarWidth})
						.on('click', view.countProgress)
				}

				inGetSingleValue(){
					$(singleRange).on('input', function(){View.bubblePosition = Model.countSingBubblePosition})
					singleRange.addEventListener('input', model.bubbleCount(singleRange, settings.min, settings.max))
					$(singleRange).on('input', view.getSingleValue).trigger('input')
				}

				inCountProgress(){
					$(singleRange)
						.on('input', function(){View.progressBarWidth = Model.progressBarWidth})
						.on('input', view.countProgress).trigger('input')
				}

				inCountScale() {
					View.scaleValues[0] = Model.scaleValues[0]
					View.scaleValues[1] = Model.scaleValues[1]
					View.scaleValues[2] = Model.scaleValues[2]
					view.scaleSingle(settings.min, settings.max)
					view.scaleMulti(settings.min, settings.max)
				}
			}
			let controller = new Controller
			controller.inTouchLeft()
			controller.inTouchRight()
			controller.inMoveLeft()
			controller.inMoveRight()
			controller.inInsCatchBubbleProgress()
			controller.inCountProgress()
			controller.inInsCatchInputLR()
			controller.inMultiBubble()
			controller.inGetSingleValue()
			controller.inCountScale()

			module.exports = {
				Model: Model,
				View: View,
				Controller: Controller
			}
		})
	}
})(jQuery);

(<any>$("body")).rangeSliders(1)