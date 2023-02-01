class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static compare(artA, artB) {
        return artA.date - artB.date;
    }

    static createTodays(){
        return new this('Today\'s digest',new Date())
    }
};

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

for(let article of Object.values(articles))
    console.log(article)



