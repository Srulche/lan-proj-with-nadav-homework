/* LANGUAGE CONTROLLERS */

const LanguageModel = require("../models/Language");

const createNewLanguage = async (name) => {
  return await LanguageModel.create({ name });
};
const addLevelToLanguage = async (languageId, levelId) => {
  const language = await LanguageModel.findById(languageId);
  language.levels.push(levelId);
  return await language.save();
};

module.exports = {
  createNewLanguage,
  addLevelToLanguage,
};
