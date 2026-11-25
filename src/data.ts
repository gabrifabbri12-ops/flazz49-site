export const LINKS = {
  twitch: "https://www.twitch.tv/flazzo_49",
  clips: "https://www.twitch.tv/flazzo_49/clips",
  discord: "https://discord.com/invite/aEJZbSbsRd",
  tiktok: "https://www.tiktok.com/@Flazzo_49",
} as const;

// Immagine originale fornita dall'utente (Link Twitch originale)
export const PROFILE_IMAGE = "https://static-cdn.jtvnw.net/jtv_user_pictures/63f52377-219f-4564-bca1-bf721068af46-profile_image-600x600.png";


export const PUBLIC_STATS = [
  { value: "232", label: "Follower Twitch", href: LINKS.twitch, accent: "text-twitch" },
  { value: "125", label: "Membri Discord", href: LINKS.discord, accent: "text-blurple" },
  { value: "8", label: "Follower TikTok", href: LINKS.tiktok, accent: "text-magenta" },
  { value: "5", label: "Video TikTok", href: LINKS.tiktok, accent: "text-neon" },
] as const;

export const TWITCH_CLIPS = [
  {
    title: "Flazzo cagato",
    game: "Just Chatting",
    duration: "47 sec",
    views: 9,
    url: "https://www.twitch.tv/flazzo_49/clip/SpinelessCogentAxeTooSpicy-oTkcFsTDuyqJG-dv",
    image:
      "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/057044f1-8d77-4955-a163-749e25a49b31/landscape/thumb/thumb-0000000000-480x272.jpg",
  },
  {
    title: "Maranza",
    game: "Just Chatting",
    duration: "19 sec",
    views: 8,
    url: "https://www.twitch.tv/flazzo_49/clip/MagnificentCrackyFerretStinkyCheese-D5LEU4_-zPKeyZJN",
    image:
      "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/e76a473d-cd82-4fe9-8efc-355acff33c9c/landscape/thumb/thumb-0000000000-480x272.jpg",
  },
  {
    title: "Mini maranza del Bronks",
    game: "Just Chatting",
    duration: "16 sec",
    views: 10,
    url: "https://www.twitch.tv/flazzo_49/clip/ObliqueAbstemiousRabbitPeteZaroll-8U4DqtHKQjM4iLor",
    image:
      "https://static-cdn.jtvnw.net/twitch-video-assets/twitch-vap-video-assets-prod-us-west-2/66d23e0e-c51c-478b-bec5-0228773b66c6/landscape/thumb/thumb-0000000000-480x272.jpg",
  },
] as const;
