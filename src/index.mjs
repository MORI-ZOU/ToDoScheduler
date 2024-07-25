// import "./styles.css";

const onClickAdd = () => {
    //テキストボックスの値を取得して初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleteTodo(inputText);
};

const createIncompleteTodo = (todo) => {
    //li生成
    const li = document.createElement("li");

    //div生成
    const div = document.createElement("div");
    div.className = "list-row";

    //p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;

    //button生成
    const completeButton = document.createElement("button")
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        //押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを消す
        const moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();

        //戻すボタンを生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            const todoText = backButton.previousElementSibling.innerText;
            createIncompleteTodo(todoText);
            backButton.closest("li").remove();
        });

        moveTarget.firstElementChild.appendChild(backButton);

        //完了リストに移動
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        //押されたボタンの親のliタグを削除
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    //要素を追加
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    document.getElementById("incomplete-list").appendChild(li);
};



document.getElementById("add-button").addEventListener("click", onClickAdd);
