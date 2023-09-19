// Activity 1-> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_ARRAYSIMPLEES6/
function removeListedValues(arr, without) {
    return arr.filter(function(ele,index){
          return !without.includes(ele);
    });
}

module.exports = removeListedValues;

// Activity 2-> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_OBJECTES6/
function personDetail(a, b) {
    const person={};
    person.firstName=a;
    person.lastName=b;
    person.fullName=`${a} ${b}` ;
    return person;
}

module.exports = personDetail;

// Activity 3-> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_DATEES6/
function getNumberOfDays(date) {
    const dates=date.split("/");
    const formattedDate=`${dates[1]}/${dates[0]}/${dates[2]}`;
    const inputTime=new Date(formattedDate).getTime();
    const todayTime=new Date().getTime();
    const value=todayTime-inputTime;
    return Math.floor(value/(1000*60*60*24));
    }
    
    
    module.exports = getNumberOfDays;

// Activity 4-> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_ARROWES6/
let modify = (array) => {
    const modifiedArr= array.map(function(ele){
          if(isPrime(ele)){
                return ele+1;
          }
          else {
                return ele*2;
          }
    })
        return modifiedArr;
    }
    
    function isPrime(n) {
          if(n == 0|| n == 1) {
                return false;
          }
    
    for(let i = 2 ; i*i <=n ; i++) {
          if(n%i == 0) {
                return false;
          }
    }
    return true;}
    
    module.exports = modify;