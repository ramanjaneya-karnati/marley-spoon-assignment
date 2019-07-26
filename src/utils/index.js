const transformRecipesData = (chefs, recipes, tags) => {
  const tagsObject = getTagsName(tags);
  const chefsObject = getChefsName(chefs);
  const recipesImagesObject = getImagesUrlsFromReceipes(recipes);
  const data = [];
  recipes.items.forEach(recipe => {
    const object = {};
    object.title = recipe.fields.title;
    object.description = recipe.fields.description;
    const chef = recipe.fields.chef;
    const tags = recipe.fields.tags;
    const photo = recipe.fields.photo;
    if (chef) {
      object.chefName = chefsObject[chef.sys.id];
    }
    object.tags = [];
    tags &&
      tags.forEach(tag => {
        object.tags.push(tagsObject[tag.sys.id]);
      });
    if (photo) {
      object.imageUrl = recipesImagesObject[photo.sys.id];
    }
    data.push(object);
  });
  return data;
};

const getImagesUrlsFromReceipes = recipes => {
  const object = {};
  if (recipes && recipes.includes && recipes.includes.Asset) {
    recipes.includes.Asset.forEach(recipe => {
      object[recipe.sys.id] = recipe.fields.file.url;
    });
  }
  return object;
};

const getChefsName = chefs => {
  const object = {};
  if (chefs && chefs.items) {
    chefs.items.forEach(chef => {
      object[chef.sys.id] = chef.fields.name;
    });
  }
  return object;
};

const getTagsName = tags => {
  const object = {};
  if (tags && tags.items) {
    tags.items.forEach(tag => {
      object[tag.sys.id] = tag.fields.name;
    });
  }
  return object;
};

export { transformRecipesData };
