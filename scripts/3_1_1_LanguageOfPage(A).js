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
        "aa": true,
        "af": true,
        "ak": true,
        "sq": true,
        "am": true,
        "ar": true,
        "an": true,
        "hy": true,
        "as": true,
        "av": true,
        "ay": true,
        "az": true,
        "bm": true,
        "ba": true,
        "eu": true,
        "be": true,
        "bn": true,
        "bh": true,
        "bi": true,
        "bs": true,
        "br": true,
        "bg": true,
        "my": true,
        "ca": true,
        "ch": true,
        "ce": true,
        "ny": true,
        "zh": true,
        "zh-Hans": true,
        "zh-Hant": true,
        "cv": true,
        "kw": true,
        "co": true,
        "cr": true,
        "hr": true,
        "cs": true,
        "da": true,
        "dv": true,
        "nl": true,
        "dz": true,
        "en": true,
        "eo": true,
        "et": true,
        "ee": true,
        "fo": true,
        "fj": true,
        "fi": true,
        "fr": true,
        "ff": true,
        "gl": true,
        "gd": true,
        "gv": true,
        "ka": true,
        "de": true,
        "el": true,
        "kl": true,
        "gn": true,
        "gu": true,
        "ht": true,
        "ha": true,
        "he": true,
        "hz": true,
        "hi": true,
        "ho": true,
        "hu": true,
        "is": true,
        "io": true,
        "ig": true,
        "id": true,
        "in": true,
        "ia": true,
        "ie": true,
        "iu": true,
        "ik": true,
        "ga": true,
        "it": true,
        "ja": true,
        "jv": true,
        "kl": true,
        "kn": true,
        "kr": true,
        "ks": true,
        "kk": true,
        "km": true,
        "ki": true,
        "rw": true,
        "rn": true,
        "ky": true,
        "kv": true,
        "kg": true,
        "ko": true,
        "ku": true,
        "kj": true,
        "lo": true,
        "la": true,
        "lv": true,
        "li": true,
        "ln": true,
        "lt": true,
        "lu": true,
        "lg": true,
        "lb": true,
        "gv": true,
        "mk": true,
        "mg": true,
        "ms": true,
        "ml": true,
        "mt": true,
        "mi": true,
        "mr": true,
        "mh": true,
        "mo": true,
        "mn": true,
        "na": true,
        "nv": true,
        "ng": true,
        "nd": true,
        "ne": true,
        "no": true,
        "nb": true,
        "nn": true,
        "ii": true,
        "oc": true,
        "oj": true,
        "cu": true,
        "or": true,
        "om": true,
        "os": true,
        "pi": true,
        "ps": true,
        "fa": true,
        "pl": true,
        "pt": true,
        "pa": true,
        "qu": true,
        "rm": true,
        "ro": true,
        "ru": true,
        "se": true,
        "sm": true,
        "sg": true,
        "sa": true,
        "sr": true,
        "sh": true,
        "st": true,
        "tn": true,
        "sn": true,
        "ii": true,
        "sd": true,
        "si": true,
        "ss": true,
        "sk": true,
        "sl": true,
        "so": true,
        "nr": true,
        "es": true,
        "su": true,
        "sw": true,
        "ss": true,
        "sv": true,
        "tl": true,
        "ty": true,
        "tg": true,
        "ta": true,
        "tt": true,
        "te": true,
        "th": true,
        "bo": true,
        "ti": true,
        "to": true,
        "ts": true,
        "tr": true,
        "tk": true,
        "tw": true,
        "ug": true,
        "uk": true,
        "ur": true,
        "uz": true,
        "ve": true,
        "vi": true,
        "vo": true,
        "wa": true,
        "cy": true,
        "wo": true,
        "fy": true,
        "xh": true,
        "yi": true,
        "ji": true,
        "yo": true,
        "za": true,
        "zu": true,
        "ar-SA": true,
        "bn-BD": true,
        "cs-CZ": true,
        "da-DK": true,
        "de-AT": true,
        "de-CH": true,
        "de-DE": true,
        "el-GR": true,
        "en-AU": true,
        "en-CA": true,
        "en-GB": true,
        "en-IE": true,
        "en-IN": true,
        "en-NZ": true,
        "en-US": true,
        "en-ZA": true,
        "es-AR": true,
        "es-CL": true,
        "es-CO": true,
        "es-ES": true,
        "es-MX": true,
        "es-US": true,
        "fi-FI": true,
        "fr-FR": true,
        "fr-CA": true,
        "fr-CH": true,
        "fr-BE": true,
        "he-IL": true,
        "hi-IN": true,
        "hu-HU": true,
        "id-ID": true,
        "it-CH": true,
        "it-IT": true,
        "jp-JP": true,
        "ko-KR": true,
        "nl-BE": true,
        "nl-NL": true,
        "no-NO": true,
        "pl-PL": true,
        "pt-BR": true,
        "pt-PT": true,
        "ro-RO": true,
        "ru-RU": true,
        "sk-SK": true,
        "sv-SE": true,
        "ta-IN": true,
        "ta-LK": true,
        "th-TH": true,
        "tr-TR": true,
        "zh-CN": true,
        "zh-HK": true,
        "zh-TW": true
    }
    var CountryMap = {
        "AF": true,
        "AL": true,
        "DZ": true,
        "AS": true,
        "AD": true,
        "AO": true,
        "AQ": true,
        "AG": true,
        "AR": true,
        "AM": true,
        "AW": true,
        "AU": true,
        "AT": true,
        "AZ": true,
        "BS": true,
        "BH": true,
        "BD": true,
        "BB": true,
        "BY": true,
        "BE": true,
        "BZ": true,
        "BJ": true,
        "BM": true,
        "BT": true,
        "BO": true,
        "BA": true,
        "BW": true,
        "BV": true,
        "BR": true,
        "IO": true,
        "BN": true,
        "BG": true,
        "BF": true,
        "BI": true,
        "KH": true,
        "CM": true,
        "CA": true,
        "CV": true,
        "KY": true,
        "CF": true,
        "TD": true,
        "CL": true,
        "CN": true,
        "CX": true,
        "CC": true,
        "CO": true,
        "KM": true,
        "CG": true,
        "CD": true,
        "CK": true,
        "CR": true,
        "CI": true,
        "HR": true,
        "CU": true,
        "CY": true,
        "CZ": true,
        "DK": true,
        "DJ": true,
        "DM": true,
        "DO": true,
        "EC": true,
        "EG": true,
        "SV": true,
        "GQ": true,
        "ER": true,
        "EE": true,
        "ET": true,
        "FK": true,
        "FO": true,
        "FJ": true,
        "FI": true,
        "FR": true,
        "GF": true,
        "PF": true,
        "TF": true,
        "GA": true,
        "GM": true,
        "GE": true,
        "DE": true,
        "GH": true,
        "GI": true,
        "GR": true,
        "GL": true,
        "GD": true,
        "GP": true,
        "GU": true,
        "GT": true,
        "GN": true,
        "GW": true,
        "GY": true,
        "HT": true,
        "HM": true,
        "HN": true,
        "HK": true,
        "HU": true,
        "IS": true,
        "IN": true,
        "ID": true,
        "IR": true,
        "IQ": true,
        "IE": true,
        "IL": true,
        "IT": true,
        "JM": true,
        "JP": true,
        "JO": true,
        "KZ": true,
        "KE": true,
        "KI": true,
        "KP": true,
        "KR": true,
        "KW": true,
        "KG": true,
        "LA": true,
        "LV": true,
        "LB": true,
        "LS": true,
        "LR": true,
        "LY": true,
        "LI": true,
        "LT": true,
        "LU": true,
        "MO": true,
        "MK": true,
        "MG": true,
        "MW": true,
        "MY": true,
        "MV": true,
        "ML": true,
        "MT": true,
        "MH": true,
        "MQ": true,
        "MR": true,
        "MU": true,
        "YT": true,
        "MX": true,
        "FM": true,
        "MD": true,
        "MC": true,
        "MN": true,
        "ME": true,
        "MS": true,
        "MA": true,
        "MZ": true,
        "MM": true,
        "NA": true,
        "NR": true,
        "NP": true,
        "NL": true,
        "AN": true,
        "NC": true,
        "NZ": true,
        "NI": true,
        "NE": true,
        "NG": true,
        "NU": true,
        "NF": true,
        "MP": true,
        "NO": true,
        "OM": true,
        "PK": true,
        "PW": true,
        "PS": true,
        "PA": true,
        "PG": true,
        "PY": true,
        "PE": true,
        "PH": true,
        "PN": true,
        "PL": true,
        "PT": true,
        "PR": true,
        "QA": true,
        "RE": true,
        "RO": true,
        "RU": true,
        "RW": true,
        "SH": true,
        "KN": true,
        "LC": true,
        "PM": true,
        "VC": true,
        "WS": true,
        "SM": true,
        "ST": true,
        "SA": true,
        "SN": true,
        "RS": true,
        "SC": true,
        "SL": true,
        "SG": true,
        "SK": true,
        "SI": true,
        "SB": true,
        "SO": true,
        "ZA": true,
        "GS": true,
        "SS": true,
        "ES": true,
        "LK": true,
        "SD": true,
        "SR": true,
        "SJ": true,
        "SZ": true,
        "SE": true,
        "CH": true,
        "SY": true,
        "TW": true,
        "TJ": true,
        "TZ": true,
        "TH": true,
        "TL": true,
        "TG": true,
        "TK": true,
        "TO": true,
        "TT": true,
        "TN": true,
        "TR": true,
        "TM": true,
        "TC": true,
        "TV": true,
        "UG": true,
        "UA": true,
        "AE": true,
        "GB": true,
        "US": true,
        "UM": true,
        "UY": true,
        "UZ": true,
        "VU": true,
        "VE": true,
        "VN": true,
        "VG": true,
        "VI": true,
        "WF": true,
        "EH": true,
        "YE": true,
        "ZM": true,
        "ZW": true,
    }
    var langMap2 = {
        "aar" : true,
        "abk" : true,
        "ace" : true,
        "ach" : true,
        "ada" : true,
        "ady" : true,
        "afa" : true,
        "afh" : true,
        "afr" : true,
        "ain" : true,
        "aka" : true,
        "akk" : true,
        "alb" : true,
        "sqi" : true,
        "ale" : true,
        "alg" : true,
        "alt" : true,
        "amh" : true,
        "ang" : true,
        "anp" : true,
        "apa" : true,
        "ara" : true,
        "arc" : true,
        "arg" : true,
        "arm" : true,
        "hye" : true,
        "arn" : true,
        "arp" : true,
        "art" : true,
        "arw" : true,
        "asm" : true,
        "ast" : true,
        "ath" : true,
        "aus" : true,
        "ava" : true,
        "ave" : true,
        "awa" : true,
        "aym" : true,
        "aze" : true,
        "bad" : true,
        "bai" : true,
        "bak" : true,
        "bal" : true,
        "bam" : true,
        "ban" : true,
        "baq" : true,
        "eus" : true,
        "bas" : true,
        "bat" : true,
        "bej" : true,
        "bel" : true,
        "bem" : true,
        "ben" : true,
        "ber" : true,
        "bho" : true,
        "bih" : true,
        "bik" : true,
        "bin" : true,
        "bis" : true,
        "bla" : true,
        "bnt" : true,
        "tib" : true,
        "bod" : true,
        "bos" : true,
        "bra" : true,
        "bre" : true,
        "btk" : true,
        "bua" : true,
        "bug" : true,
        "bul" : true,
        "bur" : true,
        "mya" : true,
        "byn" : true,
        "cad" : true,
        "cai" : true,
        "car" : true,
        "cat" : true,
        "cau" : true,
        "ceb" : true,
        "cel" : true,
        "cze" : true,
        "ces" : true,
        "cha" : true,
        "chb" : true,
        "che" : true,
        "chg" : true,
        "chi" : true,
        "zho" : true,
        "chk" : true,
        "chm" : true,
        "chn" : true,
        "cho" : true,
        "chp" : true,
        "chr" : true,
        "chu" : true,
        "chv" : true,
        "chy" : true,
        "cmc" : true,
        "cnr" : true,
        "cop" : true,
        "cor" : true,
        "cos" : true,
        "cpe" : true,
        "cpf" : true,
        "cpp" : true,
        "cre" : true,
        "crh" : true,
        "crp" : true,
        "csb" : true,
        "cus" : true,
        "wel" : true,
        "cym" : true,
        "cze" : true,
        "ces" : true,
        "dak" : true,
        "dan" : true,
        "dar" : true,
        "day" : true,
        "del" : true,
        "den" : true,
        "ger" : true,
        "deu" : true,
        "dgr" : true,
        "din" : true,
        "div" : true,
        "doi" : true,
        "dra" : true,
        "dsb" : true,
        "dua" : true,
        "dum" : true,
        "dut" : true,
        "nld" : true,
        "dyu" : true,
        "dzo" : true,
        "efi" : true,
        "egy" : true,
        "eka" : true,
        "gre" : true,
        "ell" : true,
        "elx" : true,
        "eng" : true,
        "enm" : true,
        "epo" : true,
        "est" : true,
        "baq" : true,
        "eus" : true,
        "ewe" : true,
        "ewo" : true,
        "fan" : true,
        "fao" : true,
        "per" : true,
        "fas" : true,
        "fat" : true,
        "fij" : true,
        "fil" : true,
        "fin" : true,
        "fiu" : true,
        "fon" : true,
        "fre" : true,
        "fra" : true,
        "fre" : true,
        "fra" : true,
        "frm" : true,
        "fro" : true,
        "frr" : true,
        "frs" : true,
        "fry" : true,
        "ful" : true,
        "fur" : true,
        "gaa" : true,
        "gay" : true,
        "gba" : true,
        "gem" : true,
        "geo" : true,
        "kat" : true,
        "ger" : true,
        "deu" : true,
        "gez" : true,
        "gil" : true,
        "gla" : true,
        "gle" : true,
        "glg" : true,
        "glv" : true,
        "gmh" : true,
        "goh" : true,
        "gon" : true,
        "gor" : true,
        "got" : true,
        "grb" : true,
        "grc" : true,
        "gre" : true,
        "ell" : true,
        "grn" : true,
        "gsw" : true,
        "guj" : true,
        "gwi" : true,
        "hai" : true,
        "hat" : true,
        "hau" : true,
        "haw" : true,
        "heb" : true,
        "her" : true,
        "hil" : true,
        "him" : true,
        "hin" : true,
        "hit" : true,
        "hmn" : true,
        "hmo" : true,
        "hrv" : true,
        "hsb" : true,
        "hun" : true,
        "hup" : true,
        "arm" : true,
        "hye" : true,
        "iba" : true,
        "ibo" : true,
        "ice" : true,
        "isl" : true,
        "ido" : true,
        "iii" : true,
        "ijo" : true,
        "iku" : true,
        "ile" : true,
        "ilo" : true,
        "ina" : true,
        "inc" : true,
        "ind" : true,
        "ine" : true,
        "inh" : true,
        "ipk" : true,
        "ira" : true,
        "iro" : true,
        "ice" : true,
        "isl" : true,
        "ita" : true,
        "jav" : true,
        "jbo" : true,
        "jpn" : true,
        "jpr" : true,
        "jrb" : true,
        "kaa" : true,
        "kab" : true,
        "kac" : true,
        "kal" : true,
        "kam" : true,
        "kan" : true,
        "kar" : true,
        "kas" : true,
        "geo" : true,
        "kat" : true,
        "kau" : true,
        "kaw" : true,
        "kaz" : true,
        "kbd" : true,
        "kha" : true,
        "khi" : true,
        "khm" : true,
        "kho" : true,
        "kik" : true,
        "kin" : true,
        "kir" : true,
        "kmb" : true,
        "kok" : true,
        "kom" : true,
        "kon" : true,
        "kor" : true,
        "kos" : true,
        "kpe" : true,
        "krc" : true,
        "krl" : true,
        "kro" : true,
        "kru" : true,
        "kua" : true,
        "kum" : true,
        "kur" : true,
        "kut" : true,
        "lad" : true,
        "lah" : true,
        "lam" : true,
        "lao" : true,
        "lat" : true,
        "lav" : true,
        "lez" : true,
        "lim" : true,
        "lin" : true,
        "lit" : true,
        "lol" : true,
        "loz" : true,
        "ltz" : true,
        "lua" : true,
        "lub" : true,
        "lug" : true,
        "lui" : true,
        "lun" : true,
        "luo" : true,
        "lus" : true,
        "mac" : true,
        "mkd" : true,
        "mad" : true,
        "mag" : true,
        "mah" : true,
        "mai" : true,
        "mak" : true,
        "mal" : true,
        "man" : true,
        "mao" : true,
        "mri" : true,
        "map" : true,
        "mar" : true,
        "mas" : true,
        "may" : true,
        "msa" : true,
        "mdf" : true,
        "mdr" : true,
        "men" : true,
        "mga" : true,
        "mic" : true,
        "min" : true,
        "mis" : true,
        "mac" : true,
        "mkd" : true,
        "mkh" : true,
        "mlg" : true,
        "mlt" : true,
        "mnc" : true,
        "mni" : true,
        "mno" : true,
        "moh" : true,
        "mon" : true,
        "mos" : true,
        "mao" : true,
        "mri" : true,
        "may" : true,
        "msa" : true,
        "mul" : true,
        "mun" : true,
        "mus" : true,
        "mwl" : true,
        "mwr" : true,
        "bur" : true,
        "mya" : true,
        "myn" : true,
        "myv" : true,
        "nah" : true,
        "nai" : true,
        "nap" : true,
        "nau" : true,
        "nav" : true,
        "nbl" : true,
        "nde" : true,
        "ndo" : true,
        "nds" : true,
        "nep" : true,
        "new" : true,
        "nia" : true,
        "nic" : true,
        "niu" : true,
        "dut" : true,
        "nld" : true,
        "nno" : true,
        "nob" : true,
        "nog" : true,
        "non" : true,
        "nor" : true,
        "nqo" : true,
        "nso" : true,
        "nub" : true,
        "nwc" : true,
        "nya" : true,
        "nym" : true,
        "nyn" : true,
        "nyo" : true,
        "nzi" : true,
        "oci" : true,
        "oji" : true,
        "ori" : true,
        "orm" : true,
        "osa" : true,
        "oss" : true,
        "ota" : true,
        "oto" : true,
        "paa" : true,
        "pag" : true,
        "pal" : true,
        "pam" : true,
        "pan" : true,
        "pap" : true,
        "pau" : true,
        "peo" : true,
        "per" : true,
        "fas" : true,
        "phi" : true,
        "phn" : true,
        "pli" : true,
        "pol" : true,
        "pon" : true,
        "por" : true,
        "pra" : true,
        "pro" : true,
        "pus" : true,
        "qaa-qtz" : true,
        "que" : true,
        "raj" : true,
        "rap" : true,
        "rar" : true,
        "roa" : true,
        "roh" : true,
        "rom" : true,
        "rum" : true,
        "ron" : true,
        "rum" : true,
        "ron" : true,
        "run" : true,
        "rup" : true,
        "rus" : true,
        "sad" : true,
        "sag" : true,
        "sah" : true,
        "sai" : true,
        "sal" : true,
        "sam" : true,
        "san" : true,
        "sas" : true,
        "sat" : true,
        "scn" : true,
        "sco" : true,
        "sel" : true,
        "sem" : true,
        "sga" : true,
        "sgn" : true,
        "shn" : true,
        "sid" : true,
        "sin" : true,
        "sio" : true,
        "sit" : true,
        "sla" : true,
        "slo" : true,
        "slk" : true,
        "slo" : true,
        "slk" : true,
        "slv" : true,
        "sma" : true,
        "sme" : true,
        "smi" : true,
        "smj" : true,
        "smn" : true,
        "smo" : true,
        "sms" : true,
        "sna" : true,
        "snd" : true,
        "snk" : true,
        "sog" : true,
        "som" : true,
        "son" : true,
        "sot" : true,
        "spa" : true,
        "alb" : true,
        "sqi" : true,
        "srd" : true,
        "srn" : true,
        "srp" : true,
        "srr" : true,
        "ssa" : true,
        "ssw" : true,
        "suk" : true,
        "sun" : true,
        "sus" : true,
        "sux" : true,
        "swa" : true,
        "swe" : true,
        "syc" : true,
        "syr" : true,
        "tah" : true,
        "tai" : true,
        "tam" : true,
        "tat" : true,
        "tel" : true,
        "tem" : true,
        "ter" : true,
        "tet" : true,
        "tgk" : true,
        "tgl" : true,
        "tha" : true,
        "tib" : true,
        "bod" : true,
        "tig" : true,
        "tir" : true,
        "tiv" : true,
        "tkl" : true,
        "tlh" : true,
        "tli" : true,
        "tmh" : true,
        "tog" : true,
        "ton" : true,
        "tpi" : true,
        "tsi" : true,
        "tsn" : true,
        "tso" : true,
        "tuk" : true,
        "tum" : true,
        "tup" : true,
        "tur" : true,
        "tut" : true,
        "tvl" : true,
        "twi" : true,
        "tyv" : true,
        "udm" : true,
        "uga" : true,
        "uig" : true,
        "ukr" : true,
        "umb" : true,
        "und" : true,
        "urd" : true,
        "uzb" : true,
        "vai" : true,
        "ven" : true,
        "vie" : true,
        "vol" : true,
        "vot" : true,
        "wak" : true,
        "wal" : true,
        "war" : true,
        "was" : true,
        "wel" : true,
        "cym" : true,
        "wen" : true,
        "wln" : true,
        "wol" : true,
        "xal" : true,
        "xho" : true,
        "yao" : true,
        "yap" : true,
        "yid" : true,
        "yor" : true,
        "ypk" : true,
        "zap" : true,
        "zbl" : true,
        "zen" : true,
        "zgh" : true,
        "zha" : true,
        "chi" : true,
        "zho" : true,
        "znd" : true,
        "zul" : true,
        "zun" : true,
        "zxx" : true,
        "zza" : true}
    // console.log(document.getElementsByTagName("html")[0].getAttribute("xml:lang"))
    // console.log(document.getElementsByTagName("html")[0].getAttribute("lang"))
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
        console.log("%cRule:%cWCAG 3.1.1 (2.0,A)",
        `color: #FFF;
            background-color: #333;
            border-radius: 5px 0px 0px 5px;
            padding: 5px 10px;
            font-size: 0.8rem;
            display: inline;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
        `color: #FFF;
            display: inline;
            font-size: 0.8rem;
            background-color: #809FFF;
            border-radius: 0px 5px 5px 0px;
            padding: 5px 10px;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
    console.log("%cError:%cISO Language attribute on the opening HTML tag is not set",
        `color: #FFF;
            background-color: #333;
            border-radius: 5px 0px 0px 5px;
            padding: 5px 10px;
            font-size: 0.8rem;
            display: inline;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
        `color: #FFF;
            display: inline;
            font-size: 0.8rem;
            background-color: #EB5177;
            border-radius: 0px 5px 5px 0px;
            padding: 5px 10px;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
    console.log("%cCode Snippet:",
        `color: #FFF;
                            background-color: #333;
                            border-radius: 5px;
                            padding: 5px 10px;
                            font-size: 0.8rem;
                            display: inline;
                            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
    $(document.getElementsByTagName("html")[0]).log()
    console.log("%cFix:%cCheck that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages",
        `color: #FFF;
            background-color: #333;
            border-radius: 5px 0px 0px 5px;
            padding: 5px 10px;
            font-size: 0.8rem;
            display: inline;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
        `color: #FFF;
            display: inline;
            font-size: 0.8rem;
            background-color: #007075;
            border-radius: 0px 5px 5px 0px;
            padding: 5px 10px;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
    console.log("%c-----------------------------------------------------------------------------",
        `color: #FFF;
            background-color: #293543;
            font-weight: bolder;
            border-radius: 5px;
            padding: 5px 10px;
            font-size: 1rem;
            display: inline;`)
    }
    else if (!checkOn1 && checkOn2) {
        if (document.getElementsByTagName("html")[0].getAttribute("xml:lang") in langMap) {
            // Valid Language ID
        } else {
            if (document.getElementsByTagName("html")[0].getAttribute("xml:lang").length == 2) {
                console.log("%cRule:%cWCAG 3.1.1 (2.0,A)",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #809FFF;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cError:%cInvalid language attribute of the HTML page",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #EB5177;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cCode Snippet:",
                `color: #FFF;
                                    background-color: #333;
                                    border-radius: 5px;
                                    padding: 5px 10px;
                                    font-size: 0.8rem;
                                    display: inline;
                                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            $(document.getElementsByTagName("html")[0]).log()
            console.log("%cFix:%cCheck that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #007075;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%c-----------------------------------------------------------------------------",
                `color: #FFF;
                    background-color: #293543;
                    font-weight: bolder;
                    border-radius: 5px;
                    padding: 5px 10px;
                    font-size: 1rem;
                    display: inline;`)
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
                    console.log("%cRule:%cWCAG 3.1.1 (2.0,A)",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #809FFF;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%cError:%cInvalid language attribute of the HTML page",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #EB5177;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%cCode Snippet:",
                    `color: #FFF;
                                        background-color: #333;
                                        border-radius: 5px;
                                        padding: 5px 10px;
                                        font-size: 0.8rem;
                                        display: inline;
                                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                $(document.getElementsByTagName("html")[0]).log()
                console.log("%cFix:%cCheck that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #007075;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%c-----------------------------------------------------------------------------",
                    `color: #FFF;
                        background-color: #293543;
                        font-weight: bolder;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 1rem;
                        display: inline;`)
                }
            }
        }
    } else if (checkOn1 && !checkOn2) {
        if (document.getElementsByTagName("html")[0].getAttribute("lang") in langMap) {
            // Valid Language ID
        } else {
            if (document.getElementsByTagName("html")[0].getAttribute("lang").length == 2) {
                console.log("%cRule:%cWCAG 3.1.1 (2.0,A)",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #809FFF;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cError:%cInvalid language attribute of the HTML page",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #EB5177;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cCode Snippet:",
                `color: #FFF;
                                    background-color: #333;
                                    border-radius: 5px;
                                    padding: 5px 10px;
                                    font-size: 0.8rem;
                                    display: inline;
                                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            $(document.getElementsByTagName("html")[0]).log()
            console.log("%cFix:%cCheck that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #007075;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%c-----------------------------------------------------------------------------",
                `color: #FFF;
                    background-color: #293543;
                    font-weight: bolder;
                    border-radius: 5px;
                    padding: 5px 10px;
                    font-size: 1rem;
                    display: inline;`)
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
                    console.log("%cRule:%cWCAG 3.1.1 (2.0,A)",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #809FFF;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%cError:%cInvalid language attribute of the HTML page",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #EB5177;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%cCode Snippet:",
                    `color: #FFF;
                                        background-color: #333;
                                        border-radius: 5px;
                                        padding: 5px 10px;
                                        font-size: 0.8rem;
                                        display: inline;
                                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                $(document.getElementsByTagName("html")[0]).log()
                console.log("%cFix:%cCheck that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #007075;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%c-----------------------------------------------------------------------------",
                    `color: #FFF;
                        background-color: #293543;
                        font-weight: bolder;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 1rem;
                        display: inline;`)
                }
            }
        }
    } else if (checkOn1 && checkOn2) {
        if (document.getElementsByTagName("html")[0].getAttribute("xml:lang") in langMap) {
            // Valid Language ID
        } else {
            if (document.getElementsByTagName("html")[0].getAttribute("xml:lang").length == 2) {
                console.log("%cRule:%cWCAG 3.1.1 (2.0,A)",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #809FFF;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cError:%cInvalid language attribute of the HTML page",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #EB5177;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cCode Snippet:",
                `color: #FFF;
                                    background-color: #333;
                                    border-radius: 5px;
                                    padding: 5px 10px;
                                    font-size: 0.8rem;
                                    display: inline;
                                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            $(document.getElementsByTagName("html")[0]).log()
            console.log("%cFix:%cCheck that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #007075;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%c-----------------------------------------------------------------------------",
                `color: #FFF;
                    background-color: #293543;
                    font-weight: bolder;
                    border-radius: 5px;
                    padding: 5px 10px;
                    font-size: 1rem;
                    display: inline;`)
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
                    console.log("%cRule:%cWCAG 3.1.1 (2.0,A)",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #809FFF;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%cError:%cInvalid language attribute of the HTML page",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #EB5177;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%cCode Snippet:",
                    `color: #FFF;
                                        background-color: #333;
                                        border-radius: 5px;
                                        padding: 5px 10px;
                                        font-size: 0.8rem;
                                        display: inline;
                                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                $(document.getElementsByTagName("html")[0]).log()
                console.log("%cFix:%cCheck that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #007075;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%c-----------------------------------------------------------------------------",
                    `color: #FFF;
                        background-color: #293543;
                        font-weight: bolder;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 1rem;
                        display: inline;`)
                }
            }
        }
        if (document.getElementsByTagName("html")[0].getAttribute("lang") in langMap) {
            // Valid Language ID
        } else {
            if (document.getElementsByTagName("html")[0].getAttribute("lang").length == 2) {
               
                console.log("%cRule:%cWCAG 3.1.1 (2.0,A)",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #809FFF;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cError:%cInvalid language attribute of the HTML page",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #EB5177;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%cCode Snippet:",
                `color: #FFF;
                                    background-color: #333;
                                    border-radius: 5px;
                                    padding: 5px 10px;
                                    font-size: 0.8rem;
                                    display: inline;
                                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            $(document.getElementsByTagName("html")[0]).log()
            console.log("%cFix:%cCheck that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages",
                `color: #FFF;
                    background-color: #333;
                    border-radius: 5px 0px 0px 5px;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    display: inline;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                `color: #FFF;
                    display: inline;
                    font-size: 0.8rem;
                    background-color: #007075;
                    border-radius: 0px 5px 5px 0px;
                    padding: 5px 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
            console.log("%c-----------------------------------------------------------------------------",
                `color: #FFF;
                    background-color: #293543;
                    font-weight: bolder;
                    border-radius: 5px;
                    padding: 5px 10px;
                    font-size: 1rem;
                    display: inline;`)
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
                    console.log("%cRule:%cWCAG 3.1.1 (2.0,A)",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #809FFF;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%cError:%cInvalid language attribute of the HTML page",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #EB5177;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%cCode Snippet:",
                    `color: #FFF;
                                        background-color: #333;
                                        border-radius: 5px;
                                        padding: 5px 10px;
                                        font-size: 0.8rem;
                                        display: inline;
                                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                $(document.getElementsByTagName("html")[0]).log()
                console.log("%cFix:%cCheck that the value of the lang attribute conforms to BCP 47 or ISO: Tags for the Identification of Languages",
                    `color: #FFF;
                        background-color: #333;
                        border-radius: 5px 0px 0px 5px;
                        padding: 5px 10px;
                        font-size: 0.8rem;
                        display: inline;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`,
                    `color: #FFF;
                        display: inline;
                        font-size: 0.8rem;
                        background-color: #007075;
                        border-radius: 0px 5px 5px 0px;
                        padding: 5px 10px;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);`)
                console.log("%c-----------------------------------------------------------------------------",
                    `color: #FFF;
                        background-color: #293543;
                        font-weight: bolder;
                        border-radius: 5px;
                        padding: 5px 10px;
                        font-size: 1rem;
                        display: inline;`)
                }
            }
        }
    }
}
