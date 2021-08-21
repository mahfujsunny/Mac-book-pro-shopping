/***************************** 
     Calculate and Functions
*****************************/
function calculate() {
	const bestPrice = totalPrice('best');
	const memoryPrice = totalPrice('memory');
	const storagePrice = totalPrice('storage');
	const deliveryPrice = totalPrice('delivery');
	const productTotalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
	document.getElementById('total-price').innerText = productTotalPrice;
	document.getElementById('final-cost').innerText = productTotalPrice;
    
};

function productCustomize(product, price) {
	const productCost = document.getElementById(product + '-price');
	const productValue = price;
	productCost.innerText = productValue;

	calculate();
}

function totalPrice(product) {
	const costType = document.getElementById(product + '-price');
	const costText = costType.innerText;
	const costConvertToNumber = parseFloat(costText);
	return costConvertToNumber;
};


/***********************
Button Addition 
************************/

/*********************************
     Memory Customize Buttons 
**********************************/
document.getElementById('memory-8gb').addEventListener('click', function () {
	productCustomize('memory', 0);
});

document.getElementById('memory-16gb').addEventListener('click', function () {
	productCustomize('memory', 180)
});

/***********************************  
     Storage Customize section
************************************/
document.getElementById('storage-256gb').addEventListener('click', function () {
	productCustomize('storage', 0)
});

document.getElementById('storage-512gb').addEventListener('click', function () {
	productCustomize('storage', 100)
});

document.getElementById('storage-1tb').addEventListener('click', function () {
	productCustomize('storage', 180)
});

/***********************************  
     Delivery Customize section
************************************/

document.getElementById('delivery-free').addEventListener('click', function () {
	productCustomize('delivery', 0)
});
 
document.getElementById('delivery-charged').addEventListener('click', function () {
	productCustomize('delivery', 20)
});

/***********************************  
     Promo-code discount section
************************************/

document.getElementById('discount').addEventListener('click', function () {
	const bestPrice = totalPrice('best');
	const memoryPrice = totalPrice('memory');
	const storagePrice = totalPrice('storage');
	const deliveryPrice = totalPrice('delivery');
	const productTotalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
	document.getElementById('total-price').innerText = productTotalPrice;
	document.getElementById('final-cost').innerText = productTotalPrice;

    /*****************
         Promo Code
     *****************/
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
