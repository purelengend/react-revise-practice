# Overview

- This document is intended to describe the requirements for the React Revise practice improvement.
- Design: [Figma](https://www.figma.com/design/vw0YhUhB15lc20iAVQdNzU/Basic-CRUD-Student?node-id=93-160&m=dev)
- Plan: [Note](https://docs.google.com/document/d/1NLubZDTbB9xh6iM8gFxqweEsYYR9WJF2DB9bZ60_gQQ/edit)

# Target

- Revise React knowledge
- Apply React Hook Form for form management.
- Apply Valibot for form validation.
- Apply Tanstack query for server state management.

# Techstacks

- Vite
- TypeScript
- React
- Chakra UI
- Storybook
- Tanstack Query
- Jest
- React-testing-library
- React Hook Form
- Valibot
- React Router

# Development Tools

- [Eslint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://commitlint.js.org/#/)

# Timeline

- Estimate time: 10 days (from 10th June 2024 to 21st June 2024).
- Actual time: 13 days (from 24th June 2024 to 26th June 2024).

# Requirements

- Build a CRUD React application with pagination, filter, order.
- Need to handle form, modal.

# Getting Started

- Clone the `react-revise` branch of this repository via HTTP: `git clone -b practice-one https://gitlab.asoft-python.com/huy.phamnhat/react-training/-/tree/react-revise?ref_type=heads`.
- Open the project folder with your code editor.
- Open terminal and run command: `pnpm i`.
- Before running the project, you must create an `.env` file at the the `practice-two` folder, you can get it [here](https://drive.google.com/file/d/132lmzCgpF7dVj2YZnXX1huOTN4XS8Doh/view?usp=drive_link).
- After that run this command to host the web: `pnpm dev`.
- Open browser and browse `http://localhost:5173`.
- To start Storybook, run the following command: `pnpm storybook`.

| Command                                                                 | Action                                       |
| ----------------------------------------------------------------------- | -------------------------------------------- |
| `git clone git@gitlab.asoft-python.com:huy.phamnhat/react-training.git` | Clone repository from GitLab                 |
| `git checkout -b feat/react-revise`                                     | Checkout branch                              |
| `pnpm i`                                                                | Install dependencies                         |
| `pnpm dev`                                                              | Host local web app at http://localhost:5173/ |
| `pnpm run storybook`                                                    | Host local storybook httpp://localhost:6006/ |
| `pnpm test`                                                             | Run all test cases                           |
| `pnpm coverage`                                                         | Coverage all test cases                      |

# Author

- Huy Pham Nhat.
- Email: huy.phamnhat@asnet.com.vn.
