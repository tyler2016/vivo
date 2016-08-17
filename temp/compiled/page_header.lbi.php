<header id="header">
    <div class="head-search">
        <div class="search-box">
            <form method="get" action="search.php" >
                <input name="keywords" type="text" autocomplete="off" placeholder="如:x6" maxlength="20" value="<?php echo htmlspecialchars($this->_var['search_keywords']); ?>" /><button type="submit">搜索</button>
            </form>
            <a class="close"></a>
        </div>
    </div>
    <div class="wrapper">
        <nav id="navigator" class="cl">
        	<a href="/myecshop" class="vivo-logo"><img src="https://swsdl.vivo.com.cn/vivoshop/web/dist/img/tmp/vivo-logo_865fdf1.png" alt="vivo智能手机官方网站" /></a>
            <ul class="cl">
                <?php $_from = $this->_var['navigator_list']['middle']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav');$this->_foreach['nav_middle_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_middle_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav']):
        $this->_foreach['nav_middle_list']['iteration']++;
?>
                    <li><a href="<?php echo $this->_var['nav']['url']; ?>" <?php if ($this->_var['nav']['opennew'] == 1): ?> target="_blank" <?php endif; ?> <?php if ($this->_var['nav']['active'] == 1): ?> class="cur"<?php endif; ?>><?php echo $this->_var['nav']['name']; ?><span></span></a></li>
                <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
            </ul>
            
            <div class="search-user">
                <ul class="top-quick-menu">
                    <li id="j_SearchTrigger" class="search"><a href="javascript:void(0)" rel="nofollow"><b></b></a></li>
                    <li id="j_UserMenuTrigger">
                    	<a href="/my/" class="user"><b></b></a>
                    </li>
                    <li><a href="/shoppingcart/" class="shoppingcart"><b></b><span class="shopcart-num">0</span></a></li>
                </ul>
            </div>
        </nav>
    </div>
</header>