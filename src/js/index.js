const el = document.querySelector('.item-1');

let isOpen = false;

el.onclick = () => {
	if (!isOpen) {
		el.querySelector('.openClose').classList.add('open');
		el.querySelector('.vinyl').style.animationPlayState = 'running';
		isOpen = true;
	} else {
		el.querySelector('.openClose').classList.remove('open');
		el.querySelector('.vinyl').style.animationPlayState = 'paused';
		isOpen = false;
	}
};
