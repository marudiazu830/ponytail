function onH1ButtonClick(){
    var headTitle = document.getElementById("headTitle");
    headTitle.textContent=headTitle;
    
}

function onH1TextButtonClick(){
    let headTitle = document.getElementById("headTitle");
    let headTitleText = headTitle.textContent;
    headTitle.textContent=headTitleText;
}

function onH1TextAltButtonClick(){
    let headTitle=document.getElementById("headTitle");
    headTitle.textContent="idによる取得サンプル";
}