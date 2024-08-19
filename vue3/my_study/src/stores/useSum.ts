import { ref ,
    onMounted,
    computed,
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onUpdated,
    onUnmounted
} from 'vue'

export default function () {
  // 数据
  let sum = ref(0)
  let bigSum = computed(()=>{
    return sum.value * 10
  })

  // 方法
  function add() {
    sum.value += 1
  }

  // 钩子
  onMounted(()=>{
    add()
    console.log('子---挂载完毕')
  })
  onBeforeMount(()=>{
    console.log('挂载前')
  })
  // 挂载完毕
  onMounted(()=>{
    
  })
  // 更新前
  onBeforeUpdate(()=>{
    console.log('更新前')
  })
  // 更新完毕
  onUpdated(()=>{
    console.log('更新完毕')
  })
  // 卸载前
  onBeforeUnmount(()=>{
   console.log('卸载前')
  })
  // 卸载完毕
  onUnmounted(()=>{
    console.log('卸载完毕')
  })

  // 给外部提供东西
  return {sum,add,bigSum}
}