showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

type Lib = {
    lib: string;
    books: number;
    avgPagesPerBook: number;
};

enum Category {
    JavaScript = 'JavaScript',
    CSS = 'CSS',
    HTML = 'HTML',
    TypeScript = 'TypeScript',
    Angular = 'Angular'
}

function getAllBooks(): Book[] {
    const books = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return books;
}

function logFirstAvailable(books: Book[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    const firstAvailable: string = books.find(book => book.available).title;

    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available: ${firstAvailable}`);
}

logFirstAvailable();

function getBookTitlesByCategory(category: Category): string[] {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}

function logBookTitles(titles: string[]){
    console.log(titles);
}

const javascriptBooks = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(javascriptBooks);

function getBookAuthorByIndex(books: Book[], index: number): [title: string, author: string] {
    return [books[index].title, books[index].author];
}

const book = getBookAuthorByIndex(getAllBooks(), 2);
console.log(book);

function calcTotalPages(libraries: Array<Lib>): bigint {
    return libraries.reduce((totalPages, library) => totalPages + BigInt(library.books) * BigInt(library.avgPagesPerBook), BigInt(0));
}

const libraries = [
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
];

const totalPages = calcTotalPages(libraries);
console.log(totalPages);
