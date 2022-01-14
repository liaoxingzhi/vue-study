(function () {
    var person = /** @class */ (function () {
        function person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + '_' + lastName;
        }
        return person;
    }());
    function showFullName(name) {
        return "全名：" + name.fullName + " 姓：" + name.firstName + " 名：" + name.lastName;
    }
    var user = new person("诸葛", "孔明");
    console.log(showFullName(user));
})();
