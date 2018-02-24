<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
IncludeTemplateLangFile(__FILE__);
?>
</div>
<footer role="contentinfo">
    <div id="foot" class="foot">
        <div class="container">
            <div class="foot-nav collapsed" id="foot-nav">
                <div class="menu">
                    <ul class="items">
                        <li class="socials block-socials">
<span class="handler" id="socials-handler">
Социальные сети
</span>
                            <div class="inner">
                                <ul class="subitems follow">
                                    <li>
                                        <a href="https://www.facebook.com/radiosvoboda" title="Мы в Facebook"
                                           class="btn btn-rounded btn-facebook" target="_blank">
                                            <span class="ico ico-facebook"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/SvobodaRadio" title="Мы в Twitter"
                                           class="btn btn-rounded btn-twitter" target="_blank">
                                            <span class="ico ico-twitter"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://vk.com/public12637912" title="Мы ВКонтакте"
                                           class="btn btn-rounded btn-vkontakte" target="_blank">
                                            <span class="ico ico-vkontakte"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/rssfeeds" title="RSS" class="btn btn-rounded btn-rss">
                                            <span class="ico ico-rss"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="block-primary collapsed collapsible item">
<span class="handler">
Инфочекер
    <span title="close tab" class="ico ico-chevron-up"></span><span title="open tab"
                                                                class="ico ico-chevron-down"></span><span title="add"
                                                                                                          class="ico ico-plus"></span><span
            title="remove" class="ico ico-minus"></span>
</span>
                            <div class="inner">

                                <? $APPLICATION->IncludeComponent("bitrix:menu", "bottom", Array(
                                        "ROOT_MENU_TYPE" => "top",
                                        "MAX_LEVEL" => "1",
                                        "MENU_CACHE_TYPE" => "A",
                                        "MENU_CACHE_TIME" => "3600",
                                        "MENU_CACHE_USE_GROUPS" => "N",
                                        "MENU_CACHE_GET_VARS" => Array()
                                    )
                                ); ?>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="foot__item foot__item--copyrights">
                <p class="copyright">Инфочекер © 2018 | Все права защищены.</p>
            </div>
        </div>
    </div>
</footer>

</body>
</html>
