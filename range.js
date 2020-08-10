
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var slider = document.querySelector(".slider");
var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");
var singleRange = document.getElementById("single-range");


//ФУНКЦИЯ ИЗМЕНЕНИЯ ПОЛОЖЕНИЯ (ВЕРТИКАЛЬ) И ИЗМЕНЕНИЯ ШАГА (STEP)
function vertical() {
	singleRange.classList.add("vertical");
	inputLeft.classList.add("vertical");
	inputRight.classList.add("vertical");
	inputLeft.style.height = "500px";
	inputRight.style.height = "500px";
	slider.style.transform = "rotate(270deg)";
	inputLeft.style.top = "-250px";
	inputRight.style.top = "-250px";
}
function changeStep() {
	// document.getElementById("range").step = document.getElementById("number").value;
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
		if (inputLeft.classList.contains("vertical") && inputRight.classList.contains("vertical")) {
			positionXY = eventArg.offsetY;
			countPosition = 500 / 2800;			
			/* percentage position Y of cursor  */
			x100 = positionXY * countPosition; //offsetX и offsetY относятся к родительскому контейнеру, тогда как pageX и pageY относятся к документу. Если в данной ситуации использовать clientX или pageX, screenX, то при display: flex данная функция будет работать некорректно.
			/* absolute distance from respective slider values */
			inputLeftMath = Math.abs(inputLeft.value - x100);
			inputRightMath = Math.abs(inputRight.value - x100);
			compareInputs = inputLeftMath > inputRightMath;
		
		} else {
			positionXY = eventArg.offsetX;
			countPosition = 500 / 2500;
			/* percentage position Y of cursor  */
			x100 = positionXY * countPosition; //offsetX и offsetY относятся к родительскому контейнеру, тогда как pageX и pageY относятся к документу. Если в данной ситуации использовать clientX или pageX, screenX, то при display: flex данная функция будет работать некорректно.		
			/* absolute distance from respective slider values */
			inputLeftMath = Math.abs(inputLeft.value - x100);
			inputRightMath = Math.abs(inputRight.value - x100);
			compareInputs = inputLeftMath < inputRightMath;
		}
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

$('#single-range').on('input', function(e){
	var min = e.target.min,
		max = e.target.max,
		val = e.target.value;
	
	$('.progress-bar').css({
		'width': (min + val) + '%'
	});
	}).trigger('input');