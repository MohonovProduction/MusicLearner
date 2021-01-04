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
		term: '',
		options: [
			'sample output',
			'sample output',
			'sample output',
			'sample output'
		],
		styleSetUp: [0,0,1,2,0]
	},
	methods: {
		genTerm: function () {
			styleSetUp = [0,0,0,0,0]
			this.terms = shuffle(this.terms)
			console.log(this.terms)
		},
		checkAnswer: function () {
			
		}
	}
})