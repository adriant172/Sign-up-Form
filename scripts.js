function confirmPassword() {
    const pass = document.querySelector('#password')
    const passConfirm = document.querySelector('#confirm-pass')
    if (pass.value === passConfirm.value){
        pass.setCustomValidity('')
    } else {
        pass.setCustomValidity('*Passwords do not match')
    }
}

// document.querySelector('button').addEventListener('click', confirmPassword())
