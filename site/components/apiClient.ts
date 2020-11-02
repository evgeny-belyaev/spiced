import { CreateCommunityApi } from "../api/createCommunity"
export class ApiClient {
    static createCommunity = new CreateCommunityApi().client
}
