const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT||3000;

app.get('/',(req,res)=> {
  res.send('<h1>Welcome to the Shows App</h1>')
})

app.post('/',(req,res)=>{

  const {payload} = req.body;
  
  if (payload)
      {
        const filteredShows = payload.filter(show=>{
          return show.drm && show.episodeCount > 0
        })
        const showFilteredFields = filteredShows.map(show=>{
          return {image: show.image.showImage,slug: show.slug,title: show.title}
        })
        res.send({response: showFilteredFields})
      }
  else
      {
        res.set('Content-Type','application/json').status(400).send({error:'Could not decode request: JSON parsing failed'})
      }
  
})
app.listen(PORT,()=>console.log(`Listening on Port: ${PORT}`));