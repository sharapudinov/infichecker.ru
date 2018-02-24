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
/** @var CBitrixComponent $component */
$this->setFrameMode(true); ?>
<form action="<?= $arResult["FORM_ACTION"] ?>" id="form-headerSearch" method="get" role="search"><span
            class="srch-elem">
        <span class="input-wrap">
<label for="txtHeaderSearch" class="sr-only">Искать</label>
            <? if ($arParams["USE_SUGGEST"] === "Y"): ?><? $APPLICATION->IncludeComponent(
                "bitrix:search.suggest.input",
                "",
                array(
                    "NAME" => "q",
                    "VALUE" => "",
                    "INPUT_SIZE" => 15,
                    "DROPDOWN_SIZE" => 10,
                ),
                $component, array("HIDE_ICONS" => "Y")
            ); ?>
            <? else: ?>
                <input type="text" name="q" value="" size="15" maxlength="50" placeholder="<?=GetMessage('BSF_T_SEARCH_BUTTON')?>"/>
            <? endif; ?>&nbsp;
<button title="Искать" type="submit" class="btn btn-srch">
    <span class="ico ico-search"></span>
<span class="text">Искать</span>
</button>
</span></form>