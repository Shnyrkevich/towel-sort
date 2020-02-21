
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let mas = [];

  if(!Array.isArray(matrix)){
    return [];
  }

  for(let i = 0, counter = 0, j = 0; i < matrix.length; i++){
    if((i+1)%2==0){
      j = matrix[i].length-1;
      while(j >= 0){
        mas[counter]=matrix[i][j];
        counter++;
        j--;
      }
    } else {
      j = 0;
      while(j < matrix[i].length){
        mas[counter]=matrix[i][j];
        counter++;
        j++;
      }
    }
  }
  console.log(mas);
  return mas;

};
