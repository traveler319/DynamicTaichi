let html=document.querySelector("#html"),style=document.querySelector("#style"),string1="/* 你好，我叫韩毅\n * 接下来我将演示我的前端所学\n * 首先我要准备一个div\n **/\n#div1{\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n}\n/* 接下来就是把div变成一个太极图\n * 首先，把div变成一个圆\n **/\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n    border: none;\n}\n/* 太极由是阴阳形成\n * 一黑一白\n**/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* 接下来画出阴阳鱼的形状 */\n#div1::before{\n    width: 100px;\n    height: 100px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #000;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #fff;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n",string2="",n=0,step=()=>{setTimeout((()=>{"\n"===string1[n]?string2+="<br>":" "===string1[n]?string2+="&nbsp;":string2+=string1[n],html.innerHTML=string2,style.innerHTML=string1.substring(0,n),window.scrollTo(0,99999),html.scrollTo(0,99999),n<string1.length-1&&(n+=1,step())}),10)};step();
//# sourceMappingURL=index.967e3550.js.map
