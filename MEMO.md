# 筆記
## 老師的排版概念
* section、article 之間的間距是用 margin來推出與上方、下方的距離
  * 內部是用 padding來推左右的內縮距離
* 文字段落之間的間距是用 padding-top來推上方的距離
* 當文字只有簡短的一行時，要測量它的高度，使用 line-height來撐開高度

### background-image排版設定
* 使用 bacground-size 設定寬度、高度
  * 「pattern」設定圖片依據不同裝置寬度比例縮放，以及完整顯示方式
    * MEMO: 通常要顯示完整的圖片，會是給一個寫死的高度，若不要寫死，則要改算圖片高度百分比
    * 作法：
      * 搭配 padding-top，依據圖片高度與畫面要顯示的高度計算百分比
      * ˋ``
          background-size: 100% auto;        
          padding-top: xx%;
        ˋ``
  * 「pattern」CSS Sprites
    * 概念：設定 icon的時候，使用的是多個 icon在同一張圖片的狀況
    * 目的：達到載入圖片一次就好，而不用載入四次，增進存取效率
    * 作法：
      * 設定同一個 html標籤使用 backgroung-image，載入一次圖片就好
      * 在裡面要設定 icon的元素設定不同的 class
      * 針對各自要顯示的 icon去調整 background-position，來定位到圖片中正確的icon上面