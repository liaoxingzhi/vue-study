(function () {
    function showFullName(name) {
        return name.firstname + '_' + name.lastname;
    }
    var myName = {
        firstname: "aaa",
        lastname: "bbb"
    };
    console.log(showFullName(myName));
})();
