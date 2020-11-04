import { CreateCommunityApi, CreateCommunityApiParams, CreateCommunityApiResponse } from "../api/createCommunity"

export class ApiClient {
    static createCommunity = (params: CreateCommunityApiParams): Promise<CreateCommunityApiResponse> => {
        return new CreateCommunityApi().client(params)
    }
}
