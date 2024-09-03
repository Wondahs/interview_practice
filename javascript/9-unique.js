// 9. Write logic to get unique objects from below array
 const arr = [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];

 const unique = []
 arr.forEach(obj => {
  if (!unique.some(item => item.name === obj.name)) {
    unique.push(obj)
  }
 })
 console.log(unique);
