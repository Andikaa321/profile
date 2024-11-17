let followButton = document.getElementById('followButton');
let followersCount = document.getElementById('followers');
let followingCount = document.getElementById('following');

followButton.addEventListener('click', function() {
    let currentFollowers = parseInt(followersCount.textContent);
    let currentFollowing = parseInt(followingCount.textContent);

    if (followButton.classList.contains('following')) {
        // Unfollow
        followersCount.textContent = currentFollowers - 1;
        followButton.textContent = 'Follow';
        followButton.classList.remove('following');
    } else {
        // Follow
        followersCount.textContent = currentFollowers + 1;
        followButton.textContent = 'Unfollow';
        followButton.classList.add('following');
    }
});
﻿
