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
			var sliders:any = <HTMLElement>document.querySelector(`.js-sliders${silderNum}`)
				// radioMulti = document.querySelector(`.js-choose-multi${silderNum}`);

			var $sliderSingle = $('<div>', {'class': `slider-single${silderNum}`});
			$(sliders).append($sliderSingle);
			var $bubbleSingle = $('<div>', {'class': `bubble-single${silderNum} js-bubble-single${silderNum}`});
			$($sliderSingle).append($bubbleSingle);
			var $valueSingleSpan = $('<span>', {'class': `value-single-span${silderNum} js-value-single-span${silderNum}`})
			$($bubbleSingle).append($valueSingleSpan);
			var $singleRange:any = $('<input>', {'class': `single-range${silderNum}`, 'type': 'range', 'min': '50', 'max': '250', 'value': '50'});
			$($sliderSingle).append($singleRange);
			$($sliderSingle).append($('<div>', {'class': `progress-bar${silderNum} js-progress-bar${silderNum}`}));
			var $scaleSingle = $('<div>', {'class': `scale${silderNum} js-scale${silderNum}`});
			$($sliderSingle).append($scaleSingle);
			var $spanScaleSingle1 = $('<span>', {'style': 'left: 0%'});
			$($scaleSingle).append($spanScaleSingle1);
			$($spanScaleSingle1).append($('<ins>', {'class': `first-ins${silderNum} js-first-ins${silderNum}`}));
			var $spanScaleSingle2 = $('<span>', {'class': 'second', 'style': 'left: 25%'});
			$($scaleSingle).append($spanScaleSingle2);
			$($spanScaleSingle2).append($('<ins>', {'class': `second-ins${silderNum} js-second-ins${silderNum}`}));
			var $spanScaleSingle3 = $('<span>', {'class': 'third', 'style': 'left: 49%'});
			$($scaleSingle).append($spanScaleSingle3);
			$($spanScaleSingle3).append($('<ins>', {'class': `third-ins${silderNum} js-third-ins${silderNum}`}));
			var $spanScaleSingle4 = $('<span>', {'class': 'fourth', 'style': 'left: 73%'});
			$($scaleSingle).append($spanScaleSingle4);
			$($spanScaleSingle4).append($('<ins>', {'class': `fourth-ins${silderNum} js-fourth-ins${silderNum}`}));
			var $spanScaleSingle5 = $('<span>', {'style': 'left: 95%'});
			$($scaleSingle).append($spanScaleSingle5);
			$($spanScaleSingle5).append($('<ins>', {'class': `fifth-ins${silderNum} js-fifth-ins${silderNum}`}));
			
			var singleRange:any = document.querySelector(`.single-range${silderNum}`);



			var $multiRangeSlider = $('<div>', {'class': `multi-range-slider${silderNum} js-multi-range-slider${silderNum}`})
			$(sliders).append($multiRangeSlider)
			var $bubbleMultiLeft = $('<div>', {'class': `bubble-multi-left${silderNum} js-bubble-multi-left${silderNum}`})
			$($multiRangeSlider).append($bubbleMultiLeft)
			var $valueMultiLeftSpan = $('<span>', {'class': `value-multi-left-span${silderNum} js-value-multi-left-span${silderNum}`})
			$($bubbleMultiLeft).append($valueMultiLeftSpan)
			var $bubbleMultiRight = $('<div>', {'class': `bubble-multi-right${silderNum} js-bubble-multi-right${silderNum}`})
			$($multiRangeSlider).append($bubbleMultiRight)
			var $valueMultiRightSpan = $('<span>', {'class': `value-multi-right-span${silderNum} js-value-multi-right-span${silderNum}`})
			$($bubbleMultiRight).append($valueMultiRightSpan)
			var $inputLeft:any = $('<input>', {'class': `input-left${silderNum} js-input-left${silderNum}`, 'type': 'range', 'min': '50', 'max': '250', 'value': '100'})
			var $inputRight:any = $('<input>', {'class': `input-right${silderNum} js-input-right${silderNum}`, 'type': 'range', 'min': '50', 'max': '250', 'value': '200'})
			$($multiRangeSlider).append($inputLeft)
			$($multiRangeSlider).append($inputRight)
			var $slider = $('<div>', {'class': `slider${silderNum} js-slider${silderNum}`})
			$($multiRangeSlider).append($slider)
			$($slider).append($('<div>', {'class': `track${silderNum}`}))
			$($slider).append($('<div>', {'class': `range${silderNum} js-range${silderNum}`}))
			$($slider).append($('<div>', {'class': `thumb${silderNum} left${silderNum} js-thumb${silderNum} js-left${silderNum}`}))
			$($slider).append($('<div>', {'class': `thumb${silderNum} right${silderNum} js-thumb${silderNum} js-right${silderNum}`}))
			var $multiScale = $('<div>', {'class': `multi-scale${silderNum} js-multi-scale${silderNum}`})
			$($multiRangeSlider).append($multiScale)
			var $spanMultiScale1 = $('<span>', {'style': 'left: 0%'});
			$($multiScale).append($spanMultiScale1)
			$($spanMultiScale1).append($('<ins>', {'class': `multi-first-ins${silderNum} js-multi-first-ins${silderNum}`}))
			var $spanMultiScale2 = $('<span>', {'class': 'second', 'style': 'left: 25%'})
			$($multiScale).append($spanMultiScale2)
			$($spanMultiScale2).append($('<ins>', {'class': `multi-second-ins${silderNum} js-multi-second-ins${silderNum}`}))
			var $spanMultiScale3 = $('<span>', {'class': 'third', 'style': 'left: 49%'})
			$($multiScale).append($spanMultiScale3)
			$($spanMultiScale3).append($('<ins>', {'class': `multi-third-ins${silderNum} js-multi-third-ins${silderNum}`}))
			var $spanMultiScale4 = $('<span>', {'class': 'fourth', 'style': 'left: 73%'})
			$($multiScale).append($spanMultiScale4)
			$($spanMultiScale4).append($('<ins>', {'class': `multi-fourth-ins${silderNum} js-multi-fourth-ins${silderNum}`}))
			var $spanMultiScale5 = $('<span>', {'style': 'left: 95%'})
			$($multiScale).append($spanMultiScale5)
			$($spanMultiScale5).append($('<ins>', {'class': `multi-fifth-ins${silderNum} js-multi-fifth-ins${silderNum}`}))

			let range = <HTMLInputElement>document.querySelector(`.js-slider${silderNum} > .js-range${silderNum}`),
				thumbLeft = <HTMLInputElement>document.querySelector(`.js-slider${silderNum} > .js-thumb${silderNum}.js-left${silderNum}`),
				thumbRight = <HTMLInputElement>document.querySelector(`.js-slider${silderNum} > .js-thumb${silderNum}.js-right${silderNum}`),
				inputLeft:any = <HTMLInputElement>document.querySelector(`.js-input-left${silderNum}`),
				inputRight:any = <HTMLInputElement>document.querySelector(`.js-input-right${silderNum}`),
				$scaleValuesMult = $(`.js-multi-first-ins${silderNum}, .js-multi-second-ins${silderNum}, .js-multi-third-ins${silderNum}, .js-multi-fourth-ins${silderNum}, .js-multi-fifth-ins${silderNum}`),
				$scaleValuesSing = $(`.js-first-ins${silderNum}, .js-second-ins${silderNum}, .js-third-ins${silderNum}, .js-fourth-ins${silderNum}, .js-fifth-ins${silderNum}`)

			//*-DEMO-* ФУНКЦИЯ ВЫБОРА SINGLE ИЛИ MULTIRANGE
			$(`.choose-multi${silderNum}`).on('click', function(){
				$($sliderSingle).hide()
				$(`.multi-range-slider${silderNum}`).show()
				$(`.change-value-multi-block${silderNum}`).show()
				$(`.change-value-block${silderNum}`).hide()
			})
			$(`.choose-single${silderNum}`).on('click', function(){
				$($sliderSingle).show()
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

			$(`.width-value${silderNum}`).val('');
			//*-DEMO-* ФУНКЦИЯ ВЫБОРА ГОРИЗОНТ ИЛИ ВЕРТИКАЛЬ
			$(`.horizontal${silderNum}`).on('click', function(){
				sliders.style.transform = "rotate(0deg)"
				// settings.width = settings.width
				let width = settings.width
				if($(`.width-value${silderNum}`).val() > 0) width = +$(`.width-value${silderNum}`).val()
				$(sliders).css("width", width + "vw")
				$(inputLeft).css("width", width + "vw")
				$(inputRight).css("width", width + "vw")
				$(singleRange).css("width", width + "vw")
				$($sliderSingle).css("width", width + "vw")
				$(`.scale${silderNum}`).css("width", width + "vw")
				$(`.multi-scale${silderNum}`).css("width", width + "vw")
			})
			$(`.vertical${silderNum}`).on('click', function(){
				sliders.style.transform = "rotate(270deg)"
				let width = settings.width
				if($(`.width-value${silderNum}`).val() > 0) width = +$(`.width-value${silderNum}`).val()
				let newWidth = (window.screen.width * window.devicePixelRatio * width)/100
				$(sliders).css("width", newWidth + "px")
				$(inputLeft).css("width", newWidth + "px")
				$(inputRight).css("width", newWidth + "px")
				$(singleRange).css("width", newWidth + "px")
				$($sliderSingle).css("width", newWidth + "px")
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


			//*-DEMO-* ИЗМЕНЕНИЕ WIDTH
			$(`.change-width${silderNum}`).on('click', function(){
				$(sliders).css("width", $(`.width-value${silderNum}`).val() + "vw")
				$(inputLeft).css("width", $(`.width-value${silderNum}`).val() + "vw")
				$(inputRight).css("width", $(`.width-value${silderNum}`).val() + "vw")
				$(singleRange).css("width", $(`.width-value${silderNum}`).val() + "vw")
				$sliderSingle.css("width", $(`.width-value${silderNum}`).val() + "vw")
				$scaleSingle.css("width", $(`.width-value${silderNum}`).val() + "vw")
				$multiScale.css("width", $(`.width-value${silderNum}`).val() + "vw")
			})

			//*-DEMO-* ИЗМЕНЕНИЕ MIN MAX
			$(`.change-min-max${silderNum}`).on('click', function(){
				if(+$(`.min-value${silderNum}`).val() < 0 || +$(`.max-value${silderNum}`).val() < 0) {
					$(`.min-value${silderNum}`).val(0)
					$(`.max-value${silderNum}`).val(100)
				}
				if(+$(`.min-value${silderNum}`).val() > +$(`.max-value${silderNum}`).val()) {
					let oldMinVal = $(`.min-value${silderNum}`).val()
					$(`.min-value${silderNum}`).val($(`.max-value${silderNum}`).val())
					$(`.max-value${silderNum}`).val(oldMinVal)
				}
				settings.min = +$(`.min-value${silderNum}`).val()
				settings.max = +$(`.max-value${silderNum}`).val()
				singleRange.min = settings.min
				singleRange.max = settings.max
				inputLeft.min = settings.min
				inputRight.min = settings.min
				inputLeft.max = settings.max
				inputRight.max = settings.max
				inputLeft.value = settings.min
				inputRight.value = settings.max
				model.countThumbRangeL()
				model.countThumbRangeR()
				model.countBubble(inputLeft, settings.min, settings.max)
				model.countBubble(inputRight, settings.min, settings.max)
				model.countBubble(singleRange, settings.min, settings.max)
				controller.makeBubbleMultInputHandler()
				controller.makeBubbleSingInputHandler()
				model.countScale(settings.min, settings.max)
				model.countRange(settings.min, settings.max)
				controller.makeRangeInputHandler()
				controller.makeScale()
			})


			//WIDTH
			$(sliders).css("width", settings.width + "vw")
			$(inputLeft).css("width", settings.width + "vw")
			$(inputRight).css("width", settings.width + "vw")
			$(singleRange).css("width", settings.width + "vw")
			$sliderSingle.css("width", settings.width + "vw")
			$scaleSingle.css("width", settings.width + "vw")
			$multiScale.css("width", settings.width + "vw")

			//ИЗМЕНЕНИЕ ПОЛОЖЕНИЯ (ВЕРТИКАЛЬ) И ИЗМЕНЕНИЕ ШАГА (STEP)
			if(settings.vertical) {
				sliders.style.transform = "rotate(270deg)"
				let newWidth = (window.screen.width * window.devicePixelRatio * settings.width) / 100
				$(sliders).css("width", newWidth + "px")
				$(inputLeft).css("width", newWidth + "px")
				$(inputRight).css("width", newWidth + "px")
				$(singleRange).css("width", newWidth + "px")
				$sliderSingle.css("width", newWidth + "px")
				$scaleSingle.css("width", newWidth + "px")
				$multiScale.css("width", newWidth + "px")
			} else {
				sliders.style.transform = "rotate(0deg)"
			}
			singleRange.step = settings.step;
			inputLeft.step = settings.step;
			inputRight.step = settings.step;


			//SINGLE ИЛИ MULTIRANGE
			if(settings.multirange) {
				$sliderSingle.hide();
				$multiRangeSlider.show();
			} else {
				$sliderSingle.show();
				$multiRangeSlider.hide();
			}

			//BUBBLES ВКЛ. ВЫКЛ.
			if(settings.bubbles) {
				$bubbleSingle.removeClass("none");
				$bubbleMultiRight.removeClass("none");
				$bubbleMultiLeft.removeClass("none");
			} else {
				$bubbleSingle.addClass("none");
				$bubbleMultiRight.addClass("none");
				$bubbleMultiLeft.addClass("none");
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
				static progressBarWidth:number
				static insCountSinglePosition:number|string
				static valResultIns:number
				static countMultiPositionLeft:number|string
				static countBubblePosition:number|string
				static countSingBubblePosition:number|string
				static compareInputs:boolean
				static trackZindexL(){}
				static trackZindexR(){}
				static defaultNum:number = -666.666
				static test = {
					min: Model.defaultNum,
					max: Model.defaultNum,
					leftVal: Model.defaultNum,
					rightVal: Model.defaultNum,
				}

				//РАСЧЁТ ДЛЯ ПЕРЕМЕЩЕНИЯ THUMB И RANGE (MULTIRANGE SLIDER)
				countThumbRangeL(tests = Model.test) {//!!!!!!!!!!
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

				countThumbRangeR(tests = Model.test) {//!!!!!!!!!!
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
				countTrackZindex(eventArg, width, testPosition:number = Model.defaultNum, tests = Model.test) {//!!!!!!!!!!
					let positionXY: number,
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
						? Model.compareInputs = inputLeftMath < inputRightMath
						: Model.compareInputs = testInputLeftMath < testInputRightMath

					if(!eventArg.buttons){
						if(Model.compareInputs) {
							Model.trackZindexL()
						} else {
							Model.trackZindexR()
						}
					}
				}

				bindScaleBubbleRangeMulti(tests = Model.test){//!!!!!!!!!!
					let	newValue,
						test = Model.test,
						defaultNum = Model.defaultNum

					$(`.js-multi-first-ins${silderNum}`).on('click', function(){
						inputLeft.value = +$(`.js-multi-first-ins${silderNum}`).text()
					})
					$(`.js-multi-second-ins${silderNum}`).on('click', function(){
						inputLeft.value = +$(`.js-multi-second-ins${silderNum}`).text()
					})
					$(`.js-multi-third-ins${silderNum}`).on('click', function(){
						inputLeft.value = +$(`.js-multi-third-ins${silderNum}`).text()
					})
					$(`.js-multi-fourth-ins${silderNum}`).on('click', function(){
						inputLeft.value = +$(`.js-multi-fourth-ins${silderNum}`).text()
					})
					$(`.js-multi-fifth-ins${silderNum}`).on('click', function(){
						inputLeft.value = +$(`.js-multi-fifth-ins${silderNum}`).text()
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

				countRange(min:number, max:number, testVal:number = Model.defaultNum) {//!!!!!!!!!!
					$(singleRange).on('input', function(){
						let val:number = singleRange.value
						testVal == Model.defaultNum
							? Model.progressBarWidth = (val - min) * 100 / (max - min)
							: Model.progressBarWidth = (testVal - min) * 100 / (max - min)
					}).trigger('input')
				}

				bindScaleBubbleRangeSing(testMin:number = Model.defaultNum, testMax:number = Model.defaultNum, testVal:number = Model.defaultNum){//!!!!!!!!!!
					let newValue:number
					$(`.js-first-ins${silderNum}`).on('click', function(){
						Model.valResultIns = +$(`.js-first-ins${silderNum}`).text()
						singleRange.value = $(`.js-first-ins${silderNum}`).text()
					})
					$(`.js-second-ins${silderNum}`).on('click', function(){
						Model.valResultIns = +$(`.js-second-ins${silderNum}`).text()
						singleRange.value = $(`.js-second-ins${silderNum}`).text()
					})
					$(`.js-third-ins${silderNum}`).on('click', function(){
						Model.valResultIns = +$(`.js-third-ins${silderNum}`).text()
						singleRange.value = $(`.js-third-ins${silderNum}`).text()
					})
					$(`.js-fourth-ins${silderNum}`).on('click', function(){
						Model.valResultIns = +$(`.js-fourth-ins${silderNum}`).text()
						singleRange.value = $(`.js-fourth-ins${silderNum}`).text()
					})
					$(`.js-fifth-ins${silderNum}`).on('click', function(){
						Model.valResultIns = +$(`.js-fifth-ins${silderNum}`).text()
						singleRange.value = $(`.js-fifth-ins${silderNum}`).text()
					})

					testVal == Model.defaultNum
						? newValue = (Model.valResultIns - settings.min) * 100 / (settings.max - settings.min)
						: newValue = (testVal - testMin) * 100 / (testMax - testMin)
					let	newPosition = 5 - (newValue * 0.25)
					Model.insCountSinglePosition = `calc(${newValue}% + (${newPosition}px))`

					testVal == Model.defaultNum
						? Model.progressBarWidth = (Model.valResultIns - settings.min) * 100 / (settings.max - settings.min)
						: Model.progressBarWidth = (testVal - testMin) * 100 / (testMax - testMin)
				}

				countBubble(input, min:number, max:number, testVal:number = Model.defaultNum) {//!!!!!!!!!!
					$(input).on('input', function(){
						let newValue
						let newPosition
						testVal == Model.defaultNum
							? newValue = (input.value - min) * 100 / (max - min)
							: newValue = (testVal - min) * 100 / (max - min)
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
			model.countThumbRangeL()
			model.countThumbRangeR()
			model.bindScaleBubbleRangeSing()
			model.countRange(settings.min, settings.max)
			model.countBubble(inputLeft, settings.min, settings.max)
			model.countBubble(inputRight, settings.min, settings.max)
			model.countBubble(singleRange, settings.min, settings.max)
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
				static compareInputs:boolean


				setThumbRangeL(){//!!!!!!!!!!
					thumbLeft.style.left = View.position + "%"
					range.style.left = View.position + "%"
				}
				setThumbRangeR(){//!!!!!!!!!!
					thumbRight.style.right = View.position + "%"
					range.style.right = View.position + "%"
				}

				setTrackZindexL() {
					inputLeft.style.zIndex = 2
					inputRight.style.zIndex = 1
				}
				setTrackZindexR() {
					inputRight.style.zIndex = 2
					inputLeft.style.zIndex = 1
				}
				
				bindScaleBubbleRangeLeft(){//!!!!!!!!!!
					$bubbleMultiLeft.css("left", View.countMultiPositionLeft)
					$valueMultiLeftSpan.text(inputLeft.value)
					thumbLeft.style.left = View.position + "%"
					range.style.left = View.position + "%"
				}
				bindScaleBubbleRangeRight(){//!!!!!!!!!!
					$bubbleMultiRight.css("left", View.countMultiPositionRight)
					$valueMultiRightSpan.text(settings.max)
					thumbRight.style.right = '0'
					range.style.right = '0'
				}

				/////////////////////////////////MULTI
				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				setBubbleL() {//!!!!!!!!!!
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$(inputLeft).on('input', function(){
						$bubbleMultiLeft.css("left", View.countMultiPositionLeft)
						$bubbleMultiLeft.css("bottom", "50px")
						//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
						$valueMultiLeftSpan.text(inputLeft.value)
					}).trigger('input')
				}
				setBubbleR() {//!!!!!!!!!!
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$(inputRight).on('input', function(){
						$bubbleMultiRight.css("left", View.countMultiPositionRight)
						$bubbleMultiRight.css("bottom", "50px")
						//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
						$valueMultiRightSpan.text(inputRight.value)
					}).trigger('input')
				}

				//ДИАПАЗОН-ШКАЛА(MULTI)
				setScaleMulti(min:number, max:number) {//!!!!!!!!!!
					let scaleMultiObj = {
						first: min,
						second: View.scaleValues[0],
						third: View.scaleValues[1],
						fourth: View.scaleValues[2],
						fifth: max
					}

					$(`.js-multi-first-ins${silderNum}`).first().text(scaleMultiObj.first);//.first() because .text() makes double value when testing scaleMulti()
					$(`.js-multi-second-ins${silderNum}`).first().text(scaleMultiObj.second);
					$(`.js-multi-third-ins${silderNum}`).first().text(scaleMultiObj.third);
					$(`.js-multi-fourth-ins${silderNum}`).first().text(scaleMultiObj.fourth);
					$(`.js-multi-fifth-ins${silderNum}`).first().text(scaleMultiObj.fifth);
				}

				/////////////////////////////////SINGLE
				//ДОБАВЛЯЕТ PROGRESS BAR (SLIDER-SINGLE)
				setRange() {//!!!!!!!!!!
					$(`.js-progress-bar${silderNum}`).css({
						'width': View.progressBarWidth + '%'
					})
				}

				//BUBBLE SINGLE СО ЗНАЧЕНИЕМ VALUE
				setBubbleSing() {//!!!!!!!!!!
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$bubbleSingle.css("left", View.bubblePosition)

					//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
					$valueSingleSpan.text(singleRange.value)
				}

				//ДИАПАЗОН-ШКАЛА(SINGLE)
				setScaleSingle(min:number, max:number) {//!!!!!!!!!!
					let scaleSingleObj = {
						first: min,
						second: View.scaleValues[0],
						third: View.scaleValues[1],
						fourth: View.scaleValues[2],
						fifth: max
					}

					$(`.js-first-ins${silderNum}`).first().text(scaleSingleObj.first);//.first() because .text() makes double value when testing scaleSingle()
					$(`.js-second-ins${silderNum}`).first().text(scaleSingleObj.second);
					$(`.js-third-ins${silderNum}`).first().text(scaleSingleObj.third);
					$(`.js-fourth-ins${silderNum}`).first().text(scaleSingleObj.fourth);
					$(`.js-fifth-ins${silderNum}`).first().text(scaleSingleObj.fifth);
				}

				bindScaleBubbleSing(){//!!!!!????
					singleRange.value = View.valResultInsView
					$bubbleSingle.css("left", View.bubblePosition)
					$valueSingleSpan.text(View.valResultInsView)
				}
			}
			let view = new View
			view.setThumbRangeL()
			view.setThumbRangeR()
			view.setBubbleL()
			view.setBubbleR()
			view.setRange()
			view.setBubbleSing()

			//=====================================================================================================================================================================================================================
			class Controller {
				//РАСЧЁТ ДЛЯ ПЕРЕМЕЩЕНИЯ THUMB И RANGE (MULTIRANGE SLIDER)
				makeThumbRangeInputHandlerL() {//!!!!!!!!!!
					inputLeft.addEventListener("input", model.countThumbRangeL)
					$(inputLeft).on("input", function(){View.position = Model.percentLeft}).trigger('input').on("input", view.setThumbRangeL).trigger('input')
				}
				makeThumbRangeInputHandlerR() {//!!!!!!!!!!
					inputRight.addEventListener("input", model.countThumbRangeR)
					$(inputRight).on("input", function(){View.position = Model.percentRight}).trigger('input').on("input", view.setThumbRangeR).trigger('input')
				}
			
				//ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
				makeTrackZindexMousemoveHandlerL() {
					Model.trackZindexL = view.setTrackZindexL
					inputLeft.addEventListener('mousemove', model.countTrackZindex)
				}//!!!!!!!!!!
				makeTrackZindexMousemoveHandlerR() {
					Model.trackZindexR = view.setTrackZindexR
					inputRight.addEventListener('mousemove', model.countTrackZindex)
				}//!!!!!!!!!!

				makeScaleBubbleRangeMultiClickHandler() {//!!!!!!??? 
					$scaleValuesMult.on('click', () => {
						model.bindScaleBubbleRangeMulti()
						View.countMultiPositionLeft = Model.countMultiPositionLeft
						View.position = Model.percentLeft
						view.bindScaleBubbleRangeLeft()

						View.countMultiPositionRight = Model.countMultiPositionRight
						view.bindScaleBubbleRangeRight()
					})
				}

				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				makeBubbleMultInputHandler() {
					$(inputLeft)
						.on('input', function(){View.countMultiPositionLeft = Model.countBubblePosition})
						.on('input', model.countBubble(inputLeft, settings.min, settings.max)).trigger('input')
					inputLeft.addEventListener('input', view.setBubbleL)
					$(inputRight)
						.on('input', function(){View.countMultiPositionRight = Model.countBubblePosition})
						.on('input', model.countBubble(inputRight, settings.min, settings.max)).trigger('input')
					inputRight.addEventListener('input', view.setBubbleR)
				}
				
				/////////////////////////////////SINGLE
				makeScaleBubbleRangeSingClickHandler(){
					$scaleValuesSing.on('click', () => {
						model.bindScaleBubbleRangeSing()
						View.valResultInsView = Model.valResultIns
						View.bubblePosition = Model.insCountSinglePosition
						view.bindScaleBubbleSing()
						View.progressBarWidth = Model.progressBarWidth
						view.setRange()
					}).trigger('input')
				}

				makeBubbleSingInputHandler(){
					$(singleRange).on('input', function(){View.bubblePosition = Model.countSingBubblePosition})
					singleRange.addEventListener('input', model.countBubble(singleRange, settings.min, settings.max))
					$(singleRange).on('input', view.setBubbleSing).trigger('input')
				}

				makeRangeInputHandler(){
					$(singleRange)
						.on('input', function(){View.progressBarWidth = Model.progressBarWidth})
						.on('input', view.setRange).trigger('input')
				}

				makeScale() {
					View.scaleValues[0] = Model.scaleValues[0]
					View.scaleValues[1] = Model.scaleValues[1]
					View.scaleValues[2] = Model.scaleValues[2]
					view.setScaleSingle(settings.min, settings.max)
					view.setScaleMulti(settings.min, settings.max)
				}
			}
			let controller = new Controller
			controller.makeThumbRangeInputHandlerL()
			controller.makeThumbRangeInputHandlerR()
			controller.makeTrackZindexMousemoveHandlerL()
			controller.makeTrackZindexMousemoveHandlerR()
			controller.makeScaleBubbleRangeSingClickHandler()
			controller.makeRangeInputHandler()
			controller.makeScaleBubbleRangeMultiClickHandler()
			controller.makeBubbleMultInputHandler()
			controller.makeBubbleSingInputHandler()
			controller.makeScale()

			module.exports = {
				Model: Model,
				View: View,
				Controller: Controller
			}
		})
	}
})(jQuery);

// (<any>$("body")).rangeSliders(1)