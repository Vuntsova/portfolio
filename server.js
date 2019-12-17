const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join('client/public')));

//Serve Statick assets if in production

if (process.env.NODE_ENV === 'production') { 
  app.use(express.static('client/public'));
  app.get("*", (req, res) => { 
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
