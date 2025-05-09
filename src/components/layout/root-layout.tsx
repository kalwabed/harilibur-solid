import "@fontsource/inter/latin-700.css";
import "@fontsource/inter/latin-400.css";
import "./root-layout.css";

import { today } from "~/utils/date-formatter";
import { Slot, component$ } from "@builder.io/qwik";

const RootLayout = component$(() => {
  return (
    <div id="root">
      <header>
        <h1>Daftar hari libur nasional 🇮🇩</h1>
        <div class="divider"></div>
        <p class="today">Hari ini: {today()}</p>
      </header>
      <main>
        <Slot />
      </main>
      <footer>
        <a
          href="https://api-harilibur.vercel.app"
          title="Link website"
          class="mr-2 link"
        >
          {" "}
          Sumber data
        </a>
        <a
          href="https://github.com/kalwabed/harilibur-solid"
          title="Github repository"
          class="link"
        >
          {" "}
          Kontribusi
        </a>
      </footer>
    </div>
  );
});

export default RootLayout;
