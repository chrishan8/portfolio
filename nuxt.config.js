const axios = require('axios')

const pkg = require('./package')
require('dotenv').config()

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/portfolio/'
  }
} : {}

const db = process.env.DEPLOY_ENV === 'GH_PAGES' ? 'https://firestore.googleapis.com/v1/projects/chris-chat-2e541/databases/(default)/documents/projects' : 'https://firestore.googleapis.com/v1/projects/portfolio-239722/databases/(default)/documents/projects';

module.exports = {
  ...routerBase,
  mode: 'universal',
  env: {
    firebaseConfig: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/firebaseConfig.js',
    '~/plugins/vue-form',
    '~/plugins/vue-lazyload',
    '~/plugins/vue-mask',
    '~/plugins/sanitize'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/moment',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }, {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  styleResources: {
    scss: [
      'assets/scss/_global_styles.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  generate: {
    routes: function() {
      return axios.get(db)
        .then(res => {
          return res.data.documents.map(project => {
            return '/Projects/' + project.name.substr(project.name.lastIndexOf('/') + 1)
          })
        })
    }
  },
  sitemap: {
    hostname: 'https://nerdfoundry.org'
  }
}
