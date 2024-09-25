// Toggle Button 
const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')



//Donation Button Click event

donationBtn.addEventListener('click', function(){
    showContentById('donation-content')
    donationBtn.classList.add("bg-lime-400" );
    historyBtn.classList.remove("bg-lime-400");
})

//History Button Click event

historyBtn.addEventListener('click', function(){
    showContentById('history-section')
    historyBtn.classList.add("bg-lime-400");
    donationBtn.classList.remove("bg-lime-400");
    donationBtn.classList.add("bg-gray-100");
})






//Modal section

const myModal = document.getElementById('my_modal_5')
const closeModal = document.getElementById('close-modal')


//Donation For Noakhali

document.getElementById('donate-btn-Noakhali').addEventListener('click', function(){
    const donateInputNoakhali = inputValueById('donate-Input-Noakhali');
    const donateAmountElement = document.getElementById('donate-amount1')
    const donateAmount1 = parseFloat(donateAmountElement.innerText)
    
    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);
    // Donation Title
    const donateTitle1 = document.getElementById('donate-title').innerText;
    
    // Validation for insufficient Balance
    if(donateInputNoakhali > mainBalance){
        alert('You Do not have sufficient balance')
        return;
    }

    // Validatation if input field is NaN and empty
    if(isNaN(donateInputNoakhali) || donateInputNoakhali <=0 ) { 
        alert('Please Enter a valid input') 
    }
    else {
        donateAmountElement.innerText = donateInputNoakhali.toFixed(0)
        const balance = mainBalance - donateInputNoakhali
        mainBalanceElement.innerText = balance.toFixed(0)
        const totalDonate = donateAmount1 + donateInputNoakhali
        donateAmountElement.innerText = totalDonate
        myModal.showModal()

         // Transaction History 
        const history = document.createElement('div')
        history.className = "border border-gray-300 p-2 lg:p-10 mx-5 lg:mx-40 my-10 rounded-lg shadow-lg bg-white";
        history.innerHTML = `
        <div class="">
            <h1 class="text-xl font-bold text-black">${donateInputNoakhali} Taka is Donated for   ${donateTitle1}</h1>
            <p class="text-lg mt-5">Date :${ new Date()} </p>
        </div>
        `
        document.getElementById('history-section').appendChild(history)

        
    };
    
    
    
    
})



//Donate for Feni

document.getElementById('donate-btn-feni').addEventListener('click', function(){
    const donateInputFeni = inputValueById('donate-Input-feni');
    const donateAmountElement = document.getElementById('donate-amount-feni')
    const donateAmountFeni = parseFloat(donateAmountElement.innerText)

    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);

    const donateTitle2 = document.getElementById('donate-title2').innerText;

    if(donateInputFeni > mainBalance){
        alert('You Do not have sufficient balance')
        return;
    }

    if(isNaN(donateInputFeni) || donateInputFeni <=0 ) { 
        return alert('Please Enter a valid input') 
    } else {
        donateAmountElement.innerText = donateInputFeni.toFixed(0)
        const balance = mainBalance - donateInputFeni
        mainBalanceElement.innerText = balance.toFixed(0)
        const totalDonate = donateAmountFeni + donateInputFeni
        donateAmountElement.innerText = totalDonate
        myModal.showModal()

        // Transection history 
        const history = document.createElement('div')
        history.className = "border border-gray-300 p-2 lg:p-10 mx-5 lg:mx-40 my-10 rounded-lg shadow-lg bg-white";
        history.innerHTML = `
        <div class="">
            <h1 class="text-xl font-bold text-black">${donateInputFeni} Taka is Donated for   ${donateTitle2}</h1>
            <p class="text-lg mt-5">Date :${ new Date()} </p>
        </div>
        `
        document.getElementById('history-section').appendChild(history)
    }
    


    

})



//Donate for quata movement protester
 

document.getElementById('donate-btn-qouta').addEventListener('click', function(){
    const donateInputQuota = inputValueById('donate-Input-quota') 
    const donateAmountElement = document.getElementById('donate-amount-quota')
    const donateAmountQuota = parseFloat(donateAmountElement.innerText)

    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);
    
    const donateTitle3 = document.getElementById('donate-title3').innerText;

    if(donateInputQuota > mainBalance){
        alert('You Do not have sufficient balance')
        return;
    }

    if( isNaN(donateInputQuota) || donateInputQuota <= 0){
        return alert('Please Enter a Valid input')
    } else {
        donateAmountElement.innerText = donateInputQuota.toFixed(0)
        const balance = mainBalance - donateInputQuota
        
        mainBalanceElement.innerText = balance.toFixed(0)

        const totalDonate = donateAmountQuota + donateInputQuota
        donateAmountElement.innerText = totalDonate 
        myModal.showModal()

        //Transaction  History 

        const history = document.createElement('div')
        history.className = "border border-gray-300 p-2 lg:p-10 mx-5 lg:mx-40 my-10 rounded-lg shadow-lg bg-white";
        history.innerHTML = `
        <div class="">
            <h1 class="text-xl font-bold text-black">${donateInputQuota} Taka is Donated for   ${donateTitle3}</h1>
            <p class="text-lg mt-5">Date :${ new Date()} </p>
        </div>
        `
        document.getElementById('history-section').appendChild(history)
    }

})







