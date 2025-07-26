# Rust Game Server Website

A modern, responsive website for a Rust game server built with Next.js and TailwindCSS.

![Rust Server Website](https://i.imgur.com/example.png)

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Server Information**: Display server status, features, and wipe schedule
- **Server Rules**: Clear presentation of server rules
- **Connection Details**: Easy-to-copy server connection information
- **Dark Theme**: Rust-inspired dark theme with the iconic rusty orange accent color

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/rust-server-website.git
cd rust-server-website
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## Customization

### Server Information

Update the server information in `src/app/page.tsx`:

- Server status
- Player count
- Wipe dates
- Server features
- Connection details

### Styling

The website uses TailwindCSS for styling. The main color scheme is defined in `src/app/globals.css`.

The primary accent color is `#B7410E` (Rust orange).

### Images

- `/public/rust-logo.svg` - The Rust logo displayed in the header
- `/public/server-status.svg` - The server status indicator
- `/public/favicon.svg` - The website favicon

## Deployment

### Docker

The project includes a Dockerfile for easy deployment. Build and run the Docker image:

```bash
docker build -t rust-server-website .
docker run -p 3000:3000 rust-server-website
```

### Static Export

You can also export the website as static HTML:

```bash
pnpm build
```

The static files will be generated in the `out` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Built with [Next.js](https://nextjs.org)
- Styled with [TailwindCSS](https://tailwindcss.com)
- Rust is a game by [Facepunch Studios](https://facepunch.com/rust)
