const images = document.querySelectorAll('.foto__slider');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;
let index = 0;

function show(index) {
	images[imageIndex].classList.remove('active');
	images[index].classList.add('active');
	if (index < 1) {
		controlls[0].classList.add('hide');
	} else if (index >= 1) {
		controlls[0].classList.remove('hide');
	}
	if (index + 2 > images.length) {
		controlls[1].classList.add('hide');
	} else if (index < images.length) {
		controlls[1].classList.remove('hide');
	}

	imageIndex = index;
}


controlls.forEach((e) => {
	e.addEventListener('click', () => {

		if (e.classList.contains('prev')) {
			index = imageIndex - 1;
			if (index < 0) {
				index = 0;
			}


			show(index);
		} else if (e.classList.contains('next')) {
			index = imageIndex + 1
			if (index >= images.length) {
				index = 3;
			}
			show(index);
		}

	})


})
show(imageIndex);