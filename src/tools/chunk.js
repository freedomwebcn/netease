 function baseSlice(array, start, end) {
     var index = -1,
         length = end - start
     var result = Array(length);
     while (++index < length) {
         result[index] = array[index + start];
     }
     return result;
 }

 function chunk(array, size) {
     var length = array.length
     var index = 0,
         resIndex = -1,
         result = Array(Math.ceil(length / size));
     while (index < length) {
         result[++resIndex] = baseSlice(array, index, (index += size));
     }
     return result;
}
 
export default chunk