function transpose (strArray) {
  if (strArray == '') {
    return []
  }
  var place = []
  var transposed = []
  var strLength = 0

  let baseArray = strArray.map(str => str.split(''))
  console.log('this is baseArray ', baseArray)

  for (let i = 0; i < baseArray.length; i++) {
    if (baseArray[i].length > strLength) {
      strLength = baseArray[i].length
    }
  }
  console.log('this is strLength ', strLength)

  let n = 0

  while (n < strLength) {
    for (let i = 0; i < baseArray.length; i++) {
        place.push(baseArray[i].shift())
    }

  // ?var place = place.map(x => x !== undefined ? x : ' ')
    // place.trimEnd()

    for (let i = 0; i < place.length; i++) {
      if (place[i] == undefined
        && i != place.length - 1
        ) {
        place[i] = ' '
      }
    }
    console.log('this is place ', place)
    transposed.push(place.join(''))

    place = []
    n++
  }

  let end = transposed.slice(-1).toString().trimEnd()
  transposed.pop()
  transposed.push(end)
  console.log(transposed)
}

strArray = []

// strArray = ['The first line.', 'The second line.']
// ['TT', 'hh', 'ee', '  ', 'fs', 'ie', 'rc', 'so', 'tn', ' d', 'l ', 'il', 'ni', 'en', '.e', ' .']

// strArray = ['The fourth line.', 'The fifth line.']
// ['TT', 'hh', 'ee', '  ', 'ff', 'oi', 'uf', 'rt', 'th', 'h ', ' l', 'li', 'in', 'ne', 'e.', '.']

// strArray = ['T', 'EE', 'AAA', 'SSSS', 'EEEEE', 'RRRRRR']
// ['TEASER', ' EASER', '  ASER', '   SER', '    ER', '     R']

// strArray =['Chor. Two households, both alike in dignity,', 'In fair Verona, where we lay our scene,', 'From ancient grudge break to new mutiny,', 'Where civil blood makes civil hands unclean.', 'From forth the fatal loins of these two foes', 'A pair of star-cross\'d lovers take their life;', 'Whose misadventur\'d piteous overthrows', 'Doth with their death bury their parents\' strife.', 'The fearful passage of their death-mark\'d love,', 'And the continuance of their parents\' rage,', 'Which, but their children\'s end, naught could remove,', 'Is now the two hours\' traffic of our stage;', 'The which if you with patient ears attend,', 'What here shall miss, our toil shall strive to mend.']
// [
//   'CIFWFAWDTAWITW',
//   'hnrhr hohnhshh',
//   'o oeopotedi ea',
//   'rfmrmash  cn t',
//   '.a e ie fthow ',
//   ' ia fr weh,whh',
//   'Trnco miae  ie',
//   'w ciroitr btcr',
//   'oVivtfshfcuhhe',
//   ' eeih a uote  ',
//   'hrnl sdtln  is',
//   'oot ttvh tttfh',
//   'un bhaeepihw a',
//   'saglernianeoyl',
//   'e,ro -trsui ol',
//   'h uofcu sarhu ',
//   'owddarrdan o m',
//   'lhg to\'egccuwi',
//   'deemasdaeehris',
//   'sr als t  ists',
//   ',ebk \'phool\'h,',
//   '  reldi ffd   ',
//   'bweso tb  rtpo',
//   'oea ileutterau',
//   't kcnoorhhnatr',
//   'hl isvuyee\'fi ',
//   ' atv es iisfet',
//   'ayoior trr ino',
//   'l  lfsoh  ecti',
//   'ion   vedpn  l',
//   'kuehtteieadoe ',
//   'erwaharrar,fas',
//   '   nekt te  rh',
//   'ismdsehphnnosa',
//   'ncuse ra-tau l',
//   ' et  tormsural',
//   'dniuthwea\'g t ',
//   'iennwesnr hsts',
//   'g,ycoi tkrttet',
//   'n ,l r s\'a anr',
//   'i  ef  \'dgcgdi',
//   't  aol   eoe,v',
//   'y  nei sl,u; e',
//   ',  .sf to l   ',
//   '     e rv d  t',
//   '     ; ie    o',
//   '       f, r   ',
//   '       e  e  m',
//   '       .  m  e',
//   '          o  n',
//   '          v  d',
//   '          e  .',
//   '          ,',
// ]
transpose(strArray)
