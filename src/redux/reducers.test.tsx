import React from 'react';
import { render, screen } from '@testing-library/react';
import { setVictimsAC } from './actions';
import { victimsReducer } from './reducers';
import { victimType } from '../types';

test('Increment victims after add operation', () => {
  const victim: victimType = {
    pk: 3,
    model: 'victims.victim',
    fields: {
      gender: 1,
      user_id: 1,
      is_complete: 0,
      firstname: 'sergey',
      lastname: 'kalinin',
      address: 'popova 12 23',
      birthdate: '1 okt 1980',
      created_date: '31 dec 2020',
    },
  }

  const action = setVictimsAC([victim])

  const state = {
    victims: [
      {
        pk: 1,
        model: 'victims.victim',
        fields: {
          gender: 1,
          user_id: 1,
          is_complete: 0,
          firstname: 'sergey1',
          lastname: 'kalinin1',
          address: 'popova 12 23',
          birthdate: '1 okt 1980',
          created_date: '31 dec 2020',
        },
      },
      {
        pk: 2,
        model: 'victims.victim',
        fields: {
          gender: 1,
          user_id: 1,
          is_complete: 0,
          firstname: 'sergey2',
          lastname: 'kalinin2',
          address: 'popova 12 23',
          birthdate: '1 okt 1980',
          created_date: '31 dec 2020',
        },
      },
    ]
  }

  const newState = victimsReducer(state, action)

  // expect(newState.victims.length).toBe(1);
  expect(newState).toEqual([
    {
      pk: 1,
      model: 'victims.victim',
      fields: {
        gender: 1,
        user_id: 1,
        is_complete: 0,
        firstname: 'sergey1',
        lastname: 'kalinin1',
        address: 'popova 12 23',
        birthdate: '1 okt 1980',
        created_date: '31 dec 2020',
      },
    },
    {
      pk: 2,
      model: 'victims.victim',
      fields: {
        gender: 1,
        user_id: 1,
        is_complete: 0,
        firstname: 'sergey2',
        lastname: 'kalinin2',
        address: 'popova 12 23',
        birthdate: '1 okt 1980',
        created_date: '31 dec 2020',
      },
    },
    {
      pk: 3,
      model: 'victims.victim',
      fields: {
        gender: 1,
        user_id: 1,
        is_complete: 0,
        firstname: 'sergey',
        lastname: 'kalinin',
        address: 'popova 12 23',
        birthdate: '1 okt 1980',
        created_date: '31 dec 2020',
      },
    },
  ])
})
