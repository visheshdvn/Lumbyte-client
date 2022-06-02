export function tagsToOptions(tags) {
  const options = tags.map((tag) => {
    return {
      value: tag.id,
      label: tag.tagname,
      color: tag.color,
    };
  });
  return options;
}

export function optionsToTags(options) {
  const tags = options.map((option) => {
    return {
      id: option.value,
      tagname: option.label,
      color: option.color,
    };
  });

  return tags;
}

export function tagIdFromTags(tags) {
  const tagIds = tags.map((tag) => {
    return {
      id: tag.id,
    };
  });
  return tagIds;
}
