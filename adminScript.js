document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('aside nav ul li a');
    const mainContent = document.getElementById('main-content');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            loadContent(href);
        });
    });

    function loadContent(href) {
        fetch(href)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                mainContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
            });
    }
});
