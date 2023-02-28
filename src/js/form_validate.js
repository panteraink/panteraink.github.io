"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll("form")

    forms.forEach(element => {
        formValidatorActivate(element)
    });


    function formValidatorActivate(form) {
        form.addEventListener('submit', formSend)

        let formData = new FormData(form)

        let imgFromWeb = document.createElement("div")
            imgFromWeb.className = "popup"
            imgFromWeb.innerHTML = '<img src="123.png">'
        
        async function formSend(e) {
            e.preventDefault();
            if (formValidate(form)) {
                document.body.appendChild(imgFromWeb)
            } else if (!formValidate(form)) {
                alert('Заполните подсвеченные поля')
            }
        }

        function formValidate(form) {
            let error = false
            form.querySelectorAll('.req').forEach((input) => {
                removeErrorFromForm(input)
                if (input.classList.contains('_email')) {
                    if (emailValidation(input.value)) {
                        addErrorToForm(input)
                        error = true
                    }
                }
                else if (input.classList.contains('_name')) {
                    if (input.value === "") {
                        addErrorToForm(input)
                        error = true
                    }
                }
                else if (input.classList.contains('_text')) {
                    if (input.value === "") {
                        addErrorToForm(input)
                        error = true
                    }
                }
            })
            return !error
        }

        function emailValidation(string) {
            return !/^[\w]+@([\w]+\.)+[\w]{2,}$/gi.test(string)
        }
        function addErrorToForm(element) {
            //element.parentElement.classList.add('error')
            element.classList.add('error')
        }
        function removeErrorFromForm(element) {
            //element.parentElement.classList.remove('error')
            element.classList.remove('error')
        }
    }
})