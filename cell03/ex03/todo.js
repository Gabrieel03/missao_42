const list = document.getElementById('ft_list');
const addButton = document.getElementById('add-task');

const COOKIE_NAME = 'ft_tasks';

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + date.toUTCString() + '; path=/';
    console.log('Cookie salvo:', document.cookie);
}

function getCookie(name) {
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.startsWith(name + '=')) {
            const value = decodeURIComponent(cookie.substring(name.length + 1));
            console.log('Cookie encontrado:', value);
            return value;
        }
    }

    console.log('Nenhum cookie encontrado com o nome:', name);
    return null;
}

function saveTasks() {
    const tasks = [];
    const taskElements = list.querySelectorAll('.task');

    taskElements.forEach((element) => {
        tasks.push(element.textContent);
    });

    console.log('Salvando tarefas:', tasks);
    setCookie(COOKIE_NAME, JSON.stringify(tasks), 365);
}

function createTaskElement(text) {
    const task = document.createElement('div');

    task.classList.add('task');
    task.textContent = text;

    task.addEventListener('click', () => {
        const confirmed = confirm('Deseja remover esta tarefa?');

        if (confirmed) {
            console.log('Removendo tarefa:', text);
            task.remove();
            saveTasks();
        }
    });

    return task;
}

function addTask(text) {
    console.log('Adicionando tarefa:', text);
    const task = createTaskElement(text);
    list.prepend(task);
    saveTasks();
}

addButton.addEventListener('click', () => {
    const text = prompt('Digite a nova tarefa:');

    if (text !== null && text.trim() !== '') {
        addTask(text.trim());
    }
});

function loadTasks() {
    const saved = getCookie(COOKIE_NAME);

    if (!saved) {
        console.log('Lista vazia, nenhum cookie salvo ainda.');
        return;
    }

    try {
        const tasks = JSON.parse(saved);
        console.log('Tarefas carregadas do cookie:', tasks);

        tasks.forEach((text) => {
            const task = createTaskElement(text);
            list.appendChild(task);
        });
    } catch (error) {
        console.log('Não foi possível carregar as tarefas salvas:', error);
    }
}

console.log('Cookies atuais da página:', document.cookie);
loadTasks();