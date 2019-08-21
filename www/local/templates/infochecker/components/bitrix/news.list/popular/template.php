<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<ul class=" js-collapsed">
    <li class=" active opened">
        <h3 class="handler" title="open widget tab ">
            <span title="close widget tab " class="ico ico-chevron-up"></span>
            <span title="open widget tab " class="ico ico-chevron-down"></span>
        </h3>
        <ul class="inner">
            <? foreach ($arResult['ITEMS'] as $key=>$item): ?>
                <li class="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                <div class="media-block size-4">
                    <div class="content">
                        <span class="number"><?=($key+1)?></span>
                        <a href="<?=$item['DETAIL_PAGE_URL']?>"
                           title="<?=$item['NAME']?>">
                            <h4 class="media-block__title">
                                <?=$item['NAME']?>
                            </h4>
                        </a>
                    </div>
                </div>
                <div class="clear"></div>
            </li>
            <? endforeach; ?>
        </ul>
    </li>
</ul>
<div class="clear"></div>

