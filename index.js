const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');



form.addEventListener('submit',(e) => {
    e.preventDefault();

    const todoText = input.value;

    if(todoText) {
        const todoEl = document.createElement
        ("li");
        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        });

        todoEl.addEventListener('contextmenu', (e) =>{
            e.preventDefault();

            todoEl.remove();
        })

        todosUl.appendChild(todoEl);


        input.value = "";
    }
})