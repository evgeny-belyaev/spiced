import { ICommunityComponent } from "./ICommunityComponent"
import { isIntegration } from "../../api/utils"
import { CommunityComponentIntegration } from "../../integration/communityComponentIntegration"
import { FormsApi } from "../forms/formsApi"
import { MailComponent } from "../mail"
import { SpicedDatabase } from "../database/spicedDatabase"
import { UrlBuilder } from "../urlBuilder"
import { TokenEncryptor } from "../TokenEncryptor"
import { Matcher } from "./matcher"
import { CommunityComponent } from "./CommunityComponent"

export function createCommunityComponent(): ICommunityComponent {
    return isIntegration() ?
        new CommunityComponentIntegration() :
        new CommunityComponent(
            new FormsApi(),
            new MailComponent(),
            new SpicedDatabase(),
            new UrlBuilder(new TokenEncryptor()),
            new Matcher(new SpicedDatabase()))
}