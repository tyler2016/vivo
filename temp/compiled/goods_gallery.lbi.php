<?php if ($this->_var['pictures']): ?>
 
            <ul class="cl" id="smallImgUl">
             <?php $_from = $this->_var['pictures']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'picture');if (count($_from)):
    foreach ($_from AS $this->_var['picture']):
?>
            <li><a href="#"><img src="<?php if ($this->_var['picture']['thumb_url']): ?><?php echo $this->_var['picture']['thumb_url']; ?><?php else: ?><?php echo $this->_var['picture']['img_url']; ?><?php endif; ?>" alt="<?php echo $this->_var['goods']['goods_name']; ?>" class="B_blue" /></a>
            </li>
            <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
            </ul>
<?php endif; ?>