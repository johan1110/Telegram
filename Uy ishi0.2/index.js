const formSelect = document.querySelector(".form_select")
const forminput = document.querySelector(".form_input")


formSelect.addEventListener("change", e => {
    let inputValue = e.target.value

    if(inputValue == "u"){
        forminput.value = "+998"
    } else if(inputValue == "a"){
        forminput.value = "+355"
    } else if(inputValue == "k"){
        forminput.value = "+254"
    } else if(inputValue == "aa"){
        forminput.value = "+1684"
    } else if(inputValue == "uu"){
        forminput.value = "+380"
    } else if(inputValue == "q"){
        forminput.value = "+974"
    } else if(inputValue == "r"){
        forminput.value = "+7"
    } else if(inputValue == "s"){
        forminput.value = "+966"
    } else if(inputValue == "m"){
        forminput.value = "+985"
    } else if(inputValue == "b"){
        forminput.value = "+880"
    }
} )