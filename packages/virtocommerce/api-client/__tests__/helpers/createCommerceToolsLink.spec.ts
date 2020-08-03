import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import createCommerceToolsLink from './../../src/helpers/createCommerceToolsLink';

jest.unmock('./../../src/helpers/createCommerceToolsLink');
jest.mock('apollo-link-http');
jest.mock('apollo-link-context');
jest.mock('apollo-link');

describe('[virtocommerce-api-client] createCommerceToolsLink', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('builds an apollo link', async (done) => {
    (ApolloLink as any).mockImplementation((fn) => {
      const operation = { operationName: 'someOperation',
        variables: { draft: null } };

      fn(operation, (op) => [op]);

    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    setContext = jest.fn().mockImplementation((handler) => {
      handler(null, { headers: { test: 1 } }).then((res) => {
        expect(res).toEqual({ headers: { test: 1,
          authorization: 'Bearer access token' } });
        done();
      });
    });

    createCommerceToolsLink();

    expect(createHttpLink).toBeCalled();
    expect(setContext).toBeCalled();
  });
});
