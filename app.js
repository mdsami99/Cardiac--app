const express = require('express');
const app = express();   // ⚠️ VERY IMPORTANT ()

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

