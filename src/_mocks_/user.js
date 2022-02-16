import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(20)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  // mobile:faker.name.mobile(),
  email: sample([
    'Leader',
    'danielumar2531@gmail.com',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer'
  ])
}));

export default users;
