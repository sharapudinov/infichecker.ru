<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<? use Bitrix\Main\Application;
use Bitrix\Main\Page\Asset;

$curDir = Application::getInstance()->getContext()->getRequest()->getRequestedPageDirectory();
?>
<!DOCTYPE html>
<html lang="ru" dir="ltr" class="no-js">
<head>
    <script>
        document.documentElement.classList.remove('no-js');
        document.documentElement.classList.add('js');
    </script>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="apple-mobile-web-app-title" content="RFE/RL"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="apple-itunes-app" content="app-id=475986784"/>
    <meta content="article" property="og:type"/>
    <meta content="<? $APPLICATION->ShowTitle() ?>" property="og:title"/>
    <meta content="<? $APPLICATION->ShowProperty('description') ?>" property="og:description"/>
    <meta content="<?= SITE_TEMPLATE_PATH ?>/images/top_logo_news.png" property="og:image"/>
    <meta content="1200" property="og:image:width"/>
    <meta content="675" property="og:image:height"/>
    <meta content="site logo" property="og:image:alt"/>
    <meta content="<?= $curDir ?>" property="og:url"/>
    <meta content="Infocheker" property="og:site_name"/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@SomeAccount"/>
    <? Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/infographics.b"); ?>
    <? Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/loader.b"); ?>
    <link rel="shortcut icon" href="favicon.ico"/>
    <link rel="apple-touch-icon" sizes="144x144" href="ico-144x144.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="ico-114x114.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="ico-72x72.png"/>
    <link rel="apple-touch-icon-precomposed" href="ico-57x57.png"/>
    <link rel="icon" sizes="192x192" href="ico-192x192.png"/>
    <link rel="icon" sizes="128x128" href="ico-128x128.png"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="ico-144x144.png"/>
    <link rel="sitemap" type="application/rss+xml" href="/sitemap.xml"/>
    <? $APPLICATION->ShowHead() ?>
    <title><? $APPLICATION->ShowTitle() ?></title>

</head>
<body class="<?$APPLICATION->ShowProperty('body_class')?>">
<? $APPLICATION->ShowPanel(); ?>

<section>
    <div class="sr-only">
        <h2>Ссылки для упрощенного доступа</h2>
        <ul>
            <li><a href="#content" data-disable-smooth-scroll="1">Вернуться к основному содержанию</a></li>
            <li><a href="#navigation" data-disable-smooth-scroll="1">Вернутся к главной навигации</a></li>
            <li><a href="#txtHeaderSearch" data-disable-smooth-scroll="1">Вернутся к поиску</a></li>
        </ul>
    </div>
</section>
<div class="ltr">
    <div id="page">
        <div class="hdr">
            <div class="hdr-nav-frag">
                <div class="container">
                    <? $APPLICATION->IncludeFile(
                        $APPLICATION->GetTemplatePath("include_areas/company_name.php"),
                        Array(),
                        Array("MODE" => "html")
                    ); ?>

                   <!-- <ul class="compact-actions">
                        <li class="action action-entity-sites">
                            <a href="/navigation/allsites">
                                <span class="ico ico-languages"></span>
                            </a>
                        </li>
                        <li class="action action-srch">
                            <a href="/search/" title="toggle search input"><span class="sr-only access-help-text">toggle search input</span><span
                                        class="ico ico-search"></span></a>
                        </li>
                        <li class="action action-menu" style="display: block;">
                            <a href="/navigation.html" title="toggle main navigation"><span
                                        class="sr-only access-help-text">toggle main navigation</span><span
                                        class="ico ico-menu"></span></a>
                        </li>
                    </ul>-->
                    <div class="actions has-actions">
                        <div class="actions__safe-wrap">
                            <div class="action action-entity-sites">
                                <a href="/navigation/allsites" class="" data-smoothscroll="disabled">
<!--                                    <span class="ico ico-languages"></span>
--><!--                                    <span class="name">Все сайты РСЕ/РС</span>
-->                                    <span class="arrow-open"></span>
                                </a>
                            </div>
                        </div>
                        <div class="pnl-srch-top">
                            <? $APPLICATION->IncludeComponent("bitrix:search.form", "top", Array(
                                    "PAGE" => "/search/"
                                )
                            ); ?>

                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-hdr-outer-container">
                <div class="container" id="nav-hdr-container">
                    <div class="navigation collapsed" id="navigation">
                        <div class="media">
                            <ul class="items">
                            </ul>
                        </div>

                        <? $APPLICATION->IncludeComponent(
                            "bitrix:menu",
                            "top",
                            Array(
                                "ROOT_MENU_TYPE" => "top",
                                "MAX_LEVEL" => "1",
                                "USE_EXT" => "N",
                                "MENU_CACHE_TYPE" => "A",
                                "MENU_CACHE_TIME" => "3600",
                                "MENU_CACHE_USE_GROUPS" => "N",
                                "MENU_CACHE_GET_VARS" => Array()
                            )
                        ); ?>
                    </div>
                </div>
            </div>
            <div class="sticky-nav-wrap container">
                <div class="sticked-nav-actions">
                    <a href="#" title="search" class="btn btn-rounded btn-open-srch">
                        <span class="sr-only access-help-text">текст для поиска...</span>
                        <span class="ico ico-search"></span>
                    </a>
                </div>
            </div>
            <div data-trigger="btn-open-srch" class="sticked-nav-popup popup-srch">
                <div class="container">
                    <div class="stick-srch-form">
                        <form action="/s" id="form-stickyNavSearch" method="get" role="search"><span class="srch-elem">
<span class="input-wrap">
<label for="txtStickyNavSearch" class="sr-only">Искать</label>
<input type="text" id="txtStickyNavSearch" name="k" placeholder="текст для поиска..." accesskey="s" value="">
</span>
<button title="Искать" type="submit" class="btn btn-srch analyticstag-event">
<span class="ico ico-search"></span>
<span class="text">Искать</span>
</button>
</span></form>
                    </div>
                    <button class="btn btn-close"><span class="ico ico-close"></span></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="content">
