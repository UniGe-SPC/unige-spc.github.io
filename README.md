# UniGe Computer Engineering: Software Platforms & Cybersecurity

Official curriculum study manifesto landing page for the Master of Science (Laurea Magistrale) track in Computer Engineering at the Università di Genova.

Live site: [https://unige-spc.github.io/](https://unige-spc.github.io/)

## 🚀 Project Tech Stack

- **Framework**: Astro SSG (Static Site Generation)
- **Styling**: Tailwind CSS v4 & Custom CSS Utilities
- **Deployment**: Automatic GitHub Actions deployment on push to `main` branch

## 🧞 Local Development Commands

All commands are run from the root of the project:

```bash
# Install dependencies
npm install

# Start local development server (with hot-reload)
npm run dev

# Build production static bundle (outputs to /dist)
npm run build

# Preview production build locally
npm run preview
```

## 🤝 Contributing Guide

We welcome contributions to update course content, correct typographical errors, or enhance the design!

### How to Update Subject Content
Subject details are managed as flat Markdown files in the `src/content/` directory.

1. **Locate the file**: Find the corresponding course `.md` file in `src/content/` (e.g., `software-platforms.md`).
2. **Edit the file**: You can modify both the frontmatter details and the descriptive content text.
   - **Frontmatter Fields**:
     - `name`: Course title (string)
     - `code`: Course code (string, e.g., `80112`)
     - `category`: Either `core` or `elective`
     - `cfu`: ECTS credits (number)
     - `semester`: e.g., `1st Semester` or `2nd Semester`
     - `hours`: Academic class hours (string, e.g., `48 Hours`)
3. **Commit & Pull Request**: Commit your changes and submit a Pull Request to the main repository. Once merged, GitHub Actions will automatically rebuild and deploy the live site.
