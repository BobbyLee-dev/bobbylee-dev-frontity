const settings = {
  name: "bobbylee-dev",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "frontity-sapphire-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://jsnation2020.frontity.org/",
          // url: 'https://sapphireapi.com/bobby',
          // homepage: '/home',
          // postsPage: '/blog',
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
