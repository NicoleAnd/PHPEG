function People(name,sex,age){
	this.name = name;
	this.sex = sex;
	this.age = age;
}

// 添加一个方法 people自动拥有sayhello方法
People.prototype.sayHello = function(){
	console.log("大家好，我是"+this.name);
}

// 构造函数 对外暴露
// exports.People = People;
// 暴露
module.exports = People;