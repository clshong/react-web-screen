import { MockMethod } from "vite-plugin-mock";
import { RequestHttpEnum, ResultEnum } from "@/enums/httpEnum";
import leftPageData from "./leftPageData";
import centerPageData from "./centerPageData";
import rightPageData from "./rightPageData";

export const leftPageDataApi = "/api/leftPageData";
export const centerPageDataApi = "/api/centerPageData";
export const rightPageDataApi = "/api/rightPageData";

const successObject = (data: unknown) => {
  return {
    code: ResultEnum.SUCCESS,
    msg: "请求成功",
    data,
  };
};

const mockMethod: MockMethod[] = [
  {
    url: leftPageDataApi,
    method: RequestHttpEnum.GET,
    response: () => successObject(leftPageData),
  },
  {
    url: centerPageDataApi,
    method: RequestHttpEnum.GET,
    response: () => successObject(centerPageData),
  },
  {
    url: rightPageDataApi,
    method: RequestHttpEnum.GET,
    response: () => successObject(rightPageData),
  },
];

export default mockMethod;
