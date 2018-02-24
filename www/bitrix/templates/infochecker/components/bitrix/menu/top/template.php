<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="menu">
    <? if (!empty($arResult)): ?>
        <ul class="items">
            <? foreach ($arResult as $index => $arItem): ?>
                <? if ($arItem["PERMISSION"] > "D"): ?>
                    <li class="item <? if ($index == count($arResult)): ?>last-menu-item<? endif ?>">
                        <a class="handler" href="<?= $arItem["LINK"] ?>"><?= $arItem["TEXT"] ?></a>
                    </li>
                <? endif ?>
            <? endforeach ?>
        </ul>
    <? endif ?>
</div>

