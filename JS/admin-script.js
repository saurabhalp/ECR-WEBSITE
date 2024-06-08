document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('aside nav ul li a');
    const mainContent = document.getElementById('main-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            fetch(page)
                .then(response => response.text())
                .then(data => {
                    mainContent.innerHTML = data;
                    if (page === 'manage-banners.html') {
                        setupBannerForm();
                        loadExistingBanners();
                    }
                })
                .catch(error => console.error('Page in Underconstruction', error));
        });
    });
});

function setupBannerForm() {
    const bannerForm = document.getElementById('banner-form');

    bannerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(bannerForm);
        const bannerData = {
            title: formData.get('banner-title'),
            imageUrl: formData.get('banner-image')
        };

        fetch('http://localhost:3000/api/banners', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bannerData)
        })
        .then(response => {
            if (response.ok) {
                console.log('Banner saved successfully');
                loadExistingBanners();
            } else {
                console.error('Error saving banner');
            }
        })
        .catch(error => console.error('Error saving banner:', error));
    });
}

function loadExistingBanners() {
    fetch('http://localhost:3000/api/banners')
        .then(response => response.json())
        .then(data => {
            const bannerTableBody = document.querySelector('#banner-table tbody');
            bannerTableBody.innerHTML = '';

            data.forEach(banner => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${banner.title}</td>
                    <td><img src="${banner.imageUrl}" alt="${banner.title}" /></td>
                    <td><button class="delete-button" data-title="${banner.title}">Delete</button></td>
                `;
                bannerTableBody.appendChild(row);
            });

            document.querySelectorAll('.delete-button').forEach(button => {
                button.addEventListener('click', function () {
                    const title = button.getAttribute('data-title');
                    fetch(`http://localhost:3000/api/banners/${title}`, {
                        method: 'DELETE'
                    })
                    .then(response => {
                        if (response.ok) {
                            console.log('Banner deleted successfully');
                            loadExistingBanners();
                        } else {
                            console.error('Error deleting banner');
                        }
                    })
                    .catch(error => console.error('Error deleting banner:', error));
                });
            });
        })
        .catch(error => console.error('Error fetching banners:', error));
}
