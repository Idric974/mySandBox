require('dotenv').config();

const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const WooCommerce = new WooCommerceRestApi({
  url: process.env.URL,
  consumerKey: process.env.CONSUMERKEY,
  consumerSecret: process.env.CONSUMERSECRET,
  version: process.env.VERSION,
  queryStringAuth: process.env.QUERYSTRINGAUTH,
});

const data = {
  create: [
    {
      name: 'PRODUIT 123',
      type: 'simple',
      regular_price: '21.99',
      virtual: true,
      downloadable: true,
      downloads: [
        {
          name: 'Woo Single',
          file: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg',
        },
      ],
      categories: [
        {
          id: 44,
        },
      ],
      images: [
        {
          src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg',
        },
      ],
    },
    {
      name: 'PRODUIT 124',
      type: 'simple',
      regular_price: '21.99',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
      short_description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      categories: [
        {
          id: 44,
        },
      ],
      images: [
        {
          src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg',
        },
        {
          src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg',
        },
      ],
    },
  ],
};

WooCommerce.post('products/batch', data)
  .then((response) => {
    console.log(
      '✅ %c SUCCÈS Create categories ==> id :',
      'color: green',
      response.data
    );
  })
  .catch((error) => {
    console.log(
      '❌ %c ERREUR Create categories :',
      'color: orange',
      error.response.data
    );
  });
