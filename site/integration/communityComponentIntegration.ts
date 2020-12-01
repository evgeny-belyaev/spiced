import { ICommunityComponent } from "../components/logic/ICommunityComponent"
import { CommunityComponent, CreateCommunityResult } from "../components/logic/CommunityComponent"
import { SpicedDatabase } from "../components/database/spicedDatabase"
import { UrlBuilder } from "../components/urlBuilder"
import { TokenEncryptor } from "../components/TokenEncryptor"
import { Community, Matches } from "../components/database/types"
import { FormsApiIntegration } from "./formsApiIntegration"
import { Logger } from "../components/logger"
import { MailComponentIntegration } from "./mailComponentIntegration"
import { MatcherIntegration } from "./matcherIntegration"

const log = new Logger("CommunityComponentIntegration")

const formsApi = new FormsApiIntegration()
const mailComponent = new MailComponentIntegration()
const matcher = new MatcherIntegration()

const realComponent = new CommunityComponent(
    formsApi,
    mailComponent,
    new SpicedDatabase(),
    new UrlBuilder(new TokenEncryptor()),
    matcher)

export class CommunityComponentIntegration implements ICommunityComponent {
    async createCommunity(formsResponseId: string): Promise<CreateCommunityResult> {
        return await realComponent.createCommunity(formsResponseId)
    }

    async findCommunityById(communityId: string): Promise<Community | null> {
        return await realComponent.findCommunityById(communityId)
    }

    async joinCommunity(communityId: string, formResponseId: string): Promise<Community | null> {
        return await realComponent.joinCommunity(communityId, formResponseId)
    }

    async monday(timeSpanId: string): Promise<NodeJS.Dict<Matches>> {
        return await realComponent.monday(timeSpanId)
    }

    sendCreateCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void> {
        log.debug(`CreateCommunity ConfirmationEmail has been sent to ${email}`)
        return Promise.resolve()
    }

    sendJoinCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void> {
        log.debug(`JoinCommunity ConfirmationEmail has been sent to ${email}`)
        return Promise.resolve()
    }

    async sendOptInRequest(timeSpanId: string): Promise<string> {
        return await realComponent.sendOptInRequest(timeSpanId)
    }

    async optIn(timeSpanId: string, communityId: string, userId: string, optIn: boolean): Promise<void> {
        return await realComponent.optIn(timeSpanId, communityId, userId, optIn)
    }
}