document.addEventListener("DOMContentLoaded", () => {
    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const phoneInput = document.getElementById("phonenumber");
    const textareaInput = document.getElementById("textarea");
    const submit = document.getElementById("submit");

    submit.addEventListener("click", () => {
        const firstname = firstnameInput.value;
        const lastname = lastnameInput.value;
        const phonenumber = phoneInput.value;
        const message = textareaInput.value;
        if (
            firstname !== "" &&
            lastname !== "" &&
            phonenumber !== "" &&
            textarea !== ""
        ) {
            alert("Hello "+firstname+" "+lastname+" we received your message");
        } else {
            alert("Please fill in all fields.");
        }
    }
)
});