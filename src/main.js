let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string1 = `/* 你好，我叫韩毅
 * 接下来我将演示我的前端所学
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来就是把div变成一个太极图
 * 首先，把div变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 太极由是阴阳形成
 * 一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 接下来画出阴阳鱼的形状 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

let string2 = ""; // 用来缓存输出结果，因为要对其进行一些修改

let n = 0;

let step = () => {
  setTimeout(() => {
    // 如果是回车，就不照搬，并将回车符\n修改为HTML里的回车<br>, 空格修改为HTML里的转义字符&nbsp;
    // string2 += string1[n] === "\n" ? "<br>" : string1[n];
    if (string1[n] === "\n") {
      string2 += "<br>";
    } else if (string1[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string1[n];
    }

    html.innerHTML = string2;

    // 将字符串第1个到第n+1个元素之间的内容赋值给style
    style.innerHTML = string1.substring(0, n);

    // 设置浏览器的滚动条
    window.scrollTo(0, 99999);

    // 设置div的滚动条
    html.scrollTo(0, 99999);

    if (n < string1.length - 1) {
      // 如果n不是最后一个，就继续
      n += 1;
      step();
    } else {
    }
  }, 10);
};

step();
