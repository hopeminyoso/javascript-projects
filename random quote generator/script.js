function generate() {
    var quotes = {
        '– Albert Camus': "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.”",
        '– Ralph Ellison': "When I discover who I am, I’ll be free.”",
        '– Richard Bach': "If you love someone, set them free. If they come back they’re yours; if they don’t they never were.”",
        '– Robert A. Heinlein': "I am free because I know that I alone am morally responsible for everything I do. I am free, no matter what rules surround me.”"
    };

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var randomQuote = quotes[author];

    document.getElementById("quote").innerHTML = randomQuote;
    document.getElementById("author").innerHTML = author;
}
