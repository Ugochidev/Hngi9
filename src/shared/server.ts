import Database from "../config/database";

(async () => {
  try {
    const App = require("./app").default;
    const database = new Database();
    await database.connect();
    const app = new App();
    app.listen();
  } catch (err: any) {
    console.error(
      "Something went wrong when initializing the server:\n",
      err.stack
    );
  }
})();
