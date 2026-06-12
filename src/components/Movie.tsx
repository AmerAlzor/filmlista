type Movieprop = {
    name: string;
    grade: number;
};

function Movie({ name, grade }: Movieprop){
    let stars =  "";
    
  if (grade === 1) stars = "🌟";
  if (grade === 2) stars = "🌟🌟";
  if (grade === 3) stars = "🌟🌟🌟";
  if (grade === 4) stars = "🌟🌟🌟🌟";
  if (grade === 5) stars = "🌟🌟🌟🌟🌟";    

  return (
    <li className = "movie-item">
    {name} - {stars}
    </li>
  );

}