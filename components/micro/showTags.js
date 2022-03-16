export default function ShowTags({ tagname, color, textClass }) {
  return (
    <a href={`/tags/${tagname}`} className="margin-tags">
      <h3
        className={`font-mono text-sm font-semibold lowercase leading-4 filter hover:brightness-125 md:text-base md:leading-none lg:leading-none ${
          textClass || null
        }`}
      >
        <span style={{ color: `${color}` }}>#</span>
        {tagname}
      </h3>
    </a>
  );
}
