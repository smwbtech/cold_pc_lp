<template>
	<div class="title-block">
		<transition type="transition" name="header">
			<h1 v-show="isVisible">
				Промышленные встраиваемые платы для экстремально низких
				температур (-40 + 85)
			</h1>
		</transition>
		<transition-group
			tag="ul"
			:class="[showList ? 'visible' : '']"
			:css="false"
			appear
			@enter="enter"
		>
			<li
				v-for="(text, index) in applicationsTitle"
				:key="`${index}-title`"
				:data-index="index"
			>
				<span>{{ text }}</span>
			</li>
		</transition-group>
	</div>
</template>

<script>
export default {
	props: {
		isVisible: {
			type: Boolean,
			default: false
		},
		showList: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			applicationsTitle: [
				'система контроля и управления доступом (СКУД)',
				'система видеонаблюдения за нефтепроводом',
				'платёжный терминал'
			]
		};
	},

	methods: {
		enter(el, done) {
			const delay = (+el.dataset.index + 1) * 400;
			setTimeout(() => {
				el.classList.add('active');
				done();
			}, delay);
		}
	}
};
</script>

<style scoped>
/* block with title and applications list */
.title-block {
	position: relative;
	z-index: 20;
	display: flex;
	flex-flow: column;
	justify-content: center;
	width: calc(var(--column) * 9 + var(--gutter) * 8);
	margin-left: calc(
		var(--side-padding) + var(--column) * 2 + var(--gutter) * 2
	);
	text-align: left;
	color: #fff;

	& h1 {
		font-family: 'Intro', sans-serif;
	}

	& ul {
		list-style: none;
		margin: 0;
		padding: 0;
		font-weight: 500;
		font-size: 1.2em;
		opacity: 0;

		&.visible {
			opacity: 1;
		}

		& li {
			position: relative;
			margin-bottom: var(--gutter);
			opacity: 0;
			transform: trnaslateX(-20px);
			transition: opacity 0.3s ease-in, transform 0.3s ease-out;

			& span {
				position: relative;
				z-index: 10;
				font-size: 1.1em;
			}

			&:before {
				content: '';
				display: block;
				position: absolute;
				z-index: 9;
				height: 100%;
				width: 15px;
				background-color: var(--orange);
				transform-origin: center;
				transform: rotate(0deg);
				transition: transform 0.3s ease-in;
				width: 1em;
				height: 30px;
			}

			&.active {
				opacity: 1;
				transform: trnaslateX(0px);

				&:before {
					transform: rotate(45deg);
				}
			}
		}
	}
} /* end - block with title and applications list */

/* Animations and transitions */

/* transitions for h1 */
.header-enter {
	transform: translateY(-20px);
	opacity: 0;
}

.header-enter-active {
	transition: opacity 0.3s ease-in, transform 0.3s ease-out;
}
/* end - transitions for h1 */

/* small desktop displays */
@media (1200px <= width < 1600px) {
	.title-block {
		& h1 {
			font-size: 1.5em;
		}

		& ul {
			font-size: 1.1em;
		}
	}
}

/* tablets */
@media (width < 1200px) {
	.title-block {
		width: 100%;
		margin-left: calc(var(--m-column) + var(--m-gutter));
		padding-right: calc(var(--m-gutter) * 2);
	}
}

/* mobile phones */
@media (width < 768px) {
	.title-block {
		padding-left: 10px;
		font-size: 0.8em;
	}
}
</style>
