import express from "express";

interface Opt {
  port: number;
}

export class Server {
  private readonly app = express();
  private port: number;

  constructor({ port }: Opt) {
    this.port = port;
  }

  start() {
    this.app.post("/api/github", (req, res) => {
      res.send('Hola desde github url')
    });

    this.app.listen(this.port, () => {
      console.log(`Starting server on: http://localhost:${this.port}`);
    });
  }
}
