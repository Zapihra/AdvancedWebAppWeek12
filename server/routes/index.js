var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
  name: {type: String},
  author: {type: String},
  pages: {type: Number}
});

const Book = mongoose.model('Books', booksSchema)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/book', function(req,res) {
  var body = req.body
  console.log(body)

  const book = new Book({
    name: body.name,
    author: body.author,
    pages: body.pages
  })
  book.save()

  res.send("ok")
})


module.exports = router;
