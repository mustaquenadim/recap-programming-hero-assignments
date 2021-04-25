// increase & decrease button function
function handleIncDec(sitType, isIncrease)
{
    let sitCount = Number(document.getElementById(sitType + '-sit').value);
    if (isIncrease == false)
    {
        if (sitCount > 0)
        {
            sitCount--;
        }
    }
    else
    {
        sitCount++;
    }
    document.getElementById(sitType + '-sit').value = sitCount;
    totalAmount();
}

function sitCount(sitType)
{
    if (sitType == 'first-class')
    {
        let sitCount = Number(document.getElementById(sitType + '-sit').value);
        return sitCount;
    }
    else
    {
        let sitCount = Number(document.getElementById(sitType + '-sit').value);
        return sitCount;
    }
}

// total amount function
function totalAmount()
{
    let subTotal = Number((sitCount('first-class') * 150) + (sitCount('economy-class') * 100));
    Number(document.getElementById('sub-total').innerText = '$' + subTotal);
    let vat = Number(subTotal * 0.1);
    Number(document.getElementById('vat').innerText = '$' + vat);
    let grandTotal = Number(subTotal + vat);
    Number(document.getElementById('grand-total').innerText = '$' + grandTotal);
    return grandTotal;
}

// confirmation
function bookNow()
{
    if (totalAmount() > 0)
    {
        const bookNowSec = document.querySelector('.booking-form');
        bookNowSec.style.display = 'none';
        const confirmation = document.getElementById('confirmation');
        confirmation.style.display = 'block';
        message();
    }
    else
    {
        const caution = document.querySelector('.caution');
        caution.style.display = 'block';
    }
}

function message()
{
    let firstBookedAmount = sitCount('first-class') * 150;
    console.log("Hello");
    Number(document.getElementById('first-booked-amount').innerText = '$' + firstBookedAmount);
    let economyBookedAmount = sitCount('economy-class') * 100;
    Number(document.getElementById('economy-booked-amount').innerText = '$' + economyBookedAmount);
    let amount = Number(document.getElementById('total').innerText = '$' + totalAmount());
}