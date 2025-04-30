document.getElementById("searchButton").addEventListener("click", function() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const patternBoxes = document.querySelectorAll(".pattern-box");

    patternBoxes.forEach(box => {
        const altText = box.querySelector("img").alt.toLowerCase();
        if (altText.includes(searchQuery)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});