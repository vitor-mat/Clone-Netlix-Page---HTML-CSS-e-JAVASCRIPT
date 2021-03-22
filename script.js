const validation = {
    checkValidation: 0
}

const elements = {
    fakeCheck: document.querySelector("#fake-check"),
    labelCheck: document.querySelector("#label-check")
}

elements.fakeCheck.addEventListener("click", () => {
    if(validation.checkValidation == 0){
        elements.fakeCheck.innerHTML = "✔"
        validation.checkValidation = 1
    }else{
        elements.fakeCheck.innerHTML = ""
        validation.checkValidation = 0
    }
})

elements.labelCheck.addEventListener("click", () => {
    if(validation.checkValidation == 0){
        elements.fakeCheck.innerHTML = "✔"
        validation.checkValidation = 1
    }else{
        elements.fakeCheck.innerHTML = ""
        validation.checkValidation = 0
    }
})