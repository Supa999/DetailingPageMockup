import React from "react";
import XLogo from "./XLogo";
import InstaLogo from './InstaLogo';
import FacebookLogo from "./FacebookLogo";

export default function Header() {
  return (
    <header className="fixed top-0 w-screen min-h-[10vh] text-neutral-900 bg-white flex items-center justify-between">
      <h1 className="font-extrabold text-center text-4xl md:text-5xl flex-1/2">SS Auto Detailing</h1>
      <section className="flex-1/2 flex items-center justify-center gap-7 md:gap-10">
        <figure className="bg-neutral-900 w-10 md:w-15 aspect-square p-2 rounded-xl">
          <a href="https://x.com/manofsteele2206" target="_blank"><XLogo /></a>
        </figure>
        <figure className="bg-neutral-900 w-10 md:w-15 aspect-square p-2 rounded-xl">
          <a href="https://www.instagram.com/_ss_auto_detailing_/" target="_blank"><InstaLogo /></a>
        </figure>
        <figure className="bg-neutral-900 w-10 md:w-15 aspect-square p-2 rounded-xl">
          <a href="https://www.facebook.com/profile.php?id=61561737745249&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true" target="_blank"><FacebookLogo /></a>
        </figure>
      </section>
    </header>
  );
}
