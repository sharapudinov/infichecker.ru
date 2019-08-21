<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/*test_dump($arResult);*/
$this->setFrameMode(true);

switch ($arResult['DISPLAY_PROPERTIES']['VERDICT']['VALUE_XML_ID']) {
    case '?':
        $color = 'orange';
        $ico_class='ico-question';
        break;
    case '^':
        $color = 'light-green';
        $ico_class='ico-check';
        break;
    case '!':
        $color = 'yellow';
        $ico_class='ico-exclamation';
        break;

    case '+':
        $color = 'green';
        $ico_class='ico-exclamation';
        break;

    case '-':
        $color = 'red';
        $ico_class='ico-exclamation';
        break;

    case '~':
        $color = 'orange';
        $ico_class='ico-exclamation';
        break;
} ?>
<div class="hdr-container">
    <div class="row">
        <div class="col-category col-xs-12 col-md-2 pull-left">
            <div class="category">
                <a href="/<?= $arResult['SECTION']['PATH']['0']['CODE'] ?>/">
                    <?= $arResult['SECTION']['PATH']['0']['NAME'] ?>
                </a>
            </div>
        </div>
        <div class="col-title col-xs-12 col-md-10 pull-right">
            <h1 class="pg-title"><? $APPLICATION->ShowTitle() ?></h1>
        </div>
        <? if ($arParams["DISPLAY_DATE"] != "N" && $arResult["DISPLAY_ACTIVE_FROM"]): ?>
            <div class="col-publishing-details col-xs-12 col-sm-12 col-md-2 pull-left">
                <div class="publishing-details">
                    <div class="published">
<span class="date">
<time datetime="2018-02-02T19:13:47+03:00">
<?= $arResult["DISPLAY_ACTIVE_FROM"] ?>
</time>
</span>
                    </div>
                </div>
            </div>
        <? endif; ?>
        <div class="col-md-12 separator">
            <div class="separator">
                <hr class="title-line">
            </div>
        </div>

        <div class="col-xs-12 col-md-2 pull-left article-share">
            <aside>
                <div class="share share--content">
                    <span class="label label--share stand-alone">Поделиться</span>
                    <ul class="share__list sharing" data-extended="0">
                        <li class="share__item">
                            <a href="https://facebook.com/sharer.php?u=<?= SITE_SERVER_NAME . $arResult["NAME"] ?>"
                               title="Поделиться в Facebook" target="_blank" class="btn btn-rounded btn-facebook">
<span class="ico ico-facebook">
<span>Поделиться в Facebook</span>
</span>
                            </a>
                            <span class="shares shares__facebook shares--empty">&nbsp;</span>
                        </li>
                        <li class="share__item">
                            <a href="https://twitter.com/share?url=<?= SITE_SERVER_NAME . $arResult["DETAIL_PAGE_URL"] ?>&amp;text=%d0%a1+%d0%ba%d0%b0%d0%ba%d0%b8%d0%bc%d0%b8+%d0%b3%d0%be%d1%80%d0%be%d0%b4%d0%b0%d0%bc%d0%b8+%d0%bc%d0%b8%d1%80%d0%b0+%d1%81%d1%80%d0%b0%d0%b2%d0%bd%d1%8f%d0%bb%d0%b0%d1%81%d1%8c+%d1%81%d1%82%d0%be%d0%bb%d0%b8%d1%86%d0%b0+%d0%a0%d0%be%d1%81%d1%81%d0%b8%d0%b8+%d0%bf%d0%be+%d0%ba%d0%be%d0%bb%d0%b8%d1%87%d0%b5%d1%81%d1%82%d0%b2%d1%83+%d1%82%d1%83%d1%80%d0%b8%d1%81%d1%82%d0%be%d0%b2%3f+"
                               title="Поделиться в Twitter" target="_blank" class="btn btn-rounded btn-twitter">
<span class="ico ico-twitter">
<span>Поделиться в Twitter</span>
</span>
                            </a>
                            <span class="shares shares__twitter shares--empty">&nbsp;</span>
                        </li>
                        <li class="share__item share-additional first-additional">
                            <a href="https://plus.google.com/share?url=<?= SITE_SERVER_NAME . $arResult["DETAIL_P
AGE_URL"] ?>" title="Поделиться в Google+" target="_blank" class="btn btn-rounded btn-g-plus">
<span class="ico ico-g-plus">
<span>Поделиться в Google+</span>
</span>
                            </a>
                            <span class="shares shares__g-plus shares--empty">&nbsp;</span>
                        </li>
                        <li class="share__item share-additional">
                            <a href="https://vkontakte.ru/share.php?url=<?= SITE_SERVER_NAME . $arResult["DETAIL_PAGE_URL"] ?>"
                               title="Поделиться ВКонтакте" target="_blank" class="btn btn-rounded btn-vkontakte">
<span class="ico ico-vkontakte">
<span>Поделиться ВКонтакте</span>
</span>
                            </a>
                            <span class="shares shares__vkontakte shares--empty">&nbsp;</span>
                        </li>
                        <li class="share__item share-additional">
                            <a href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&amp;st.s=1&amp;st.comments=comments&amp;st._surl=<?= SITE_SERVER_NAME . $arResult["DETAIL_P
AGE_URL"] ?>" title="Поделитесь на Одноклассниках" target="_blank" class="btn btn-rounded btn-odnoklassniki">
<span class="ico ico-odnoklassniki">
<span>Поделитесь на Одноклассниках</span>
</span>
                            </a>
                            <span class="shares shares__odnoklassniki shares--empty">&nbsp;</span>
                        </li>
                        <li class="share__item share-additional">
                            <a href="whatsapp://send?text=<?= arResult['NAME'] ?>" title="Share on WhatsApp"
                               target="_blank"
                               class="btn btn-rounded btn-whatsapp visible-xs-inline-block visible-sm-inline-block">
<span class="ico ico-whatsapp">
<span>Share on WhatsApp</span>
</span>
                            </a>
                            <span class="shares shares__whatsapp shares--empty visible-xs-block visible-sm-block">&nbsp;</span>
                        </li>
                        <li class="share__item share-additional">
                            <a href="https://web.whatsapp.com/send?text=<?= SITE_SERVER_NAME . $arResult["DETAIL_P
AGE_URL"] ?>" title="Share on WhatsApp" target="_blank"
                               class="btn btn-rounded btn-whatsapp visible-md-inline-block visible-lg-inline-block">
<span class="ico ico-whatsapp">
<span>Share on WhatsApp</span>
</span>
                            </a>
                            <span class="shares shares__whatsapp shares--empty visible-md-block visible-lg-block">&nbsp;</span>
                        </li>
                        <li class="share__item share-additional">
                            <a href="https://telegram.me/share/url?url=<?= SITE_SERVER_NAME . $arResult["DETAIL_P
AGE_URL"] ?>" title="Share on Telegram" target="_blank" class="btn btn-rounded btn-telegram">
<span class="ico ico-telegram">
<span>Share on Telegram</span>
</span>
                            </a>
                            <span class="shares shares__telegram shares--empty">&nbsp;</span>
                        </li>
                        <li class="share__item share-additional">
                            <a href="mailto:?body=<?= SITE_SERVER_NAME . $arResult["DETAIL_P
AGE_URL"] ?>&amp;subject=С какими городами мира сравнялась столица России по количеству туристов? "
                               title="Послать другу" class="btn btn-rounded btn-email ">
<span class="ico ico-email">
<span>Послать другу</span>
</span>
                            </a>
                            <span class="shares shares__email shares--empty">&nbsp;</span>
                        </li>
                        <li class="share__item">
                            <a title="поделиться в других соцсетях"
                               class="btn btn-rounded btn-load-more sharing-more">
                                <span class="ico ico-ellipsis"></span>
                            </a>
                        </li>
                    </ul>
                </div>

            </aside>
        </div>
        <? if ($arParams["DISPLAY_PICTURE"] != "N" && is_array($arResult["DETAIL_PICTURE"])): ?>
        <div class="col-multimedia col-xs-12 col-md-10 pull-right">
            <div class="cover-media">
                <div class="media-block js-media-expand js-media-expand--ready">
                    <div class="img-wrap">
                        <div class="thumb">
                            <img
                                    class="detail_picture"
                                    border="0"
                                    src="<?= $arResult["DETAIL_PICTURE"]["SRC"] ?>"
                                    width="<?= $arResult["DETAIL_PICTURE"]["WIDTH"] ?>"
                                    height="<?= $arResult["DETAIL_PICTURE"]["HEIGHT"] ?>"
                                    alt="<?= $arResult["DETAIL_PICTURE"]["ALT"] ?>"
                                    title="<?= $arResult["DETAIL_PICTURE"]["TITLE"] ?>"
                            />
                            <? endif ?>                </div>
                        <span class="ico ico-full-screen ico--media-expand ico--rounded"></span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<div class="body-container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-10 pull-right">
            <div class="row">
                <div class="col-xs-12">
                    <div class="fc-body">
                        <div class="statement">
                            <div class="statement-head <?= $color ?>">
                                <div class="statement-author">
                                    <div class="img-wrap">
                                        <div class="thumb listThumb">
                                            <img alt="<?= $arResult['PROPERTIES']['AUTHOR']['VALUE'] ?>"
                                                 class="avatar rounded enhanced"
                                                 src="<?= $arResult['PREVIEW_PICTURE']['SRC'] ?>">
                                        </div>
                                    </div>
                                    <div>
                                        <h4 class="author"><?= $arResult['PROPERTIES']['AUTHOR']['VALUE'] ?></h4>
                                        <p class="desc"><?= $arResult['PROPERTIES']['AUTHOR_STATUS']['VALUE'] ?></p>
                                    </div>
                                </div>
                            </div>
                            <div class="statement-content">
                                <div class="wsw">
                                    <p><em>“<?= $arResult['PREVIEW_TEXT'] ?>”</em></p>
                                </div>
                            </div>
                            <div class="statement-source">
                                <?= $arResult['PROPERTIES']['SOURCE']['VALUE'] ?>
                            </div>
                        </div>
                        <div class="verdict">
                            <div class="verdict-head">
                                <div class="title <?= $color ?>">
                                    <span class="ico <?= $ico_class ?> rounded"></span>
                                    <span><?= $arResult['PROPERTIES']['VERDICT']['VALUE'] ?></span>
                                    <div class="intro">
                                        <?= $arResult['PROPERTIES']['VERDICT_PREVIEW']['VALUE'] ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 pull-left bottom-offset content-offset">
                    <div>
                        <div class="wsw">
                            <?= $arResult['DETAIL_TEXT'] ?>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 pull-left design-top-offset">
                    <div class="region">
                        <div class="media-block-wrap" id="wrowblock-9728_21" data-area-id="R1_1">
                            <div class="wsw">
                                <div class="clear"></div>
                                <div class="wsw__embed">
                                    <div class="infgraphicsAttach">
                     <!--                   <iframe src="/a/russian-echo-widget/27914622.html?layout=5"
                                                class="flexible-iframe" style="height: 385px;"></iframe>
   -->                                 </div>
                                </div>
                            </div>
                        </div>

                        <h2 class="section-head">
                            Самое читаемое
                        </h2>
                        <div class="media-block-wrap most-popular numbered" id="wrowblock-9729_21" data-area-id="R2_1">

                            <? $APPLICATION->IncludeComponent(
                                "bitrix:news.list",
                                "popular",
                                array(
                                    "IBLOCK_TYPE" => "articles",
                                    "IBLOCK_ID" => "2",
                                    "NEWS_COUNT" => "3",
                                    "SORT_BY1" => "SHOW_COUNTER",
                                    "SORT_ORDER1" => "DESC",
                                    "SORT_BY2" => "DATE_CREATE",
                                    "SORT_ORDER2" => "DESC",
                                    "FIELD_CODE" => array(
                                    ),
                                    "PROPERTY_CODE" => array(
                                    ),
                                    "DETAIL_URL" => "",
                                    "SECTION_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["section"],
                                    "IBLOCK_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["news"],
                                    "DISPLAY_PANEL" => $arParams["DISPLAY_PANEL"],
                                    "SET_TITLE" => "N",
                                    "SET_LAST_MODIFIED" => "N",
                                    "MESSAGE_404" => "",
                                    "SET_STATUS_404" => "Y",
                                    "SHOW_404" => "N",
                                    "FILE_404" => $arParams["FILE_404"],
                                    "INCLUDE_IBLOCK_INTO_CHAIN" => "N",
                                    "CACHE_TYPE" => "A",
                                    "CACHE_TIME" => "360000",
                                    "CACHE_FILTER" => "N",
                                    "CACHE_GROUPS" => "N",
                                    "DISPLAY_TOP_PAGER" => "N",
                                    "DISPLAY_BOTTOM_PAGER" => "N",
                                    "PAGER_TITLE" => "",
                                    "PAGER_TEMPLATE" => ".default",
                                    "PAGER_SHOW_ALWAYS" => "N",
                                    "PAGER_DESC_NUMBERING" => "N",
                                    "PAGER_DESC_NUMBERING_CACHE_TIME" => "",
                                    "PAGER_SHOW_ALL" => "N",
                                    "PAGER_BASE_LINK_ENABLE" => "N",
                                    "DISPLAY_NAME" => "Y",
                                    "PREVIEW_TRUNCATE_LEN" => "",
                                    "ACTIVE_DATE_FORMAT" => "d.m.Y",
                                    "FILTER_NAME" => "",
                                    "HIDE_LINK_WHEN_NO_DETAIL" => "N",
                                    "CHECK_DATES" => "N",
                                    "COMPONENT_TEMPLATE" => "popular",
                                    "AJAX_MODE" => "N",
                                    "AJAX_OPTION_JUMP" => "N",
                                    "AJAX_OPTION_STYLE" => "Y",
                                    "AJAX_OPTION_HISTORY" => "N",
                                    "AJAX_OPTION_ADDITIONAL" => "",
                                    "SET_BROWSER_TITLE" => "Y",
                                    "SET_META_KEYWORDS" => "Y",
                                    "SET_META_DESCRIPTION" => "Y",
                                    "ADD_SECTIONS_CHAIN" => "Y",
                                    "PARENT_SECTION" => "",
                                    "PARENT_SECTION_CODE" => "",
                                    "INCLUDE_SUBSECTIONS" => "Y",
                                    "STRICT_SECTION_CHECK" => "N"
                                ),
                                $component
                            ); ?>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="news-detail-share">
    <noindex>
        <?
        $APPLICATION->IncludeComponent("bitrix:main.share", "", [
            "HANDLERS"          => $arParams["SHARE_HANDLERS"],
            "PAGE_URL"          => $arResult["~DETAIL_PAGE_URL"],
            "PAGE_TITLE"        => $arResult["~NAME"],
            "SHORTEN_URL_LOGIN" => $arParams["SHARE_SHORTEN_URL_LOGIN"],
            "SHORTEN_URL_KEY"   => $arParams["SHARE_SHORTEN_URL_KEY"],
            "HIDE"              => $arParams["SHARE_HIDE"],
        ],
            $component,
            ["HIDE_ICONS" => "Y"]
        );
        ?>
    </noindex>
</div>
