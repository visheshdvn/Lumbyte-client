export default function ShowTags({ tagname, color }) {
  return (
    <a href={`/tags/${tagname}`} className="margin-tags">
      <h3
        style={{ color: `${color}`, padding: "2px 4px" }}
        className="text-whiteMain lowercase lg:text-lg md:text-base text-sm font-mono font-bold md:leading-none lg:leading-none leading-4 filter hover:brightness-125"
      >
        {"#" + tagname}
      </h3>
    </a>
  );
}