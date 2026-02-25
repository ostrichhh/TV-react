# 📺 Digital TV System – React Project

A simple Digital TV Simulation App built using React that demonstrates state management, component communication, and event handling.

The app mimics a real TV setup where a remote control interacts with a screen display, showing either a working channel or a "No Signal" screen depending on the button pressed.

## 🎯 Project Objective

This project focuses on understanding:

React State management

Props communication between components

Component-based architecture

Handling user interactions

## 🧩 How It Works

The system simulates a digital TV with three main parts:

## 🖥️ TV Screen

Displays the current channel or "No Signal".

## 🎮 Remote Control

Contains buttons (0–9) that change the TV display when clicked.

## 🧠 App Controller

Manages the state and logic of the system.

## 📂 Project Structure

Inside the src folder, the project is organized into three files:

src/
│── App.jsx      → Main Hub (State & Logic)
│── TV.jsx       → Display Screen
│── Remote.jsx   → Remote Control Buttons

## ⚙️ System Rules
🔢 Remote Buttons

The remote contains 10 buttons numbered:
0 – 9

## 📡 Channel Logic

6 buttons display a real channel such as:

Movie Channel

Sports Channel

News Channel

Music Channel

Kids Channel

Documentary Channel

4 buttons display:
❌ "No Signal"

The mapping of working vs. non-working channels is predefined in the app logic.

## 🚀 Features

Interactive remote control simulation

Dynamic TV screen updates

State-driven UI rendering

Clean component separation

Beginner-friendly React project

🛠️ Technologies Used

React.js

JavaScript (ES6+)

CSS




























This Project is for academic purposes. Another day laerning github and making things greener green.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
