// 콜라츠 수열 만들기
function solution(n) {
  let arr = []
  while (n !== 1) {
    if (n % 2 === 0) {
      // n = n / 2
      arr.push(n)
    } else {
      // n = 3 * n + 1
      arr.push(n / 2)
    }
  }
  console.log(arr)
}

solution(10)

// 카운트 업
/* function solution(start, end) {
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

solution(3, 10) */

// 수 조작하기2
/* function solution(numLog) {
  let answer = ""
  for (let i = 0; i < numLog.length; i++) {
    let cal = numLog[i - 1] - numLog[i]
    if (cal === 1) {
      answer += "s"
    } else if (cal === -1) {
      answer += "w"
    } else if (cal === -10) {
      answer += "d"
    } else if (cal === 10) {
      answer += "a"
    } else if (cal === undefined) {
      answer += ""
    }
  }
  return answer
}

// 남의 풀이
const convert = {
  1: "w",
  "-1": "s",
  10: "d",
  "-10": "a",
}

return numLog
  .slice(1)
  .map((v, i) => {
    return convert[v - numLog[i]]
  })
  .join("") */

// 수 조작하기1
/* function solution(n, control) {
  for (i of control) {
    if (i === "w") {
      n += 1
    } else if (i === "s") {
      n -= 1
    } else if (i === "d") {
      n += 10
    } else if (i === "a") {
      n -= 10
    }
  }
  return n
}

// 남의 풀이
const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
}

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n)
}

// 남의 풀이2
for (let i = 0; i < control.length; i++) {
  switch (control[i]) {
    case "w":
      n++
      break
    case "s":
      n--
      break
    case "d":
      n += 10
      break
    case "a":
      n -= 10
      break
  }
}
return n */

// 마지막 두 원소
/* function solution(num_list) {
  let finalNum = num_list[num_list.length - 1]
  let secondNum = num_list[num_list.length - 2]
  if (finalNum > secondNum) {
    num_list.push(finalNum - secondNum)
  } else {
    num_list.push(finalNum * 2)
  }
  return num_list
}

// 남의 풀이
const [a, b] = [...num_list].reverse()
return [...num_list, a > b ? a - b : a * 2] */

// 이어 붙인 수
/* function solution(num_list) {
  let oddNum = ""
  let evenNum = ""
  const aa = num_list.map((x) => x.toString())
  for (const num of aa) {
    Number(num) % 2 ? (oddNum += num) : (evenNum += num)
  }
  return parseInt(oddNum) + parseInt(evenNum)
}

solution([3, 4, 5, 2, 1])
solution([5, 7, 8, 3])

// 남의 풀이 (멋지긴 하나 가독성은 떨어지는)
const odd = [...(num_list + "")]
  .map((x) => (Number(x) % 2 === 1 ? x : ""))
  .join("")
const even = [...(num_list + "")]
  .map((x) => (Number(x) % 2 === 0 ? x : ""))
  .join("")
return Number(odd) + Number(even) */

// 원소들의 곱과 합
/* function solution(num_list) {
  let multiple = 0
  let square = 0
  for (let i = 0; i < num_list.length; i++) {
    multiple = num_list.reduce((p, c) => p * c, 1)
    square = num_list.reduce((p, c) => p + c, 0) ** 2
  }
  return multiple < square ? 1 : 0
}

// 남의 풀이
function solution(num_list) {
    let accMul = 1
    let accSum = 0
    for (const num of num_list) {
        accMul *= num
        accSum += num
    }
    return accMul < accSum ** 2 ? 1 : 0
} */

// 등차수열의 특정한 항만 더하기
/* function solution(a, d, included) {
  let arr = []
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      arr.push(a + d * i)
    }
  }
  return arr.reduce((p, c) => p + c, 0)
}

// 남의 풀이
var answer = 0;
    // an = a + d(n - 1);
    for(let i = 0; i < included.length; i++) {
        if(included[i]) {
            answer += (a + (d * i))
        }
    }
    return answer; */

// 문자열 겹쳐쓰기
/* 
const str1 = "He11oWor1d"
const ovr1 = "lloWorl"
const s1 = 2

// front = He 2
// middle = ovr1 7 (s)
// back =
const str2 = "Program29b8UYP"
const ovr2 = "merS123"
const s2 = 7

const sol = (mystr, ovstr, s) => {
  const front = mystr.substring(0, s)
  const back = mystr.substring(s + ovstr.length)
  console.log(front + ovstr + back)
}

sol(str1, ovr1, s1)
sol(str2, ovr2, s2)

} */

// [미] 홀짝에 따라 다른 값 반환하기
/* function solution(n) {
  let arr = []
  if (n % 2 === 0) {
    for (let i = 1; i < n; i++) {
      while (2 * i <= n) {
        arr.push(2 * i)
        i + 1
        break
      }
      const arr2 = arr.map((x) => x ** 2)
      return arr2.reduce((p, c) => p + c, 0)
    }
  } else {
    for (let i = 1; i <= n; i++) {
      while (2 * i - 1 <= n) {
        arr.push(2 * i - 1)
        i + 1
        break
      }
      return arr.reduce((p, c) => p + c, 0)
    }
  }
} */

// 대소문자 바꿔서 출력하기
/* let str = "aBcDeFg"
let answer = []
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toLowerCase()) {
    answer.push(str[i].toUpperCase())
  } else if (str[i] === str[i].toUpperCase()) {
    answer.push(str[i].toLowerCase())
  }
}
console.log(answer.toString().split(",").join(""))

// 남의 풀이1
str = input[0].split("")
str.forEach((value, index) => {
  if (value === value.toUpperCase()) {
    str[index] = value.toLowerCase()
  } else {
    str[index] = value.toUpperCase()
  }
})
console.log(str.join(""))

// 남의 풀이2
ss = ""
for (let i of str) {
  if (i == i.toUpperCase()) {
    ss += i.toLowerCase()
  } else {
    ss += i.toUpperCase()
  }
}
console.log(ss) */

// [미] 원소들의 곱과 합
/* let arr = [3, 4, 5, 2, 1]
let arr2 = [5, 7, 8, 3]

let multiple = arr2.reduce((p, c) => console.log(p * c), Math.min(...arr2))
let square = arr2.reduce((p, c) => p + c, Math.min(...arr2)) ** 2

console.log(multiple, square)
console.log(5 * 7 * 8 * 3) */

// 주사위 게임2
/* const a1 = 2
const b1 = 6
const c1 = 1

const a2 = 5
const b2 = 3

const a3 = 4

function solution(a, b, c) {
  if (a !== b && b !== c && c !== a) {
    return a + b + c
  } else if (a === b && a === c && b === c) {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
  } else return (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
}

console.log(solution(a1, b1, c1))
console.log(solution(a2, b2, b2))
console.log(solution(a3, a3, a3)) */

// flag에 따라 다른 값 반환하기
/* return flag?a+b:a-b */

// 공배수
/* return number % n === 0 && number % m === 0 ? 1 : 0
// 남의 풀이1
return +!(number % n || number % m); // 이거 뭘까??
// 남의 풀이2
return (number%n ===0) ? (number%m===0) ? 1 : 0 : 0;
*/

// n의 배수
// return num % n === 0 ? 1 : 0

// 두 수의 연산값 비교하기
/* return Math.max(Number(`${a}${b}`), 2*a*b
// 남의 풀이 (Math.max 안 쓴 거)
let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
*/
// 더 크게 합치기
/* function solution(a, b) {
  const a_str = a.toString()
  const b_str = b.toString()
  const ab = parseInt(a_str + b_str)
  const ba = parseInt(b_str + a_str)
  if (ab > ba) {
    return ab
  } else if (ab < ba) {
    return ba
  } else {
    return ab
  }
} 
// 남의 풀이
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))


*/

// 문자열 곱하기
/* function solution(my_string, k) {
  return my_string.repeat(k)
} */

// 문자 리스트를 문자열로 변환하기
/* function solution(arr) {
  let answer = arr.toString().split(",").join("")
  return answer
}

// 남의 풀이
return arr.join("")
*/

// 문자열 섞기
/* const str1 = "aaaaa"
const str2 = "bbbbb"

const arr = []
for (let i = 0; i < str1.length; i++) {
  const arr1 = Array.from(str1.split(""))
  const arr2 = Array.from(str2.split(""))
  arr.push(arr1[i])
  arr.push(arr2[i])
}

console.log(arr.toString().split(",").join(""))

- 남의 풀이
function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join("")
} */

// 문자열 반복해서 출력하기
/* let input = "string 5".split(" ")

let str = input[0]
let n = Number(input[1])
console.log(str.repeat(n)) */

// 조건 문자열
/* 
const ineq1 = "<"
const ineq2 = ">"
const eq1 = "="
const eq2 = "!"
const n1 = 20
const m1 = 50
const n2 = 41
const m2 = 78

function solution(ineq, eq, n, m) {
  if (ineq === "<" && eq === "=") {
    return Number(n <= m)
  } else if (ineq === ">" && eq === "=") {
    return Number(n >= m)
  } else if (ineq === ">" && eq === "!") {
    return Number(n > m)
  } else if (ineq === "<" && eq === "!") {
    return Number(n < m)
  }
}
*/

// 글자 이어 붙여 문자열 만들기

/* const str1 = "cvsgiorszzzmrpaqpe"
const idx1 = [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]

const str2 = "zpiaz"
const idx2 = [1, 2, 0, 0, 3]

function solution(mystr, idxlist) {
  const strArr = new Array(...mystr.split(""))
  let newArr = new Array()
  for (let i = 0; i < idxlist.length; i++) {
    newArr.push(mystr[idxlist[i]])
  }
  return newArr.join("")
}

solution(str1, idx1)
solution(str2, idx2)

- 남의 풀이
function solution(my_string, index_list) {
    return index_list.map(i => my_string[i]).join('')
} */

// 9로 나눈 나머지

/* const n1 = "123"
const n2 = "78720646226947352489"

function solution(n) {
  const sum = n.split("").reduce((a, c) => Number(a) + Number(c), 0)
  return sum % 9
}

console.log(solution(n1))
console.log(solution(n2)) */
