const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// gets back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// gets back a specific posts
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// creates a new post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// deletes a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.remove({ _id: req.params.id });
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// update a specific post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
