document.addEventListener("DOMContentLoaded", function() {
    const comments = [
        {
            author: "Alice",
            message: "Super recette !",
            rating: 5,
            date: "2023-07-10"
        },
        {
            author: "Bob",
            message: "Très bonne recette, facile à suivre.",
            rating: 4,
            date: "2023-07-12"
        },
        {
            author: "Charlie",
            message: "Bonne recette, mais un peu longue à préparer.",
            rating: 3,
            date: "2023-07-14"
        }
    ];

    const tbody = document.getElementById("comments-tbody");

    comments.forEach(comment => {
        const tr = document.createElement("tr");

        const authorTd = document.createElement("td");
        authorTd.textContent = comment.author;
        tr.appendChild(authorTd);

        const messageTd = document.createElement("td");
        messageTd.textContent = comment.message;
        tr.appendChild(messageTd);

        const ratingTd = document.createElement("td");
        ratingTd.textContent = comment.rating;
        tr.appendChild(ratingTd);

        const dateTd = document.createElement("td");
        dateTd.textContent = comment.date;
        tr.appendChild(dateTd);

        tbody.appendChild(tr);
    });
});