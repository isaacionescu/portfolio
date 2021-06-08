const imgPreview = document.querySelectorAll('.img-preview')

class App{
	constructor() {
		this.windowSize = window.screen.width;
		this.addEventListeners();
	}

	addEventListeners() {
		document.body.addEventListener("mouseover", event => {
			this.highlight()
			// console.log('you moved mouse')

		})

		document.body.addEventListener("mouseout", event => {
			this.unhighlight()
		})
	}


	highlight() {
		const destination = event.target.closest('.img-preview')
			if(event.target.matches('.img-preview')) {
				destination.classList.remove('unhighlight')
				destination.classList.add('highlight');
				// console.log('Selecting works')
		} 
	}

	unhighlight() {
		const destination = event.target.closest('.img-preview');
		if(event.target.matches('.img-preview')) {
			destination.classList.remove('highlight');
			destination.classList.add('unhighlight');
		}
	}
}

new App()	










