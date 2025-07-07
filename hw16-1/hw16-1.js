/*Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості. 
Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.

Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. 
Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив 
записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності 
не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.

Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня 
оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , 
то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.*/

function Student(firstname, lastname, birthYear) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthYear = birthYear;

    this.grades = [];
    this.attendance = new Array(25).fill(null);

    this.getAge = function () {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthYear;
        return (`Age: ${age}`);
	};

    this.getAverageGrade = function () {
        if (this.grades.length === 0) {
            return ("Немає оцінок");
        }
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        const average = sum / this.grades.length;
        return (`Середній бал: ${average}`);
    };
  
    this.present = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Усі відвідування вже заповнені.");
        }
    };

 
    this.absent = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Усі відвідування вже заповнені.");
        }
    };

    this.summary = function () {
        const avgGrade = this.grades.length > 0
            ? this.grades.reduce((acc, val) => acc + val, 0) / this.grades.length
            : 0;

        const validAttendance = this.attendance.filter(a => a !== null);
        const avgAttendance = validAttendance.length > 0
            ? validAttendance.filter(a => a === true).length / validAttendance.length
            : 0;

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };

}

const student1 = new Student("Ангеліна", "Фоменко", 2006);
student1.present();
student1.absent();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.grades.push(95, 91, 92, 89, 90);

console.log(student1.getAge());
console.log(student1.getAverageGrade());
console.log(student1.summary());


const student2 = new Student("Олена", "Конотопенко", 2002);
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.grades.push(82, 75, 61, 89, 73);

console.log(student2.getAge());
console.log(student2.getAverageGrade());
console.log(student2.summary());

const student3 = new Student("Андрій", "Потапенко", 2000);
student3.present();
student3.absent();
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.present();
student3.absent();
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.present();
student3.present();
student3.present();
student3.grades.push(65, 68, 73, 61, 78);

console.log(student3.getAge());
console.log(student3.getAverageGrade());
console.log(student3.summary());