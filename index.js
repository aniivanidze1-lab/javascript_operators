// /////The Tip Calculator" (Type Conversion)
// დავალება: მომხმარებელს prompt-ით ჰკითხე რესტორნის ანგარიშის თანხა (მაგ: 50 ლარი).
// მიზანი: გამოთვალე 10%-იანი "თიფი" (Tip) და აჩვენე მომხმარებელს საბოლოო ჯამი (ანგარიში + თიფი).
let bill = prompt("შეიყვანე გადახდილი თანხა");
bill = Number(bill);
let tip = bill * 0.10;
let all = bill + tip;
console.log("თიფი არის: " + tip + " ლარი");
console.log("სულ გადასახდელია: " + all + " ლარი");

// /////
// https://www.freecodecamp.org/news/javascript-operators/

// სავარჯიშო
// The Party Planner  მომხმარებელს ჰკითხეთ სტუმრების რაოდენობა და პიცის ნაჭრების რაოდენობა.

// 1.  გამოთვალეთ, რამდენი ნაჭერი შეხვდება თითოეულ სტუმარს .
// 2.  მოდულოს (%) მეშვეობით გაიგეთ, რამდენი ნაჭერი დარჩება "ზედმეტი" (ნაშთი).

//  გამოიტანეთ alert: "თითოეული სტუმარი შეჭამს X ნაჭერს, ხოლო ყუთში დარჩება Y ნაჭერი."
let guests = prompt("შეიყვანე სტუმრების რაოდენობა:");
let piece = prompt("შეიყვანე პიცის ნაჭრების რაოდენობა:");
guests = Number(guests);
piece = Number(piece);
let perguest = (piece - (piece % guests)) / guests;
let left = piece % guests;
console.log("თითოეული სტუმარი შეჭამს " + perguest + " ნაჭერს, ხოლო ყუთში დარჩება " + left + " ნაჭერი.");
alert("თითოეული სტუმარი შეჭამს " + perguest + " ნაჭერს, ხოლო ყუთში დარჩება " + left + " ნაჭერი.");


// ///////
// ინცრემენტ

// var a = 5;
// var b = a++ + a; 5 + 6 = 11
// console.log(b); იქნება 5 + 6 = 11 (ჯერ იყენებს ძველ მნიშვნელობას, შემდეგ ზრდის)

// მოდულო
// var logic = 3 % 10;
// console.log(logic); 3 ვერ იყოფა 10-ზე, ამიტომ პასუხი იქნება 3 (ნაშთი)

// //
// var n = 1;
// n += n++ + ++n;
// console.log(n);

// //var surprise = "Hello" * 2;
// console.log(surprise); აქ დაწერს NaN (Not a Number), რადგან სტრინგის გამრავლება არ შეიძლება

// let power = 2;
// power *= 3 + 2; 
// console.log(power); ჯერ გამოთვლის 3 + 2 = 5, შემდეგ გაამრავლებს 2 * 5 = 10, ამიტომ პასუხი იქნება 10

// let score = 10;
// score /= "2";
// score += 5;
// console.log(score); score /= "2" გადაიქცევა რიცხვად, score გახდება 5 (10/2). შემდეგ score += 5 გახდება 10 (5 + 5).
// Logical Operators: &&, ||, ! 

// let isLoggedIn = true;
// let hasBalance = false;
// console.log(isLoggedIn && hasBalance && true); პასუხი იქნება false, რადგან ყველა უნდა იყოს true, რომ საბოლოო შედეგი true იყოს. 

// let isAdmin = false;
// let isEditor = true;
// console.log(isAdmin || isEditor || false); პასუხი იქნება true, რადგან ერთი მაინც უნდა იყოს true, რომ საბოლოო შედეგი true იყოს.

// let isHappy = true;
// console.log(!!isHappy); პირველი ! ცვლის true-ს false-ად, მეორე ! ისევ true-ად ამიტომ პასუხი იქნება true.

// let x = 10;
// let y = 5;
// let result = (x > 5 && y < 10) || x++ === 10;
// console.log(result);


// console.log(0 || "გამარჯობა"); 
// console.log("აკაკი" && 100);    


// let nickname = ""; 
// let finalName = nickname || "Guest";
// console.log(finalName);

// let a = "ვაშლი" && "მსხალი" && "ატამი";
// console.log(a); 

// let b = "" || 0 || "ალუბალი";
// console.log(b); 

// let c = "ყავა" && 0 && "ჩაი";
// console.log(c); 

// let d = "პური" || "წყალი";
// console.log(d);

// let userHasPremium = true;
// userHasPremium && console.log("მოგესალმებით, პრემიუმ მომხმარებელო!"); 
