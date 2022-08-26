import { DISPLAYALLUSERS_EVENT,DISPLAYUSERID_EVENT } from '../../data/constants.js';
import {getallusers,checkuserid } from '../handlers/handler.js';

export const DisplayAllUsersListener = (value) => {
  value.addEventListener(DISPLAYALLUSERS_EVENT, getallusers);
};

export const DisplayByIdListener = (value) => {
    value.addEventListener(DISPLAYUSERID_EVENT, checkuserid);
  };