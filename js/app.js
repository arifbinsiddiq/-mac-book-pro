// get product value function
function getProductValue(product, price) {
    const productInput = document.getElementById(product + '-price');
    const productNumberText = productInput.innerText;

    productInput.innerText = price;


    // calculateTotal
    getCalcutaion()
}

// update memories - 1 
document.getElementById('memory-item-1').addEventListener('click', function () {

    getProductValue('memory', '0');
});

// update memories - 2 

document.getElementById('memory-item-2').addEventListener('click', function () {

    getProductValue('memory', '180')
});



// update storages - 1
document.getElementById('ssd-item1-price').addEventListener('click', function () {

    getProductValue('storage', '0')
});

// update storages - 2

document.getElementById('ssd-item2-price').addEventListener('click', function () {

    getProductValue('storage', '100')
});

// update storages - 3
document.getElementById('ssd-item3-price').addEventListener('click', function () {

    getProductValue('storage', '180')

});



// update delivery - 1
document.getElementById('free-delivery').addEventListener('click', function () {

    getProductValue('delivery', '0');
});

// update delivery - 2

document.getElementById('charge-delivery').addEventListener('click', function () {

    getProductValue('delivery', '20');
});

// total calculation
function getCalcutaion() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-price').innerText;
    const storageCost = document.getElementById('storage-price').innerText;
    const deliveryCharge = document.getElementById('delivery-price').innerText;

    const totalCount = document.getElementById('total-price');

    const totalSum = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCharge);

    const grandTotal = document.getElementById('grand-total');

    totalCount.innerText = totalSum;
    grandTotal.innerText = totalSum;
}

// promo code event handle
document.getElementById('promo-code-apply').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-input');
    const promoCodeText = document.getElementById('promo-input').value;
    if (promoCodeText == 'stevekaku') {
        const grandTotal = document.getElementById('grand-total');
        const grandTotalText = grandTotal.innerText;
        const grandTotalCount = parseInt(grandTotalText);

        const grandTotalParsent = grandTotalCount * (20 / 100);
        const discount = grandTotalCount - grandTotalParsent;
        grandTotal.innerText = discount;

        promoCode.value = '';
    }

});



