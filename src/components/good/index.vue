<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-07 16:42:00
 * @LastEditTime: 2022-10-14 11:53:07
 * @LastEditors: 司马老贼
-->

<template>
  <div :class="[direction? direction: 'horizontal']">
    <van-card :price="good.sellingPrice" :desc="good.goodsIntro" :title="good.goodsName" :thumb="good.goodsCoverImg">
      <template #tags>
          <slot name="tags"></slot>


      </template>
      <template #num>
        <slot name="num"></slot>

      </template>
      <template #footer>
        <slot name="footer"></slot>

      </template>
      


     
    </van-card>
  </div>

</template>


<script setup lang="ts">
import type { Good } from '@/components/good/type'
defineOptions({
  name: "Good",
});


interface Props {
  good: Good,
  direction?: string 
}
const { good , direction } = defineProps<Props>()

</script>

<style lang="less" scoped>
.vertical  .van-card{
    height: auto;
  }
.vertical .van-card:not(:first-child){
  margin-top:0px !important;
}
 .vertical   ::v-deep .van-card__header{
  display: block;


}
.vertical ::v-deep  .van-card__content{
  display: block;
}
.horizontal {
  height: 140px;
}

.horizontal .van-card {
  position: absolute;

}
</style>
