import { getCategories } from "src/api/cards";
import {
  getSectionsList,
  getSubSection,
  getSubSectionItem
} from "src/api/cards";

/*
export function someAction (context) {
}
*/

export async function getSections({ commit }) {
  const sections = await getSectionsList();

  commit("getSectionsSuccess", sections);
}

export async function getSubSectionList({ commit }, id) {
  const subSection = await getSubSection(id);
  commit("getSubSectionSuccess", subSection);
}

// export async function getSubSectionItem({commit}, id){
//     const subSectionItem = await getSubSectionItem(id)
//     commit('getSubSectionItemSuccess', subSectionItem)
// }
