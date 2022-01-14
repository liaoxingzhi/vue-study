(() => {
    interface Name {
        firstname: string
        lastname: string
    }

    function showFullName(name: Name) {
        return name.firstname + '_' + name.lastname
    }

    let myName = {
        firstname: "aaa",
        lastname: "bbb"
    }

    console.log(showFullName(myName))
})()
