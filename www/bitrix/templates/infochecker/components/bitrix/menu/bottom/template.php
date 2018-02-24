<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
<ul class="subitems">

<?foreach($arResult as $arItem):?>
	<?if ($arItem["PERMISSION"] > "D"):?>
    <li class="subitem">
			<a class="handler" href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a>&nbsp;&nbsp;
    </li>
	<?endif?>
<?endforeach?>

<?endif?>
