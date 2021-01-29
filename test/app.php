<div id="app">
	<header class="test">
		<div class="counter" v-bind:style="{width: counter + '+'}">
			
		</div>
		<p class="attention" v-if="appIsNotWorking">Внимание! Технические работы</p>
		<p class="attention" v-if="attention">Для первого класса термины в &laquo;Характере исполнения&raquo; не найдены. Пожалуйста измените настройки</p>
	</header>

	<main class="test">
		<section class="app-section">
			<div
				v-bind:class="{
					card: true, 
					correct: styleSetUp[4] == 1, 
					incorrect: styleSetUp[4] == 2
				}" 
				v-on:click="genTerm"
				>
				<img v-bind:src="termSymbol" class="term">
				<p class="term">{{term}}</p>
			</div>

			<transition name="fade">
				<div class="buttons" v-if="show">
					<button 
						v-bind:class="{
							button: true, 
							correct: styleSetUp[id] == 1, 
							incorrect: styleSetUp[id] == 2
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

	<aside v-bind:class="{hide: !showMenu, test: true}">
		<div class="test-container">
			<ul class="test-ul">
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
			<button class="button test" v-on:click="genTerm">Начать тест</button>
		</div>
	</aside>

</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="app.js"></script>