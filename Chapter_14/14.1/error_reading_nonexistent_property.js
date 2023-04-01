let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, property, receiver) {
            if (property in target) {
                return Reflect.get(target, property, receiver);
            }
            throw new Error('Свойство не существует')

        }
    });
}

user = wrap(user);

console.log(user.name);

user.age = 13
console.log(user.age);

console.log(user.school);
