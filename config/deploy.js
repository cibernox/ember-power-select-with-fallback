module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-power-select-with-fallback',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
