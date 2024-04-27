setTimeout(() => {
    LanguageOfPage();
}, 18000);


function LanguageOfPage() {
    $.fn.log = function () {
        console.log.apply(console, this);
        return this;
    };
    var langMap = {
        "ab": true,
        "aa": true, "af": true, "ak": true, "sq": true, "am": true, "ar": true, "an": true, "hy": true, "as": true, "av": true,
        "ay": true, "az": true, "bm": true, "ba": true, "eu": true, "be": true, "bn": true, "bh": true, "bi": true, 
        "bs": true, "br": true, "bg": true, "my": true, "ca": true, "ch": true, "ce": true, "ny": true, "zh": true, "zh-Hans": true, "zh-Hant": true,
        "cv": true, "kw": true, "co": true, "cr": true, "hr": true, "cs": true, "da": true, "dv": true, "nl": true, "dz": true, "en": true,
        "eo": true, "et": true, "ee": true, "fo": true, "fj": true, "fi": true, "fr": true, "ff": true, "gl": true, "gd": true, "gv": true, "ka": true,
        "de": true, "el": true, "kl": true, "gn": true, "gu": true, "ht": true, "ha": true, "he": true, "hz": true, "hi": true, "ho": true, "hu": true,
        "is": true, "io": true, "ig": true, "id": true, "in": true, "ia": true, "ie": true, "iu": true, "ik": true, "ga": true, "it": true, "ja": true,
        "jv": true, "kl": true, "kn": true, "kr": true, "ks": true, "kk": true, "km": true, "ki": true, "rw": true, "rn": true, "ky": true, "kv": true,
        "kg": true, "ko": true, "ku": true, "kj": true, "lo": true, "la": true, "lv": true, "li": true, "ln": true, "lt": true, "lu": true, "lg": true,
        "lb": true, "gv": true, "mk": true, "mg": true, "ms": true, "ml": true, "mt": true, "mi": true, "mr": true, "mh": true, "mo": true, "mn": true, "na": true,
        "nv": true, "ng": true, "nd": true, "ne": true, "no": true, "nb": true, "nn": true, "ii": true, "oc": true, "oj": true, "cu": true, "or": true,
        "om": true, "os": true, "pi": true, "ps": true, "fa": true, "pl": true, "pt": true, "pa": true, "qu": true, "rm": true, "ro": true, "ru": true,
        "se": true, "sm": true, "sg": true, "sa": true, "sr": true, "sh": true, "st": true, "tn": true, "sn": true, "ii": true, "sd": true, "si": true, "ss": true,
        "sk": true, "sl": true, "so": true, "nr": true, "es": true, "su": true, "sw": true, "ss": true, "sv": true, "tl": true, "ty": true, "tg": true,
        "ta": true, "tt": true, "te": true, "th": true, "bo": true, "ti": true, "to": true, "ts": true, "tr": true, "tk": true, "tw": true, "ug": true,
        "uk": true, "ur": true, "uz": true, "ve": true, "vi": true, "vo": true, "wa": true, "cy": true, "wo": true, "fy": true, "xh": true, "yi": true,
        "ji": true, "yo": true, "za": true, "zu": true, "ar-SA": true, "bn-BD": true, "cs-CZ": true, "da-DK": true, "de-AT": true, "de-CH": true, "de-DE": true,
        "el-GR": true, "en-AU": true, "en-CA": true, "en-GB": true, "en-IE": true, "en-IN": true, "en-NZ": true, "en-US": true, "en-ZA": true, "es-AR": true,
        "es-CL": true, "es-CO": true, "es-ES": true, "es-MX": true, "es-US": true, "fi-FI": true, "fr-FR": true,
        "fr-CA": true, "fr-CH": true, "fr-BE": true, "he-IL": true, "hi-IN": true, "hu-HU": true, "id-ID": true,
        "it-CH": true, "it-IT": true, "jp-JP": true, "ko-KR": true, "nl-BE": true, "nl-NL": true, "no-NO": true,
        "pl-PL": true, "pt-BR": true, "pt-PT": true, "ro-RO": true, "ru-RU": true, "sk-SK": true, "sv-SE": true,
        "ta-IN": true, "ta-LK": true, "th-TH": true, "tr-TR": true, "zh-CN": true, "zh-HK": true, "zh-TW": true
    }
    var CountryMap = {
        "AF": true, "AL": true, "DZ": true, "AS": true, "AD": true, "AO": true, "AQ": true, "AG": true, "AR": true,
        "AM": true, "AW": true, "AU": true, "AT": true, "AZ": true, "BS": true, "BH": true, "BD": true, "BB": true, "BY": true,
        "BE": true, "BZ": true, "BJ": true, "BM": true, "BT": true, "BO": true, "BA": true, "BW": true, "BV": true,
        "BR": true, "IO": true, "BN": true, "BG": true, "BF": true, "BI": true, "KH": true, "CM": true, "CA": true, "CV": true,
        "KY": true, "CF": true, "TD": true, "CL": true, "CN": true, "CX": true, "CC": true, "CO": true, "KM": true,
        "CG": true, "CD": true, "CK": true, "CR": true, "CI": true, "HR": true, "CU": true, "CY": true, "CZ": true, "DK": true,
        "DJ": true, "DM": true, "DO": true, "EC": true, "EG": true, "SV": true, "GQ": true, "ER": true, "EE": true,
        "ET": true, "FK": true, "FO": true, "FJ": true, "FI": true, "FR": true, "GF": true, "PF": true, "TF": true,
        "GA": true, "GM": true, "GE": true, "DE": true, "GH": true, "GI": true, "GR": true, "GL": true, "GD": true,
        "GP": true, "GU": true, "GT": true, "GN": true, "GW": true, "GY": true, "HT": true, "HM": true, "HN": true,
        "HK": true, "HU": true, "IS": true, "IN": true, "ID": true, "IR": true, "IQ": true, "IE": true, "IL": true,
        "IT": true, "JM": true, "JP": true, "JO": true, "KZ": true, "KE": true, "KI": true, "KP": true, "KR": true,
        "KW": true, "KG": true, "LA": true, "LV": true, "LB": true, "LS": true, "LR": true, "LY": true, "LI": true,
        "LT": true, "LU": true, "MO": true, "MK": true, "MG": true, "MW": true, "MY": true, "MV": true, "ML": true,
        "MT": true, "MH": true, "MQ": true, "MR": true, "MU": true, "YT": true, "MX": true, "FM": true, "MD": true,
        "MC": true, "MN": true, "ME": true, "MS": true, "MA": true, "MZ": true, "MM": true, "NA": true, "NR": true,
        "NP": true, "NL": true, "AN": true, "NC": true, "NZ": true, "NI": true, "NE": true, "NG": true, "NU": true,
        "NF": true, "MP": true, "NO": true, "OM": true, "PK": true, "PW": true, "PS": true, "PA": true, "PG": true,
        "PY": true, "PE": true, "PH": true, "PN": true, "PL": true, "PT": true, "PR": true, "QA": true, "RE": true,
        "RO": true, "RU": true, "RW": true, "SH": true, "KN": true, "LC": true, "PM": true, "VC": true, "WS": true,
        "SM": true, "ST": true, "SA": true, "SN": true, "RS": true, "SC": true, "SL": true, "SG": true, "SK": true,
        "SI": true, "SB": true, "SO": true, "ZA": true, "GS": true, "SS": true, "ES": true, "LK": true, "SD": true,
        "SR": true, "SJ": true, "SZ": true, "SE": true, "CH": true, "SY": true, "TW": true, "TJ": true, "TZ": true, "TH": true,
        "TL": true, "TG": true, "TK": true, "TO": true, "TT": true, "TN": true, "TR": true, "TM": true, "TC": true,
        "TV": true, "UG": true, "UA": true, "AE": true, "GB": true, "US": true, "UM": true, "UY": true, "UZ": true,
        "VU": true, "VE": true, "VN": true, "VG": true, "VI": true, "WF": true, "EH": true, "YE": true, "ZM": true, "ZW": true,
    }
    // console.log(document.getElementsByTagName("html")[0].getAttribute("xml:lang"))
    // console.log(document.getElementsByTagName("html")[0].getAttribute("lang"))
    let errors = 0;
    let fixed = 0;
    var checkOn1 = true
    var checkOn2 = true
    if (
        document.getElementsByTagName("html")[0].getAttribute("lang") == null ||
        document.getElementsByTagName("html")[0].getAttribute("lang") == ""
    ) {
        checkOn1 = false

    }
    if (document.getElementsByTagName("html")[0].getAttribute("xml:lang") == null ||
        document.getElementsByTagName("html")[0].getAttribute("xml:lang") == "") {
        checkOn2 = false
    }
    if (!checkOn1 && !checkOn2) {
        errors++;
        window.errorMessage("WCAG 3.1.1 (2.0,A)", "ISO Language attribute on the opening HTML tag is not set", "Check that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages", document.getElementsByTagName("html")[0]);

        
    }
    else if (!checkOn1 && checkOn2) {
        if (document.getElementsByTagName("html")[0].getAttribute("xml:lang") in langMap) {
            // Valid Language ID
        } else {
            if (document.getElementsByTagName("html")[0].getAttribute("xml:lang").length == 2) {
                errors++;
                window.errorMessage("WCAG 3.1.1 (2.0,A)", "Invalid language attribute of the HTML page", "Check that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages", document.getElementsByTagName("html")[0]);
                
            } else {
                var checkmix = false
                for (keys in langMap) {
                    for (codes in CountryMap) {
                        if (keys.length == 2) {
                            var mixedLangTag = keys + "-" + codes
                            if (mixedLangTag == document.getElementsByTagName("html")[0].getAttribute("xml:lang")) {
                                checkmix = true
                                break
                            }
                        }
                    }
                }
                if (!checkmix) {
                    errors++;
                    window.errorMessage("WCAG 3.1.1 (2.0,A)", "Invalid language attribute of the HTML page", "Check that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages", document.getElementsByTagName("html")[0]);
                    
                }
            }
        }
    } else if (checkOn1 && !checkOn2) {
        if (document.getElementsByTagName("html")[0].getAttribute("lang") in langMap) {
            // Valid Language ID
        } else {
            if (document.getElementsByTagName("html")[0].getAttribute("lang").length == 2) {
                errors++;
                window.errorMessage("WCAG 3.1.1 (2.0,A)", "Invalid language attribute of the HTML page", "Check that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages", document.getElementsByTagName("html")[0]);
                
            } else {
                var checkmix = false
                for (keys in langMap) {
                    for (codes in CountryMap) {
                        if (keys.length == 2) {
                            var mixedLangTag = keys + "-" + codes
                            console.log(mixedLangTag)
                            if (mixedLangTag == document.getElementsByTagName("html")[0].getAttribute("lang")) {
                                checkmix = true
                                break
                            }
                        }
                    }
                }
                if (!checkmix) {
                    errors++;
                    window.errorMessage("WCAG 3.1.1 (2.0,A)", "Invalid language attribute of the HTML page", "Check that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages", document.getElementsByTagName("html")[0]);
                    
                }
            }
        }
    } else if (checkOn1 && checkOn2) {
        if (document.getElementsByTagName("html")[0].getAttribute("xml:lang") in langMap) {
            // Valid Language ID
        } else {
            if (document.getElementsByTagName("html")[0].getAttribute("xml:lang").length == 2) {
                errors++;
                window.errorMessage("WCAG 3.1.1 (2.0,A)", "Invalid language attribute of the HTML page", "Check that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages", document.getElementsByTagName("html")[0]);
                
            } else {
                var checkmix = false
                for (keys in langMap) {
                    for (codes in CountryMap) {
                        if (keys.length == 2) {
                            var mixedLangTag = keys + "-" + codes
                            if (mixedLangTag == document.getElementsByTagName("html")[0].getAttribute("xml:lang")) {
                                checkmix = true
                                break
                            }
                        }
                    }
                }
                if (!checkmix) {
                    errors++;
                    window.errorMessage("WCAG 3.1.1 (2.0,A)", "Invalid language attribute of the HTML page", "Check that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages", document.getElementsByTagName("html")[0]);
                    
                }
            }
        }
        if (document.getElementsByTagName("html")[0].getAttribute("lang") in langMap) {
            // Valid Language ID
        } else {
            if (document.getElementsByTagName("html")[0].getAttribute("lang").length == 2) {
                errors++;
               window.errorMessage("WCAG 3.1.1 (2.0,A)", "Invalid language attribute of the HTML page", "Check that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages", document.getElementsByTagName("html")[0]);
                
            } else {
                var checkmix = false
                for (keys in langMap) {
                    for (codes in CountryMap) {
                        if (keys.length == 2) {
                            var mixedLangTag = keys + "-" + codes
                            console.log(mixedLangTag)
                            if (mixedLangTag == document.getElementsByTagName("html")[0].getAttribute("lang")) {
                                checkmix = true
                                break
                            }
                        }
                    }
                }
                if (!checkmix) {
                    errors++;
                    window.errorMessage("WCAG 3.1.1 (2.0,A)", "Invalid language attribute of the HTML page", "Check that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages", document.getElementsByTagName("html")[0]);
                    
                }
            }
        }
    }

    chrome.runtime.sendMessage({ type: "results", script: "3_1_1_LanguageOfPage(A)", data: { errors, fixed } });  
}
