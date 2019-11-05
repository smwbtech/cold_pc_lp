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
		background-color: #fff;
		animation: menu 0.3s ease-out forwards;
		box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);

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
</style>
