// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
// Parameters: three inputs (num_pill) will be number of pillars, will always be >= 0. (dist) will be distance between pillars in meters, will always be > 0. (width) will be width of the pillar in centimeters, will always be > 0
// Return: total distance between first and last pillar, in centimeters, excluding widths of first and last pillar
// Example: input - pillars(2, 20, 25) return - 2000
// Pseudo Code: check to see if there is only 1 pillar and if there is, return 0. otherwise if there are multiple pillars convert (dist) to centimeters by multiplying by 100. multiply new distance by num_pill - 1 to get the total distance between each pillar. multiply width by num_pill - 2, because the first and last pillar are excluded, to get total widths of all pillars. add total widths and total distance between pillars then return sum


function pillars(num_pill, dist, width) {
  return num_pill === 1 
  ? 0 
   : num_pill === 2 
  ? dist * 100 
   : num_pill > 2 
  ? (dist * 100) * (num_pill - 1) + (width * (num_pill - 2)) 
   : null
}

pillars(2, 20, 25)