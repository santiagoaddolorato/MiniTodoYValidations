const emailInput =  document.querySelector("#email");
const PassInput = document.querySelector("#pass");
const validForm = document.querySelector("#valid-form");

const checkEmail = ()=>{
    let valid = false;
    const emailValue = emailInput.value.trim();

    if(isEmpty(emailValue)){
        return alert("El mail esta vacio");
    } else if (!isEmailValid(emailValue)){
        return alert("El email no es válido");
         
    } else {
        valid = true;
    }
    return  valid;
};

const checkPass = ()=>{
    let valid = false;
    const passValue = PassInput.value.trim();
    
    if(isEmpty(passValue)){
        return alert("la contraseña esta vacia")
    } else if (!isPassSecure(passValue)){
        return alert("la contraseña debe tener una mayúsucla, minuscula y un número");
    } else{
        valid = true;
    }
    return valid;
}

const isEmpty = (value) => !value.length;

const isEmailValid = (value)=>{
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return re.test(value);
};

const isPassSecure  = (value)=>{
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{1,}$/;
    return re.test(value);
};

validForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let isEmailValid = checkEmail();
    let isPassValid = checkPass();

    let isFormValid = isEmailValid && isPassValid;

    if(isFormValid){
        validForm.reset();
        return alert("Salio todo bien, mandamos la data")
    }
    
});

const form = document.getElementById("form");
const input = document.getElementById("input");
const caja = document.getElementById("caja");
const btnBorrar = document.getElementById("btn-borrar")

let items = JSON.parse(localStorage.getItem("items")) || ["holi","Pancho"];

const saveLocal = (items)=>{
    localStorage.setItem("items", JSON.stringify(items));
}

const renderItem= (item)=>`<p>${item}</p>`;

const renderItems = (items)=>{
    caja.innerHTML = items.map(renderItem).join("");
};

const addItem = (e)=>{
    e.preventDefault();
        let item = input.value.trim();
        input.value = "";
        items = [...items, item];
        saveLocal(items);
        renderItems(items);
}

const borrarTodo = ()=>{
    items = [];
    saveLocal(items);
    renderItems(items);
}

const init = ()=>{
    form.addEventListener("submit", addItem);
    btnBorrar.addEventListener("click",borrarTodo);
    renderItems(items);
    
};

init();
 