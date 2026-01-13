/*===========================================================*/
/*機能編 5-1-17 クリックしたら円形背景が拡大（下から）*/
/*===========================================================*/

$(".openbtn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
  $(".circle-bg").toggleClass("circleactive"); //丸背景にcircleactiveクラスを付与
  $("#main-nav dl").toggleClass("telactive"); //電話エリアにtelactiveクラスを付与
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスを除去
  $(".circle-bg").removeClass("circleactive"); //丸背景のcircleactiveクラスを除去
  $("#main-nav dl").removeClass("telactive"); //電話エリアのtelactiveクラスを除去
});
/*===========================================================*/
/*機能編 6-1-2 フェードイン・アウトさせて全画面で見せる*/
/*===========================================================*/

$(".slider").slick({
  fade: true, //切り替えをフェードで行う。初期値はfalse。
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000, //次のスライドに切り替わる待ち時間
  speed: 1000, //スライドの動きのスピード。初期値は300。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1, //スライドを画面に3枚見せる
  slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
  arrows: false, //左右の矢印なし
  pauseOnFocus: false, //フォーカスで一時停止を無効
  pauseOnHover: false, //マウスホバーで一時停止を無効
  pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$(".slider").on("touchmove", function (event, slick, currentSlide, nextSlide) {
  $(".slider").slick("slickPlay");
});

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime() {
  // 4-6 じわっ（ぼかしから出現）

  $(".blurTrigger").each(function () {
    //blurTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("blur"); // 画面内に入ったらblurというクラス名を追記
    } else {
      $(this).removeClass("blur"); // 画面外に出たらblurというクラス名を外す
    }
  });

  //4-8 スーッ（枠線が伸びて出現）

  $(".lineTrigger").each(function () {
    //lineTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("lineanime"); // 画面内に入ったらlineanimeというクラス名を追記
    } else {
      $(this).removeClass("lineanime"); // 画面外に出たらlineanimeというクラス名を外す
    }
  });
}
$(window).scroll(function () {
  fadeAnime();
});
