function filterProjects(category) {
  let projects = document.querySelectorAll('.projects-item');
  projects.forEach(project => {
    if (category === 'all' || project.getAttribute('data-category') === category) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Show all projects by default
filterProjects('all');
