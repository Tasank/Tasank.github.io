const projects = document.querySelectorAll('.project');
let currentProjectIndex = 0;

function updateProject(direction) {
    const currentProject = projects[currentProjectIndex];

    // Получаем данные проекта
    const title = currentProject.getAttribute('data-title');
    const description = currentProject.getAttribute('data-description');
    const imageSrc = currentProject.getAttribute('data-image');
    const url = currentProject.getAttribute('data-url');

    // Обновляем элементы
    const projectImage = document.getElementById('project-image');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectContent = document.getElementById('project-content');

    // Добавляем анимацию
    projectContent.classList.add('fade-out');

    setTimeout(() => {
        projectImage.src = imageSrc;
        projectTitle.innerText = title;
        projectDescription.innerText = description;

        // Убираем класс анимации
        projectContent.classList.remove('fade-out');

        // Устанавливаем направление анимации в зависимости от направления переключения
        if (direction === 1) {
            projectContent.classList.add('slide-in-right');
        } else {
            projectContent.classList.add('slide-in-left');
        }

        // Удаляем класс анимации через 0.3 секунд
        setTimeout(() => {
            projectContent.classList.remove('slide-in-right');
            projectContent.classList.remove('slide-in-left');
        }, 300);
    }, 300); // Время задержки соответствующее анимации
}

function changeProject(direction) {
    currentProjectIndex = (currentProjectIndex + direction + projects.length) % projects.length;
    updateProject(direction);
}

document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    const url = project.getAttribute('data-url');
    window.open(url, '_blank');
  });
});

window.onload = () => updateProject(0);
