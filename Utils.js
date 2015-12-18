var Utils = {
  isArray: function(test) {
    if( Object.prototype.toString.call(test) === '[object Array]' ) {
      return true;
    }
    return false;
  }
};
