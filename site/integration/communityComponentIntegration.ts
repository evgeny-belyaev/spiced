import { ICommunityComponent } from "../components/logic/ICommunityComponent"
import { CommunityComponent, CreateCommunityResult } from "../components/logic/CommunityComponent"
import { SpicedDatabase } from "../components/database/spicedDatabase"
import { UrlBuilder } from "../components/urlBuilder"
import { TokenEncryptor } from "../components/TokenEncryptor"
import { Matcher } from "../components/logic/matcher"
import { Community, Matches } from "../components/database/types"
import { FormsApiIntegration } from "./formsApiIntegration"
import { Logger } from "../components/logger"
import { MailComponentIntegration } from "./mailComponentIntegration"

const log = new Logger("CommunityComponentIntegration")

const formsApi = new FormsApiIntegration()
const mailComponent = new MailComponentIntegration()

const realComponent = new CommunityComponent(
    formsApi,
    mailComponent,
    new SpicedDatabase(),
    new UrlBuilder(new TokenEncryptor()),
    new Matcher(new SpicedDatabase()))


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

    async monday(now: Date): Promise<NodeJS.Dict<Matches>> {
        return await realComponent.monday(now)
    }

    sendCreateCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void> {
        log.debug(`CreateCommunity ConfirmationEmail has been sent to ${email}`)
        return Promise.resolve()
    }

    sendJoinCommunityConfirmationEmail(formResponseId: string, email: string): Promise<void> {
        log.debug(`JoinCommunity ConfirmationEmail has been sent to ${email}`)
        return Promise.resolve()
    }

}