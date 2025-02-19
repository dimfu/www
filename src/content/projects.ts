interface Project {
    name: string
    description: string
    url: string
}

export const Projects: Project[] = [
    {name: "spade", description: "Discord bot for holding general tournament bracket.", url: "https://github.com/dimfu/spade"},
    {name: "kaido", description: "Unofficial Touge Union Leaderboard Notification.", url: "https://github.com/dimfu/kaido"},
    {name: "recipe-scraper", description: "Tiny package to scrap food recipe from the web.", url:"https://github.com/dimfu/recipe-scraper"},
    {name: "sdl-go", description: "Subtitle donwloader for your torrent movies.", url: "https://github.com/dimfu/sdl-go"},
]
