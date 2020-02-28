const ig = require('instagram-scraping');

const fetchPosts = async (req, res) => {
  console.log('1 here');
  const { tag } = req.params;

  const posts = await ig.scrapeTag(tag);
  console.log('get  posts', posts);

  const NO_OF_POSTS = 30;

  const sortByLike = posts && posts.medias.length > 0 && (posts.medias.sort((a,b) => (a.like_count < b.like_count ? 1 : -1)).slice(0,NO_OF_POSTS));

  console.log('get "/api/posts" success');

  return res.status(200).json(sortByLike);
};

module.exports = {
  fetchPosts
}