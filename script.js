document.getElementById('bookSearch').addEventListener('keyup', function(e) {
    let term = e.target.value.toLowerCase();
    let books = document.querySelectorAll('.book-card');

    books.forEach(book => {
        let title = book.querySelector('h3').innerText.toLowerCase();
        let author = book.querySelector('.author').innerText.toLowerCase();
        
        if(title.includes(term) || author.includes(term)) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    });
});