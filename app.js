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
		term: '0',
		answer: '0',
		randomNumber: 0,
		answers: [
			'',
			'',
			'',
			''
		],
		stat: ''
	},
	methods: {
		getTerm: function () {
			let randomNumber = random(this.terms.length)
			let randomAnswer = random(4)
			stat = ''

			this.term = this.terms[randomNumber].term 
			this.answer = this.terms[randomNumber].transleate 

			this.answers[randomAnswer] = this.answer

			for (let item in this.answers) { 
				if (this.answers[item] != this.answer) {
					this.answers[item] = this.terms[random(this.terms.length)].transleate
				}
			}
		},
		chekAnswer0: function () {
			let textAnsver = document.querySelector('#v0').textContent

			if (textAnsver == this.answer) {
				this.stat = 'good'
			} else {
				this.stat = 'bad'
			}
		},
		chekAnswer1: function () {
			let textAnsver = document.querySelector('#v1').textContent
			
			if (textAnsver == this.answer) {
				this.stat = 'good'
			} else {
				this.stat = 'bad'
			}
		},
		chekAnswer2: function () {
			let textAnsver = document.querySelector('#v2').textContent
			
			if (textAnsver == this.answer) {
				this.stat = 'good'
			} else {
				this.stat = 'bad'
			}
		},
		chekAnswer3: function () {
			let textAnsver = document.querySelector('#v3').textContent
			
			if (textAnsver == this.answer) {
				this.stat = 'good'
			} else {
				this.stat = 'bad'
			}
		}
	}
})