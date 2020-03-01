var tasklist = ['Здесь полный список задач, введите соответствующие к ним значения, чтобы запустить задачи...\n\n',
    'Задача 1 - Fetch() запрос:              1\n',
    'Задача 2 - Вывести Gif:             2\n',
];
var answerCheckNum = 0;
var task = prompt(tasklist, task);

if (task == 1) {
    const requestURL = 'http://46.101.146.101:8081/categories/'

    function sendRequest(method, url) {
        return fetch(url).then(function(response) {
            return response.json();
        });
    }

    sendRequest('GET', requestURL)
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.className = "categories";

                var subDiv = document.createElement("div");
                subDiv.className = "title-idBox";
                div.appendChild(subDiv);

                var tagWithId = document.createElement("h2");
                tagWithId.className = "categories__id";
                tagWithId.innerHTML = (data[i].id);
                subDiv.appendChild(tagWithId);

                var titleTag = document.createElement("p");
                titleTag.className = "categories__titles";
                titleTag.innerHTML = (data[i].title);
                subDiv.appendChild(titleTag);

                var imgTag = document.createElement("img");
                imgTag.className = "categories__images";
                imgTag.src = (data[i].category_image_url);
                div.appendChild(imgTag);

                document.body.appendChild(div);
                if (i === 0) {
                    subDiv.className = "title-idBox forMarginTop";
                }
            }
        })
        .catch(function(error) {
            document.write(error);
        });
}
if (task == 2) {

    var div = document.createElement("div");
    div.className = "searchBox";

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Введите название гифки...");
    input.id = "myInput";
    div.appendChild(input);

    var button = document.createElement("button");
    button.setAttribute("onclick", "searchGif()");
    button.className = "addBtn";
    button.innerHTML = "Поиск";
    button.style = "margin-top: 20px";
    div.appendChild(button);
    document.body.appendChild(div);

    function searchGif() {
        var result = document.createElement("div");
        result.className = "searchResult";
        var inputValue = input.value;


        var img = document.createElement("img");
        img.src = `https://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=boeWbb5zfVkZ9gCOp8VVcXPFAJwF6c2n`;

        div.appendChild(result);
        input.value = "";
    }

} else if (task > 2) {
    alert("Введите правильный номер задания!");
    window.location.reload();
}