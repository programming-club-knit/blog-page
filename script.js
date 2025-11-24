

const blogContainer = document.getElementById('blog-container');
const searchBar = document.getElementById('search-bar');
const pagination = document.getElementById('pagination');

const posts = [
    { title: 'Understanding JavaScript', image: 'js.jpg', content: 'JS is versatile...' },
    { title: 'CSS Grid vs Flexbox', image: 'css.jpg', content: 'Which one to use?' },
    { title: 'React Hooks Guide', image: 'react.jpg', content: 'Learn hooks...' },
    { title: 'Node.js Basics', image: 'node.jpg', content: 'Server-side JS...' },
    { title: 'Web Accessibility', image: 'a11y.jpg', content: 'Make web for everyone...' },
    { title: 'Git Version Control', image: 'git.jpg', content: 'Manage your code...' }
];

let currentPage = 1;
const postsPerPage = 3;
let filteredPosts = posts; // default = all posts

function renderPosts() {
    blogContainer.innerHTML = "";

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;

    const pagePosts = filteredPosts.slice(start, end);

    pagePosts.forEach(post => {
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

    renderPagination();
}

function renderPagination() {
    pagination.innerHTML = "";

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // Prev button
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Prev";
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => { currentPage--; renderPosts(); };
    pagination.appendChild(prevBtn);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;

        if (i === currentPage) btn.classList.add("active");

        btn.onclick = () => {
            currentPage = i;
            renderPosts();
        };
        pagination.appendChild(btn);
    }

    // Next button
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => { currentPage++; renderPosts(); };
    pagination.appendChild(nextBtn);
}

// Search feature with pagination support
searchBar.addEventListener("keyup", (e) => {
    const term = e.target.value.toLowerCase();

    filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(term)
    );

    currentPage = 1; // reset page on new search
    renderPosts();
});

// Initial load
renderPosts();
