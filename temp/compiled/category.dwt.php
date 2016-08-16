<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
<meta name="Generator" content="ECSHOP v2.7.3" />
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="x-ua-compatible" content="IE=edge" >
    <title>vivo</title>
    <meta name="keywords" content='vivo智能手机官方商城'/>
    <meta name="description" content='vivo智能手机官方商城'/>
    
    <link href="https://swsdl.vivo.com.cn/vivoshop/web/dist/css/global_71f64cd.css" rel="stylesheet" type="text/css"/>
    <link href="https://swsdl.vivo.com.cn/vivoshop/web/dist/css/layout_d6fdcac.css" rel="stylesheet" type="text/css"/>


    <link href="https://swsdl.vivo.com.cn/vivoshop/web/dist/css/web-page/prod-list_1e6e0ae.css" rel="stylesheet" type="text/css" />

    <!--[if lt IE 9]>
    <script src="https://swsdl.vivo.com.cn/vivoshop/web/dist/js/bower_components/html5shiv/dist/html5shiv.min_23e126e.js"></script>
    <![endif]-->

</head>
<body class="">
<?php echo $this->fetch('library/page_header.lbi'); ?>
<div id="content" class="cl">
		<input type="hidden" name="pageNavMappingIndex" id="pageNavMappingIndex" value="0" />

		<div class="wrapper">
			<?php echo $this->fetch('library/ur_here.lbi'); ?>
        
</div>


	<div class="container wrapper">
            <div class="filter">


    <?php if ($this->_var['brands']['1'] || $this->_var['price_grade']['1'] || $this->_var['filter_attr_list']): ?>
    
        <?php if ($this->_var['brands']['1']): ?>
        <div class="f-line"><dl>
            <dt class="fl-title fl-item"><?php echo $this->_var['lang']['brand']; ?>：</dt>
            <?php $_from = $this->_var['brands']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'brand');if (count($_from)):
    foreach ($_from AS $this->_var['brand']):
?>
                <?php if ($this->_var['brand']['selected']): ?>
                <dd class="fl-item on"><a><?php echo $this->_var['brand']['brand_name']; ?></a></dd>
                <?php else: ?>
                <dd class="fl-item"><a href="<?php echo $this->_var['brand']['url']; ?>"><?php echo $this->_var['brand']['brand_name']; ?></a>&nbsp;</dd>
                <?php endif; ?>
            <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
        </div></dl>
        <?php endif; ?>

        <?php if ($this->_var['price_grade']['1']): ?>
        <div class="f-line"><dl>
            <dt class="fl-title fl-item"><?php echo $this->_var['lang']['price']; ?>：</dt>
            <?php $_from = $this->_var['price_grade']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'grade');if (count($_from)):
    foreach ($_from AS $this->_var['grade']):
?>
                <?php if ($this->_var['grade']['selected']): ?>
                <dd class="fl-item on"><a><?php echo $this->_var['grade']['price_range']; ?></a></dd>
                <?php else: ?>
                <dd class="fl-item"><a href="<?php echo $this->_var['grade']['url']; ?>"><?php echo $this->_var['grade']['price_range']; ?></a>&nbsp;</dd>
                <?php endif; ?>
            <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
        </div></dl>
        <?php endif; ?>

        <?php $_from = $this->_var['filter_attr_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'filter_attr_0_96179000_1471328802');if (count($_from)):
    foreach ($_from AS $this->_var['filter_attr_0_96179000_1471328802']):
?>
        <div class="f-line"><dl>
            <dt class="fl-title fl-item"><?php echo htmlspecialchars($this->_var['filter_attr_0_96179000_1471328802']['filter_attr_name']); ?> :
            </dt>
            <?php $_from = $this->_var['filter_attr_0_96179000_1471328802']['attr_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'attr');if (count($_from)):
    foreach ($_from AS $this->_var['attr']):
?>
                <?php if ($this->_var['attr']['selected']): ?>
                 <dd class="fl-item on"><a><?php echo $this->_var['attr']['attr_value']; ?></a></dd>
                <?php else: ?>
                 <dd class="fl-item"><a href="<?php echo $this->_var['attr']['url']; ?>"><?php echo $this->_var['attr']['attr_value']; ?></a>&nbsp;</dd>
                <?php endif; ?>
            <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
        </div></dl>
        <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
     </div>
    <?php endif; ?>
 

		<div class="list-box">
            <?php echo $this->fetch('library/goods_list.lbi'); ?>
        </div>
        <?php echo $this->fetch('library/pages.lbi'); ?>

	</div>
</div>
<?php echo $this->fetch('library/page_footer.lbi'); ?>
<script>
    var webCtx = "";
    var passportLoginUrlPrefix = "https://passport.vivo.com.cn/v3/web/login/authorize?client_id=3&redirect_uri=";
</script>
<script src="https://swsdl.vivo.com.cn/vivoshop/web/dist/js/bower_components/jquery/dist/jquery.min_6163309.js"></script>
<script src="https://swsdl.vivo.com.cn/vivoshop/web/dist/js/bower_components/jquery-cookie/jquery.cookie_a5283b2.js"></script>
<script src="https://swsdl.vivo.com.cn/vivoshop/web/dist/js/bower_components/jquery_lazyload/jquery.lazyload_546c1da.js"></script>
<script src="https://swsdl.vivo.com.cn/vivoshop/web/dist/js/common/vivo-common_66b10ca.js"></script>
<script src="https://swsdl.vivo.com.cn/vivoshop/web/dist/js/common/vivo-stat_0d0d375.js"></script>
<script src="https://swsdl.vivo.com.cn/vivoshop/web/dist/js/project/common/login_confirm_485e7b4.js"></script>
    <script src="https://swsdl.vivo.com.cn/vivoshop/web/dist/js/project/product/list-hover_a2668cb.js"></script>

<script>
    //百度统计代码
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?0a38f90134ba281b974d46dfeec121e0";
        hm.async = true;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
</body>
</html>