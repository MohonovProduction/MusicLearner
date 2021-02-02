<div id="app">
	<header class="test">
		<div class="counter" 
			 v-bind:style="{width: counter / questions * 100 + '%'}"
			 >
			 </div>

		<p class="attention" v-if="appIsNotWorking">Внимание! Технические работы</p>
		<p class="attention" v-if="attention">Для первого класса термины в &laquo;Характере исполнения&raquo; не найдены. Пожалуйста измените настройки</p>
	</header>

	<aside v-bind:class="{'hide-to-top': !showMenu, 'test-menu': true}">
		<div class="test-container">
			<ul class="test-ul collection">
				<li class="test-select">
					<h2 class="test-select">Колличество вопросов</h2>
					<div class="count">
						<input type="range" min="10" max="50" class="test-select" v-model="countQuestion">
						<output class="test-select">{{countQuestion}}</output>
					</div>
				</li>
				<li class="test-select">
					<h2 class="test-select">Класс</h2>
					<select class="test-select" v-model="settingClass">
						<option v-for="(terms, id) in termsBase" v-bind:value="id">{{termsBaseClass[id]}}</option>
					</select>
				</li>
				<li class="test-select">
					<h2 class="test-select">Тип</h2>
					<select class="test-select" v-model="settingTerms">
						<option value="5">Все</option>
						<option value="0">Темп</option>
						<option value="1">Ритм</option>
						<option value="2">Динамика</option>
						<option value="3">Условные обозначения</option>
						<option value="4">Характер исполнения</option>
					</select>
				</li>
			</ul>

			<button class="button collection-animate" v-on:click="test">Начать тест</button>
		</div>
	</aside>

	<main class="test">
		<section class="app-section">
			<div
				v-bind:class="{
					card: true, 
					collection: true,
					correct: styleSetUp[4] == 1, 
					incorrect: styleSetUp[4] == 2
				}" 
				>
				<img v-bind:src="termSymbol" class="term">
				<p class="term">{{term}}</p>
			</div>

			<transition name="fade">
				<div class="buttons" v-if="showOptions">
					<button 
						v-bind:class="{
							'collection-animate': true,
							button: true, 
							correct: styleSetUp[id] === 1, 
							incorrect: styleSetUp[id] === 2
						}" 
						v-for="(option, id) of options"
						v-on:click="checkAnswer(id)"
						>
						{{ options[id] }}
					</button>
				</div>
			</transition>

		</section>
	</main>

	<aside v-bind:class="{'hide-to-top': !showResults, 'test-results': true}">
		<div>	
			<div class="results-container collection">
				<div class="result-diagram">
					<svg class="diagram" v-bind:data-percent="result">
						<circle r="100" cx="50%" cy="50%" />
					</svg>
					<p class="result">{{ result }}%</p>
				</div>
				<p class="result-plain-text">Правильных ответов</p>
			</div>

			<button class="button collection-animate">
				<a href="test.php" class="menu-link">
					<p class="link-text">Пройти ещё раз</p>
				</a>
			</button>

			<button class="button collection-animate">
				<a href="learn.php" class="menu-link">
					<p class="link-text">Подучить</p>
				</a>
			</button>
		</div>
	</aside>

</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="test/app.js?123"></script>