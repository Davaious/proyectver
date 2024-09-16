module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)" // Transforma axios, ignora otros módulos
  ],
  moduleFileExtensions: ['js', 'jsx'],
};
