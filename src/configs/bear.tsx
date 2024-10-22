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
        id: "portfolio-macos",
        title: "Portfolio macOS",
        file: "https://raw.githubusercontent.com/Renovamen/playground-macos/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://github.com/Renovamen/playground-macos"
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
        id: "text-classification",
        title: "Text Classification",
        file: "https://raw.githubusercontent.com/Renovamen/Text-Classification/master/README.md",
        icon: "i-gg:format-text",
        excerpt: "PyTorch implementation of text classificaiton models...",
        link: "https://github.com/Renovamen/Text-Classification"
      },
      {
        id: "speech-emotion-recognition",
        title: "Speech Emotion",
        file: "https://raw.githubusercontent.com/Renovamen/Speech-Emotion-Recognition/master/README.md",
        icon: "i-ant-design:audio-filled",
        excerpt: "Speech emotion recognition using Keras and sklearn...",
        link: "https://github.com/Renovamen/Speech-Emotion-Recognition"
      },
      {
        id: "pcalg-py",
        title: "PC Algorithm",
        file: "https://raw.githubusercontent.com/Renovamen/pcalg-py/master/README.md",
        icon: "i-tabler:atom-2",
        excerpt: "Implement PC algorithm in Python...",
        link: "https://github.com/Renovamen/pcalg-py"
      },
      {
        id: "midgard",
        title: "Midgard",
        file: "https://raw.githubusercontent.com/Renovamen/midgard/master/README.md",
        icon: "i-bx:game",
        excerpt: "An interactive version of my resume, powered by Vue...",
        link: "https://resume.zxh.io/"
      },
      {
        id: "image-captioning",
        title: "Image Captioning",
        file: "https://raw.githubusercontent.com/Renovamen/Image-Captioning/master/README.md",
        icon: "i-bi:image-fill",
        excerpt: "PyTorch implementation of image captioning models...",
        link: "https://github.com/Renovamen/Image-Captioning"
      },
      {
        id: "wordle-helper",
        title: "Wordle Helper",
        file: "https://raw.githubusercontent.com/Renovamen/wordle-helper/main/README.md",
        icon: "i-bi:grid-1x2",
        excerpt: "Help you solve Wordle puzzles...",
        link: "https://wordle.zxh.io"
      },
      {
        id: "cube-solver",
        title: "Cube Solver",
        file: "https://raw.githubusercontent.com/Renovamen/Just-a-Cube/master/README.md",
        icon: "i-bx:cube",
        excerpt: "A rubik's cube solver (layer-by-layer & two-phase)...",
        link: "https://cube.zxh.io"
      },
      {
        id: "alkaid",
        title: "Alkaid",
        file: "https://raw.githubusercontent.com/Renovamen/alkaid/main/README.md",
        icon: "i-simple-icons:stellar",
        excerpt: "Minimal reinforcement-learning toolbox for PyTorch...",
        link: "https://github.com/Renovamen/alkaid"
      }
    ]
  }
];

export default bear;
