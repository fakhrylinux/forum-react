import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer.js';

/**
 * test scenario for threadsReducer
 *
 * - threadsReducer function
 *   - should return the initial state when given by unknown action
 *   - should return the threads when given by RECEIVE_THREADS action
 *   - should return the threads with the new thread when given by ADD_THREAD action
 *   - should return the threads with upvoted thread when given by UPVOTE_THREAD action
 *   - should return the threads with downvoted thread when given by DOWNVOTE_THREAD action
 *   - should return the threads with neutralize thread when given by NEUTRALIZE_THREAD action
 */

describe('threadsReducer', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            'id': 'thread-1',
            'title': 'Thread Pertama',
            'body': 'Ini adalah thread pertama',
            'category': 'General',
            'createdAt': '2021-06-21T07:00:00.000Z',
            'ownerId': 'users-1',
            'upVotesBy': [],
            'downVotesBy': [],
            'totalComments': 0
          },
          {
            'id': 'thread-2',
            'title': 'Thread Kedua',
            'body': 'Ini adalah thread kedua',
            'category': 'General',
            'createdAt': '2021-06-21T07:00:00.000Z',
            'ownerId': 'users-2',
            'upVotesBy': [],
            'downVotesBy': [],
            'totalComments': 0
          }
        ]
      }
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        'id': 'thread-1',
        'title': 'Thread Pertama',
        'body': 'Ini adalah thread pertama',
        'category': 'General',
        'createdAt': '2021-06-21T07:00:00.000Z',
        'ownerId': 'users-1',
        'upVotesBy': [],
        'downVotesBy': [],
        'totalComments': 0
      }];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread:{
          'id': 'thread-2',
          'title': 'Thread Kedua',
          'body': 'Ini adalah thread kedua',
          'category': 'General',
          'createdAt': '2021-06-21T07:00:00.000Z',
          'ownerId': 'users-2',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0
        }
      }
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with upvoted thread when given by UPVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        'id': 'thread-1',
        'title': 'Thread Pertama',
        'body': 'Ini adalah thread pertama',
        'category': 'General',
        'createdAt': '2021-06-21T07:00:00.000Z',
        'ownerId': 'users-1',
        'upVotesBy': [],
        'downVotesBy': [],
        'totalComments': 0
      }
    ];

    const action = {
      type: 'UPVOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1'
      }
    };

    // action: upvote thread
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId]
      }
    ]);
  });

  it('should return the threads with downvoted thread when given by DOWNVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        'id': 'thread-1',
        'title': 'Thread Pertama',
        'body': 'Ini adalah thread pertama',
        'category': 'General',
        'createdAt': '2021-06-21T07:00:00.000Z',
        'ownerId': 'users-1',
        'upVotesBy': [],
        'downVotesBy': [],
        'totalComments': 0
      }
    ];

    const action = {
      type: 'DOWNVOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1'
      }
    };

    // action: upvote thread
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId]
      }
    ]);
  });

  it('should return the threads with neutralize thread when given by NEUTRALIZE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        'id': 'thread-1',
        'title': 'Thread Pertama',
        'body': 'Ini adalah thread pertama',
        'category': 'General',
        'createdAt': '2021-06-21T07:00:00.000Z',
        'ownerId': 'users-1',
        'upVotesBy': ['users-1'],
        'downVotesBy': [],
        'totalComments': 0
      }
    ];

    const action = {
      type: 'NEUTRALIZE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1'
      }
    };

    // action: upvote thread
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: []
      }
    ]);
  });
});
