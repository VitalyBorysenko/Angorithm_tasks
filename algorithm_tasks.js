//           Task109
function findSum(n){
  sum = 0;
  for(i = 1; i <= n; i++){
    mult = 1;
    for(j = i; j <= 2*i; j++){
      mult *= j;
    }
    sum += mult;
  }
  return sum;
}
// console.log(findSum(3))



//           Task117a
function prod(n){
  multN = 1;
  for(i = 1, count = 1; count <= n; i = i+2, count++){
    multN *= i / (i+1);
  }
  return multN;
}

// console.log(prod(3))


//           Task560
function findSumDivNum(a){
  sumDiv=0;
  for(i=1;i<a;i++){
    if(a % i ===0){
      sumDiv+=i;
    }
  }
  return sumDiv;
}

function friendlyNum(a,b){
  friendlyArr=[];
  for(numA=a;numA<=b;numA++){
    sumDivA=findSumDivNum(numA);
    numB=sumDivA;
    sumDivB=findSumDivNum(numB);
    if(numA===sumDivB && numB>numA){
      friendlyArr.push([numA,numB])
    }
  }
  return friendlyArr;
}

// console.log(findSumDivNum(220))
// console.log(findSumDivNum(284))
// console.log(friendlyNum(200,300))
