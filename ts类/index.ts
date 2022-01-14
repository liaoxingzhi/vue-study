(() => {
    interface Name {
        firstName: string
        lastName: string
        fullName: string
    }

    class person {
        firstName: string
        lastName: string
        fullName: string

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = firstName + '_' + lastName
        }
    }

    function showFullName(name: Name) {
        return "全名：" + name.fullName + " 姓：" + name.firstName + " 名：" + name.lastName
    }

    let user = new person("诸葛", "孔明")

    console.log(showFullName(user))
})()
