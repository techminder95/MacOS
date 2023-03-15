# playground-macos

My portfolio website simulating macOS's GUI: https://portfolio.zxh.io

Powered by [React](https://reactjs.org/) + [Zustand](https://zustand-demo.pmnd.rs/) + [UnoCSS](https://uno.antfu.me/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/).

![light mode](./public/screenshots/light.png)
![dark mode](./public/screenshots/dark.png)


&nbsp;

## Usage

Clone the repo and install dependencies:

```bash
pnpm install
```

Start dev server (with hot reloading):

```bash
pnpm dev
```

Build for production with minification to the `dist` folder:

```bash
pnpm build
```


&nbsp;

## Changelog

- **Update 2021.12.05**: Simulated the real state of the device's battery using [Battery API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API). On the [browsers that don't support this API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API#browser_compatibility), the charge level will be displayed as 100%.

- **Update 2021.12.05**: Refactored this project by using functional components and hooks to make the code cleaner. See [this branch](https://github.com/Renovamen/playground-macos/tree/class-component) for the previous version written using class components.


&nbsp;

## Credits

- macOS
  - [Monterey](https://www.apple.com/macos/monterey/)
  - [Catalina](https://www.apple.com/bw/macos/catalina/)
- [macOS Icon Gallery](https://www.macosicongallery.com/)
- [sindresorhus/file-icon-cli](https://github.com/sindresorhus/file-icon-cli)
- [vivek9patel.github.io](https://github.com/vivek9patel/vivek9patel.github.io)


&nbsp;

## License

[MIT](MIT)
