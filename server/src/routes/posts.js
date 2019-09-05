const express = require('express')
const router = express.Router()
const Post = require('../models/post-model.js')

router.post('/posts', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })

  post.save((err,data) => {
    if(err) {
      console.log(err)
    } else {
      res.send({
        success: true,
        message: `Post with ID_${data._id} saved successfully`
      })
    }
  })
})

router.get('/posts', (req, res) => {
  Post.find({}, (err, result) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.send({posts: result})
    }
  }).sort({ _id: -1 })
})

router.get('/post/:id', (req, res) => {
  Post.findOne({title: req.params.id}, (err, post) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.send(post)
    }
  })
})

router.put('/post/:id', (req, res) => {
  Post.findOne({title: req.params.id}, (err, post) => {
    if(err) {
      return console.log(err)
    } else {
      if (req.body.title) {
        post.title = req.body.title
      }
      if (req.body.description) {
        post.description = req.body.description
      }

      post.save(err => {
        if(err) {
          res.sendStatus(500)
        } else {
          res.sendStatus(200)
        }
      })
    }
  })
})

router.delete('/post/:id', (req, res) => {
  Post.remove({title: req.params.id}, (err, result) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.sendStatus(200)
    }
  })
})

module.exports = router
