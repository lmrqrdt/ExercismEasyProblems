
export const convert = (n) => {
  var raindrops = ''
  if (n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
    return n.toString()
  }
   if (n % 3 == 0) {
     raindrops += 'Pling'
   }
   if (n % 5 == 0) {
     raindrops += 'Plang'
   }
   if (n % 7 == 0) {
     raindrops += 'Plong'
   }
   return raindrops
}
