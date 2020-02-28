const ig = require('instagram-scraping');

exports.fetchPosts = (req, res) => {
  const { tag } = req.params;

  const data = ig.scrapeTag(tag).then(data => data);
  const NO_OF_POSTS = 30;

  const sortByLike = data && data.medias.length > 0 && (data.medias.sort((a,b) => (a.like_count < b.like_count ? 1 : -1)).slice(0,NO_OF_POSTS));

  console.log('get "/api/posts" success');
  // console.log('get  sortByLike', sortByLike);

  return res.status(200).json(sortByLike);
};