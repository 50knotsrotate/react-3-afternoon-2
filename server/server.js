const express = require('express');
const app = express();
const data = require('./db.json')

const PORT = 3001;

const getFeaturedUsers = (req, res) => {
    console.log(data)
    let featured = data.blogs.filter(post => post.featured == true)
    res.status(200).send(featured)
}

const getBlogById = (req, res) => { 
    let blog = data.blogs.filter(post => post.id == req.params.id)
    blog.length ? res.status(200).send(blog[0]): res.send('Oops! Looks like that does not exist, you derp')
}

app.get('/api/featured', getFeaturedUsers)
app.get('/api/blog/:id', getBlogById)

app.listen(PORT, () => { 
    console.log(`Server started on port ${PORT}`)
})
