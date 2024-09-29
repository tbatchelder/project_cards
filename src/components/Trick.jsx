
function Trick({ category, title, description }) {
  return (
    <>
      <div className="card">
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Trick