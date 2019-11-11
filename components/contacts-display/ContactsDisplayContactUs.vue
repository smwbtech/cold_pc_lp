<template>
	<div class="contact-us">
		<h2>Свяжитесь с нами!</h2>
		<div class="product">
			<transition name="avatar">
				<img
					v-show="visible"
					src="/img/contacts-display/avatar.png"
					alt="Олег Волков"
					class="product__avatar"
				/>
			</transition>
			<transition name="info">
				<div v-show="visible" class="info">
					<span class="name"><span>Олег Волков</span></span>
					<span class="position"
						>продукт-менеджер компании <br />ООО
						"Ниеншанц-Автоматика"<br />
						по продукции IEI</span
					>
					<a href="mailto:o.volkov@nnz.ru" class="email"
						>o.volkov@nnz.ru</a
					>
					<a href="tel:+78123265924#5094" class="phone"
						>8 (812) 326-59-24 # 5094</a
					>
				</div>
			</transition>
		</div>
		<div class="logos">
			<a href="https://nnz-ipc.ru/" target="_blank"
				><img src="/img/nnz_logo.svg" alt="Логотип Ниеншанц-Автоматика"
			/></a>
			<a href="https://iei.ru/" target="_blank"
				><img src="/img/iei_logo.svg" alt="Логотип IEI"
			/></a>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			visible: false
		};
	},

	watch: {
		show(val, oldVal) {
			if (val) this.visible = val;
		}
	}
};
</script>
<style scoped>
.contact-us {
	width: calc(var(--column) * 8 + var(--gutter) * 7);
	display: flex;
	flex-flow: column;
	align-items: flex-start;

	& h2 {
		font-family: 'Intro', sans-serif;
		color: #fff;
		margin-top: 0;
		margin-bottom: var(--column);
	}

	& .product {
		display: flex;
		align-items: center;
		color: #fff;
		margin-bottom: var(--column);

		& .info {
			& > * {
				display: block;
			}

			& .name {
				position: relative;
				margin-bottom: 20px;
				& span {
					position: relative;
					z-index: 2;
				}

				&:before {
					content: '';
					display: block;
					position: absolute;
					z-index: 0;
					height: 100%;
					width: 15px;
					background-color: var(--orange);
					transform-origin: center;
					transform: rotate(45deg);
				}
			}

			& .position {
				font-weight: 300;
				margin-bottom: 20px;
			}

			& a {
				color: var(--orange);
				text-decoration: none;
			}
		}
	}

	& .logos {
		display: flex;
		justify-content: space-between;
		align-content: center;

		& a {
			display: flex;
			align-items: center;
			width: 45%;

			& img {
				width: 80%;
			}
		}

		& a:last-child {
			justify-content: flex-end;
		}
	}
}

/* Transitions and animations */
.avatar-enter {
	opacity: 0;
	transform: translateX(-20px);
}

.avatar-enter-active {
	transition: opacity 0.3s ease-in, transform 0.3s ease-out;
}

.info-enter {
	opacity: 0;
	transform: translateX(20px);
}

.info-enter-active {
	transition: opacity 0.3s ease-in, transform 0.3s ease-out;
	transition-delay: 0.3s;
}

@media (width < 768px) {
	.contact-us {
		width: 100%;

		& h2 {
			width: 100%;
			text-align: center;
			margin-bottom: 20px;
		}

		& .product {
			flex-flow: column;
			width: 100%;
			align-items: center;
			text-align: center;
			margin-bottom: 20px;

			& .info {
				& .name {
					&:before {
						display: none;
					}
				}
			}
		}
	}
}
</style>
