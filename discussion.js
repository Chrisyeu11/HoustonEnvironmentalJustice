discussion.js
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var content = document.getElementById('post-content').value;
    if (content.trim() === '') {
        alert('Please write something before posting!');
        return;
    }

    var newPost = document.createElement('div');
    newPost.textContent = content;
    newPost.className = 'discussion-post';

    document.getElementById('discussion-threads').appendChild(newPost);
    document.getElementById('post-content').value = ''; // Clear input after posting
});
