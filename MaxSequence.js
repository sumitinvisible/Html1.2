function findMaxSequence(array, start = -1, end = -1, i = 0, results=[]){
                if(i >= array.length-1){
                       if(start != -1){
                            results.push(array.slice(start, end+1));
                       }
                       if(results.length > 0){
                         results.sort(
                            function(a, b){
                                return a.length < b.length;
                            }
                         );
                         return "[ " + results[0].toString() + " ]";
                       }else{
                         return "no";
                       }
                }else if(array[i] < array[i+1]){
                       if (start == -1){
                            start = i;
                       }
                       return findMaxSequence(array, start, i+1, ++i, results);
                }else if(array[i] >= array[i+1]){
                      if(start != end){
                        results.push(array.slice(start, end+1))
                      }
                      return findMaxSequence(array, -1, -1, ++i, results);
                }

            }

            console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
            console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
            console.log(findMaxSequence([3,2,1]));