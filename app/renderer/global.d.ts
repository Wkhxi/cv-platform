/**
 * 一般来说，我们 window.pdk 肯定会被 ts 报红，说 window 上并无此属性，这时候我们又不想改成 (window as any).pdk，那么我们可以扩展 Window 的类型
 * // 这里用于扩充window对象上的值
    declare interface Window {
      pdk: string;
    }
 */

// 解决ts报错：
// import导入图片时，报错 找不到模块或其相应得类型声明
declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.png' {
  const png: string;
  export default png;
}
