import Skeleton from "../Skeleton/Skeleton";
import "./Library.scss";
import library from "../static/data/library.json";
import { StarIcon, FilledStarIcon } from "../static/icons";

const Library = () => {
  return (
    <Skeleton>
      <div className="content">
        {library.map((book) => (
          <div className="book" key={book.author}>
            <img className="cover" width="180px" src={book.cover} />
            <p className="title">{book.title}</p>
            <p className="author">{book.author}</p>
            <div className="rating">
              {Array(book.rating)
                .fill(0)
                .map((_, i) => (
                  <FilledStarIcon key={i} />
                ))}
              {Array(5 - book.rating)
                .fill(0)
                .map((_, i) => (
                  <StarIcon key={i} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </Skeleton>
  );
};

export default Library;
