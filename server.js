express = require('express')

app = express()

const PORT = process.env.PORT || 7545;

app.use(express.static(__dirname+'/client'));

if (!module.parent) { 
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}.`);
    });
  }
