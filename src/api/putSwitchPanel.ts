import { baseApi } from "~modules/common";

interface PutSwitchPanelParmas {
  id: string;
  value: boolean;
}
interface GetArticleResponse = ArticleSchema;

export const putSwitchPanel = (articleId: string) => {
  return baseApi.get<PutSwitchPanelParmas>(`/api/v1/articles/${articleId}`);
};
