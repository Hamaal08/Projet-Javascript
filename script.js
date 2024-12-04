/* let AddTask = document.getElementById('AddTask');
let DivErrorMessage = document.getElementById('DivErrorMessage');
let InputToDoList = document.getElementById('InputToDoList');
let DivShowtask = document.getElementById('DivShowtask');
let progressBar = document.getElementById('progress'); // Référence à la barre de progression
let progressPercentage = document.getElementById('progressPercentage'); // Référence au span pour afficher le pourcentage

// Fonction pour récupérer les tâches du localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        displayTask(task.text, task.completed);
    });

    // Vérifier s'il y a des tâches et afficher ou non la div
    toggleTaskDisplay(tasks);

    // Mettre à jour la barre de progression et le pourcentage
    updateProgressBar(tasks);
}

// Cache le block si il est vide
function toggleTaskDisplay(tasks) {
    if (tasks.length === 0) {
        DivShowtask.style.display = "none";
    } else {
        DivShowtask.style.display = "block";
    }
}

// Fonction pour afficher une tâche
function displayTask(text, completed) {
    // Créer une nouvelle tâche div
    let DivTask = document.createElement('div');
    let EndTask = document.createElement('div');
    let SpanTask = document.createElement('span');
    let DeleteBtn = document.createElement('button');

    // Créer un ID unique pour chaque tâche
    DivTask.id = 'DivTask0';
    EndTask.id = 'EndTask0';
    SpanTask.id = 'SpanTask0';
    DeleteBtn.id = 'DeleteBtn0';

    // Configuration du texte et du bouton
    SpanTask.textContent = text;
    DeleteBtn.textContent = 'Supprimer la tâche';

    // Si la tâche est marquée comme complétée, applique le style
    if (completed) {
        SpanTask.style.textDecoration = 'line-through';
        SpanTask.style.fontWeight = 'bold';
    }

    // Ajouter les éléments dans la structure
    DivTask.appendChild(EndTask);
    EndTask.appendChild(SpanTask);
    DivTask.appendChild(DeleteBtn);

    // Ajouter la nouvelle tâche à la liste
    DivShowtask.appendChild(DivTask);
}

// Fonction pour mettre à jour la barre de progression et le pourcentage
function updateProgressBar(tasks) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    // Calculer le pourcentage de tâches terminées
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    // Mettre à jour la barre de progression
    progressBar.value = progress;

    // Mettre à jour le pourcentage affiché
    progressPercentage.textContent = `${Math.round(progress)}%`; // Afficher le pourcentage arrondi
}

// Charger les tâches au démarrage de la page
loadTasks();

// Ajouter une nouvelle tâche
AddTask.addEventListener('click', function() {
    const input = InputToDoList.value;
    const InputValeurSansEspace = input.replace(/\s+/g, ' ');

    // Si l'input est vide, afficher le message d'erreur
    if (InputValeurSansEspace == "") {
        DivErrorMessage.style.display = 'block';
    } else {
        // Créer une nouvelle tâche et l'afficher
        displayTask(InputValeurSansEspace, false);

        // Sauvegarder la nouvelle tâche dans le localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: InputValeurSansEspace, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Vérifier si la div doit être affichée ou non
        toggleTaskDisplay(tasks);

        // Mettre à jour la barre de progression et le pourcentage
        updateProgressBar(tasks);

        // Réinitialiser le champ de saisie et cacher le message d'erreur
        InputToDoList.value = "";
        DivErrorMessage.style.display = 'none';
    }
});

// Marquer une tâche comme terminée
DivShowtask.addEventListener('click', function(event) {
    if (event.target && event.target.tagName === 'DIV' && event.target.id.includes('EndTask0')) {
        const span = event.target.querySelector('span');
        if (span) {
            span.style.textDecoration = 'line-through';
            span.style.fontWeight = 'bold';

            // Mettre à jour l'état de la tâche dans le localStorage
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const taskIndex = tasks.findIndex(task => task.text === span.textContent);
            if (taskIndex !== -1) {
                tasks[taskIndex].completed = true;
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }

            // Mettre à jour la barre de progression et le pourcentage
            updateProgressBar(tasks);
        }
    }
});

// Supprimer une tâche
DivShowtask.addEventListener('click', function(event) {
    if (event.target && event.target.tagName === 'BUTTON' && event.target.id.includes('DeleteBtn')) {
        const taskDiv = event.target.parentNode;
        const span = taskDiv.querySelector('span');

        // Supprimer la tâche du DOM
        taskDiv.remove();

        // Mettre à jour le localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.text !== span.textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Vérifier si la div doit être affichée ou non après la suppression
        toggleTaskDisplay(tasks);

        // Mettre à jour la barre de progression et le pourcentage
        updateProgressBar(tasks);
    }
});
 */


let AddTask = document.getElementById('AddTask');
let DivErrorMessage = document.getElementById('DivErrorMessage');
let InputToDoList = document.getElementById('InputToDoList');
let DivShowtask = document.getElementById('DivShowtask');
let progressBar = document.getElementById('progress'); // Référence à la barre de progression
let progressPercentage = document.getElementById('progressPercentage'); // Référence au span pour afficher le pourcentage

// Fonction pour récupérer les tâches du localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        displayTask(task.text, task.completed);
    });

    // Vérifier s'il y a des tâches et afficher ou non la div
    toggleTaskDisplay(tasks);

    // Mettre à jour la barre de progression et le pourcentage
    updateProgressBar(tasks);
}

// Cache le block si il est vide
function toggleTaskDisplay(tasks) {
    if (tasks.length === 0) {
        DivShowtask.style.display = "none";
    } else {
        DivShowtask.style.display = "block";
    }
}

// Fonction pour afficher une tâche
function displayTask(text, completed) {
    // Créer une nouvelle tâche div
    let DivTask = document.createElement('div');
    let EndTask = document.createElement('div');
    let SpanTask = document.createElement('span');
    let DeleteBtn = document.createElement('button');

    // Créer un ID unique pour chaque tâche
    DivTask.id = 'DivTask0';
    EndTask.id = 'EndTask0';
    SpanTask.id = 'SpanTask0';
    DeleteBtn.id = 'DeleteBtn0';

    // Configuration du texte et du bouton
    SpanTask.textContent = text;
    DeleteBtn.textContent = 'Supprimer la tâche';

    // Si la tâche est marquée comme complétée, applique le style
    if (completed) {
        SpanTask.style.textDecoration = 'line-through';
        SpanTask.style.fontWeight = 'bold';
    }

    // Ajouter les éléments dans la structure
    DivTask.appendChild(EndTask);
    EndTask.appendChild(SpanTask);
    DivTask.appendChild(DeleteBtn);

    // Ajouter la nouvelle tâche à la liste
    DivShowtask.appendChild(DivTask);
}

// Fonction pour mettre à jour la barre de progression et le pourcentage
function updateProgressBar(tasks) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    // Calculer le pourcentage de tâches terminées
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    // Mettre à jour la barre de progression
    progressBar.value = progress;

    // Mettre à jour le pourcentage affiché
    progressPercentage.textContent = `${Math.round(progress)}%`; // Afficher le pourcentage arrondi

    // Vérification de l'état des tâches pour afficher un message d'encouragement
    if (progress === 100) {
        alert('Félicitations ! 🎉 Toutes les tâches sont terminées. Super travail !');
    } else if (progress > 0 && progress < 100) {
        alert('Il reste des tâches à accomplir. Continue comme ça, tu es presque au bout ! 💪');
    }
}

// Charger les tâches au démarrage de la page
loadTasks();

// Ajouter une nouvelle tâche
AddTask.addEventListener('click', function() {
    const input = InputToDoList.value;
    const InputValeurSansEspace = input.replace(/\s+/g, ' ');

    // Si l'input est vide, afficher le message d'erreur
    if (InputValeurSansEspace == "") {
        DivErrorMessage.style.display = 'block';
    } else {
        // Créer une nouvelle tâche et l'afficher
        displayTask(InputValeurSansEspace, false);

        // Sauvegarder la nouvelle tâche dans le localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: InputValeurSansEspace, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Vérifier si la div doit être affichée ou non
        toggleTaskDisplay(tasks);

        // Mettre à jour la barre de progression et le pourcentage
        updateProgressBar(tasks);

        // Réinitialiser le champ de saisie et cacher le message d'erreur
        InputToDoList.value = "";
        DivErrorMessage.style.display = 'none';
    }
});

// Marquer une tâche comme terminée
DivShowtask.addEventListener('click', function(event) {
    if (event.target && event.target.tagName === 'DIV' && event.target.id.includes('EndTask0')) {
        const span = event.target.querySelector('span');
        if (span) {
            span.style.textDecoration = 'line-through';
            span.style.fontWeight = 'bold';

            // Mettre à jour l'état de la tâche dans le localStorage
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const taskIndex = tasks.findIndex(task => task.text === span.textContent);
            if (taskIndex !== -1) {
                tasks[taskIndex].completed = true;
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }

            // Mettre à jour la barre de progression et le pourcentage
            updateProgressBar(tasks);
        }
    }
});

// Supprimer une tâche
DivShowtask.addEventListener('click', function(event) {
    if (event.target && event.target.tagName === 'BUTTON' && event.target.id.includes('DeleteBtn')) {
        const taskDiv = event.target.parentNode;
        const span = taskDiv.querySelector('span');

        // Supprimer la tâche du DOM
        taskDiv.remove();

        // Mettre à jour le localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.text !== span.textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Vérifier si la div doit être affichée ou non après la suppression
        toggleTaskDisplay(tasks);

        // Mettre à jour la barre de progression et le pourcentage
        updateProgressBar(tasks);
    }
});
