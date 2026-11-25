import { Blocks, Gamepad2, MessageCircle, Moon, Users, Video } from "lucide-react";
import { Fragment } from "react";

const ITEMS = [
  { icon: Moon, text: "Live al pomeriggio" },
  { icon: Gamepad2, text: "Fortnite" },
  { icon: MessageCircle, text: "Just Chatting" },
  { icon: Blocks, text: "Minecraft" },
  { icon: Users, text: "125 membri su Discord" },
  { icon: Video, text: "@Flazzo_49 su TikTok" },
];

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative flex overflow-hidden border-y border-line/60 bg-abyss/60 py-5">
      <div className={`flex shrink-0 items-center gap-10 pr-10 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[0, 1].map((dup) => (
          <Fragment key={dup}>
            {ITEMS.map((item, i) => (
              <span key={`${dup}-${i}`} className="flex shrink-0 items-center gap-3">
                <item.icon className="h-4 w-4 text-twitch" />
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-zinc-300">
                  {item.text}
                </span>
                <span className="ml-7 h-1.5 w-1.5 rotate-45 bg-magenta/70" />
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative -rotate-[0.6deg] scale-[1.02]">
      <Row />
    </div>
  );
}
