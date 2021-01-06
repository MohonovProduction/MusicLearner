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
		show: false,
		terms: [],
		termsBase: {
			tempo: [
				{term: 'allegro', transleate: 'скоро'},
				{term: 'adagio', transleate: 'медленно'},
				{term: 'andante', transleate: 'спокойным шагом'},
				{term: 'ritenuto', transleate: 'сдерживая'},
				{term: 'a tempo', transleate: 'в темпе'},
				{term: 'vivo', transleate: 'живо'},
				{term: 'alla breve', transleate: 'основная доля такта не четверть, а половина'},
				{term: 'ad libitum', transleate: 'по желанию'},
				{term: 'allegretto', transleate: 'оживлённо'},
				{term: 'andantino', transleate: 'подвижнее, чем andante'},
				{term: 'lento', transleate: 'медленно'},
				{term: 'Tempo I', transleate: 'первоначальный темп'},
				{term: 'piu mosso', transleate: 'более подвижно'},
				{term: 'meno mosso', transleate: 'менее подвижно'},
				{term: 'allegro moderato', transleate: 'умеренно скоро'},
				{term: 'allargando', transleate: 'расширяя'},
				{term: 'accelerando', transleate: 'ускоряя'},
				{term: 'rubato', transleate: 'в свободном темпе'},
				{term: 'presto', transleate: 'быстро'},
				{term: 'con moto', transleate: 'с движением'},
				{term: 'non troppo', transleate: 'не слишком'},
				{term: 'molto', transleate: 'очень'},
				{term: 'sostenuno', transleate: 'сдержанно'},
				{term: 'rallentando', transleate: 'замедляя'},
				{term: 'ritardando', transleate: 'замедляя'},
				{term: 'assai', transleate: 'весьма, очень'},
				{term: 'stringendo', transleate: 'ускоряя'},
			],
			tocco: [
				{term: 'detache', transleate: 'раздельно'},
				{term: 'legato', transleate: 'связно'},
				{term: 'staccato', transleate: 'отрывисто'},
				{term: 'marcato', transleate: 'подчёркивая'},
				{term: 'non legato', transleate: 'не связно'},
				{term: 'portamento', transleate: 'протяжно но не связно'},
				{term: 'tenuto', transleate: 'выдержанно'},
				{term: 'glissando', transleate: 'скользя'},
			],
			dinamica: [
				{term: 'forte', transleate: 'громко', symbol: 'img/Music-forte.svg'},
				{term: 'piano', transleate: 'тихо', symbol: 'img/Music-piano.svg'},
				{term: 'mezzo forte', transleate: 'не очень громко', symbol: 'img/Music-mezzoforte.svg'},
				{term: 'mezzo piano', transleate: 'не очень тихо', symbol: 'img/Music-mezzopiano.svg'},
				{term: 'crecsendo', transleate: 'усиливая', symbol: 'img/Music-crescendo.svg'},
				{term: 'diminuendo', transleate: 'стихая', symbol: 'img/Music-diminuendo.svg'},
				{term: '>', transleate: 'акцент'},
				{term: 'sforzando', transleate: 'внезапное ударение', symbol: 'img/Sfz.svg'},
				{term: 'fortissimo', transleate: 'очень громко', symbol: 'img/Music-fortissimo.svg'},
				{term: 'pianissimo', transleate: 'очень тихо', symbol: 'img/Music-pianissimo.svg'},
				{term: 'piu forte', transleate: 'более громко'},
				{term: 'meno forte', transleate: 'менее громко'},
				{term: 'poco', transleate: 'немного'},
				{term: 'poco a poco crecsendo', transleate: 'мало-помалу усиливая'},
				{term: 'poco a poco diminuendo', transleate: 'мало-помалу стихая'},
			],
			simbolo: [

			],
			natura: [
				{term: 'dolche', transleate: 'нежно'},
				{term: 'cantabile', transleate: 'певуче'},
				{term: 'risoluto', transleate: 'решительно'},
				{term: 'leggiero', transleate: 'легко'},
				{term: 'espressivo', transleate: 'выразительно'},
				{term: 'giocoso', transleate: 'весело'},
				{term: 'maestoso', transleate: 'торжественно, величаво'},
				{term: 'simile', transleate: 'точно так, как раньше'},
				{term: 'grave', transleate: 'тяжело'},
				{term: 'morendo', transleate: 'замирая'},
				{term: 'agitato', transleate: 'возбуждёно'},
				{term: 'sempre', transleate: 'всегда, постоянно'},
				{term: 'scherzando', transleate: 'шутливо'},
				{term: 'largo', transleate: 'широко'},
				{term: 'appasionato', transleate: 'страстно'},
				{term: 'grazioso', transleate: 'грациозно'},
				{term: 'animato', transleate: 'воодушевлённо'},
				{term: 'tutti', transleate: 'все участники оркестро, хора, ансамбля'},
				{term: 'pesante', transleate: 'тяжело'},
				{term: 'subito', transleate: 'внезапно'},
				{term: 'brilliante', transleate: 'блестяще'},
				{term: 'energico', transleate: 'энергично'},
			]
		},
		term: 'Click to learn',
		termSymbol: '',
		options: [
			'',
			'',
			'',
			''
		],
		styleSetUp: [0,0,0,0,0],
		answerOptions: [],
		answer: {},
	},
	methods: {
		genTerm: function () {
			/*this.terms = this.terms.concat(this.termsBase.tempo, this.termsBase.tocco, this.termsBase.dinamica, this.termsBase.natura)*/
			this.terms = this.terms.concat(this.termsBase.dinamica)

			this.show = true
			this.styleSetUp = [0,0,0,0,0]

			this.terms = shuffle(this.terms)
			this.answerOptions = this.terms.slice(0, 4)
			this.answer = this.answerOptions[random(this.answerOptions.length)]
			this.term = this.answer.term
			this.termSymbol = this.answer.symbol

			for (let i = this.answerOptions.length - 1; i >= 0; i--) {
				Vue.set(this.options, i, this.answerOptions[i].transleate)
			}
		},
		checkAnswer: function (id) {
			if (this.answer == this.answerOptions[id]) {
				Vue.set(this.styleSetUp, id, 1)
				Vue.set(this.styleSetUp, 4, 1)
				setTimeout(this.genTerm, 1000)
			} else {
				Vue.set(this.styleSetUp, id, 2)
				Vue.set(this.styleSetUp, 4, 2)
			}
		}
	}
})