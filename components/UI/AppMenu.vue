<template>
	<header :class="[isFixed ? 'fixed' : '']">
		<nav>
			<a href="https://nnz-ipc.ru/" target="_blank">
				<img
					:src="
						isFixed
							? '/img/nnz_logo_colored.svg'
							: '/img/nnz_logo.svg'
					"
					alt="Логотип Ниеншанц-Автоматика"
				/>
			</a>
			<ul>
				<li>
					<a href="" @click.prevent="scrollTo('.application')"
						>решения</a
					>
				</li>
				<li>
					<a href="" @click.prevent="scrollTo('.models')">модели</a>
				</li>
				<li>
					<a href="" @click.prevent="scrollTo('.contacts')"
						>контакты</a
					>
				</li>
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
	},
	methods: {
		scrollTo(selector) {
			document
				.querySelector(selector)
				.scrollIntoView({ behavior: 'smooth' });
		}
	}
};
</script>

<style scoped>
header {
	position: absolute;
	z-index: 100;
	width: 100%;
	padding: 5px
		calc(var(--side-padding) + var(--column) * 2 + var(--gutter) * 2);
	font-family: 'Intro', sans-serif;

	& nav {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& img {
			width: calc(var(--column) * 3 + var(--gutter) * 2);
		}

		& ul {
			list-style: none;
			display: flex;
			align-items: flex-end;
			justify-content: center;

			& li {
				margin-left: calc(var(--column) + var(--gutter) * 2);

				& a {
					text-decoration: none;
					color: #fff;
					transition: color 0.3s ease-in;

					&:hover {
						color: var(--orange);
					}
				}
			}
		}
	}

	&.fixed {
		position: fixed;
		background-color: rgba(255, 255, 255, 0.7);
		animation: menu 0.3s ease-out forwards;
		box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
		transition: background-color 0.3s ease-in;

		&:hover {
			background-color: rgba(255, 255, 255, 0.9);
		}

		& ul {
			& li {
				& a {
					color: var(--dark-blue);
				}
			}
		}
	}
}

/* Transitions and animations */

@keyframes menu {
	0% {
		transform: translateY(-100%);
	}
	100% {
		transform: translateY(0%);
	}
}

/* tablets */
@media (width < 1200px) {
	header {
		padding: 5px calc(var(--m-gutter) * 2);
	}
}
</style>
