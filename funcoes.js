function amplia(amp) {
    document.getElementById("onibus").src = amp;
}

function fechar() {

    var inputCheckbox = document.getElementById('check');

    if (inputCheckbox.checked === true) {
        inputCheckbox.checked = false;
    }

}