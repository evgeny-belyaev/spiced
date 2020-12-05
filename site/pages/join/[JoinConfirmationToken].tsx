import serverEntryPoint, { Props } from "../../components/pages/join"
import React from "react"
import { SpicedPage } from "../../components/SpicedPage"
import { shitRenderPage } from "../../components/pages/utils"

const alreadyJoined = `
            <table id="rec257431099" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="323">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; ">
                        <table id="recin257431099" class="r"
                               style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:30px;padding-bottom:15px;padding-left:30px;padding-right:30px;">
                                    <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%"
                                           style="width: 100%;">
                                        <tr>
                                            <td style="text-align: left; padding: 0 0 0;">
                                                <div style="margin-right: auto; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#222222;font-size:28px;font-weight:bold;">
                                                    Hey, you are not alone!<br/>You have already joined the __COMMUNITY_TITLE__
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
`

const content = `
            <table id="rec256693177" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="323">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; ">
                        <table id="recin256693177" class="r"
                               style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:30px;padding-bottom:15px;padding-left:30px;padding-right:30px;">
                                    <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%"
                                           style="width: 100%;">
                                        <tr>
                                            <td style="text-align: left; padding: 0 0 0;">
                                                <div style="margin-right: auto; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#222222;font-size:28px;font-weight:bold;">
                                                    You have successfully joined the __COMMUNITY_TITLE__<span mc:edit="communityTitle"></span>
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
            <table id="rec256693178" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="329">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; ">
                        <table id="recin256693178" class="r"
                               style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:15px;padding-bottom:15px;padding-left:30px;padding-right:30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;">
                                        <tr>
                                            <td style="text-align: left; padding: 0 0 0;">
                                                <div style="margin-right: auto; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#444444;font-size:20px;line-height:1.45;">
                                                    That's all, thank you! <br/><br/> Get ready to meet your first
                                                    tmixed match! <br/>I am looking forward to sending it to you on
                                                    Monday.<br/></div>
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
        return (
            <SpicedPage>
                Server error
            </SpicedPage>
        )
    } else {
        const markup = shitRenderPage(
            props.alreadyJoined ? alreadyJoined : content,
            {
                "__COMMUNITY_TITLE__": props.communityTitle
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