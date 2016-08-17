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

    <link href="themes/mytheme/css/01.css" rel="stylesheet" type="text/css"/>
    <link href="themes/mytheme/css/02.css" rel="stylesheet" type="text/css"/>


    <link href="themes/mytheme/css/05.css" rel="stylesheet" type="text/css" />

    <!--[if lt IE 9]>
    <script src="https://swsdl.vivo.com.cn/vivoshop/web/dist/js/bower_components/html5shiv/dist/html5shiv.min_23e126e.js"></script>
    <![endif]-->

</head>
<body class="">
<?php echo $this->fetch('library/page_header.lbi'); ?>
<div id="content" class="cl">
    <input type="hidden" name="pageNavMappingIndex" id="pageNavMappingIndex" value="" />

    <div class="wrapper">
      <?php echo $this->fetch('library/ur_here.lbi'); ?>
    </div>


  <div class="container wrapper">
    <h2>搜索“<?php echo htmlspecialchars($this->_var['search_keywords']); ?>”的产品</h2>
        <div class="list-box">
            <ul class="prod-list cl">
              <?php $_from = $this->_var['goods_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods');if (count($_from)):
    foreach ($_from AS $this->_var['goods']):
?>
                <?php if ($this->_var['goods']['goods_id']): ?>
                 <li class="prod-item">
                       <a target="_blank" href="<?php echo $this->_var['goods']['url']; ?>">
                       <div class="figure">
                       <img src="<?php echo $this->_var['goods']['goods_thumb']; ?>" alt="<?php echo $this->_var['goods']['goods_name']; ?>" class="goodsimg" />
                        </div>
                        <h3 title="Y35L"><?php echo $this->_var['goods']['goods_name']; ?></h3>
                        <p class="price"><dfn>&yen;</dfn>
                        <?php if ($this->_var['goods']['promote_price'] != ""): ?>
                        <?php echo $this->_var['goods']['promote_price']; ?>
                        <?php else: ?>
                        <?php echo $this->_var['goods']['shop_price']; ?>
                        <?php endif; ?>
                        </p>
                  </li>
                <?php endif; ?>
              <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
            </ul>
        </div>

    <?php echo $this->fetch('library/pages.lbi'); ?>

  </div>
</div>


<?php echo $this->fetch('library/page_footer.lbi'); ?>


<script>
    var webCtx = "";
    var passportLoginUrlPrefix = "https://passport.vivo.com.cn/v3/web/login/authorize?client_id=3&redirect_uri=";
</script>
<script src="js/01.js"></script>
<script src="js/02.js"></script>
<script src="js/03.js"></script>
<script src="js/04.js"></script>
<script src="js/05.js"></script>
<script src="js/06.js"></script>
    <script src="js/09.js"></script>

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