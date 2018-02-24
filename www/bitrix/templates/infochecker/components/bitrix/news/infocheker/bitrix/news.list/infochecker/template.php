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
/*test_dump($arResult);*/
$this->setFrameMode(true);
?>
<ul class="fc" id="blogItems">
    <? if ($arParams["DISPLAY_TOP_PAGER"]): ?>
        <?= $arResult["NAV_STRING"] ?><br/>
    <? endif; ?>
    <? foreach ($arResult["ITEMS"] as $arItem): ?>
    <?
    $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
    $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));

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
    }
    ?>
    <li id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
        <div>
            <div class="fc-hdr">
                <a class="title" href="<?=$arItem['DETAIL_PAGE_URL']?>">
                    <h4><?= $arItem["NAME"] ?></h4>
                </a>
                <? $APPLICATION->IncludeFile(
                    $APPLICATION->GetTemplatePath("include_areas/share_to_sm.php"),
                    Array('title'=>$arItem['NAME'],'url'=>$arItem['DETAIL_PAGE_URL']),
                    Array("MODE" => "html")
                ); ?>            </div>
            <div class="fc-body">
                <div class="statement">
                    <div class="statement-head <?=$color?>">
                        <div class="statement-author">
                            <div class="img-wrap">
                                <div class="thumb listThumb">
                                    <img
                                            class="avatar rounded enhanced"
                                            border="0"
                                            src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>"
                                            width="<?= $arItem["PREVIEW_PICTURE"]["WIDTH"] ?>"
                                            height="<?= $arItem["PREVIEW_PICTURE"]["HEIGHT"] ?>"
                                            alt="<?= $arItem["PREVIEW_PICTURE"]["ALT"] ?>"
                                            title="<?= $arItem["PREVIEW_PICTURE"]["TITLE"] ?>"
                                            style="float:left"
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 class="author">
                                    <?=$arItem["DISPLAY_PROPERTIES"]["AUTHOR"]["VALUE"]?>
                                </h4>
                                <p class="desc">
                                    <?=$arItem["DISPLAY_PROPERTIES"]["AUTHOR_STATUS"]["VALUE"]?>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="statement-content">
                        <div class="wsw">
                            <p><?= $arItem["PREVIEW_TEXT"] ?></p>
                        </div>
                    </div>
                    <div class="statement-source">
                        <?=$arItem["DISPLAY_PROPERTIES"]["SOURCE"]["VALUE"]?>
                    </div>
                </div>
                <div class="verdict">
                    <div class="verdict-head">
                        <a class="title <?=$color?>" href="<?=$arItem['DETAIL_PAGE_URL']?>">
                            <span class="ico <?=$ico_class?> rounded"></span>
                            <span><?=$arItem['DISPLAY_PROPERTIES']['VERDICT']['VALUE']?></span>
                            <div class="intro">
                                <?=$arItem["DISPLAY_PROPERTIES"]["VERDICT_TEXT"]["VALUE"]?>
                            </div>
                        </a>
                    </div>
                    <div class="verdict-content">
                        <div class="wysiwyg">
                            <?=$arItem["DISPLAY_PROPERTIES"]["ANALISE_PREVIEW"]["VALUE"]?>
                        </div>
                    </div>
                    <a class="read-more" href="<?=$arItem['DETAIL_PAGE_URL']?>">
                        Дальше
                    </a>
                </div>
            </div>
        </div>
    </li>
    <? endforeach; ?>
</ul>
<? if ($arParams["DISPLAY_BOTTOM_PAGER"]): ?>
    <br/><?= $arResult["NAV_STRING"] ?>
<? endif; ?>
