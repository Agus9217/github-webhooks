import express from "express";
import { GithubController } from "./github/controller";

interface Opt {
  port: number;
}

export class Server {
  private readonly app = express();
  private port: number;
  private controller = new GithubController();

  constructor({ port }: Opt) {
    this.port = port;
  }

  start() {
    this.app.use(express.json());

    this.app.post("/api/github", this.controller.webhookHandler);

    this.app.listen(this.port, () => {
      console.log(`Starting server on: http://localhost:${this.port}`);
    });
  }
}
