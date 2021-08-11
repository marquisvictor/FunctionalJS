
// const schools = [
//     "Yorktown",
//     "Washington & Lee",
//     "Wakefield"
//    ]

// let schools = [
//     { name: "Yorktown"},
//     { name: "Stratford" },
//     { name: "Washington & Lee"},
//     { name: "Wakefield"}
//    ]
   

const schools = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
   }

// const wSchools = schools.filter(school => school[0])

// const highSchools = schools.map(school => ({name: school}))


// const editName = (oldName, name, arr) => {
//    return arr.map(item => {
//         if(item.name === oldName) {
//             return {...item, 
//                 name}
//         }  else {
//             return item
//         }
//     })
// }

// const editName = (oldName, name, arr) =>
//  arr.map(item => {
//  if (item.name === oldName) {
//  return {
//  ...item,
//  name
//  }
//  } else {
//  return item
//  }
//  })


const schoolArray = Object.keys(schools).map(key => (
    console.log(key),
    {
        name: key,
        wins: schools[key]
    }
))


// let updatedSchools = editName("Stratford", "HB Woodlawn", schools)


console.log(schoolArray);


