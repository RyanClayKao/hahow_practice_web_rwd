# 筆記
## 老師的排版概念
* section、article 之間的間距是用 margin來推出與上方、下方的距離
  * 內部是用 padding來推左右的內縮距離
* 文字段落之間的間距是用 padding-top來推上方的距離
* 當文字只有簡短的一行時，要測量它的高度，使用 line-height來撐開高度

### background-image排版設定
* 使用 bacground-size 設定寬度、高度
  * 設定圖片依據不同裝置寬度比例縮放，以及完整顯示方式
    * 搭配 padding-top，依據圖片高度與畫面要顯示的高度計算百分比
    * ˋ``
        background-size: 100% auto;        
        padding-top: xx%;
      ˋ``