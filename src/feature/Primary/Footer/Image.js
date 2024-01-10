export default function Image({ name }) {
  return (
    <>
      <div className="mx-2 bg-[#ffffff] p-1 shadow">
        <a>
          <img
            className="h-5 w-12"
            src={require(`assets/images/footer/${name}`)}
          ></img>
        </a>
      </div>
    </>
  );
}
