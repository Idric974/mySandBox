const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const WooCommerce = new WooCommerceRestApi({
  url: process.env.URL,
  consumerKey: process.env.CONSUMERKEY,
  consumerSecret: process.env.CONSUMERSECRET,
  version: process.env.VERSION,
  queryStringAuth: process.env.QUERYSTRINGAUTH,
});

const datas = [
  { name: 'Evenements / Ingénierie d éclairage' },
  { name: 'Evenements / Médias et ingénierie' },
  { name: 'Evenements / Effets spéciaux' },
  { name: 'Evenements / Ingénierie du son' },
  { name: 'Evenements / Sociétés de production' },
  { name: 'Accessoires Décoration / Fleurs et décoration' },
  { name: 'Accessoires Décoration / Sols / planchers de cavité' },
  { name: 'Accessoires Décoration / Construction de la décoration' },
  { name: 'Accessoires Décoration / Systèmes à double étage' },
  { name: 'Accessoires Décoration / Graphiques, signalisation, bannières' },
  { name: 'Accessoires Décoration / Mobilier loué / aménagement' },
  { name: 'Accessoires Décoration / Systèmes d escalier' },
  { name: 'Accessoires Décoration / Tissus, films, voiles' },
  { name: 'Accessoires Décoration / Systèmes muraux, systèmes de plafond' },
];

datas.forEach((data) => {
  WooCommerce.post('products/categories', data)
    .then((response) => {
      console.log(
        '✅ %c SUCCÈS Create categories ==> id :',
        'color: green',
        response.data.id
      );
    })
    .catch((error) => {
      console.log(
        '❌ %c ERREUR Create categories :',
        'color: orange',
        error.response.data
      );
    });
});
