const ig = require('instagram-scraping');

const fetchPosts = async (req, res) => {
  const { tag } = req.params;

  try{
    // https://www.instagram.com/web/search/topsearch/?context=blended&query=avengers
    // https://www.instagram.com/explore/tags/prague/
    const posts = await ig.scrapeTag(tag)
    .then(data => {
      console.log('data 1', data.total);
      return data;
    })
    .catch(err => {
      console.log(`ig scrapeTag [tag: ${tag}] error`, err);
      return [];
    });

    console.log('posts', posts.total);
    
    const NO_OF_POSTS = 30;
    
    let sortByLike = [];

    if(posts) {
      sortByLike = posts && posts.medias.length > 0 && (posts.medias.sort((a,b) => (a.like_count < b.like_count ? 1 : -1)).slice(0,NO_OF_POSTS));
    }

    console.log(`get "/api/posts" [tag: ${tag}] success`);

    res.status(200).json(sortByLike);
  }
  catch(err) {
    console.log('fetchPosts err', err);
    res.sendStatus(500);
  };
};

module.exports = {
  fetchPosts
};