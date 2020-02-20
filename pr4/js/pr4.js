var tasklist = ['Здесь полный список задач, введите соответствующие к ним значения, чтобы запустить задачи...\n\n',
    'Задача 1 - Что выведет консоль?:              1\n',
    'Задача 2 - Current data and time:             2\n',
    'Задача 3 - Reverse a number:                  3\n',
    'Задача 4 - Factorial of a number:             4\n',
    'Задача 5 - Display the larger:                5\n',
    'Задача 6 - Array into a string:               6\n',
    'Задача 7 - Get the month name:                7\n',
    'Задача 8 - Is uppercase or not:               8\n',
    'Задача 9 - Draw a smile:                      9\n',
    'Задача 10 - Скороговорка:                     10\n',
    'Задача 11 - Задать красный цвет:              11\n',
    'Задача 12 - Добавить пять задач:              12\n',
    'Задача 13 - Визуальное отделение абзацев:     13\n',
    'Задача 14 - Заменить товар:                   14\n',
    'Задача 15 - Ввод задач пользователем:         15\n'
];
var answerCheckNum = 0;
var task = prompt(tasklist, task);
if (task == 1) {
    alert("Откройте консоль!");
    console.log("task1");
    for (var i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        });
    }
    console.log("При использовании в цикле, для каждой итерации создается своя переменная. Переменная var - одна на все итерации цикла и видна даже после цикла. С переменной let - все по-другому. Каждому повторению цикла соответствует своя независимая переменная let. Если внутри цикла есть вложенные обьявления функций, то в замыкании каждой будет та переменная, которая быа при соответствующей итерации...");
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}
if (task == 2) {
    alert("Откройте консоль!");
    console.log("task2");
    var now = new Date();
    var day = now.getDay();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log("Today is: " + daylist[day] + ".");
    var second = now.getSeconds();
    var minute = now.getMinutes();
    var hour = now.getHours();
    var dayHalfType;
    if (hour >= 12) {
        dayHalfType = "PM";
        hour = hour - 12;
    } else {
        dayHalfType = "AM";
    }
    console.log("Current time is: " + hour + " " + dayHalfType + " : " + minute + " : " + second);
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        // alert(answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

if (task == 3) {

    var num = prompt("Введите  число : ", num);
    console.log("Example x = " + num);
    var count = num.length - 1;
    var reverseNum = num[count];
    var j = 0;
    var i;
    for (i = count - 1; i >= 0; i--) {
        reverseNum += num[i];
        j++;
    }
    console.log("Expected Output : " + reverseNum);
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        // alert(answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

if (task == 4) {
    alert("Откройте консоль!");
    var num;
    var checkNum = 0;
    var factorial = 1;
    start: while (true) {
        if (checkNum == 0) {
            num = prompt("Введите число, которое больше нуля. ", num);
        } else {
            num = prompt("Число должно быть больше нуля!", num)
        }
        checkNum++;
        if (num > 0) { break; } else { continue start; }
    }
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    console.log(factorial);
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

if (task == 5) {
    alert("Откройте консоль!");
    task5Start: while (true) {
        var numA = prompt("Введите первое целое число : ", numA);
        if (Number.isInteger(numA)) {
            alert("erkek!");
        } else {
            continue task5Start;
        }
        task52Start: while (true) {
            var numB = prompt("Введите второе целое число : ", numB);
            if (Number.isInteger(numB)) {
                break;
            } else {
                continue task52Start;
            }
        }
        break;
    }
    if (numA > numB) {
        console.log(numA + " is a larger integer.");
    } else {
        console.log(numB + " is a larger integer.");
    }
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

if (task == 6) {
    alert("Откройте консоль!");
    var myColor = ["Red", "Green", "White", "Black"];
    var myColorStr;
    console.log("Sample array : " + myColor);
    console.log("Expected output : ");
    console.log(myColor[0] + "," + myColor[1] + "," + myColor[2] + "," + myColor[3]);
    console.log(myColor[0] + "+" + myColor[1] + "+" + myColor[2] + "+" + myColor[3]);
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

if (task == 7) {
    var date = new Date();
    var year = prompt("Введите год : ", year);
    var month = prompt("Введите число месяца (от 1 - 12) : ", month);
    var day = prompt("Введите произвовльное число от 0 - 31", day);
    date.setFullYear(year, month, day);
    var monthlist = ['Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Ноябрь',
        'Декабрь',
    ];
    alert(monthlist[month - 1]);
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

if (task == 8) {
    var word = prompt("Введите любое слово : ", '');
    if (word[0] == word[0].toUpperCase()) {
        alert("Слово начинаеться с заглавной буквы.");
    } else if (word[0] == word[0].toLowerCase()) {
        alert("Слово начинаеться с маленькой буквы.");
    }
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

if (task == 9) {
    window.onload = function drawShape() {
        var canvas = document.getElementById('myDrawing');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle

            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth

            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye

            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye

            ctx.stroke();
        } else {
            alert('Ваш браузер не поддерживает тег canvas...');
        }
    };
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

if (task == 10) {
    alert("Откройте консоль!");
    var song1 = document.getElementById('string-3');
    var song2 = document.getElementById('string-5');
    var song3 = document.getElementById('string-2');
    var song4 = document.getElementById('string-6');
    var song5 = document.getElementById('string-4');
    var song6 = document.getElementById('string-1');
    console.log(song1.textContent);
    console.log(song2.textContent);  
    console.log(song3.textContent);
    console.log(song4.textContent);
    console.log(song5.textContent);
    console.log(song6.textContent);
    function sort() {
        var songs = document.getElementById('strings');
        songs.append(song1);
        songs.append(song2);
        songs.append(song3);
        songs.append(song5);
        songs.append(song4);
        songs.append(song6);
    }
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

if (task == 11) {
    array = ['1', '2', '3', '4', '5', '6'];
    for (var i = 0; i < array.length; i++) {
        if (i >= 3) {
            var testElem = document.getElementById("element" + array[i]);
            testElem.style.color = "green";
        } else {
            var testElem = document.getElementById("element" + array[i]);
            testElem.style.color = "red";
        }
    }
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

if (task == 12) {
    var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
    for (var i = 0; i < tasks.length; i++) {
        var lielement = document.createElement('li');
        lielement.innerHTML = tasks[i];
        ol.before(lielement);
    }
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}


if (task == 13) {
    var par = document.querySelectorAll('p');
    for (var i = 0; i < par.length; i++) {
        var line = document.createElement('hr');
        par[i].append(line);
    }
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

if (task == 14) {
    function Remove() {
        var textnode = document.createTextNode("Canned Fish");
        var x = document.getElementById("cartitems");

        x.children[1].remove();
        x.replaceChild(textnode, x.lastChild);
        x.children[3].remove();
    }
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}




if (task == 15) {
    function addinfo() {
        var ul = document.createElement('ul');
        document.body.appendChild(ul);
        while (true) {
            var newLi = prompt("Введите текст для пункта списка", "");

            if (newLi === null || newLi === 0 || newLi == "") {
                break;
            }

            var li = document.createElement('li');
            li.appendChild(document.createTextNode(newLi));
            ul.appendChild(li);
        }
    }

    function hrline() {
        //  var all=document.getElementByTagName('*');

        var referenceNode = document.querySelectorAll('p');
        for (var i = 0; i < referenceNode.length; i++) {
            var newNode = document.createElement('hr');
            referenceNode[i].appendChild(newNode);
        }
    }
    setTimeout(function() {
        answerCheckNum = prompt("Желаете выполнить следующее задание? 1 - yes / 0 - no", answerCheckNum);
        if (answerCheckNum == 1) {
            location.reload();
        } else {
            alert("Bye,Bye!");
        }
    }, 5000);
}

// else
// {
//     alert("Чтобы проверить определенное задание, Вы должны сначала перейти к этому заданию!!!");
// }