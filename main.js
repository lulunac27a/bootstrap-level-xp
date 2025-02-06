document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const addXPButton = document.getElementById('add-xp');
    let level = 1;
    let xp = 0;
    let xpRequired = 1;
    addXPButton.addEventListener('click', function () {
        xp = xp++;
        progressBar.style.width = `${xp / xpRequired * 100}%`;
        progressBar.ariaValueNow = `${xp / xpRequired * 100}`;
        if (xp >= xpRequired) {
            level++;
            xp -= xpRequired;
            xpRequired += level;
        }
    })
})