import express from 'express';

const app = express();
const port = 3001;

app.get('/', (_req, res) => {
    res.send('<h1>Congratulations 🎉 You got the WCC 2022 backend server running. Good luck with your task 🙌</h1>');
})

/**
 * Example endpoint
 *  consumes: query parameter "name"
 *  returns: a JSON response
 */
app.get('/greeting', (req, res) => {
    res.json({ 'greeting': `Hello, ${req.query.name || 'World'} 👋`});
})

/**
 * TODO: Add your autocompleter endpoint below this component
 */
 app.get("/autocomplete", async (req, res) => {
  let obj = await import('./data/smarty.json');
  let obj2 = obj.default;

  const searchField = "displayname";

  const searchVal = req.query.search?.toString() || 'Vilnius';

  var reg = new RegExp(searchVal)
  const results = obj2.filter(function(term) {
      if (term[searchField].match(reg) && this.count < 10) {
      this.count += 1;
        return term;
      }
  }, {count: 0});

  return res.json({
    search: searchVal,
    values: results.length,
    results: results
  });
});

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}.`);
});