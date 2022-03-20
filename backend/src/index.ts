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
 app.get("/autocomplete", async (req, res) =>{
  try {
    const { default: data } = await import("./data/smarty.json");
    const { search } = req.query;

    const filtered = data
        .filter((obj) =>
            obj.displayname
                .toLowerCase()
                .includes(search.toString().toLowerCase() ?? "")
        )
        .slice(0, 10);

    return res.status(200).json({
        data: filtered,
        count: filtered.length,
    });
} catch (e) {
    return res.status(500).json({ message: "error in autocomplete function" });
}
 })

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}.`);
});