var termsBase = {
	firstClass: {
		tempo: {

		},
		tocco: {

		},
		dinamica: {

		},
		simbolo: {

		},
		natura: {

		},
	}
	secondClass: {
		tempo: {

		},
		tocco: {

		},
		dinamica: {

		},
		simbolo: {

		},
		natura: {

		},
	}
	thirdClass: {
		tempo: {

		},
		tocco: {

		},
		dinamica: {

		},
		simbolo: {

		},
		natura: {

		},
	}
	fourthClass: {
		tempo: {

		},
		tocco: {

		},
		dinamica: {

		},
		simbolo: {

		},
		natura: {

		},
	}
	fifthClass: {
		tempo: {

		},
		tocco: {

		},
		dinamica: {

		},
		simbolo: {

		},
		natura: {

		},
	}
	sixthClass: {
		tempo: {

		},
		tocco: {

		},
		dinamica: {

		},
		simbolo: {

		},
		natura: {

		},
	}
	seventhClass: {
		tempo: {

		},
		tocco: {

		},
		dinamica: {

		},
		simbolo: {

		},
		natura: {

		},
	} 
	eighthClass: {
		tempo: {

		},
		tocco: {

		},
		dinamica: {

		},
		simbolo: {

		},
		natura: {

		},
	}
	ninthEleventhClass: {
		tempo: {

		},
		tocco: {

		},
		dinamica: {

		},
		simbolo: {

		},
		natura: {

		},
	}
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
				{term: 'detache', transleate: 'раздельно', symbol: 'img/tocco/Music-detache.svg'},
				{term: 'legato', transleate: 'связно', symbol: 'img/tocco/Music-legato.svg'},
				{term: 'staccato', transleate: 'отрывисто', symbol: 'img/tocco/Music-staccato.svg'},
				{term: 'marcato', transleate: 'подчёркивая', symbol: 'img/tocco/Music-marcato.svg'},
				{term: 'non legato', transleate: 'не связно', symbol: 'img/tocco/Music-non-legato.svg'},
				{term: 'portamento', transleate: 'протяжно но не связно', symbol: 'img/tocco/Music-portamento.svg'},
				{term: 'tenuto', transleate: 'выдержанно', symbol: 'img/tocco/Music-tenuto.svg'},
				{term: 'glissando', transleate: 'скользя', symbol: 'img/tocco/Music-glissando.svg'},
			],
			dinamica: [
				{term: 'forte', transleate: 'громко', symbol: 'img/dinamica/Music-forte.svg'},
				{term: 'piano', transleate: 'тихо', symbol: 'img/dinamica/Music-piano.svg'},
				{term: 'mezzo forte', transleate: 'не очень громко', symbol: 'img/dinamica/Music-mezzoforte.svg'},
				{term: 'mezzo piano', transleate: 'не очень тихо', symbol: 'img/dinamica/Music-mezzopiano.svg'},
				{term: 'crecsendo', transleate: 'усиливая', symbol: 'img/dinamica/Music-crescendo.svg'},
				{term: 'diminuendo', transleate: 'стихая', symbol: 'img/dinamica/Music-diminuendo.svg'},
				{term: 'marcato', transleate: 'акцент', symbol: 'img/dinamica/Music-marcato.svg'},
				{term: 'sforzando', transleate: 'внезапное ударение', symbol: 'img/dinamica/Sfz.svg'},
				{term: 'fortissimo', transleate: 'очень громко', symbol: 'img/dinamica/Music-fortissimo.svg'},
				{term: 'pianissimo', transleate: 'очень тихо', symbol: 'img/dinamica/Music-pianissimo.svg'},
				{term: 'piu forte', transleate: 'более громко'},
				{term: 'meno forte', transleate: 'менее громко'},
				{term: 'poco', transleate: 'немного'},
				{term: 'poco a poco crecsendo', transleate: 'мало-помалу усиливая'},
				{term: 'poco a poco diminuendo', transleate: 'мало-помалу стихая'},
			],
			simbolo: [
				{term: 'реприза', transleate: 'повторение', symbol: 'img/simbolo/Music-repeat.png'},
				{term: '', transleate: 'за первым разом на первую вольту, за вторым на вторую', symbol: 'img/simbolo/Music-volte.svg'},
				{term: 'fermata', transleate: 'остановка', symbol: 'img/simbolo/Music-fermata.svg'},
				{term: 'Fine', transleate: 'финал, конец'},
				{term: '', transleate: 'повторение предыдущего такта', symbol: 'img/simbolo/Music-simile.png'},
				{term: 'Da capo al fine', transleate: 'с начала до слова «Конец»'},
				{term: 'Segno', transleate: 'сеньо - знак', symbol: 'img/simbolo/Music-segno.png'},
				{term: 'Lanterna', transleate: 'фонарь - знак', symbol: 'img/simbolo/Coda_sign.svg'}
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
		}