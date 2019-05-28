import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "app";

  constructor(private translate: TranslateService) {}

  public async ngOnInit() {
    // 语言初始化(若未设置语言, 则取浏览器语言)
    let currentLanguage = (await localStorage.getItem("currentLanguage")) || this.translate.getBrowserCultureLang();
    // 当在assets/i18n中找不到对应的语言翻译时，使用'zh-CN'作为默认语言
    this.translate.setDefaultLang("zh-CN");
    this.translate.use(currentLanguage);
    // 记录当前设置的语言
    localStorage.setItem("currentLanguage", currentLanguage);

    //订阅语言切换事件
    this.translate.onLangChange.subscribe(params => {
      // do something
      console.log('11111111');
    });
  }

  public selectLanguage(lang) {
    this.translate.use(lang);
    // 更新当前记录的语言
    localStorage.setItem("currentLanguage", lang);
  }
}
