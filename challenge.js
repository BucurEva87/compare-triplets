// Given two arrays with three entries compare each and every entry
// in order to establish a score for A student and B student based
// on comparation over each item in the array at the same possition
function compareTriplets(a, b) {
  let scoreA = 0
  let scoreB = 0
  
  for (let i = 0, len = a.length; i < len; i++)
    if (a[i] > b[i]) scoreA++
    else if (a[i] < b[i]) scoreB++
    
  return [scoreA, scoreB]
}
