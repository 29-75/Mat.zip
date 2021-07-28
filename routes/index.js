var axios = require('axios');
var express = require('express');
var router = express.Router();

const REST_API_KEY = '45669799b63a16873321cdffa77a8878'

/* GET APIs */
router.get('/', function (req, res, next) {
  res.send({ title: 'get stores with x,y coordinate', path: '/stores' });
});

/* GET store listing.F
localhost:3000/stores\?x=127.06283102249932\&y=37.514322572335935\&radius=20000 */
router.get('/stores', function (req, res, next) {
  var x = req.query.x
  var y = req.query.y
  var radius = req.query.radius
  axios.get(`https://dapi.kakao.com/v2/local/search/category.json?radius=${radius}&y=${y}&x=${x}&size=5&category_group_code=FD6`, {
    headers: {
      Authorization: `KakaoAK ${REST_API_KEY}`
    }
  }).then((Response) => {
    console.log(Response.data)
    res.send(Response.data);
  });
});

module.exports = router;
