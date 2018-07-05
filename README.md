# gatsby-plugin-tawk

A simple plugin that adds the tawk live chat window [https://dashboard.tawk.to/#/admin] to every page of your Gatsby site.

sign up for a free account at [https://www.tawk.to/]



## How to use

1. Install using either npm or yarn:

```
yarn add gatsby-plugin-tawk
```

or

```
npm install gatsby-plugin-tawk
```

2. Add to ```gatsby-config.js```

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "YOUR_TAWK_ID",
        // get this from the tawk script widget
      },
    },
  ],
};
```