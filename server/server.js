const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});

server.post("/items/:id/mark", (req, res) => {
    const id = req.params.id;

    const isDone = req.body?.isDone

    if (isDone === undefined) {
        res.status(400).json({ error: "Missing isDone parameter" });
    }

    const db = router.db; // lowdb instance
    const todo = db.get("items").find({ id: Number(id) }).value();

    if (!todo) {
        res.status(404).json({ error: "Todo item not found" });
    }

    if (todo.isDone && isDone) {
        res.status(204).send()
        return
    }

    if (isDone) {
        db.get("items")
            .find({ id: Number(id) })
            .assign({ isDone: true, finishedAt: Date.now() })
            .write();
    }
    else {
        db.get("items")
            .find({ id: Number(id) })
            .assign({ isDone: false, finishedAt: undefined })
            .write();
    }

    res.status(204).send()
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
