## Getting Started

## Installation

To set up and run this application, follow these steps:

1. Navigate to your project module and open a terminal.

2. Install the required dependencies using npm:

   ```bash
   npm install
   ```

3. Install

```bash
npx -p @storybook/cli sb init

```

First, run the development server:

```bash
npm run dev

```

As in the project we're useing tailwind css so

```bash

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


```

Then there will add a file named tailwind.config.js in that file put

```bash

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

````
Second, to see the docuomentation run:

```bash
npm run storybook
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
