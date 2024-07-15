import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { DELETE_USER, showUSer, deleteUser } from '../Store/Action/UserAction';
import { USER_SHOW } from '../Store/Action/UserAction';

// Set up mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('showUser', () => {
    it('creates USER_SHOW when fetching users has been done', async () => {
      const mockUsers = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo":[ {
                "lat": "-37.3159",
                "lng": "81.1496"
            }]
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    };
      fetchMock.mockResponseOnce(JSON.stringify(mockUsers));

      const expectedActions = [
        {  data: mockUsers }
      ];
      const store = mockStore({ users: [] });

      await store.dispatch(showUSer());
      const actions = store.getActions();
      console.log('Expected:', expectedActions[0]);
      console.log('Received:', actions[0].data[0]);
  
      expect(actions[0].data[0]).toEqual(expectedActions[0]);
      expect(fetchMock).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    });

    it('throws an error when the API call fails', async () => {
      fetchMock.mockRejectOnce(new Error('!Error in Api'));

      const store = mockStore({ users: [] });

      await expect(store.dispatch(showUSer())).rejects.toThrow('!Error in Api');
    });
  });

  describe('deleteUser', () => {
    it('creates DELETE_USER when deleting a user by email', () => {
      const email = 'Shanna@melissa.tv.com';
      const expectedActions = [
        { type: DELETE_USER, data: email }
      ];
      const store = mockStore({ users: [] });

      store.dispatch(deleteUser(email));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
