import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', __dirname],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '@utils/(.*)': '<rootDir>/utils/$1',
  },
};
