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

### 
