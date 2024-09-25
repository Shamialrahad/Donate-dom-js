
// All input value get by ID 
function inputValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue
}

// hide  and show section when click button 
function showContentById (id){
    document.getElementById('donation-content').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}
