
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
	const nav = document.getElementById('nav');
	nav.classList.toggle('active')

}

btnMobile.addEventListener('click', toggleMenu);

/--carrossel--/

const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;

function carrosel(){
	idx++;

	if(idx > img.length - 1){
		idx = 0;	
}


	imgs.style.transform = 'translateX(${-idx * 980}px)';

}

setInterval(carrosel, 1800);
