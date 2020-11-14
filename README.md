# Protect Line

An ES6 React [Next.js](https://nextjs.org/) project created for Protect Line.

2 types of page have been created:
- Home page
- 'Whole of Life' Landing page

The [BEM (Block Element Modifier)](http://getbem.com/) naming methodology has been used for class naming.

Images from [https://unsplash.com/](https://unsplash.com/), video from [https://www.pexels.com/](https://www.pexels.com/).

## Running the app

Install the dependencies.

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the homepage.

Open [http://localhost:3000/whole-of-life](http://localhost:3000/whole-of-life) in your browser to see the Whole of Life landing page.

## Unit tests

Jest/Enzyme tests located in `tests` folder.

Much more in-depth tests would be added for better coverage, if this was a production project.

Run:

```bash
npm run test
```

## Features across pages

- Randomly selected hero image on load of home page
- HTML5 video
- Callback form
- Quick quote form (custom range input)
- Protect Line branding/colours
- FAQ's using state management to show/hide
- Fully responsive
- Lazy-loading of images

## Browser Support

Both pages have ben tested for browser support in the below:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

## Time

The below explains the time taken on this project:

- 1 hour setup inc git repo, test setup, Next.js setup
- 1 hour writing unit tests
- 0.5 hours browser testing
- 0.5 hours optimisation
- 4 hours for home page
- 3 hours for 'Whole of Life' landing page

Total: 10 hours