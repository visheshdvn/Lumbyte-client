export default function ShowTags({ tagname, color }) {
  return (
    <a href={`/tag/${tagname}`} className="margin-tags">
      <h3
        style={{ backgroundColor: `${color}`, padding: "2px 4px" }}
        className="text-whiteMain uppercase lg:text-lg md:text-base text-l font-open-sans font-bold md:leading-none lg:leading-none leading-4"
      >
        {tagname}
      </h3>
    </a>
  );
}
