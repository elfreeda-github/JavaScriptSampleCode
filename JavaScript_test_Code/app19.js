class Article {

    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(a,b) {
        return a.date - b.date;
    }
}

const  articles = [
    new Article("HTML", new Date(2020, 1, 1)),
    new Article("CSS", new Date(2020, 0, 1)),
    new Article("JavaScript", new Date(2020, 11, 1))
];
  
articles.sort(Article.compare);
  
console.log( "article: " , articles[0].title );