// 轮播图特效
window.onload = function() {
    var c = 0;  //大总管变量
  
    var tb = document.getElementById("tb");
    var imgs = tb.getElementsByTagName("img");
    var lis = tb.getElementsByTagName("li");
      
      // 自动轮播函数
      var run = function self() {
        c++;
        if(c == 5) {
          c =0;
        }
  
        // 循环,让所有图片隐藏 让所有li变灰
        for(var i=0; i<5; i++) {
          imgs[i].style.display = "none";
          lis[i].style.background = "#000";
        }
        // 让c号图片显示, c号li显示
        imgs[c].style.display = "block";
        lis[c].style.background = "red";
      }
      var timer = setInterval(run,2000);
  
  
      // 循环给li加单击事件
      for(var i=0; i<lis.length; i++) {
        // 给i号元素加序号
        lis[i].num = i;
  
        // 移入事件
        lis[i].onmouseover = function() {
          c = this.num;
          clearInterval(timer);
          // 循环,让所有图片隐藏 让所有li变灰
          for(var i=0; i<5; i++) {
            imgs[i].style.display = "none";
            lis[i].style.background = "#000";
          }
  
          // 让c号图片显示, c号li显示
          imgs[c].style.display = "block";
          lis[c].style.background = "red";
          // 移入事件结束
          }
  
        
        
        // 移出事件
        lis[i].onmouseout = function() {
          timer = setInterval(run,2000);
        }
        // 移出事件结束  
        
      }
  
      
  
  }
  