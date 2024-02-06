const tabs = {
    btn: document.querySelectorAll('.tab'),
    contentList: document.querySelectorAll('.content-item'),
    check: (btn) => {
        const index = Array.prototype.indexOf.call(tabs.btn ,btn);
        tabs.btn.forEach((btn) => btn.classList.remove('active'));
        tabs.contentList.forEach((btn) => btn.classList.remove('active'));
        tabs.btn[index].classList.add('active');
        tabs.contentList[index].classList.add('active');
    }
}