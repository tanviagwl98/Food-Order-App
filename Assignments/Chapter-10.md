# Chapter - 10

### Who maintains Material UI?
Google


### Explain tailwind.config.js
This file is the configuration file for Tailwind CSS framework. It allows you to customize the default settings for the framework, like colors, typography etc.

The file exports javascript object with various options that can be used to configure the framework. These are:
1. theme: The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.
e.g.
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
  
2. content: The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.
3. plugins: The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
     ]

### Explore different ways of writing CSS

1. Inline
2. Tailwind
3. Styled Component CSS
4. Frameworks like Material UI, Chakra etc

### How to configure tailwind css?
1. npm install tailwind postcss
2. npx tailwind init
3. Change index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
4. Add in .postcssrc file: plugins: "tailwindcss"{}

### Why do we have .postcssrc file?
The ".postcssrc" file in a React project is used to configure the PostCSS tool, which is a CSS processor that allows for the use of modern CSS syntax and features in your stylesheets. It enables the use of plugins and tools to transform and enhance your CSS, making the development process faster and more efficient. The ".postcssrc" file contains the rules and plugins that will be used by PostCSS during the build process, which in turn can be utilized in the React project's styling.

