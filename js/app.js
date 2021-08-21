function productType(product, price) {
	const productCost = document.getElementById(product + '-price');
	const productValue = price;
	productCost.innerText = productValue;

	// calculate
	calculated();
}

// calculate total price
function totalPrice(product) {
	const costType = document.getElementById(product + '-price');
	const costText = costType.innerText;
	const costConvertToNumber = parseFloat(costText);
	return costConvertToNumber;
};

function calculated() {
	const bestPrice = totalPrice('best');
	const memoryPrice = totalPrice('memory');
	const storagePrice = totalPrice('storage');
	const deliveryPrice = totalPrice('delivery');
	const productTotalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
	document.getElementById('total-price').innerText = productTotalPrice;
	document.getElementById('final-cost').innerText = productTotalPrice;
    
};

//////// Button Addition ////////////

///////// Memory section /////////
document.getElementById('memory-8gb').addEventListener('click', function () {
	productType('memory', 0);
});

document.getElementById('memory-16gb').addEventListener('click', function () {
	productType('memory', 180)
});

///////// Storage section //////////

document.getElementById('storage-256gb').addEventListener('click', function () {
	productType('storage', 0)
});

document.getElementById('storage-512gb').addEventListener('click', function () {
	productType('storage', 100)
});

document.getElementById('storage-1tb').addEventListener('click', function () {
	productType('storage', 180)
});

//////////////// Delivery Section //////////

document.getElementById('delivery-free').addEventListener('click', function () {
	productType('delivery', 0)
});
 
document.getElementById('delivery-charged').addEventListener('click', function () {
	productType('delivery', 20)
});

//////////// Promo Code Section ///////////////

document.getElementById('discount').addEventListener('click', function () {
	const bestPrice = totalPrice('best');
	const memoryPrice = totalPrice('memory');
	const storagePrice = totalPrice('storage');
	const deliveryPrice = totalPrice('delivery');
	const productTotalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
	document.getElementById('total-price').innerText = productTotalPrice;
	document.getElementById('final-cost').innerText = productTotalPrice;

    ////// promo 
    const promoInput = document.getElementById('promo-input');
	const promoInputText = promoInput.value;

    promoInput.value = '';
	if (promoInputText == 'stevekaku') {
		const promoMultiply = productTotalPrice * 20;
		const promoCode = promoMultiply / 100;
		const promoCodeDiscount = productTotalPrice - promoCode;
		document.getElementById('final-cost').innerText = promoCodeDiscount;
	}
	else {
		document.getElementById('final-cost').innerText = productTotalPrice;
	}
})
