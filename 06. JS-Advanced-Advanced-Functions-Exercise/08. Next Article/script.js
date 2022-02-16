function getArticleGenerator(articles) {

    const contentEl = document.getElementById('content');
    
    
    return function showNext() {
        if (articles.length > 0) { 
            const article = articles.shift();
            const articleEl = document.createElement('article');
            articleEl.textContent = article;
           
            
            return contentEl.insertBefore(articleEl, content.firstChild);
            
        } else {
            return
        }
        
    }
}

/*
function getArticleGenerator(articles) {
    const contentEl = document.getElementById('content')
    
    return function showNext() {
        if (articles.length > 0) {
            const article = articles.shift()
            const articleEl = document.createElement('article')
            articleEl.textContent = article;

            return contentEl.insertBefore(articleEl, content.firstChild);
        } else {
            return;
        }
    }

*/
