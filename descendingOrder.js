function descendingOrder(n){
    var passedNumber = n;
    var intToStr = passedNumber.toString();
    var splitStr = intToStr.split("");
    var sortedDesc = splitStr.sort((n1,n2) => n1<n2 ? 1 : n1>n2 ? -1 : 0).join("");
    var result = parseInt(sortedDesc);
    return result;
  }