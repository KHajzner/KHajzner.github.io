import Skeleton from "../Skeleton/Skeleton";
import "./Library.scss";
import library from "../static/data/library.json";
import { HeartIcon, FilledHeartIcon } from "../static/icons";

const Library = () => {
  return (
    <Skeleton>
      <div className="content">
        {library.map((book) => (
          <div className="book" key={book.author}>
            <img className="cover" height="250px" src={book.cover} />
            <p className="title">{book.title}</p>
            <p className="author">{book.author}</p>
            {book.progress == 100 ? (
              <div className="rating">
                {Array(book.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FilledHeartIcon key={i} />
                  ))}
                {Array(5 - book.rating)
                  .fill(0)
                  .map((_, i) => (
                    <HeartIcon key={i} />
                  ))}
              </div>
            ) : (
              <div className="bookProgress">
                <progress value={book.progress} max="100" />
                <p className="percentage">{book.progress}%</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Skeleton>
  );
};

export default Library;
