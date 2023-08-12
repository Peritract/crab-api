const Insight = require("../models/insight");

async function index (req, res) {
    const { limit, offset } = req.query;
    try {
        const data = await Insight.getAll(limit, offset);
        res.json(data);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({
            "error": true,
            "message": "Unable to retrieve insights from database."
        });
    }
}

async function create (req, res) {
    const { title, text, url } = req.body;
    try {
        if (typeof title != "string" || title.length < 1) {
            throw new Error("Cannot create an empty insight.");
        } else if (typeof text != "string" || text.length < 1) {
            throw new Error("Cannot create an empty insight.");
        } else if (typeof url != "string" || url.length < 1) {
            throw new Error("Cannot create an insight without a source.");
        }
        const createdInsight = await Insight.create(title, text, url);

        res.status(201).json(createdInsight);

    } catch (err) {
        console.log(err.message);
        res.status(400).json({
            "error": true,
            "message": `Unable to create insight.`
        });
    }
}

module.exports = {
    index, create
}