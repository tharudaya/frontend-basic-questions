const person = {
    name: 'Jhon',
    printName: () => {
        console.log(this.name);
    }
}

person.printName();