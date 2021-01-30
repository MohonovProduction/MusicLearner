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
		/* styles */
		showOptions: false,
		showMenu: true,
		showResults: false,

		attention: false,
		appIsNotWorking: false,

		counter: 0,

		/* setings */
		settingTerms: 5,
		settingClass: 7,
		countQuestion: 20,
		termsBaseClass: ['1','2','3','4','5','7','8','9-11'],

		/* data */
		terms: [],
		termsBase: [
			[
				[
					{term: 'allegro', transleate: 'скоро'},
					{term: 'adagio', transleate: 'медленно'},
					{term: 'andante', transleate: 'спокойным шагом'},
					{term: 'ritenuto', transleate: 'сдерживая'},
					{term: 'a tempo', transleate: 'в темпе'},
				],
				[
					{term: 'detache', transleate: 'раздельно', symbol: '../img/tocco/Music-detache.svg'},
					{term: 'legato', transleate: 'связно', symbol: '../img/tocco/Music-legato.svg'},
					{term: 'staccato', transleate: 'отрывисто', symbol: '../img/tocco/Music-staccato.svg'},
				],
				[
					{term: 'forte', transleate: 'громко', symbol: '../img/dinamica/Music-forte.svg'},
					{term: 'piano', transleate: 'тихо', symbol: '../img/dinamica/Music-piano.svg'},
					{term: 'crecsendo', transleate: 'усиливая', symbol: '../img/dinamica/Music-crescendo.svg'},
					{term: 'diminuendo', transleate: 'стихая', symbol: '../img/dinamica/Music-diminuendo.svg'},
				],
				[
					{term: 'реприза', transleate: 'повторение', symbol: '../img/simbolo/Music-repeat.png'},
					{term: '', transleate: 'за первым разом на первую вольту, за вторым на вторую', symbol: '../img/simbolo/Music-volte.svg'},
					{term: 'fermata', transleate: 'остановка', symbol: '../img/simbolo/Music-fermata.svg'},
					{term: 'Fine', transleate: 'финал, конец'},
				],
				[],
			],
			[
				[
					{term: 'allegro', transleate: 'скоро'},
					{term: 'adagio', transleate: 'медленно'},
					{term: 'andante', transleate: 'спокойным шагом'},
					{term: 'ritenuto', transleate: 'сдерживая'},
					{term: 'a tempo', transleate: 'в темпе'},
					{term: 'vivo', transleate: 'живо'},
				],
				[
					{term: 'detache', transleate: 'раздельно', symbol: '../img/tocco/Music-detache.svg'},
					{term: 'legato', transleate: 'связно', symbol: '../img/tocco/Music-legato.svg'},
					{term: 'staccato', transleate: 'отрывисто', symbol: '../img/tocco/Music-staccato.svg'},
				],
				[
					{term: 'forte', transleate: 'громко', symbol: '../img/dinamica/Music-forte.svg'},
					{term: 'piano', transleate: 'тихо', symbol: '../img/dinamica/Music-piano.svg'},
					{term: 'crecsendo', transleate: 'усиливая', symbol: '../img/dinamica/Music-crescendo.svg'},
					{term: 'diminuendo', transleate: 'стихая', symbol: '../img/dinamica/Music-diminuendo.svg'},
					{term: 'marcato', transleate: 'акцент', symbol: '../img/dinamica/Music-marcato.svg'},
				],
				[
					{term: 'реприза', transleate: 'повторение', symbol: '../img/simbolo/Music-repeat.png'},
					{term: '', transleate: 'за первым разом на первую вольту, за вторым на вторую', symbol: '../img/simbolo/Music-volte.svg'},
					{term: 'fermata', transleate: 'остановка', symbol: '../img/simbolo/Music-fermata.svg'},
					{term: 'Fine', transleate: 'финал, конец'},
					{term: '', transleate: 'повторение предыдущего такта', symbol: '../img/simbolo/Music-simile.png'},
				],
				[
					{term: 'dolche', transleate: 'нежно'},
					{term: 'cantabile', transleate: 'певуче'},
					{term: 'risoluto', transleate: 'решительно'},
				],
			],
			[
				[
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
				],
				[
					{term: 'detache', transleate: 'раздельно', symbol: '../img/tocco/Music-detache.svg'},
					{term: 'legato', transleate: 'связно', symbol: '../img/tocco/Music-legato.svg'},
					{term: 'staccato', transleate: 'отрывисто', symbol: '../img/tocco/Music-staccato.svg'},
					{term: 'marcato', transleate: 'подчёркивая', symbol: '../img/tocco/Music-marcato.svg'},
				],
				[
					{term: 'forte', transleate: 'громко', symbol: '../img/dinamica/Music-forte.svg'},
					{term: 'piano', transleate: 'тихо', symbol: '../img/dinamica/Music-piano.svg'},
					{term: 'mezzo forte', transleate: 'не очень громко', symbol: '../img/dinamica/Music-mezzoforte.svg'},
					{term: 'mezzo piano', transleate: 'не очень тихо', symbol: '../img/dinamica/Music-mezzopiano.svg'},
					{term: 'crecsendo', transleate: 'усиливая', symbol: '../img/dinamica/Music-crescendo.svg'},
					{term: 'diminuendo', transleate: 'стихая', symbol: '../img/dinamica/Music-diminuendo.svg'},
					{term: 'marcato', transleate: 'акцент', symbol: '../img/dinamica/Music-marcato.svg'},
					{term: 'sforzando', transleate: 'внезапное ударение', symbol: '../img/dinamica/Sfz.svg'},

				],
				[
					{term: 'реприза', transleate: 'повторение', symbol: '../img/simbolo/Music-repeat.png'},
					{term: '', transleate: 'за первым разом на первую вольту, за вторым на вторую', symbol: '../img/simbolo/Music-volte.svg'},
					{term: 'fermata', transleate: 'остановка', symbol: '../img/simbolo/Music-fermata.svg'},
					{term: 'Fine', transleate: 'финал, конец'},
					{term: '', transleate: 'повторение предыдущего такта', symbol: '../img/simbolo/Music-simile.png'},
					{term: 'Da capo al fine', transleate: 'с начала до слова «Конец»'},

				],
				[
					{term: 'dolche', transleate: 'нежно'},
					{term: 'cantabile', transleate: 'певуче'},
					{term: 'risoluto', transleate: 'решительно'},
					{term: 'leggiero', transleate: 'легко'},
				],
			],
			[
				[
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
				],
				[
					{term: 'detache', transleate: 'раздельно', symbol: '../img/tocco/Music-detache.svg'},
					{term: 'legato', transleate: 'связно', symbol: '../img/tocco/Music-legato.svg'},
					{term: 'staccato', transleate: 'отрывисто', symbol: '../img/tocco/Music-staccato.svg'},
					{term: 'marcato', transleate: 'подчёркивая', symbol: '../img/tocco/Music-marcato.svg'},
				],
				[
					{term: 'forte', transleate: 'громко', symbol: '../img/dinamica/Music-forte.svg'},
					{term: 'piano', transleate: 'тихо', symbol: '../img/dinamica/Music-piano.svg'},
					{term: 'mezzo forte', transleate: 'не очень громко', symbol: '../img/dinamica/Music-mezzoforte.svg'},
					{term: 'mezzo piano', transleate: 'не очень тихо', symbol: '../img/dinamica/Music-mezzopiano.svg'},
					{term: 'crecsendo', transleate: 'усиливая', symbol: '../img/dinamica/Music-crescendo.svg'},
					{term: 'diminuendo', transleate: 'стихая', symbol: '../img/dinamica/Music-diminuendo.svg'},
					{term: 'marcato', transleate: 'акцент', symbol: '../img/dinamica/Music-marcato.svg'},
					{term: 'sforzando', transleate: 'внезапное ударение', symbol: '../img/dinamica/Sfz.svg'},
					{term: 'fortissimo', transleate: 'очень громко', symbol: '../img/dinamica/Music-fortissimo.svg'},
					{term: 'pianissimo', transleate: 'очень тихо', symbol: '../img/dinamica/Music-pianissimo.svg'},
				],
				[
					{term: 'реприза', transleate: 'повторение', symbol: '../img/simbolo/Music-repeat.png'},
					{term: '', transleate: 'за первым разом на первую вольту, за вторым на вторую', symbol: '../img/simbolo/Music-volte.svg'},
					{term: 'fermata', transleate: 'остановка', symbol: '../img/simbolo/Music-fermata.svg'},
					{term: 'Fine', transleate: 'финал, конец'},
					{term: '', transleate: 'повторение предыдущего такта', symbol: '../img/simbolo/Music-simile.png'},
					{term: 'Da capo al fine', transleate: 'с начала до слова «Конец»'},
					{term: 'Segno', transleate: 'сеньо - знак', symbol: '../img/simbolo/Music-segno.png'},
					{term: 'Lanterna', transleate: 'фонарь - знак', symbol: '../img/simbolo/Coda_sign.svg'}
				],
				[
					{term: 'dolche', transleate: 'нежно'},
					{term: 'cantabile', transleate: 'певуче'},
					{term: 'risoluto', transleate: 'решительно'},
					{term: 'leggiero', transleate: 'легко'},
					{term: 'espressivo', transleate: 'выразительно'},
					{term: 'giocoso', transleate: 'весело'},
					{term: 'maestoso', transleate: 'торжественно, величаво'},
				],
			],
			[
				[
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
				],
				[
					{term: 'detache', transleate: 'раздельно', symbol: '../img/tocco/Music-detache.svg'},
					{term: 'legato', transleate: 'связно', symbol: '../img/tocco/Music-legato.svg'},
					{term: 'staccato', transleate: 'отрывисто', symbol: '../img/tocco/Music-staccato.svg'},
					{term: 'marcato', transleate: 'подчёркивая', symbol: '../img/tocco/Music-marcato.svg'},
					{term: 'non legato', transleate: 'не связно', symbol: '../img/tocco/Music-non-legato.svg'},
				],
				[
					{term: 'forte', transleate: 'громко', symbol: '../img/dinamica/Music-forte.svg'},
					{term: 'piano', transleate: 'тихо', symbol: '../img/dinamica/Music-piano.svg'},
					{term: 'mezzo forte', transleate: 'не очень громко', symbol: '../img/dinamica/Music-mezzoforte.svg'},
					{term: 'mezzo piano', transleate: 'не очень тихо', symbol: '../img/dinamica/Music-mezzopiano.svg'},
					{term: 'crecsendo', transleate: 'усиливая', symbol: '../img/dinamica/Music-crescendo.svg'},
					{term: 'diminuendo', transleate: 'стихая', symbol: '../img/dinamica/Music-diminuendo.svg'},
					{term: 'marcato', transleate: 'акцент', symbol: '../img/dinamica/Music-marcato.svg'},
					{term: 'sforzando', transleate: 'внезапное ударение', symbol: '../img/dinamica/Sfz.svg'},
					{term: 'fortissimo', transleate: 'очень громко', symbol: '../img/dinamica/Music-fortissimo.svg'},
					{term: 'pianissimo', transleate: 'очень тихо', symbol: '../img/dinamica/Music-pianissimo.svg'},
					{term: 'piu forte', transleate: 'более громко'},
					{term: 'meno forte', transleate: 'менее громко'},
				],
				[
					{term: 'реприза', transleate: 'повторение', symbol: '../img/simbolo/Music-repeat.png'},
					{term: '', transleate: 'за первым разом на первую вольту, за вторым на вторую', symbol: '../img/simbolo/Music-volte.svg'},
					{term: 'fermata', transleate: 'остановка', symbol: '../img/simbolo/Music-fermata.svg'},
					{term: 'Fine', transleate: 'финал, конец'},
					{term: '', transleate: 'повторение предыдущего такта', symbol: '../img/simbolo/Music-simile.png'},
					{term: 'Da capo al fine', transleate: 'с начала до слова «Конец»'},
					{term: 'Segno', transleate: 'сеньо - знак', symbol: '../img/simbolo/Music-segno.png'},
					{term: 'Lanterna', transleate: 'фонарь - знак', symbol: '../img/simbolo/Coda_sign.svg'}
				],
				[
					{term: 'dolche', transleate: 'нежно'},
					{term: 'cantabile', transleate: 'певуче'},
					{term: 'risoluto', transleate: 'решительно'},
					{term: 'leggiero', transleate: 'легко'},
					{term: 'espressivo', transleate: 'выразительно'},
					{term: 'giocoso', transleate: 'весело'},
					{term: 'maestoso', transleate: 'торжественно, величаво'},
					{term: 'simile', transleate: 'точно так, как раньше'},
				],
			],
			[
				[
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

				],
				[
					{term: 'detache', transleate: 'раздельно', symbol: '../img/tocco/Music-detache.svg'},
					{term: 'legato', transleate: 'связно', symbol: '../img/tocco/Music-legato.svg'},
					{term: 'staccato', transleate: 'отрывисто', symbol: '../img/tocco/Music-staccato.svg'},
					{term: 'marcato', transleate: 'подчёркивая', symbol: '../img/tocco/Music-marcato.svg'},
					{term: 'non legato', transleate: 'не связно', symbol: '../img/tocco/Music-non-legato.svg'},
					{term: 'portamento', transleate: 'протяжно но не связно', symbol: '../img/tocco/Music-portamento.svg'},
				],
				[
					{term: 'forte', transleate: 'громко', symbol: '../img/dinamica/Music-forte.svg'},
					{term: 'piano', transleate: 'тихо', symbol: '../img/dinamica/Music-piano.svg'},
					{term: 'mezzo forte', transleate: 'не очень громко', symbol: '../img/dinamica/Music-mezzoforte.svg'},
					{term: 'mezzo piano', transleate: 'не очень тихо', symbol: '../img/dinamica/Music-mezzopiano.svg'},
					{term: 'crecsendo', transleate: 'усиливая', symbol: '../img/dinamica/Music-crescendo.svg'},
					{term: 'diminuendo', transleate: 'стихая', symbol: '../img/dinamica/Music-diminuendo.svg'},
					{term: 'marcato', transleate: 'акцент', symbol: '../img/dinamica/Music-marcato.svg'},
					{term: 'sforzando', transleate: 'внезапное ударение', symbol: '../img/dinamica/Sfz.svg'},
					{term: 'fortissimo', transleate: 'очень громко', symbol: '../img/dinamica/Music-fortissimo.svg'},
					{term: 'pianissimo', transleate: 'очень тихо', symbol: '../img/dinamica/Music-pianissimo.svg'},
					{term: 'piu forte', transleate: 'более громко'},
					{term: 'meno forte', transleate: 'менее громко'},
					{term: 'poco', transleate: 'немного'},
					{term: 'poco a poco crecsendo', transleate: 'мало-помалу усиливая'},
					{term: 'poco a poco diminuendo', transleate: 'мало-помалу стихая'},
				],
				[
					{term: 'реприза', transleate: 'повторение', symbol: '../img/simbolo/Music-repeat.png'},
					{term: '', transleate: 'за первым разом на первую вольту, за вторым на вторую', symbol: '../img/simbolo/Music-volte.svg'},
					{term: 'fermata', transleate: 'остановка', symbol: '../img/simbolo/Music-fermata.svg'},
					{term: 'Fine', transleate: 'финал, конец'},
					{term: '', transleate: 'повторение предыдущего такта', symbol: '../img/simbolo/Music-simile.png'},
					{term: 'Da capo al fine', transleate: 'с начала до слова «Конец»'},
					{term: 'Segno', transleate: 'сеньо - знак', symbol: '../img/simbolo/Music-segno.png'},
					{term: 'Lanterna', transleate: 'фонарь - знак', symbol: '../img/simbolo/Coda_sign.svg'}
				],
				[
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
				],
			],
			[
				[
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
				[
					{term: 'detache', transleate: 'раздельно', symbol: '../img/tocco/Music-detache.svg'},
					{term: 'legato', transleate: 'связно', symbol: '../img/tocco/Music-legato.svg'},
					{term: 'staccato', transleate: 'отрывисто', symbol: '../img/tocco/Music-staccato.svg'},
					{term: 'marcato', transleate: 'подчёркивая', symbol: '../img/tocco/Music-marcato.svg'},
					{term: 'non legato', transleate: 'не связно', symbol: '../img/tocco/Music-non-legato.svg'},
					{term: 'portamento', transleate: 'протяжно но не связно', symbol: '../img/tocco/Music-portamento.svg'},
					{term: 'tenuto', transleate: 'выдержанно', symbol: '../img/tocco/Music-tenuto.svg'},
				],
				[
					{term: 'forte', transleate: 'громко', symbol: '../img/dinamica/Music-forte.svg'},
					{term: 'piano', transleate: 'тихо', symbol: '../img/dinamica/Music-piano.svg'},
					{term: 'mezzo forte', transleate: 'не очень громко', symbol: '../img/dinamica/Music-mezzoforte.svg'},
					{term: 'mezzo piano', transleate: 'не очень тихо', symbol: '../img/dinamica/Music-mezzopiano.svg'},
					{term: 'crecsendo', transleate: 'усиливая', symbol: '../img/dinamica/Music-crescendo.svg'},
					{term: 'diminuendo', transleate: 'стихая', symbol: '../img/dinamica/Music-diminuendo.svg'},
					{term: 'marcato', transleate: 'акцент', symbol: '../img/dinamica/Music-marcato.svg'},
					{term: 'sforzando', transleate: 'внезапное ударение', symbol: '../img/dinamica/Sfz.svg'},
					{term: 'fortissimo', transleate: 'очень громко', symbol: '../img/dinamica/Music-fortissimo.svg'},
					{term: 'pianissimo', transleate: 'очень тихо', symbol: '../img/dinamica/Music-pianissimo.svg'},
					{term: 'piu forte', transleate: 'более громко'},
					{term: 'meno forte', transleate: 'менее громко'},
					{term: 'poco', transleate: 'немного'},
					{term: 'poco a poco crecsendo', transleate: 'мало-помалу усиливая'},
					{term: 'poco a poco diminuendo', transleate: 'мало-помалу стихая'},
				],
				[
					{term: 'реприза', transleate: 'повторение', symbol: '../img/simbolo/Music-repeat.png'},
					{term: '', transleate: 'за первым разом на первую вольту, за вторым на вторую', symbol: '../img/simbolo/Music-volte.svg'},
					{term: 'fermata', transleate: 'остановка', symbol: '../img/simbolo/Music-fermata.svg'},
					{term: 'Fine', transleate: 'финал, конец'},
					{term: '', transleate: 'повторение предыдущего такта', symbol: '../img/simbolo/Music-simile.png'},
					{term: 'Da capo al fine', transleate: 'с начала до слова «Конец»'},
					{term: 'Segno', transleate: 'сеньо - знак', symbol: '../img/simbolo/Music-segno.png'},
					{term: 'Lanterna', transleate: 'фонарь - знак', symbol: '../img/simbolo/Coda_sign.svg'}
				],
				[
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
				]
			],
			[
				[
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
				[
					{term: 'detache', transleate: 'раздельно', symbol: '../img/tocco/Music-detache.svg'},
					{term: 'legato', transleate: 'связно', symbol: '../img/tocco/Music-legato.svg'},
					{term: 'staccato', transleate: 'отрывисто', symbol: '../img/tocco/Music-staccato.svg'},
					{term: 'marcato', transleate: 'подчёркивая', symbol: '../img/tocco/Music-marcato.svg'},
					{term: 'non legato', transleate: 'не связно', symbol: '../img/tocco/Music-non-legato.svg'},
					{term: 'portamento', transleate: 'протяжно но не связно', symbol: '../img/tocco/Music-portamento.svg'},
					{term: 'tenuto', transleate: 'выдержанно', symbol: '../img/tocco/Music-tenuto.svg'},
					{term: 'glissando', transleate: 'скользя', symbol: '../img/tocco/Music-glissando.svg'},
				],
				[
					{term: 'forte', transleate: 'громко', symbol: '../img/dinamica/Music-forte.svg'},
					{term: 'piano', transleate: 'тихо', symbol: '../img/dinamica/Music-piano.svg'},
					{term: 'mezzo forte', transleate: 'не очень громко', symbol: '../img/dinamica/Music-mezzoforte.svg'},
					{term: 'mezzo piano', transleate: 'не очень тихо', symbol: '../img/dinamica/Music-mezzopiano.svg'},
					{term: 'crecsendo', transleate: 'усиливая', symbol: '../img/dinamica/Music-crescendo.svg'},
					{term: 'diminuendo', transleate: 'стихая', symbol: '../img/dinamica/Music-diminuendo.svg'},
					{term: 'marcato', transleate: 'акцент', symbol: '../img/dinamica/Music-marcato.svg'},
					{term: 'sforzando', transleate: 'внезапное ударение', symbol: '../img/dinamica/Sfz.svg'},
					{term: 'fortissimo', transleate: 'очень громко', symbol: '../img/dinamica/Music-fortissimo.svg'},
					{term: 'pianissimo', transleate: 'очень тихо', symbol: '../img/dinamica/Music-pianissimo.svg'},
					{term: 'piu forte', transleate: 'более громко'},
					{term: 'meno forte', transleate: 'менее громко'},
					{term: 'poco', transleate: 'немного'},
					{term: 'poco a poco crecsendo', transleate: 'мало-помалу усиливая'},
					{term: 'poco a poco diminuendo', transleate: 'мало-помалу стихая'},
				],
				[
					{term: 'реприза', transleate: 'повторение', symbol: '../img/simbolo/Music-repeat.png'},
					{term: '', transleate: 'за первым разом на первую вольту, за вторым на вторую', symbol: '../img/simbolo/Music-volte.svg'},
					{term: 'fermata', transleate: 'остановка', symbol: '../img/simbolo/Music-fermata.svg'},
					{term: 'Fine', transleate: 'финал, конец'},
					{term: '', transleate: 'повторение предыдущего такта', symbol: '../img/simbolo/Music-simile.png'},
					{term: 'Da capo al fine', transleate: 'с начала до слова «Конец»'},
					{term: 'Segno', transleate: 'сеньо - знак', symbol: '../img/simbolo/Music-segno.png'},
					{term: 'Lanterna', transleate: 'фонарь - знак', symbol: '../img/simbolo/Coda_sign.svg'}
				],
				[
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
			]
		],
		term: '',
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

		incorrectIsWas: false,
		correctAnswers: [],
		incorrectAnswers: [],
		correctCards: 0;
		result: 0,
	},
	methods: {			
		genTerm: function () {

			this.showMenu = false
			this.terms = []

			if (this.settingTerms == 5) {
				for (var i = this.termsBase[this.settingClass].length - 1; i >= 0; i--) {
					this.terms = this.terms.concat(this.termsBase[this.settingClass][i])
				}
			} else {
				this.terms = this.termsBase[this.settingClass][this.settingTerms]
			}	

			if (this.settingClass == 0 && this.settingTerms == 4) {
				this.attention = true
			} else {
				this.attention = false
			}

			this.showOptions = true
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

		test: function () {
			if (this.countQuestion > 0) {
				this.incorrectIsWas = false
				this.counter++
				this.countQuestion--

				this.genTerm()
			} else {
				this.showResults = true
				this.results()
			}
		},

		results: function () {

		},

		checkAnswer: function (id) {
			if (this.answer == this.answerOptions[id]) {
				Vue.set(this.styleSetUp, id, 1)
				Vue.set(this.styleSetUp, 4, 1)

				if (!this.incorrectIsWas) {
					this.correctAnswers.push(this.answer)
					this.correctCards++
				}

				setTimeout(this.test, 1000)
			} else {
				Vue.set(this.styleSetUp, id, 2)
				Vue.set(this.styleSetUp, 4, 2)

				this.incorrectIsWas = true
				this.incorrectAnswers.push(this.answerOptions[id])
			}
		}
	}
})