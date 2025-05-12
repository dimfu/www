interface Project {
    name: string
    description: string
    url: string
}

export const Projects: Project[] = [
    { name: "spade", description: "Discord bot for holding general tournament bracket.", url: "https://github.com/dimfu/spade" },
    { name: "kaido", description: "Unofficial Touge Union Leaderboard Notification.", url: "https://github.com/dimfu/kaido" },
    { name: "apron", description: "Write recipe that computer can understand", url: "https://github.com/dimfu/apron" },
    { name: "sdl-go", description: "Subtitle donwloader for your torrent movies.", url: "https://github.com/dimfu/sdl-go" },
    { name: "mrwordcount", description: "Word count map reduce implementation in Golang", url: "https://github.com/dimfu/mrwordcount" },
]
