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

switch ($arItem['DISPLAY_PROPERTIES']['VERDICT']['VALUE_XML_ID']) {
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
}?>
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
                                <div class="statement-head <?=$color?>">
                                    <div class="statement-author">
                                        <div class="img-wrap">
                                            <div class="thumb listThumb">
                                                <img alt="<?=$arResult['PROPERTIES']['AUTHOR']['VALUE']?>" class="avatar rounded enhanced" src="<?=$arResult['PREVIEW_PICTURE']['SRC']?>">
                                            </div>
                                        </div>
                                        <div>
                                            <h4 class="author"><?=$arResult['PROPERTIES']['AUTHOR']['VALUE']?></h4>
                                            <p class="desc"><?=$arResult['PROPERTIES']['AUTHOR_STATUS']['VALUE']?></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="statement-content">
                                    <div class="wsw">
                                        <p><em>“<?=$arResult['PREVIEW_TEXT']?>”</em></p>
                                    </div>
                                </div>
                                <div class="statement-source">
                                    <?=$arResult['PROPERTIES']['SOURCE']['VALUE']?>
                                </div>
                            </div>
                            <div class="verdict">
                                <div class="verdict-head">
                                    <div class="title <?=$color?>">
                                        <span class="ico <?=$ico_class?> rounded"></span>
                                        <span><?=$arResult['PROPERTIES']['VERDICT']['VALUE']?></span>
                                        <div class="intro">
                                            <?=$arResult['PROPERTIES']['VERDICT_PREVIEW']['VALUE']?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 pull-left bottom-offset content-offset">
                        <div>
                            <div class="wsw">
                                <?=$arResult['DETAIL_TEXT']?>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 pull-left design-top-offset"> <div class="region">
                            <div class="media-block-wrap" id="wrowblock-9728_21" data-area-id="R1_1">
                                <div class="wsw">
                                    <div class="clear"></div>
                                    <div class="wsw__embed">
                                        <div class="infgraphicsAttach">
                                            <iframe src="/a/russian-echo-widget/27914622.html?layout=5" class="flexible-iframe" style="height: 385px;"></iframe>
                                        </div>
                                    </div> </div>
                            </div>
                            <div class="media-block-wrap most-popular numbered" id="wrowblock-9729_21" data-area-id="R2_1">
                                <h2 class="section-head">
                                    Самое читаемое </h2>
                                <ul class=" js-collapsed">
                                    <li class=" active opened">
                                        <h3 class="handler" title="open widget tab ">
                                            <span title="close widget tab " class="ico ico-chevron-up"></span>
                                            <span title="open widget tab " class="ico ico-chevron-down"></span>
                                        </h3>
                                        <ul class="inner">
                                            <li class="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                                                <div class="media-block size-4">
                                                    <div class="content">
                                                        <span class="number">1</span>
                                                        <a href="/a/29011375.html" title="Когда Россия сможет перерабатывать бытовой мусор, как в Европе?"><h4 class="media-block__title">
                                                                Когда Россия сможет перерабатывать бытовой мусор, как в Европе?
                                                            </h4></a> </div>
                                                </div>
                                                <div class="clear"></div>
                                            </li>
                                            <li class="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                                                <div class="media-block size-4">
                                                    <div class="content">
                                                        <span class="number">2</span>
                                                        <a href="/a/29015151.html" title="Как поощряется в России малый бизнес? "><h4 class="media-block__title">
                                                                Как поощряется в России малый бизнес?
                                                            </h4></a> </div>
                                                </div>
                                                <div class="clear"></div>
                                            </li>
                                            <li class="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                                                <div class="media-block size-4">
                                                    <div class="content">
                                                        <span class="number">3</span>
                                                        <a href="/a/29007937.html" title="Как снижаются в России риски для жизни при ДТП?"><h4 class="media-block__title">
                                                                Как снижаются в России риски для жизни при ДТП?
                                                            </h4></a> </div>
                                                </div>
                                                <div class="clear"></div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="clear"></div>
                            </div>
                            <div class="media-block-wrap" id="wrowblock-9730_21" data-area-id="R3_1">
                                <div class="contact-us">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <form method="POST" action="/ContactUsWidget/Send" data-message-connection-error="Ошибка соединения. Пожалуйста, попробуйте снова" data-message-no-data="Ничего не найдено" class="js-contact-us-box">
                                                <ul class="form-item-list">
                                                    <li class="form-group">
                                                        <label for="SenderEmail">От (e-mail) <span class="required">*</span></label><input class="form-control" data-val="true" data-val-length="The field SenderEmail must be a string with a maximum length of 255." data-val-length-max="255" data-val-length-min="0" data-val-regex="Неправильный электронный адрес" data-val-regex-pattern="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" data-val-required="Нужен электронный адрес" id="SenderEmail" name="SenderEmail" type="email"><span class="help-block text-error" data-valmsg-for="SenderEmail" data-valmsg-replace="true"></span>
                                                    </li>
                                                    <li class="form-group">
                                                        <label for="Subject">Тема <span class="required">*</span></label><input class="form-control" data-val="true" data-val-length="The field Subject must be a string with a maximum length of 255." data-val-length-max="255" data-val-length-min="0" data-val-required="Не указана тема" id="Subject" name="Subject" type="text"><span class="help-block text-error" data-valmsg-for="Subject" data-valmsg-replace="true"></span>
                                                    </li>
                                                    <li class="form-group">
                                                        <label for="CommentBody">Комментарий <span class="required">*</span></label><textarea class="form-control" data-val="true" data-val-length="Содержимое слишком длинное. Разрешенный размер текста 4000 знаков" data-val-length-max="4000" data-val-length-min="0" data-val-required="Комментарий отсутствует " id="CommentBody" name="CommentBody"></textarea><span class="help-block text-error" data-valmsg-for="CommentBody" data-valmsg-replace="true"></span>
                                                    </li>
                                                    <li class="form-group captcha simplecaptcha">
                                                        <div class="title">Пожалуйста ответьте на вопрос <span class="required">*</span></div>
                                                        <div class="simple-captcha-pholder">


                                                            <title>Captcha</title>
                                                            <meta charset="utf-8">
                                                            <meta name="title" content="Captcha">
                                                            <link href="/Content/responsive/RFE/ru-RU-X-FAC/RFE-ru-RU-X-FAC.css?&amp;av=7.21.0.0&amp;cb=79" rel="stylesheet">


                                                            <img src="/captcha/J53C0L87BW7ZWGXZGTELFZMRT.png?rand=1823159505" alt="Captcha challenge image">
                                                            <input type="text" class="form-control" name="simple-captcha-response" data-empty-message="Пожалуйста введите результат для проверки" data-format-message="Результат должен быть положительным числом" maxlength="2">
                                                            <input type="hidden" name="simple-captcha-identifier" value="J53C0L87BW7ZWGXZGTELFZMRT">

                                                        </div>
                                                        <noscript>
                                                            &lt;iframe src="/captcha/iframe.html" class="simple-captcha-iframe"&gt;&lt;/iframe&gt;
                                                            &lt;input type="text" name="simple-captcha-token" /&gt;
                                                        </noscript>
                                                        <span class="help-block text-error" data-valmsg-for="captcha"></span>
                                                    </li>
                                                </ul>
                                                <input data-val="true" id="SelectedReceiverEmail" name="SelectedReceiverEmail" type="hidden" value="567">
                                                <input data-val="true" id="WidgetInstanceId" name="WidgetInstanceId" type="hidden" value="66750">
                                                <input data-val="true" id="AnchorAreaWidgetId" name="AnchorAreaWidgetId" type="hidden" value="wrowblock-9730_21">
                                                <div class="text">
                                                    <p></p><p>При нажатии этой кнопки вы соглашаетесь с <a href="https://www.factograph.info/p/6394.html" target="_blank">Условиями договора</a></p><p></p>
                                                </div>
                                                <div class="sys-msg-pholder" id="placeholder"></div>
                                                <p class="buttons">
                                                    <input type="submit" class="btn btn-anim" value="Отправить">
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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
            $APPLICATION->IncludeComponent("bitrix:main.share", "", array(
                "HANDLERS" => $arParams["SHARE_HANDLERS"],
                "PAGE_URL" => $arResult["~DETAIL_PAGE_URL"],
                "PAGE_TITLE" => $arResult["~NAME"],
                "SHORTEN_URL_LOGIN" => $arParams["SHARE_SHORTEN_URL_LOGIN"],
                "SHORTEN_URL_KEY" => $arParams["SHARE_SHORTEN_URL_KEY"],
                "HIDE" => $arParams["SHARE_HIDE"],
            ),
                $component,
                array("HIDE_ICONS" => "Y")
            );
            ?>
        </noindex>
    </div>
