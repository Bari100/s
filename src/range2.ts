import { htmlPrefilter } from "jquery";

// ;(function ($) {
// 	(<any>$.fn).rangeSliders = function (silderNum: number, vertical: boolean) {
// 		let settings = {
// 			step: 1,
// 			vertical: vertical,
// 			multirange: false,
// 			bubbles: true,
// 			width: 26,
// 			min: 20,
// 			max: 280,
// 		  };
		
// 		return this.each(function () {
            let settings = { ///DELETE THIS
			"step": 1,
			"vertical": false,
			"multirange": true,
			"bubbles": true,
			"width": 26,
			"min": 10,
			"max": 100
		  };let silderNum = 1///DELETE THIS
			
			var sliders:any = <HTMLElement>document.querySelector(`.sliders${silderNum}`),
			// var sliders:any = $('<div>', {'class': 'sliders'}),
				radioMulti = document.querySelector(".choose-multi");
			// $('body').append(sliders);

			// if(sliders) {
				var sliderSingle = $('<div>', {'class': `slider-single${silderNum}`});
				$(sliders).append(sliderSingle);
				var bubbleSingle = $('<div>', {'class': `bubble-single${silderNum}`});
				$(sliderSingle).append(bubbleSingle);
				var valueSingleSpan = $('<span>', {'class': `value-single-span${silderNum}`})
				$(bubbleSingle).append(valueSingleSpan);
				var singleRange:any = $('<input>', {'class': `single-range${silderNum}`, 'type': 'range', 'min': '50', 'max': '250', 'value': '50'});
				// var singleRange:any = <HTMLElement>document.querySelector(input);
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
			// }
			
			
			var singleRange:any = document.querySelector(`.single-range${silderNum}`);



			var multiRangeSlider = $('<div>', {'class': `multi-range-slider${silderNum}`});
			$(sliders).append(multiRangeSlider);
			var bubbleMultiLeft = $('<div>', {'class': `bubble-multi-left${silderNum}`});
			$(multiRangeSlider).append(bubbleMultiLeft);
			var valueMultiLeftSpan = $('<span>', {'class': `value-multi-left-span${silderNum}`})
			$(bubbleMultiLeft).append(valueMultiLeftSpan);
			var bubbleMultiRight = $('<div>', {'class': `bubble-multi-right${silderNum}`});
			$(multiRangeSlider).append(bubbleMultiRight);
			var valueMultiRightSpan = $('<span>', {'class': `value-multi-right-span${silderNum}`})
			$(bubbleMultiRight).append(valueMultiRightSpan);
			var inputLeft:any = $('<input>', {'class': `input-left${silderNum}`, 'type': 'range', 'min': '50', 'max': '250', 'value': '100'});
			var inputRight:any = $('<input>', {'class': `input-right${silderNum}`, 'type': 'range', 'min': '50', 'max': '250', 'value': '100'});
			$(multiRangeSlider).append(inputLeft);
			$(multiRangeSlider).append(inputRight);
			var slider = $('<div>', {'class': `slider${silderNum}`});
			$(multiRangeSlider).append(slider);
			$(slider).append($('<div>', {'class': `track${silderNum}`}));
			$(slider).append($('<div>', {'class': `range${silderNum}`}));
			$(slider).append($('<div>', {'class': `thumb${silderNum} left${silderNum}`}));
			$(slider).append($('<div>', {'class': `thumb${silderNum} right${silderNum}`}));
			var multiScale = $('<div>', {'class': `multi-scale${silderNum}`});
			$(multiRangeSlider).append(multiScale);
			var spanMultiScale1 = $('<span>', {'style': 'left: 0%'});
			$(multiScale).append(spanMultiScale1);
			$(spanMultiScale1).append($('<ins>', {'class': `multi-first-ins${silderNum}`}));
			var spanMultiScale2 = $('<span>', {'class': 'second', 'style': 'left: 25%'});
			$(multiScale).append(spanMultiScale2);
			$(spanMultiScale2).append($('<ins>', {'class': `multi-second-ins${silderNum}`}));
			var spanMultiScale3 = $('<span>', {'class': 'third', 'style': 'left: 49%'});
			$(multiScale).append(spanMultiScale3);
			$(spanMultiScale3).append($('<ins>', {'class': `multi-third-ins${silderNum}`}));
			var spanMultiScale4 = $('<span>', {'class': 'fourth', 'style': 'left: 73%'});
			$(multiScale).append(spanMultiScale4);
			$(spanMultiScale4).append($('<ins>', {'class': `multi-fourth-ins${silderNum}`}));
			var spanMultiScale5 = $('<span>', {'style': 'left: 95%'});
			$(multiScale).append(spanMultiScale5);
			$(spanMultiScale5).append($('<ins>', {'class': `multi-fifth-ins${silderNum}`}));

			var range = <HTMLInputElement>document.querySelector(`.slider${silderNum} > .range${silderNum}`),
				thumbLeft = <HTMLInputElement>document.querySelector(`.slider${silderNum} > .thumb${silderNum}.left${silderNum}`),
				thumbRight = <HTMLInputElement>document.querySelector(`.slider${silderNum} > .thumb${silderNum}.right${silderNum}`),
				inputLeft:any = <HTMLInputElement>document.querySelector(`.input-left${silderNum}`),
				inputRight:any = <HTMLInputElement>document.querySelector(`.input-right${silderNum}`)


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

			// let varIns: number
			// $(`.first-ins${silderNum}`).on('click', function(){varIns = 1})
			// $(`.second-ins${silderNum}`).on('click', function(){varIns = 2})
			// $(`.third-ins${silderNum}`).on('click', function(){varIns = 3})
			// $(`.fourth-ins${silderNum}`).on('click', function(){varIns = 4})
			// $(`.fifth-ins${silderNum}`).on('click', function(){varIns = 5})
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

				static progressBarWidth:number//because can't create const or let here
				countProgress(min:number, max:number, testVal:number = -666.666) {
					$(singleRange).on('input', function(){
						let val:number = singleRange.value
						if (testVal == -666.666) {
							Model.progressBarWidth = (val - min) * 100 / (max - min)
						} else {Model.progressBarWidth = (testVal - min) * 100 / (max - min)}
					}).trigger('input')
				}

				static countSinglePosition:number|string//because can't create const or let here
				static insCountSinglePosition:number|string
				getSingleValueModel(min:number, max:number, testVal:number = -666.666) {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$(singleRange).on('input', function(){
						let newValue:number
						let val = singleRange.value;
						if (testVal == -666.666) {
							newValue = (val - min) * 100 / (max - min)
						} else {newValue = (testVal - min) * 100 / (max - min)}
						let	newPosition = 5 - (newValue * 0.25)
						Model.countSinglePosition = `calc(${newValue}% + (${newPosition}px))`
					})
				}

				static valResultIns:number
				static varIns:number
				insCatchBubbleProgress(){
					// $(`.first-ins${silderNum}, .second-ins${silderNum}, .third-ins${silderNum}, .fourth-ins${silderNum}, .fifth-ins${silderNum}`).on('click', function(){
					let newValue:number
					// let valResultIns:number
					// var val = +$(`.first-ins1`).text();
					// let varIns: number
					// $(`.first-ins${silderNum}`).on('click', function(){Model.varIns = 1})
					// $(`.second-ins${silderNum}`).on('click', function(){Model.varIns = 2})
					// $(`.third-ins${silderNum}`).on('click', function(){Model.varIns = 3})
					// $(`.fourth-ins${silderNum}`).on('click', function(){Model.varIns = 4})
					// $(`.fifth-ins${silderNum}`).on('click', function(){Model.varIns = 5})
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
					// if (Model.varIns == 1) {
					// 	Model.valResultIns = +$(`.first-ins${silderNum}`).text()
					// } else if(Model.varIns == 2) {
					// 	Model.valResultIns = +$(`.second-ins${silderNum}`).text()
					// } else if(Model.varIns == 3) {
					// 	Model.valResultIns = +$(`.third-ins${silderNum}`).text()
					// } else if(Model.varIns == 4) {
					// 	Model.valResultIns = +$(`.fourth-ins${silderNum}`).text()
					// } else if(Model.varIns == 5) {
					// 	Model.valResultIns = +$(`.fifth-ins${silderNum}`).text()
					// }
					// var val = singleRange.value
					newValue = (Model.valResultIns - settings.min) * 100 / (settings.max - settings.min)
					let	newPosition = 5 - (newValue * 0.25)
					Model.insCountSinglePosition = `calc(${newValue}% + (${newPosition}px))`
					Model.progressBarWidth = (Model.valResultIns - settings.min) * 100 / (settings.max - settings.min)
					// console.log(Model.progressBarWidth)
				}
			};
			let model = new Model
			model.setLeftValue();
			model.setRightValue();
			model.getSingleValueModel(settings.min, settings.max)
			model.insCatchBubbleProgress()
			model.countProgress(settings.min, settings.max)
			// module.exports = Model
			//=======================================================================
			class View {
				/////////////////////////////////MULTI
				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				static countMultiPosition:number|string
				getLeftValue(min:number, max:number, testVal:number = -666.666) {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$(`.input-left${silderNum}`).on('input', function(){
						let newValue
						let val = inputLeft.value
						if (testVal == -666.666) {
							newValue = (val - min) * 100 / (max - min)
						} else {newValue = (testVal - min) * 100 / (max - min)}
						let newPosition = -10 - (newValue * 0.05);
						View.countMultiPosition = `calc(${newValue}% + (${newPosition}px))`
						$(`.bubble-multi-left${silderNum}`).css("left", View.countMultiPosition)
						$(`.bubble-multi-left${silderNum}`).css("bottom", "50px")
						//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
						$(`.value-multi-left-span${silderNum}`).text(inputLeft.value)
					}).trigger('input')
				}
				getRightValue(min:number, max:number, testVal:number = -666.666) {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					$(`.input-right${silderNum}`).on('input', function(){
						let newValue
						let val = inputRight.value
						if (testVal == -666.666) {
							newValue = (val - min) * 100 / (max - min)
						} else {newValue = (testVal - min) * 100 / (max - min)}
						let newPosition = -10 - (newValue * 0.05)
						View.countMultiPosition = `calc(${newValue}% + (${newPosition}px))`
						$(`.bubble-multi-right${silderNum}`).css("left", View.countMultiPosition)
						$(`.bubble-multi-right${silderNum}`).css("bottom", "50px")
						//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
						$(`.value-multi-right-span${silderNum}`).text(inputRight.value)
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

					$(`.multi-first-ins${silderNum}`).first().text(scaleMultiObj.first);//.first() because .text() makes double value when testing scaleMulti()
					$(`.multi-second-ins${silderNum}`).first().text(scaleMultiObj.second);
					$(`.multi-third-ins${silderNum}`).first().text(scaleMultiObj.third);
					$(`.multi-fourth-ins${silderNum}`).first().text(scaleMultiObj.fourth);
					$(`.multi-fifth-ins${silderNum}`).first().text(scaleMultiObj.fifth);
				}

				/////////////////////////////////SINGLE
				//ДОБАВЛЯЕТ PROGRESS BAR (SLIDER-SINGLE)
				static progressBarWidth:number//because can't create const or let here
				countProgress() {
					// $(singleRange).on('input', function(){
						// let val:number = singleRange.value
						// if (testVal == -666.666) {
						// 	View.progressBarWidth = (val - min) * 100 / (max - min)
						// } else {View.progressBarWidth = (testVal - min) * 100 / (max - min)}
						$(`.progress-bar${silderNum}`).css({
							'width': View.progressBarWidth + '%'
						});
					// }).trigger('input')
				}

				//BUBBLE SINGLE СО ЗНАЧЕНИЕМ VALUE
				// static countSinglePosition:number|string//because can't create const or let here
				static bubblePosition
				getSingleValue() {
					//ЗАСТАВЛЯЕТ ДВИГАТЬСЯ BUBBLE ОТНОСИТЕЛЬНО THUMB
					// $(singleRange).on('input', function(){
						// let newValue:number
						// let val = singleRange.value;
						// if (testVal == -666.666) {
						// 	newValue = (val - min) * 100 / (max - min)
						// } else {newValue = (testVal - min) * 100 / (max - min)}
						// let	newPosition = 5 - (newValue * 0.25)
						// View.countSinglePosition = `calc(${newValue}% + (${newPosition}px))`
						// $(`.bubble-single${silderNum}`).css("left", Model.countSinglePosition)
						$(`.bubble-single${silderNum}`).css("left", View.bubblePosition)

						//ДОБАВЛЯЕТ ЗНАЧЕНИЕ VALUE В BUBBLE
						$(`.value-single-span${silderNum}`).text(singleRange.value);
					// }).trigger('input')
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
					// $(`.${insNum}-ins${silderNum}`).first().text(scaleSingleObj.${insNum})

					$(`.first-ins${silderNum}`).first().text(scaleSingleObj.first);//.first() because .text() makes double value when testing scaleSingle()
					$(`.second-ins${silderNum}`).first().text(scaleSingleObj.second);
					$(`.third-ins${silderNum}`).first().text(scaleSingleObj.third);
					$(`.fourth-ins${silderNum}`).first().text(scaleSingleObj.fourth);
					$(`.fifth-ins${silderNum}`).first().text(scaleSingleObj.fifth);
				}

				
				static valResultInsView
				insCatchBubbleView(){
					// $(`.first-ins${silderNum}, .second-ins${silderNum}, .third-ins${silderNum}, .fourth-ins${silderNum}, .fifth-ins${silderNum}`).on('click', function(){
						singleRange.value = View.valResultInsView
					// 	$(`.bubble-single${silderNum}`).css("left", View.bubblePosition)
					// }).trigger('input')
					$(`.bubble-single${silderNum}`).css("left", View.bubblePosition)
					$(`.value-single-span${silderNum}`).text(View.valResultInsView)
				}
			}
			let view = new View
			// module.exports = View
			view.getLeftValue(settings.min, settings.max)
			view.getRightValue(settings.min, settings.max)
			view.scaleMulti(settings.min, settings.max)
			view.countProgress()
			// view.typeBubbleValue();
			view.getSingleValue()
			view.scaleSingle(settings.min, settings.max)
			// let article = document.querySelector('article')
			// for(let i = 0; i < 100; i++) {
			// 	let a:any = `.value-multi-right-span${i},`
			// 	// console.log(a)
			// 	let txt = document.createTextNode(a)
			// 	article.appendChild(txt)
			// }
				// let i = 1; i < 100
				// let b = `.single-range${i++}`.repeat(100)

			
			// $(`.first-ins${silderNum}, .second-ins${silderNum}, .third-ins${silderNum}, .fourth-ins${silderNum}, .fifth-ins${silderNum}`).on('click', function(){
				
			// 	let val:number
			// 	if (varIns == 1) {
			// 		val = +$(`.first-ins1`).text()
			// 	} else if(varIns == 2) {
			// 		val = +$(`.second-ins1`).text()
			// 	} else if(varIns == 3) {
			// 		val = +$(`.third-ins1`).text()
			// 	} else if(varIns == 4) {
			// 		val = +$(`.fourth-ins1`).text()
			// 	} else if(varIns == 5) {
			// 		val = +$(`.fifth-ins1`).text()
			// 	}
				
			// 	singleRange.value = val
			// 	// $(`.bubble-single${silderNum}`).css("left", `calc(${(val - settings.min) * 100 / (settings.max - settings.min)}% + ${5-((val - settings.min) * 100 / (settings.max - settings.min))*0.25}px)`)
			// 	$(`.bubble-single${silderNum}`).css("left", Model.insCountSinglePosition)
			// 	$(`.bubble-single${silderNum}`).css("left", bubblePosition)
			// 	$(`.value-single-span${silderNum}`).text(val)
			// })
			console.log(singleRange.value)
			// console.log(Model.insCountSinglePosition)
			$(`.first-ins${silderNum}, .second-ins${silderNum}, .third-ins${silderNum}, .fourth-ins${silderNum}, .fifth-ins${silderNum}`).on('click', function(){
				// console.log(Model.insCountSinglePosition)
				// singleRange.value = $(`.first-ins1`).text()
				console.log(singleRange.value)
			})
			// $(singleRange).on('input', function(){
			// 	console.log(singleRange.value)
			// })
			
			//=======================================================================
			class Сontroller {
				//ДЕЛАЕТ РАБОЧИМ СТИЛИЗОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
				inTouchLeft() {inputLeft.addEventListener("input", model.setLeftValue);}
				inTouchRight() {inputRight.addEventListener("input", model.setRightValue);}
			
				//ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
				inMoveLeft() {inputLeft.addEventListener('mousemove', model.MouseMove)}
				inMoveRight() {inputRight.addEventListener('mousemove', model.MouseMove)}

				//BUBBLE MULTI СО ЗНАЧЕНИЕМ VALUE
				inGetLeft() {inputLeft.addEventListener('input', view.getLeftValue)}
				inGetRight() {inputRight.addEventListener('input', view.getRightValue)}
				
				/////////////////////////////////SINGLE
				inInsCatchBubbleProgress(){
					$(`.first-ins${silderNum}, .second-ins${silderNum}, .third-ins${silderNum}, .fourth-ins${silderNum}, .fifth-ins${silderNum}`)
					.on('click', model.insCatchBubbleProgress).trigger('input')
					.on('click', function(){
						View.valResultInsView = Model.valResultIns})
					.on('click', function(){
						View.bubblePosition = Model.insCountSinglePosition})
					.on('click', view.insCatchBubbleView)
					.on('click', function(){View.progressBarWidth = Model.progressBarWidth})
					.on('click', view.countProgress)
				}

				inGetSingleValue(){
					$(singleRange)
					.on('input', function(){
						View.bubblePosition = Model.countSinglePosition})
					.on('input', view.getSingleValue).trigger('input')
				}

				inCountProgress(){
					$(singleRange)
					.on('input', function(){View.progressBarWidth = Model.progressBarWidth})
					.on('input', view.countProgress).trigger('input')
				}
			};
			let controller = new Сontroller
			module.exports = Сontroller
			controller.inTouchLeft();
			controller.inTouchRight();
			controller.inMoveLeft();
			controller.inMoveRight();
			controller.inGetLeft();
			controller.inGetRight();
			controller.inInsCatchBubbleProgress()
			controller.inGetSingleValue()
			controller.inCountProgress()
// 		});
// 	};
// })(jQuery);	