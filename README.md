<p align="center" style="color: #343a40">
  <img src="https://raw.githubusercontent.com/abodmicheal/react-js-stickynav/main/sticky%20logo.png" alt="stickyNav logo" height="150" width="150">
  <h1 align="center">react-js-stickynav</h1>
</p>
<p align="center" style="font-size: 1.2rem;">A simple react js nav bar onscroll</p>

[![NPM](https://img.shields.io/npm/v/react-js-stickynav.svg)](https://www.npmjs.com/package/react-js-stickynav) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

<p align="center">
  <img src="https://media.giphy.com/media/zX9bxvB59xUnuudEMm/giphy.gif">
</p>

## Install

```bash
npm install --save react-js-stickynav
```

## Usage

length = navigation length , which is the length you want you want your sticky Nav to appear

```jsx
import React from 'react'
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'

const App = () => {
  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          z-index: 2000;
          padding: 20px;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          z-index: 2000;
          background: #ffffff;
          width: 100%;
          border-bottom: 1px solid #dddddd;
        }
        .styl {
          padding-top: 80px;
        }
      `}</style>
    )
  }
  return (
    <div>
      {style()}
      <StickyNav length='40'>insert your Navbar Component here</StickyNav>
      <div className='styl'>
        <h1>
          Creating a Single-Page App in React using React Router by kirupa |
          filed under Learning React Now that you've familiarized yourself with
          the basics of how to work with React, let's kick things up a few
          notches. What we are going to do is use React to build a simple
          single-page app (also referred to as SPA by the cool kids...and people
          living in Scandinavia). Like we talked about in our React introduction
          forever ago, single-page apps are different from the more traditional
          multi-page apps that you see everywhere. The biggest difference is
          that navigating a single-page app doesn't involve going to an entirely
          new page. Instead, your pages (commonly known as views in this
          context) typically load inline within the same page itself: When you
          are loading content inline, things get a little challenging. The hard
          part is not loading the content itself. That is relatively easy. The
          hard part is making sure that single-page apps behave in a way that is
          consistent with what your users are used to. More specifically, when
          users navigate your app, they expect that: The URL displayed in the
          address bar always reflects the thing that they are viewing. They can
          use the browser's back and forward buttons...successfully. They can
          navigate to a particular view (aka deep link) directly using the
          appropriate URL. With multi-page apps, these three things come for
          free. There is nothing extra you have to do for any of it. With
          single-page apps, because you aren't navigating to an entirely new
          page, you have to do real work to deal with these three things that
          your users expect to just work. You need to ensure that navigating
          within your app adjusts the URL appropriately. You need to ensure your
          browser's history is properly synchronized with
        </h1>
        <h5>
          Creating a Single-Page App in React using React Router by kirupa |
          filed under Learning React Now that you've familiarized yourself with
          the basics of how to work with React, let's kick things up a few
          notches. What we are going to do is use React to build a simple
          single-page app (also referred to as SPA by the cool kids...and people
          living in Scandinavia). Like we talked about in our React introduction
          forever ago, single-page apps are different from the more traditional
          multi-page apps that you see everywhere. The biggest difference is
          that navigating a single-page app doesn't involve going to an entirely
          new page. Instead, your pages (commonly known as views in this
          context) typically load inline within the same page itself: When you
          are loading content inline, things get a little challenging. The hard
          part is not loading the content itself. That is relatively easy. The
          hard part is making sure that single-page apps behave in a way that is
          consistent with what your users are used to. More specifically, when
          users navigate your app, they expect that: The URL displayed in the
          address bar always reflects the thing that they are viewing. They can
          use the browser's back and forward buttons...successfully. They can
          navigate to a particular view (aka deep link) directly using the
          appropriate URL. With multi-page apps, these three things come for
          free. There is nothing extra you have to do for any of it. With
          single-page apps, because you aren't navigating to an entirely new
          page, you have to do real work to deal with these three things that
          your users expect to just work. You need to ensure that navigating
          within your app adjusts the URL appropriately. You need to ensure your
          browser's history is properly synchronized with
        </h5>
      </div>
    </div>
  )
}

export default App
```

  <img src="https://raw.githubusercontent.com/abodmicheal/react-js-stickynav/main/Capture.PNG">
  <img src="https://raw.githubusercontent.com/abodmicheal/react-js-stickynav/main/Capture2.PNG">

## License

MIT © [abodmicheal](https://github.com/abodmicheal/react-js-stickynav)
