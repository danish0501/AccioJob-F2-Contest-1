/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperswithMap() {
    arr.map(mapFunction);
    function mapFunction (developerItem) {
        if(developerItem.profession == "developer") {
            console.log(developerItem);
        }
    }
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(forEachFunction);
    function forEachFunction (forEachItem) {
        if(forEachItem.profession == "developer") {
            console.log(forEachItem);
        }
    }
  }
  
  function addData() {
    let addObj = { id:4, name:"susan", age:"20", profession:"intern"};
    arr.push(addObj);
    console.log(arr);
  }
  
  function removeAdmin() {
    let removeAdmin = arr.filter(function (remove) {
      if(remove.profession != "admin") {
        return remove;
      }
    })
    console.log(removeAdmin);
  }
  
  function concatenateArray() {
    let newArr = [
      { id: 5, name: "roman", age: "24", profession: "Frontend Programmer"},
      { id: 6, name: "sheamus", age: "22", profession: "Backend Programmer"},
      { id: 7, name: "brock", age: "21", profession: "Full Stack Programmer"},
    ]
    let concatenationArray = arr.concat(newArr);
    console.log(concatenationArray);
  }
