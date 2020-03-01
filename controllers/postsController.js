const ig = require('instagram-scraping');

const fetchPosts = async (req, res) => {
  const { tag } = req.params;

  try{
    const posts = await ig.scrapeTag(tag);

    const NO_OF_POSTS = 30;

    const sortByLike = posts && posts.medias.length > 0 && (posts.medias.sort((a,b) => (a.like_count < b.like_count ? 1 : -1)).slice(0,NO_OF_POSTS));

    console.log('get "/api/posts" success');

    res.status(200).json(sortByLike);
  }
  catch(err) {
    console.log(err);
    res.sendStatus(500);
  };
};

module.exports = {
  fetchPosts
};