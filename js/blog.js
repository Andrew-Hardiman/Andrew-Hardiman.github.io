document.addEventListener('DOMContentLoaded', function() {
    fetch('/data/blog-data.json')
        .then(response => response.json())
        .then(data => {
            const blogPostsDiv = document.getElementById('blog-posts');
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                    <h3><a href="${post.url}">${post.title}</a>${post.vuln}</h3>
                    <p><i>Difficulty: ${post.difficulty}</i></p>
                    <p>${post.summary}</p>
                `;
                blogPostsDiv.appendChild(postElement);
            });
        });
});
