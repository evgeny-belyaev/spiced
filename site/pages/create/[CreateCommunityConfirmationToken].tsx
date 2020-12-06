import React from "react"

import serverEntryPoint, { Props } from "../../components/pages/createCommunity"
import { SpicedPage } from "../../components/SpicedPage"
import { shitRenderPage } from "../../components/pages/utils"

const alreadyCreated = `
            <table id="rec256694311" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="323">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; ">
                        <table id="recin256694311" class="r"
                               style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:30px;padding-bottom:15px;padding-left:30px;padding-right:30px;">
                                    <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%"
                                           style="width: 100%;">
                                        <tr>
                                            <td style="text-align: left; padding: 0 0 0;">
                                                <div style="margin-right: auto; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#222222;font-size:28px;font-weight:bold;">
                                                    Hey you're not alone! Looks like this community has been already
                                                    created!
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table><!--/record--><!--record_mail-->
            <table id="rec256694312" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="329">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; ">
                        <table id="recin256694312" class="r"
                               style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:15px;padding-bottom:15px;padding-left:30px;padding-right:30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;">
                                        <tr>
                                            <td style="text-align: left; padding: 0 0 0;">
                                                <div style="margin-right: auto; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#444444;font-size:20px;line-height:1.45;">
                                                    Here is an invitation link for it: <a href="__LINK__" target="_blank">__LINK__</a>.<br/></div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table><!--/record--><!--record_mail-->

`

const content = `
            <table id="rec257342936" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="323">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; ">
                        <table id="recin257342936" class="r"
                               style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:30px;padding-bottom:15px;padding-left:30px;padding-right:30px;">
                                    <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%"
                                           style="width: 100%;">
                                        <tr>
                                            <td style="text-align: left; padding: 0 0 0;">
                                                <div style="margin-right: auto; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#222222;font-size:28px;font-weight:bold;">
                                                    __COMMUNITY_TITLE__ has been created
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table><!--/record--><!--record_mail-->
            <table id="rec257342937" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="329">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; ">
                        <table id="recin257342937" class="r"
                               style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:15px;padding-bottom:15px;padding-left:30px;padding-right:30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;">
                                        <tr>
                                            <td style="text-align: left; padding: 0 0 0;">
                                                <div style="margin-right: auto; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#444444;font-size:20px;line-height:1.45;">
                                                    That's all, thank you! <br/>Here is an invitation link: <a href="__LINK__" target="_blank">__LINK__</a>
                                                    <br/><br/>Prepare to launch tmixed in your community!<br/>Just
                                                    publish a post with the link and you are all set up!<br/></div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table><!--/record--><!--record_mail-->
`

export default (props: Props) => {
    if (props.error) {
        return <SpicedPage>
            Server error
        </SpicedPage>
    } else {
        const markup = shitRenderPage(
            props.alreadyExist ? alreadyCreated : content,
            {
                "__COMMUNITY_TITLE__": props.communityTitle,
                "__LINK__": props.communityInvitationLink
            }
        )

        return (
            <SpicedPage>
                <div dangerouslySetInnerHTML={{ __html: markup }}></div>
            </SpicedPage>
        )
    }
}

export const getServerSideProps = serverEntryPoint

