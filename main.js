document.addEventListener("DOMContentLoaded", function init() {
    //initialize app when webpage is loaded
    const progressBar = document.getElementById("progress-bar"); //progress bar
    const addXPButton = document.getElementById("add-xp"); //add XP button
    let level = 1; //level
    let xp = 0; //XP
    let xpRequired = 1; //XP required to level up
    addXPButton.addEventListener("click", function addXP() {
        //event to add XP
        xp++; //add 1 XP
        progressBar.style.width = `${(xp / xpRequired) * 100}%`; //update progress bar width
        progressBar.ariaValueNow = `${(xp / xpRequired) * 100}`; //update progress bar aria value
        if (xp >= xpRequired) {
            //check if XP is greater than or equal to XP required
            level++; //increase level
            progressBar.textContent = `$Level {level}`; //update level text
            xp -= xpRequired; //decrease XP by XP required
            xpRequired += level; //increase XP required by level
        }
    });
});
