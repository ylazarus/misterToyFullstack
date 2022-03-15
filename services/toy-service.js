const fs = require('fs')

const gToys = require('../data/toy.json')

// const PAGE_SIZE = 2

function query(filterBy) {
  console.log(filterBy);
    var toys = _filterToys(filterBy)
    
    // if(filterBy.page){
    //     startIdx = filterBy.page * PAGE_SIZE
    //     toys = toys.slice(startIdx, startIdx + PAGE_SIZE)
    // }
    return Promise.resolve(toys)
}

// function getNumOfToys(userId) {
//     let toys = gToys.filter(toy => toy.creator._id === userId)
//     return Promise.resolve((toys.length).toString())
// }

function getById(toyId) {
    const toy = gToys.find(toy => toy._id === toyId)
    return Promise.resolve(toy)
}

function remove(toyId, user) {
    console.log(user);
    const idx = gToys.findIndex(toy => toy._id === toyId)
    // if (!user.isAdmin && gToys[idx].creator.username !== user.username) return Promise.reject('unauthorized')
    gToys.splice(idx, 1)
    return _saveToysToFile()
}

function save(toyToSave, user) {
      
    if (toyToSave._id) {
        //UPDATE
        const idx = gToys.findIndex(toy => toy._id === toyToSave._id)
        // if (!user.isAdmin && gToys[idx].creator.username !== user.username) return Promise.reject('unauthorized')
        gToys[idx] = toyToSave
    } else {
        // CREATE
        toyToSave._id = _makeId()
        gToys.unshift(toyToSave)
    }
    return _saveToysToFile().then(()=>toyToSave)
}

function _filterToys(filterBy) {
    var toys = gToys;
    let filteredToys = [];
  
    const regex = new RegExp(filterBy.name, 'i');
  
    // filter by name
    filteredToys = toys.filter((toy) => regex.test(toy.name));
  
    //filter by inStock
    if (filterBy.inStock) {
      filteredToys = filteredToys.filter((toy) => {
        //   console.log('toy', toy.inStock);
        //   console.log('filterBy.inStock', filterBy.inStock);
        return toy.inStock === JSON.parse(filterBy.inStock);
      });
    }

    //filter by labels
  if (filterBy.labels&&filterBy.labels.length) {
    filteredToys = filteredToys.filter((toy) => {
      // ["Doll", "Battery Powered", "Baby"]    ["Battery Powered", "Baby"]
      return toy.labels.some((label) => filterBy.labels.includes(label));
    });
  }

  //sorting
  if (filterBy.sortBy) {
    if (filterBy.sortBy === 'time')
      filteredToys = filteredToys.sort((t1, t2) => t1.createdAt - t2.createdAt);
    else if (filterBy.sortBy === 'price')
      filteredToys = filteredToys.sort((t1, t2) => t1.price - t2.price);
    else if (filterBy.sortBy === 'name')
      filteredToys = filteredToys.sort((t1, t2) => {
        return t1.name.toLowerCase() > t2.name.toLowerCase() ? 1 : -1;
      });
  }

  return filteredToys;
}

function _saveToysToFile() {
    return new Promise((resolve, reject)=>{
        fs.writeFile('data/toy.json', JSON.stringify(gToys, null, 2), (err)=>{
            if (err) return reject(err)
            resolve();
        })
    })
}

function _makeId(length =5){
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i=0; i < length; i++)   {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

module.exports = {
    query,
    getById,
    remove,
    save,
    // getNumOfToys
}