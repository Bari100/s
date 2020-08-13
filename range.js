
var inputLeft = document.getElementById("input-left"),
	inputRight = document.getElementById("input-right"),
	slider = document.querySelector(".slider"),
	thumbLeft = document.querySelector(".slider > .thumb.left"),
	thumbRight = document.querySelector(".slider > .thumb.right"),
	range = document.querySelector(".slider > .range"),
	singleRange = document.getElementById("single-range"),
	sliderSingle = document.querySelector(".slider-single"),
	radioSingle = document.querySelector(".choose-single"),
	radioMulti = document.querySelector(".choose-multi"),
	sliders = document.querySelector(".sliders");

//ФУНКЦИЯ ИЗМЕНЕНИЯ ПОЛОЖЕНИЯ (ВЕРТИКАЛЬ) И ИЗМЕНЕНИЯ ШАГА (STEP)
function vertical() {
	sliders.style.transform = "rotate(270deg)";
}
function changeStep() {
	singleRange.step = document.getElementById("number").value;
	inputLeft.step = document.getElementById("number").value;
	inputRight.step = document.getElementById("number").value;	
}





//ДЕЛАЕТ РАБОЧИМ СТИЛИЗИРОВАННЫЙ ПОД ИНПУТ ДИВ (MULTIRANGE SLIDER)
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

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});




//ДЕЛАЕТ КЛИКАБЕЛЬНЫМ MULTIRANGE SLIDER ПО ВСЕМУ ТРЭКУ
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
	MouseMove = function(eventArg) {
		positionXY = eventArg.offsetX;//offsetX и offsetY относятся к родительскому контейнеру, тогда как pageX и pageY относятся к документу. Если в данной ситуации использовать clientX или pageX, screenX, то при display: flex данная функция будет работать некорректно.
		countPosition = 100 / $(sliders).width();
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

//ДОБАВЛЯЕТ PROGRESS BAR (SLIDER-SINGLE)
$('#single-range').on('input', function(e){
	var min = e.target.min,
		max = e.target.max,
		val = e.target.value;
	
	$('.progress-bar').css({
		'width': (min + val) + '%'
	});
}).trigger('input');


//ФУНКЦИЯ ВЫБОРА SINGLE ИЛИ MULTIRANGE
$("input[type='radio']").change(function(){
	if($(radioMulti).prop("checked")) {
		$(sliderSingle).hide();
		$(".multi-range-slider").show();
	} else {
		$(sliderSingle).show();
		$(".multi-range-slider").hide();
	}
});


//БЕГУНОК(bubble) СО ЗНАЧЕНИЕМ VALUE
$(".value-single-span").text(singleRange.value);
function getValue() {
	var newValue = Number( (singleRange.value - singleRange.min) * 100 / (singleRange.max - singleRange.min) ),
		newPosition = 10 - (newValue * 0.2);
	$(".value-single").css("left", `calc(${newValue}% + (${newPosition}px))`);
	$(".value-single-span").text(singleRange.value);
}
singleRange.addEventListener('input', getValue);