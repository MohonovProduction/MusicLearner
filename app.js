let random = function (k) {
	return(Math.floor(Math.random() * k))
}

let app = new Vue ({
	el: '#app',
	data: {
		terms: [
			{ term: 'allegro', transleate: 'скоро' },
			{ term: 'adagio', transleate: 'медленно' },
			{ term: 'andante', transleate: 'спокойным шагом' },
			{ term: 'ritenuto', transleate: 'сдерживая' },
			{ term: 'a tempo', transleate: 'в темпе' },
			{ term: 'allegro', transleate: 'скоро' },
		],
		term: 'Click for studing',
		answer: '0',
		randomNumber: 0,
		answers: [
			'',
			'',
			'',
			''
		],
		stat: '',
		card: document.querySelector('.answer') 
	},
	methods: {
		/* Get terms */
		getTerm: function () {
			let randomNumber = random(this.terms.length)
			let randomAnswer = random(4)
			this.stat = ''
			document.querySelector('.answer').classList.add('neutral')
			document.querySelector('.answer').classList.remove('good')
			document.querySelector('.answer').classList.remove('bad')
			document.querySelector('.variants').style.display = 'flex'

			this.term = this.terms[randomNumber].term 
			this.answer = this.terms[randomNumber].transleate 

			this.answers[randomAnswer] = this.answer

			for (let item in this.answers) { 
				if (this.answers[item] != this.answer) {
					this.answers[item] = this.terms[random(this.terms.length)].transleate
				}
			}
		},

		/* Buttons */
		chekAnswer0: function () {
			let textAnswer = document.querySelector('#v0').textContent

			this.chekAnswer(textAnswer)
		},
		chekAnswer1: function () {
			let textAnswer = document.querySelector('#v1').textContent
			
			this.chekAnswer(textAnswer)
		},
		chekAnswer2: function () {
			let textAnswer = document.querySelector('#v2').textContent
			
			this.chekAnswer(textAnswer)
		},
		chekAnswer3: function () {
			let textAnswer = document.querySelector('#v3').textContent

			this.chekAnswer(textAnswer)
		},

		/* Check function */
		chekAnswer: function (text) {

			if (text == this.answer) {
				this.stat = 'good'
				document.querySelector('.answer').classList.remove('bad')
				document.querySelector('.answer').classList.remove('neutral')
				document.querySelector('.answer').classList.add('good')
				setTimeout(this.getTerm, 2000)
			} else {
				this.stat = 'bad'
				document.querySelector('.answer').classList.remove('neutral')
				document.querySelector('.answer').classList.add('bad')
			}
		} 
	}
})