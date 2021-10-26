import {Pin} from './types/pin';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id?',
  RoomNotLogged = '/offer-not-logged/:id?',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export const PinIcon: Pin = {
  Path: 'project/public/img/pin.svg',
  Size: [28, 40],
  Anchor: [14, 40],
};

export const PinIconActive: Pin = {
  Path: 'project/public/img/pin-active.svg',
  Size: [28, 40],
  Anchor: [14, 40],
};

export const LINK_TO_MAP = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
