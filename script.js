const blogContainer = document.getElementById('blog-container');
const searchBar = document.getElementById('search-bar');

const posts = [
    { title: 'Understanding JavsdfsdafasdfasdfasdfasdfasdfasdfasdfasdfasdfaScript', image: 'js.jpg', content: 'JS is versatile...' },
    { title: 'CSS Grid vs Flexbox', image: 'css.jpg', content: 'Which one to use?' },
    { title: 'React Hooks Guide', image: 'react.jpg', content: 'Learn hooks...' },
    { title: 'Node.js Basics', image: 'node.jpg', content: 'Server-side JS...' },
    { title: 'Web Accessibility', image: 'a11y.jpg', content: 'Make web for everyone...' },
    { title: 'Git Version Control', image: 'git.jpg', content: 'Manage your code...' }
];

function renderPosts(postsToRender) {
    blogContainer.innerHTML = '';
    postsToRender.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <img src="../images/${post.image}" alt="${post.title}">
            <div class="post-content">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </div>
        `;
        blogContainer.appendChild(card);
    });
}


renderPosts(posts);


searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value;
    
    const filtered = posts.filter(post => post.title === term);
    renderPosts(filtered);
});


