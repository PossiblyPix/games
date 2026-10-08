const categories = [
    { id: "action", name: "Action" },
    { id: "adventure", name: "Adventure" },
    { id: "casual", name: "Casual" },
    { id: "horror", name: "Horror" },
    { id: "platformer", name: "Platformer" },
    { id: "puzzle", name: "Puzzle" },
    { id: "racing", name: "Racing" },
    { id: "rhythm", name: "Rhythm" },
    { id: "rpg", name: "RPG" },
    { id: "miscellaneous", name: "Misc." },
    { id: "sports", name: "Sports" },
    { id: "strategy", name: "Strategy" },
];

const games = [
    { title: "Deltarune 1-4", slug: "deltarune", image: "deltarune.jpg", category: "rpg" },
    { title: "Undertale", slug: "undertale", image: "undertale.png", category: "rpg" },
    { title: "Ultrakill", slug: "ultrakill", image: "ultrakill.jpg", category: "action" },
    { title: "Cuphead", slug: "cuphead", image: "cuphead.png", category: "action" },
    { title: "Hollow Knight", slug: "hollow-knight", image: "hollowknight.png", category: "adventure" },
    { title: "Balatro", slug: "balatro", image: "balatro.jpg", category: "strategy" },
    { title: "PEAK", slug: "peak", image: "peak.jpg", category: "adventure" },
    { title: "Beatblock", slug: "beatblock", image: "beatblock.webp", category: "rhythm" },
    { title: "Celeste", slug: "celeste", image: "celeste.jpg", category: "platformer" },
    { title: "Terraria", slug: "terraria", image: "terraria.png", category: "adventure" },
    { title: "Poor Bunny", slug: "poorbunny", image: "poorbunny.png", category: "platformer" },
    { title: "Retro Bowl", slug: "retrobowl", image: "retrobowl.png", category: "sports" },
    { title: "Five Nights at Freddy's", slug: "fnaf", image: "fnaf.png", category: "horror" },
    { title: "Five Nights at Freddy's 2", slug: "fnaf2", image: "fnaf2.png", category: "horror" },
    { title: "Five Nights at Freddy's 3", slug: "fnaf3", image: "fnaf3.png", category: "horror" },
    { title: "Five Nights at Freddy's 4", slug: "fnaf4", image: "fnaf4.png", category: "horror" },
    { title: "Five Nights at Freddy's: Sister Location", slug: "fnafsl", image: "fnafsl.png", category: "horror" },
    { title: "Angry Birds", slug: "angrybirds", image: "angrybirds.png", category: "puzzle" },
    { title: "Inscryption", slug: "inscryption", image: "inscryption.webp", category: "strategy" },
    { title: "Black Knife Simulator", slug: "blackknifesim", image: "blackknifesim.webp", category: "miscellaneous" },
    { title: "Just Shapes & Beats", slug: "jsab", image: "jsab.png", category: "rhythm" },
    { title: "Baldi's Basics Plus", slug: "baldisbasicsplus", image: "baldisbasicsplus.png", category: "strategy" },
    { title: "Bloons TD 5", slug: "btd5", image: "btd5.png", category: "strategy" },
    { title: "Buckshot Roulette", slug: "buckshotroulette", image: "buckshotroulette.png", category: "horror" },
    { title: "Cookie Clicker", slug: "cookieclicker", image: "cookieclicker.jpg", category: "casual" },
    { title: "Dadish", slug: "dadish", image: "dadish.png", category: "platformer" },
    { title: "Deltatraveler", slug: "deltatraveler", image: "deltatraveler.png", category: "rpg" },
    { title: "FISH", slug: "fish", image: "fish.png", category: "miscellaneous" },
    { title: "Jelly Mario", slug: "jellymario", image: "jellymario.jpg", category: "platformer" },
    { title: "FNAF: World", slug: "fnafworld", image: "fnafworld.png", category: "rpg" },
    { title: "Friday Night Funkin'", slug: "fnf", image: "fnf.png", category: "rhythm" },
    { title: "Geometry Dash", slug: "geometrydash", image: "geometrydash.jpg", category: "rhythm" },
    { title: "Going Balls", slug: "goingballs", image: "goingballs.png", category: "casual" },
    { title: "Hollow Knight Silksong", slug: "hollowknightsilksong", image: "hollowknightsilksong.png", category: "adventure" },
    { title: "Hotline Miami", slug: "hotlinemiami", image: "hotlinemiami.png", category: "action" },
    { title: "Nubby's Number Factory", slug: "nubbysnumberfactory", image: "nubbysnumberfactory.png", category: "miscellaneous" },
    { title: "Pizza Tower", slug: "pizzatower", image: "pizzatower.png", category: "platformer" },
    { title: "Sonic Mania", slug: "sonicmania", image: "sonicmania.png", category: "platformer" },
    { title: "Basket Random", slug: "basketrandom", image: "basketrandom.png", category: "sports" },
    { title: "Burrito Bison: Launcha Libre", slug: "burritobison", image: "burritobison.png", category: "casual" },
    { title: "Escape Road 2", slug: "escaperoad2", image: "escaperoad2.png", category: "racing" },
    { title: "FNF VS Impostor v4", slug: "fnfvsimpostorv4", image: "fnfvsimpostorv4.jpg", category: "rhythm" },
    { title: "Google Baseball", slug: "googlebaseball", image: "googlebaseball.jpg", category: "sports" },
    { title: "Half-Life", slug: "halflife", image: "halflife.png", category: "action" },
    { title: "Mindwave", slug: "mindwave", image: "mindwave.png", category: "puzzle" },
    { title: "osu!", slug: "osu", image: "osu.png", category: "rhythm" },
    { title: "Raft", slug: "raft", image: "raft.jpg", category: "adventure" },
    { title: "Red Ball 4", slug: "redball4", image: "redball4.png", category: "platformer" },
    { title: "Slope", slug: "slope", image: "slope.png", category: "racing" },
    { title: "Smash Karts", slug: "smashkarts", image: "smashkarts.png", category: "racing" },
    { title: "Super Mario 64", slug: "supermario64", image: "supermario64.png", category: "platformer" },
    { title: "Space Waves", slug: "spacewaves", image: "spacewaves.png", category: "action" },
    { title: "Stickman Hook", slug: "stickmanhook", image: "stickmanhook.png", category: "platformer" },
    { title: "Superhot", slug: "superhot", image: "superhot.png", category: "action" },
    { title: "The Legend of Zelda: Ocarina of Time", slug: "ocarinaoftime", image: "ocarinaoftime.png", category: "adventure" },
    { title: "Tomb of the Mask", slug: "tombofthemask", image: "tombofthemask.png", category: "platformer" },
    { title: "Trombone Champ", slug: "trombonechamp", image: "trombonechamp.webp", category: "rhythm" },
];

const gameGrid = document.getElementById("game-grid");
const gameCategories = document.getElementById("game-categories");
const gameSearch = document.getElementById("game-search");
const gameCount = document.getElementById("game-count");
const emptyState = document.getElementById("empty-state");
let selectedCategory = "all";

function renderCategories() {
    const allGamesButton = document.createElement("button");
    allGamesButton.className = "category-button all-games-button";
    allGamesButton.type = "button";
    allGamesButton.dataset.category = "all";
    allGamesButton.setAttribute("aria-pressed", selectedCategory === "all");
    allGamesButton.textContent = `All Games (${games.length})`;

    const categoryButtons = categories.map((category) => {
        const button = document.createElement("button");
        button.className = "category-button";
        button.type = "button";
        button.dataset.category = category.id;
        button.setAttribute("aria-pressed", selectedCategory === category.id);

        const image = document.createElement("img");
        image.src = "placeholder.png";
        image.alt = "";
        image.loading = "lazy";

        const label = document.createElement("span");
        label.className = "category-label";
        label.textContent = category.name;

        button.append(image, label);
        return button;
    });

    gameCategories.replaceChildren(allGamesButton, ...categoryButtons);
}

function renderGames(query = "") {
    const normalizedQuery = query.trim().toLowerCase();
    const filteredGames = games.filter((game) =>
        (selectedCategory === "all" || game.category === selectedCategory)
        && game.title.toLowerCase().includes(normalizedQuery)
    );
    const gameCards = filteredGames.map((game, index) => {
        const card = document.createElement("a");
        card.className = "game-card";
        card.href = `https://possiblypix.github.io/games/${game.slug}`;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.style.setProperty("--card-index", index);

        const imageFrame = document.createElement("span");
        imageFrame.className = "game-image";
        const image = document.createElement("img");
        image.src = `thumbnail/${game.image}`;
        image.alt = `${game.title} logo`;
        image.loading = "lazy";
        imageFrame.append(image);

        const title = document.createElement("span");
        title.className = "game-title";
        title.textContent = game.title;
        card.append(imageFrame, title);
        return card;
    });

    gameGrid.replaceChildren(...gameCards);
    gameCount.textContent = `${filteredGames.length} ${filteredGames.length === 1 ? "game" : "games"}`;
    const categoryName = categories.find((category) => category.id === selectedCategory)?.name;
    emptyState.textContent = categoryName
        ? `No games match that search in ${categoryName}.`
        : "No games match that search.";
    emptyState.hidden = filteredGames.length > 0;
}

gameCategories.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) {
        return;
    }

    selectedCategory = button.dataset.category;
    renderCategories();
    renderGames(gameSearch.value);
});

gameSearch.addEventListener("input", () => renderGames(gameSearch.value));
renderCategories();
renderGames();

function cloakPage(event) {
    event.preventDefault();

    const cloakWindow = window.open("about:blank", "_blank");
    if (!cloakWindow) {
        return;
    }

    const pageUrl = JSON.stringify(window.location.href);
    cloakWindow.document.write(`<!doctype html>
        <html>
            <head><title>PossiblyPix</title></head>
            <body style="margin:0;overflow:hidden">
                <iframe src=${pageUrl} style="width:100vw;height:100vh;border:0" title="Website"></iframe>
            </body>
        </html>`);
    cloakWindow.document.close();
}