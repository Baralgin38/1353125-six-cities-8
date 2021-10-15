import {Comments} from '../types/comment';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const comments: Comments = [
  {
    comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    date: '2020-05-08T14:13:56.569Z',
    id: 78,
    rating: 4,
    user: {
      aratarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Bob',
    },
  },

  {
    comment: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    date: '2020-05-07T14:00:56.569Z',
    id: 44,
    rating: 5,
    user: {
      aratarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: 'Jimmy',
    },
  },

  {
    comment: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.',
    date: '2020-05-10T12:00:56.569Z',
    id: 63,
    rating: 3,
    user: {
      aratarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'Vincent',
    },
  },

  {
    comment: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.',
    date: '2020-05-10T13:20:56.569Z',
    id: 11,
    rating: 4,
    user: {
      aratarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: 'Jules',
    },
  },
];

