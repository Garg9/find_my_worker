const path = require('path');
const ejs = require('ejs');

module.exports = (req, res) => {
  const viewsDir = path.join(__dirname, '../../views/admin');
  const filePath = path.join(viewsDir, 'admin_login.ejs');

  // Pass errMsg, defaulting to null if not provided
  const data = {
    errMsg: req.query.error || null, // Can be adjusted based on error source
  };

  ejs.renderFile(filePath, data, (err, html) => {
    if (err) {
      console.error('❌ Error rendering admin login page:', err.message, err.stack);
      res.status(500).send(`Error rendering admin login page: ${err.message}`);
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
    }
  });
};
