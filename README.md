# Redux Actions and Reducers Testing with Jest and Redux Mock Store

This repository contains tests for Redux actions and reducers using Jest and Redux Mock Store. The main focus is on testing the following actions:
- `showUser`
- `deleteUser`

## Setting Up Mock Store

The mock store is configured using `redux-mock-store` and `redux-thunk` middleware. The `jest-fetch-mock` package is used to mock fetch requests.

```javascript
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { DELETE_USER, showUser, deleteUser } from '../Store/Action/UserAction';
import { USER_SHOW } from '../Store/Action/UserAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


1. Testing Successful Fetching of Users (showUser)
This test checks if the showUser action correctly dispatches the USER_SHOW action when the API call is successful.

A mock response is provided to simulate a successful API call.
The expected action with the fetched user data is compared against the actual dispatched actions.


describe('showUser', () => {
  it('creates USER_SHOW when fetching users has been done', async () => {
    const mockUsers = {
      "id": 1,
      "name": "Leanne Graham",
      // other user data
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockUsers));

    const expectedActions = [
      { type: USER_SHOW, data: mockUsers }
    ];
    const store = mockStore({ users: [] });

    await store.dispatch(showUser());
    const actions = store.getActions();

    expect(actions[0].data[0].id).toEqual(expectedActions[0].data.id);
  });
});
2. Testing API Error Handling (showUser)
This test ensures that the showUser action correctly handles API errors by throwing an error when the API call fails.

The mock fetch request is set up to reject with an error.
The test verifies that the dispatched action throws the expected error.

describe('showUser', () => {
  it('throws an error when the API call fails', async () => {
    fetchMock.mockRejectOnce(new Error('!Error in Api'));

    const store = mockStore({});

    await expect(store.dispatch(showUser())).rejects.toThrow('!Error in Api');
  });
});


3. Testing Deleting a User (deleteUser)
This test checks if the deleteUser action correctly dispatches the DELETE_USER action with the provided email.

The action is dispatched with a sample email.
The expected action with the email data is compared against the actual dispatched actions.


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
