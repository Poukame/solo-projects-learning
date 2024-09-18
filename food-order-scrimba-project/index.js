import { menuArray } from './data.js';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

document.addEventListener('click', function (e) {
	if (e.target.dataset.id) {
		updateCart(e.target.dataset.id, e.target.classList.value, e.target.dataset.uuid);
	}

	if (e.target.classList.value === 'complete-order-btn') {
		displayPaymentForm(true);
	}

	if (e.target.classList.value === 'btn-close-modal') {
		displayPaymentForm(false);
	}

	if (e.target.classList.value === 'pay-btn') {
		displayConfirmation();
	}
});

let cart = [];

renderMenu();

function renderMenu() {
	const menuContainer = document.getElementById('menu-list');
	let menuHTML = ``;
	menuContainer.innerHTML = ``; // clear the HTML

	menuArray.forEach((item) => {
		const { name, ingredients, price, id, emoji } = item;

		menuHTML += `<div class="item">
					<div class="item-pic">${emoji}</div>
					<div class="item-details">
						<div class="item-details__name item-typo">${name}</div>
						<div class="item-details__ingredient">${ingredients}</div>
						<div class="item-details__price">$${price}</div>
					</div>
						<button class="item-add-btn" data-id="${id}">+</button>
				</div>`;
	});

	menuContainer.innerHTML = menuHTML;
}

function getSelectedItem(itemId) {
	const item = menuArray.filter((item) => {
		return itemId == item.id;
	})[0];
	return item;
}

function updateCart(itemId, btnClass, uuid) {
	if (btnClass === 'item-add-btn') {
		cart.push({ ...getSelectedItem(itemId), uuid: uuidv4() });
	} else if (btnClass === 'remove-btn') {
		cart = cart.filter((item) => item.uuid != uuid);
	}

	renderCart(cart);
}

function renderCart(cart) {
	const cartContainer = document.getElementById('order');
	cartContainer.innerHTML = ``;
	let itemsHTML = ``;

	if (cart.length > 0) {
		const cartTotal = cart.reduce((acc, current) => {
			return acc + current.price;
		}, 0);

		cart.forEach((item) => {
			const { name, price, id, uuid } = item;
			itemsHTML += `<div class="order__details" id="order__details" data-uuid=${uuid}>
					<div class="order__items">
						<div class="item-details__name">${name}</div>
						<button class="remove-btn" data-id=${id} data-uuid=${uuid}>remove</button>
					</div>
					<div class="price-typo">$${price}</div>
				</div>`;
		});

		cartContainer.innerHTML = `<div class="order__title item-typo">Your Order</div>
				${itemsHTML}
				<div class="order__total">
					<div class="item-details__name">Total</div>
					<div class="price-typo">$${cartTotal}</div>
				</div>
				<button class="complete-order-btn">Complete Order</button>`;
	}
}

function displayPaymentForm(state) {
	state
		? (document.querySelector('.modal-overlay').style.display = 'block')
		: (document.querySelector('.modal-overlay').style.display = 'none');
}

function displayConfirmation() {
	const formData = document.getElementById('payment-form');
	let customerName = ''
	formData.addEventListener('submit', (e) => {
		e.preventDefault();
		customerName = formData.elements['name'].value;
		displayPaymentForm(false);

		const orderContainer = document.getElementById('order');
		orderContainer.innerHTML = `<div class="confirmation">
						Thanks ${customerName}, your order is on its way!
						</div>`;

		cart = []
	});
}
