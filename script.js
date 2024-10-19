 const inputs = document.getElementById('data');
 const submit = document.getElementById('submit');
 const text = document.getElementById('show');
 function timestiable(a) {
     let result = '';
     for (let i = 0; i <= 10; i++) {
         result += `${a} X ${i} = ${a * i}<br>`;
     }
     text.innerHTML = result;
 }

 function onRun() {
     const value = parseInt(inputs.value);
     timestiable(value);
 }
 submit.addEventListener('click', onRun);
 function up() {
    const input = document.getElementById('data');
    let value = parseInt(input.value);
    input.value = value + 1;
}

function down() {
    const input = document.getElementById('data');
    let value = parseInt(input.value);
    input.value = value - 1;
}

function onSubmit() {
    const value = document.getElementById('data').value;
   
    timestiable(value);
}

