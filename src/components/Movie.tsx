type Movieprop = {
  name: string;
  grade: number;
  onRemove: () => void;
};

function Movie({ name, grade, onRemove }: Movieprop) {
  let stars = "";

  if (grade === 1) stars = "🌟";
  if (grade === 2) stars = "🌟🌟";
  if (grade === 3) stars = "🌟🌟🌟";
  if (grade === 4) stars = "🌟🌟🌟🌟";
  if (grade === 5) stars = "🌟🌟🌟🌟🌟";

  return (
    <li className="movie-item">
      <div>
        <span className="movie-title">{name}</span>
        <span className="movie-stars">{stars}</span>

        <button className="remove-button" onClick={onRemove}>
          ❎
        </button>
      </div>
    </li>
  );
}
export default Movie;
