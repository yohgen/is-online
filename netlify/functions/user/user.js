exports.handler = async (event) => {
  const queryParams = event.queryStringParameters;

  let res = {};

  if (queryParams.info == 1) {
    res = {
      id: 1,
      fullName: 'Jørgen Ταυ',
      moniker: 'yohgen',
    };
  }

  if (queryParams.tech == 1) {
    res = Object.assign(res, {
      tech: [
        {
          name: 'HTML5',
          percent: 100,
          frontEnd: true,
          devicon: true,
          deviconClass: 'devicon-html5-plain',
          link: null,
        },
        {
          name: 'CSS3',
          percent: 75,
          frontEnd: true,
          devicon: true,
          deviconClass: 'devicon-css3-plain',
          link: null,
        },
        {
          name: 'JavaScript',
          percent: 75,
          frontEnd: true,
          devicon: true,
          deviconClass: 'devicon-javascript-plain',
          link: null,
        },
        {
          name: 'React',
          percent: 50,
          frontEnd: true,
          devicon: true,
          deviconClass: 'devicon-react-original',
          link: null,
        },
        {
          name: 'Redux',
          percent: 0,
          frontEnd: true,
          devicon: true,
          deviconClass: 'devicon-redux-original',
          link: null,
        },
        {
          name: 'webpack',
          percent: 0,
          frontEnd: true,
          devicon: true,
          deviconClass: 'devicon-webpack-plain',
          link: null,
        },
        {
          name: 'Node.js',
          percent: 75,
          frontEnd: false,
          devicon: true,
          deviconClass: 'devicon-nodejs-plain',
          link: null,
        },
        {
          name: 'Express.js',
          percent: 75,
          frontEnd: false,
          devicon: true,
          deviconClass: 'devicon-express-original',
          link: null,
        },
        {
          name: 'MongoDB',
          percent: 50,
          frontEnd: false,
          devicon: true,
          deviconClass: 'devicon-mongodb-plain',
          link: null,
        },
        {
          name: 'PostgreSQL',
          percent: 75,
          frontEnd: false,
          devicon: true,
          deviconClass: 'devicon-postgresql-plain',
          link: null,
        },
        {
          name: 'TypeScript',
          percent: 0,
          frontEnd: false,
          devicon: true,
          deviconClass: 'devicon-typescript-plain',
          link: null,
        },
      ],
    });
  }

  if (queryParams.contacts == 1) {
    res = Object.assign(res, {
      contacts: [
        {
          type: 'email',
          provider: 'Gmail',
          link: null,
        },
        {
          type: 'social',
          provider: 'Twitter',
          link: 'https://twitter.com/enshightenment',
        },
        {
          type: 'code',
          provider: 'GitHub',
          link: 'https://github.com/yohgen',
        },
      ],
    });
  }

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};
