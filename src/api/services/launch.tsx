import HTTP from "../http";
import { ILaunch } from "../../interfaces/ILaunch";
import { AxiosResponse } from "axios";

const LaunchService = {
  getAllLaunches(): Promise<AxiosResponse<ILaunch[]>> {
    return HTTP.get("/launches");
  },
};

export default LaunchService;
