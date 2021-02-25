import { baseApi } from "./env";

interface PutSwitchPanelParmas {
  id: string;
  value: boolean;
}
interface GetArticleResponse {}

export const putSwitchPanel = (params: PutSwitchPanelParmas) => {
  return baseApi.put<GetArticleResponse>(`/putApi`, { params });
};
