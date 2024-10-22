import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "skill",
        title: "Skills",
        file: "markdown/skills.md",
        icon: "i-bx:cube",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "contact",
        title: "Contact",
        file: "markdown/contact.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "avawatz",
        title: "Avawatz!",
        file: "project/avawatz.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "website for next-generation AI decision intelligence company",
        link: "https://avawatz.com/"
      },
      {
        id: "hulk-cars",
        title: "Hulk Cars",
        file: "project/hulkcars.md",
        icon: "i-ant-design:audio-filled",
        excerpt: "Speech emotion recognition using Keras and sklearn...",
        link: "https://hulkcars.com/"
      },
      {
        id: "portfolio-macos",
        title: "Portfolio macOS",
        file: "https://raw.githubusercontent.com/techminer95/MacOS/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://github.com/Renovamen/playground-macos"
      },
      {
        id: "ceras-health",
        title: "Ceras Health",
        file: "project/cerashealth.md",
        icon: "i-bi:grid-1x2",
        excerpt: "Help you solve Wordle puzzles...",
        link: "https://cerashealth.com/"
      },
      {
        id: "luxuary",
        title: "Luxurious Rooms",
        file: "https://raw.githubusercontent.com/techminer95/hotel-booking-system/main/README.md",
        icon: "i-icon-park-outline:heavy-metal",
        excerpt: "Implement hotel booking algorithm in Node...",
        link: "https://github.com/techminer95/hotel-booking-system"
      },
      {
        id: "oh-my-cv",
        title: "Oh, My CV!",
        file: "https://raw.githubusercontent.com/Renovamen/oh-my-cv/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "Write your curriculum vitae / resume in Markdown online...",
        link: "https://ohmycv.app"
      },
      {
        id: "oh-vue-icons",
        title: "Oh, Vue Icons!",
        file: "https://raw.githubusercontent.com/Renovamen/oh-vue-icons/master/README.md",
        icon: "i-fa-brands:vuejs",
        excerpt: "Importing icons from different icon packs in Vue easily...",
        link: "https://oh-vue-icons.js.org"
      },
      {
        id: "acceldata",
        title: "Acceldata",
        file: "project/acceldata.md",
        icon: "i-gg:format-text",
        excerpt: "PyTorch implementation of text classificaiton models...",
        link: "https://www.acceldata.io/"
      },
      {
        id: "my-todo",
        title: "My Todo",
        file: "https://raw.githubusercontent.com/techminer95/Fullstack-Todo-List-App/master/README.md",
        icon: "i-tabler:atom-2",
        excerpt: "Clean and smart Full stack todo app using...",
        link: "https://github.com/techminer95/Fullstack-Todo-List-App"
      },
      {
        id: "sakura-japan",
        title: "Sakura Japan",
        file: "project/sakurajapan.md",
        icon: "i-bi:image-fill",
        excerpt: "HTML, Javascript, TailwindCSS",
        link: "https://sakura-japan-hpc.vercel.app/"
      }
    ]
  }
];

export default bear;
