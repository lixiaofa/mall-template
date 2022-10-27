/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2022-10-17 21:41:01
 * @LastEditTime: 2022-10-25 16:50:37
 * @LastEditors: 司马老贼
 */
import type { Ref } from "vue";
import type { Shop, Good } from "@/views/shopping-cart/type";

export const useShoppingCart = function (list: Ref<any[]>) {
  const checked = function (checked: Ref<boolean>) {
  
    list.value.forEach((shop) => {
      shop.checked = checked.value;
      shop.goodlist.forEach((good) => {
        good.checked = checked.value;
      });
    });
  };

  const allChecked = computed({
    get: () => {
      let isChecked = true;
      list.value.forEach((item) => {
        if (!item.checked) isChecked = false;
      });

      return isChecked ? true : false;
    },
    set: (val) => {
      checked(ref(val));
    },
  });

  const checkGood = function (shop: Shop , good: Good) {
    const checkedGood = [];

    shop.goodlist.map((item) => {
      if (item.checked) checkedGood.push(good);
    });
    shop.checked =
      checkedGood.length > 0 && checkedGood.length === shop.goodlist.length;
  };

  const checkShop = (shop: Shop) => {
    if (shop.checked) {
      shop.goodlist.forEach((good: Good) => (good.checked = true));
    } else {
      shop.goodlist.forEach((good: Good) => (good.checked = false));
    }
  };


  const deleteFn =  function(shop: Shop , good: Good){
      const indShop = list.value.indexOf(shop)
      const indexGood = shop.goodlist.indexOf(good)
      list.value[indShop].goodlist.splice(indexGood , 1)

  }

  return { allChecked, checkGood, checkShop , deleteFn };
};
