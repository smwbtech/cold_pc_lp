<template>
	<header :class="[isFixed ? 'fixed' : '']">
		<nav>
			<a href="https://nnz-ipc.ru/" target="_blank">
				<img
					src="/img/nnz_logo.svg"
					alt="Логотип Ниеншанц-Автоматика"
				/>
			</a>
			<ul>
				<li><a href="">решения</a></li>
				<li><a href="">модели</a></li>
				<li><a href="">контакты</a></li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	computed: {
		isFixed() {
			return this.$store.state.currentSection !== 'Главный экран';
		}
	}
};
</script>

<style scoped>
header {
	position: absolute;
	z-index: 100;
	width: 100%;
	padding: 10px
		calc(var(--side-padding) + var(--column) * 2 + var(--gutter) * 2);
	font-family: 'Intro', sans-serif;

	&.fixed {
		position: fixed;
		background-color: #fff;
	}
}
</style>
