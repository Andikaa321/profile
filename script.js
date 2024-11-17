document.getElementById('editButton').addEventListener('click', function() {
    let followers = prompt("Masukkan jumlah pengikut:");
    let following = prompt("Masukkan jumlah yang diikuti:");

    if (followers !== null && following !== null) {
        document.getElementById('followers').textContent = followers;
        document.getElementById('following').textContent = following;
    }
});
