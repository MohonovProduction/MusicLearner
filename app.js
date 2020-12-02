let random = function (k) {
	return(Math.floor(Math.random() * k))
}

let app = new Vue ({
	el: '#app',
	data: {
		terms: [
			{	
				term: '1',
				transleate: 't1'
			},
			{
				term: '2',
				transleate: 't2',
			},
			{
				term: '3',
				transleate: 't3',
			},
			{
				term: '4',
				transleate: 't4',
			},
			{
				term: '5',
				transleate: 't5',
			}
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
		card: document.querySelector('.ansver') 
	},
	methods: {
		/* Get terms */
		getTerm: function () {
			let randomNumber = random(this.terms.length)
			let randomAnswer = random(4)
			this.stat = ''
			document.querySelector('.ansver').classList.add('neutral')
			document.querySelector('.ansver').classList.remove('good')
			document.querySelector('.ansver').classList.remove('bad')
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
			let textAnsver = document.querySelector('#v0').textContent

			this.chekAnswer(textAnsver)
		},
		chekAnswer1: function () {
			let textAnsver = document.querySelector('#v1').textContent
			
			this.chekAnswer(textAnsver)
		},
		chekAnswer2: function () {
			let textAnsver = document.querySelector('#v2').textContent
			
			this.chekAnswer(textAnsver)
		},
		chekAnswer3: function () {
			let textAnsver = document.querySelector('#v3').textContent

			this.chekAnswer(textAnsver)
		},

		/* Check function */
		chekAnswer: function (text) {

			if (text == this.answer) {
				this.stat = 'good'
				document.querySelector('.ansver').classList.remove('bad')
				document.querySelector('.ansver').classList.remove('neutral')
				document.querySelector('.ansver').classList.add('good')
				setTimeout(this.getTerm, 2000)
			} else {
				this.stat = 'bad'
				document.querySelector('.ansver').classList.remove('neutral')
				document.querySelector('.ansver').classList.add('bad')
			}
		} 
	}
})