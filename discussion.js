document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    const postContent = document.getElementById('post-content');
    const discussionThreads = document.getElementById('discussion-threads');

    // Function to initialize and load all event listeners
    function init() {
        loadPosts();
        postForm.addEventListener('submit', handleSubmit);
    }

    // Handle the form submission
    function handleSubmit(event) {
        event.preventDefault();
        const content = postContent.value.trim();
        if (content === '') {
            alert('Please write something before posting!');
            return;
        }
        savePost(content);
        displayPost(content);
        postContent.value = ''; // Clear textarea after posting
    }

    // Display the post on the discussion board
    function displayPost(content) {
        const newPost = document.createElement('div');
        newPost.textContent = content;
        newPost.className = 'discussion-post';
        discussionThreads.appendChild(newPost);
    }

    // Save the post to localStorage
    function savePost(content) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(content);
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    // Load posts from localStorage
    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.forEach(displayPost);
    }

    init();
});
