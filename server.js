const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Middleware to Check for Invalid/Bad Request
app.use((err, req, res, next) => {
  if (err) {
    res.set('Content-Type', 'application/json')
    res.status(400).send({error:'Could not decode request: JSON parsing failed'})
  } else {
    next()
  }
})

// A GET route as a welcome page
app.get('/',(req,res)=> {
  res.send('<h1>Welcome to the Shows App</h1>')
})

// POST route to work with request payload
app.post('/',(req,res)=>{
  
  const {payload} = req.body;
  
  // Checking whether request body object has payload 
  if (payload)
      {
        // Filtering shows based on drm and episodecount
        const filteredShows = payload.filter(show=>{
          return show.drm && show.episodeCount > 0
        })

        // Getting only the required fields from filtered shows
        const showFilteredFields = filteredShows.map(show=>{
          return {image: show.image.showImage,slug: show.slug,title: show.title}
        })

        res.send({response: showFilteredFields})
      }
  else
      {
        res.set('Content-Type', 'application/json')
        res.status(400).send({error:'Could not decode request: JSON parsing failed'})
      }
  
})

module.exports = app;