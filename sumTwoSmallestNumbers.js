function sumTwoSmallestNumbers(numbers) {  
    var arrayOfNums = numbers;
    var sortedArray = arrayOfNums.sort((n1,n2) => n1>n2 ? 1 : n1<n2 ? -1 : 0);
    var takeFirstTwo = sortedArray.splice(0,2);
    var result = takeFirstTwo[0] + takeFirstTwo[1];
    return result;
  }
  