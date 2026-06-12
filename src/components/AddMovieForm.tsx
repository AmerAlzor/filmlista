import { useState } from "react";

type AddMovieFormProps = {
  onAddMovie: (name: string, grade: number) => void;
};

function AddMovieForm({ onAddMovie }: AddMovieFormProps) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("0");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const movieTitle = name.trim();

    if (movieTitle === "") {
      alert("Du måste skriva in en titel.");
      return;
    }

    if (grade === "0") {
      alert("Du måste välja ett betyg.");
      return;
    }


    setName("");
    setGrade("0");
  }

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <h2>Lägg till film</h2>

      <input
        type="text"
        placeholder="namn"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <select value={grade} onChange={(event) => setGrade(event.target.value)}>
        <option value="0">Välj betyg</option>
        <option value="1">1 betyg</option>
        <option value="2">2 betyg</option>
        <option value="3">3 betyg</option>
        <option value="4">4 betyg</option>
        <option value="5">5 betyg</option>
      </select>

      <button type="submit">Spara film</button>
    </form>
  );
}

export default AddMovieForm;