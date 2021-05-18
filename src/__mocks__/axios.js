  
const get = url => {
    return Promise.resolve({ data: {timezone: 'Asia\/Kolkata' } });
  };
  
  exports.get = get;