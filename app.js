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
			'a',
			'b',
			'c',
			'd'
		]
	},
	methods: {
		getTerm: function () {
			let randomNumber = random(this.terms.length)
			let randomAnswer = random(4)

			this.term = this.terms[randomNumber].term 
			this.answer = this.terms[randomNumber].transleate 

			this.answers[randomAnswer] = this.answer

			for (let item in this.answers[randomAnswer]) { 
				if (item != this.answers[randomAnswer]) {
					this.answers[item] = this.terms[random(this.terms.length)].transleate
					console.log(this.answers[item])
				}
			}
		},
		chekAnswer: function () {
			
		}
	}
})