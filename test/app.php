<div id="app">
	<header>
		<p class="attention" v-if="appIsNotWorking">Внимание! Технические работы</p>
		<p class="attention" v-if="attention">Для первого класса термины в &laquo;Характере исполнения&raquo; не найдены. Пожалуйста измените настройки</p>
	</header>

	<main>
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

	<aside class="test">
		<div class="test-container">
			<ul class="test-ul">
				<li class="test-select">
					<h2 class="test-select">Колличество вопросов</h2>
					<select class="test-select">
						<option>Lorem ipsum</option>
					</select>
				</li>
				<li class="test-select">
					<h2 class="test-select">Колличество вопросов</h2>
					<select class="test-select">
						<option>Lorem ipsum</option>
					</select>
				</li>
				<li class="test-select">
					<h2 class="test-select">Колличество вопросов</h2>
					<select class="test-select">
						<option>Lorem ipsum</option>
					</select>
				</li>
			</ul>
			<button class="button test">Начать тест</button>
		</div>
	</aside>

</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="app.js"></script>