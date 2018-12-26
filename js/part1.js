function countChar(line, symbols) {
	symbols = symbols.toLowerCase();
	line = line.toLowerCase();
	var count = 0;

	for (var i = 0; i < line.length; i++) {
		if (line[i] === symbols) {
			count++;
		}
	}
	return count;
}
console.log(countChar('My Random String', 'm'));
// подсчет букв

function compare(first1, last1) {
  if (Object.keys(first1).length !== Object.keys(last1).length) {
    return false;
  }

	for (key in first1) {
		if (!last1.hasOwnProperty(key) || first1[key] !== last1[key]) {
				return false;
    }
	}
  return true;
}
console.log(compare({ one: 1, two: '2' }, { one: 1, two: '2' }));
// глубокое сравнение

function chessBoard(width, height) {
	var length = width * height;
	var str = ' ';
	var res = '#';

	for (var i = 0; i < length; i++) {
		if (i % 2) {
			str += ' ';
		} else {
			str += '#';
		}
	}

	return str.repeat(8, 4);
}
console.log(chessBoard(8, 4));
// шахматная доска


function makeArray(part_one, part_two, step = 1){
    var mas = [];
    if (part_one < part_two) {
      for ( var a=part_one; a <= part_two;){
        mas.push(i);
        a= (a+step);
      }
    } else {
      for (var b= part_one; b>=part_two;){
        mas.push(b);
        b= (b-step);
      }
    }
    return mas;
}
console.log(makeArray(10, 1, 2));
// диапазон

function reverseArray(mas) {
    var mass=[ ];
    for (var i=(mas.length-1); i>=0; i--) {
      mass.push (mas[i]);
    }
    return mass;
}
console.log(reverseArray([1, 2, 3, 4]));
// reverseArray

function reverseArrayInPlace(mas) {
    var mass= mas.slice('D','C','B','A');
    mas=[ ];
    for (var i=(mass.length-1); i>=0; i--) {
      mas.push(mass[i]);
    }
    return mas;
}
 var array = ['A', 'B', 'C', 'D'];
 reverseArrayInPlace(array);
 console.log(array);
// reverseArrayInPlace

function mergeArrays(...args) {
    console.log(args);
    for (var i = 0; i <= args.spread - 1; i++) {
     arguments = [];
  
  }
      return arguments;
}
console.log(mergeArrays([1, 2], [2, 4], [4, 6]));
//свёртка
