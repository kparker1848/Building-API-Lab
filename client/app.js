$.ajax({
    type: "GET",
    url: "/api/chirps"
})
.then(chirpFeed => {
    for (const id in chirpFeed) {
        if (id === "nextid") return;
        $("#chirpbox").append(`
        <div>
        <div>${chirpFeed[id].user}</div>
        <div>${chirpFeed[id].msg}</div>
        </div>
        `);
    };
});