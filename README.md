# Modern Real-Time Clock Application

## Overview

This project is a modern real-time clock application built with **React** and **Vite**. It combines a sleek user interface with advanced animations and multiple functionalities to deliver a visually appealing and interactive clock experience. The application supports both digital and analog displays, multiple time formats, themes, and a screen saver mode.

> "⏰ Time flies, but with this clock, you’ll always stay ahead!" – A creative blend of aesthetics and functionality.

## Features

### Core Functionalities

- **Digital Clock** 🕒
  - Displays hours, minutes, seconds, and milliseconds.

- **Analog Clock** ⏳
  - Smooth-moving clock hands for a realistic look.

- **Date Display** 📅
  - Includes day, month, and year.

- **Dark/Light Theme Toggle** 🌙/☀️
  - Easily switch between dark and light modes.

- **Animated Transitions** 🎥
  - Seamless transitions between time updates and theme changes.

- **Responsive Design** 📱💻
  - Works perfectly on all screen sizes, from mobile to desktop.

- **Multiple Time Formats** ⌚
  - Switch between 12-hour and 24-hour time formats.

### Advanced Feature: Screen Saver Mode

- **Toggle Button (🖥️/🔲)**
  - Activates the screen saver mode.

- **Enhanced Visuals** 🔍
  - Clock scales up by 1.5x.
  - Control buttons automatically hide and reappear on hover.

- **Smooth Transitions** ✨
  - All animations are visually pleasing and smooth.

## Technologies Used

- **React** ⚛️: For building the user interface.
- **Vite** ⚡: For fast bundling and development.
- **CSS/SCSS** 🎨: For styling and animations.
- **JavaScript** 💻: For clock logic and interactivity.

## File Structure

```
📂 project-root
├── 📂 src
│   ├── 📂 assets
│   │   └── 📄 react.svg
│   ├── 📂 components
│   │   ├── 📄 AnalogClock.jsx
│   │   ├── 📄 DateDisplay.jsx
│   │   ├── 📄 DigitalClock.jsx
│   │   ├── 📄 ScreenSaverToggle.jsx
│   │   ├── 📄 ThemeToggle.jsx
│   │   └── 📄 TimeFormatToggle.jsx
│   ├── 📂 hooks
│   │   └── 📄 useTime.jsx
│   ├── 📂 styles
│   │   ├── 📄 AnalogClock.css
│   │   ├── 📄 DigitalClock.css
│   │   ├── 📄 theme.css
│   │   ├── 📄 App.css
│   │   └── 📄 index.css
│   ├── 📄 App.jsx
│   ├── 📄 main.jsx
│   └── 📄 index.html
├── 📂 public
│   └── 📄 favicon.ico
├── 📄 .gitignore
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 README.md
└── 📄 vite.config.js
```

## Installation

### Prerequisites

- Node.js (v14 or higher) 🛠️
- npm or yarn 📦

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Tharuksha/digital-clock.git
   cd digital-clock
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Usage

1. View the clock in both digital and analog formats. ⏰
2. Toggle between dark and light themes using the theme switcher. 🌙/☀️
3. Enable/disable the screen saver mode with the 🖥️/🔲 button.
4. Adjust the time format to 12-hour or 24-hour mode. ⌚

## Customization

### Theme Colors

Modify `theme.css` to adjust the color palette for dark and light themes. 🎨

### Animations

Update relevant CSS files to tweak the animation durations and effects. 🎥

## Deployment

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy the `dist` folder to your preferred hosting service. 🚀

---

Happy coding! 🚀
