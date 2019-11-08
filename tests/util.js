const logger = {
  log: (...args) => {
    [...args, '\n'].forEach(x => process.stdout.write(x));
  },
  error: (...args) => {
    [...args, '\n'].forEach(x => process.stderr.write(x));
  },
};
const randomDelay = () => Math.floor(Math.random() * 100);

module.exports = {
  logger,
  task: async (n) => new Promise(resolve => setTimeout(() => resolve(true), n || randomDelay())),
};