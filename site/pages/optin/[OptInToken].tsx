import serverEntryPoint, { Props } from "../../components/pages/optin"
import React from "react"
import { SpicedPage } from "../../components/SpicedPage"
import { shitRenderPage } from "../../components/pages/utils"

const yesMarkup = `
            <table id="rec257396808" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="323">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; ">
                        <table id="recin257396808" class="r"
                               style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:30px;padding-bottom:15px;padding-left:30px;padding-right:30px;">
                                    <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%"
                                           style="width: 100%;">
                                        <tr>
                                            <td style="text-align: left; padding: 0 0 0;">
                                                <div style="margin-right: auto; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#222222;font-size:28px;font-weight:bold;">
                                                    You are participating in tmixed next week!<em></em></div>
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

const noMarkup = `
            <table id="rec257415709" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="323">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; ">
                        <table id="recin257415709" class="r"
                               style="margin: 0 auto;background-color:#ffffff;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:30px;padding-bottom:15px;padding-left:30px;padding-right:30px;">
                                    <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%"
                                           style="width: 100%;">
                                        <tr>
                                            <td style="text-align: left; padding: 0 0 0;">
                                                <div style="margin-right: auto; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#222222;font-size:28px;font-weight:bold;">
                                                    Thanks for letting us know!<br/>Take your time and we see us next
                                                    week.
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

export default (props: Props) => {
    if (props.error) {
        return (
            <SpicedPage title="Server error">
                Server error
            </SpicedPage>
        )
    } else {
        const markup = shitRenderPage(
            props.optIn ? yesMarkup : noMarkup
        )

        const title = props.optIn ? "You are participating in tmixed next week!" : "Thanks for letting us know!"

        return (
            <SpicedPage title={title}>
                <div dangerouslySetInnerHTML={{ __html: markup }}></div>
            </SpicedPage>
        )
    }
}

export const getServerSideProps = serverEntryPoint