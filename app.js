let random = function (k) {
	return(Math.floor(Math.random() * k))
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
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
		term: 'sample output',
		options: [
			'sample output',
			'sample output',
			'sample output',
			'sample output'
		],
		styleSetUp: [0,0,1,2,0],
		answerOptions: [],
		answer: {},
	},
	methods: {
		genTerm: function () {
			this.styleSetUp = [0,0,0,0,0]

			this.terms = shuffle(this.terms)
			this.answerOptions = this.terms.slice(0, 4)
			this.answer = this.answerOptions[random(this.answerOptions.length)]
			this.term = this.answer.term

			for (let i = this.answerOptions.length - 1; i >= 0; i--) {
				Vue.set(this.options, i, this.answerOptions[i].transleate)
			}
		},
		checkAnswer: function (id) {
			if (this.answer == this.answerOptions[id]) {
				Vue.set(this.styleSetUp, id, 1)
				Vue.set(this.styleSetUp, 4, 1)
				setTimeout(this.genTerm, 2000)
			}
		}
	}
})