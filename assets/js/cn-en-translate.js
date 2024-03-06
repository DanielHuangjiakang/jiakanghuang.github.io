$(document).ready(function () {
    // 检测浏览器语言
    var userLang = navigator.language || navigator.userLanguage; 
    var defaultLang = userLang.startsWith('zh') ? 'cn' : 'en';

    // 初始化i18n并设置默认语言
    $("[i18n]").i18n({
        defaultLang: defaultLang,
        filePath: "/assets/i18n/",
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true,
        callback: function () {
            console.log("i18n is ready.");
            updateDownloadLink(defaultLang); // 初始化时更新下载链接
        },
    });

    // 中英文切换按钮
    $("#translate").click(function () {
        var newLang = defaultLang === 'cn' ? 'en' : 'cn';
        var buttonText = newLang === 'cn' ? "中/En" : "En/中";
        defaultLang = newLang; // 更新当前语言
        $("#nav__translate").text(buttonText); // 更新按钮文本

        // 更新语言设置和下载链接
        $("[i18n]").i18n({
            defaultLang: newLang,
            filePath: "/assets/i18n/",
        });
        updateDownloadLink(newLang); // 切换语言时更新下载链接
    });

    // 更新下载链接的函数
    function updateDownloadLink(lang) {
        var resumeLink = lang === 'cn' ? "assets/pdf/黄佳康简历.pdf" : "assets/pdf/Jiakang Huang-Resume.pdf";
        $('.about__buttons a').attr('href', resumeLink);
    }
});


