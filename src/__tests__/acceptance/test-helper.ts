import {
  Client,
  createRestAppClient,
  givenHttpServerConfig,
} from '@loopback/testlab';
import {TodoApplication} from '../../application';

export async function setupApplication(): Promise<AppWithClient> {
  const app = new TodoApplication({
    rest: givenHttpServerConfig(),
  });

  await app.boot();
  await app.start();

  const client = createRestAppClient(app);

  return {app, client};
}

export interface AppWithClient {
  app: TodoApplication;
  client: Client;
}
