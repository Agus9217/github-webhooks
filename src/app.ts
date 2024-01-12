import { Server } from "./presentation";
import { envs } from "./config";

(() => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
  });

  server.start();
}
