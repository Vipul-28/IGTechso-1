// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
        "^.+\\.jsx?$": "babel-jest"
      },
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
  };
  