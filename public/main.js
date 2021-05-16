// AJAX 综合应用, 加载分页

// 请求下一页
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      console.log(array);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      if (n === 1) {
        n += 1;
      } else if (n === 2) {
        n = n - 1;
      }
    }
  };
  request.send();
};

// AJAX 加载 JSON, 并将其转为对象
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const obj = JSON.parse(request.response);
      globalMyName.textContent = obj.name;
    }
  };
  request.send();
};

// AJAX 加载 XML
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

// AJAX HTML
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

// AJAX JS
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

// AJAX CSS
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  // 请求文件为同级目录下的文件
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    //   下载完成, 但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      //   console.log("下载完成");
      if (request.status >= 200 && request.status < 300) {
        //   创建 style 标签
        const style = document.createElement("style");
        //   将 响应得到的文本 放到 style 标签里面; 填写 style 内容
        style.innerHTML = request.response;
        // 在 head 元素后面 添加上 style 标签; 插到 head 里面
        document.head.appendChild(style);
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send();
};
