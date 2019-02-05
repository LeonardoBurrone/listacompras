import axios from 'axios';

export const services = {
  getImages: (product) => {
    const params = {
      key: 'AIzaSyBsYUOx7BlcE4EbM2tRG5eSg6UjPgsGetY',
      cx: '017809477330920216038:ftqrbh0nhls',
      searchType: 'image',
      lr: 'lang_pt',
      num: 1,
      q: product
    };
    return axios.get('https://www.googleapis.com/customsearch/v1', {params})
      .then(result => result.data.items[0].link)
      .catch(err => err);
  }
};