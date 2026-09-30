const games = [
                { title: "Deltarune 1-4", slug: "deltarune", image: "deltarune.jpg" },
                { title: "Undertale", slug: "undertale", image: "undertale.png" },
                { title: "Ultrakill", slug: "ultrakill", image: "ultrakill.jpg" },
                { title: "Cuphead", slug: "cuphead", image: "cuphead.png" },
                { title: "Hollow Knight", slug: "hollow-knight", image: "hollowknight.png" },
                { title: "Balatro", slug: "balatro", image: "balatro.jpg" },
                { title: "PEAK", slug: "peak", image: "peak.jpg" },
                { title: "Beatblock", slug: "beatblock", image: "beatblock.webp" },
                { title: "Celeste", slug: "celeste", image: "celeste.jpg" },
                { title: "Terraria", slug: "terraria", image: "terraria.png" },
                { title: "Poor Bunny", slug: "poorbunny", image: "poorbunny.png" },
                { title: "Retro Bowl", slug: "retrobowl", image: "retrobowl.png" },
                { title: "Five Nights at Freddy's", slug: "fnaf", image: "fnaf.png" },
                { title: "Five Nights at Freddy's 2", slug: "fnaf2", image: "fnaf2.png" },
                { title: "Five Nights at Freddy's 3", slug: "fnaf3", image: "fnaf3.png" },
                { title: "Five Nights at Freddy's 4", slug: "fnaf4", image: "fnaf4.png" },
                { title: "Five Nights at Freddy's: Sister Location", slug: "fnafsl", image: "fnafsl.png" },
                { title: "Angry Birds", slug: "angrybirds", image: "angrybirds.png" },
                { title: "Inscryption", slug: "inscryption", image: "inscryption.webp" },
                { title: "Black Knife Simulator", slug: "blackknifesim", image: "blackknifesim.webp" }
            ];

            const gameGrid = document.getElementById("game-grid");
            const gameSearch = document.getElementById("game-search");
            const gameCount = document.getElementById("game-count");
            const emptyState = document.getElementById("empty-state");

            function renderGames(query = "") {
                const filteredGames = games.filter((game) =>
                    game.title.toLowerCase().includes(query.trim().toLowerCase())
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
                    image.alt = "Game Logo";
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
                emptyState.hidden = filteredGames.length > 0;
            }

            gameSearch.addEventListener("input", () => renderGames(gameSearch.value));
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