var menuIcon = document.querySelector(".menu_icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidbar");
    container.classList.toggle("large_container");
};

var getData = (data) => {

    //get title name
    var headerTitle = document.querySelectorAll(".video-title");
    var i = 0;
    headerTitle.forEach((item) => {
        item.querySelector('h3').textContent = data[i].title;
        i++;
    });

    //get view info
    var channel = document.querySelectorAll(".channel-title");
    var i2 = 0;
    channel.forEach((item) => {
        item.textContent = data[i2].channel;
        i2++;
    })

    //get view
    var view = document.querySelectorAll(".view");
    var i3 = 0;
    view.forEach((item) => {
        item.textContent = data[i3].views;
        i3++;
    });

    //get infomation
    var infomation = document.querySelectorAll(".infomation");
    var i4 = 0;
    infomation.forEach((item) => {
        item.textContent = data[i4].infomation;
        i4++;
    });

    //get date
    var date = document.querySelectorAll(".date");
    var i5 = 0;
    console.log(data);
    date.forEach((item) => {
        console.log(data[i5].date);
        item.textContent = data[i5].date;
        i5++;
    });
};
fetch("http://localhost:3000/posts")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        getData(data);
    })
    .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
    });
