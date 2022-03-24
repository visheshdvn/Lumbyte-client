export default function ShowTags(params) {
  const { tagname, color, textClass } = params;

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

export function DisplayTags({ tags }) {
  return (
    <>
      {tags.map((tag) => (
        <a
          href={`/tags/${tag.tagname}`}
          className="margin-tags"
          key={tag.tagname}
        >
          <h3
            className={`font-mono text-sm font-semibold lowercase leading-4 filter hover:brightness-125 md:text-base md:leading-none lg:leading-none ${
              tag.textClass || null
            }`}
          >
            <span style={{ color: `${tag.color}` }}>#</span>
            {tag.tagname}
          </h3>
        </a>
      ))}
    </>
  );
}
