var cards = document.querySelectorAll(".box");

cards.forEach(function(card) {
    card.addEventListener("mouseover", function() {
        var title = this.querySelector(".box-title");
        title.style.display = "none";
    });

    card.addEventListener("mouseout", function() {
        var title = this.querySelector(".box-title");
        title.style.display = "block";
    });
});