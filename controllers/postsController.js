const ig = require('instagram-scraping');

const fetchPosts = async (req, res) => {
  console.log('1 here');
  const { tag } = req.params;

    const posts = await ig.scrapeTag(tag);
    console.log('get  posts', posts);
  
    const NO_OF_POSTS = 30;
  
    // const sortByLike = data && data.medias.length > 0 && (data.medias.sort((a,b) => (a.like_count < b.like_count ? 1 : -1)).slice(0,NO_OF_POSTS));
  
    console.log('get "/api/posts" success');
    console.log('get  tag', tag);
    // console.log('get  sortByLike', sortByLike);
  console.log('2 mid');

  console.log('3 end');

  return res.status(200).json(tag);
};

module.exports = {
  fetchPosts
}