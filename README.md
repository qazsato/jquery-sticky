# jquery-sticky
追尾型コンテンツを実装するためのjQueryプラグインです

![キャプチャー](https://raw.githubusercontent.com/wiki/qaz-s/jquery-sticky/image.gif)

## 使用方法

1. Download ZIPからコードをDLします

2. HTMLにjQuery本体とjquery.sticky.jsを読み込みます

        <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
        <script src="jquery.sticky.js"></script>

3. 追尾したいDOMに対してstickyメソッドを実行すればOK

        $(function () {
          var $h = $("#header");  // ヘッダー親DOM
          var $c = $("#content"); // コンテンツ親DOM
          var $f = $("#footer");  // フッター親DOM
          $("#stickyDom").sticky($h, $c, $f);
        });

## その他
- 既に同名のプラグインが存在していました… ([jquery.sticky.js](https://github.com/garand/sticky))
