require('../src/db/mongoose')
const User = require('../src/models/users')

// user_id : 5f03a622d5745766f051d53d

User.findByIdAndUpdate('5f03a622d5745766f051d53d', {age:100}).then(user) => {
  console.log(user)
  return User.countDocuments({age:100})
}).then(result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {age})
  const count = await User.countDocuments({age})
  return count
}

updateAgeAndCount('5f03a622d5745766f051d53d',2).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})


const deleteTaskAndCount = (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed: false})
  return count
}

deleteTaskAndCount('5f03a622d5745766f051d53d').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
