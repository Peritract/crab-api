const { Router } = require("express");

const { index, create, show } = require("../controllers/insight");

const insightRouter = Router();

insightRouter.get("/", index);
insightRouter.post("/", create);

module.exports = insightRouter;