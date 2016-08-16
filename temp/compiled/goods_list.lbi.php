<div class="box">
 <div class="box_1">
  
  <input type="hidden" name="category" value="<?php echo $this->_var['category']; ?>" />
  <input type="hidden" name="display" value="<?php echo $this->_var['pager']['display']; ?>" id="display" />
  <input type="hidden" name="brand" value="<?php echo $this->_var['brand_id']; ?>" />
  <input type="hidden" name="price_min" value="<?php echo $this->_var['price_min']; ?>" />
  <input type="hidden" name="price_max" value="<?php echo $this->_var['price_max']; ?>" />
  <input type="hidden" name="filter_attr" value="<?php echo $this->_var['filter_attr']; ?>" />
  <input type="hidden" name="page" value="<?php echo $this->_var['pager']['page']; ?>" />
  <input type="hidden" name="sort" value="<?php echo $this->_var['pager']['sort']; ?>" />
  <input type="hidden" name="order" value="<?php echo $this->_var['pager']['order']; ?>" />
  </form>

  <?php if ($this->_var['category'] > 0): ?>
    <form name="compareForm" action="compare.php" method="post" onSubmit="return compareGoods(this);">
  <?php endif; ?>

<?php if ($this->_var['pager']['display'] == 'grid'): ?> <ul class="prod-list cl"> 
  <?php $_from = $this->_var['goods_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods');if (count($_from)):
    foreach ($_from AS $this->_var['goods']):
?>

    <?php if ($this->_var['goods']['goods_id']): ?>
      <li class="prod-item ">
        <a href="<?php echo $this->_var['goods']['url']; ?>">
          <div class="figure">
            <img src="<?php echo $this->_var['goods']['goods_thumb']; ?>" alt="<?php echo $this->_var['goods']['goods_name']; ?>" class="goodsimg" />
          </div>
          <h3 title="<?php echo $this->_var['goods']['goods_name']; ?>">
            <?php echo $this->_var['goods']['goods_name']; ?>
          </h3>
          <p class="price">
          <?php if ($this->_var['goods']['promote_price'] != ""): ?>
            <?php echo $this->_var['lang']['promote_price']; ?><font class="shop_s"><?php echo $this->_var['goods']['promote_price']; ?></font><br />
          <?php else: ?>
            <?php echo $this->_var['lang']['shop_prices']; ?><font class="shop_s"><?php echo $this->_var['goods']['shop_price']; ?></font><br />
          <?php endif; ?>
          </p>
        </a>
      </li>
    <?php endif; ?>
  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
  </ul>
<?php endif; ?>
  
  <?php if ($this->_var['category'] > 0): ?>
  </form>
  <?php endif; ?>

 </div>
</div>
<div style="clear:both"></div>
