const before = `
    <table id="allrecords" data-tilda-email="yes" data-tilda-project-id="3341502" data-tilda-page-id="15719596"
       data-tilda-page-alias="" cellpadding="0" cellspacing="0"
       style="width:100%; border-collapse:collapse; border-spacing:0; padding:0; margin:0; border:0;">
    <tr>
        <td style="background-color: #efefef; "><!--record_mail-->
            <table id="rec257342934" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="619">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; ">
                        <table id="recin257342934" class="r" style="margin: 0 auto;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:0px;padding-bottom:0px;padding-left:0;padding-right:0;">
                                    <table valign="top" border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="height:30px;" height="30px"></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table><!--/record--><!--record_mail-->
            <table id="rec257342935" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="622">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; background-color:#f7c304;">
                        <table id="recin257342935" class="r"
                               style="margin: 0 auto;background-color:#f7c304;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:45px;padding-bottom:45px;padding-left:0;padding-right:0;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td class="t-emailBlock" valign="middle"
                                                style="text-align: left; padding-right: 10px; width: 50%;"><a
                                                    style="text-decoration: none; font-weight: normal; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#000000;font-size:30px;"
                                                    href="https://tilda.cc/">tmixed</a></td>
                                            <td class="t-emailBlock t-emailBlockPadding t-emailAlignLeft"
                                                valign="middle"
                                                style="text-align: right; padding-left: 10px; width: 50%;">
                                                <div style=" font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#000000;font-size:16px;">
                                                    <strong>a brand new networking</strong></div>
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

const after = `
            <table id="rec257342938" style="width:100%; border-collapse:collapse; border-spacing:0; margin:0; border:0;"
                   cellpadding="0" cellspacing="0" data-record-type="627">
                <tr>
                    <td style="padding-left:15px; padding-right:15px; ">
                        <table id="recin257342938" class="r" style="margin: 0 auto;border-spacing: 0;width:600px;"
                               align="center">
                            <tr>
                                <td style="padding-top:30px;padding-bottom:30px;padding-left:30px;padding-right:30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="text-align: center; padding-top: 25px;">
                                                <div style="margin: 0 auto; font-weight: normal; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color:#a1a1a1;font-size:14px;">
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table><!--/record--> </td>
    </tr>
</table><!--/allrecords-->
`

export function replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find, "g"), replace)
}

export function shitRenderPage(content: string, d: NodeJS.Dict<string> = {}) {
    const keys = Object.keys(d)

    for (const key of keys) {
        const replacement = d[key]

        if (replacement) {
            content = replaceAll(content, key, replacement)
        }
    }
    return before + content + after
}

export interface PageProps {
    error?: string
}