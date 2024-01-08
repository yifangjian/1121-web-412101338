function showdemo(week) {
    const p = document.querySelector(".show-classdemo");
    console.log("showdemo", p);
    switch (week) {
      case 1:
        p.innerHTML = `<iframe src='../demo/w01_38/index.html' width="100%" height="100%" />`;
        break;
      case 3:
        p.innerHTML = `<iframe src='../demo/w03_38_card_demo/index.html' width="100%" height="100%" />`;
        break;
      case 4:
        p.innerHTML = `<iframe src='../demo/w04_38_card_demo/index.html' width="100%" height="100%" />`;
        break;
      case 5:
        p.innerHTML = `<iframe src='../demo/w05_38_blog/index.html' width="100%" height="100%" />`;
        break;
      case 6:
        p.innerHTML = `<iframe src='../demo/w06_38_blog/index.html' width="100%" height="100%" />`;
        break;
      case 7:
        p.innerHTML = `<iframe src='../demo/w07_38_showdemo/index.html' width="100%" height="100%" />`;
        break;
      case 8:
        p.innerHTML = `<iframe src='../demo/w08_38_landing/index.html' width="100%" height="100%" />`;
        break;
      case 11:
        p.innerHTML = `<iframe src='../demo/w11_mid-2_38/p5_38.html' width="100%" height="100%" />`;
        break;
      case 13:
        p.innerHTML = `<iframe src='../demo/w13_portfolio_38/index.html' width="100%" height="100%" />`;
        break;
      case 14:
        p.innerHTML = `<iframe src='../demo/w14_38_mega_menu_38/index.html' width="100%" height="100%" />`;
        break;
      case 15:
        p.innerHTML = `<iframe src='../demo/w15_portfolio_38/index.html' width="100%" height="100%" />`;
        break;
      case 16:
        p.innerHTML = `<iframe src='../demo/w16_portfolio_38/index.html' width="100%" height="100%" />`;
        break;
    }
  }
  