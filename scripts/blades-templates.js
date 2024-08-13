/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {}
 */
export const preloadHandlebarsTemplates = function () {
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    "modules/octomori-sheet/templates/parts/coins.html",
    "modules/octomori-sheet/templates/parts/attributes.html",
    "modules/octomori-sheet/templates/parts/harm.html",
    "modules/octomori-sheet/templates/parts/load.html",
    "modules/octomori-sheet/templates/parts/radiotoggles.html",
    "modules/octomori-sheet/templates/parts/ability.html",
    "modules/octomori-sheet/templates/parts/item.html",
    "modules/octomori-sheet/templates/parts/item-header.html",
    // "modules/octomori-sheet/templates/parts/turf-list.html",
    // "modules/octomori-sheet/templates/parts/cohort-block.html",
    // "modules/octomori-sheet/templates/parts/factions.html",
    "modules/octomori-sheet/templates/parts/active-effects.html",
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
