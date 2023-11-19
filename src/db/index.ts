import Nedb from "nedb";


const db = new Nedb({
    filename: "./dto.db",
    autoload: true
})


export default db