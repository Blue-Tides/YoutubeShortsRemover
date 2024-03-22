chrome.runtime.onInstalled.addListener(() => {
    console.log("downloaded");
});

chrome.tabs.onUpdated.addListener(
    (a,b,c)=>{
        if (c["url"].slice(0,31)=="https://www.youtube.com/shorts/") {
            console.log(c.url)
            console.log("https://www.youtube.com/watch?v="+c["url"].slice(31))
            chrome.tabs.update(
                a,
                {"url":"https://www.youtube.com/watch?v="+c["url"].slice(31)},
                ()=>{},
              );
        }
});