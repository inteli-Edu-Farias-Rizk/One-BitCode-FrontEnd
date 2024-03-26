const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }
  // the js will try to read before going to the next properties

  // In this case does not exist phone so it is going to return undefined

  console.log(user?.friends[0]?.phone.ddd)