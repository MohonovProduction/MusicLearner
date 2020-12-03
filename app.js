let random = function (k) {
	return(Math.floor(Math.random() * k))
}

let shuffle = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let app = new Vue ({
	el: '#app',
	data: {
		terms: [
			{ term: 'allegro', transleate: 'скоро' },
			{ term: 'adagio', transleate: 'медленно' },
			{ term: 'andante', transleate: 'спокойным шагом' },
			{ term: 'ritenuto', transleate: 'сдерживая' },
			{ term: 'a tempo', transleate: 'в темпе' }
		],
		term: 'Click for studing',
		answer: '',
		answers: [
			'',
			'',
			'',
			''
		],
		stat: ''
	},
	methods: {
		/* Get terms */
		getTerm: function () {
			this.stat = ''
			document.querySelector('.answer').classList.add('neutral')
			document.querySelector('.answer').classList.remove('good')
			document.querySelector('.answer').classList.remove('bad')
			document.querySelector('.variants').style.display = 'flex'

			for (let i = 0; i < 4; i++) {
			   	let randomNumber = random(this.terms.length - i) + i
			   	let element = NaN; 

			   	element = this.terms[randomNumber]
			   	this.terms[randomNumber] = this.terms[i]
			   	this.terms[i] = element
			   	this.answers[i] = element
			}

			let randomAnswer = random(4)

			this.answer = this.answers[randomAnswer]
			this.term = this.answer.term

			for (let item in this.answers) { 
				if (this.answers[item] != this.answer) {
					this.answers[item] = this.answers[item].transleate
				}
			}

			this.answers[randomAnswer] = this.answers[randomAnswer].transleate
		},
		

		/* Buttons */
		checkAnswer0: function () {
			let textAnswer = document.querySelector('#v0').textContent

			this.checkAnswer(textAnswer)
		},
		checkAnswer1: function () {
			let textAnswer = document.querySelector('#v1').textContent
			
			this.checkAnswer(textAnswer)
		},
		checkAnswer2: function () {
			let textAnswer = document.querySelector('#v2').textContent
			
			this.checkAnswer(textAnswer)
		},
		checkAnswer3: function () {
			let textAnswer = document.querySelector('#v3').textContent

			this.checkAnswer(textAnswer)
		},

		/* Check function */
		checkAnswer: function (text) {
			if (text == this.answer.transleate) {
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