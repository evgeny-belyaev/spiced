import React from "react"
import serverEntryPoint, { Props } from "../../components/pages/invitation"
import { SpicedPage } from "../../components/SpicedPage"
import Head from "next/head"
import { TypeFormEmbed } from "../../components/forms/TypeFormEmbed"
import { Forms } from "../../components/constants"
import { replaceAll } from "../../components/pages/utils"

const content = `
<div id="allrecords" data-tilda-export="yes" class="t-records" data-hook="blocks-collection-content-node"
     data-tilda-project-id="3144422" data-tilda-page-id="15810352"
     data-tilda-formskey="b48a47b14636ada18de4c314401b008d">
    <div id="rec258697336" class="r t-rec" style="background-color:#d9cb00; " data-animationappear="off"
         data-record-type="206" data-bg-color="#d9cb00"><!-- cover -->
        <div class="t-cover" id="recorddiv258697336" bgimgfield="img"
             style="height:100vh; background-image:url('images/tild3331-6534-4530-b435-326165623563__noroot.png');">
            <div class="t-cover__carrier" id="coverCarry258697336" data-content-cover-id="258697336"
                 data-content-cover-bg="images/tild3331-6534-4530-b435-326165623563__noroot.png"
                 data-content-cover-height="100vh" data-content-cover-parallax=""
                 style="height:100vh;background-attachment:scroll; "></div>
            <div class="t-cover__filter"
                 style="height:100vh;background-image: -moz-linear-gradient(top, rgba(0,0,0,0.0), rgba(0,0,0,0.0));background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.0), rgba(0,0,0,0.0));background-image: -o-linear-gradient(top, rgba(0,0,0,0.0), rgba(0,0,0,0.0));background-image: -ms-linear-gradient(top, rgba(0,0,0,0.0), rgba(0,0,0,0.0));background-image: linear-gradient(top, rgba(0,0,0,0.0), rgba(0,0,0,0.0));filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#fe000000', endColorstr='#fe000000');"></div>
            <div class="t-container">
                <div class="t-col t-col_12">
                    <div class="t-cover__wrapper t-valign_middle" style="height:100vh; position: relative;z-index: 1;">
                        <div class="t183">
                            <div data-hook-content="covercontent">
                                <div class="t183__wrapper">
                                    <div class="t183__uptitle t-uptitle t-uptitle_xxl" style="color:#000000;"
                                         field="subtitle">
                                        <div style="font-size:102px;" data-customstyle="yes">tmixed</div>
                                    </div>
                                    <div class="t183__title t-title t-title_xl" style="color:#000000;font-size:100px;"
                                         field="title">
                                        <div style="font-size:32px;" data-customstyle="yes">Someone invited you to take part in "__COMMUNITY__".<br/>
                                            </div>
                                    </div>
                                    <div class="t183__buttons"><a
                                            id="open_form"
                                            href="#"
                                            target="" class="t-btn js-click-stat "
                                            data-tilda-event-name="/tilda/click/rec258697336/button1"
                                            style="color:#ffffff;background-color:#000000;border-radius:30px; -moz-border-radius:30px; -webkit-border-radius:30px;">
                                        <table style="width:100%; height:100%;">
                                            <tr>
                                                <td>Join</td>
                                            </tr>
                                        </table>
                                    </a></div>
                                    
                                    <div class="t183__title t-title t-title_xl" style="color:#000000;font-size:100px;"
                                         field="title">
                                        <div style="font-size:32px;" data-customstyle="yes">
                                            <span style="font-size:22px;">
                                            First time here? <a style="color: black;" href="https://tmixed.com/?utm_source=organic&utm_medium=invite-link&utm_campaign=top-link" target="_blank"><u>Learn more.</u></a>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style>#rec258697336 .t-btn[data-btneffects-first],
        #rec258697336 .t-btn[data-btneffects-second],
        #rec258697336 .t-submit[data-btneffects-first],
        #rec258697336 .t-submit[data-btneffects-second] {
            position: relative;
            overflow: hidden;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }</style>
        <script type="text/javascript">$(document).ready(function () {
        })</script>
    </div>
    <div id="rec258697337" class="r t-rec" style=" " data-animationappear="off" data-record-type="796"><!-- T796 -->
        <div class="t796">
            <div class="t796__shape-border t796__shape-border_bottom-flip">
                <svg class="t796__svg" style="height:8vw;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 200"
                     preserveAspectRatio="none">
                    <path d="M1280 200H0V0l1280 195.5v4.5z"/>
                </svg>
            </div>
        </div>
        <script> $(document).ready(function () {
            t796_init("258697337")
        })</script>
    </div>
    <div id="rec258697338" class="r t-rec t-rec_pt_180 t-rec_pb_180"
         style="padding-top:180px;padding-bottom:180px;background-color:#1f5bff; " data-record-type="488"
         data-bg-color="#1f5bff"><!-- t488 -->
        <div class="t488">
            <div class="t-container t-align_center">
                <div class="t-col t-col_10 t-prefix_1">
                    <div class="t488__uptitle t-uptitle t-uptitle_lg t-margin_auto" field="subtitle"
                         style="margin-bottom:35px;">
                        <div style="font-size:16px;" data-customstyle="yes">What TMIXED does?</div>
                    </div>
                    <div class="t488__descr t-title t-title_xl t-margin_auto" field="descr" style="">
                        <div style="font-size:32px;" data-customstyle="yes">Once a week we match you with a person from
                            your community.<br/>You have a call, the meeting format is casual as a friendly talk on a
                            conference afterparty.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="rec258697339" class="r t-rec" style=" " data-animationappear="off" data-record-type="796"><!-- T796 -->
        <div class="t796">
            <div class="t796__shape-border t796__shape-border_bottom-flip">
                <svg class="t796__svg" style="height:8vw;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 200"
                     preserveAspectRatio="none">
                    <path d="M1280 200H0V0l1280 195.5v4.5z"/>
                </svg>
            </div>
        </div>
        <script> $(document).ready(function () {
            t796_init("258697339")
        })</script>
    </div>
    <div id="rec258697343" class="r t-rec t-rec_pt_150 t-rec_pb_150" style="padding-top:150px;padding-bottom:150px; "
         data-record-type="576"><!-- T576 -->
        <div class="t576">
            <div class="t-section__container t-container">
                <div class="t-col t-col_12">
                    <div class="t-section__topwrapper t-align_center">
                        <div class="t-section__title t-title t-title_xs t-animate" data-animate-style="zoomin"
                             data-animate-group="yes" field="btitle">How it works?
                        </div>
                    </div>
                </div>
            </div>
            <div class="t-container t576__container">
                <div class="t576__item">
                    <div class="t-width t-width_8 t576__mainblock">
                        <div class="t576__col t-align_center">
                            <div class="t576__linewrapper">
                                <div class="t576__line" style="width: 2px;background-color:#e0e0e0;"></div>
                                <div class="t576__circle" style=" border-width: 2px; ">
                                    <div class="t576__number t-name t-name_xs" style="">1</div>
                                </div>
                            </div>
                            <div class="t576__block"><img class="t576__img t-img" imgfield="li_img__1479137044697"
                                                          src="images/lib__tildaicon__35313164-3939-4464-a133-303530326338__Tilda_Icons_39_IT_landing.svg"">
                                <div class="t576__title t-name t-name_lg" field="li_title__1479137044697" style="">Take
                                    part in TMIXED
                                </div>
                                <div class="t576__descr t-text t-text_xs" field="li_descr__1479137044697" style="">You
                                    sign up in a community.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="t576__item">
                    <div class="t-width t-width_8 t576__mainblock">
                        <div class="t576__col t576__flipped t-align_center">
                            <div class="t576__linewrapper">
                                <div class="t576__line" style="width: 2px;background-color:#e0e0e0;"></div>
                                <div class="t576__circle" style=" border-width: 2px; ">
                                    <div class="t576__number t-name t-name_xs" style="">2</div>
                                </div>
                            </div>
                            <div class="t576__block-flipped"><img class="t576__img t-img"
                                                                  imgfield="li_img__1479137356907"
                                                                  src="images/lib__tildaicon__31333233-6466-4266-b936-646463376562__Layer_1.svg"">
                                <div class="t576__title t-name t-name_lg" field="li_title__1479137356907" style="">Get
                                    matched
                                </div>
                                <div class="t576__descr t-text t-text_xs" field="li_descr__1479137356907" style="">Every
                                    Monday you get an email with contact of a new person who is ready to chat this week.
                                    And your match gets yours.<br/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="t576__item">
                    <div class="t-width t-width_8 t576__mainblock">
                        <div class="t576__col t-align_center">
                            <div class="t576__linewrapper">
                                <div class="t576__line" style="width: 2px;background-color:#e0e0e0;"></div>
                                <div class="t576__circle" style=" border-width: 2px; ">
                                    <div class="t576__number t-name t-name_xs" style="">3</div>
                                </div>
                            </div>
                            <div class="t576__block"><img class="t576__img t-img" imgfield="li_img__1479137790652"
                                                          src="images/lib__tildaicon__38663634-6561-4037-a537-386537613761__5ev_couple.svg"">
                                <div class="t576__title t-name t-name_lg" field="li_title__1479137790652" style="">Get
                                    in touch
                                </div>
                                <div class="t576__descr t-text t-text_xs" field="li_descr__1479137790652" style="">Now
                                    you have a full freedom to set up a meeting in a format which suits you best: zoom
                                    call, google hangouts, or even a pigeon mail if you want to stay old-fashioned!<br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript"> $(document).ready(function () {
            t576_init("258697343")
        })
        $(window).load(function () {
            t576_init("258697343")
        }) </script>
    </div>
    <div id="rec258697341" class="r t-rec t-rec_pt_180 t-rec_pb_180"
         style="padding-top:180px;padding-bottom:180px;background-color:#1f5bff; " data-record-type="478"
         data-bg-color="#1f5bff"><!-- T478 -->
        <div style="width: 0; height: 0; overflow: hidden;">
            <div class="t478__sizer t-col t-col_6" data-auto-correct-mobile-width="false" style="height:450px;"></div>
        </div>
        <div class="t478">
            <div class="t-container">
                <div class="t478__top t-col t-col_6 ">
                    <div class="t478__textwrapper t-align_left" style="height:450px;">
                        <div class="t478__content t-valign_middle">
                            <div class="t478__box">
                                <div class="t478__title t-title t-title_xs " field="title" style="color:#ffffff;">It
                                    works best when you want to meet new people but don't know where to start.<br/><br/>TMIXED
                                    will take care of finding a good match for you within a community!
                                </div>
                                <div class="t478__line " style="background-color: #ffffff;"></div>
                                <div class="t478__descr t-descr t-descr_md " field="descr" style="max-width:500px;">
                                    <div style="color:#ffffff;" data-customstyle="yes"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="t-col t-col_6 ">
                    <div class="t478__blockimg t-bgimg"
                         data-original="images/tild3231-6464-4966-a361-623637343666__2020-12-06_142852.jpg"
                         bgimgfield="img"
                         style="background-image:url('images/tild3231-6464-4966-a361-623637343666__2020-12-06_142852.jpg'); height:450px;"></div>
                </div>
            </div>
        </div>
        <script type="text/javascript"> $(window).resize(function () {
            if (typeof window.noAdaptive != "undefined" && window.noAdaptive == true && $isMobile) {
                return
            }
            t478_setHeight("258697341")
        })
        $(document).ready(function () {
            t478_setHeight("258697341")
        })
        $(".t478").bind("displayChanged", function () {
            t478_setHeight("258697341")
        })</script>
    </div>
    <div id="rec258697342" class="r t-rec" style=" " data-animationappear="off" data-record-type="796"><!-- T796 -->
        <div class="t796">
            <div class="t796__shape-border t796__shape-border_top">
                <svg class="t796__svg" style="height:8vw;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 200"
                     preserveAspectRatio="none">
                    <path d="M1280 200H0V0l1280 195.5v4.5z"/>
                </svg>
            </div>
        </div>
        <script> $(document).ready(function () {
            t796_init("258697342")
        })</script>
    </div>
    <div id="rec258697345" class="r t-rec t-rec_pt_180 t-rec_pb_180"
         style="padding-top:180px;padding-bottom:180px;background-color:#eeeeee; " data-record-type="489"
         data-bg-color="#eeeeee"><!-- T489 -->
        <div class="t489">
            <div class="t-container">
                <div class="t489__top t-col t-col_5 t-prefix_1">
                    <div class="t489__title t-title t-title_md" field="title" style="">Why do we suck without TMIXED?
                    </div>
                </div>
                <div class="t-col t-col_5 ">
                    <div class="t489__descr t-descr t-descr_md" field="descr" style="">We usually expand our
                        professional contacts and meet cool people in many ways, such as through our studies or at work.
                        Conferences and workshops would typically also be helpful, but we have all been stuck online
                        recently, and have been experiencing less possibilities to widen our circle of people that we
                        collaborate with. <br/><br/> With TMIXED, you will build bridges and connect with real
                        professionals from the best communities in IT, business and science. This easygoing format
                        allows you to find people who best suit your interests and with whom you have more in common.
                        This is the best solution for professionals who want to develop and expand their knowledge
                        beyond the offline limits. <br/><br/><br/></div>
                </div>
            </div>
        </div>
    </div>
    <div id="rec258697346" class="r t-rec t-rec_pt_60 t-rec_pb_60"
         style="padding-top:60px;padding-bottom:60px;background-color:#1f5bff; " data-record-type="676"
         data-bg-color="#1f5bff"><!-- T676 -->
        <div class="t676">
            <div class="t-container">
                <div class="t-row">
                    <div class="t-col t-col_12 ">
                        <svg class="t676__divider" style="fill:#ffffff;" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 100 12">
                            <path d="M62.3 12L50 3.5 37.7 12 25.4 3.5 13.1 12 0 2.9 1.7.6l11.4 7.9L25.4 0l12.3 8.5L50 0l12.3 8.5L74.6 0l12.3 8.5L98.3.6l1.7 2.3L86.9 12 74.6 3.5"/>
                        </svg>
                        <div class="t676__text-impact t-text-impact t-text-impact_md" style="color:#ffffff;"
                             field="text">TMIXED is <strong>free to use</strong>.<br/>Why? Well, we are all in the same
                            boat.<br/></div>
                        <svg class="t676__divider t676__divider_rotate" style="fill:#ffffff;"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 12">
                            <path d="M62.3 12L50 3.5 37.7 12 25.4 3.5 13.1 12 0 2.9 1.7.6l11.4 7.9L25.4 0l12.3 8.5L50 0l12.3 8.5L74.6 0l12.3 8.5L98.3.6l1.7 2.3L86.9 12 74.6 3.5"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="rec258697348" class="r t-rec t-rec_pt_0 t-rec_pb_60"
         style="padding-top:0px;padding-bottom:60px;background-color:#ffffff; " data-animationappear="off"
         data-record-type="144" data-bg-color="#ffffff"><!-- T134 -->
        <div class="t134">
            <div class="t-container">
                <div class="t-col t-col_10 t-prefix_1">
                    <div class="t134__descr" field="descr" style="color:#000000;">Made with love by a community for
                        communities<br/>contact@tmixed.com
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><!--/allrecords--><!-- Stat -->
`

export default (props: Props) => {
    if (props.error) {
        return (
            <SpicedPage title="Server error">
                Server error
            </SpicedPage>
        )
    } else {
        const hiddenFields = [
            {
                name: Forms.joinCommunity.hiddenFields.communityTitle,
                value: props.communityTitle as string
            },
            {
                name: Forms.joinCommunity.hiddenFields.communityId,
                value: props.communityId as string
            }
        ]

        const replaced = replaceAll(content, "__COMMUNITY__", props.communityTitle as string)

        return <SpicedPage title="Here is your community invitation link">
            <Head>
                <link rel="stylesheet" href="/invitation/css/tilda-blocks-2.12.css?" type="text/css" media="all"/>
                <script src="/invitation/js/tilda-blocks-2.7.js"/>

                <link rel="stylesheet" href="/css/tilda-grid-3.0.min.css" type="text/css" media="all"/>
                <link rel="stylesheet" href="/css/tilda-animation-1.0.min.css" type="text/css" media="all"/>

                <script src="/js/jquery-1.10.2.min.js"/>
                <script src="/js/tilda-scripts-2.8.min.js"/>

                <script src="/js/lazyload-1.3.min.js" charSet="utf-8"/>
                <script src="/js/tilda-animation-1.0.min.js" charSet="utf-8"/>

                <link rel="stylesheet" href="/css/font.css" type="text/css" media="all"/>
            </Head>

            <body className="t-body" style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: replaced }}>
            </body>

            <TypeFormEmbed
                elementId="open_form"
                hiddenFields={hiddenFields}
                typeformId={Forms.joinCommunity.formId}
            />

        </SpicedPage>
    }
}


// This gets called on every request
export const getServerSideProps = serverEntryPoint

