//feetToInch
function feetToInch(feet) {
    var feety = feet * 12;
    console.log(feety);
}
feetToInch(5);

//centimeterToMeter
function centimeterToMeter(centimeter) {
    var centi = centimeter / 100;
    console.log(centi);
}
centimeterToMeter(5);

//pageRequirements
function pageRequirements(book1, book2, book3) {
    let bookPages = book1 + book2 + book3;
    return bookPages;
}
let totalBookPage = pageRequirements(100, 200, 300);
console.log(totalBookPage);

//bestFriend
var myFriends = ['Ekabbor', 'Pantho', 'Shiblee wasin', 'Pantho', 'Muaz', 'Rakib', 'Rajib', 'Shuvro', 'Hasan Mahmud'];

function bestFriend(friends) {
    var largest = friends[0] // 'Ekabbor'
    for (const friend of friends) {
        if (largest.length < friend.length) {
            largest = friend;
        }
    }
    return (largest);

}

var result = bestFriend;
console.log(result(myFriends));

