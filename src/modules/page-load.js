function pageLoad() {
    const header = document.createElement('p');
    header.id = "header";
    header.innerText ="This is new.";
    document.querySelector("#content").append(header);
}

export default pageLoad;