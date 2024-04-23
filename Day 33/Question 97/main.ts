
    // Getting Today date in "DD-MM-YYYY" format

let mydate  = () => {
    let now = new Date;
    let date = String(now.getDate()).padStart(2,"0")
    let month = String(now.getMonth() + 1).padStart(2,"0")
    let year = String(now.getFullYear()).padStart(4)
    return `${date} ${month} ${year}`;
}

console.log(mydate());
