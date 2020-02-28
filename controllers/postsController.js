const ig = require('instagram-scraping');

exports.fetchPosts = async (req, res) => {
  const { tag } = await req.params;

  const data = await ig.scrapeTag(tag);
  const NO_OF_POSTS = 30;

  const sortByLike = data && data.medias.length > 0 && (data.medias.sort((a,b) => (a.like_count < b.like_count ? 1 : -1)).slice(0,NO_OF_POSTS));

  console.log('get "/api/posts" success');
  // console.log('get  sortByLike', sortByLike);

  return res.status(200).json(sortByLike);
};