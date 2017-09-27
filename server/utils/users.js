[{
  id: '/#12poiajdspfoif',
  name: 'Andrew',
  room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.getUser(id);
    console.log('刪除user1',user);
    if (user) {
      this.users = this.users.filter((user) => { 
        console.log(user);  
        return user.id !== id});
    }
    console.log('刪除1',this.users);

    return user;
  }
  getUser (id) {
    var namesArray =  this.users.filter((user) => user.id === id)[0];
   
    return namesArray;
  }
  getUserList (room) {
    var users = this.users.filter((user) =>{ return user.room === room});
    var namesArray = users.map((user) =>{ return user.name});
    console.log(namesArray);
    return namesArray;
  }
}

module.exports = {Users};

 // class Person {
 //   constructor (name, age) {
 //     this.name = name;
 //     this.age = age;
 //   }
 //   getUserDescription () {
 //     return `${this.name} is ${this.age} year(s) old.`;
 //   }
 // }
 //
 // var me = new Person('Andrew', 25);
 // var description = me.getUserDescription();
 // console.log(description);
