# 📸 Photocafe App

**Video yourself and get your flipbook of your 7 second memory!**  
Or jump into classic photobooth mode: take 4 pictures, strike your best poses, and walk away with a print to remember the moment!

---

![Photocafe App](https://github.com/user-attachments/assets/590de304-e2c4-4935-9814-c18ade52fd8e)

## ✨ What is Photocafe App?

Photocafe App brings the magic of photo booths to your desktop!

- **Flipbook Mode:** Record a 7-second video and instantly turn it into a fun flipbook you can print and keep.
- **Classic Photobooth:** Snap 4 quick photos, get creative, and print your memories on the spot.

Perfect for events, parties, or just capturing a slice of life with a little flair!

---

## 🚀 Get Started

1. **Clone this repo**  
   `git clone https://github.com/your-username/photocafe-app.git`
2. **Install dependencies**  
   `npm run init`
3. **Start in development mode**  
   `npm start`
4. **Build for production**  
   `npm run compile`

That's it! You're ready to make memories. 🎉

---

## 🛠 Features

- **Modern Electron + Vite foundation** for fast, secure, and reliable performance.
- **Auto-update support** so your booth is always up-to-date.
- **End-to-end testing** with Playwright.
- **Easy to customize**—make it your own!

---

## 📁 Project Structure

- `packages/main` – Electron main process
- `packages/preload` – Secure bridge between Electron and your UI
- `renderer` – Your app's interface (create with `npm run create-renderer`)

---

## ⚡️ NPM Scripts

```sh
npm start
```

Start the app in development mode with hot reload.

```sh
npm run build
```

Build all workspaces.

```sh
npm run compile
```

Build and package the app for distribution.

```sh
npm run test
```

Run end-to-end tests.

```sh
npm run init
```

Set up the initial environment and renderer.

---

## 💡 Tips

- **Renderer freedom:** Use any frontend framework you like!
- **Node.js APIs:** Use them in `preload` or `main`, not in the renderer.
- **Environment variables:** Only those prefixed with `VITE_` are exposed to the renderer.

---

## ❤️ Support

If you enjoy Photocafe App, give us a ⭐ or share your flipbooks with friends!

---

> Built with love and a little bit of magic ✨

---

> **Powered by [vite-electron-builder](https://github.com/cawa-93/vite-electron-builder?tab=readme-ov-file) – thanks to the original author for this awesome template!**
