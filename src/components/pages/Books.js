import Book from '../Book';
import AddBook from '../UI/AddBook';

const Books = () => (
  <main>
    <div className="container">
      <Book author="Suzanne Collins" title="The Hunger Games" />
      <Book author="Frank Herbit" title="Dune" />
      <Book author="Suzanne Collins" title="Capital in the Twenty-First Century" />
      <AddBook />
    </div>
  </main>
);
export default Books;
