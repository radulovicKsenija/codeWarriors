function filter_list(l) {
    let newArray = l.filter((char) => typeof char !== 'string');
    return newArray;
  }
  filter_list([1,2,3,'a','b']);
  