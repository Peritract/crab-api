const db = require("../database/connect");

class Insight {

    constructor({ insight_id, insight_title, insight_text, insight_source_url, created_at }) {
        this.id = insight_id;
        this.title = insight_title;
        this.text = insight_text;
        this.url = insight_source_url;
        this.at = created_at;
    };

    static async getAll(limit, offset) {
        if (!limit || !parseInt(limit) || limit < 1 || limit > 50) {
            limit = 20;
        }
        if (!offset || !parseInt(offset) || offset < 1) {
            offset = 0;
        }
        const res = await db.query(`SELECT *
                                    FROM insight
                                    LIMIT $1
                                    OFFSET $2;`, [limit, offset]);
        return res.rows.map(r => new Insight(r));
    };

    static async create(title, text, url) {
        const res = await db.query("INSERT INTO insight (insight_title, insight_text, insight_source_url) VALUES ($1, $2) RETURNING *;",
            [title, text, url]);
        if (res.rows.length != 1) {
            throw new Error("Unable to create insight.")
        }
        return new Insight(res.rows[0]);
    }
};



module.exports = Insight;