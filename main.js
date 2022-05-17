// var fullname = 'Tu trong tien';
// var age = 26;

// alert(fullname);

// confirm('xac nhan ban du tuoi');
// prompt('xac nahn ban du tuoi');
// setTimeout(function() {
//     alert('thong bao')
// }, 1000);

// kieu du lieu so
// var a = 3;
// var b = 2;

// //kieu chuoi
// var fullName = 'Tu Trong Tien';

// // kieu Boolean
// //co 2 gia tri true va false
// var isSuccess = true;

// //undefined type
// var age;

// // Null type
// var isNull = null;

// // Symbol
// var id = symbol('id'); 

// function 
// var myFunction = function() {
//     alert('hi, xin chao cac ban');
// }

// myFunction();

// //Object
// var myObject = {
//     name: 'Tu Trong Tien',
//     age: 26,
//     adress: 'Da Nang',
//     myFunction: 23,
// };

// console.log(myObject);

// var myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// console.log(myArray);

// //cach kiem tra kdl cua 1 bien
// console.log(typeof myArray);

//lam viec voi chuoi
//  var myString = 'Hoc JS tai  JS F8!';

// console.log(myString.length);//do dai chuoi
//console.log(myString.indexOf('JS'));//tim vi tri cua ky tu
//console.log(myString.slice(4, 6)); // lay tam so tu vi tri den
//var mystr = myString.slice(4, 6);
//console.log(mystr);
//console.log(myString.replace(/JS/g, 'Javascript')); //thay doi chuoi
// console.log(myString.toUpperCase());//chuyen chu thuong thanh chu hoa
// console.log(myString.toLocaleLowerCase());//chuyen chu hoa thanh chu thuong
// console.log(myString.trim());//loai bo khoang trang 2 dau
// var languages = 'JS, PHP, Ruby';
// console.log(languages.split(', ')); //chuyen chuoi thanh array
// const myString2 = 'Trong Tien';

// console.log(myString2.charAt(2)); //lay ky tu theo vi tri

//lamviec voi number

// var age = 18;
// var PI = 3.147898;

// console.log(age.toString()); //chuyen number thanh string
// var myString = age.toString();
// console.log(myString);

// console.log(PI.toFixed(3))//lam tron co 3 chu so sau dau phay


// console.log(typeof age);

// var languages = [
//     'javascript',
//     'PHP',
//     'Ruby',
// ];
// languages.indexOf('Ruby');
// a  = 'python';
// languages[languages.indexOf('Ruby')] = a;
// console.log(languages);


// console.log(languages.toString()); //chuyen array thanh string
// console.log(languages.join(''));
// //console.log(languages.pop()); //sxoa phan tu cuoi mang va tra ve phan tu da xoa
// console.log(languages.push('Dart'));// them phan tu vao cuoi mang, va tra ve do dai cua mang
// console.log(languages.shift()); //xoa phan tu dau mang va tra ve phan tu dau mang
// languages.unshift('Python', 'Java');// them 1 hoac nhieu phan tu vao dau mang, va tra ve do dai moi cua mang
// console.log(languages);
// languages.splice(1,0, 'php', 'a') //xoa di phan tu bat ki, tham so 1 la vi tri bat dau xoa, tham so 2 la so phan tu xoa
// console.log(languages);
// a = 'no';
// b = 'un';
// a = a + b;
// console.log(a);


// lam viec voi ham

//cu phap tam ham

// function functionName() {
//     //code
// }

// function writelog() { // message la tham so truyen vao
//     var mystr = '';
//     for (var param of arguments) {
//         mystr +=`${param} `;
//     } 
//     console.log(mystr);
// }
// writelog('text message', 2, 3); // doi so cua tham so

//return

// function cong(a, b) {
//     return [a, b]; //tra ve array
// };
// var result = cong(2, 8);
// console.log(result);

// let myfunction = function() {
//     console.log('day la expression function');
// };
// myfunction();

// lam viec voi Object
// var giadinh = 'Tinh trang hon nhan';

// var myInfo = {
//     name: 'Trong Tien',
//     age: 26,
//     address: 'Binh Dinh',
//     [giadinh]: 'Trong Tien',//them key bang bien
//     getName: function() {
//         return this.name; //this la ten cua Object
//     }
// };

// var i = 0;
// for (var key in myInfo) {
//     if (myInfo[key] == 'Trong Tien') {
//         console.log(key);
//         i++
//     }
// }



// // var keyArray = [];

// var keyName =Object.keys(myInfo);
// console.log[]
// var i = 0;
// var a = 0;
// var count = keyName.length -1;
// for (; i <= count; i++) {
//     if (myInfo[keyName[i]] == 'Trong Tien') {
//         keyArray[a] = keyName[i];
//         a++;
//     }
// };
// if (keyArray.length > 0) {
//     console.log(keyArray);
// }
// else {
//     console.log('khong tim thay key');
// };



// myInfo.email = 'tutrongtien.tt@gmail.com'; // them key va value vao object
// myInfo['32-namsinh'] = 1996; //them key vi pham nguyen tac 
// console.log(myInfo);
// a = myInfo.name;
// console.log(myInfo.name); // lay gia tri key
// console.log(myInfo['name']);// lay gia tri  key
// function deleteAddress() {
//     delete myInfo.address;
// }
// deleteAddress();
// console.log(myInfo);
// console.log(myInfo.getName()); //cach lay gia tri khi key la mot function


// function User(firstName, lastName, avatar) {
//     this.firstName =  firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// User.prototype.className = 'F8';
// User.prototype.getClassname = function() {
//     return this.className;
// }


// var author = new User('Trong', 'Tien', 'avatar');
// var user = new User('Vu', 'Nguyen', 'avatar');

// author.title = 'chia se tai f8';
// user.comment = 'lie co khoa asp.net';

// console.log(author.getClassname());
// console.log(user);
// console.log(user.getName())

// var date = new Date();

// var nam = date.getFullYear();
// var ngay = date.getDate();
// var  thang = date.getMonth()+1;
// console.log(`${ngay}-${thang}-${nam}`)

// var date = 5;
// switch(date){
//     case 2:
//         console.log('hom nay la thu 2');
//     break;
//     case 4:
//         console.log('hom nay la thu 2');
//     break;
//     case 5:
//         console.log('hom nay la thu 5');
//     break;
//     default:
//         console.log('khong biet')
// }

//su dung switch khi biet truoc gia tri cua case

//toan tu 3 ngoi

// var khoaHoc = {
//     name: 'Javascript',
//     coin: 230,
// }

// if (khoaHoc.coin > 0) {
//     console.log(`${khoaHoc.coin} coin`);
// }
// else {
//     console.log('mien phi')
// }

// var result = khoaHoc.coin > 0 ? `${khoaHoc.coin} coin` : 'mien phi';
// console.log(result);

//vong lap for 
// for (var i = 1; i <= 100; i++) {
//     console.log(i);
// }
// i = 1;
// for(;i<=50; i++) {
//     console.log(i);
// }

// var languages = [
//     'javascript',
//     'PHP',
//     'Ruby',
//     'NodeJS',
//     'python',
// ];
// //  for (var key in languages){
// //      console.log(languages[key]);
// //  }
// for (var value of languages ){
//     console.log(value);
// }

//vong lap while
// var i = 0;
// while (i < 1000) {
//     i++;
//     console.log(i);
// }

// var i = 0;

// var the = false;

// do { 
//     i++;
//     if(the == false){
//         console.log('the khong hop le');
//     }
//     else {
//         console.log('the hop le');
//     }
// }
// while (the == true && i <=3}

// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 10
//     },
//     {
//         id: 2,
//         name: 'Python',
//         coin: 20
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 30
//     },
//     {
//         id: 4,
//         name: 'C++',
//         coin: 40
//     },
//     {
//         id: 5,
//         name: 'Java',
//         coin: 50
//     },
//     {
//         id: 6,
//         name: 'PHP',
//         coin: 60
//     },
//     {
//         id: 7,
//         name: 'NodeJS',
//         coin: 70
//     }
// ];
// function tong(a, b, c){ //tra ve 4 tham so, tham so dau vao intial value, tham so tinh toan, index, mang cu
//     a = a + b.coin;
//     console.log(c);
//      return a;
// }

// console.log(courses.reduce(tong, 0));// intial value khong bat buoc





// function courseHandler(cours, index ) {
//     return {
//         id: cours.id,
//         name: `khoa hoc: ${cours.name}`,
//         coin: cours.coin,
//         coinText: `Gia: ${cours.coin}`,
//         index: index
//     }
// };
// var newCourses = courses.map(courseHandler)//tra ve mot mang moi giong mang cu
//   {  console.log(newCourses);
//   };
// function cu(course){
//     console.log(course);
// };
  
// var cu2 = courses.forEach(cu);
// console.log(cu2);
     //loc qua tat ca  phan tu trong mang;


// var isFree = courses.every(function(course, index) { //kiem tra tat ca cac phan tu thoa man deu kien

//     return course.coin === 0; //tra lai kieu du lieu boolem
// });

// console.log(isFree);

// phuong thuc some(), chi can 1 phan tu thoa man dieu kien

// var course = courses.find(function(course, index){ // phuong thuc find dung de tim kiem 1 ket qua thoa man dieu kien
//     return course.coin === 250;
// });

// console.log(course);

// for (var key in course) {
//     if(course[key] == 1){
//         console.log(key);
//     }
// }
//for of dung de lay value cua mang
// phuong thuc fillter tim kiem 1 danh sach thoa man dieu kien


// var depArray = [1, 2, [3, 4], 5, 6, [7,  8, 9]];

// var flatArray = depArray.reduce(function(flatOutput, depitem ){
//     return flatOutput.concat(depitem);
// }, []);
// console.log(flatArray);

// var total = 0;
// for (var i = 0; i < depArray.length; i++) {     
//     if (Array.isArray(depArray[i])){
//         for(var j = 0; j < depArray[i].length; j++){
//             total += depArray[i][j];
//         }
//     }
//     else {
//         total += depArray[i];
//     }
//  }
//  console.log(total);


// includes
// var title = "Responsive web design";
// var tien = [
//     {
//         bien: 1,
//         bien2: 2,
//         bien3: 3
//     },
//     {
//         bien: 5,
//         bien2: 5,
//         bien3: 3
//     }
// ];

// function hamABC(item){
//     console.log(item);
// }

// tien.map(hamABC);
// //console.log(title.includes("web, 2"))// chi so 2 la vi tri bat dau tim kiem, tra ve kieu du lieu boloem
// console.log(tien.indexOf('js'));

// math object
//math.PI so pi
//math.round(bien), lam tron
//math.abs() tri tuyet doi
//math.ceil() lam tron tren
//math.floor() lam tron duoi
//math.random() so thap phan ngau nhien nho hon 1
//math.min tim so nho nhat trong day so
//math.max tim so lon nhat trong day so


// function thucthi( bien1){
//     console.log('day la gia tri function:', bien1);
// }


// function cangoi(bien){
//     bien(6); //bien nhan gia tri chuyen lai ham
// }
// cangoi(thucthi); //ham da nhan gia tri chuyen nguoc lai ham

// var courses = [
//      'javascript',
//      'php',
//      'ruby'
// ];
// Array.prototype.forEach2 = function(callback){
//     for (var i in this) {
//     if(this.hasOwnProperty(i)){
//                callback(this[i], i, this)
//           };
//      }
// }


// courses.forEach2(function(course, index, arr){
//       console.log(course, index, arr);
// });

// var courses = [
//          {
//              id: 1,
//              name: 'Javascript',
//              coin: 40,
//              isFinish: true,
//          },
//          {
//              id: 2,
//              name: 'Python',
//              coin: 40,
//              isFinish: true,
//          },
//          {
//              id: 3,
//              name: 'Ruby',
//              coin: 40,
//              isFinish: true,
//          },
//          {
//              id: 4,
//              name: 'C++',
//              coin: 2,
//              isFinish: true
//          },
        
//      ];

// Array.prototype.filter2 = function(callback){
//      for(var value of this){
//           callback(value);
//      }
// }


// courses.filter2(function(item){
//      if(item.coin === 40){
//           return item;
//      }
// })


// some() tra ve true/false
// Array.prototype.some2 = function(callback){
//      for(var i in this){
//           if(this.hasOwnProperty(i)){
//                if(callback(this[i], i, this)){
//                     return this[i];
//                }
//           }
//      }  
//      return false; 
// }
// var result = courses.some2(function(item, index, arr){
//      if(item.coin == 40){
//           return item;
//      }
// })
// console.log(result)

// every() tra ve true/false tat ca cac phan tu deu thoa man

// var result = courses.every(function(course, index, array){
//      return course.isFinish;
// })
// console.log(result);


// Array.prototype.every2 = function(callback){
//      for(var i = 0; i < this.length; i++){
//           if(!callback(this[i])){
//               console.log(this[i], i);
//                return false;
//                break;
//           } 
//     }
//     return true;
     
// }
// var result = courses.every2(function(item){
//     return item.isFinish;         
// });
// console.log(result);


// function giaithua(number){
//     if(number > 0){
//         return number * giaithua(number - 1);
//     }
//     return 1;
// }

// console.log(giaithua(3));

// var listItemNodes = document.querySelectorAll('.box1')
// console.log(listItemNodes);
// var x =listItemNodes.querySelector('h1');
// document.getElementById('#idName') // tra ve 1 element
// document.getElementsByClassName('.className') // tra ve HTML collection, 1 mang gom nhieu element
// document.getElementsByTagName('tagName')// // tra ve HTML collection, 1 mang gom nhieu element
// document.querySelector('attribiu CSS')// tra ve 1 element
// document.querySelectorAll('attribiu CSS')//tra ve NodeList, 1 mang gom nhieu element



