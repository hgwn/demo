var provinces = [ "北京市", "天津市", "河北省", "山西省", "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省",
		"上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省",
		"广东省", "广西壮族自治区", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏自治区", "陕西省",
		"甘肃省", "青海省", "宁夏回族自治区", "新疆维吾尔自治区", "台湾省", "香港特别行政区", "澳门特别行政区" ];

var citys = {
	"北京市" : [ {
		"cityid" : "110000",
		"cityname" : "北京市"
	}, {
		"市辖区" : [ {
			"cityid" : "110100",
			"cityname" : "市辖区"
		}, {
			"cityid" : "110101",
			"cityname" : "东城区"
		}, {
			"cityid" : "110102",
			"cityname" : "西城区"
		}, {
			"cityid" : "110103",
			"cityname" : "崇文区"
		}, {
			"cityid" : "110104",
			"cityname" : "宣武区"
		}, {
			"cityid" : "110105",
			"cityname" : "朝阳区"
		}, {
			"cityid" : "110106",
			"cityname" : "丰台区"
		}, {
			"cityid" : "110107",
			"cityname" : "石景山区"
		}, {
			"cityid" : "110108",
			"cityname" : "海淀区"
		}, {
			"cityid" : "110109",
			"cityname" : "门头沟区"
		}, {
			"cityid" : "110111",
			"cityname" : "房山区"
		}, {
			"cityid" : "110112",
			"cityname" : "通州区"
		}, {
			"cityid" : "110113",
			"cityname" : "顺义区"
		}, {
			"cityid" : "110114",
			"cityname" : "昌平区"
		}, {
			"cityid" : "110115",
			"cityname" : "大兴区"
		}, {
			"cityid" : "110116",
			"cityname" : "怀柔区"
		}, {
			"cityid" : "110117",
			"cityname" : "平谷区"
		} ]
	}, {
		"县" : [ {
			"cityid" : "110200",
			"cityname" : "县"
		}, {
			"cityid" : "110228",
			"cityname" : "密云县"
		}, {
			"cityid" : "110229",
			"cityname" : "延庆县"
		} ]
	} ],
	"天津市" : [ {
		"cityid" : "120000",
		"cityname" : "天津市"
	}, {
		"市辖区" : [ {
			"cityid" : "120100",
			"cityname" : "市辖区"
		}, {
			"cityid" : "120101",
			"cityname" : "和平区"
		}, {
			"cityid" : "120102",
			"cityname" : "河东区"
		}, {
			"cityid" : "120103",
			"cityname" : "河西区"
		}, {
			"cityid" : "120104",
			"cityname" : "南开区"
		}, {
			"cityid" : "120105",
			"cityname" : "河北区"
		}, {
			"cityid" : "120106",
			"cityname" : "红桥区"
		}, {
			"cityid" : "120110",
			"cityname" : "东丽区"
		}, {
			"cityid" : "120111",
			"cityname" : "西青区"
		}, {
			"cityid" : "120112",
			"cityname" : "津南区"
		}, {
			"cityid" : "120113",
			"cityname" : "北辰区"
		}, {
			"cityid" : "120114",
			"cityname" : "武清区"
		}, {
			"cityid" : "120115",
			"cityname" : "宝坻区"
		}, {
			"cityid" : "120116",
			"cityname" : "滨海新区"
		} ]
	}, {
		"县" : [ {
			"cityid" : "120200",
			"cityname" : "县"
		}, {
			"cityid" : "120221",
			"cityname" : "宁河县"
		}, {
			"cityid" : "120223",
			"cityname" : "静海县"
		}, {
			"cityid" : "120225",
			"cityname" : "蓟　县"
		} ]
	} ],
	"河北省" : [ {
		"cityid" : "130000",
		"cityname" : "河北省"
	}, {
		"石家庄市" : [ {
			"cityid" : "130100",
			"cityname" : "石家庄市"
		}, {
			"cityid" : "130101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "130102",
			"cityname" : "长安区"
		}, {
			"cityid" : "130103",
			"cityname" : "桥东区"
		}, {
			"cityid" : "130104",
			"cityname" : "桥西区"
		}, {
			"cityid" : "130105",
			"cityname" : "新华区"
		}, {
			"cityid" : "130107",
			"cityname" : "井陉矿区"
		}, {
			"cityid" : "130108",
			"cityname" : "裕华区"
		}, {
			"cityid" : "130121",
			"cityname" : "井陉县"
		}, {
			"cityid" : "130123",
			"cityname" : "正定县"
		}, {
			"cityid" : "130124",
			"cityname" : "栾城县"
		}, {
			"cityid" : "130125",
			"cityname" : "行唐县"
		}, {
			"cityid" : "130126",
			"cityname" : "灵寿县"
		}, {
			"cityid" : "130127",
			"cityname" : "高邑县"
		}, {
			"cityid" : "130128",
			"cityname" : "深泽县"
		}, {
			"cityid" : "130129",
			"cityname" : "赞皇县"
		}, {
			"cityid" : "130130",
			"cityname" : "无极县"
		}, {
			"cityid" : "130131",
			"cityname" : "平山县"
		}, {
			"cityid" : "130132",
			"cityname" : "元氏县"
		}, {
			"cityid" : "130133",
			"cityname" : "赵　县"
		}, {
			"cityid" : "130181",
			"cityname" : "辛集市"
		}, {
			"cityid" : "130182",
			"cityname" : "藁城市"
		}, {
			"cityid" : "130183",
			"cityname" : "晋州市"
		}, {
			"cityid" : "130184",
			"cityname" : "新乐市"
		}, {
			"cityid" : "130185",
			"cityname" : "鹿泉市"
		} ]
	}, {
		"唐山市" : [ {
			"cityid" : "130200",
			"cityname" : "唐山市"
		}, {
			"cityid" : "130201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "130202",
			"cityname" : "路南区"
		}, {
			"cityid" : "130203",
			"cityname" : "路北区"
		}, {
			"cityid" : "130204",
			"cityname" : "古冶区"
		}, {
			"cityid" : "130205",
			"cityname" : "开平区"
		}, {
			"cityid" : "130207",
			"cityname" : "丰南区"
		}, {
			"cityid" : "130208",
			"cityname" : "丰润区"
		}, {
			"cityid" : "130223",
			"cityname" : "滦　县"
		}, {
			"cityid" : "130224",
			"cityname" : "滦南县"
		}, {
			"cityid" : "130225",
			"cityname" : "乐亭县"
		}, {
			"cityid" : "130227",
			"cityname" : "迁西县"
		}, {
			"cityid" : "130229",
			"cityname" : "玉田县"
		}, {
			"cityid" : "130230",
			"cityname" : "唐海县"
		}, {
			"cityid" : "130281",
			"cityname" : "遵化市"
		}, {
			"cityid" : "130283",
			"cityname" : "迁安市"
		} ]
	}, {
		"秦皇岛市" : [ {
			"cityid" : "130300",
			"cityname" : "秦皇岛市"
		}, {
			"cityid" : "130301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "130302",
			"cityname" : "海港区"
		}, {
			"cityid" : "130303",
			"cityname" : "山海关区"
		}, {
			"cityid" : "130304",
			"cityname" : "北戴河区"
		}, {
			"cityid" : "130321",
			"cityname" : "青龙满族自治县"
		}, {
			"cityid" : "130322",
			"cityname" : "昌黎县"
		}, {
			"cityid" : "130323",
			"cityname" : "抚宁县"
		}, {
			"cityid" : "130324",
			"cityname" : "卢龙县"
		} ]
	}, {
		"邯郸市" : [ {
			"cityid" : "130400",
			"cityname" : "邯郸市"
		}, {
			"cityid" : "130401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "130402",
			"cityname" : "邯山区"
		}, {
			"cityid" : "130403",
			"cityname" : "丛台区"
		}, {
			"cityid" : "130404",
			"cityname" : "复兴区"
		}, {
			"cityid" : "130406",
			"cityname" : "峰峰矿区"
		}, {
			"cityid" : "130421",
			"cityname" : "邯郸县"
		}, {
			"cityid" : "130423",
			"cityname" : "临漳县"
		}, {
			"cityid" : "130424",
			"cityname" : "成安县"
		}, {
			"cityid" : "130425",
			"cityname" : "大名县"
		}, {
			"cityid" : "130426",
			"cityname" : "涉　县"
		}, {
			"cityid" : "130427",
			"cityname" : "磁　县"
		}, {
			"cityid" : "130428",
			"cityname" : "肥乡县"
		}, {
			"cityid" : "130429",
			"cityname" : "永年县"
		}, {
			"cityid" : "130430",
			"cityname" : "邱　县"
		}, {
			"cityid" : "130431",
			"cityname" : "鸡泽县"
		}, {
			"cityid" : "130432",
			"cityname" : "广平县"
		}, {
			"cityid" : "130433",
			"cityname" : "馆陶县"
		}, {
			"cityid" : "130434",
			"cityname" : "魏　县"
		}, {
			"cityid" : "130435",
			"cityname" : "曲周县"
		}, {
			"cityid" : "130481",
			"cityname" : "武安市"
		} ]
	}, {
		"邢台市" : [ {
			"cityid" : "130500",
			"cityname" : "邢台市"
		}, {
			"cityid" : "130501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "130502",
			"cityname" : "桥东区"
		}, {
			"cityid" : "130503",
			"cityname" : "桥西区"
		}, {
			"cityid" : "130521",
			"cityname" : "邢台县"
		}, {
			"cityid" : "130522",
			"cityname" : "临城县"
		}, {
			"cityid" : "130523",
			"cityname" : "内丘县"
		}, {
			"cityid" : "130524",
			"cityname" : "柏乡县"
		}, {
			"cityid" : "130525",
			"cityname" : "隆尧县"
		}, {
			"cityid" : "130526",
			"cityname" : "任　县"
		}, {
			"cityid" : "130527",
			"cityname" : "南和县"
		}, {
			"cityid" : "130528",
			"cityname" : "宁晋县"
		}, {
			"cityid" : "130529",
			"cityname" : "巨鹿县"
		}, {
			"cityid" : "130530",
			"cityname" : "新河县"
		}, {
			"cityid" : "130531",
			"cityname" : "广宗县"
		}, {
			"cityid" : "130532",
			"cityname" : "平乡县"
		}, {
			"cityid" : "130533",
			"cityname" : "威　县"
		}, {
			"cityid" : "130534",
			"cityname" : "清河县"
		}, {
			"cityid" : "130535",
			"cityname" : "临西县"
		}, {
			"cityid" : "130581",
			"cityname" : "南宫市"
		}, {
			"cityid" : "130582",
			"cityname" : "沙河市"
		} ]
	}, {
		"保定市" : [ {
			"cityid" : "130600",
			"cityname" : "保定市"
		}, {
			"cityid" : "130601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "130602",
			"cityname" : "新市区"
		}, {
			"cityid" : "130603",
			"cityname" : "北市区"
		}, {
			"cityid" : "130604",
			"cityname" : "南市区"
		}, {
			"cityid" : "130621",
			"cityname" : "满城县"
		}, {
			"cityid" : "130622",
			"cityname" : "清苑县"
		}, {
			"cityid" : "130623",
			"cityname" : "涞水县"
		}, {
			"cityid" : "130624",
			"cityname" : "阜平县"
		}, {
			"cityid" : "130625",
			"cityname" : "徐水县"
		}, {
			"cityid" : "130626",
			"cityname" : "定兴县"
		}, {
			"cityid" : "130627",
			"cityname" : "唐　县"
		}, {
			"cityid" : "130628",
			"cityname" : "高阳县"
		}, {
			"cityid" : "130629",
			"cityname" : "容城县"
		}, {
			"cityid" : "130630",
			"cityname" : "涞源县"
		}, {
			"cityid" : "130631",
			"cityname" : "望都县"
		}, {
			"cityid" : "130632",
			"cityname" : "安新县"
		}, {
			"cityid" : "130633",
			"cityname" : "易　县"
		}, {
			"cityid" : "130634",
			"cityname" : "曲阳县"
		}, {
			"cityid" : "130635",
			"cityname" : "蠡　县"
		}, {
			"cityid" : "130636",
			"cityname" : "顺平县"
		}, {
			"cityid" : "130637",
			"cityname" : "博野县"
		}, {
			"cityid" : "130638",
			"cityname" : "雄　县"
		}, {
			"cityid" : "130681",
			"cityname" : "涿州市"
		}, {
			"cityid" : "130682",
			"cityname" : "定州市"
		}, {
			"cityid" : "130683",
			"cityname" : "安国市"
		}, {
			"cityid" : "130684",
			"cityname" : "高碑店市"
		} ]
	}, {
		"张家口市" : [ {
			"cityid" : "130700",
			"cityname" : "张家口市"
		}, {
			"cityid" : "130701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "130702",
			"cityname" : "桥东区"
		}, {
			"cityid" : "130703",
			"cityname" : "桥西区"
		}, {
			"cityid" : "130705",
			"cityname" : "宣化区"
		}, {
			"cityid" : "130706",
			"cityname" : "下花园区"
		}, {
			"cityid" : "130721",
			"cityname" : "宣化县"
		}, {
			"cityid" : "130722",
			"cityname" : "张北县"
		}, {
			"cityid" : "130723",
			"cityname" : "康保县"
		}, {
			"cityid" : "130724",
			"cityname" : "沽源县"
		}, {
			"cityid" : "130725",
			"cityname" : "尚义县"
		}, {
			"cityid" : "130726",
			"cityname" : "蔚　县"
		}, {
			"cityid" : "130727",
			"cityname" : "阳原县"
		}, {
			"cityid" : "130728",
			"cityname" : "怀安县"
		}, {
			"cityid" : "130729",
			"cityname" : "万全县"
		}, {
			"cityid" : "130730",
			"cityname" : "怀来县"
		}, {
			"cityid" : "130731",
			"cityname" : "涿鹿县"
		}, {
			"cityid" : "130732",
			"cityname" : "赤城县"
		}, {
			"cityid" : "130733",
			"cityname" : "崇礼县"
		} ]
	}, {
		"承德市" : [ {
			"cityid" : "130800",
			"cityname" : "承德市"
		}, {
			"cityid" : "130801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "130802",
			"cityname" : "双桥区"
		}, {
			"cityid" : "130803",
			"cityname" : "双滦区"
		}, {
			"cityid" : "130804",
			"cityname" : "鹰手营子矿区"
		}, {
			"cityid" : "130821",
			"cityname" : "承德县"
		}, {
			"cityid" : "130822",
			"cityname" : "兴隆县"
		}, {
			"cityid" : "130823",
			"cityname" : "平泉县"
		}, {
			"cityid" : "130824",
			"cityname" : "滦平县"
		}, {
			"cityid" : "130825",
			"cityname" : "隆化县"
		}, {
			"cityid" : "130826",
			"cityname" : "丰宁满族自治县"
		}, {
			"cityid" : "130827",
			"cityname" : "宽城满族自治县"
		}, {
			"cityid" : "130828",
			"cityname" : "围场满族蒙古族自治县"
		} ]
	}, {
		"沧州市" : [ {
			"cityid" : "130900",
			"cityname" : "沧州市"
		}, {
			"cityid" : "130901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "130902",
			"cityname" : "新华区"
		}, {
			"cityid" : "130903",
			"cityname" : "运河区"
		}, {
			"cityid" : "130921",
			"cityname" : "沧　县"
		}, {
			"cityid" : "130922",
			"cityname" : "青　县"
		}, {
			"cityid" : "130923",
			"cityname" : "东光县"
		}, {
			"cityid" : "130924",
			"cityname" : "海兴县"
		}, {
			"cityid" : "130925",
			"cityname" : "盐山县"
		}, {
			"cityid" : "130926",
			"cityname" : "肃宁县"
		}, {
			"cityid" : "130927",
			"cityname" : "南皮县"
		}, {
			"cityid" : "130928",
			"cityname" : "吴桥县"
		}, {
			"cityid" : "130929",
			"cityname" : "献　县"
		}, {
			"cityid" : "130930",
			"cityname" : "孟村回族自治县"
		}, {
			"cityid" : "130981",
			"cityname" : "泊头市"
		}, {
			"cityid" : "130982",
			"cityname" : "任丘市"
		}, {
			"cityid" : "130983",
			"cityname" : "黄骅市"
		}, {
			"cityid" : "130984",
			"cityname" : "河间市"
		} ]
	}, {
		"廊坊市" : [ {
			"cityid" : "131000",
			"cityname" : "廊坊市"
		}, {
			"cityid" : "131001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "131002",
			"cityname" : "安次区"
		}, {
			"cityid" : "131003",
			"cityname" : "广阳区"
		}, {
			"cityid" : "131022",
			"cityname" : "固安县"
		}, {
			"cityid" : "131023",
			"cityname" : "永清县"
		}, {
			"cityid" : "131024",
			"cityname" : "香河县"
		}, {
			"cityid" : "131025",
			"cityname" : "大城县"
		}, {
			"cityid" : "131026",
			"cityname" : "文安县"
		}, {
			"cityid" : "131028",
			"cityname" : "大厂回族自治县"
		}, {
			"cityid" : "131081",
			"cityname" : "霸州市"
		}, {
			"cityid" : "131082",
			"cityname" : "三河市"
		} ]
	}, {
		"衡水市" : [ {
			"cityid" : "131100",
			"cityname" : "衡水市"
		}, {
			"cityid" : "131101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "131102",
			"cityname" : "桃城区"
		}, {
			"cityid" : "131121",
			"cityname" : "枣强县"
		}, {
			"cityid" : "131122",
			"cityname" : "武邑县"
		}, {
			"cityid" : "131123",
			"cityname" : "武强县"
		}, {
			"cityid" : "131124",
			"cityname" : "饶阳县"
		}, {
			"cityid" : "131125",
			"cityname" : "安平县"
		}, {
			"cityid" : "131126",
			"cityname" : "故城县"
		}, {
			"cityid" : "131127",
			"cityname" : "景　县"
		}, {
			"cityid" : "131128",
			"cityname" : "阜城县"
		}, {
			"cityid" : "131181",
			"cityname" : "冀州市"
		}, {
			"cityid" : "131182",
			"cityname" : "深州市"
		} ]
	} ],
	"山西省" : [ {
		"cityid" : "140000",
		"cityname" : "山西省"
	}, {
		"太原市" : [ {
			"cityid" : "140100",
			"cityname" : "太原市"
		}, {
			"cityid" : "140101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "140105",
			"cityname" : "小店区"
		}, {
			"cityid" : "140106",
			"cityname" : "迎泽区"
		}, {
			"cityid" : "140107",
			"cityname" : "杏花岭区"
		}, {
			"cityid" : "140108",
			"cityname" : "尖草坪区"
		}, {
			"cityid" : "140109",
			"cityname" : "万柏林区"
		}, {
			"cityid" : "140110",
			"cityname" : "晋源区"
		}, {
			"cityid" : "140121",
			"cityname" : "清徐县"
		}, {
			"cityid" : "140122",
			"cityname" : "阳曲县"
		}, {
			"cityid" : "140123",
			"cityname" : "娄烦县"
		}, {
			"cityid" : "140181",
			"cityname" : "古交市"
		} ]
	}, {
		"大同市" : [ {
			"cityid" : "140200",
			"cityname" : "大同市"
		}, {
			"cityid" : "140201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "140202",
			"cityname" : "城　区"
		}, {
			"cityid" : "140203",
			"cityname" : "矿　区"
		}, {
			"cityid" : "140211",
			"cityname" : "南郊区"
		}, {
			"cityid" : "140212",
			"cityname" : "新荣区"
		}, {
			"cityid" : "140221",
			"cityname" : "阳高县"
		}, {
			"cityid" : "140222",
			"cityname" : "天镇县"
		}, {
			"cityid" : "140223",
			"cityname" : "广灵县"
		}, {
			"cityid" : "140224",
			"cityname" : "灵丘县"
		}, {
			"cityid" : "140225",
			"cityname" : "浑源县"
		}, {
			"cityid" : "140226",
			"cityname" : "左云县"
		}, {
			"cityid" : "140227",
			"cityname" : "大同县"
		} ]
	}, {
		"阳泉市" : [ {
			"cityid" : "140300",
			"cityname" : "阳泉市"
		}, {
			"cityid" : "140301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "140302",
			"cityname" : "城　区"
		}, {
			"cityid" : "140303",
			"cityname" : "矿　区"
		}, {
			"cityid" : "140311",
			"cityname" : "郊　区"
		}, {
			"cityid" : "140321",
			"cityname" : "平定县"
		}, {
			"cityid" : "140322",
			"cityname" : "盂　县"
		} ]
	}, {
		"长治市" : [ {
			"cityid" : "140400",
			"cityname" : "长治市"
		}, {
			"cityid" : "140401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "140402",
			"cityname" : "城　区"
		}, {
			"cityid" : "140411",
			"cityname" : "郊　区"
		}, {
			"cityid" : "140421",
			"cityname" : "长治县"
		}, {
			"cityid" : "140423",
			"cityname" : "襄垣县"
		}, {
			"cityid" : "140424",
			"cityname" : "屯留县"
		}, {
			"cityid" : "140425",
			"cityname" : "平顺县"
		}, {
			"cityid" : "140426",
			"cityname" : "黎城县"
		}, {
			"cityid" : "140427",
			"cityname" : "壶关县"
		}, {
			"cityid" : "140428",
			"cityname" : "长子县"
		}, {
			"cityid" : "140429",
			"cityname" : "武乡县"
		}, {
			"cityid" : "140430",
			"cityname" : "沁　县"
		}, {
			"cityid" : "140431",
			"cityname" : "沁源县"
		}, {
			"cityid" : "140481",
			"cityname" : "潞城市"
		} ]
	}, {
		"晋城市" : [ {
			"cityid" : "140500",
			"cityname" : "晋城市"
		}, {
			"cityid" : "140501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "140502",
			"cityname" : "城　区"
		}, {
			"cityid" : "140521",
			"cityname" : "沁水县"
		}, {
			"cityid" : "140522",
			"cityname" : "阳城县"
		}, {
			"cityid" : "140524",
			"cityname" : "陵川县"
		}, {
			"cityid" : "140525",
			"cityname" : "泽州县"
		}, {
			"cityid" : "140581",
			"cityname" : "高平市"
		} ]
	}, {
		"朔州市" : [ {
			"cityid" : "140600",
			"cityname" : "朔州市"
		}, {
			"cityid" : "140601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "140602",
			"cityname" : "朔城区"
		}, {
			"cityid" : "140603",
			"cityname" : "平鲁区"
		}, {
			"cityid" : "140621",
			"cityname" : "山阴县"
		}, {
			"cityid" : "140622",
			"cityname" : "应　县"
		}, {
			"cityid" : "140623",
			"cityname" : "右玉县"
		}, {
			"cityid" : "140624",
			"cityname" : "怀仁县"
		} ]
	}, {
		"晋中市" : [ {
			"cityid" : "140700",
			"cityname" : "晋中市"
		}, {
			"cityid" : "140701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "140702",
			"cityname" : "榆次区"
		}, {
			"cityid" : "140721",
			"cityname" : "榆社县"
		}, {
			"cityid" : "140722",
			"cityname" : "左权县"
		}, {
			"cityid" : "140723",
			"cityname" : "和顺县"
		}, {
			"cityid" : "140724",
			"cityname" : "昔阳县"
		}, {
			"cityid" : "140725",
			"cityname" : "寿阳县"
		}, {
			"cityid" : "140726",
			"cityname" : "太谷县"
		}, {
			"cityid" : "140727",
			"cityname" : "祁　县"
		}, {
			"cityid" : "140728",
			"cityname" : "平遥县"
		}, {
			"cityid" : "140729",
			"cityname" : "灵石县"
		}, {
			"cityid" : "140781",
			"cityname" : "介休市"
		} ]
	}, {
		"运城市" : [ {
			"cityid" : "140800",
			"cityname" : "运城市"
		}, {
			"cityid" : "140801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "140802",
			"cityname" : "盐湖区"
		}, {
			"cityid" : "140821",
			"cityname" : "临猗县"
		}, {
			"cityid" : "140822",
			"cityname" : "万荣县"
		}, {
			"cityid" : "140823",
			"cityname" : "闻喜县"
		}, {
			"cityid" : "140824",
			"cityname" : "稷山县"
		}, {
			"cityid" : "140825",
			"cityname" : "新绛县"
		}, {
			"cityid" : "140826",
			"cityname" : "绛　县"
		}, {
			"cityid" : "140827",
			"cityname" : "垣曲县"
		}, {
			"cityid" : "140828",
			"cityname" : "夏　县"
		}, {
			"cityid" : "140829",
			"cityname" : "平陆县"
		}, {
			"cityid" : "140830",
			"cityname" : "芮城县"
		}, {
			"cityid" : "140881",
			"cityname" : "永济市"
		}, {
			"cityid" : "140882",
			"cityname" : "河津市"
		} ]
	}, {
		"忻州市" : [ {
			"cityid" : "140900",
			"cityname" : "忻州市"
		}, {
			"cityid" : "140901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "140902",
			"cityname" : "忻府区"
		}, {
			"cityid" : "140921",
			"cityname" : "定襄县"
		}, {
			"cityid" : "140922",
			"cityname" : "五台县"
		}, {
			"cityid" : "140923",
			"cityname" : "代　县"
		}, {
			"cityid" : "140924",
			"cityname" : "繁峙县"
		}, {
			"cityid" : "140925",
			"cityname" : "宁武县"
		}, {
			"cityid" : "140926",
			"cityname" : "静乐县"
		}, {
			"cityid" : "140927",
			"cityname" : "神池县"
		}, {
			"cityid" : "140928",
			"cityname" : "五寨县"
		}, {
			"cityid" : "140929",
			"cityname" : "岢岚县"
		}, {
			"cityid" : "140930",
			"cityname" : "河曲县"
		}, {
			"cityid" : "140931",
			"cityname" : "保德县"
		}, {
			"cityid" : "140932",
			"cityname" : "偏关县"
		}, {
			"cityid" : "140981",
			"cityname" : "原平市"
		} ]
	}, {
		"临汾市" : [ {
			"cityid" : "141000",
			"cityname" : "临汾市"
		}, {
			"cityid" : "141001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "141002",
			"cityname" : "尧都区"
		}, {
			"cityid" : "141021",
			"cityname" : "曲沃县"
		}, {
			"cityid" : "141022",
			"cityname" : "翼城县"
		}, {
			"cityid" : "141023",
			"cityname" : "襄汾县"
		}, {
			"cityid" : "141024",
			"cityname" : "洪洞县"
		}, {
			"cityid" : "141025",
			"cityname" : "古　县"
		}, {
			"cityid" : "141026",
			"cityname" : "安泽县"
		}, {
			"cityid" : "141027",
			"cityname" : "浮山县"
		}, {
			"cityid" : "141028",
			"cityname" : "吉　县"
		}, {
			"cityid" : "141029",
			"cityname" : "乡宁县"
		}, {
			"cityid" : "141030",
			"cityname" : "大宁县"
		}, {
			"cityid" : "141031",
			"cityname" : "隰　县"
		}, {
			"cityid" : "141032",
			"cityname" : "永和县"
		}, {
			"cityid" : "141033",
			"cityname" : "蒲　县"
		}, {
			"cityid" : "141034",
			"cityname" : "汾西县"
		}, {
			"cityid" : "141081",
			"cityname" : "侯马市"
		}, {
			"cityid" : "141082",
			"cityname" : "霍州市"
		} ]
	}, {
		"吕梁市" : [ {
			"cityid" : "141100",
			"cityname" : "吕梁市"
		}, {
			"cityid" : "141101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "141102",
			"cityname" : "离石区"
		}, {
			"cityid" : "141121",
			"cityname" : "文水县"
		}, {
			"cityid" : "141122",
			"cityname" : "交城县"
		}, {
			"cityid" : "141123",
			"cityname" : "兴　县"
		}, {
			"cityid" : "141124",
			"cityname" : "临　县"
		}, {
			"cityid" : "141125",
			"cityname" : "柳林县"
		}, {
			"cityid" : "141126",
			"cityname" : "石楼县"
		}, {
			"cityid" : "141127",
			"cityname" : "岚　县"
		}, {
			"cityid" : "141128",
			"cityname" : "方山县"
		}, {
			"cityid" : "141129",
			"cityname" : "中阳县"
		}, {
			"cityid" : "141130",
			"cityname" : "交口县"
		}, {
			"cityid" : "141181",
			"cityname" : "孝义市"
		}, {
			"cityid" : "141182",
			"cityname" : "汾阳市"
		} ]
	} ],
	"内蒙古自治区" : [ {
		"cityid" : "150000",
		"cityname" : "内蒙古自治区"
	}, {
		"呼和浩特市" : [ {
			"cityid" : "150100",
			"cityname" : "呼和浩特市"
		}, {
			"cityid" : "150101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "150102",
			"cityname" : "新城区"
		}, {
			"cityid" : "150103",
			"cityname" : "回民区"
		}, {
			"cityid" : "150104",
			"cityname" : "玉泉区"
		}, {
			"cityid" : "150105",
			"cityname" : "赛罕区"
		}, {
			"cityid" : "150121",
			"cityname" : "土默特左旗"
		}, {
			"cityid" : "150122",
			"cityname" : "托克托县"
		}, {
			"cityid" : "150123",
			"cityname" : "和林格尔县"
		}, {
			"cityid" : "150124",
			"cityname" : "清水河县"
		}, {
			"cityid" : "150125",
			"cityname" : "武川县"
		} ]
	}, {
		"包头市" : [ {
			"cityid" : "150200",
			"cityname" : "包头市"
		}, {
			"cityid" : "150201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "150202",
			"cityname" : "东河区"
		}, {
			"cityid" : "150203",
			"cityname" : "昆都仑区"
		}, {
			"cityid" : "150204",
			"cityname" : "青山区"
		}, {
			"cityid" : "150205",
			"cityname" : "石拐区"
		}, {
			"cityid" : "150206",
			"cityname" : "白云鄂博矿区"
		}, {
			"cityid" : "150207",
			"cityname" : "九原区"
		}, {
			"cityid" : "150221",
			"cityname" : "土默特右旗"
		}, {
			"cityid" : "150222",
			"cityname" : "固阳县"
		}, {
			"cityid" : "150223",
			"cityname" : "达尔罕茂明安联合旗"
		} ]
	}, {
		"乌海市" : [ {
			"cityid" : "150300",
			"cityname" : "乌海市"
		}, {
			"cityid" : "150301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "150302",
			"cityname" : "海勃湾区"
		}, {
			"cityid" : "150303",
			"cityname" : "海南区"
		}, {
			"cityid" : "150304",
			"cityname" : "乌达区"
		} ]
	}, {
		"赤峰市" : [ {
			"cityid" : "150400",
			"cityname" : "赤峰市"
		}, {
			"cityid" : "150401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "150402",
			"cityname" : "红山区"
		}, {
			"cityid" : "150403",
			"cityname" : "元宝山区"
		}, {
			"cityid" : "150404",
			"cityname" : "松山区"
		}, {
			"cityid" : "150421",
			"cityname" : "阿鲁科尔沁旗"
		}, {
			"cityid" : "150422",
			"cityname" : "巴林左旗"
		}, {
			"cityid" : "150423",
			"cityname" : "巴林右旗"
		}, {
			"cityid" : "150424",
			"cityname" : "林西县"
		}, {
			"cityid" : "150425",
			"cityname" : "克什克腾旗"
		}, {
			"cityid" : "150426",
			"cityname" : "翁牛特旗"
		}, {
			"cityid" : "150428",
			"cityname" : "喀喇沁旗"
		}, {
			"cityid" : "150429",
			"cityname" : "宁城县"
		}, {
			"cityid" : "150430",
			"cityname" : "敖汉旗"
		} ]
	}, {
		"通辽市" : [ {
			"cityid" : "150500",
			"cityname" : "通辽市"
		}, {
			"cityid" : "150501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "150502",
			"cityname" : "科尔沁区"
		}, {
			"cityid" : "150521",
			"cityname" : "科尔沁左翼中旗"
		}, {
			"cityid" : "150522",
			"cityname" : "科尔沁左翼后旗"
		}, {
			"cityid" : "150523",
			"cityname" : "开鲁县"
		}, {
			"cityid" : "150524",
			"cityname" : "库伦旗"
		}, {
			"cityid" : "150525",
			"cityname" : "奈曼旗"
		}, {
			"cityid" : "150526",
			"cityname" : "扎鲁特旗"
		}, {
			"cityid" : "150581",
			"cityname" : "霍林郭勒市"
		} ]
	}, {
		"鄂尔多斯市" : [ {
			"cityid" : "150600",
			"cityname" : "鄂尔多斯市"
		}, {
			"cityid" : "150601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "150602",
			"cityname" : "东胜区"
		}, {
			"cityid" : "150621",
			"cityname" : "达拉特旗"
		}, {
			"cityid" : "150622",
			"cityname" : "准格尔旗"
		}, {
			"cityid" : "150623",
			"cityname" : "鄂托克前旗"
		}, {
			"cityid" : "150624",
			"cityname" : "鄂托克旗"
		}, {
			"cityid" : "150625",
			"cityname" : "杭锦旗"
		}, {
			"cityid" : "150626",
			"cityname" : "乌审旗"
		}, {
			"cityid" : "150627",
			"cityname" : "伊金霍洛旗"
		} ]
	}, {
		"呼伦贝尔市" : [ {
			"cityid" : "150700",
			"cityname" : "呼伦贝尔市"
		}, {
			"cityid" : "150701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "150702",
			"cityname" : "海拉尔区"
		}, {
			"cityid" : "150721",
			"cityname" : "阿荣旗"
		}, {
			"cityid" : "150722",
			"cityname" : "莫力达瓦达斡尔族自治旗"
		}, {
			"cityid" : "150723",
			"cityname" : "鄂伦春自治旗"
		}, {
			"cityid" : "150724",
			"cityname" : "鄂温克族自治旗"
		}, {
			"cityid" : "150725",
			"cityname" : "陈巴尔虎旗"
		}, {
			"cityid" : "150726",
			"cityname" : "新巴尔虎左旗"
		}, {
			"cityid" : "150727",
			"cityname" : "新巴尔虎右旗"
		}, {
			"cityid" : "150781",
			"cityname" : "满洲里市"
		}, {
			"cityid" : "150782",
			"cityname" : "牙克石市"
		}, {
			"cityid" : "150783",
			"cityname" : "扎兰屯市"
		}, {
			"cityid" : "150784",
			"cityname" : "额尔古纳市"
		}, {
			"cityid" : "150785",
			"cityname" : "根河市"
		} ]
	}, {
		"巴彦淖尔市" : [ {
			"cityid" : "150800",
			"cityname" : "巴彦淖尔市"
		}, {
			"cityid" : "150801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "150802",
			"cityname" : "临河区"
		}, {
			"cityid" : "150821",
			"cityname" : "五原县"
		}, {
			"cityid" : "150822",
			"cityname" : "磴口县"
		}, {
			"cityid" : "150823",
			"cityname" : "乌拉特前旗"
		}, {
			"cityid" : "150824",
			"cityname" : "乌拉特中旗"
		}, {
			"cityid" : "150825",
			"cityname" : "乌拉特后旗"
		}, {
			"cityid" : "150826",
			"cityname" : "杭锦后旗"
		} ]
	}, {
		"乌兰察布市" : [ {
			"cityid" : "150900",
			"cityname" : "乌兰察布市"
		}, {
			"cityid" : "150901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "150902",
			"cityname" : "集宁区"
		}, {
			"cityid" : "150921",
			"cityname" : "卓资县"
		}, {
			"cityid" : "150922",
			"cityname" : "化德县"
		}, {
			"cityid" : "150923",
			"cityname" : "商都县"
		}, {
			"cityid" : "150924",
			"cityname" : "兴和县"
		}, {
			"cityid" : "150925",
			"cityname" : "凉城县"
		}, {
			"cityid" : "150926",
			"cityname" : "察哈尔右翼前旗"
		}, {
			"cityid" : "150927",
			"cityname" : "察哈尔右翼中旗"
		}, {
			"cityid" : "150928",
			"cityname" : "察哈尔右翼后旗"
		}, {
			"cityid" : "150929",
			"cityname" : "四子王旗"
		}, {
			"cityid" : "150981",
			"cityname" : "丰镇市"
		} ]
	}, {
		"兴安盟" : [ {
			"cityid" : "152200",
			"cityname" : "兴安盟"
		}, {
			"cityid" : "152201",
			"cityname" : "乌兰浩特市"
		}, {
			"cityid" : "152202",
			"cityname" : "阿尔山市"
		}, {
			"cityid" : "152221",
			"cityname" : "科尔沁右翼前旗"
		}, {
			"cityid" : "152222",
			"cityname" : "科尔沁右翼中旗"
		}, {
			"cityid" : "152223",
			"cityname" : "扎赉特旗"
		}, {
			"cityid" : "152224",
			"cityname" : "突泉县"
		} ]
	}, {
		"锡林郭勒盟" : [ {
			"cityid" : "152500",
			"cityname" : "锡林郭勒盟"
		}, {
			"cityid" : "152501",
			"cityname" : "二连浩特市"
		}, {
			"cityid" : "152502",
			"cityname" : "锡林浩特市"
		}, {
			"cityid" : "152522",
			"cityname" : "阿巴嘎旗"
		}, {
			"cityid" : "152523",
			"cityname" : "苏尼特左旗"
		}, {
			"cityid" : "152524",
			"cityname" : "苏尼特右旗"
		}, {
			"cityid" : "152525",
			"cityname" : "东乌珠穆沁旗"
		}, {
			"cityid" : "152526",
			"cityname" : "西乌珠穆沁旗"
		}, {
			"cityid" : "152527",
			"cityname" : "太仆寺旗"
		}, {
			"cityid" : "152528",
			"cityname" : "镶黄旗"
		}, {
			"cityid" : "152529",
			"cityname" : "正镶白旗"
		}, {
			"cityid" : "152530",
			"cityname" : "正蓝旗"
		}, {
			"cityid" : "152531",
			"cityname" : "多伦县"
		} ]
	}, {
		"阿拉善盟" : [ {
			"cityid" : "152900",
			"cityname" : "阿拉善盟"
		}, {
			"cityid" : "152921",
			"cityname" : "阿拉善左旗"
		}, {
			"cityid" : "152922",
			"cityname" : "阿拉善右旗"
		}, {
			"cityid" : "152923",
			"cityname" : "额济纳旗"
		} ]
	} ],
	"辽宁省" : [ {
		"cityid" : "210000",
		"cityname" : "辽宁省"
	}, {
		"沈阳市" : [ {
			"cityid" : "210100",
			"cityname" : "沈阳市"
		}, {
			"cityid" : "210101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "210102",
			"cityname" : "和平区"
		}, {
			"cityid" : "210103",
			"cityname" : "沈河区"
		}, {
			"cityid" : "210104",
			"cityname" : "大东区"
		}, {
			"cityid" : "210105",
			"cityname" : "皇姑区"
		}, {
			"cityid" : "210106",
			"cityname" : "铁西区"
		}, {
			"cityid" : "210111",
			"cityname" : "苏家屯区"
		}, {
			"cityid" : "210112",
			"cityname" : "东陵区"
		}, {
			"cityid" : "210113",
			"cityname" : "沈北新区"
		}, {
			"cityid" : "210114",
			"cityname" : "于洪区"
		}, {
			"cityid" : "210122",
			"cityname" : "辽中县"
		}, {
			"cityid" : "210123",
			"cityname" : "康平县"
		}, {
			"cityid" : "210124",
			"cityname" : "法库县"
		}, {
			"cityid" : "210181",
			"cityname" : "新民市"
		} ]
	}, {
		"大连市" : [ {
			"cityid" : "210200",
			"cityname" : "大连市"
		}, {
			"cityid" : "210201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "210202",
			"cityname" : "中山区"
		}, {
			"cityid" : "210203",
			"cityname" : "西岗区"
		}, {
			"cityid" : "210204",
			"cityname" : "沙河口区"
		}, {
			"cityid" : "210211",
			"cityname" : "甘井子区"
		}, {
			"cityid" : "210212",
			"cityname" : "旅顺口区"
		}, {
			"cityid" : "210213",
			"cityname" : "金州区"
		}, {
			"cityid" : "210224",
			"cityname" : "长海县"
		}, {
			"cityid" : "210281",
			"cityname" : "瓦房店市"
		}, {
			"cityid" : "210282",
			"cityname" : "普兰店市"
		}, {
			"cityid" : "210283",
			"cityname" : "庄河市"
		} ]
	}, {
		"鞍山市" : [ {
			"cityid" : "210300",
			"cityname" : "鞍山市"
		}, {
			"cityid" : "210301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "210302",
			"cityname" : "铁东区"
		}, {
			"cityid" : "210303",
			"cityname" : "铁西区"
		}, {
			"cityid" : "210304",
			"cityname" : "立山区"
		}, {
			"cityid" : "210311",
			"cityname" : "千山区"
		}, {
			"cityid" : "210321",
			"cityname" : "台安县"
		}, {
			"cityid" : "210323",
			"cityname" : "岫岩满族自治县"
		}, {
			"cityid" : "210381",
			"cityname" : "海城市"
		} ]
	}, {
		"抚顺市" : [ {
			"cityid" : "210400",
			"cityname" : "抚顺市"
		}, {
			"cityid" : "210401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "210402",
			"cityname" : "新抚区"
		}, {
			"cityid" : "210403",
			"cityname" : "东洲区"
		}, {
			"cityid" : "210404",
			"cityname" : "望花区"
		}, {
			"cityid" : "210411",
			"cityname" : "顺城区"
		}, {
			"cityid" : "210421",
			"cityname" : "抚顺县"
		}, {
			"cityid" : "210422",
			"cityname" : "新宾满族自治县"
		}, {
			"cityid" : "210423",
			"cityname" : "清原满族自治县"
		} ]
	}, {
		"本溪市" : [ {
			"cityid" : "210500",
			"cityname" : "本溪市"
		}, {
			"cityid" : "210501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "210502",
			"cityname" : "平山区"
		}, {
			"cityid" : "210503",
			"cityname" : "溪湖区"
		}, {
			"cityid" : "210504",
			"cityname" : "明山区"
		}, {
			"cityid" : "210505",
			"cityname" : "南芬区"
		}, {
			"cityid" : "210521",
			"cityname" : "本溪满族自治县"
		}, {
			"cityid" : "210522",
			"cityname" : "桓仁满族自治县"
		} ]
	}, {
		"丹东市" : [ {
			"cityid" : "210600",
			"cityname" : "丹东市"
		}, {
			"cityid" : "210601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "210602",
			"cityname" : "元宝区"
		}, {
			"cityid" : "210603",
			"cityname" : "振兴区"
		}, {
			"cityid" : "210604",
			"cityname" : "振安区"
		}, {
			"cityid" : "210624",
			"cityname" : "宽甸满族自治县"
		}, {
			"cityid" : "210681",
			"cityname" : "东港市"
		}, {
			"cityid" : "210682",
			"cityname" : "凤城市"
		} ]
	}, {
		"锦州市" : [ {
			"cityid" : "210700",
			"cityname" : "锦州市"
		}, {
			"cityid" : "210701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "210702",
			"cityname" : "古塔区"
		}, {
			"cityid" : "210703",
			"cityname" : "凌河区"
		}, {
			"cityid" : "210711",
			"cityname" : "太和区"
		}, {
			"cityid" : "210726",
			"cityname" : "黑山县"
		}, {
			"cityid" : "210727",
			"cityname" : "义　县"
		}, {
			"cityid" : "210781",
			"cityname" : "凌海市"
		}, {
			"cityid" : "210782",
			"cityname" : "北镇市"
		} ]
	}, {
		"营口市" : [ {
			"cityid" : "210800",
			"cityname" : "营口市"
		}, {
			"cityid" : "210801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "210802",
			"cityname" : "站前区"
		}, {
			"cityid" : "210803",
			"cityname" : "西市区"
		}, {
			"cityid" : "210804",
			"cityname" : "鲅鱼圈区"
		}, {
			"cityid" : "210811",
			"cityname" : "老边区"
		}, {
			"cityid" : "210881",
			"cityname" : "盖州市"
		}, {
			"cityid" : "210882",
			"cityname" : "大石桥市"
		} ]
	}, {
		"阜新市" : [ {
			"cityid" : "210900",
			"cityname" : "阜新市"
		}, {
			"cityid" : "210901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "210902",
			"cityname" : "海州区"
		}, {
			"cityid" : "210903",
			"cityname" : "新邱区"
		}, {
			"cityid" : "210904",
			"cityname" : "太平区"
		}, {
			"cityid" : "210905",
			"cityname" : "清河门区"
		}, {
			"cityid" : "210911",
			"cityname" : "细河区"
		}, {
			"cityid" : "210921",
			"cityname" : "阜新蒙古族自治县"
		}, {
			"cityid" : "210922",
			"cityname" : "彰武县"
		} ]
	}, {
		"辽阳市" : [ {
			"cityid" : "211000",
			"cityname" : "辽阳市"
		}, {
			"cityid" : "211001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "211002",
			"cityname" : "白塔区"
		}, {
			"cityid" : "211003",
			"cityname" : "文圣区"
		}, {
			"cityid" : "211004",
			"cityname" : "宏伟区"
		}, {
			"cityid" : "211005",
			"cityname" : "弓长岭区"
		}, {
			"cityid" : "211011",
			"cityname" : "太子河区"
		}, {
			"cityid" : "211021",
			"cityname" : "辽阳县"
		}, {
			"cityid" : "211081",
			"cityname" : "灯塔市"
		} ]
	}, {
		"盘锦市" : [ {
			"cityid" : "211100",
			"cityname" : "盘锦市"
		}, {
			"cityid" : "211101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "211102",
			"cityname" : "双台子区"
		}, {
			"cityid" : "211103",
			"cityname" : "兴隆台区"
		}, {
			"cityid" : "211121",
			"cityname" : "大洼县"
		}, {
			"cityid" : "211122",
			"cityname" : "盘山县"
		} ]
	}, {
		"铁岭市" : [ {
			"cityid" : "211200",
			"cityname" : "铁岭市"
		}, {
			"cityid" : "211201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "211202",
			"cityname" : "银州区"
		}, {
			"cityid" : "211204",
			"cityname" : "清河区"
		}, {
			"cityid" : "211221",
			"cityname" : "铁岭县"
		}, {
			"cityid" : "211223",
			"cityname" : "西丰县"
		}, {
			"cityid" : "211224",
			"cityname" : "昌图县"
		}, {
			"cityid" : "211281",
			"cityname" : "调兵山市"
		}, {
			"cityid" : "211282",
			"cityname" : "开原市"
		} ]
	}, {
		"朝阳市" : [ {
			"cityid" : "211300",
			"cityname" : "朝阳市"
		}, {
			"cityid" : "211301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "211302",
			"cityname" : "双塔区"
		}, {
			"cityid" : "211303",
			"cityname" : "龙城区"
		}, {
			"cityid" : "211321",
			"cityname" : "朝阳县"
		}, {
			"cityid" : "211322",
			"cityname" : "建平县"
		}, {
			"cityid" : "211324",
			"cityname" : "喀喇沁左翼蒙古族自治县"
		}, {
			"cityid" : "211381",
			"cityname" : "北票市"
		}, {
			"cityid" : "211382",
			"cityname" : "凌源市"
		} ]
	}, {
		"葫芦岛市" : [ {
			"cityid" : "211400",
			"cityname" : "葫芦岛市"
		}, {
			"cityid" : "211401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "211402",
			"cityname" : "连山区"
		}, {
			"cityid" : "211403",
			"cityname" : "龙港区"
		}, {
			"cityid" : "211404",
			"cityname" : "南票区"
		}, {
			"cityid" : "211421",
			"cityname" : "绥中县"
		}, {
			"cityid" : "211422",
			"cityname" : "建昌县"
		}, {
			"cityid" : "211481",
			"cityname" : "兴城市"
		} ]
	} ],
	"吉林省" : [ {
		"cityid" : "220000",
		"cityname" : "吉林省"
	}, {
		"长春市" : [ {
			"cityid" : "220100",
			"cityname" : "长春市"
		}, {
			"cityid" : "220101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "220102",
			"cityname" : "南关区"
		}, {
			"cityid" : "220103",
			"cityname" : "宽城区"
		}, {
			"cityid" : "220104",
			"cityname" : "朝阳区"
		}, {
			"cityid" : "220105",
			"cityname" : "二道区"
		}, {
			"cityid" : "220106",
			"cityname" : "绿园区"
		}, {
			"cityid" : "220112",
			"cityname" : "双阳区"
		}, {
			"cityid" : "220122",
			"cityname" : "农安县"
		}, {
			"cityid" : "220181",
			"cityname" : "九台市"
		}, {
			"cityid" : "220182",
			"cityname" : "榆树市"
		}, {
			"cityid" : "220183",
			"cityname" : "德惠市"
		} ]
	}, {
		"吉林市" : [ {
			"cityid" : "220200",
			"cityname" : "吉林市"
		}, {
			"cityid" : "220201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "220202",
			"cityname" : "昌邑区"
		}, {
			"cityid" : "220203",
			"cityname" : "龙潭区"
		}, {
			"cityid" : "220204",
			"cityname" : "船营区"
		}, {
			"cityid" : "220211",
			"cityname" : "丰满区"
		}, {
			"cityid" : "220221",
			"cityname" : "永吉县"
		}, {
			"cityid" : "220281",
			"cityname" : "蛟河市"
		}, {
			"cityid" : "220282",
			"cityname" : "桦甸市"
		}, {
			"cityid" : "220283",
			"cityname" : "舒兰市"
		}, {
			"cityid" : "220284",
			"cityname" : "磐石市"
		} ]
	}, {
		"四平市" : [ {
			"cityid" : "220300",
			"cityname" : "四平市"
		}, {
			"cityid" : "220301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "220302",
			"cityname" : "铁西区"
		}, {
			"cityid" : "220303",
			"cityname" : "铁东区"
		}, {
			"cityid" : "220322",
			"cityname" : "梨树县"
		}, {
			"cityid" : "220323",
			"cityname" : "伊通满族自治县"
		}, {
			"cityid" : "220381",
			"cityname" : "公主岭市"
		}, {
			"cityid" : "220382",
			"cityname" : "双辽市"
		} ]
	}, {
		"辽源市" : [ {
			"cityid" : "220400",
			"cityname" : "辽源市"
		}, {
			"cityid" : "220401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "220402",
			"cityname" : "龙山区"
		}, {
			"cityid" : "220403",
			"cityname" : "西安区"
		}, {
			"cityid" : "220421",
			"cityname" : "东丰县"
		}, {
			"cityid" : "220422",
			"cityname" : "东辽县"
		} ]
	}, {
		"通化市" : [ {
			"cityid" : "220500",
			"cityname" : "通化市"
		}, {
			"cityid" : "220501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "220502",
			"cityname" : "东昌区"
		}, {
			"cityid" : "220503",
			"cityname" : "二道江区"
		}, {
			"cityid" : "220521",
			"cityname" : "通化县"
		}, {
			"cityid" : "220523",
			"cityname" : "辉南县"
		}, {
			"cityid" : "220524",
			"cityname" : "柳河县"
		}, {
			"cityid" : "220581",
			"cityname" : "梅河口市"
		}, {
			"cityid" : "220582",
			"cityname" : "集安市"
		} ]
	}, {
		"白山市" : [ {
			"cityid" : "220600",
			"cityname" : "白山市"
		}, {
			"cityid" : "220601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "220602",
			"cityname" : "八道江区"
		}, {
			"cityid" : "220605",
			"cityname" : "江源区"
		}, {
			"cityid" : "220621",
			"cityname" : "抚松县"
		}, {
			"cityid" : "220622",
			"cityname" : "靖宇县"
		}, {
			"cityid" : "220623",
			"cityname" : "长白朝鲜族自治县"
		}, {
			"cityid" : "220681",
			"cityname" : "临江市"
		} ]
	}, {
		"松原市" : [ {
			"cityid" : "220700",
			"cityname" : "松原市"
		}, {
			"cityid" : "220701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "220702",
			"cityname" : "宁江区"
		}, {
			"cityid" : "220721",
			"cityname" : "前郭尔罗斯蒙古族自治县"
		}, {
			"cityid" : "220722",
			"cityname" : "长岭县"
		}, {
			"cityid" : "220723",
			"cityname" : "乾安县"
		}, {
			"cityid" : "220724",
			"cityname" : "扶余县"
		} ]
	}, {
		"白城市" : [ {
			"cityid" : "220800",
			"cityname" : "白城市"
		}, {
			"cityid" : "220801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "220802",
			"cityname" : "洮北区"
		}, {
			"cityid" : "220821",
			"cityname" : "镇赉县"
		}, {
			"cityid" : "220822",
			"cityname" : "通榆县"
		}, {
			"cityid" : "220881",
			"cityname" : "洮南市"
		}, {
			"cityid" : "220882",
			"cityname" : "大安市"
		} ]
	}, {
		"延边朝鲜族自治州" : [ {
			"cityid" : "222400",
			"cityname" : "延边朝鲜族自治州"
		}, {
			"cityid" : "222401",
			"cityname" : "延吉市"
		}, {
			"cityid" : "222402",
			"cityname" : "图们市"
		}, {
			"cityid" : "222403",
			"cityname" : "敦化市"
		}, {
			"cityid" : "222404",
			"cityname" : "珲春市"
		}, {
			"cityid" : "222405",
			"cityname" : "龙井市"
		}, {
			"cityid" : "222406",
			"cityname" : "和龙市"
		}, {
			"cityid" : "222424",
			"cityname" : "汪清县"
		}, {
			"cityid" : "222426",
			"cityname" : "安图县"
		} ]
	} ],
	"黑龙江省" : [ {
		"cityid" : "230000",
		"cityname" : "黑龙江省"
	}, {
		"哈尔滨市" : [ {
			"cityid" : "230100",
			"cityname" : "哈尔滨市"
		}, {
			"cityid" : "230101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "230102",
			"cityname" : "道里区"
		}, {
			"cityid" : "230103",
			"cityname" : "南岗区"
		}, {
			"cityid" : "230104",
			"cityname" : "道外区"
		}, {
			"cityid" : "230108",
			"cityname" : "平房区"
		}, {
			"cityid" : "230109",
			"cityname" : "松北区"
		}, {
			"cityid" : "230110",
			"cityname" : "香坊区"
		}, {
			"cityid" : "230111",
			"cityname" : "呼兰区"
		}, {
			"cityid" : "230112",
			"cityname" : "阿城区"
		}, {
			"cityid" : "230123",
			"cityname" : "依兰县"
		}, {
			"cityid" : "230124",
			"cityname" : "方正县"
		}, {
			"cityid" : "230125",
			"cityname" : "宾　县"
		}, {
			"cityid" : "230126",
			"cityname" : "巴彦县"
		}, {
			"cityid" : "230127",
			"cityname" : "木兰县"
		}, {
			"cityid" : "230128",
			"cityname" : "通河县"
		}, {
			"cityid" : "230129",
			"cityname" : "延寿县"
		}, {
			"cityid" : "230182",
			"cityname" : "双城市"
		}, {
			"cityid" : "230183",
			"cityname" : "尚志市"
		}, {
			"cityid" : "230184",
			"cityname" : "五常市"
		} ]
	}, {
		"齐齐哈尔市" : [ {
			"cityid" : "230200",
			"cityname" : "齐齐哈尔市"
		}, {
			"cityid" : "230201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "230202",
			"cityname" : "龙沙区"
		}, {
			"cityid" : "230203",
			"cityname" : "建华区"
		}, {
			"cityid" : "230204",
			"cityname" : "铁锋区"
		}, {
			"cityid" : "230205",
			"cityname" : "昂昂溪区"
		}, {
			"cityid" : "230206",
			"cityname" : "富拉尔基区"
		}, {
			"cityid" : "230207",
			"cityname" : "碾子山区"
		}, {
			"cityid" : "230208",
			"cityname" : "梅里斯达斡尔族区"
		}, {
			"cityid" : "230221",
			"cityname" : "龙江县"
		}, {
			"cityid" : "230223",
			"cityname" : "依安县"
		}, {
			"cityid" : "230224",
			"cityname" : "泰来县"
		}, {
			"cityid" : "230225",
			"cityname" : "甘南县"
		}, {
			"cityid" : "230227",
			"cityname" : "富裕县"
		}, {
			"cityid" : "230229",
			"cityname" : "克山县"
		}, {
			"cityid" : "230230",
			"cityname" : "克东县"
		}, {
			"cityid" : "230231",
			"cityname" : "拜泉县"
		}, {
			"cityid" : "230281",
			"cityname" : "讷河市"
		} ]
	}, {
		"鸡西市" : [ {
			"cityid" : "230300",
			"cityname" : "鸡西市"
		}, {
			"cityid" : "230301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "230302",
			"cityname" : "鸡冠区"
		}, {
			"cityid" : "230303",
			"cityname" : "恒山区"
		}, {
			"cityid" : "230304",
			"cityname" : "滴道区"
		}, {
			"cityid" : "230305",
			"cityname" : "梨树区"
		}, {
			"cityid" : "230306",
			"cityname" : "城子河区"
		}, {
			"cityid" : "230307",
			"cityname" : "麻山区"
		}, {
			"cityid" : "230321",
			"cityname" : "鸡东县"
		}, {
			"cityid" : "230381",
			"cityname" : "虎林市"
		}, {
			"cityid" : "230382",
			"cityname" : "密山市"
		} ]
	}, {
		"鹤岗市" : [ {
			"cityid" : "230400",
			"cityname" : "鹤岗市"
		}, {
			"cityid" : "230401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "230402",
			"cityname" : "向阳区"
		}, {
			"cityid" : "230403",
			"cityname" : "工农区"
		}, {
			"cityid" : "230404",
			"cityname" : "南山区"
		}, {
			"cityid" : "230405",
			"cityname" : "兴安区"
		}, {
			"cityid" : "230406",
			"cityname" : "东山区"
		}, {
			"cityid" : "230407",
			"cityname" : "兴山区"
		}, {
			"cityid" : "230421",
			"cityname" : "萝北县"
		}, {
			"cityid" : "230422",
			"cityname" : "绥滨县"
		} ]
	}, {
		"双鸭山市" : [ {
			"cityid" : "230500",
			"cityname" : "双鸭山市"
		}, {
			"cityid" : "230501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "230502",
			"cityname" : "尖山区"
		}, {
			"cityid" : "230503",
			"cityname" : "岭东区"
		}, {
			"cityid" : "230505",
			"cityname" : "四方台区"
		}, {
			"cityid" : "230506",
			"cityname" : "宝山区"
		}, {
			"cityid" : "230521",
			"cityname" : "集贤县"
		}, {
			"cityid" : "230522",
			"cityname" : "友谊县"
		}, {
			"cityid" : "230523",
			"cityname" : "宝清县"
		}, {
			"cityid" : "230524",
			"cityname" : "饶河县"
		} ]
	}, {
		"大庆市" : [ {
			"cityid" : "230600",
			"cityname" : "大庆市"
		}, {
			"cityid" : "230601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "230602",
			"cityname" : "萨尔图区"
		}, {
			"cityid" : "230603",
			"cityname" : "龙凤区"
		}, {
			"cityid" : "230604",
			"cityname" : "让胡路区"
		}, {
			"cityid" : "230605",
			"cityname" : "红岗区"
		}, {
			"cityid" : "230606",
			"cityname" : "大同区"
		}, {
			"cityid" : "230621",
			"cityname" : "肇州县"
		}, {
			"cityid" : "230622",
			"cityname" : "肇源县"
		}, {
			"cityid" : "230623",
			"cityname" : "林甸县"
		}, {
			"cityid" : "230624",
			"cityname" : "杜尔伯特蒙古族自治县"
		} ]
	}, {
		"伊春市" : [ {
			"cityid" : "230700",
			"cityname" : "伊春市"
		}, {
			"cityid" : "230701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "230702",
			"cityname" : "伊春区"
		}, {
			"cityid" : "230703",
			"cityname" : "南岔区"
		}, {
			"cityid" : "230704",
			"cityname" : "友好区"
		}, {
			"cityid" : "230705",
			"cityname" : "西林区"
		}, {
			"cityid" : "230706",
			"cityname" : "翠峦区"
		}, {
			"cityid" : "230707",
			"cityname" : "新青区"
		}, {
			"cityid" : "230708",
			"cityname" : "美溪区"
		}, {
			"cityid" : "230709",
			"cityname" : "金山屯区"
		}, {
			"cityid" : "230710",
			"cityname" : "五营区"
		}, {
			"cityid" : "230711",
			"cityname" : "乌马河区"
		}, {
			"cityid" : "230712",
			"cityname" : "汤旺河区"
		}, {
			"cityid" : "230713",
			"cityname" : "带岭区"
		}, {
			"cityid" : "230714",
			"cityname" : "乌伊岭区"
		}, {
			"cityid" : "230715",
			"cityname" : "红星区"
		}, {
			"cityid" : "230716",
			"cityname" : "上甘岭区"
		}, {
			"cityid" : "230722",
			"cityname" : "嘉荫县"
		}, {
			"cityid" : "230781",
			"cityname" : "铁力市"
		} ]
	}, {
		"佳木斯市" : [ {
			"cityid" : "230800",
			"cityname" : "佳木斯市"
		}, {
			"cityid" : "230801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "230803",
			"cityname" : "向阳区"
		}, {
			"cityid" : "230804",
			"cityname" : "前进区"
		}, {
			"cityid" : "230805",
			"cityname" : "东风区"
		}, {
			"cityid" : "230811",
			"cityname" : "郊　区"
		}, {
			"cityid" : "230822",
			"cityname" : "桦南县"
		}, {
			"cityid" : "230826",
			"cityname" : "桦川县"
		}, {
			"cityid" : "230828",
			"cityname" : "汤原县"
		}, {
			"cityid" : "230833",
			"cityname" : "抚远县"
		}, {
			"cityid" : "230881",
			"cityname" : "同江市"
		}, {
			"cityid" : "230882",
			"cityname" : "富锦市"
		} ]
	}, {
		"七台河市" : [ {
			"cityid" : "230900",
			"cityname" : "七台河市"
		}, {
			"cityid" : "230901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "230902",
			"cityname" : "新兴区"
		}, {
			"cityid" : "230903",
			"cityname" : "桃山区"
		}, {
			"cityid" : "230904",
			"cityname" : "茄子河区"
		}, {
			"cityid" : "230921",
			"cityname" : "勃利县"
		} ]
	}, {
		"牡丹江市" : [ {
			"cityid" : "231000",
			"cityname" : "牡丹江市"
		}, {
			"cityid" : "231001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "231002",
			"cityname" : "东安区"
		}, {
			"cityid" : "231003",
			"cityname" : "阳明区"
		}, {
			"cityid" : "231004",
			"cityname" : "爱民区"
		}, {
			"cityid" : "231005",
			"cityname" : "西安区"
		}, {
			"cityid" : "231024",
			"cityname" : "东宁县"
		}, {
			"cityid" : "231025",
			"cityname" : "林口县"
		}, {
			"cityid" : "231081",
			"cityname" : "绥芬河市"
		}, {
			"cityid" : "231083",
			"cityname" : "海林市"
		}, {
			"cityid" : "231084",
			"cityname" : "宁安市"
		}, {
			"cityid" : "231085",
			"cityname" : "穆棱市"
		} ]
	}, {
		"黑河市" : [ {
			"cityid" : "231100",
			"cityname" : "黑河市"
		}, {
			"cityid" : "231101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "231102",
			"cityname" : "爱辉区"
		}, {
			"cityid" : "231121",
			"cityname" : "嫩江县"
		}, {
			"cityid" : "231123",
			"cityname" : "逊克县"
		}, {
			"cityid" : "231124",
			"cityname" : "孙吴县"
		}, {
			"cityid" : "231181",
			"cityname" : "北安市"
		}, {
			"cityid" : "231182",
			"cityname" : "五大连池市"
		} ]
	}, {
		"绥化市" : [ {
			"cityid" : "231200",
			"cityname" : "绥化市"
		}, {
			"cityid" : "231201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "231202",
			"cityname" : "北林区"
		}, {
			"cityid" : "231221",
			"cityname" : "望奎县"
		}, {
			"cityid" : "231222",
			"cityname" : "兰西县"
		}, {
			"cityid" : "231223",
			"cityname" : "青冈县"
		}, {
			"cityid" : "231224",
			"cityname" : "庆安县"
		}, {
			"cityid" : "231225",
			"cityname" : "明水县"
		}, {
			"cityid" : "231226",
			"cityname" : "绥棱县"
		}, {
			"cityid" : "231281",
			"cityname" : "安达市"
		}, {
			"cityid" : "231282",
			"cityname" : "肇东市"
		}, {
			"cityid" : "231283",
			"cityname" : "海伦市"
		} ]
	}, {
		"大兴安岭地区" : [ {
			"cityid" : "232700",
			"cityname" : "大兴安岭地区"
		}, {
			"cityid" : "232721",
			"cityname" : "呼玛县"
		}, {
			"cityid" : "232722",
			"cityname" : "塔河县"
		}, {
			"cityid" : "232723",
			"cityname" : "漠河县"
		} ]
	} ],
	"上海市" : [ {
		"cityid" : "310000",
		"cityname" : "上海市"
	}, {
		"市辖区" : [ {
			"cityid" : "310100",
			"cityname" : "市辖区"
		}, {
			"cityid" : "310101",
			"cityname" : "黄浦区"
		}, {
			"cityid" : "310103",
			"cityname" : "卢湾区"
		}, {
			"cityid" : "310104",
			"cityname" : "徐汇区"
		}, {
			"cityid" : "310105",
			"cityname" : "长宁区"
		}, {
			"cityid" : "310106",
			"cityname" : "静安区"
		}, {
			"cityid" : "310107",
			"cityname" : "普陀区"
		}, {
			"cityid" : "310108",
			"cityname" : "闸北区"
		}, {
			"cityid" : "310109",
			"cityname" : "虹口区"
		}, {
			"cityid" : "310110",
			"cityname" : "杨浦区"
		}, {
			"cityid" : "310112",
			"cityname" : "闵行区"
		}, {
			"cityid" : "310113",
			"cityname" : "宝山区"
		}, {
			"cityid" : "310114",
			"cityname" : "嘉定区"
		}, {
			"cityid" : "310115",
			"cityname" : "浦东新区"
		}, {
			"cityid" : "310116",
			"cityname" : "金山区"
		}, {
			"cityid" : "310117",
			"cityname" : "松江区"
		}, {
			"cityid" : "310118",
			"cityname" : "青浦区"
		}, {
			"cityid" : "310120",
			"cityname" : "奉贤区"
		} ]
	}, {
		"县" : [ {
			"cityid" : "310200",
			"cityname" : "县"
		}, {
			"cityid" : "310230",
			"cityname" : "崇明县"
		} ]
	} ],
	"江苏省" : [ {
		"cityid" : "320000",
		"cityname" : "江苏省"
	}, {
		"南京市" : [ {
			"cityid" : "320100",
			"cityname" : "南京市"
		}, {
			"cityid" : "320101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "320102",
			"cityname" : "玄武区"
		}, {
			"cityid" : "320103",
			"cityname" : "白下区"
		}, {
			"cityid" : "320104",
			"cityname" : "秦淮区"
		}, {
			"cityid" : "320105",
			"cityname" : "建邺区"
		}, {
			"cityid" : "320106",
			"cityname" : "鼓楼区"
		}, {
			"cityid" : "320107",
			"cityname" : "下关区"
		}, {
			"cityid" : "320111",
			"cityname" : "浦口区"
		}, {
			"cityid" : "320113",
			"cityname" : "栖霞区"
		}, {
			"cityid" : "320114",
			"cityname" : "雨花台区"
		}, {
			"cityid" : "320115",
			"cityname" : "江宁区"
		}, {
			"cityid" : "320116",
			"cityname" : "六合区"
		}, {
			"cityid" : "320124",
			"cityname" : "溧水县"
		}, {
			"cityid" : "320125",
			"cityname" : "高淳县"
		} ]
	}, {
		"无锡市" : [ {
			"cityid" : "320200",
			"cityname" : "无锡市"
		}, {
			"cityid" : "320201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "320202",
			"cityname" : "崇安区"
		}, {
			"cityid" : "320203",
			"cityname" : "南长区"
		}, {
			"cityid" : "320204",
			"cityname" : "北塘区"
		}, {
			"cityid" : "320205",
			"cityname" : "锡山区"
		}, {
			"cityid" : "320206",
			"cityname" : "惠山区"
		}, {
			"cityid" : "320211",
			"cityname" : "滨湖区"
		}, {
			"cityid" : "320281",
			"cityname" : "江阴市"
		}, {
			"cityid" : "320282",
			"cityname" : "宜兴市"
		} ]
	}, {
		"徐州市" : [ {
			"cityid" : "320300",
			"cityname" : "徐州市"
		}, {
			"cityid" : "320301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "320302",
			"cityname" : "鼓楼区"
		}, {
			"cityid" : "320303",
			"cityname" : "云龙区"
		}, {
			"cityid" : "320304",
			"cityname" : "九里区"
		}, {
			"cityid" : "320305",
			"cityname" : "贾汪区"
		}, {
			"cityid" : "320311",
			"cityname" : "泉山区"
		}, {
			"cityid" : "320321",
			"cityname" : "丰　县"
		}, {
			"cityid" : "320322",
			"cityname" : "沛　县"
		}, {
			"cityid" : "320323",
			"cityname" : "铜山县"
		}, {
			"cityid" : "320324",
			"cityname" : "睢宁县"
		}, {
			"cityid" : "320381",
			"cityname" : "新沂市"
		}, {
			"cityid" : "320382",
			"cityname" : "邳州市"
		} ]
	}, {
		"常州市" : [ {
			"cityid" : "320400",
			"cityname" : "常州市"
		}, {
			"cityid" : "320401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "320402",
			"cityname" : "天宁区"
		}, {
			"cityid" : "320404",
			"cityname" : "钟楼区"
		}, {
			"cityid" : "320405",
			"cityname" : "戚墅堰区"
		}, {
			"cityid" : "320411",
			"cityname" : "新北区"
		}, {
			"cityid" : "320412",
			"cityname" : "武进区"
		}, {
			"cityid" : "320481",
			"cityname" : "溧阳市"
		}, {
			"cityid" : "320482",
			"cityname" : "金坛市"
		} ]
	}, {
		"苏州市" : [ {
			"cityid" : "320500",
			"cityname" : "苏州市"
		}, {
			"cityid" : "320501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "320502",
			"cityname" : "沧浪区"
		}, {
			"cityid" : "320503",
			"cityname" : "平江区"
		}, {
			"cityid" : "320504",
			"cityname" : "金阊区"
		}, {
			"cityid" : "320505",
			"cityname" : "虎丘区"
		}, {
			"cityid" : "320506",
			"cityname" : "吴中区"
		}, {
			"cityid" : "320507",
			"cityname" : "相城区"
		}, {
			"cityid" : "320581",
			"cityname" : "常熟市"
		}, {
			"cityid" : "320582",
			"cityname" : "张家港市"
		}, {
			"cityid" : "320583",
			"cityname" : "昆山市"
		}, {
			"cityid" : "320584",
			"cityname" : "吴江市"
		}, {
			"cityid" : "320585",
			"cityname" : "太仓市"
		} ]
	}, {
		"南通市" : [ {
			"cityid" : "320600",
			"cityname" : "南通市"
		}, {
			"cityid" : "320601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "320602",
			"cityname" : "崇川区"
		}, {
			"cityid" : "320611",
			"cityname" : "港闸区"
		}, {
			"cityid" : "320612",
			"cityname" : "通州区"
		}, {
			"cityid" : "320621",
			"cityname" : "海安县"
		}, {
			"cityid" : "320623",
			"cityname" : "如东县"
		}, {
			"cityid" : "320681",
			"cityname" : "启东市"
		}, {
			"cityid" : "320682",
			"cityname" : "如皋市"
		}, {
			"cityid" : "320684",
			"cityname" : "海门市"
		} ]
	}, {
		"连云港市" : [ {
			"cityid" : "320700",
			"cityname" : "连云港市"
		}, {
			"cityid" : "320701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "320703",
			"cityname" : "连云区"
		}, {
			"cityid" : "320705",
			"cityname" : "新浦区"
		}, {
			"cityid" : "320706",
			"cityname" : "海州区"
		}, {
			"cityid" : "320721",
			"cityname" : "赣榆县"
		}, {
			"cityid" : "320722",
			"cityname" : "东海县"
		}, {
			"cityid" : "320723",
			"cityname" : "灌云县"
		}, {
			"cityid" : "320724",
			"cityname" : "灌南县"
		} ]
	}, {
		"淮安市" : [ {
			"cityid" : "320800",
			"cityname" : "淮安市"
		}, {
			"cityid" : "320801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "320802",
			"cityname" : "清河区"
		}, {
			"cityid" : "320803",
			"cityname" : "楚州区"
		}, {
			"cityid" : "320804",
			"cityname" : "淮阴区"
		}, {
			"cityid" : "320811",
			"cityname" : "清浦区"
		}, {
			"cityid" : "320826",
			"cityname" : "涟水县"
		}, {
			"cityid" : "320829",
			"cityname" : "洪泽县"
		}, {
			"cityid" : "320830",
			"cityname" : "盱眙县"
		}, {
			"cityid" : "320831",
			"cityname" : "金湖县"
		} ]
	}, {
		"盐城市" : [ {
			"cityid" : "320900",
			"cityname" : "盐城市"
		}, {
			"cityid" : "320901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "320902",
			"cityname" : "亭湖区"
		}, {
			"cityid" : "320903",
			"cityname" : "盐都区"
		}, {
			"cityid" : "320921",
			"cityname" : "响水县"
		}, {
			"cityid" : "320922",
			"cityname" : "滨海县"
		}, {
			"cityid" : "320923",
			"cityname" : "阜宁县"
		}, {
			"cityid" : "320924",
			"cityname" : "射阳县"
		}, {
			"cityid" : "320925",
			"cityname" : "建湖县"
		}, {
			"cityid" : "320981",
			"cityname" : "东台市"
		}, {
			"cityid" : "320982",
			"cityname" : "大丰市"
		} ]
	}, {
		"扬州市" : [ {
			"cityid" : "321000",
			"cityname" : "扬州市"
		}, {
			"cityid" : "321001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "321002",
			"cityname" : "广陵区"
		}, {
			"cityid" : "321003",
			"cityname" : "邗江区"
		}, {
			"cityid" : "321011",
			"cityname" : "维扬区"
		}, {
			"cityid" : "321023",
			"cityname" : "宝应县"
		}, {
			"cityid" : "321081",
			"cityname" : "仪征市"
		}, {
			"cityid" : "321084",
			"cityname" : "高邮市"
		}, {
			"cityid" : "321088",
			"cityname" : "江都市"
		} ]
	}, {
		"镇江市" : [ {
			"cityid" : "321100",
			"cityname" : "镇江市"
		}, {
			"cityid" : "321101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "321102",
			"cityname" : "京口区"
		}, {
			"cityid" : "321111",
			"cityname" : "润州区"
		}, {
			"cityid" : "321112",
			"cityname" : "丹徒区"
		}, {
			"cityid" : "321181",
			"cityname" : "丹阳市"
		}, {
			"cityid" : "321182",
			"cityname" : "扬中市"
		}, {
			"cityid" : "321183",
			"cityname" : "句容市"
		} ]
	}, {
		"泰州市" : [ {
			"cityid" : "321200",
			"cityname" : "泰州市"
		}, {
			"cityid" : "321201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "321202",
			"cityname" : "海陵区"
		}, {
			"cityid" : "321203",
			"cityname" : "高港区"
		}, {
			"cityid" : "321281",
			"cityname" : "兴化市"
		}, {
			"cityid" : "321282",
			"cityname" : "靖江市"
		}, {
			"cityid" : "321283",
			"cityname" : "泰兴市"
		}, {
			"cityid" : "321284",
			"cityname" : "姜堰市"
		} ]
	}, {
		"宿迁市" : [ {
			"cityid" : "321300",
			"cityname" : "宿迁市"
		}, {
			"cityid" : "321301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "321302",
			"cityname" : "宿城区"
		}, {
			"cityid" : "321311",
			"cityname" : "宿豫区"
		}, {
			"cityid" : "321322",
			"cityname" : "沭阳县"
		}, {
			"cityid" : "321323",
			"cityname" : "泗阳县"
		}, {
			"cityid" : "321324",
			"cityname" : "泗洪县"
		} ]
	} ],
	"浙江省" : [ {
		"cityid" : "330000",
		"cityname" : "浙江省"
	}, {
		"杭州市" : [ {
			"cityid" : "330100",
			"cityname" : "杭州市"
		}, {
			"cityid" : "330101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "330102",
			"cityname" : "上城区"
		}, {
			"cityid" : "330103",
			"cityname" : "下城区"
		}, {
			"cityid" : "330104",
			"cityname" : "江干区"
		}, {
			"cityid" : "330105",
			"cityname" : "拱墅区"
		}, {
			"cityid" : "330106",
			"cityname" : "西湖区"
		}, {
			"cityid" : "330108",
			"cityname" : "滨江区"
		}, {
			"cityid" : "330109",
			"cityname" : "萧山区"
		}, {
			"cityid" : "330110",
			"cityname" : "余杭区"
		}, {
			"cityid" : "330122",
			"cityname" : "桐庐县"
		}, {
			"cityid" : "330127",
			"cityname" : "淳安县"
		}, {
			"cityid" : "330182",
			"cityname" : "建德市"
		}, {
			"cityid" : "330183",
			"cityname" : "富阳市"
		}, {
			"cityid" : "330185",
			"cityname" : "临安市"
		} ]
	}, {
		"宁波市" : [ {
			"cityid" : "330200",
			"cityname" : "宁波市"
		}, {
			"cityid" : "330201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "330203",
			"cityname" : "海曙区"
		}, {
			"cityid" : "330204",
			"cityname" : "江东区"
		}, {
			"cityid" : "330205",
			"cityname" : "江北区"
		}, {
			"cityid" : "330206",
			"cityname" : "北仑区"
		}, {
			"cityid" : "330211",
			"cityname" : "镇海区"
		}, {
			"cityid" : "330212",
			"cityname" : "鄞州区"
		}, {
			"cityid" : "330225",
			"cityname" : "象山县"
		}, {
			"cityid" : "330226",
			"cityname" : "宁海县"
		}, {
			"cityid" : "330281",
			"cityname" : "余姚市"
		}, {
			"cityid" : "330282",
			"cityname" : "慈溪市"
		}, {
			"cityid" : "330283",
			"cityname" : "奉化市"
		} ]
	}, {
		"温州市" : [ {
			"cityid" : "330300",
			"cityname" : "温州市"
		}, {
			"cityid" : "330301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "330302",
			"cityname" : "鹿城区"
		}, {
			"cityid" : "330303",
			"cityname" : "龙湾区"
		}, {
			"cityid" : "330304",
			"cityname" : "瓯海区"
		}, {
			"cityid" : "330322",
			"cityname" : "洞头县"
		}, {
			"cityid" : "330324",
			"cityname" : "永嘉县"
		}, {
			"cityid" : "330326",
			"cityname" : "平阳县"
		}, {
			"cityid" : "330327",
			"cityname" : "苍南县"
		}, {
			"cityid" : "330328",
			"cityname" : "文成县"
		}, {
			"cityid" : "330329",
			"cityname" : "泰顺县"
		}, {
			"cityid" : "330381",
			"cityname" : "瑞安市"
		}, {
			"cityid" : "330382",
			"cityname" : "乐清市"
		} ]
	}, {
		"嘉兴市" : [ {
			"cityid" : "330400",
			"cityname" : "嘉兴市"
		}, {
			"cityid" : "330401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "330402",
			"cityname" : "南湖区"
		}, {
			"cityid" : "330411",
			"cityname" : "秀洲区"
		}, {
			"cityid" : "330421",
			"cityname" : "嘉善县"
		}, {
			"cityid" : "330424",
			"cityname" : "海盐县"
		}, {
			"cityid" : "330481",
			"cityname" : "海宁市"
		}, {
			"cityid" : "330482",
			"cityname" : "平湖市"
		}, {
			"cityid" : "330483",
			"cityname" : "桐乡市"
		} ]
	}, {
		"湖州市" : [ {
			"cityid" : "330500",
			"cityname" : "湖州市"
		}, {
			"cityid" : "330501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "330502",
			"cityname" : "吴兴区"
		}, {
			"cityid" : "330503",
			"cityname" : "南浔区"
		}, {
			"cityid" : "330521",
			"cityname" : "德清县"
		}, {
			"cityid" : "330522",
			"cityname" : "长兴县"
		}, {
			"cityid" : "330523",
			"cityname" : "安吉县"
		} ]
	}, {
		"绍兴市" : [ {
			"cityid" : "330600",
			"cityname" : "绍兴市"
		}, {
			"cityid" : "330601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "330602",
			"cityname" : "越城区"
		}, {
			"cityid" : "330621",
			"cityname" : "绍兴县"
		}, {
			"cityid" : "330624",
			"cityname" : "新昌县"
		}, {
			"cityid" : "330681",
			"cityname" : "诸暨市"
		}, {
			"cityid" : "330682",
			"cityname" : "上虞市"
		}, {
			"cityid" : "330683",
			"cityname" : "嵊州市"
		} ]
	}, {
		"金华市" : [ {
			"cityid" : "330700",
			"cityname" : "金华市"
		}, {
			"cityid" : "330701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "330702",
			"cityname" : "婺城区"
		}, {
			"cityid" : "330703",
			"cityname" : "金东区"
		}, {
			"cityid" : "330723",
			"cityname" : "武义县"
		}, {
			"cityid" : "330726",
			"cityname" : "浦江县"
		}, {
			"cityid" : "330727",
			"cityname" : "磐安县"
		}, {
			"cityid" : "330781",
			"cityname" : "兰溪市"
		}, {
			"cityid" : "330782",
			"cityname" : "义乌市"
		}, {
			"cityid" : "330783",
			"cityname" : "东阳市"
		}, {
			"cityid" : "330784",
			"cityname" : "永康市"
		} ]
	}, {
		"衢州市" : [ {
			"cityid" : "330800",
			"cityname" : "衢州市"
		}, {
			"cityid" : "330801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "330802",
			"cityname" : "柯城区"
		}, {
			"cityid" : "330803",
			"cityname" : "衢江区"
		}, {
			"cityid" : "330822",
			"cityname" : "常山县"
		}, {
			"cityid" : "330824",
			"cityname" : "开化县"
		}, {
			"cityid" : "330825",
			"cityname" : "龙游县"
		}, {
			"cityid" : "330881",
			"cityname" : "江山市"
		} ]
	}, {
		"舟山市" : [ {
			"cityid" : "330900",
			"cityname" : "舟山市"
		}, {
			"cityid" : "330901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "330902",
			"cityname" : "定海区"
		}, {
			"cityid" : "330903",
			"cityname" : "普陀区"
		}, {
			"cityid" : "330921",
			"cityname" : "岱山县"
		}, {
			"cityid" : "330922",
			"cityname" : "嵊泗县"
		} ]
	}, {
		"台州市" : [ {
			"cityid" : "331000",
			"cityname" : "台州市"
		}, {
			"cityid" : "331001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "331002",
			"cityname" : "椒江区"
		}, {
			"cityid" : "331003",
			"cityname" : "黄岩区"
		}, {
			"cityid" : "331004",
			"cityname" : "路桥区"
		}, {
			"cityid" : "331021",
			"cityname" : "玉环县"
		}, {
			"cityid" : "331022",
			"cityname" : "三门县"
		}, {
			"cityid" : "331023",
			"cityname" : "天台县"
		}, {
			"cityid" : "331024",
			"cityname" : "仙居县"
		}, {
			"cityid" : "331081",
			"cityname" : "温岭市"
		}, {
			"cityid" : "331082",
			"cityname" : "临海市"
		} ]
	}, {
		"丽水市" : [ {
			"cityid" : "331100",
			"cityname" : "丽水市"
		}, {
			"cityid" : "331101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "331102",
			"cityname" : "莲都区"
		}, {
			"cityid" : "331121",
			"cityname" : "青田县"
		}, {
			"cityid" : "331122",
			"cityname" : "缙云县"
		}, {
			"cityid" : "331123",
			"cityname" : "遂昌县"
		}, {
			"cityid" : "331124",
			"cityname" : "松阳县"
		}, {
			"cityid" : "331125",
			"cityname" : "云和县"
		}, {
			"cityid" : "331126",
			"cityname" : "庆元县"
		}, {
			"cityid" : "331127",
			"cityname" : "景宁畲族自治县"
		}, {
			"cityid" : "331181",
			"cityname" : "龙泉市"
		} ]
	} ],
	"安徽省" : [ {
		"cityid" : "340000",
		"cityname" : "安徽省"
	}, {
		"合肥市" : [ {
			"cityid" : "340100",
			"cityname" : "合肥市"
		}, {
			"cityid" : "340101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "340102",
			"cityname" : "瑶海区"
		}, {
			"cityid" : "340103",
			"cityname" : "庐阳区"
		}, {
			"cityid" : "340104",
			"cityname" : "蜀山区"
		}, {
			"cityid" : "340111",
			"cityname" : "包河区"
		}, {
			"cityid" : "340121",
			"cityname" : "长丰县"
		}, {
			"cityid" : "340122",
			"cityname" : "肥东县"
		}, {
			"cityid" : "340123",
			"cityname" : "肥西县"
		} ]
	}, {
		"芜湖市" : [ {
			"cityid" : "340200",
			"cityname" : "芜湖市"
		}, {
			"cityid" : "340201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "340202",
			"cityname" : "镜湖区"
		}, {
			"cityid" : "340203",
			"cityname" : "弋江区"
		}, {
			"cityid" : "340207",
			"cityname" : "鸠江区"
		}, {
			"cityid" : "340208",
			"cityname" : "三山区"
		}, {
			"cityid" : "340221",
			"cityname" : "芜湖县"
		}, {
			"cityid" : "340222",
			"cityname" : "繁昌县"
		}, {
			"cityid" : "340223",
			"cityname" : "南陵县"
		} ]
	}, {
		"蚌埠市" : [ {
			"cityid" : "340300",
			"cityname" : "蚌埠市"
		}, {
			"cityid" : "340301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "340302",
			"cityname" : "龙子湖区"
		}, {
			"cityid" : "340303",
			"cityname" : "蚌山区"
		}, {
			"cityid" : "340304",
			"cityname" : "禹会区"
		}, {
			"cityid" : "340311",
			"cityname" : "淮上区"
		}, {
			"cityid" : "340321",
			"cityname" : "怀远县"
		}, {
			"cityid" : "340322",
			"cityname" : "五河县"
		}, {
			"cityid" : "340323",
			"cityname" : "固镇县"
		} ]
	}, {
		"淮南市" : [ {
			"cityid" : "340400",
			"cityname" : "淮南市"
		}, {
			"cityid" : "340401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "340402",
			"cityname" : "大通区"
		}, {
			"cityid" : "340403",
			"cityname" : "田家庵区"
		}, {
			"cityid" : "340404",
			"cityname" : "谢家集区"
		}, {
			"cityid" : "340405",
			"cityname" : "八公山区"
		}, {
			"cityid" : "340406",
			"cityname" : "潘集区"
		}, {
			"cityid" : "340421",
			"cityname" : "凤台县"
		} ]
	}, {
		"马鞍山市" : [ {
			"cityid" : "340500",
			"cityname" : "马鞍山市"
		}, {
			"cityid" : "340501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "340502",
			"cityname" : "金家庄区"
		}, {
			"cityid" : "340503",
			"cityname" : "花山区"
		}, {
			"cityid" : "340504",
			"cityname" : "雨山区"
		}, {
			"cityid" : "340521",
			"cityname" : "当涂县"
		} ]
	}, {
		"淮北市" : [ {
			"cityid" : "340600",
			"cityname" : "淮北市"
		}, {
			"cityid" : "340601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "340602",
			"cityname" : "杜集区"
		}, {
			"cityid" : "340603",
			"cityname" : "相山区"
		}, {
			"cityid" : "340604",
			"cityname" : "烈山区"
		}, {
			"cityid" : "340621",
			"cityname" : "濉溪县"
		} ]
	}, {
		"铜陵市" : [ {
			"cityid" : "340700",
			"cityname" : "铜陵市"
		}, {
			"cityid" : "340701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "340702",
			"cityname" : "铜官山区"
		}, {
			"cityid" : "340703",
			"cityname" : "狮子山区"
		}, {
			"cityid" : "340711",
			"cityname" : "郊　区"
		}, {
			"cityid" : "340721",
			"cityname" : "铜陵县"
		} ]
	}, {
		"安庆市" : [ {
			"cityid" : "340800",
			"cityname" : "安庆市"
		}, {
			"cityid" : "340801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "340802",
			"cityname" : "迎江区"
		}, {
			"cityid" : "340803",
			"cityname" : "大观区"
		}, {
			"cityid" : "340811",
			"cityname" : "宜秀区"
		}, {
			"cityid" : "340822",
			"cityname" : "怀宁县"
		}, {
			"cityid" : "340823",
			"cityname" : "枞阳县"
		}, {
			"cityid" : "340824",
			"cityname" : "潜山县"
		}, {
			"cityid" : "340825",
			"cityname" : "太湖县"
		}, {
			"cityid" : "340826",
			"cityname" : "宿松县"
		}, {
			"cityid" : "340827",
			"cityname" : "望江县"
		}, {
			"cityid" : "340828",
			"cityname" : "岳西县"
		}, {
			"cityid" : "340881",
			"cityname" : "桐城市"
		} ]
	}, {
		"黄山市" : [ {
			"cityid" : "341000",
			"cityname" : "黄山市"
		}, {
			"cityid" : "341001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "341002",
			"cityname" : "屯溪区"
		}, {
			"cityid" : "341003",
			"cityname" : "黄山区"
		}, {
			"cityid" : "341004",
			"cityname" : "徽州区"
		}, {
			"cityid" : "341021",
			"cityname" : "歙　县"
		}, {
			"cityid" : "341022",
			"cityname" : "休宁县"
		}, {
			"cityid" : "341023",
			"cityname" : "黟　县"
		}, {
			"cityid" : "341024",
			"cityname" : "祁门县"
		} ]
	}, {
		"滁州市" : [ {
			"cityid" : "341100",
			"cityname" : "滁州市"
		}, {
			"cityid" : "341101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "341102",
			"cityname" : "琅琊区"
		}, {
			"cityid" : "341103",
			"cityname" : "南谯区"
		}, {
			"cityid" : "341122",
			"cityname" : "来安县"
		}, {
			"cityid" : "341124",
			"cityname" : "全椒县"
		}, {
			"cityid" : "341125",
			"cityname" : "定远县"
		}, {
			"cityid" : "341126",
			"cityname" : "凤阳县"
		}, {
			"cityid" : "341181",
			"cityname" : "天长市"
		}, {
			"cityid" : "341182",
			"cityname" : "明光市"
		} ]
	}, {
		"阜阳市" : [ {
			"cityid" : "341200",
			"cityname" : "阜阳市"
		}, {
			"cityid" : "341201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "341202",
			"cityname" : "颍州区"
		}, {
			"cityid" : "341203",
			"cityname" : "颍东区"
		}, {
			"cityid" : "341204",
			"cityname" : "颍泉区"
		}, {
			"cityid" : "341221",
			"cityname" : "临泉县"
		}, {
			"cityid" : "341222",
			"cityname" : "太和县"
		}, {
			"cityid" : "341225",
			"cityname" : "阜南县"
		}, {
			"cityid" : "341226",
			"cityname" : "颍上县"
		}, {
			"cityid" : "341282",
			"cityname" : "界首市"
		} ]
	}, {
		"宿州市" : [ {
			"cityid" : "341300",
			"cityname" : "宿州市"
		}, {
			"cityid" : "341301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "341302",
			"cityname" : "埇桥区"
		}, {
			"cityid" : "341321",
			"cityname" : "砀山县"
		}, {
			"cityid" : "341322",
			"cityname" : "萧　县"
		}, {
			"cityid" : "341323",
			"cityname" : "灵璧县"
		}, {
			"cityid" : "341324",
			"cityname" : "泗　县"
		} ]
	}, {
		"巢湖市" : [ {
			"cityid" : "341400",
			"cityname" : "巢湖市"
		}, {
			"cityid" : "341401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "341402",
			"cityname" : "居巢区"
		}, {
			"cityid" : "341421",
			"cityname" : "庐江县"
		}, {
			"cityid" : "341422",
			"cityname" : "无为县"
		}, {
			"cityid" : "341423",
			"cityname" : "含山县"
		}, {
			"cityid" : "341424",
			"cityname" : "和　县"
		} ]
	}, {
		"六安市" : [ {
			"cityid" : "341500",
			"cityname" : "六安市"
		}, {
			"cityid" : "341501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "341502",
			"cityname" : "金安区"
		}, {
			"cityid" : "341503",
			"cityname" : "裕安区"
		}, {
			"cityid" : "341521",
			"cityname" : "寿　县"
		}, {
			"cityid" : "341522",
			"cityname" : "霍邱县"
		}, {
			"cityid" : "341523",
			"cityname" : "舒城县"
		}, {
			"cityid" : "341524",
			"cityname" : "金寨县"
		}, {
			"cityid" : "341525",
			"cityname" : "霍山县"
		} ]
	}, {
		"亳州市" : [ {
			"cityid" : "341600",
			"cityname" : "亳州市"
		}, {
			"cityid" : "341601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "341602",
			"cityname" : "谯城区"
		}, {
			"cityid" : "341621",
			"cityname" : "涡阳县"
		}, {
			"cityid" : "341622",
			"cityname" : "蒙城县"
		}, {
			"cityid" : "341623",
			"cityname" : "利辛县"
		} ]
	}, {
		"池州市" : [ {
			"cityid" : "341700",
			"cityname" : "池州市"
		}, {
			"cityid" : "341701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "341702",
			"cityname" : "贵池区"
		}, {
			"cityid" : "341721",
			"cityname" : "东至县"
		}, {
			"cityid" : "341722",
			"cityname" : "石台县"
		}, {
			"cityid" : "341723",
			"cityname" : "青阳县"
		} ]
	}, {
		"宣城市" : [ {
			"cityid" : "341800",
			"cityname" : "宣城市"
		}, {
			"cityid" : "341801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "341802",
			"cityname" : "宣州区"
		}, {
			"cityid" : "341821",
			"cityname" : "郎溪县"
		}, {
			"cityid" : "341822",
			"cityname" : "广德县"
		}, {
			"cityid" : "341823",
			"cityname" : "泾　县"
		}, {
			"cityid" : "341824",
			"cityname" : "绩溪县"
		}, {
			"cityid" : "341825",
			"cityname" : "旌德县"
		}, {
			"cityid" : "341881",
			"cityname" : "宁国市"
		} ]
	} ],
	"福建省" : [ {
		"cityid" : "350000",
		"cityname" : "福建省"
	}, {
		"福州市" : [ {
			"cityid" : "350100",
			"cityname" : "福州市"
		}, {
			"cityid" : "350101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "350102",
			"cityname" : "鼓楼区"
		}, {
			"cityid" : "350103",
			"cityname" : "台江区"
		}, {
			"cityid" : "350104",
			"cityname" : "仓山区"
		}, {
			"cityid" : "350105",
			"cityname" : "马尾区"
		}, {
			"cityid" : "350111",
			"cityname" : "晋安区"
		}, {
			"cityid" : "350121",
			"cityname" : "闽侯县"
		}, {
			"cityid" : "350122",
			"cityname" : "连江县"
		}, {
			"cityid" : "350123",
			"cityname" : "罗源县"
		}, {
			"cityid" : "350124",
			"cityname" : "闽清县"
		}, {
			"cityid" : "350125",
			"cityname" : "永泰县"
		}, {
			"cityid" : "350128",
			"cityname" : "平潭县"
		}, {
			"cityid" : "350181",
			"cityname" : "福清市"
		}, {
			"cityid" : "350182",
			"cityname" : "长乐市"
		} ]
	}, {
		"厦门市" : [ {
			"cityid" : "350200",
			"cityname" : "厦门市"
		}, {
			"cityid" : "350201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "350203",
			"cityname" : "思明区"
		}, {
			"cityid" : "350205",
			"cityname" : "海沧区"
		}, {
			"cityid" : "350206",
			"cityname" : "湖里区"
		}, {
			"cityid" : "350211",
			"cityname" : "集美区"
		}, {
			"cityid" : "350212",
			"cityname" : "同安区"
		}, {
			"cityid" : "350213",
			"cityname" : "翔安区"
		} ]
	}, {
		"莆田市" : [ {
			"cityid" : "350300",
			"cityname" : "莆田市"
		}, {
			"cityid" : "350301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "350302",
			"cityname" : "城厢区"
		}, {
			"cityid" : "350303",
			"cityname" : "涵江区"
		}, {
			"cityid" : "350304",
			"cityname" : "荔城区"
		}, {
			"cityid" : "350305",
			"cityname" : "秀屿区"
		}, {
			"cityid" : "350322",
			"cityname" : "仙游县"
		} ]
	}, {
		"三明市" : [ {
			"cityid" : "350400",
			"cityname" : "三明市"
		}, {
			"cityid" : "350401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "350402",
			"cityname" : "梅列区"
		}, {
			"cityid" : "350403",
			"cityname" : "三元区"
		}, {
			"cityid" : "350421",
			"cityname" : "明溪县"
		}, {
			"cityid" : "350423",
			"cityname" : "清流县"
		}, {
			"cityid" : "350424",
			"cityname" : "宁化县"
		}, {
			"cityid" : "350425",
			"cityname" : "大田县"
		}, {
			"cityid" : "350426",
			"cityname" : "尤溪县"
		}, {
			"cityid" : "350427",
			"cityname" : "沙　县"
		}, {
			"cityid" : "350428",
			"cityname" : "将乐县"
		}, {
			"cityid" : "350429",
			"cityname" : "泰宁县"
		}, {
			"cityid" : "350430",
			"cityname" : "建宁县"
		}, {
			"cityid" : "350481",
			"cityname" : "永安市"
		} ]
	}, {
		"泉州市" : [ {
			"cityid" : "350500",
			"cityname" : "泉州市"
		}, {
			"cityid" : "350501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "350502",
			"cityname" : "鲤城区"
		}, {
			"cityid" : "350503",
			"cityname" : "丰泽区"
		}, {
			"cityid" : "350504",
			"cityname" : "洛江区"
		}, {
			"cityid" : "350505",
			"cityname" : "泉港区"
		}, {
			"cityid" : "350521",
			"cityname" : "惠安县"
		}, {
			"cityid" : "350524",
			"cityname" : "安溪县"
		}, {
			"cityid" : "350525",
			"cityname" : "永春县"
		}, {
			"cityid" : "350526",
			"cityname" : "德化县"
		}, {
			"cityid" : "350527",
			"cityname" : "金门县"
		}, {
			"cityid" : "350581",
			"cityname" : "石狮市"
		}, {
			"cityid" : "350582",
			"cityname" : "晋江市"
		}, {
			"cityid" : "350583",
			"cityname" : "南安市"
		} ]
	}, {
		"漳州市" : [ {
			"cityid" : "350600",
			"cityname" : "漳州市"
		}, {
			"cityid" : "350601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "350602",
			"cityname" : "芗城区"
		}, {
			"cityid" : "350603",
			"cityname" : "龙文区"
		}, {
			"cityid" : "350622",
			"cityname" : "云霄县"
		}, {
			"cityid" : "350623",
			"cityname" : "漳浦县"
		}, {
			"cityid" : "350624",
			"cityname" : "诏安县"
		}, {
			"cityid" : "350625",
			"cityname" : "长泰县"
		}, {
			"cityid" : "350626",
			"cityname" : "东山县"
		}, {
			"cityid" : "350627",
			"cityname" : "南靖县"
		}, {
			"cityid" : "350628",
			"cityname" : "平和县"
		}, {
			"cityid" : "350629",
			"cityname" : "华安县"
		}, {
			"cityid" : "350681",
			"cityname" : "龙海市"
		} ]
	}, {
		"南平市" : [ {
			"cityid" : "350700",
			"cityname" : "南平市"
		}, {
			"cityid" : "350701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "350702",
			"cityname" : "延平区"
		}, {
			"cityid" : "350721",
			"cityname" : "顺昌县"
		}, {
			"cityid" : "350722",
			"cityname" : "浦城县"
		}, {
			"cityid" : "350723",
			"cityname" : "光泽县"
		}, {
			"cityid" : "350724",
			"cityname" : "松溪县"
		}, {
			"cityid" : "350725",
			"cityname" : "政和县"
		}, {
			"cityid" : "350781",
			"cityname" : "邵武市"
		}, {
			"cityid" : "350782",
			"cityname" : "武夷山市"
		}, {
			"cityid" : "350783",
			"cityname" : "建瓯市"
		}, {
			"cityid" : "350784",
			"cityname" : "建阳市"
		} ]
	}, {
		"龙岩市" : [ {
			"cityid" : "350800",
			"cityname" : "龙岩市"
		}, {
			"cityid" : "350801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "350802",
			"cityname" : "新罗区"
		}, {
			"cityid" : "350821",
			"cityname" : "长汀县"
		}, {
			"cityid" : "350822",
			"cityname" : "永定县"
		}, {
			"cityid" : "350823",
			"cityname" : "上杭县"
		}, {
			"cityid" : "350824",
			"cityname" : "武平县"
		}, {
			"cityid" : "350825",
			"cityname" : "连城县"
		}, {
			"cityid" : "350881",
			"cityname" : "漳平市"
		} ]
	}, {
		"宁德市" : [ {
			"cityid" : "350900",
			"cityname" : "宁德市"
		}, {
			"cityid" : "350901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "350902",
			"cityname" : "蕉城区"
		}, {
			"cityid" : "350921",
			"cityname" : "霞浦县"
		}, {
			"cityid" : "350922",
			"cityname" : "古田县"
		}, {
			"cityid" : "350923",
			"cityname" : "屏南县"
		}, {
			"cityid" : "350924",
			"cityname" : "寿宁县"
		}, {
			"cityid" : "350925",
			"cityname" : "周宁县"
		}, {
			"cityid" : "350926",
			"cityname" : "柘荣县"
		}, {
			"cityid" : "350981",
			"cityname" : "福安市"
		}, {
			"cityid" : "350982",
			"cityname" : "福鼎市"
		} ]
	} ],
	"江西省" : [ {
		"cityid" : "360000",
		"cityname" : "江西省"
	}, {
		"南昌市" : [ {
			"cityid" : "360100",
			"cityname" : "南昌市"
		}, {
			"cityid" : "360101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "360102",
			"cityname" : "东湖区"
		}, {
			"cityid" : "360103",
			"cityname" : "西湖区"
		}, {
			"cityid" : "360104",
			"cityname" : "青云谱区"
		}, {
			"cityid" : "360105",
			"cityname" : "湾里区"
		}, {
			"cityid" : "360111",
			"cityname" : "青山湖区"
		}, {
			"cityid" : "360121",
			"cityname" : "南昌县"
		}, {
			"cityid" : "360122",
			"cityname" : "新建县"
		}, {
			"cityid" : "360123",
			"cityname" : "安义县"
		}, {
			"cityid" : "360124",
			"cityname" : "进贤县"
		} ]
	}, {
		"景德镇市" : [ {
			"cityid" : "360200",
			"cityname" : "景德镇市"
		}, {
			"cityid" : "360201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "360202",
			"cityname" : "昌江区"
		}, {
			"cityid" : "360203",
			"cityname" : "珠山区"
		}, {
			"cityid" : "360222",
			"cityname" : "浮梁县"
		}, {
			"cityid" : "360281",
			"cityname" : "乐平市"
		} ]
	}, {
		"萍乡市" : [ {
			"cityid" : "360300",
			"cityname" : "萍乡市"
		}, {
			"cityid" : "360301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "360302",
			"cityname" : "安源区"
		}, {
			"cityid" : "360313",
			"cityname" : "湘东区"
		}, {
			"cityid" : "360321",
			"cityname" : "莲花县"
		}, {
			"cityid" : "360322",
			"cityname" : "上栗县"
		}, {
			"cityid" : "360323",
			"cityname" : "芦溪县"
		} ]
	}, {
		"九江市" : [ {
			"cityid" : "360400",
			"cityname" : "九江市"
		}, {
			"cityid" : "360401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "360402",
			"cityname" : "庐山区"
		}, {
			"cityid" : "360403",
			"cityname" : "浔阳区"
		}, {
			"cityid" : "360421",
			"cityname" : "九江县"
		}, {
			"cityid" : "360423",
			"cityname" : "武宁县"
		}, {
			"cityid" : "360424",
			"cityname" : "修水县"
		}, {
			"cityid" : "360425",
			"cityname" : "永修县"
		}, {
			"cityid" : "360426",
			"cityname" : "德安县"
		}, {
			"cityid" : "360427",
			"cityname" : "星子县"
		}, {
			"cityid" : "360428",
			"cityname" : "都昌县"
		}, {
			"cityid" : "360429",
			"cityname" : "湖口县"
		}, {
			"cityid" : "360430",
			"cityname" : "彭泽县"
		}, {
			"cityid" : "360481",
			"cityname" : "瑞昌市"
		} ]
	}, {
		"新余市" : [ {
			"cityid" : "360500",
			"cityname" : "新余市"
		}, {
			"cityid" : "360501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "360502",
			"cityname" : "渝水区"
		}, {
			"cityid" : "360521",
			"cityname" : "分宜县"
		} ]
	}, {
		"鹰潭市" : [ {
			"cityid" : "360600",
			"cityname" : "鹰潭市"
		}, {
			"cityid" : "360601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "360602",
			"cityname" : "月湖区"
		}, {
			"cityid" : "360622",
			"cityname" : "余江县"
		}, {
			"cityid" : "360681",
			"cityname" : "贵溪市"
		} ]
	}, {
		"赣州市" : [ {
			"cityid" : "360700",
			"cityname" : "赣州市"
		}, {
			"cityid" : "360701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "360702",
			"cityname" : "章贡区"
		}, {
			"cityid" : "360721",
			"cityname" : "赣　县"
		}, {
			"cityid" : "360722",
			"cityname" : "信丰县"
		}, {
			"cityid" : "360723",
			"cityname" : "大余县"
		}, {
			"cityid" : "360724",
			"cityname" : "上犹县"
		}, {
			"cityid" : "360725",
			"cityname" : "崇义县"
		}, {
			"cityid" : "360726",
			"cityname" : "安远县"
		}, {
			"cityid" : "360727",
			"cityname" : "龙南县"
		}, {
			"cityid" : "360728",
			"cityname" : "定南县"
		}, {
			"cityid" : "360729",
			"cityname" : "全南县"
		}, {
			"cityid" : "360730",
			"cityname" : "宁都县"
		}, {
			"cityid" : "360731",
			"cityname" : "于都县"
		}, {
			"cityid" : "360732",
			"cityname" : "兴国县"
		}, {
			"cityid" : "360733",
			"cityname" : "会昌县"
		}, {
			"cityid" : "360734",
			"cityname" : "寻乌县"
		}, {
			"cityid" : "360735",
			"cityname" : "石城县"
		}, {
			"cityid" : "360781",
			"cityname" : "瑞金市"
		}, {
			"cityid" : "360782",
			"cityname" : "南康市"
		} ]
	}, {
		"吉安市" : [ {
			"cityid" : "360800",
			"cityname" : "吉安市"
		}, {
			"cityid" : "360801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "360802",
			"cityname" : "吉州区"
		}, {
			"cityid" : "360803",
			"cityname" : "青原区"
		}, {
			"cityid" : "360821",
			"cityname" : "吉安县"
		}, {
			"cityid" : "360822",
			"cityname" : "吉水县"
		}, {
			"cityid" : "360823",
			"cityname" : "峡江县"
		}, {
			"cityid" : "360824",
			"cityname" : "新干县"
		}, {
			"cityid" : "360825",
			"cityname" : "永丰县"
		}, {
			"cityid" : "360826",
			"cityname" : "泰和县"
		}, {
			"cityid" : "360827",
			"cityname" : "遂川县"
		}, {
			"cityid" : "360828",
			"cityname" : "万安县"
		}, {
			"cityid" : "360829",
			"cityname" : "安福县"
		}, {
			"cityid" : "360830",
			"cityname" : "永新县"
		}, {
			"cityid" : "360881",
			"cityname" : "井冈山市"
		} ]
	}, {
		"宜春市" : [ {
			"cityid" : "360900",
			"cityname" : "宜春市"
		}, {
			"cityid" : "360901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "360902",
			"cityname" : "袁州区"
		}, {
			"cityid" : "360921",
			"cityname" : "奉新县"
		}, {
			"cityid" : "360922",
			"cityname" : "万载县"
		}, {
			"cityid" : "360923",
			"cityname" : "上高县"
		}, {
			"cityid" : "360924",
			"cityname" : "宜丰县"
		}, {
			"cityid" : "360925",
			"cityname" : "靖安县"
		}, {
			"cityid" : "360926",
			"cityname" : "铜鼓县"
		}, {
			"cityid" : "360981",
			"cityname" : "丰城市"
		}, {
			"cityid" : "360982",
			"cityname" : "樟树市"
		}, {
			"cityid" : "360983",
			"cityname" : "高安市"
		} ]
	}, {
		"抚州市" : [ {
			"cityid" : "361000",
			"cityname" : "抚州市"
		}, {
			"cityid" : "361001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "361002",
			"cityname" : "临川区"
		}, {
			"cityid" : "361021",
			"cityname" : "南城县"
		}, {
			"cityid" : "361022",
			"cityname" : "黎川县"
		}, {
			"cityid" : "361023",
			"cityname" : "南丰县"
		}, {
			"cityid" : "361024",
			"cityname" : "崇仁县"
		}, {
			"cityid" : "361025",
			"cityname" : "乐安县"
		}, {
			"cityid" : "361026",
			"cityname" : "宜黄县"
		}, {
			"cityid" : "361027",
			"cityname" : "金溪县"
		}, {
			"cityid" : "361028",
			"cityname" : "资溪县"
		}, {
			"cityid" : "361029",
			"cityname" : "东乡县"
		}, {
			"cityid" : "361030",
			"cityname" : "广昌县"
		} ]
	}, {
		"上饶市" : [ {
			"cityid" : "361100",
			"cityname" : "上饶市"
		}, {
			"cityid" : "361101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "361102",
			"cityname" : "信州区"
		}, {
			"cityid" : "361121",
			"cityname" : "上饶县"
		}, {
			"cityid" : "361122",
			"cityname" : "广丰县"
		}, {
			"cityid" : "361123",
			"cityname" : "玉山县"
		}, {
			"cityid" : "361124",
			"cityname" : "铅山县"
		}, {
			"cityid" : "361125",
			"cityname" : "横峰县"
		}, {
			"cityid" : "361126",
			"cityname" : "弋阳县"
		}, {
			"cityid" : "361127",
			"cityname" : "余干县"
		}, {
			"cityid" : "361128",
			"cityname" : "鄱阳县"
		}, {
			"cityid" : "361129",
			"cityname" : "万年县"
		}, {
			"cityid" : "361130",
			"cityname" : "婺源县"
		}, {
			"cityid" : "361181",
			"cityname" : "德兴市"
		} ]
	} ],
	"山东省" : [ {
		"cityid" : "370000",
		"cityname" : "山东省"
	}, {
		"济南市" : [ {
			"cityid" : "370100",
			"cityname" : "济南市"
		}, {
			"cityid" : "370101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "370102",
			"cityname" : "历下区"
		}, {
			"cityid" : "370103",
			"cityname" : "市中区"
		}, {
			"cityid" : "370104",
			"cityname" : "槐荫区"
		}, {
			"cityid" : "370105",
			"cityname" : "天桥区"
		}, {
			"cityid" : "370112",
			"cityname" : "历城区"
		}, {
			"cityid" : "370113",
			"cityname" : "长清区"
		}, {
			"cityid" : "370124",
			"cityname" : "平阴县"
		}, {
			"cityid" : "370125",
			"cityname" : "济阳县"
		}, {
			"cityid" : "370126",
			"cityname" : "商河县"
		}, {
			"cityid" : "370181",
			"cityname" : "章丘市"
		} ]
	}, {
		"青岛市" : [ {
			"cityid" : "370200",
			"cityname" : "青岛市"
		}, {
			"cityid" : "370201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "370202",
			"cityname" : "市南区"
		}, {
			"cityid" : "370203",
			"cityname" : "市北区"
		}, {
			"cityid" : "370205",
			"cityname" : "四方区"
		}, {
			"cityid" : "370211",
			"cityname" : "黄岛区"
		}, {
			"cityid" : "370212",
			"cityname" : "崂山区"
		}, {
			"cityid" : "370213",
			"cityname" : "李沧区"
		}, {
			"cityid" : "370214",
			"cityname" : "城阳区"
		}, {
			"cityid" : "370281",
			"cityname" : "胶州市"
		}, {
			"cityid" : "370282",
			"cityname" : "即墨市"
		}, {
			"cityid" : "370283",
			"cityname" : "平度市"
		}, {
			"cityid" : "370284",
			"cityname" : "胶南市"
		}, {
			"cityid" : "370285",
			"cityname" : "莱西市"
		} ]
	}, {
		"淄博市" : [ {
			"cityid" : "370300",
			"cityname" : "淄博市"
		}, {
			"cityid" : "370301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "370302",
			"cityname" : "淄川区"
		}, {
			"cityid" : "370303",
			"cityname" : "张店区"
		}, {
			"cityid" : "370304",
			"cityname" : "博山区"
		}, {
			"cityid" : "370305",
			"cityname" : "临淄区"
		}, {
			"cityid" : "370306",
			"cityname" : "周村区"
		}, {
			"cityid" : "370321",
			"cityname" : "桓台县"
		}, {
			"cityid" : "370322",
			"cityname" : "高青县"
		}, {
			"cityid" : "370323",
			"cityname" : "沂源县"
		} ]
	}, {
		"枣庄市" : [ {
			"cityid" : "370400",
			"cityname" : "枣庄市"
		}, {
			"cityid" : "370401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "370402",
			"cityname" : "市中区"
		}, {
			"cityid" : "370403",
			"cityname" : "薛城区"
		}, {
			"cityid" : "370404",
			"cityname" : "峄城区"
		}, {
			"cityid" : "370405",
			"cityname" : "台儿庄区"
		}, {
			"cityid" : "370406",
			"cityname" : "山亭区"
		}, {
			"cityid" : "370481",
			"cityname" : "滕州市"
		} ]
	}, {
		"东营市" : [ {
			"cityid" : "370500",
			"cityname" : "东营市"
		}, {
			"cityid" : "370501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "370502",
			"cityname" : "东营区"
		}, {
			"cityid" : "370503",
			"cityname" : "河口区"
		}, {
			"cityid" : "370521",
			"cityname" : "垦利县"
		}, {
			"cityid" : "370522",
			"cityname" : "利津县"
		}, {
			"cityid" : "370523",
			"cityname" : "广饶县"
		} ]
	}, {
		"烟台市" : [ {
			"cityid" : "370600",
			"cityname" : "烟台市"
		}, {
			"cityid" : "370601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "370602",
			"cityname" : "芝罘区"
		}, {
			"cityid" : "370611",
			"cityname" : "福山区"
		}, {
			"cityid" : "370612",
			"cityname" : "牟平区"
		}, {
			"cityid" : "370613",
			"cityname" : "莱山区"
		}, {
			"cityid" : "370634",
			"cityname" : "长岛县"
		}, {
			"cityid" : "370681",
			"cityname" : "龙口市"
		}, {
			"cityid" : "370682",
			"cityname" : "莱阳市"
		}, {
			"cityid" : "370683",
			"cityname" : "莱州市"
		}, {
			"cityid" : "370684",
			"cityname" : "蓬莱市"
		}, {
			"cityid" : "370685",
			"cityname" : "招远市"
		}, {
			"cityid" : "370686",
			"cityname" : "栖霞市"
		}, {
			"cityid" : "370687",
			"cityname" : "海阳市"
		} ]
	}, {
		"潍坊市" : [ {
			"cityid" : "370700",
			"cityname" : "潍坊市"
		}, {
			"cityid" : "370701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "370702",
			"cityname" : "潍城区"
		}, {
			"cityid" : "370703",
			"cityname" : "寒亭区"
		}, {
			"cityid" : "370704",
			"cityname" : "坊子区"
		}, {
			"cityid" : "370705",
			"cityname" : "奎文区"
		}, {
			"cityid" : "370724",
			"cityname" : "临朐县"
		}, {
			"cityid" : "370725",
			"cityname" : "昌乐县"
		}, {
			"cityid" : "370781",
			"cityname" : "青州市"
		}, {
			"cityid" : "370782",
			"cityname" : "诸城市"
		}, {
			"cityid" : "370783",
			"cityname" : "寿光市"
		}, {
			"cityid" : "370784",
			"cityname" : "安丘市"
		}, {
			"cityid" : "370785",
			"cityname" : "高密市"
		}, {
			"cityid" : "370786",
			"cityname" : "昌邑市"
		} ]
	}, {
		"济宁市" : [ {
			"cityid" : "370800",
			"cityname" : "济宁市"
		}, {
			"cityid" : "370801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "370802",
			"cityname" : "市中区"
		}, {
			"cityid" : "370811",
			"cityname" : "任城区"
		}, {
			"cityid" : "370826",
			"cityname" : "微山县"
		}, {
			"cityid" : "370827",
			"cityname" : "鱼台县"
		}, {
			"cityid" : "370828",
			"cityname" : "金乡县"
		}, {
			"cityid" : "370829",
			"cityname" : "嘉祥县"
		}, {
			"cityid" : "370830",
			"cityname" : "汶上县"
		}, {
			"cityid" : "370831",
			"cityname" : "泗水县"
		}, {
			"cityid" : "370832",
			"cityname" : "梁山县"
		}, {
			"cityid" : "370881",
			"cityname" : "曲阜市"
		}, {
			"cityid" : "370882",
			"cityname" : "兖州市"
		}, {
			"cityid" : "370883",
			"cityname" : "邹城市"
		} ]
	}, {
		"泰安市" : [ {
			"cityid" : "370900",
			"cityname" : "泰安市"
		}, {
			"cityid" : "370901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "370902",
			"cityname" : "泰山区"
		}, {
			"cityid" : "370911",
			"cityname" : "岱岳区"
		}, {
			"cityid" : "370921",
			"cityname" : "宁阳县"
		}, {
			"cityid" : "370923",
			"cityname" : "东平县"
		}, {
			"cityid" : "370982",
			"cityname" : "新泰市"
		}, {
			"cityid" : "370983",
			"cityname" : "肥城市"
		} ]
	}, {
		"威海市" : [ {
			"cityid" : "371000",
			"cityname" : "威海市"
		}, {
			"cityid" : "371001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "371002",
			"cityname" : "环翠区"
		}, {
			"cityid" : "371081",
			"cityname" : "文登市"
		}, {
			"cityid" : "371082",
			"cityname" : "荣成市"
		}, {
			"cityid" : "371083",
			"cityname" : "乳山市"
		} ]
	}, {
		"日照市" : [ {
			"cityid" : "371100",
			"cityname" : "日照市"
		}, {
			"cityid" : "371101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "371102",
			"cityname" : "东港区"
		}, {
			"cityid" : "371103",
			"cityname" : "岚山区"
		}, {
			"cityid" : "371121",
			"cityname" : "五莲县"
		}, {
			"cityid" : "371122",
			"cityname" : "莒　县"
		} ]
	}, {
		"莱芜市" : [ {
			"cityid" : "371200",
			"cityname" : "莱芜市"
		}, {
			"cityid" : "371201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "371202",
			"cityname" : "莱城区"
		}, {
			"cityid" : "371203",
			"cityname" : "钢城区"
		} ]
	}, {
		"临沂市" : [ {
			"cityid" : "371300",
			"cityname" : "临沂市"
		}, {
			"cityid" : "371301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "371302",
			"cityname" : "兰山区"
		}, {
			"cityid" : "371311",
			"cityname" : "罗庄区"
		}, {
			"cityid" : "371312",
			"cityname" : "河东区"
		}, {
			"cityid" : "371321",
			"cityname" : "沂南县"
		}, {
			"cityid" : "371322",
			"cityname" : "郯城县"
		}, {
			"cityid" : "371323",
			"cityname" : "沂水县"
		}, {
			"cityid" : "371324",
			"cityname" : "苍山县"
		}, {
			"cityid" : "371325",
			"cityname" : "费　县"
		}, {
			"cityid" : "371326",
			"cityname" : "平邑县"
		}, {
			"cityid" : "371327",
			"cityname" : "莒南县"
		}, {
			"cityid" : "371328",
			"cityname" : "蒙阴县"
		}, {
			"cityid" : "371329",
			"cityname" : "临沭县"
		} ]
	}, {
		"德州市" : [ {
			"cityid" : "371400",
			"cityname" : "德州市"
		}, {
			"cityid" : "371401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "371402",
			"cityname" : "德城区"
		}, {
			"cityid" : "371421",
			"cityname" : "陵　县"
		}, {
			"cityid" : "371422",
			"cityname" : "宁津县"
		}, {
			"cityid" : "371423",
			"cityname" : "庆云县"
		}, {
			"cityid" : "371424",
			"cityname" : "临邑县"
		}, {
			"cityid" : "371425",
			"cityname" : "齐河县"
		}, {
			"cityid" : "371426",
			"cityname" : "平原县"
		}, {
			"cityid" : "371427",
			"cityname" : "夏津县"
		}, {
			"cityid" : "371428",
			"cityname" : "武城县"
		}, {
			"cityid" : "371481",
			"cityname" : "乐陵市"
		}, {
			"cityid" : "371482",
			"cityname" : "禹城市"
		} ]
	}, {
		"聊城市" : [ {
			"cityid" : "371500",
			"cityname" : "聊城市"
		}, {
			"cityid" : "371501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "371502",
			"cityname" : "东昌府区"
		}, {
			"cityid" : "371521",
			"cityname" : "阳谷县"
		}, {
			"cityid" : "371522",
			"cityname" : "莘　县"
		}, {
			"cityid" : "371523",
			"cityname" : "茌平县"
		}, {
			"cityid" : "371524",
			"cityname" : "东阿县"
		}, {
			"cityid" : "371525",
			"cityname" : "冠　县"
		}, {
			"cityid" : "371526",
			"cityname" : "高唐县"
		}, {
			"cityid" : "371581",
			"cityname" : "临清市"
		} ]
	}, {
		"滨州市" : [ {
			"cityid" : "371600",
			"cityname" : "滨州市"
		}, {
			"cityid" : "371601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "371602",
			"cityname" : "滨城区"
		}, {
			"cityid" : "371621",
			"cityname" : "惠民县"
		}, {
			"cityid" : "371622",
			"cityname" : "阳信县"
		}, {
			"cityid" : "371623",
			"cityname" : "无棣县"
		}, {
			"cityid" : "371624",
			"cityname" : "沾化县"
		}, {
			"cityid" : "371625",
			"cityname" : "博兴县"
		}, {
			"cityid" : "371626",
			"cityname" : "邹平县"
		} ]
	}, {
		"菏泽市" : [ {
			"cityid" : "371700",
			"cityname" : "菏泽市"
		}, {
			"cityid" : "371701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "371702",
			"cityname" : "牡丹区"
		}, {
			"cityid" : "371721",
			"cityname" : "曹　县"
		}, {
			"cityid" : "371722",
			"cityname" : "单　县"
		}, {
			"cityid" : "371723",
			"cityname" : "成武县"
		}, {
			"cityid" : "371724",
			"cityname" : "巨野县"
		}, {
			"cityid" : "371725",
			"cityname" : "郓城县"
		}, {
			"cityid" : "371726",
			"cityname" : "鄄城县"
		}, {
			"cityid" : "371727",
			"cityname" : "定陶县"
		}, {
			"cityid" : "371728",
			"cityname" : "东明县"
		} ]
	} ],
	"河南省" : [ {
		"cityid" : "410000",
		"cityname" : "河南省"
	}, {
		"郑州市" : [ {
			"cityid" : "410100",
			"cityname" : "郑州市"
		}, {
			"cityid" : "410101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "410102",
			"cityname" : "中原区"
		}, {
			"cityid" : "410103",
			"cityname" : "二七区"
		}, {
			"cityid" : "410104",
			"cityname" : "管城回族区"
		}, {
			"cityid" : "410105",
			"cityname" : "金水区"
		}, {
			"cityid" : "410106",
			"cityname" : "上街区"
		}, {
			"cityid" : "410108",
			"cityname" : "惠济区"
		}, {
			"cityid" : "410122",
			"cityname" : "中牟县"
		}, {
			"cityid" : "410181",
			"cityname" : "巩义市"
		}, {
			"cityid" : "410182",
			"cityname" : "荥阳市"
		}, {
			"cityid" : "410183",
			"cityname" : "新密市"
		}, {
			"cityid" : "410184",
			"cityname" : "新郑市"
		}, {
			"cityid" : "410185",
			"cityname" : "登封市"
		} ]
	}, {
		"开封市" : [ {
			"cityid" : "410200",
			"cityname" : "开封市"
		}, {
			"cityid" : "410201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "410202",
			"cityname" : "龙亭区"
		}, {
			"cityid" : "410203",
			"cityname" : "顺河回族区"
		}, {
			"cityid" : "410204",
			"cityname" : "鼓楼区"
		}, {
			"cityid" : "410205",
			"cityname" : "禹王台区"
		}, {
			"cityid" : "410211",
			"cityname" : "金明区"
		}, {
			"cityid" : "410221",
			"cityname" : "杞　县"
		}, {
			"cityid" : "410222",
			"cityname" : "通许县"
		}, {
			"cityid" : "410223",
			"cityname" : "尉氏县"
		}, {
			"cityid" : "410224",
			"cityname" : "开封县"
		}, {
			"cityid" : "410225",
			"cityname" : "兰考县"
		} ]
	}, {
		"洛阳市" : [ {
			"cityid" : "410300",
			"cityname" : "洛阳市"
		}, {
			"cityid" : "410301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "410302",
			"cityname" : "老城区"
		}, {
			"cityid" : "410303",
			"cityname" : "西工区"
		}, {
			"cityid" : "410304",
			"cityname" : "瀍河回族区"
		}, {
			"cityid" : "410305",
			"cityname" : "涧西区"
		}, {
			"cityid" : "410306",
			"cityname" : "吉利区"
		}, {
			"cityid" : "410311",
			"cityname" : "洛龙区"
		}, {
			"cityid" : "410322",
			"cityname" : "孟津县"
		}, {
			"cityid" : "410323",
			"cityname" : "新安县"
		}, {
			"cityid" : "410324",
			"cityname" : "栾川县"
		}, {
			"cityid" : "410325",
			"cityname" : "嵩　县"
		}, {
			"cityid" : "410326",
			"cityname" : "汝阳县"
		}, {
			"cityid" : "410327",
			"cityname" : "宜阳县"
		}, {
			"cityid" : "410328",
			"cityname" : "洛宁县"
		}, {
			"cityid" : "410329",
			"cityname" : "伊川县"
		}, {
			"cityid" : "410381",
			"cityname" : "偃师市"
		} ]
	}, {
		"平顶山市" : [ {
			"cityid" : "410400",
			"cityname" : "平顶山市"
		}, {
			"cityid" : "410401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "410402",
			"cityname" : "新华区"
		}, {
			"cityid" : "410403",
			"cityname" : "卫东区"
		}, {
			"cityid" : "410404",
			"cityname" : "石龙区"
		}, {
			"cityid" : "410411",
			"cityname" : "湛河区"
		}, {
			"cityid" : "410421",
			"cityname" : "宝丰县"
		}, {
			"cityid" : "410422",
			"cityname" : "叶　县"
		}, {
			"cityid" : "410423",
			"cityname" : "鲁山县"
		}, {
			"cityid" : "410425",
			"cityname" : "郏　县"
		}, {
			"cityid" : "410481",
			"cityname" : "舞钢市"
		}, {
			"cityid" : "410482",
			"cityname" : "汝州市"
		} ]
	}, {
		"安阳市" : [ {
			"cityid" : "410500",
			"cityname" : "安阳市"
		}, {
			"cityid" : "410501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "410502",
			"cityname" : "文峰区"
		}, {
			"cityid" : "410503",
			"cityname" : "北关区"
		}, {
			"cityid" : "410505",
			"cityname" : "殷都区"
		}, {
			"cityid" : "410506",
			"cityname" : "龙安区"
		}, {
			"cityid" : "410522",
			"cityname" : "安阳县"
		}, {
			"cityid" : "410523",
			"cityname" : "汤阴县"
		}, {
			"cityid" : "410526",
			"cityname" : "滑　县"
		}, {
			"cityid" : "410527",
			"cityname" : "内黄县"
		}, {
			"cityid" : "410581",
			"cityname" : "林州市"
		} ]
	}, {
		"鹤壁市" : [ {
			"cityid" : "410600",
			"cityname" : "鹤壁市"
		}, {
			"cityid" : "410601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "410602",
			"cityname" : "鹤山区"
		}, {
			"cityid" : "410603",
			"cityname" : "山城区"
		}, {
			"cityid" : "410611",
			"cityname" : "淇滨区"
		}, {
			"cityid" : "410621",
			"cityname" : "浚　县"
		}, {
			"cityid" : "410622",
			"cityname" : "淇　县"
		} ]
	}, {
		"新乡市" : [ {
			"cityid" : "410700",
			"cityname" : "新乡市"
		}, {
			"cityid" : "410701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "410702",
			"cityname" : "红旗区"
		}, {
			"cityid" : "410703",
			"cityname" : "卫滨区"
		}, {
			"cityid" : "410704",
			"cityname" : "凤泉区"
		}, {
			"cityid" : "410711",
			"cityname" : "牧野区"
		}, {
			"cityid" : "410721",
			"cityname" : "新乡县"
		}, {
			"cityid" : "410724",
			"cityname" : "获嘉县"
		}, {
			"cityid" : "410725",
			"cityname" : "原阳县"
		}, {
			"cityid" : "410726",
			"cityname" : "延津县"
		}, {
			"cityid" : "410727",
			"cityname" : "封丘县"
		}, {
			"cityid" : "410728",
			"cityname" : "长垣县"
		}, {
			"cityid" : "410781",
			"cityname" : "卫辉市"
		}, {
			"cityid" : "410782",
			"cityname" : "辉县市"
		} ]
	}, {
		"焦作市" : [ {
			"cityid" : "410800",
			"cityname" : "焦作市"
		}, {
			"cityid" : "410801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "410802",
			"cityname" : "解放区"
		}, {
			"cityid" : "410803",
			"cityname" : "中站区"
		}, {
			"cityid" : "410804",
			"cityname" : "马村区"
		}, {
			"cityid" : "410811",
			"cityname" : "山阳区"
		}, {
			"cityid" : "410821",
			"cityname" : "修武县"
		}, {
			"cityid" : "410822",
			"cityname" : "博爱县"
		}, {
			"cityid" : "410823",
			"cityname" : "武陟县"
		}, {
			"cityid" : "410825",
			"cityname" : "温　县"
		}, {
			"cityid" : "410882",
			"cityname" : "沁阳市"
		}, {
			"cityid" : "410883",
			"cityname" : "孟州市"
		} ]
	}, {
		"濮阳市" : [ {
			"cityid" : "410900",
			"cityname" : "濮阳市"
		}, {
			"cityid" : "410901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "410902",
			"cityname" : "华龙区"
		}, {
			"cityid" : "410922",
			"cityname" : "清丰县"
		}, {
			"cityid" : "410923",
			"cityname" : "南乐县"
		}, {
			"cityid" : "410926",
			"cityname" : "范　县"
		}, {
			"cityid" : "410927",
			"cityname" : "台前县"
		}, {
			"cityid" : "410928",
			"cityname" : "濮阳县"
		} ]
	}, {
		"许昌市" : [ {
			"cityid" : "411000",
			"cityname" : "许昌市"
		}, {
			"cityid" : "411001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "411002",
			"cityname" : "魏都区"
		}, {
			"cityid" : "411023",
			"cityname" : "许昌县"
		}, {
			"cityid" : "411024",
			"cityname" : "鄢陵县"
		}, {
			"cityid" : "411025",
			"cityname" : "襄城县"
		}, {
			"cityid" : "411081",
			"cityname" : "禹州市"
		}, {
			"cityid" : "411082",
			"cityname" : "长葛市"
		} ]
	}, {
		"漯河市" : [ {
			"cityid" : "411100",
			"cityname" : "漯河市"
		}, {
			"cityid" : "411101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "411102",
			"cityname" : "源汇区"
		}, {
			"cityid" : "411103",
			"cityname" : "郾城区"
		}, {
			"cityid" : "411104",
			"cityname" : "召陵区"
		}, {
			"cityid" : "411121",
			"cityname" : "舞阳县"
		}, {
			"cityid" : "411122",
			"cityname" : "临颍县"
		} ]
	}, {
		"三门峡市" : [ {
			"cityid" : "411200",
			"cityname" : "三门峡市"
		}, {
			"cityid" : "411201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "411202",
			"cityname" : "湖滨区"
		}, {
			"cityid" : "411221",
			"cityname" : "渑池县"
		}, {
			"cityid" : "411222",
			"cityname" : "陕　县"
		}, {
			"cityid" : "411224",
			"cityname" : "卢氏县"
		}, {
			"cityid" : "411281",
			"cityname" : "义马市"
		}, {
			"cityid" : "411282",
			"cityname" : "灵宝市"
		} ]
	}, {
		"南阳市" : [ {
			"cityid" : "411300",
			"cityname" : "南阳市"
		}, {
			"cityid" : "411301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "411302",
			"cityname" : "宛城区"
		}, {
			"cityid" : "411303",
			"cityname" : "卧龙区"
		}, {
			"cityid" : "411321",
			"cityname" : "南召县"
		}, {
			"cityid" : "411322",
			"cityname" : "方城县"
		}, {
			"cityid" : "411323",
			"cityname" : "西峡县"
		}, {
			"cityid" : "411324",
			"cityname" : "镇平县"
		}, {
			"cityid" : "411325",
			"cityname" : "内乡县"
		}, {
			"cityid" : "411326",
			"cityname" : "淅川县"
		}, {
			"cityid" : "411327",
			"cityname" : "社旗县"
		}, {
			"cityid" : "411328",
			"cityname" : "唐河县"
		}, {
			"cityid" : "411329",
			"cityname" : "新野县"
		}, {
			"cityid" : "411330",
			"cityname" : "桐柏县"
		}, {
			"cityid" : "411381",
			"cityname" : "邓州市"
		} ]
	}, {
		"商丘市" : [ {
			"cityid" : "411400",
			"cityname" : "商丘市"
		}, {
			"cityid" : "411401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "411402",
			"cityname" : "梁园区"
		}, {
			"cityid" : "411403",
			"cityname" : "睢阳区"
		}, {
			"cityid" : "411421",
			"cityname" : "民权县"
		}, {
			"cityid" : "411422",
			"cityname" : "睢　县"
		}, {
			"cityid" : "411423",
			"cityname" : "宁陵县"
		}, {
			"cityid" : "411424",
			"cityname" : "柘城县"
		}, {
			"cityid" : "411425",
			"cityname" : "虞城县"
		}, {
			"cityid" : "411426",
			"cityname" : "夏邑县"
		}, {
			"cityid" : "411481",
			"cityname" : "永城市"
		} ]
	}, {
		"信阳市" : [ {
			"cityid" : "411500",
			"cityname" : "信阳市"
		}, {
			"cityid" : "411501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "411502",
			"cityname" : "浉河区"
		}, {
			"cityid" : "411503",
			"cityname" : "平桥区"
		}, {
			"cityid" : "411521",
			"cityname" : "罗山县"
		}, {
			"cityid" : "411522",
			"cityname" : "光山县"
		}, {
			"cityid" : "411523",
			"cityname" : "新　县"
		}, {
			"cityid" : "411524",
			"cityname" : "商城县"
		}, {
			"cityid" : "411525",
			"cityname" : "固始县"
		}, {
			"cityid" : "411526",
			"cityname" : "潢川县"
		}, {
			"cityid" : "411527",
			"cityname" : "淮滨县"
		}, {
			"cityid" : "411528",
			"cityname" : "息　县"
		} ]
	}, {
		"周口市" : [ {
			"cityid" : "411600",
			"cityname" : "周口市"
		}, {
			"cityid" : "411601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "411602",
			"cityname" : "川汇区"
		}, {
			"cityid" : "411621",
			"cityname" : "扶沟县"
		}, {
			"cityid" : "411622",
			"cityname" : "西华县"
		}, {
			"cityid" : "411623",
			"cityname" : "商水县"
		}, {
			"cityid" : "411624",
			"cityname" : "沈丘县"
		}, {
			"cityid" : "411625",
			"cityname" : "郸城县"
		}, {
			"cityid" : "411626",
			"cityname" : "淮阳县"
		}, {
			"cityid" : "411627",
			"cityname" : "太康县"
		}, {
			"cityid" : "411628",
			"cityname" : "鹿邑县"
		}, {
			"cityid" : "411681",
			"cityname" : "项城市"
		} ]
	}, {
		"驻马店市" : [ {
			"cityid" : "411700",
			"cityname" : "驻马店市"
		}, {
			"cityid" : "411701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "411702",
			"cityname" : "驿城区"
		}, {
			"cityid" : "411721",
			"cityname" : "西平县"
		}, {
			"cityid" : "411722",
			"cityname" : "上蔡县"
		}, {
			"cityid" : "411723",
			"cityname" : "平舆县"
		}, {
			"cityid" : "411724",
			"cityname" : "正阳县"
		}, {
			"cityid" : "411725",
			"cityname" : "确山县"
		}, {
			"cityid" : "411726",
			"cityname" : "泌阳县"
		}, {
			"cityid" : "411727",
			"cityname" : "汝南县"
		}, {
			"cityid" : "411728",
			"cityname" : "遂平县"
		}, {
			"cityid" : "411729",
			"cityname" : "新蔡县"
		} ]
	}, {
		"市辖区" : [ {
			"cityid" : "419000",
			"cityname" : "省直辖县级行政区划"
		}, {
			"cityid" : "419001",
			"cityname" : "济源市"
		} ]
	} ],
	"湖北省" : [ {
		"cityid" : "420000",
		"cityname" : "湖北省"
	}, {
		"武汉市" : [ {
			"cityid" : "420100",
			"cityname" : "武汉市"
		}, {
			"cityid" : "420101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "420102",
			"cityname" : "江岸区"
		}, {
			"cityid" : "420103",
			"cityname" : "江汉区"
		}, {
			"cityid" : "420104",
			"cityname" : "硚口区"
		}, {
			"cityid" : "420105",
			"cityname" : "汉阳区"
		}, {
			"cityid" : "420106",
			"cityname" : "武昌区"
		}, {
			"cityid" : "420107",
			"cityname" : "青山区"
		}, {
			"cityid" : "420111",
			"cityname" : "洪山区"
		}, {
			"cityid" : "420112",
			"cityname" : "东西湖区"
		}, {
			"cityid" : "420113",
			"cityname" : "汉南区"
		}, {
			"cityid" : "420114",
			"cityname" : "蔡甸区"
		}, {
			"cityid" : "420115",
			"cityname" : "江夏区"
		}, {
			"cityid" : "420116",
			"cityname" : "黄陂区"
		}, {
			"cityid" : "420117",
			"cityname" : "新洲区"
		} ]
	}, {
		"黄石市" : [ {
			"cityid" : "420200",
			"cityname" : "黄石市"
		}, {
			"cityid" : "420201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "420202",
			"cityname" : "黄石港区"
		}, {
			"cityid" : "420203",
			"cityname" : "西塞山区"
		}, {
			"cityid" : "420204",
			"cityname" : "下陆区"
		}, {
			"cityid" : "420205",
			"cityname" : "铁山区"
		}, {
			"cityid" : "420222",
			"cityname" : "阳新县"
		}, {
			"cityid" : "420281",
			"cityname" : "大冶市"
		} ]
	}, {
		"十堰市" : [ {
			"cityid" : "420300",
			"cityname" : "十堰市"
		}, {
			"cityid" : "420301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "420302",
			"cityname" : "茅箭区"
		}, {
			"cityid" : "420303",
			"cityname" : "张湾区"
		}, {
			"cityid" : "420321",
			"cityname" : "郧　县"
		}, {
			"cityid" : "420322",
			"cityname" : "郧西县"
		}, {
			"cityid" : "420323",
			"cityname" : "竹山县"
		}, {
			"cityid" : "420324",
			"cityname" : "竹溪县"
		}, {
			"cityid" : "420325",
			"cityname" : "房　县"
		}, {
			"cityid" : "420381",
			"cityname" : "丹江口市"
		} ]
	}, {
		"宜昌市" : [ {
			"cityid" : "420500",
			"cityname" : "宜昌市"
		}, {
			"cityid" : "420501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "420502",
			"cityname" : "西陵区"
		}, {
			"cityid" : "420503",
			"cityname" : "伍家岗区"
		}, {
			"cityid" : "420504",
			"cityname" : "点军区"
		}, {
			"cityid" : "420505",
			"cityname" : "猇亭区"
		}, {
			"cityid" : "420506",
			"cityname" : "夷陵区"
		}, {
			"cityid" : "420525",
			"cityname" : "远安县"
		}, {
			"cityid" : "420526",
			"cityname" : "兴山县"
		}, {
			"cityid" : "420527",
			"cityname" : "秭归县"
		}, {
			"cityid" : "420528",
			"cityname" : "长阳土家族自治县"
		}, {
			"cityid" : "420529",
			"cityname" : "五峰土家族自治县"
		}, {
			"cityid" : "420581",
			"cityname" : "宜都市"
		}, {
			"cityid" : "420582",
			"cityname" : "当阳市"
		}, {
			"cityid" : "420583",
			"cityname" : "枝江市"
		} ]
	}, {
		"襄樊市" : [ {
			"cityid" : "420600",
			"cityname" : "襄樊市"
		}, {
			"cityid" : "420601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "420602",
			"cityname" : "襄城区"
		}, {
			"cityid" : "420606",
			"cityname" : "樊城区"
		}, {
			"cityid" : "420607",
			"cityname" : "襄阳区"
		}, {
			"cityid" : "420624",
			"cityname" : "南漳县"
		}, {
			"cityid" : "420625",
			"cityname" : "谷城县"
		}, {
			"cityid" : "420626",
			"cityname" : "保康县"
		}, {
			"cityid" : "420682",
			"cityname" : "老河口市"
		}, {
			"cityid" : "420683",
			"cityname" : "枣阳市"
		}, {
			"cityid" : "420684",
			"cityname" : "宜城市"
		} ]
	}, {
		"鄂州市" : [ {
			"cityid" : "420700",
			"cityname" : "鄂州市"
		}, {
			"cityid" : "420701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "420702",
			"cityname" : "梁子湖区"
		}, {
			"cityid" : "420703",
			"cityname" : "华容区"
		}, {
			"cityid" : "420704",
			"cityname" : "鄂城区"
		} ]
	}, {
		"荆门市" : [ {
			"cityid" : "420800",
			"cityname" : "荆门市"
		}, {
			"cityid" : "420801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "420802",
			"cityname" : "东宝区"
		}, {
			"cityid" : "420804",
			"cityname" : "掇刀区"
		}, {
			"cityid" : "420821",
			"cityname" : "京山县"
		}, {
			"cityid" : "420822",
			"cityname" : "沙洋县"
		}, {
			"cityid" : "420881",
			"cityname" : "钟祥市"
		} ]
	}, {
		"孝感市" : [ {
			"cityid" : "420900",
			"cityname" : "孝感市"
		}, {
			"cityid" : "420901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "420902",
			"cityname" : "孝南区"
		}, {
			"cityid" : "420921",
			"cityname" : "孝昌县"
		}, {
			"cityid" : "420922",
			"cityname" : "大悟县"
		}, {
			"cityid" : "420923",
			"cityname" : "云梦县"
		}, {
			"cityid" : "420981",
			"cityname" : "应城市"
		}, {
			"cityid" : "420982",
			"cityname" : "安陆市"
		}, {
			"cityid" : "420984",
			"cityname" : "汉川市"
		} ]
	}, {
		"荆州市" : [ {
			"cityid" : "421000",
			"cityname" : "荆州市"
		}, {
			"cityid" : "421001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "421002",
			"cityname" : "沙市区"
		}, {
			"cityid" : "421003",
			"cityname" : "荆州区"
		}, {
			"cityid" : "421022",
			"cityname" : "公安县"
		}, {
			"cityid" : "421023",
			"cityname" : "监利县"
		}, {
			"cityid" : "421024",
			"cityname" : "江陵县"
		}, {
			"cityid" : "421081",
			"cityname" : "石首市"
		}, {
			"cityid" : "421083",
			"cityname" : "洪湖市"
		}, {
			"cityid" : "421087",
			"cityname" : "松滋市"
		} ]
	}, {
		"黄冈市" : [ {
			"cityid" : "421100",
			"cityname" : "黄冈市"
		}, {
			"cityid" : "421101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "421102",
			"cityname" : "黄州区"
		}, {
			"cityid" : "421121",
			"cityname" : "团风县"
		}, {
			"cityid" : "421122",
			"cityname" : "红安县"
		}, {
			"cityid" : "421123",
			"cityname" : "罗田县"
		}, {
			"cityid" : "421124",
			"cityname" : "英山县"
		}, {
			"cityid" : "421125",
			"cityname" : "浠水县"
		}, {
			"cityid" : "421126",
			"cityname" : "蕲春县"
		}, {
			"cityid" : "421127",
			"cityname" : "黄梅县"
		}, {
			"cityid" : "421181",
			"cityname" : "麻城市"
		}, {
			"cityid" : "421182",
			"cityname" : "武穴市"
		} ]
	}, {
		"咸宁市" : [ {
			"cityid" : "421200",
			"cityname" : "咸宁市"
		}, {
			"cityid" : "421201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "421202",
			"cityname" : "咸安区"
		}, {
			"cityid" : "421221",
			"cityname" : "嘉鱼县"
		}, {
			"cityid" : "421222",
			"cityname" : "通城县"
		}, {
			"cityid" : "421223",
			"cityname" : "崇阳县"
		}, {
			"cityid" : "421224",
			"cityname" : "通山县"
		}, {
			"cityid" : "421281",
			"cityname" : "赤壁市"
		} ]
	}, {
		"随州市" : [ {
			"cityid" : "421300",
			"cityname" : "随州市"
		}, {
			"cityid" : "421301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "421303",
			"cityname" : "曾都区"
		}, {
			"cityid" : "421321",
			"cityname" : "随县"
		}, {
			"cityid" : "421381",
			"cityname" : "广水市"
		} ]
	}, {
		"恩施土家族苗族自治州" : [ {
			"cityid" : "422800",
			"cityname" : "恩施土家族苗族自治州"
		}, {
			"cityid" : "422801",
			"cityname" : "恩施市"
		}, {
			"cityid" : "422802",
			"cityname" : "利川市"
		}, {
			"cityid" : "422822",
			"cityname" : "建始县"
		}, {
			"cityid" : "422823",
			"cityname" : "巴东县"
		}, {
			"cityid" : "422825",
			"cityname" : "宣恩县"
		}, {
			"cityid" : "422826",
			"cityname" : "咸丰县"
		}, {
			"cityid" : "422827",
			"cityname" : "来凤县"
		}, {
			"cityid" : "422828",
			"cityname" : "鹤峰县"
		} ]
	}, {
		"省直辖县级行政区划" : [ {
			"cityid" : "429000",
			"cityname" : "省直辖县级行政区划"
		}, {
			"cityid" : "429004",
			"cityname" : "仙桃市"
		}, {
			"cityid" : "429005",
			"cityname" : "潜江市"
		}, {
			"cityid" : "429006",
			"cityname" : "天门市"
		}, {
			"cityid" : "429021",
			"cityname" : "神农架林区"
		} ]
	} ],
	"湖南省" : [ {
		"cityid" : "430000",
		"cityname" : "湖南省"
	}, {
		"长沙市" : [ {
			"cityid" : "430100",
			"cityname" : "长沙市"
		}, {
			"cityid" : "430101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "430102",
			"cityname" : "芙蓉区"
		}, {
			"cityid" : "430103",
			"cityname" : "天心区"
		}, {
			"cityid" : "430104",
			"cityname" : "岳麓区"
		}, {
			"cityid" : "430105",
			"cityname" : "开福区"
		}, {
			"cityid" : "430111",
			"cityname" : "雨花区"
		}, {
			"cityid" : "430121",
			"cityname" : "长沙县"
		}, {
			"cityid" : "430122",
			"cityname" : "望城县"
		}, {
			"cityid" : "430124",
			"cityname" : "宁乡县"
		}, {
			"cityid" : "430181",
			"cityname" : "浏阳市"
		} ]
	}, {
		"株洲市" : [ {
			"cityid" : "430200",
			"cityname" : "株洲市"
		}, {
			"cityid" : "430201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "430202",
			"cityname" : "荷塘区"
		}, {
			"cityid" : "430203",
			"cityname" : "芦淞区"
		}, {
			"cityid" : "430204",
			"cityname" : "石峰区"
		}, {
			"cityid" : "430211",
			"cityname" : "天元区"
		}, {
			"cityid" : "430221",
			"cityname" : "株洲县"
		}, {
			"cityid" : "430223",
			"cityname" : "攸　县"
		}, {
			"cityid" : "430224",
			"cityname" : "茶陵县"
		}, {
			"cityid" : "430225",
			"cityname" : "炎陵县"
		}, {
			"cityid" : "430281",
			"cityname" : "醴陵市"
		} ]
	}, {
		"湘潭市" : [ {
			"cityid" : "430300",
			"cityname" : "湘潭市"
		}, {
			"cityid" : "430301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "430302",
			"cityname" : "雨湖区"
		}, {
			"cityid" : "430304",
			"cityname" : "岳塘区"
		}, {
			"cityid" : "430321",
			"cityname" : "湘潭县"
		}, {
			"cityid" : "430381",
			"cityname" : "湘乡市"
		}, {
			"cityid" : "430382",
			"cityname" : "韶山市"
		} ]
	}, {
		"衡阳市" : [ {
			"cityid" : "430400",
			"cityname" : "衡阳市"
		}, {
			"cityid" : "430401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "430405",
			"cityname" : "珠晖区"
		}, {
			"cityid" : "430406",
			"cityname" : "雁峰区"
		}, {
			"cityid" : "430407",
			"cityname" : "石鼓区"
		}, {
			"cityid" : "430408",
			"cityname" : "蒸湘区"
		}, {
			"cityid" : "430412",
			"cityname" : "南岳区"
		}, {
			"cityid" : "430421",
			"cityname" : "衡阳县"
		}, {
			"cityid" : "430422",
			"cityname" : "衡南县"
		}, {
			"cityid" : "430423",
			"cityname" : "衡山县"
		}, {
			"cityid" : "430424",
			"cityname" : "衡东县"
		}, {
			"cityid" : "430426",
			"cityname" : "祁东县"
		}, {
			"cityid" : "430481",
			"cityname" : "耒阳市"
		}, {
			"cityid" : "430482",
			"cityname" : "常宁市"
		} ]
	}, {
		"邵阳市" : [ {
			"cityid" : "430500",
			"cityname" : "邵阳市"
		}, {
			"cityid" : "430501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "430502",
			"cityname" : "双清区"
		}, {
			"cityid" : "430503",
			"cityname" : "大祥区"
		}, {
			"cityid" : "430511",
			"cityname" : "北塔区"
		}, {
			"cityid" : "430521",
			"cityname" : "邵东县"
		}, {
			"cityid" : "430522",
			"cityname" : "新邵县"
		}, {
			"cityid" : "430523",
			"cityname" : "邵阳县"
		}, {
			"cityid" : "430524",
			"cityname" : "隆回县"
		}, {
			"cityid" : "430525",
			"cityname" : "洞口县"
		}, {
			"cityid" : "430527",
			"cityname" : "绥宁县"
		}, {
			"cityid" : "430528",
			"cityname" : "新宁县"
		}, {
			"cityid" : "430529",
			"cityname" : "城步苗族自治县"
		}, {
			"cityid" : "430581",
			"cityname" : "武冈市"
		} ]
	}, {
		"岳阳市" : [ {
			"cityid" : "430600",
			"cityname" : "岳阳市"
		}, {
			"cityid" : "430601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "430602",
			"cityname" : "岳阳楼区"
		}, {
			"cityid" : "430603",
			"cityname" : "云溪区"
		}, {
			"cityid" : "430611",
			"cityname" : "君山区"
		}, {
			"cityid" : "430621",
			"cityname" : "岳阳县"
		}, {
			"cityid" : "430623",
			"cityname" : "华容县"
		}, {
			"cityid" : "430624",
			"cityname" : "湘阴县"
		}, {
			"cityid" : "430626",
			"cityname" : "平江县"
		}, {
			"cityid" : "430681",
			"cityname" : "汨罗市"
		}, {
			"cityid" : "430682",
			"cityname" : "临湘市"
		} ]
	}, {
		"常德市" : [ {
			"cityid" : "430700",
			"cityname" : "常德市"
		}, {
			"cityid" : "430701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "430702",
			"cityname" : "武陵区"
		}, {
			"cityid" : "430703",
			"cityname" : "鼎城区"
		}, {
			"cityid" : "430721",
			"cityname" : "安乡县"
		}, {
			"cityid" : "430722",
			"cityname" : "汉寿县"
		}, {
			"cityid" : "430723",
			"cityname" : "澧　县"
		}, {
			"cityid" : "430724",
			"cityname" : "临澧县"
		}, {
			"cityid" : "430725",
			"cityname" : "桃源县"
		}, {
			"cityid" : "430726",
			"cityname" : "石门县"
		}, {
			"cityid" : "430781",
			"cityname" : "津市市"
		} ]
	}, {
		"张家界市" : [ {
			"cityid" : "430800",
			"cityname" : "张家界市"
		}, {
			"cityid" : "430801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "430802",
			"cityname" : "永定区"
		}, {
			"cityid" : "430811",
			"cityname" : "武陵源区"
		}, {
			"cityid" : "430821",
			"cityname" : "慈利县"
		}, {
			"cityid" : "430822",
			"cityname" : "桑植县"
		} ]
	}, {
		"益阳市" : [ {
			"cityid" : "430900",
			"cityname" : "益阳市"
		}, {
			"cityid" : "430901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "430902",
			"cityname" : "资阳区"
		}, {
			"cityid" : "430903",
			"cityname" : "赫山区"
		}, {
			"cityid" : "430921",
			"cityname" : "南　县"
		}, {
			"cityid" : "430922",
			"cityname" : "桃江县"
		}, {
			"cityid" : "430923",
			"cityname" : "安化县"
		}, {
			"cityid" : "430981",
			"cityname" : "沅江市"
		} ]
	}, {
		"郴州市" : [ {
			"cityid" : "431000",
			"cityname" : "郴州市"
		}, {
			"cityid" : "431001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "431002",
			"cityname" : "北湖区"
		}, {
			"cityid" : "431003",
			"cityname" : "苏仙区"
		}, {
			"cityid" : "431021",
			"cityname" : "桂阳县"
		}, {
			"cityid" : "431022",
			"cityname" : "宜章县"
		}, {
			"cityid" : "431023",
			"cityname" : "永兴县"
		}, {
			"cityid" : "431024",
			"cityname" : "嘉禾县"
		}, {
			"cityid" : "431025",
			"cityname" : "临武县"
		}, {
			"cityid" : "431026",
			"cityname" : "汝城县"
		}, {
			"cityid" : "431027",
			"cityname" : "桂东县"
		}, {
			"cityid" : "431028",
			"cityname" : "安仁县"
		}, {
			"cityid" : "431081",
			"cityname" : "资兴市"
		} ]
	}, {
		"永州市" : [ {
			"cityid" : "431100",
			"cityname" : "永州市"
		}, {
			"cityid" : "431101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "431102",
			"cityname" : "零陵区"
		}, {
			"cityid" : "431103",
			"cityname" : "冷水滩区"
		}, {
			"cityid" : "431121",
			"cityname" : "祁阳县"
		}, {
			"cityid" : "431122",
			"cityname" : "东安县"
		}, {
			"cityid" : "431123",
			"cityname" : "双牌县"
		}, {
			"cityid" : "431124",
			"cityname" : "道　县"
		}, {
			"cityid" : "431125",
			"cityname" : "江永县"
		}, {
			"cityid" : "431126",
			"cityname" : "宁远县"
		}, {
			"cityid" : "431127",
			"cityname" : "蓝山县"
		}, {
			"cityid" : "431128",
			"cityname" : "新田县"
		}, {
			"cityid" : "431129",
			"cityname" : "江华瑶族自治县"
		} ]
	}, {
		"怀化市" : [ {
			"cityid" : "431200",
			"cityname" : "怀化市"
		}, {
			"cityid" : "431201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "431202",
			"cityname" : "鹤城区"
		}, {
			"cityid" : "431221",
			"cityname" : "中方县"
		}, {
			"cityid" : "431222",
			"cityname" : "沅陵县"
		}, {
			"cityid" : "431223",
			"cityname" : "辰溪县"
		}, {
			"cityid" : "431224",
			"cityname" : "溆浦县"
		}, {
			"cityid" : "431225",
			"cityname" : "会同县"
		}, {
			"cityid" : "431226",
			"cityname" : "麻阳苗族自治县"
		}, {
			"cityid" : "431227",
			"cityname" : "新晃侗族自治县"
		}, {
			"cityid" : "431228",
			"cityname" : "芷江侗族自治县"
		}, {
			"cityid" : "431229",
			"cityname" : "靖州苗族侗族自治县"
		}, {
			"cityid" : "431230",
			"cityname" : "通道侗族自治县"
		}, {
			"cityid" : "431281",
			"cityname" : "洪江市"
		} ]
	}, {
		"娄底市" : [ {
			"cityid" : "431300",
			"cityname" : "娄底市"
		}, {
			"cityid" : "431301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "431302",
			"cityname" : "娄星区"
		}, {
			"cityid" : "431321",
			"cityname" : "双峰县"
		}, {
			"cityid" : "431322",
			"cityname" : "新化县"
		}, {
			"cityid" : "431381",
			"cityname" : "冷水江市"
		}, {
			"cityid" : "431382",
			"cityname" : "涟源市"
		} ]
	}, {
		"湘西土家族苗族自治州" : [ {
			"cityid" : "433100",
			"cityname" : "湘西土家族苗族自治州"
		}, {
			"cityid" : "433101",
			"cityname" : "吉首市"
		}, {
			"cityid" : "433122",
			"cityname" : "泸溪县"
		}, {
			"cityid" : "433123",
			"cityname" : "凤凰县"
		}, {
			"cityid" : "433124",
			"cityname" : "花垣县"
		}, {
			"cityid" : "433125",
			"cityname" : "保靖县"
		}, {
			"cityid" : "433126",
			"cityname" : "古丈县"
		}, {
			"cityid" : "433127",
			"cityname" : "永顺县"
		}, {
			"cityid" : "433130",
			"cityname" : "龙山县"
		} ]
	} ],
	"广东省" : [ {
		"cityid" : "440000",
		"cityname" : "广东省"
	}, {
		"广州市" : [ {
			"cityid" : "440100",
			"cityname" : "广州市"
		}, {
			"cityid" : "440101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440103",
			"cityname" : "荔湾区"
		}, {
			"cityid" : "440104",
			"cityname" : "越秀区"
		}, {
			"cityid" : "440105",
			"cityname" : "海珠区"
		}, {
			"cityid" : "440106",
			"cityname" : "天河区"
		}, {
			"cityid" : "440111",
			"cityname" : "白云区"
		}, {
			"cityid" : "440112",
			"cityname" : "黄埔区"
		}, {
			"cityid" : "440113",
			"cityname" : "番禺区"
		}, {
			"cityid" : "440114",
			"cityname" : "花都区"
		}, {
			"cityid" : "440115",
			"cityname" : "南沙区"
		}, {
			"cityid" : "440116",
			"cityname" : "萝岗区"
		}, {
			"cityid" : "440183",
			"cityname" : "增城市"
		}, {
			"cityid" : "440184",
			"cityname" : "从化市"
		} ]
	}, {
		"韶关市" : [ {
			"cityid" : "440200",
			"cityname" : "韶关市"
		}, {
			"cityid" : "440201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440203",
			"cityname" : "武江区"
		}, {
			"cityid" : "440204",
			"cityname" : "浈江区"
		}, {
			"cityid" : "440205",
			"cityname" : "曲江区"
		}, {
			"cityid" : "440222",
			"cityname" : "始兴县"
		}, {
			"cityid" : "440224",
			"cityname" : "仁化县"
		}, {
			"cityid" : "440229",
			"cityname" : "翁源县"
		}, {
			"cityid" : "440232",
			"cityname" : "乳源瑶族自治县"
		}, {
			"cityid" : "440233",
			"cityname" : "新丰县"
		}, {
			"cityid" : "440281",
			"cityname" : "乐昌市"
		}, {
			"cityid" : "440282",
			"cityname" : "南雄市"
		} ]
	}, {
		"深圳市" : [ {
			"cityid" : "440300",
			"cityname" : "深圳市"
		}, {
			"cityid" : "440301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440303",
			"cityname" : "罗湖区"
		}, {
			"cityid" : "440304",
			"cityname" : "福田区"
		}, {
			"cityid" : "440305",
			"cityname" : "南山区"
		}, {
			"cityid" : "440306",
			"cityname" : "宝安区"
		}, {
			"cityid" : "440307",
			"cityname" : "龙岗区"
		}, {
			"cityid" : "440308",
			"cityname" : "盐田区"
		} ]
	}, {
		"珠海市" : [ {
			"cityid" : "440400",
			"cityname" : "珠海市"
		}, {
			"cityid" : "440401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440402",
			"cityname" : "香洲区"
		}, {
			"cityid" : "440403",
			"cityname" : "斗门区"
		}, {
			"cityid" : "440404",
			"cityname" : "金湾区"
		} ]
	}, {
		"汕头市" : [ {
			"cityid" : "440500",
			"cityname" : "汕头市"
		}, {
			"cityid" : "440501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440507",
			"cityname" : "龙湖区"
		}, {
			"cityid" : "440511",
			"cityname" : "金平区"
		}, {
			"cityid" : "440512",
			"cityname" : "濠江区"
		}, {
			"cityid" : "440513",
			"cityname" : "潮阳区"
		}, {
			"cityid" : "440514",
			"cityname" : "潮南区"
		}, {
			"cityid" : "440515",
			"cityname" : "澄海区"
		}, {
			"cityid" : "440523",
			"cityname" : "南澳县"
		} ]
	}, {
		"佛山市" : [ {
			"cityid" : "440600",
			"cityname" : "佛山市"
		}, {
			"cityid" : "440601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440604",
			"cityname" : "禅城区"
		}, {
			"cityid" : "440605",
			"cityname" : "南海区"
		}, {
			"cityid" : "440606",
			"cityname" : "顺德区"
		}, {
			"cityid" : "440607",
			"cityname" : "三水区"
		}, {
			"cityid" : "440608",
			"cityname" : "高明区"
		} ]
	}, {
		"江门市" : [ {
			"cityid" : "440700",
			"cityname" : "江门市"
		}, {
			"cityid" : "440701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440703",
			"cityname" : "蓬江区"
		}, {
			"cityid" : "440704",
			"cityname" : "江海区"
		}, {
			"cityid" : "440705",
			"cityname" : "新会区"
		}, {
			"cityid" : "440781",
			"cityname" : "台山市"
		}, {
			"cityid" : "440783",
			"cityname" : "开平市"
		}, {
			"cityid" : "440784",
			"cityname" : "鹤山市"
		}, {
			"cityid" : "440785",
			"cityname" : "恩平市"
		} ]
	}, {
		"湛江市" : [ {
			"cityid" : "440800",
			"cityname" : "湛江市"
		}, {
			"cityid" : "440801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440802",
			"cityname" : "赤坎区"
		}, {
			"cityid" : "440803",
			"cityname" : "霞山区"
		}, {
			"cityid" : "440804",
			"cityname" : "坡头区"
		}, {
			"cityid" : "440811",
			"cityname" : "麻章区"
		}, {
			"cityid" : "440823",
			"cityname" : "遂溪县"
		}, {
			"cityid" : "440825",
			"cityname" : "徐闻县"
		}, {
			"cityid" : "440881",
			"cityname" : "廉江市"
		}, {
			"cityid" : "440882",
			"cityname" : "雷州市"
		}, {
			"cityid" : "440883",
			"cityname" : "吴川市"
		} ]
	}, {
		"茂名市" : [ {
			"cityid" : "440900",
			"cityname" : "茂名市"
		}, {
			"cityid" : "440901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "440902",
			"cityname" : "茂南区"
		}, {
			"cityid" : "440903",
			"cityname" : "茂港区"
		}, {
			"cityid" : "440923",
			"cityname" : "电白县"
		}, {
			"cityid" : "440981",
			"cityname" : "高州市"
		}, {
			"cityid" : "440982",
			"cityname" : "化州市"
		}, {
			"cityid" : "440983",
			"cityname" : "信宜市"
		} ]
	}, {
		"肇庆市" : [ {
			"cityid" : "441200",
			"cityname" : "肇庆市"
		}, {
			"cityid" : "441201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441202",
			"cityname" : "端州区"
		}, {
			"cityid" : "441203",
			"cityname" : "鼎湖区"
		}, {
			"cityid" : "441223",
			"cityname" : "广宁县"
		}, {
			"cityid" : "441224",
			"cityname" : "怀集县"
		}, {
			"cityid" : "441225",
			"cityname" : "封开县"
		}, {
			"cityid" : "441226",
			"cityname" : "德庆县"
		}, {
			"cityid" : "441283",
			"cityname" : "高要市"
		}, {
			"cityid" : "441284",
			"cityname" : "四会市"
		} ]
	}, {
		"惠州市" : [ {
			"cityid" : "441300",
			"cityname" : "惠州市"
		}, {
			"cityid" : "441301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441302",
			"cityname" : "惠城区"
		}, {
			"cityid" : "441303",
			"cityname" : "惠阳区"
		}, {
			"cityid" : "441322",
			"cityname" : "博罗县"
		}, {
			"cityid" : "441323",
			"cityname" : "惠东县"
		}, {
			"cityid" : "441324",
			"cityname" : "龙门县"
		} ]
	}, {
		"梅州市" : [ {
			"cityid" : "441400",
			"cityname" : "梅州市"
		}, {
			"cityid" : "441401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441402",
			"cityname" : "梅江区"
		}, {
			"cityid" : "441421",
			"cityname" : "梅　县"
		}, {
			"cityid" : "441422",
			"cityname" : "大埔县"
		}, {
			"cityid" : "441423",
			"cityname" : "丰顺县"
		}, {
			"cityid" : "441424",
			"cityname" : "五华县"
		}, {
			"cityid" : "441426",
			"cityname" : "平远县"
		}, {
			"cityid" : "441427",
			"cityname" : "蕉岭县"
		}, {
			"cityid" : "441481",
			"cityname" : "兴宁市"
		} ]
	}, {
		"汕尾市" : [ {
			"cityid" : "441500",
			"cityname" : "汕尾市"
		}, {
			"cityid" : "441501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441502",
			"cityname" : "城　区"
		}, {
			"cityid" : "441521",
			"cityname" : "海丰县"
		}, {
			"cityid" : "441523",
			"cityname" : "陆河县"
		}, {
			"cityid" : "441581",
			"cityname" : "陆丰市"
		} ]
	}, {
		"河源市" : [ {
			"cityid" : "441600",
			"cityname" : "河源市"
		}, {
			"cityid" : "441601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441602",
			"cityname" : "源城区"
		}, {
			"cityid" : "441621",
			"cityname" : "紫金县"
		}, {
			"cityid" : "441622",
			"cityname" : "龙川县"
		}, {
			"cityid" : "441623",
			"cityname" : "连平县"
		}, {
			"cityid" : "441624",
			"cityname" : "和平县"
		}, {
			"cityid" : "441625",
			"cityname" : "东源县"
		} ]
	}, {
		"阳江市" : [ {
			"cityid" : "441700",
			"cityname" : "阳江市"
		}, {
			"cityid" : "441701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441702",
			"cityname" : "江城区"
		}, {
			"cityid" : "441721",
			"cityname" : "阳西县"
		}, {
			"cityid" : "441723",
			"cityname" : "阳东县"
		}, {
			"cityid" : "441781",
			"cityname" : "阳春市"
		} ]
	}, {
		"清远市" : [ {
			"cityid" : "441800",
			"cityname" : "清远市"
		}, {
			"cityid" : "441801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "441802",
			"cityname" : "清城区"
		}, {
			"cityid" : "441821",
			"cityname" : "佛冈县"
		}, {
			"cityid" : "441823",
			"cityname" : "阳山县"
		}, {
			"cityid" : "441825",
			"cityname" : "连山壮族瑶族自治县"
		}, {
			"cityid" : "441826",
			"cityname" : "连南瑶族自治县"
		}, {
			"cityid" : "441827",
			"cityname" : "清新县"
		}, {
			"cityid" : "441881",
			"cityname" : "英德市"
		}, {
			"cityid" : "441882",
			"cityname" : "连州市"
		} ]
	}, {
		"东莞市" : [ {
			"cityid" : "441900",
			"cityname" : "东莞市"
		} ]
	}, {
		"中山市" : [ {
			"cityid" : "442000",
			"cityname" : "中山市"
		} ]
	}, {
		"潮州市" : [ {
			"cityid" : "445100",
			"cityname" : "潮州市"
		}, {
			"cityid" : "445101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "445102",
			"cityname" : "湘桥区"
		}, {
			"cityid" : "445121",
			"cityname" : "潮安县"
		}, {
			"cityid" : "445122",
			"cityname" : "饶平县"
		} ]
	}, {
		"揭阳市" : [ {
			"cityid" : "445200",
			"cityname" : "揭阳市"
		}, {
			"cityid" : "445201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "445202",
			"cityname" : "榕城区"
		}, {
			"cityid" : "445221",
			"cityname" : "揭东县"
		}, {
			"cityid" : "445222",
			"cityname" : "揭西县"
		}, {
			"cityid" : "445224",
			"cityname" : "惠来县"
		}, {
			"cityid" : "445281",
			"cityname" : "普宁市"
		} ]
	}, {
		"云浮市" : [ {
			"cityid" : "445300",
			"cityname" : "云浮市"
		}, {
			"cityid" : "445301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "445302",
			"cityname" : "云城区"
		}, {
			"cityid" : "445321",
			"cityname" : "新兴县"
		}, {
			"cityid" : "445322",
			"cityname" : "郁南县"
		}, {
			"cityid" : "445323",
			"cityname" : "云安县"
		}, {
			"cityid" : "445381",
			"cityname" : "罗定市"
		} ]
	} ],
	"广西壮族自治区" : [ {
		"cityid" : "450000",
		"cityname" : "广西壮族自治区"
	}, {
		"南宁市" : [ {
			"cityid" : "450100",
			"cityname" : "南宁市"
		}, {
			"cityid" : "450101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "450102",
			"cityname" : "兴宁区"
		}, {
			"cityid" : "450103",
			"cityname" : "青秀区"
		}, {
			"cityid" : "450105",
			"cityname" : "江南区"
		}, {
			"cityid" : "450107",
			"cityname" : "西乡塘区"
		}, {
			"cityid" : "450108",
			"cityname" : "良庆区"
		}, {
			"cityid" : "450109",
			"cityname" : "邕宁区"
		}, {
			"cityid" : "450122",
			"cityname" : "武鸣县"
		}, {
			"cityid" : "450123",
			"cityname" : "隆安县"
		}, {
			"cityid" : "450124",
			"cityname" : "马山县"
		}, {
			"cityid" : "450125",
			"cityname" : "上林县"
		}, {
			"cityid" : "450126",
			"cityname" : "宾阳县"
		}, {
			"cityid" : "450127",
			"cityname" : "横　县"
		} ]
	}, {
		"柳州市" : [ {
			"cityid" : "450200",
			"cityname" : "柳州市"
		}, {
			"cityid" : "450201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "450202",
			"cityname" : "城中区"
		}, {
			"cityid" : "450203",
			"cityname" : "鱼峰区"
		}, {
			"cityid" : "450204",
			"cityname" : "柳南区"
		}, {
			"cityid" : "450205",
			"cityname" : "柳北区"
		}, {
			"cityid" : "450221",
			"cityname" : "柳江县"
		}, {
			"cityid" : "450222",
			"cityname" : "柳城县"
		}, {
			"cityid" : "450223",
			"cityname" : "鹿寨县"
		}, {
			"cityid" : "450224",
			"cityname" : "融安县"
		}, {
			"cityid" : "450225",
			"cityname" : "融水苗族自治县"
		}, {
			"cityid" : "450226",
			"cityname" : "三江侗族自治县"
		} ]
	}, {
		"桂林市" : [ {
			"cityid" : "450300",
			"cityname" : "桂林市"
		}, {
			"cityid" : "450301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "450302",
			"cityname" : "秀峰区"
		}, {
			"cityid" : "450303",
			"cityname" : "叠彩区"
		}, {
			"cityid" : "450304",
			"cityname" : "象山区"
		}, {
			"cityid" : "450305",
			"cityname" : "七星区"
		}, {
			"cityid" : "450311",
			"cityname" : "雁山区"
		}, {
			"cityid" : "450321",
			"cityname" : "阳朔县"
		}, {
			"cityid" : "450322",
			"cityname" : "临桂县"
		}, {
			"cityid" : "450323",
			"cityname" : "灵川县"
		}, {
			"cityid" : "450324",
			"cityname" : "全州县"
		}, {
			"cityid" : "450325",
			"cityname" : "兴安县"
		}, {
			"cityid" : "450326",
			"cityname" : "永福县"
		}, {
			"cityid" : "450327",
			"cityname" : "灌阳县"
		}, {
			"cityid" : "450328",
			"cityname" : "龙胜各族自治县"
		}, {
			"cityid" : "450329",
			"cityname" : "资源县"
		}, {
			"cityid" : "450330",
			"cityname" : "平乐县"
		}, {
			"cityid" : "450331",
			"cityname" : "荔蒲县"
		}, {
			"cityid" : "450332",
			"cityname" : "恭城瑶族自治县"
		} ]
	}, {
		"梧州市" : [ {
			"cityid" : "450400",
			"cityname" : "梧州市"
		}, {
			"cityid" : "450401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "450403",
			"cityname" : "万秀区"
		}, {
			"cityid" : "450404",
			"cityname" : "蝶山区"
		}, {
			"cityid" : "450405",
			"cityname" : "长洲区"
		}, {
			"cityid" : "450421",
			"cityname" : "苍梧县"
		}, {
			"cityid" : "450422",
			"cityname" : "藤　县"
		}, {
			"cityid" : "450423",
			"cityname" : "蒙山县"
		}, {
			"cityid" : "450481",
			"cityname" : "岑溪市"
		} ]
	}, {
		"北海市" : [ {
			"cityid" : "450500",
			"cityname" : "北海市"
		}, {
			"cityid" : "450501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "450502",
			"cityname" : "海城区"
		}, {
			"cityid" : "450503",
			"cityname" : "银海区"
		}, {
			"cityid" : "450512",
			"cityname" : "铁山港区"
		}, {
			"cityid" : "450521",
			"cityname" : "合浦县"
		} ]
	}, {
		"防城港市" : [ {
			"cityid" : "450600",
			"cityname" : "防城港市"
		}, {
			"cityid" : "450601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "450602",
			"cityname" : "港口区"
		}, {
			"cityid" : "450603",
			"cityname" : "防城区"
		}, {
			"cityid" : "450621",
			"cityname" : "上思县"
		}, {
			"cityid" : "450681",
			"cityname" : "东兴市"
		} ]
	}, {
		"钦州市" : [ {
			"cityid" : "450700",
			"cityname" : "钦州市"
		}, {
			"cityid" : "450701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "450702",
			"cityname" : "钦南区"
		}, {
			"cityid" : "450703",
			"cityname" : "钦北区"
		}, {
			"cityid" : "450721",
			"cityname" : "灵山县"
		}, {
			"cityid" : "450722",
			"cityname" : "浦北县"
		} ]
	}, {
		"贵港市" : [ {
			"cityid" : "450800",
			"cityname" : "贵港市"
		}, {
			"cityid" : "450801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "450802",
			"cityname" : "港北区"
		}, {
			"cityid" : "450803",
			"cityname" : "港南区"
		}, {
			"cityid" : "450804",
			"cityname" : "覃塘区"
		}, {
			"cityid" : "450821",
			"cityname" : "平南县"
		}, {
			"cityid" : "450881",
			"cityname" : "桂平市"
		} ]
	}, {
		"玉林市" : [ {
			"cityid" : "450900",
			"cityname" : "玉林市"
		}, {
			"cityid" : "450901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "450902",
			"cityname" : "玉州区"
		}, {
			"cityid" : "450921",
			"cityname" : "容　县"
		}, {
			"cityid" : "450922",
			"cityname" : "陆川县"
		}, {
			"cityid" : "450923",
			"cityname" : "博白县"
		}, {
			"cityid" : "450924",
			"cityname" : "兴业县"
		}, {
			"cityid" : "450981",
			"cityname" : "北流市"
		} ]
	}, {
		"百色市" : [ {
			"cityid" : "451000",
			"cityname" : "百色市"
		}, {
			"cityid" : "451001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "451002",
			"cityname" : "右江区"
		}, {
			"cityid" : "451021",
			"cityname" : "田阳县"
		}, {
			"cityid" : "451022",
			"cityname" : "田东县"
		}, {
			"cityid" : "451023",
			"cityname" : "平果县"
		}, {
			"cityid" : "451024",
			"cityname" : "德保县"
		}, {
			"cityid" : "451025",
			"cityname" : "靖西县"
		}, {
			"cityid" : "451026",
			"cityname" : "那坡县"
		}, {
			"cityid" : "451027",
			"cityname" : "凌云县"
		}, {
			"cityid" : "451028",
			"cityname" : "乐业县"
		}, {
			"cityid" : "451029",
			"cityname" : "田林县"
		}, {
			"cityid" : "451030",
			"cityname" : "西林县"
		}, {
			"cityid" : "451031",
			"cityname" : "隆林各族自治县"
		} ]
	}, {
		"贺州市" : [ {
			"cityid" : "451100",
			"cityname" : "贺州市"
		}, {
			"cityid" : "451101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "451102",
			"cityname" : "八步区"
		}, {
			"cityid" : "451121",
			"cityname" : "昭平县"
		}, {
			"cityid" : "451122",
			"cityname" : "钟山县"
		}, {
			"cityid" : "451123",
			"cityname" : "富川瑶族自治县"
		} ]
	}, {
		"河池市" : [ {
			"cityid" : "451200",
			"cityname" : "河池市"
		}, {
			"cityid" : "451201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "451202",
			"cityname" : "金城江区"
		}, {
			"cityid" : "451221",
			"cityname" : "南丹县"
		}, {
			"cityid" : "451222",
			"cityname" : "天峨县"
		}, {
			"cityid" : "451223",
			"cityname" : "凤山县"
		}, {
			"cityid" : "451224",
			"cityname" : "东兰县"
		}, {
			"cityid" : "451225",
			"cityname" : "罗城仫佬族自治县"
		}, {
			"cityid" : "451226",
			"cityname" : "环江毛南族自治县"
		}, {
			"cityid" : "451227",
			"cityname" : "巴马瑶族自治县"
		}, {
			"cityid" : "451228",
			"cityname" : "都安瑶族自治县"
		}, {
			"cityid" : "451229",
			"cityname" : "大化瑶族自治县"
		}, {
			"cityid" : "451281",
			"cityname" : "宜州市"
		} ]
	}, {
		"来宾市" : [ {
			"cityid" : "451300",
			"cityname" : "来宾市"
		}, {
			"cityid" : "451301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "451302",
			"cityname" : "兴宾区"
		}, {
			"cityid" : "451321",
			"cityname" : "忻城县"
		}, {
			"cityid" : "451322",
			"cityname" : "象州县"
		}, {
			"cityid" : "451323",
			"cityname" : "武宣县"
		}, {
			"cityid" : "451324",
			"cityname" : "金秀瑶族自治县"
		}, {
			"cityid" : "451381",
			"cityname" : "合山市"
		} ]
	}, {
		"崇左市" : [ {
			"cityid" : "451400",
			"cityname" : "崇左市"
		}, {
			"cityid" : "451401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "451402",
			"cityname" : "江洲区"
		}, {
			"cityid" : "451421",
			"cityname" : "扶绥县"
		}, {
			"cityid" : "451422",
			"cityname" : "宁明县"
		}, {
			"cityid" : "451423",
			"cityname" : "龙州县"
		}, {
			"cityid" : "451424",
			"cityname" : "大新县"
		}, {
			"cityid" : "451425",
			"cityname" : "天等县"
		}, {
			"cityid" : "451481",
			"cityname" : "凭祥市"
		} ]
	} ],
	"海南省" : [ {
		"cityid" : "460000",
		"cityname" : "海南省"
	}, {
		"海口市" : [ {
			"cityid" : "460100",
			"cityname" : "海口市"
		}, {
			"cityid" : "460101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "460105",
			"cityname" : "秀英区"
		}, {
			"cityid" : "460106",
			"cityname" : "龙华区"
		}, {
			"cityid" : "460107",
			"cityname" : "琼山区"
		}, {
			"cityid" : "460108",
			"cityname" : "美兰区"
		} ]
	}, {
		"三亚市" : [ {
			"cityid" : "460200",
			"cityname" : "三亚市"
		}, {
			"cityid" : "460201",
			"cityname" : "市辖区"
		} ]
	}, {
		"省直辖县级行政区划" : [ {
			"cityid" : "469000",
			"cityname" : "省直辖县级行政区划"
		}, {
			"cityid" : "469001",
			"cityname" : "五指山市"
		}, {
			"cityid" : "469002",
			"cityname" : "琼海市"
		}, {
			"cityid" : "469003",
			"cityname" : "儋州市"
		}, {
			"cityid" : "469005",
			"cityname" : "文昌市"
		}, {
			"cityid" : "469006",
			"cityname" : "万宁市"
		}, {
			"cityid" : "469007",
			"cityname" : "东方市"
		}, {
			"cityid" : "469021",
			"cityname" : "定安县"
		}, {
			"cityid" : "469022",
			"cityname" : "屯昌县"
		}, {
			"cityid" : "469023",
			"cityname" : "澄迈县"
		}, {
			"cityid" : "469024",
			"cityname" : "临高县"
		}, {
			"cityid" : "469025",
			"cityname" : "白沙黎族自治县"
		}, {
			"cityid" : "469026",
			"cityname" : "昌江黎族自治县"
		}, {
			"cityid" : "469027",
			"cityname" : "乐东黎族自治县"
		}, {
			"cityid" : "469028",
			"cityname" : "陵水黎族自治县"
		}, {
			"cityid" : "469029",
			"cityname" : "保亭黎族苗族自治县"
		}, {
			"cityid" : "469030",
			"cityname" : "琼中黎族苗族自治县"
		}, {
			"cityid" : "469031",
			"cityname" : "西沙群岛"
		}, {
			"cityid" : "469032",
			"cityname" : "南沙群岛"
		}, {
			"cityid" : "469033",
			"cityname" : "中沙群岛的岛礁及其海域"
		} ]
	} ],
	"重庆市" : [ {
		"cityid" : "500000",
		"cityname" : "重庆市"
	}, {
		"市辖区" : [ {
			"cityid" : "500100",
			"cityname" : "市辖区"
		}, {
			"cityid" : "500101",
			"cityname" : "万州区"
		}, {
			"cityid" : "500102",
			"cityname" : "涪陵区"
		}, {
			"cityid" : "500103",
			"cityname" : "渝中区"
		}, {
			"cityid" : "500104",
			"cityname" : "大渡口区"
		}, {
			"cityid" : "500105",
			"cityname" : "江北区"
		}, {
			"cityid" : "500106",
			"cityname" : "沙坪坝区"
		}, {
			"cityid" : "500107",
			"cityname" : "九龙坡区"
		}, {
			"cityid" : "500108",
			"cityname" : "南岸区"
		}, {
			"cityid" : "500109",
			"cityname" : "北碚区"
		}, {
			"cityid" : "500110",
			"cityname" : "万盛区"
		}, {
			"cityid" : "500111",
			"cityname" : "双桥区"
		}, {
			"cityid" : "500112",
			"cityname" : "渝北区"
		}, {
			"cityid" : "500113",
			"cityname" : "巴南区"
		}, {
			"cityid" : "500114",
			"cityname" : "黔江区"
		}, {
			"cityid" : "500115",
			"cityname" : "长寿区"
		}, {
			"cityid" : "500116",
			"cityname" : "江津区"
		}, {
			"cityid" : "500117",
			"cityname" : "合川区"
		}, {
			"cityid" : "500118",
			"cityname" : "永川区"
		}, {
			"cityid" : "500119",
			"cityname" : "南川区"
		} ]
	}, {
		"县" : [ {
			"cityid" : "500200",
			"cityname" : "县"
		}, {
			"cityid" : "500222",
			"cityname" : "綦江县"
		}, {
			"cityid" : "500223",
			"cityname" : "潼南县"
		}, {
			"cityid" : "500224",
			"cityname" : "铜梁县"
		}, {
			"cityid" : "500225",
			"cityname" : "大足县"
		}, {
			"cityid" : "500226",
			"cityname" : "荣昌县"
		}, {
			"cityid" : "500227",
			"cityname" : "璧山县"
		}, {
			"cityid" : "500228",
			"cityname" : "梁平县"
		}, {
			"cityid" : "500229",
			"cityname" : "城口县"
		}, {
			"cityid" : "500230",
			"cityname" : "丰都县"
		}, {
			"cityid" : "500231",
			"cityname" : "垫江县"
		}, {
			"cityid" : "500232",
			"cityname" : "武隆县"
		}, {
			"cityid" : "500233",
			"cityname" : "忠　县"
		}, {
			"cityid" : "500234",
			"cityname" : "开　县"
		}, {
			"cityid" : "500235",
			"cityname" : "云阳县"
		}, {
			"cityid" : "500236",
			"cityname" : "奉节县"
		}, {
			"cityid" : "500237",
			"cityname" : "巫山县"
		}, {
			"cityid" : "500238",
			"cityname" : "巫溪县"
		}, {
			"cityid" : "500240",
			"cityname" : "石柱土家族自治县"
		}, {
			"cityid" : "500241",
			"cityname" : "秀山土家族苗族自治县"
		}, {
			"cityid" : "500242",
			"cityname" : "酉阳土家族苗族自治县"
		}, {
			"cityid" : "500243",
			"cityname" : "彭水苗族土家族自治县"
		} ]
	} ],
	"四川省" : [ {
		"cityid" : "510000",
		"cityname" : "四川省"
	}, {
		"成都市" : [ {
			"cityid" : "510100",
			"cityname" : "成都市"
		}, {
			"cityid" : "510101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "510104",
			"cityname" : "锦江区"
		}, {
			"cityid" : "510105",
			"cityname" : "青羊区"
		}, {
			"cityid" : "510106",
			"cityname" : "金牛区"
		}, {
			"cityid" : "510107",
			"cityname" : "武侯区"
		}, {
			"cityid" : "510108",
			"cityname" : "成华区"
		}, {
			"cityid" : "510112",
			"cityname" : "龙泉驿区"
		}, {
			"cityid" : "510113",
			"cityname" : "青白江区"
		}, {
			"cityid" : "510114",
			"cityname" : "新都区"
		}, {
			"cityid" : "510115",
			"cityname" : "温江区"
		}, {
			"cityid" : "510121",
			"cityname" : "金堂县"
		}, {
			"cityid" : "510122",
			"cityname" : "双流县"
		}, {
			"cityid" : "510124",
			"cityname" : "郫　县"
		}, {
			"cityid" : "510129",
			"cityname" : "大邑县"
		}, {
			"cityid" : "510131",
			"cityname" : "蒲江县"
		}, {
			"cityid" : "510132",
			"cityname" : "新津县"
		}, {
			"cityid" : "510181",
			"cityname" : "都江堰市"
		}, {
			"cityid" : "510182",
			"cityname" : "彭州市"
		}, {
			"cityid" : "510183",
			"cityname" : "邛崃市"
		}, {
			"cityid" : "510184",
			"cityname" : "崇州市"
		} ]
	}, {
		"自贡市" : [ {
			"cityid" : "510300",
			"cityname" : "自贡市"
		}, {
			"cityid" : "510301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "510302",
			"cityname" : "自流井区"
		}, {
			"cityid" : "510303",
			"cityname" : "贡井区"
		}, {
			"cityid" : "510304",
			"cityname" : "大安区"
		}, {
			"cityid" : "510311",
			"cityname" : "沿滩区"
		}, {
			"cityid" : "510321",
			"cityname" : "荣　县"
		}, {
			"cityid" : "510322",
			"cityname" : "富顺县"
		} ]
	}, {
		"攀枝花市" : [ {
			"cityid" : "510400",
			"cityname" : "攀枝花市"
		}, {
			"cityid" : "510401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "510402",
			"cityname" : "东　区"
		}, {
			"cityid" : "510403",
			"cityname" : "西　区"
		}, {
			"cityid" : "510411",
			"cityname" : "仁和区"
		}, {
			"cityid" : "510421",
			"cityname" : "米易县"
		}, {
			"cityid" : "510422",
			"cityname" : "盐边县"
		} ]
	}, {
		"泸州市" : [ {
			"cityid" : "510500",
			"cityname" : "泸州市"
		}, {
			"cityid" : "510501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "510502",
			"cityname" : "江阳区"
		}, {
			"cityid" : "510503",
			"cityname" : "纳溪区"
		}, {
			"cityid" : "510504",
			"cityname" : "龙马潭区"
		}, {
			"cityid" : "510521",
			"cityname" : "泸　县"
		}, {
			"cityid" : "510522",
			"cityname" : "合江县"
		}, {
			"cityid" : "510524",
			"cityname" : "叙永县"
		}, {
			"cityid" : "510525",
			"cityname" : "古蔺县"
		} ]
	}, {
		"德阳市" : [ {
			"cityid" : "510600",
			"cityname" : "德阳市"
		}, {
			"cityid" : "510601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "510603",
			"cityname" : "旌阳区"
		}, {
			"cityid" : "510623",
			"cityname" : "中江县"
		}, {
			"cityid" : "510626",
			"cityname" : "罗江县"
		}, {
			"cityid" : "510681",
			"cityname" : "广汉市"
		}, {
			"cityid" : "510682",
			"cityname" : "什邡市"
		}, {
			"cityid" : "510683",
			"cityname" : "绵竹市"
		} ]
	}, {
		"绵阳市" : [ {
			"cityid" : "510700",
			"cityname" : "绵阳市"
		}, {
			"cityid" : "510701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "510703",
			"cityname" : "涪城区"
		}, {
			"cityid" : "510704",
			"cityname" : "游仙区"
		}, {
			"cityid" : "510722",
			"cityname" : "三台县"
		}, {
			"cityid" : "510723",
			"cityname" : "盐亭县"
		}, {
			"cityid" : "510724",
			"cityname" : "安　县"
		}, {
			"cityid" : "510725",
			"cityname" : "梓潼县"
		}, {
			"cityid" : "510726",
			"cityname" : "北川羌族自治县"
		}, {
			"cityid" : "510727",
			"cityname" : "平武县"
		}, {
			"cityid" : "510781",
			"cityname" : "江油市"
		} ]
	}, {
		"广元市" : [ {
			"cityid" : "510800",
			"cityname" : "广元市"
		}, {
			"cityid" : "510801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "510802",
			"cityname" : "利州区"
		}, {
			"cityid" : "510811",
			"cityname" : "元坝区"
		}, {
			"cityid" : "510812",
			"cityname" : "朝天区"
		}, {
			"cityid" : "510821",
			"cityname" : "旺苍县"
		}, {
			"cityid" : "510822",
			"cityname" : "青川县"
		}, {
			"cityid" : "510823",
			"cityname" : "剑阁县"
		}, {
			"cityid" : "510824",
			"cityname" : "苍溪县"
		} ]
	}, {
		"遂宁市" : [ {
			"cityid" : "510900",
			"cityname" : "遂宁市"
		}, {
			"cityid" : "510901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "510903",
			"cityname" : "船山区"
		}, {
			"cityid" : "510904",
			"cityname" : "安居区"
		}, {
			"cityid" : "510921",
			"cityname" : "蓬溪县"
		}, {
			"cityid" : "510922",
			"cityname" : "射洪县"
		}, {
			"cityid" : "510923",
			"cityname" : "大英县"
		} ]
	}, {
		"内江市" : [ {
			"cityid" : "511000",
			"cityname" : "内江市"
		}, {
			"cityid" : "511001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "511002",
			"cityname" : "市中区"
		}, {
			"cityid" : "511011",
			"cityname" : "东兴区"
		}, {
			"cityid" : "511024",
			"cityname" : "威远县"
		}, {
			"cityid" : "511025",
			"cityname" : "资中县"
		}, {
			"cityid" : "511028",
			"cityname" : "隆昌县"
		} ]
	}, {
		"乐山市" : [ {
			"cityid" : "511100",
			"cityname" : "乐山市"
		}, {
			"cityid" : "511101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "511102",
			"cityname" : "市中区"
		}, {
			"cityid" : "511111",
			"cityname" : "沙湾区"
		}, {
			"cityid" : "511112",
			"cityname" : "五通桥区"
		}, {
			"cityid" : "511113",
			"cityname" : "金口河区"
		}, {
			"cityid" : "511123",
			"cityname" : "犍为县"
		}, {
			"cityid" : "511124",
			"cityname" : "井研县"
		}, {
			"cityid" : "511126",
			"cityname" : "夹江县"
		}, {
			"cityid" : "511129",
			"cityname" : "沐川县"
		}, {
			"cityid" : "511132",
			"cityname" : "峨边彝族自治县"
		}, {
			"cityid" : "511133",
			"cityname" : "马边彝族自治县"
		}, {
			"cityid" : "511181",
			"cityname" : "峨眉山市"
		} ]
	}, {
		"南充市" : [ {
			"cityid" : "511300",
			"cityname" : "南充市"
		}, {
			"cityid" : "511301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "511302",
			"cityname" : "顺庆区"
		}, {
			"cityid" : "511303",
			"cityname" : "高坪区"
		}, {
			"cityid" : "511304",
			"cityname" : "嘉陵区"
		}, {
			"cityid" : "511321",
			"cityname" : "南部县"
		}, {
			"cityid" : "511322",
			"cityname" : "营山县"
		}, {
			"cityid" : "511323",
			"cityname" : "蓬安县"
		}, {
			"cityid" : "511324",
			"cityname" : "仪陇县"
		}, {
			"cityid" : "511325",
			"cityname" : "西充县"
		}, {
			"cityid" : "511381",
			"cityname" : "阆中市"
		} ]
	}, {
		"眉山市" : [ {
			"cityid" : "511400",
			"cityname" : "眉山市"
		}, {
			"cityid" : "511401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "511402",
			"cityname" : "东坡区"
		}, {
			"cityid" : "511421",
			"cityname" : "仁寿县"
		}, {
			"cityid" : "511422",
			"cityname" : "彭山县"
		}, {
			"cityid" : "511423",
			"cityname" : "洪雅县"
		}, {
			"cityid" : "511424",
			"cityname" : "丹棱县"
		}, {
			"cityid" : "511425",
			"cityname" : "青神县"
		} ]
	}, {
		"宜宾市" : [ {
			"cityid" : "511500",
			"cityname" : "宜宾市"
		}, {
			"cityid" : "511501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "511502",
			"cityname" : "翠屏区"
		}, {
			"cityid" : "511521",
			"cityname" : "宜宾县"
		}, {
			"cityid" : "511522",
			"cityname" : "南溪县"
		}, {
			"cityid" : "511523",
			"cityname" : "江安县"
		}, {
			"cityid" : "511524",
			"cityname" : "长宁县"
		}, {
			"cityid" : "511525",
			"cityname" : "高　县"
		}, {
			"cityid" : "511526",
			"cityname" : "珙　县"
		}, {
			"cityid" : "511527",
			"cityname" : "筠连县"
		}, {
			"cityid" : "511528",
			"cityname" : "兴文县"
		}, {
			"cityid" : "511529",
			"cityname" : "屏山县"
		} ]
	}, {
		"广安市" : [ {
			"cityid" : "511600",
			"cityname" : "广安市"
		}, {
			"cityid" : "511601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "511602",
			"cityname" : "广安区"
		}, {
			"cityid" : "511621",
			"cityname" : "岳池县"
		}, {
			"cityid" : "511622",
			"cityname" : "武胜县"
		}, {
			"cityid" : "511623",
			"cityname" : "邻水县"
		}, {
			"cityid" : "511681",
			"cityname" : "华蓥市"
		} ]
	}, {
		"达州市" : [ {
			"cityid" : "511700",
			"cityname" : "达州市"
		}, {
			"cityid" : "511701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "511702",
			"cityname" : "通川区"
		}, {
			"cityid" : "511721",
			"cityname" : "达　县"
		}, {
			"cityid" : "511722",
			"cityname" : "宣汉县"
		}, {
			"cityid" : "511723",
			"cityname" : "开江县"
		}, {
			"cityid" : "511724",
			"cityname" : "大竹县"
		}, {
			"cityid" : "511725",
			"cityname" : "渠　县"
		}, {
			"cityid" : "511781",
			"cityname" : "万源市"
		} ]
	}, {
		"雅安市" : [ {
			"cityid" : "511800",
			"cityname" : "雅安市"
		}, {
			"cityid" : "511801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "511802",
			"cityname" : "雨城区"
		}, {
			"cityid" : "511821",
			"cityname" : "名山县"
		}, {
			"cityid" : "511822",
			"cityname" : "荥经县"
		}, {
			"cityid" : "511823",
			"cityname" : "汉源县"
		}, {
			"cityid" : "511824",
			"cityname" : "石棉县"
		}, {
			"cityid" : "511825",
			"cityname" : "天全县"
		}, {
			"cityid" : "511826",
			"cityname" : "芦山县"
		}, {
			"cityid" : "511827",
			"cityname" : "宝兴县"
		} ]
	}, {
		"巴中市" : [ {
			"cityid" : "511900",
			"cityname" : "巴中市"
		}, {
			"cityid" : "511901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "511902",
			"cityname" : "巴州区"
		}, {
			"cityid" : "511921",
			"cityname" : "通江县"
		}, {
			"cityid" : "511922",
			"cityname" : "南江县"
		}, {
			"cityid" : "511923",
			"cityname" : "平昌县"
		} ]
	}, {
		"资阳市" : [ {
			"cityid" : "512000",
			"cityname" : "资阳市"
		}, {
			"cityid" : "512001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "512002",
			"cityname" : "雁江区"
		}, {
			"cityid" : "512021",
			"cityname" : "安岳县"
		}, {
			"cityid" : "512022",
			"cityname" : "乐至县"
		}, {
			"cityid" : "512081",
			"cityname" : "简阳市"
		} ]
	}, {
		"阿坝藏族羌族自治州" : [ {
			"cityid" : "513200",
			"cityname" : "阿坝藏族羌族自治州"
		}, {
			"cityid" : "513221",
			"cityname" : "汶川县"
		}, {
			"cityid" : "513222",
			"cityname" : "理　县"
		}, {
			"cityid" : "513223",
			"cityname" : "茂　县"
		}, {
			"cityid" : "513224",
			"cityname" : "松潘县"
		}, {
			"cityid" : "513225",
			"cityname" : "九寨沟县"
		}, {
			"cityid" : "513226",
			"cityname" : "金川县"
		}, {
			"cityid" : "513227",
			"cityname" : "小金县"
		}, {
			"cityid" : "513228",
			"cityname" : "黑水县"
		}, {
			"cityid" : "513229",
			"cityname" : "马尔康县"
		}, {
			"cityid" : "513230",
			"cityname" : "壤塘县"
		}, {
			"cityid" : "513231",
			"cityname" : "阿坝县"
		}, {
			"cityid" : "513232",
			"cityname" : "若尔盖县"
		}, {
			"cityid" : "513233",
			"cityname" : "红原县"
		} ]
	}, {
		"甘孜藏族自治州" : [ {
			"cityid" : "513300",
			"cityname" : "甘孜藏族自治州"
		}, {
			"cityid" : "513321",
			"cityname" : "康定县"
		}, {
			"cityid" : "513322",
			"cityname" : "泸定县"
		}, {
			"cityid" : "513323",
			"cityname" : "丹巴县"
		}, {
			"cityid" : "513324",
			"cityname" : "九龙县"
		}, {
			"cityid" : "513325",
			"cityname" : "雅江县"
		}, {
			"cityid" : "513326",
			"cityname" : "道孚县"
		}, {
			"cityid" : "513327",
			"cityname" : "炉霍县"
		}, {
			"cityid" : "513328",
			"cityname" : "甘孜县"
		}, {
			"cityid" : "513329",
			"cityname" : "新龙县"
		}, {
			"cityid" : "513330",
			"cityname" : "德格县"
		}, {
			"cityid" : "513331",
			"cityname" : "白玉县"
		}, {
			"cityid" : "513332",
			"cityname" : "石渠县"
		}, {
			"cityid" : "513333",
			"cityname" : "色达县"
		}, {
			"cityid" : "513334",
			"cityname" : "理塘县"
		}, {
			"cityid" : "513335",
			"cityname" : "巴塘县"
		}, {
			"cityid" : "513336",
			"cityname" : "乡城县"
		}, {
			"cityid" : "513337",
			"cityname" : "稻城县"
		}, {
			"cityid" : "513338",
			"cityname" : "得荣县"
		} ]
	}, {
		"凉山彝族自治州" : [ {
			"cityid" : "513400",
			"cityname" : "凉山彝族自治州"
		}, {
			"cityid" : "513401",
			"cityname" : "西昌市"
		}, {
			"cityid" : "513422",
			"cityname" : "木里藏族自治县"
		}, {
			"cityid" : "513423",
			"cityname" : "盐源县"
		}, {
			"cityid" : "513424",
			"cityname" : "德昌县"
		}, {
			"cityid" : "513425",
			"cityname" : "会理县"
		}, {
			"cityid" : "513426",
			"cityname" : "会东县"
		}, {
			"cityid" : "513427",
			"cityname" : "宁南县"
		}, {
			"cityid" : "513428",
			"cityname" : "普格县"
		}, {
			"cityid" : "513429",
			"cityname" : "布拖县"
		}, {
			"cityid" : "513430",
			"cityname" : "金阳县"
		}, {
			"cityid" : "513431",
			"cityname" : "昭觉县"
		}, {
			"cityid" : "513432",
			"cityname" : "喜德县"
		}, {
			"cityid" : "513433",
			"cityname" : "冕宁县"
		}, {
			"cityid" : "513434",
			"cityname" : "越西县"
		}, {
			"cityid" : "513435",
			"cityname" : "甘洛县"
		}, {
			"cityid" : "513436",
			"cityname" : "美姑县"
		}, {
			"cityid" : "513437",
			"cityname" : "雷波县"
		} ]
	} ],
	"贵州省" : [ {
		"cityid" : "520000",
		"cityname" : "贵州省"
	}, {
		"贵阳市" : [ {
			"cityid" : "520100",
			"cityname" : "贵阳市"
		}, {
			"cityid" : "520101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "520102",
			"cityname" : "南明区"
		}, {
			"cityid" : "520103",
			"cityname" : "云岩区"
		}, {
			"cityid" : "520111",
			"cityname" : "花溪区"
		}, {
			"cityid" : "520112",
			"cityname" : "乌当区"
		}, {
			"cityid" : "520113",
			"cityname" : "白云区"
		}, {
			"cityid" : "520114",
			"cityname" : "小河区"
		}, {
			"cityid" : "520121",
			"cityname" : "开阳县"
		}, {
			"cityid" : "520122",
			"cityname" : "息烽县"
		}, {
			"cityid" : "520123",
			"cityname" : "修文县"
		}, {
			"cityid" : "520181",
			"cityname" : "清镇市"
		} ]
	}, {
		"六盘水市" : [ {
			"cityid" : "520200",
			"cityname" : "六盘水市"
		}, {
			"cityid" : "520201",
			"cityname" : "钟山区"
		}, {
			"cityid" : "520203",
			"cityname" : "六枝特区"
		}, {
			"cityid" : "520221",
			"cityname" : "水城县"
		}, {
			"cityid" : "520222",
			"cityname" : "盘　县"
		} ]
	}, {
		"遵义市" : [ {
			"cityid" : "520300",
			"cityname" : "遵义市"
		}, {
			"cityid" : "520301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "520302",
			"cityname" : "红花岗区"
		}, {
			"cityid" : "520303",
			"cityname" : "汇川区"
		}, {
			"cityid" : "520321",
			"cityname" : "遵义县"
		}, {
			"cityid" : "520322",
			"cityname" : "桐梓县"
		}, {
			"cityid" : "520323",
			"cityname" : "绥阳县"
		}, {
			"cityid" : "520324",
			"cityname" : "正安县"
		}, {
			"cityid" : "520325",
			"cityname" : "道真仡佬族苗族自治县"
		}, {
			"cityid" : "520326",
			"cityname" : "务川仡佬族苗族自治县"
		}, {
			"cityid" : "520327",
			"cityname" : "凤冈县"
		}, {
			"cityid" : "520328",
			"cityname" : "湄潭县"
		}, {
			"cityid" : "520329",
			"cityname" : "余庆县"
		}, {
			"cityid" : "520330",
			"cityname" : "习水县"
		}, {
			"cityid" : "520381",
			"cityname" : "赤水市"
		}, {
			"cityid" : "520382",
			"cityname" : "仁怀市"
		} ]
	}, {
		"安顺市" : [ {
			"cityid" : "520400",
			"cityname" : "安顺市"
		}, {
			"cityid" : "520401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "520402",
			"cityname" : "西秀区"
		}, {
			"cityid" : "520421",
			"cityname" : "平坝县"
		}, {
			"cityid" : "520422",
			"cityname" : "普定县"
		}, {
			"cityid" : "520423",
			"cityname" : "镇宁布依族苗族自治县"
		}, {
			"cityid" : "520424",
			"cityname" : "关岭布依族苗族自治县"
		}, {
			"cityid" : "520425",
			"cityname" : "紫云苗族布依族自治县"
		} ]
	}, {
		"铜仁地区" : [ {
			"cityid" : "522200",
			"cityname" : "铜仁地区"
		}, {
			"cityid" : "522201",
			"cityname" : "铜仁市"
		}, {
			"cityid" : "522222",
			"cityname" : "江口县"
		}, {
			"cityid" : "522223",
			"cityname" : "玉屏侗族自治县"
		}, {
			"cityid" : "522224",
			"cityname" : "石阡县"
		}, {
			"cityid" : "522225",
			"cityname" : "思南县"
		}, {
			"cityid" : "522226",
			"cityname" : "印江土家族苗族自治县"
		}, {
			"cityid" : "522227",
			"cityname" : "德江县"
		}, {
			"cityid" : "522228",
			"cityname" : "沿河土家族自治县"
		}, {
			"cityid" : "522229",
			"cityname" : "松桃苗族自治县"
		}, {
			"cityid" : "522230",
			"cityname" : "万山特区"
		} ]
	}, {
		"黔西南布依族苗族自治州" : [ {
			"cityid" : "522300",
			"cityname" : "黔西南布依族苗族自治州"
		}, {
			"cityid" : "522301",
			"cityname" : "兴义市"
		}, {
			"cityid" : "522322",
			"cityname" : "兴仁县"
		}, {
			"cityid" : "522323",
			"cityname" : "普安县"
		}, {
			"cityid" : "522324",
			"cityname" : "晴隆县"
		}, {
			"cityid" : "522325",
			"cityname" : "贞丰县"
		}, {
			"cityid" : "522326",
			"cityname" : "望谟县"
		}, {
			"cityid" : "522327",
			"cityname" : "册亨县"
		}, {
			"cityid" : "522328",
			"cityname" : "安龙县"
		} ]
	}, {
		"毕节地区" : [ {
			"cityid" : "522400",
			"cityname" : "毕节地区"
		}, {
			"cityid" : "522401",
			"cityname" : "毕节市"
		}, {
			"cityid" : "522422",
			"cityname" : "大方县"
		}, {
			"cityid" : "522423",
			"cityname" : "黔西县"
		}, {
			"cityid" : "522424",
			"cityname" : "金沙县"
		}, {
			"cityid" : "522425",
			"cityname" : "织金县"
		}, {
			"cityid" : "522426",
			"cityname" : "纳雍县"
		}, {
			"cityid" : "522427",
			"cityname" : "威宁彝族回族苗族自治县"
		}, {
			"cityid" : "522428",
			"cityname" : "赫章县"
		} ]
	}, {
		"黔东南苗族侗族自治州" : [ {
			"cityid" : "522600",
			"cityname" : "黔东南苗族侗族自治州"
		}, {
			"cityid" : "522601",
			"cityname" : "凯里市"
		}, {
			"cityid" : "522622",
			"cityname" : "黄平县"
		}, {
			"cityid" : "522623",
			"cityname" : "施秉县"
		}, {
			"cityid" : "522624",
			"cityname" : "三穗县"
		}, {
			"cityid" : "522625",
			"cityname" : "镇远县"
		}, {
			"cityid" : "522626",
			"cityname" : "岑巩县"
		}, {
			"cityid" : "522627",
			"cityname" : "天柱县"
		}, {
			"cityid" : "522628",
			"cityname" : "锦屏县"
		}, {
			"cityid" : "522629",
			"cityname" : "剑河县"
		}, {
			"cityid" : "522630",
			"cityname" : "台江县"
		}, {
			"cityid" : "522631",
			"cityname" : "黎平县"
		}, {
			"cityid" : "522632",
			"cityname" : "榕江县"
		}, {
			"cityid" : "522633",
			"cityname" : "从江县"
		}, {
			"cityid" : "522634",
			"cityname" : "雷山县"
		}, {
			"cityid" : "522635",
			"cityname" : "麻江县"
		}, {
			"cityid" : "522636",
			"cityname" : "丹寨县"
		} ]
	}, {
		"黔南布依族苗族自治州" : [ {
			"cityid" : "522700",
			"cityname" : "黔南布依族苗族自治州"
		}, {
			"cityid" : "522701",
			"cityname" : "都匀市"
		}, {
			"cityid" : "522702",
			"cityname" : "福泉市"
		}, {
			"cityid" : "522722",
			"cityname" : "荔波县"
		}, {
			"cityid" : "522723",
			"cityname" : "贵定县"
		}, {
			"cityid" : "522725",
			"cityname" : "瓮安县"
		}, {
			"cityid" : "522726",
			"cityname" : "独山县"
		}, {
			"cityid" : "522727",
			"cityname" : "平塘县"
		}, {
			"cityid" : "522728",
			"cityname" : "罗甸县"
		}, {
			"cityid" : "522729",
			"cityname" : "长顺县"
		}, {
			"cityid" : "522730",
			"cityname" : "龙里县"
		}, {
			"cityid" : "522731",
			"cityname" : "惠水县"
		}, {
			"cityid" : "522732",
			"cityname" : "三都水族自治县"
		} ]
	} ],
	"云南省" : [ {
		"cityid" : "530000",
		"cityname" : "云南省"
	}, {
		"昆明市" : [ {
			"cityid" : "530100",
			"cityname" : "昆明市"
		}, {
			"cityid" : "530101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "530102",
			"cityname" : "五华区"
		}, {
			"cityid" : "530103",
			"cityname" : "盘龙区"
		}, {
			"cityid" : "530111",
			"cityname" : "官渡区"
		}, {
			"cityid" : "530112",
			"cityname" : "西山区"
		}, {
			"cityid" : "530113",
			"cityname" : "东川区"
		}, {
			"cityid" : "530121",
			"cityname" : "呈贡县"
		}, {
			"cityid" : "530122",
			"cityname" : "晋宁县"
		}, {
			"cityid" : "530124",
			"cityname" : "富民县"
		}, {
			"cityid" : "530125",
			"cityname" : "宜良县"
		}, {
			"cityid" : "530126",
			"cityname" : "石林彝族自治县"
		}, {
			"cityid" : "530127",
			"cityname" : "嵩明县"
		}, {
			"cityid" : "530128",
			"cityname" : "禄劝彝族苗族自治县"
		}, {
			"cityid" : "530129",
			"cityname" : "寻甸回族彝族自治县"
		}, {
			"cityid" : "530181",
			"cityname" : "安宁市"
		} ]
	}, {
		"曲靖市" : [ {
			"cityid" : "530300",
			"cityname" : "曲靖市"
		}, {
			"cityid" : "530301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "530302",
			"cityname" : "麒麟区"
		}, {
			"cityid" : "530321",
			"cityname" : "马龙县"
		}, {
			"cityid" : "530322",
			"cityname" : "陆良县"
		}, {
			"cityid" : "530323",
			"cityname" : "师宗县"
		}, {
			"cityid" : "530324",
			"cityname" : "罗平县"
		}, {
			"cityid" : "530325",
			"cityname" : "富源县"
		}, {
			"cityid" : "530326",
			"cityname" : "会泽县"
		}, {
			"cityid" : "530328",
			"cityname" : "沾益县"
		}, {
			"cityid" : "530381",
			"cityname" : "宣威市"
		} ]
	}, {
		"玉溪市" : [ {
			"cityid" : "530400",
			"cityname" : "玉溪市"
		}, {
			"cityid" : "530401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "530402",
			"cityname" : "红塔区"
		}, {
			"cityid" : "530421",
			"cityname" : "江川县"
		}, {
			"cityid" : "530422",
			"cityname" : "澄江县"
		}, {
			"cityid" : "530423",
			"cityname" : "通海县"
		}, {
			"cityid" : "530424",
			"cityname" : "华宁县"
		}, {
			"cityid" : "530425",
			"cityname" : "易门县"
		}, {
			"cityid" : "530426",
			"cityname" : "峨山彝族自治县"
		}, {
			"cityid" : "530427",
			"cityname" : "新平彝族傣族自治县"
		}, {
			"cityid" : "530428",
			"cityname" : "元江哈尼族彝族傣族自治县"
		} ]
	}, {
		"保山市" : [ {
			"cityid" : "530500",
			"cityname" : "保山市"
		}, {
			"cityid" : "530501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "530502",
			"cityname" : "隆阳区"
		}, {
			"cityid" : "530521",
			"cityname" : "施甸县"
		}, {
			"cityid" : "530522",
			"cityname" : "腾冲县"
		}, {
			"cityid" : "530523",
			"cityname" : "龙陵县"
		}, {
			"cityid" : "530524",
			"cityname" : "昌宁县"
		} ]
	}, {
		"昭通市" : [ {
			"cityid" : "530600",
			"cityname" : "昭通市"
		}, {
			"cityid" : "530601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "530602",
			"cityname" : "昭阳区"
		}, {
			"cityid" : "530621",
			"cityname" : "鲁甸县"
		}, {
			"cityid" : "530622",
			"cityname" : "巧家县"
		}, {
			"cityid" : "530623",
			"cityname" : "盐津县"
		}, {
			"cityid" : "530624",
			"cityname" : "大关县"
		}, {
			"cityid" : "530625",
			"cityname" : "永善县"
		}, {
			"cityid" : "530626",
			"cityname" : "绥江县"
		}, {
			"cityid" : "530627",
			"cityname" : "镇雄县"
		}, {
			"cityid" : "530628",
			"cityname" : "彝良县"
		}, {
			"cityid" : "530629",
			"cityname" : "威信县"
		}, {
			"cityid" : "530630",
			"cityname" : "水富县"
		} ]
	}, {
		"丽江市" : [ {
			"cityid" : "530700",
			"cityname" : "丽江市"
		}, {
			"cityid" : "530701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "530702",
			"cityname" : "古城区"
		}, {
			"cityid" : "530721",
			"cityname" : "玉龙纳西族自治县"
		}, {
			"cityid" : "530722",
			"cityname" : "永胜县"
		}, {
			"cityid" : "530723",
			"cityname" : "华坪县"
		}, {
			"cityid" : "530724",
			"cityname" : "宁蒗彝族自治县"
		} ]
	}, {
		"普洱市" : [ {
			"cityid" : "530800",
			"cityname" : "普洱市"
		}, {
			"cityid" : "530801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "530802",
			"cityname" : "思茅区"
		}, {
			"cityid" : "530821",
			"cityname" : "宁洱哈尼族彝族自治县"
		}, {
			"cityid" : "530822",
			"cityname" : "墨江哈尼族自治县"
		}, {
			"cityid" : "530823",
			"cityname" : "景东彝族自治县"
		}, {
			"cityid" : "530824",
			"cityname" : "景谷傣族彝族自治县"
		}, {
			"cityid" : "530825",
			"cityname" : "镇沅彝族哈尼族拉祜族自治县"
		}, {
			"cityid" : "530826",
			"cityname" : "江城哈尼族彝族自治县"
		}, {
			"cityid" : "530827",
			"cityname" : "孟连傣族拉祜族佤族自治县"
		}, {
			"cityid" : "530828",
			"cityname" : "澜沧拉祜族自治县"
		}, {
			"cityid" : "530829",
			"cityname" : "西盟佤族自治县"
		} ]
	}, {
		"临沧市" : [ {
			"cityid" : "530900",
			"cityname" : "临沧市"
		}, {
			"cityid" : "530901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "530902",
			"cityname" : "临翔区"
		}, {
			"cityid" : "530921",
			"cityname" : "凤庆县"
		}, {
			"cityid" : "530922",
			"cityname" : "云　县"
		}, {
			"cityid" : "530923",
			"cityname" : "永德县"
		}, {
			"cityid" : "530924",
			"cityname" : "镇康县"
		}, {
			"cityid" : "530925",
			"cityname" : "双江拉祜族佤族布朗族傣族自治县"
		}, {
			"cityid" : "530926",
			"cityname" : "耿马傣族佤族自治县"
		}, {
			"cityid" : "530927",
			"cityname" : "沧源佤族自治县"
		} ]
	}, {
		"楚雄彝族自治州" : [ {
			"cityid" : "532300",
			"cityname" : "楚雄彝族自治州"
		}, {
			"cityid" : "532301",
			"cityname" : "楚雄市"
		}, {
			"cityid" : "532322",
			"cityname" : "双柏县"
		}, {
			"cityid" : "532323",
			"cityname" : "牟定县"
		}, {
			"cityid" : "532324",
			"cityname" : "南华县"
		}, {
			"cityid" : "532325",
			"cityname" : "姚安县"
		}, {
			"cityid" : "532326",
			"cityname" : "大姚县"
		}, {
			"cityid" : "532327",
			"cityname" : "永仁县"
		}, {
			"cityid" : "532328",
			"cityname" : "元谋县"
		}, {
			"cityid" : "532329",
			"cityname" : "武定县"
		}, {
			"cityid" : "532331",
			"cityname" : "禄丰县"
		} ]
	}, {
		"红河哈尼族彝族自治州" : [ {
			"cityid" : "532500",
			"cityname" : "红河哈尼族彝族自治州"
		}, {
			"cityid" : "532501",
			"cityname" : "个旧市"
		}, {
			"cityid" : "532502",
			"cityname" : "开远市"
		}, {
			"cityid" : "532522",
			"cityname" : "蒙自县"
		}, {
			"cityid" : "532523",
			"cityname" : "屏边苗族自治县"
		}, {
			"cityid" : "532524",
			"cityname" : "建水县"
		}, {
			"cityid" : "532525",
			"cityname" : "石屏县"
		}, {
			"cityid" : "532526",
			"cityname" : "弥勒县"
		}, {
			"cityid" : "532527",
			"cityname" : "泸西县"
		}, {
			"cityid" : "532528",
			"cityname" : "元阳县"
		}, {
			"cityid" : "532529",
			"cityname" : "红河县"
		}, {
			"cityid" : "532530",
			"cityname" : "金平苗族瑶族傣族自治县"
		}, {
			"cityid" : "532531",
			"cityname" : "绿春县"
		}, {
			"cityid" : "532532",
			"cityname" : "河口瑶族自治县"
		} ]
	}, {
		"文山壮族苗族自治州" : [ {
			"cityid" : "532600",
			"cityname" : "文山壮族苗族自治州"
		}, {
			"cityid" : "532621",
			"cityname" : "文山县"
		}, {
			"cityid" : "532622",
			"cityname" : "砚山县"
		}, {
			"cityid" : "532623",
			"cityname" : "西畴县"
		}, {
			"cityid" : "532624",
			"cityname" : "麻栗坡县"
		}, {
			"cityid" : "532625",
			"cityname" : "马关县"
		}, {
			"cityid" : "532626",
			"cityname" : "丘北县"
		}, {
			"cityid" : "532627",
			"cityname" : "广南县"
		}, {
			"cityid" : "532628",
			"cityname" : "富宁县"
		} ]
	}, {
		"西双版纳傣族自治州" : [ {
			"cityid" : "532800",
			"cityname" : "西双版纳傣族自治州"
		}, {
			"cityid" : "532801",
			"cityname" : "景洪市"
		}, {
			"cityid" : "532822",
			"cityname" : "勐海县"
		}, {
			"cityid" : "532823",
			"cityname" : "勐腊县"
		} ]
	}, {
		"大理白族自治州" : [ {
			"cityid" : "532900",
			"cityname" : "大理白族自治州"
		}, {
			"cityid" : "532901",
			"cityname" : "大理市"
		}, {
			"cityid" : "532922",
			"cityname" : "漾濞彝族自治县"
		}, {
			"cityid" : "532923",
			"cityname" : "祥云县"
		}, {
			"cityid" : "532924",
			"cityname" : "宾川县"
		}, {
			"cityid" : "532925",
			"cityname" : "弥渡县"
		}, {
			"cityid" : "532926",
			"cityname" : "南涧彝族自治县"
		}, {
			"cityid" : "532927",
			"cityname" : "巍山彝族回族自治县"
		}, {
			"cityid" : "532928",
			"cityname" : "永平县"
		}, {
			"cityid" : "532929",
			"cityname" : "云龙县"
		}, {
			"cityid" : "532930",
			"cityname" : "洱源县"
		}, {
			"cityid" : "532931",
			"cityname" : "剑川县"
		}, {
			"cityid" : "532932",
			"cityname" : "鹤庆县"
		} ]
	}, {
		"德宏傣族景颇族自治州" : [ {
			"cityid" : "533100",
			"cityname" : "德宏傣族景颇族自治州"
		}, {
			"cityid" : "533102",
			"cityname" : "瑞丽市"
		}, {
			"cityid" : "533103",
			"cityname" : "潞西市"
		}, {
			"cityid" : "533122",
			"cityname" : "梁河县"
		}, {
			"cityid" : "533123",
			"cityname" : "盈江县"
		}, {
			"cityid" : "533124",
			"cityname" : "陇川县"
		} ]
	}, {
		"怒江傈僳族自治州" : [ {
			"cityid" : "533300",
			"cityname" : "怒江傈僳族自治州"
		}, {
			"cityid" : "533321",
			"cityname" : "泸水县"
		}, {
			"cityid" : "533323",
			"cityname" : "福贡县"
		}, {
			"cityid" : "533324",
			"cityname" : "贡山独龙族怒族自治县"
		}, {
			"cityid" : "533325",
			"cityname" : "兰坪白族普米族自治县"
		} ]
	}, {
		"迪庆藏族自治州" : [ {
			"cityid" : "533400",
			"cityname" : "迪庆藏族自治州"
		}, {
			"cityid" : "533421",
			"cityname" : "香格里拉县"
		}, {
			"cityid" : "533422",
			"cityname" : "德钦县"
		}, {
			"cityid" : "533423",
			"cityname" : "维西傈僳族自治县"
		} ]
	} ],
	"西藏自治区" : [ {
		"cityid" : "540000",
		"cityname" : "西藏自治区"
	}, {
		"拉萨市" : [ {
			"cityid" : "540100",
			"cityname" : "拉萨市"
		}, {
			"cityid" : "540101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "540102",
			"cityname" : "城关区"
		}, {
			"cityid" : "540121",
			"cityname" : "林周县"
		}, {
			"cityid" : "540122",
			"cityname" : "当雄县"
		}, {
			"cityid" : "540123",
			"cityname" : "尼木县"
		}, {
			"cityid" : "540124",
			"cityname" : "曲水县"
		}, {
			"cityid" : "540125",
			"cityname" : "堆龙德庆县"
		}, {
			"cityid" : "540126",
			"cityname" : "达孜县"
		}, {
			"cityid" : "540127",
			"cityname" : "墨竹工卡县"
		} ]
	}, {
		"昌都地区" : [ {
			"cityid" : "542100",
			"cityname" : "昌都地区"
		}, {
			"cityid" : "542121",
			"cityname" : "昌都县"
		}, {
			"cityid" : "542122",
			"cityname" : "江达县"
		}, {
			"cityid" : "542123",
			"cityname" : "贡觉县"
		}, {
			"cityid" : "542124",
			"cityname" : "类乌齐县"
		}, {
			"cityid" : "542125",
			"cityname" : "丁青县"
		}, {
			"cityid" : "542126",
			"cityname" : "察雅县"
		}, {
			"cityid" : "542127",
			"cityname" : "八宿县"
		}, {
			"cityid" : "542128",
			"cityname" : "左贡县"
		}, {
			"cityid" : "542129",
			"cityname" : "芒康县"
		}, {
			"cityid" : "542132",
			"cityname" : "洛隆县"
		}, {
			"cityid" : "542133",
			"cityname" : "边坝县"
		} ]
	}, {
		"山南地区" : [ {
			"cityid" : "542200",
			"cityname" : "山南地区"
		}, {
			"cityid" : "542221",
			"cityname" : "乃东县"
		}, {
			"cityid" : "542222",
			"cityname" : "扎囊县"
		}, {
			"cityid" : "542223",
			"cityname" : "贡嘎县"
		}, {
			"cityid" : "542224",
			"cityname" : "桑日县"
		}, {
			"cityid" : "542225",
			"cityname" : "琼结县"
		}, {
			"cityid" : "542226",
			"cityname" : "曲松县"
		}, {
			"cityid" : "542227",
			"cityname" : "措美县"
		}, {
			"cityid" : "542228",
			"cityname" : "洛扎县"
		}, {
			"cityid" : "542229",
			"cityname" : "加查县"
		}, {
			"cityid" : "542231",
			"cityname" : "隆子县"
		}, {
			"cityid" : "542232",
			"cityname" : "错那县"
		}, {
			"cityid" : "542233",
			"cityname" : "浪卡子县"
		} ]
	}, {
		"日喀则地区" : [ {
			"cityid" : "542300",
			"cityname" : "日喀则地区"
		}, {
			"cityid" : "542301",
			"cityname" : "日喀则市"
		}, {
			"cityid" : "542322",
			"cityname" : "南木林县"
		}, {
			"cityid" : "542323",
			"cityname" : "江孜县"
		}, {
			"cityid" : "542324",
			"cityname" : "定日县"
		}, {
			"cityid" : "542325",
			"cityname" : "萨迦县"
		}, {
			"cityid" : "542326",
			"cityname" : "拉孜县"
		}, {
			"cityid" : "542327",
			"cityname" : "昂仁县"
		}, {
			"cityid" : "542328",
			"cityname" : "谢通门县"
		}, {
			"cityid" : "542329",
			"cityname" : "白朗县"
		}, {
			"cityid" : "542330",
			"cityname" : "仁布县"
		}, {
			"cityid" : "542331",
			"cityname" : "康马县"
		}, {
			"cityid" : "542332",
			"cityname" : "定结县"
		}, {
			"cityid" : "542333",
			"cityname" : "仲巴县"
		}, {
			"cityid" : "542334",
			"cityname" : "亚东县"
		}, {
			"cityid" : "542335",
			"cityname" : "吉隆县"
		}, {
			"cityid" : "542336",
			"cityname" : "聂拉木县"
		}, {
			"cityid" : "542337",
			"cityname" : "萨嘎县"
		}, {
			"cityid" : "542338",
			"cityname" : "岗巴县"
		} ]
	}, {
		"那曲地区" : [ {
			"cityid" : "542400",
			"cityname" : "那曲地区"
		}, {
			"cityid" : "542421",
			"cityname" : "那曲县"
		}, {
			"cityid" : "542422",
			"cityname" : "嘉黎县"
		}, {
			"cityid" : "542423",
			"cityname" : "比如县"
		}, {
			"cityid" : "542424",
			"cityname" : "聂荣县"
		}, {
			"cityid" : "542425",
			"cityname" : "安多县"
		}, {
			"cityid" : "542426",
			"cityname" : "申扎县"
		}, {
			"cityid" : "542427",
			"cityname" : "索　县"
		}, {
			"cityid" : "542428",
			"cityname" : "班戈县"
		}, {
			"cityid" : "542429",
			"cityname" : "巴青县"
		}, {
			"cityid" : "542430",
			"cityname" : "尼玛县"
		} ]
	}, {
		"阿里地区" : [ {
			"cityid" : "542500",
			"cityname" : "阿里地区"
		}, {
			"cityid" : "542521",
			"cityname" : "普兰县"
		}, {
			"cityid" : "542522",
			"cityname" : "札达县"
		}, {
			"cityid" : "542523",
			"cityname" : "噶尔县"
		}, {
			"cityid" : "542524",
			"cityname" : "日土县"
		}, {
			"cityid" : "542525",
			"cityname" : "革吉县"
		}, {
			"cityid" : "542526",
			"cityname" : "改则县"
		}, {
			"cityid" : "542527",
			"cityname" : "措勤县"
		} ]
	}, {
		"林芝地区" : [ {
			"cityid" : "542600",
			"cityname" : "林芝地区"
		}, {
			"cityid" : "542621",
			"cityname" : "林芝县"
		}, {
			"cityid" : "542622",
			"cityname" : "工布江达县"
		}, {
			"cityid" : "542623",
			"cityname" : "米林县"
		}, {
			"cityid" : "542624",
			"cityname" : "墨脱县"
		}, {
			"cityid" : "542625",
			"cityname" : "波密县"
		}, {
			"cityid" : "542626",
			"cityname" : "察隅县"
		}, {
			"cityid" : "542627",
			"cityname" : "朗　县"
		} ]
	} ],
	"陕西省" : [ {
		"cityid" : "610000",
		"cityname" : "陕西省"
	}, {
		"西安市" : [ {
			"cityid" : "610100",
			"cityname" : "西安市"
		}, {
			"cityid" : "610101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "610102",
			"cityname" : "新城区"
		}, {
			"cityid" : "610103",
			"cityname" : "碑林区"
		}, {
			"cityid" : "610104",
			"cityname" : "莲湖区"
		}, {
			"cityid" : "610111",
			"cityname" : "灞桥区"
		}, {
			"cityid" : "610112",
			"cityname" : "未央区"
		}, {
			"cityid" : "610113",
			"cityname" : "雁塔区"
		}, {
			"cityid" : "610114",
			"cityname" : "阎良区"
		}, {
			"cityid" : "610115",
			"cityname" : "临潼区"
		}, {
			"cityid" : "610116",
			"cityname" : "长安区"
		}, {
			"cityid" : "610122",
			"cityname" : "蓝田县"
		}, {
			"cityid" : "610124",
			"cityname" : "周至县"
		}, {
			"cityid" : "610125",
			"cityname" : "户　县"
		}, {
			"cityid" : "610126",
			"cityname" : "高陵县"
		} ]
	}, {
		"铜川市" : [ {
			"cityid" : "610200",
			"cityname" : "铜川市"
		}, {
			"cityid" : "610201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "610202",
			"cityname" : "王益区"
		}, {
			"cityid" : "610203",
			"cityname" : "印台区"
		}, {
			"cityid" : "610204",
			"cityname" : "耀州区"
		}, {
			"cityid" : "610222",
			"cityname" : "宜君县"
		} ]
	}, {
		"宝鸡市" : [ {
			"cityid" : "610300",
			"cityname" : "宝鸡市"
		}, {
			"cityid" : "610301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "610302",
			"cityname" : "渭滨区"
		}, {
			"cityid" : "610303",
			"cityname" : "金台区"
		}, {
			"cityid" : "610304",
			"cityname" : "陈仓区"
		}, {
			"cityid" : "610322",
			"cityname" : "凤翔县"
		}, {
			"cityid" : "610323",
			"cityname" : "岐山县"
		}, {
			"cityid" : "610324",
			"cityname" : "扶风县"
		}, {
			"cityid" : "610326",
			"cityname" : "眉　县"
		}, {
			"cityid" : "610327",
			"cityname" : "陇　县"
		}, {
			"cityid" : "610328",
			"cityname" : "千阳县"
		}, {
			"cityid" : "610329",
			"cityname" : "麟游县"
		}, {
			"cityid" : "610330",
			"cityname" : "凤　县"
		}, {
			"cityid" : "610331",
			"cityname" : "太白县"
		} ]
	}, {
		"咸阳市" : [ {
			"cityid" : "610400",
			"cityname" : "咸阳市"
		}, {
			"cityid" : "610401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "610402",
			"cityname" : "秦都区"
		}, {
			"cityid" : "610403",
			"cityname" : "杨陵区"
		}, {
			"cityid" : "610404",
			"cityname" : "渭城区"
		}, {
			"cityid" : "610422",
			"cityname" : "三原县"
		}, {
			"cityid" : "610423",
			"cityname" : "泾阳县"
		}, {
			"cityid" : "610424",
			"cityname" : "乾　县"
		}, {
			"cityid" : "610425",
			"cityname" : "礼泉县"
		}, {
			"cityid" : "610426",
			"cityname" : "永寿县"
		}, {
			"cityid" : "610427",
			"cityname" : "彬　县"
		}, {
			"cityid" : "610428",
			"cityname" : "长武县"
		}, {
			"cityid" : "610429",
			"cityname" : "旬邑县"
		}, {
			"cityid" : "610430",
			"cityname" : "淳化县"
		}, {
			"cityid" : "610431",
			"cityname" : "武功县"
		}, {
			"cityid" : "610481",
			"cityname" : "兴平市"
		} ]
	}, {
		"渭南市" : [ {
			"cityid" : "610500",
			"cityname" : "渭南市"
		}, {
			"cityid" : "610501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "610502",
			"cityname" : "临渭区"
		}, {
			"cityid" : "610521",
			"cityname" : "华　县"
		}, {
			"cityid" : "610522",
			"cityname" : "潼关县"
		}, {
			"cityid" : "610523",
			"cityname" : "大荔县"
		}, {
			"cityid" : "610524",
			"cityname" : "合阳县"
		}, {
			"cityid" : "610525",
			"cityname" : "澄城县"
		}, {
			"cityid" : "610526",
			"cityname" : "蒲城县"
		}, {
			"cityid" : "610527",
			"cityname" : "白水县"
		}, {
			"cityid" : "610528",
			"cityname" : "富平县"
		}, {
			"cityid" : "610581",
			"cityname" : "韩城市"
		}, {
			"cityid" : "610582",
			"cityname" : "华阴市"
		} ]
	}, {
		"延安市" : [ {
			"cityid" : "610600",
			"cityname" : "延安市"
		}, {
			"cityid" : "610601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "610602",
			"cityname" : "宝塔区"
		}, {
			"cityid" : "610621",
			"cityname" : "延长县"
		}, {
			"cityid" : "610622",
			"cityname" : "延川县"
		}, {
			"cityid" : "610623",
			"cityname" : "子长县"
		}, {
			"cityid" : "610624",
			"cityname" : "安塞县"
		}, {
			"cityid" : "610625",
			"cityname" : "志丹县"
		}, {
			"cityid" : "610626",
			"cityname" : "吴起县"
		}, {
			"cityid" : "610627",
			"cityname" : "甘泉县"
		}, {
			"cityid" : "610628",
			"cityname" : "富　县"
		}, {
			"cityid" : "610629",
			"cityname" : "洛川县"
		}, {
			"cityid" : "610630",
			"cityname" : "宜川县"
		}, {
			"cityid" : "610631",
			"cityname" : "黄龙县"
		}, {
			"cityid" : "610632",
			"cityname" : "黄陵县"
		} ]
	}, {
		"汉中市" : [ {
			"cityid" : "610700",
			"cityname" : "汉中市"
		}, {
			"cityid" : "610701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "610702",
			"cityname" : "汉台区"
		}, {
			"cityid" : "610721",
			"cityname" : "南郑县"
		}, {
			"cityid" : "610722",
			"cityname" : "城固县"
		}, {
			"cityid" : "610723",
			"cityname" : "洋　县"
		}, {
			"cityid" : "610724",
			"cityname" : "西乡县"
		}, {
			"cityid" : "610725",
			"cityname" : "勉　县"
		}, {
			"cityid" : "610726",
			"cityname" : "宁强县"
		}, {
			"cityid" : "610727",
			"cityname" : "略阳县"
		}, {
			"cityid" : "610728",
			"cityname" : "镇巴县"
		}, {
			"cityid" : "610729",
			"cityname" : "留坝县"
		}, {
			"cityid" : "610730",
			"cityname" : "佛坪县"
		} ]
	}, {
		"榆林市" : [ {
			"cityid" : "610800",
			"cityname" : "榆林市"
		}, {
			"cityid" : "610801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "610802",
			"cityname" : "榆阳区"
		}, {
			"cityid" : "610821",
			"cityname" : "神木县"
		}, {
			"cityid" : "610822",
			"cityname" : "府谷县"
		}, {
			"cityid" : "610823",
			"cityname" : "横山县"
		}, {
			"cityid" : "610824",
			"cityname" : "靖边县"
		}, {
			"cityid" : "610825",
			"cityname" : "定边县"
		}, {
			"cityid" : "610826",
			"cityname" : "绥德县"
		}, {
			"cityid" : "610827",
			"cityname" : "米脂县"
		}, {
			"cityid" : "610828",
			"cityname" : "佳　县"
		}, {
			"cityid" : "610829",
			"cityname" : "吴堡县"
		}, {
			"cityid" : "610830",
			"cityname" : "清涧县"
		}, {
			"cityid" : "610831",
			"cityname" : "子洲县"
		} ]
	}, {
		"安康市" : [ {
			"cityid" : "610900",
			"cityname" : "安康市"
		}, {
			"cityid" : "610901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "610902",
			"cityname" : "汉滨区"
		}, {
			"cityid" : "610921",
			"cityname" : "汉阴县"
		}, {
			"cityid" : "610922",
			"cityname" : "石泉县"
		}, {
			"cityid" : "610923",
			"cityname" : "宁陕县"
		}, {
			"cityid" : "610924",
			"cityname" : "紫阳县"
		}, {
			"cityid" : "610925",
			"cityname" : "岚皋县"
		}, {
			"cityid" : "610926",
			"cityname" : "平利县"
		}, {
			"cityid" : "610927",
			"cityname" : "镇坪县"
		}, {
			"cityid" : "610928",
			"cityname" : "旬阳县"
		}, {
			"cityid" : "610929",
			"cityname" : "白河县"
		} ]
	}, {
		"商洛市" : [ {
			"cityid" : "611000",
			"cityname" : "商洛市"
		}, {
			"cityid" : "611001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "611002",
			"cityname" : "商州区"
		}, {
			"cityid" : "611021",
			"cityname" : "洛南县"
		}, {
			"cityid" : "611022",
			"cityname" : "丹凤县"
		}, {
			"cityid" : "611023",
			"cityname" : "商南县"
		}, {
			"cityid" : "611024",
			"cityname" : "山阳县"
		}, {
			"cityid" : "611025",
			"cityname" : "镇安县"
		}, {
			"cityid" : "611026",
			"cityname" : "柞水县"
		} ]
	} ],
	"甘肃省" : [ {
		"cityid" : "620000",
		"cityname" : "甘肃省"
	}, {
		"兰州市" : [ {
			"cityid" : "620100",
			"cityname" : "兰州市"
		}, {
			"cityid" : "620101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "620102",
			"cityname" : "城关区"
		}, {
			"cityid" : "620103",
			"cityname" : "七里河区"
		}, {
			"cityid" : "620104",
			"cityname" : "西固区"
		}, {
			"cityid" : "620105",
			"cityname" : "安宁区"
		}, {
			"cityid" : "620111",
			"cityname" : "红古区"
		}, {
			"cityid" : "620121",
			"cityname" : "永登县"
		}, {
			"cityid" : "620122",
			"cityname" : "皋兰县"
		}, {
			"cityid" : "620123",
			"cityname" : "榆中县"
		} ]
	}, {
		"嘉峪关市" : [ {
			"cityid" : "620200",
			"cityname" : "嘉峪关市"
		}, {
			"cityid" : "620201",
			"cityname" : "市辖区"
		} ]
	}, {
		"金昌市" : [ {
			"cityid" : "620300",
			"cityname" : "金昌市"
		}, {
			"cityid" : "620301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "620302",
			"cityname" : "金川区"
		}, {
			"cityid" : "620321",
			"cityname" : "永昌县"
		} ]
	}, {
		"白银市" : [ {
			"cityid" : "620400",
			"cityname" : "白银市"
		}, {
			"cityid" : "620401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "620402",
			"cityname" : "白银区"
		}, {
			"cityid" : "620403",
			"cityname" : "平川区"
		}, {
			"cityid" : "620421",
			"cityname" : "靖远县"
		}, {
			"cityid" : "620422",
			"cityname" : "会宁县"
		}, {
			"cityid" : "620423",
			"cityname" : "景泰县"
		} ]
	}, {
		"天水市" : [ {
			"cityid" : "620500",
			"cityname" : "天水市"
		}, {
			"cityid" : "620501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "620502",
			"cityname" : "秦州区"
		}, {
			"cityid" : "620503",
			"cityname" : "麦积区"
		}, {
			"cityid" : "620521",
			"cityname" : "清水县"
		}, {
			"cityid" : "620522",
			"cityname" : "秦安县"
		}, {
			"cityid" : "620523",
			"cityname" : "甘谷县"
		}, {
			"cityid" : "620524",
			"cityname" : "武山县"
		}, {
			"cityid" : "620525",
			"cityname" : "张家川回族自治县"
		} ]
	}, {
		"武威市" : [ {
			"cityid" : "620600",
			"cityname" : "武威市"
		}, {
			"cityid" : "620601",
			"cityname" : "市辖区"
		}, {
			"cityid" : "620602",
			"cityname" : "凉州区"
		}, {
			"cityid" : "620621",
			"cityname" : "民勤县"
		}, {
			"cityid" : "620622",
			"cityname" : "古浪县"
		}, {
			"cityid" : "620623",
			"cityname" : "天祝藏族自治县"
		} ]
	}, {
		"张掖市" : [ {
			"cityid" : "620700",
			"cityname" : "张掖市"
		}, {
			"cityid" : "620701",
			"cityname" : "市辖区"
		}, {
			"cityid" : "620702",
			"cityname" : "甘州区"
		}, {
			"cityid" : "620721",
			"cityname" : "肃南裕固族自治县"
		}, {
			"cityid" : "620722",
			"cityname" : "民乐县"
		}, {
			"cityid" : "620723",
			"cityname" : "临泽县"
		}, {
			"cityid" : "620724",
			"cityname" : "高台县"
		}, {
			"cityid" : "620725",
			"cityname" : "山丹县"
		} ]
	}, {
		"平凉市" : [ {
			"cityid" : "620800",
			"cityname" : "平凉市"
		}, {
			"cityid" : "620801",
			"cityname" : "市辖区"
		}, {
			"cityid" : "620802",
			"cityname" : "崆峒区"
		}, {
			"cityid" : "620821",
			"cityname" : "泾川县"
		}, {
			"cityid" : "620822",
			"cityname" : "灵台县"
		}, {
			"cityid" : "620823",
			"cityname" : "崇信县"
		}, {
			"cityid" : "620824",
			"cityname" : "华亭县"
		}, {
			"cityid" : "620825",
			"cityname" : "庄浪县"
		}, {
			"cityid" : "620826",
			"cityname" : "静宁县"
		} ]
	}, {
		"酒泉市" : [ {
			"cityid" : "620900",
			"cityname" : "酒泉市"
		}, {
			"cityid" : "620901",
			"cityname" : "市辖区"
		}, {
			"cityid" : "620902",
			"cityname" : "肃州区"
		}, {
			"cityid" : "620921",
			"cityname" : "金塔县"
		}, {
			"cityid" : "620922",
			"cityname" : "瓜州县"
		}, {
			"cityid" : "620923",
			"cityname" : "肃北蒙古族自治县"
		}, {
			"cityid" : "620924",
			"cityname" : "阿克塞哈萨克族自治县"
		}, {
			"cityid" : "620981",
			"cityname" : "玉门市"
		}, {
			"cityid" : "620982",
			"cityname" : "敦煌市"
		} ]
	}, {
		"庆阳市" : [ {
			"cityid" : "621000",
			"cityname" : "庆阳市"
		}, {
			"cityid" : "621001",
			"cityname" : "市辖区"
		}, {
			"cityid" : "621002",
			"cityname" : "西峰区"
		}, {
			"cityid" : "621021",
			"cityname" : "庆城县"
		}, {
			"cityid" : "621022",
			"cityname" : "环　县"
		}, {
			"cityid" : "621023",
			"cityname" : "华池县"
		}, {
			"cityid" : "621024",
			"cityname" : "合水县"
		}, {
			"cityid" : "621025",
			"cityname" : "正宁县"
		}, {
			"cityid" : "621026",
			"cityname" : "宁　县"
		}, {
			"cityid" : "621027",
			"cityname" : "镇原县"
		} ]
	}, {
		"定西市" : [ {
			"cityid" : "621100",
			"cityname" : "定西市"
		}, {
			"cityid" : "621101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "621102",
			"cityname" : "安定区"
		}, {
			"cityid" : "621121",
			"cityname" : "通渭县"
		}, {
			"cityid" : "621122",
			"cityname" : "陇西县"
		}, {
			"cityid" : "621123",
			"cityname" : "渭源县"
		}, {
			"cityid" : "621124",
			"cityname" : "临洮县"
		}, {
			"cityid" : "621125",
			"cityname" : "漳　县"
		}, {
			"cityid" : "621126",
			"cityname" : "岷　县"
		} ]
	}, {
		"陇南市" : [ {
			"cityid" : "621200",
			"cityname" : "陇南市"
		}, {
			"cityid" : "621201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "621202",
			"cityname" : "武都区"
		}, {
			"cityid" : "621221",
			"cityname" : "成　县"
		}, {
			"cityid" : "621222",
			"cityname" : "文　县"
		}, {
			"cityid" : "621223",
			"cityname" : "宕昌县"
		}, {
			"cityid" : "621224",
			"cityname" : "康　县"
		}, {
			"cityid" : "621225",
			"cityname" : "西和县"
		}, {
			"cityid" : "621226",
			"cityname" : "礼　县"
		}, {
			"cityid" : "621227",
			"cityname" : "徽　县"
		}, {
			"cityid" : "621228",
			"cityname" : "两当县"
		} ]
	}, {
		"临夏回族自治州" : [ {
			"cityid" : "622900",
			"cityname" : "临夏回族自治州"
		}, {
			"cityid" : "622901",
			"cityname" : "临夏市"
		}, {
			"cityid" : "622921",
			"cityname" : "临夏县"
		}, {
			"cityid" : "622922",
			"cityname" : "康乐县"
		}, {
			"cityid" : "622923",
			"cityname" : "永靖县"
		}, {
			"cityid" : "622924",
			"cityname" : "广河县"
		}, {
			"cityid" : "622925",
			"cityname" : "和政县"
		}, {
			"cityid" : "622926",
			"cityname" : "东乡族自治县"
		}, {
			"cityid" : "622927",
			"cityname" : "积石山保安族东乡族撒拉族自治县"
		} ]
	}, {
		"甘南藏族自治州" : [ {
			"cityid" : "623000",
			"cityname" : "甘南藏族自治州"
		}, {
			"cityid" : "623001",
			"cityname" : "合作市"
		}, {
			"cityid" : "623021",
			"cityname" : "临潭县"
		}, {
			"cityid" : "623022",
			"cityname" : "卓尼县"
		}, {
			"cityid" : "623023",
			"cityname" : "舟曲县"
		}, {
			"cityid" : "623024",
			"cityname" : "迭部县"
		}, {
			"cityid" : "623025",
			"cityname" : "玛曲县"
		}, {
			"cityid" : "623026",
			"cityname" : "碌曲县"
		}, {
			"cityid" : "623027",
			"cityname" : "夏河县"
		} ]
	} ],
	"青海省" : [ {
		"cityid" : "630000",
		"cityname" : "青海省"
	}, {
		"西宁市" : [ {
			"cityid" : "630100",
			"cityname" : "西宁市"
		}, {
			"cityid" : "630101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "630102",
			"cityname" : "城东区"
		}, {
			"cityid" : "630103",
			"cityname" : "城中区"
		}, {
			"cityid" : "630104",
			"cityname" : "城西区"
		}, {
			"cityid" : "630105",
			"cityname" : "城北区"
		}, {
			"cityid" : "630121",
			"cityname" : "大通回族土族自治县"
		}, {
			"cityid" : "630122",
			"cityname" : "湟中县"
		}, {
			"cityid" : "630123",
			"cityname" : "湟源县"
		} ]
	}, {
		"海东地区" : [ {
			"cityid" : "632100",
			"cityname" : "海东地区"
		}, {
			"cityid" : "632121",
			"cityname" : "平安县"
		}, {
			"cityid" : "632122",
			"cityname" : "民和回族土族自治县"
		}, {
			"cityid" : "632123",
			"cityname" : "乐都县"
		}, {
			"cityid" : "632126",
			"cityname" : "互助土族自治县"
		}, {
			"cityid" : "632127",
			"cityname" : "化隆回族自治县"
		}, {
			"cityid" : "632128",
			"cityname" : "循化撒拉族自治县"
		} ]
	}, {
		"海北藏族自治州" : [ {
			"cityid" : "632200",
			"cityname" : "海北藏族自治州"
		}, {
			"cityid" : "632221",
			"cityname" : "门源回族自治县"
		}, {
			"cityid" : "632222",
			"cityname" : "祁连县"
		}, {
			"cityid" : "632223",
			"cityname" : "海晏县"
		}, {
			"cityid" : "632224",
			"cityname" : "刚察县"
		} ]
	}, {
		"黄南藏族自治州" : [ {
			"cityid" : "632300",
			"cityname" : "黄南藏族自治州"
		}, {
			"cityid" : "632321",
			"cityname" : "同仁县"
		}, {
			"cityid" : "632322",
			"cityname" : "尖扎县"
		}, {
			"cityid" : "632323",
			"cityname" : "泽库县"
		}, {
			"cityid" : "632324",
			"cityname" : "河南蒙古族自治县"
		} ]
	}, {
		"海南藏族自治州" : [ {
			"cityid" : "632500",
			"cityname" : "海南藏族自治州"
		}, {
			"cityid" : "632521",
			"cityname" : "共和县"
		}, {
			"cityid" : "632522",
			"cityname" : "同德县"
		}, {
			"cityid" : "632523",
			"cityname" : "贵德县"
		}, {
			"cityid" : "632524",
			"cityname" : "兴海县"
		}, {
			"cityid" : "632525",
			"cityname" : "贵南县"
		} ]
	}, {
		"果洛藏族自治州" : [ {
			"cityid" : "632600",
			"cityname" : "果洛藏族自治州"
		}, {
			"cityid" : "632621",
			"cityname" : "玛沁县"
		}, {
			"cityid" : "632622",
			"cityname" : "班玛县"
		}, {
			"cityid" : "632623",
			"cityname" : "甘德县"
		}, {
			"cityid" : "632624",
			"cityname" : "达日县"
		}, {
			"cityid" : "632625",
			"cityname" : "久治县"
		}, {
			"cityid" : "632626",
			"cityname" : "玛多县"
		} ]
	}, {
		"玉树藏族自治州" : [ {
			"cityid" : "632700",
			"cityname" : "玉树藏族自治州"
		}, {
			"cityid" : "632721",
			"cityname" : "玉树县"
		}, {
			"cityid" : "632722",
			"cityname" : "杂多县"
		}, {
			"cityid" : "632723",
			"cityname" : "称多县"
		}, {
			"cityid" : "632724",
			"cityname" : "治多县"
		}, {
			"cityid" : "632725",
			"cityname" : "囊谦县"
		}, {
			"cityid" : "632726",
			"cityname" : "曲麻莱县"
		} ]
	}, {
		"海西蒙古族藏族自治州" : [ {
			"cityid" : "632800",
			"cityname" : "海西蒙古族藏族自治州"
		}, {
			"cityid" : "632801",
			"cityname" : "格尔木市"
		}, {
			"cityid" : "632802",
			"cityname" : "德令哈市"
		}, {
			"cityid" : "632821",
			"cityname" : "乌兰县"
		}, {
			"cityid" : "632822",
			"cityname" : "都兰县"
		}, {
			"cityid" : "632823",
			"cityname" : "天峻县"
		} ]
	} ],
	"宁夏回族自治区" : [ {
		"cityid" : "640000",
		"cityname" : "宁夏回族自治区"
	}, {
		"银川市" : [ {
			"cityid" : "640100",
			"cityname" : "银川市"
		}, {
			"cityid" : "640101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "640104",
			"cityname" : "兴庆区"
		}, {
			"cityid" : "640105",
			"cityname" : "西夏区"
		}, {
			"cityid" : "640106",
			"cityname" : "金凤区"
		}, {
			"cityid" : "640121",
			"cityname" : "永宁县"
		}, {
			"cityid" : "640122",
			"cityname" : "贺兰县"
		}, {
			"cityid" : "640181",
			"cityname" : "灵武市"
		} ]
	}, {
		"石嘴山市" : [ {
			"cityid" : "640200",
			"cityname" : "石嘴山市"
		}, {
			"cityid" : "640201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "640202",
			"cityname" : "大武口区"
		}, {
			"cityid" : "640205",
			"cityname" : "惠农区"
		}, {
			"cityid" : "640221",
			"cityname" : "平罗县"
		} ]
	}, {
		"吴忠市" : [ {
			"cityid" : "640300",
			"cityname" : "吴忠市"
		}, {
			"cityid" : "640301",
			"cityname" : "市辖区"
		}, {
			"cityid" : "640302",
			"cityname" : "利通区"
		}, {
			"cityid" : "640303",
			"cityname" : "红寺堡区"
		}, {
			"cityid" : "640323",
			"cityname" : "盐池县"
		}, {
			"cityid" : "640324",
			"cityname" : "同心县"
		}, {
			"cityid" : "640381",
			"cityname" : "青铜峡市"
		} ]
	}, {
		"固原市" : [ {
			"cityid" : "640400",
			"cityname" : "固原市"
		}, {
			"cityid" : "640401",
			"cityname" : "市辖区"
		}, {
			"cityid" : "640402",
			"cityname" : "原州区"
		}, {
			"cityid" : "640422",
			"cityname" : "西吉县"
		}, {
			"cityid" : "640423",
			"cityname" : "隆德县"
		}, {
			"cityid" : "640424",
			"cityname" : "泾源县"
		}, {
			"cityid" : "640425",
			"cityname" : "彭阳县"
		} ]
	}, {
		"中卫市" : [ {
			"cityid" : "640500",
			"cityname" : "中卫市"
		}, {
			"cityid" : "640501",
			"cityname" : "市辖区"
		}, {
			"cityid" : "640502",
			"cityname" : "沙坡头区"
		}, {
			"cityid" : "640521",
			"cityname" : "中宁县"
		}, {
			"cityid" : "640522",
			"cityname" : "海原县"
		} ]
	} ],
	"新疆维吾尔自治区" : [ {
		"cityid" : "650000",
		"cityname" : "新疆维吾尔自治区"
	}, {
		"乌鲁木齐市" : [ {
			"cityid" : "650100",
			"cityname" : "乌鲁木齐市"
		}, {
			"cityid" : "650101",
			"cityname" : "市辖区"
		}, {
			"cityid" : "650102",
			"cityname" : "天山区"
		}, {
			"cityid" : "650103",
			"cityname" : "沙依巴克区"
		}, {
			"cityid" : "650104",
			"cityname" : "新市区"
		}, {
			"cityid" : "650105",
			"cityname" : "水磨沟区"
		}, {
			"cityid" : "650106",
			"cityname" : "头屯河区"
		}, {
			"cityid" : "650107",
			"cityname" : "达坂城区"
		}, {
			"cityid" : "650109",
			"cityname" : "米东区"
		}, {
			"cityid" : "650121",
			"cityname" : "乌鲁木齐县"
		} ]
	}, {
		"克拉玛依市" : [ {
			"cityid" : "650200",
			"cityname" : "克拉玛依市"
		}, {
			"cityid" : "650201",
			"cityname" : "市辖区"
		}, {
			"cityid" : "650202",
			"cityname" : "独山子区"
		}, {
			"cityid" : "650203",
			"cityname" : "克拉玛依区"
		}, {
			"cityid" : "650204",
			"cityname" : "白碱滩区"
		}, {
			"cityid" : "650205",
			"cityname" : "乌尔禾区"
		} ]
	}, {
		"吐鲁番地区" : [ {
			"cityid" : "652100",
			"cityname" : "吐鲁番地区"
		}, {
			"cityid" : "652101",
			"cityname" : "吐鲁番市"
		}, {
			"cityid" : "652122",
			"cityname" : "鄯善县"
		}, {
			"cityid" : "652123",
			"cityname" : "托克逊县"
		} ]
	}, {
		"哈密地区" : [ {
			"cityid" : "652200",
			"cityname" : "哈密地区"
		}, {
			"cityid" : "652201",
			"cityname" : "哈密市"
		}, {
			"cityid" : "652222",
			"cityname" : "巴里坤哈萨克自治县"
		}, {
			"cityid" : "652223",
			"cityname" : "伊吾县"
		} ]
	}, {
		"昌吉回族自治州" : [ {
			"cityid" : "652300",
			"cityname" : "昌吉回族自治州"
		}, {
			"cityid" : "652301",
			"cityname" : "昌吉市"
		}, {
			"cityid" : "652302",
			"cityname" : "阜康市"
		}, {
			"cityid" : "652323",
			"cityname" : "呼图壁县"
		}, {
			"cityid" : "652324",
			"cityname" : "玛纳斯县"
		}, {
			"cityid" : "652325",
			"cityname" : "奇台县"
		}, {
			"cityid" : "652327",
			"cityname" : "吉木萨尔县"
		}, {
			"cityid" : "652328",
			"cityname" : "木垒哈萨克自治县"
		} ]
	}, {
		"博尔塔拉蒙古自治州" : [ {
			"cityid" : "652700",
			"cityname" : "博尔塔拉蒙古自治州"
		}, {
			"cityid" : "652701",
			"cityname" : "博乐市"
		}, {
			"cityid" : "652722",
			"cityname" : "精河县"
		}, {
			"cityid" : "652723",
			"cityname" : "温泉县"
		} ]
	}, {
		"巴音郭楞蒙古自治州" : [ {
			"cityid" : "652800",
			"cityname" : "巴音郭楞蒙古自治州"
		}, {
			"cityid" : "652801",
			"cityname" : "库尔勒市"
		}, {
			"cityid" : "652822",
			"cityname" : "轮台县"
		}, {
			"cityid" : "652823",
			"cityname" : "尉犁县"
		}, {
			"cityid" : "652824",
			"cityname" : "若羌县"
		}, {
			"cityid" : "652825",
			"cityname" : "且末县"
		}, {
			"cityid" : "652826",
			"cityname" : "焉耆回族自治县"
		}, {
			"cityid" : "652827",
			"cityname" : "和静县"
		}, {
			"cityid" : "652828",
			"cityname" : "和硕县"
		}, {
			"cityid" : "652829",
			"cityname" : "博湖县"
		} ]
	}, {
		"阿克苏地区" : [ {
			"cityid" : "652900",
			"cityname" : "阿克苏地区"
		}, {
			"cityid" : "652901",
			"cityname" : "阿克苏市"
		}, {
			"cityid" : "652922",
			"cityname" : "温宿县"
		}, {
			"cityid" : "652923",
			"cityname" : "库车县"
		}, {
			"cityid" : "652924",
			"cityname" : "沙雅县"
		}, {
			"cityid" : "652925",
			"cityname" : "新和县"
		}, {
			"cityid" : "652926",
			"cityname" : "拜城县"
		}, {
			"cityid" : "652927",
			"cityname" : "乌什县"
		}, {
			"cityid" : "652928",
			"cityname" : "阿瓦提县"
		}, {
			"cityid" : "652929",
			"cityname" : "柯坪县"
		} ]
	}, {
		"克孜勒苏柯尔克孜自治州" : [ {
			"cityid" : "653000",
			"cityname" : "克孜勒苏柯尔克孜自治州"
		}, {
			"cityid" : "653001",
			"cityname" : "阿图什市"
		}, {
			"cityid" : "653022",
			"cityname" : "阿克陶县"
		}, {
			"cityid" : "653023",
			"cityname" : "阿合奇县"
		}, {
			"cityid" : "653024",
			"cityname" : "乌恰县"
		} ]
	}, {
		"喀什地区" : [ {
			"cityid" : "653100",
			"cityname" : "喀什地区"
		}, {
			"cityid" : "653101",
			"cityname" : "喀什市"
		}, {
			"cityid" : "653121",
			"cityname" : "疏附县"
		}, {
			"cityid" : "653122",
			"cityname" : "疏勒县"
		}, {
			"cityid" : "653123",
			"cityname" : "英吉沙县"
		}, {
			"cityid" : "653124",
			"cityname" : "泽普县"
		}, {
			"cityid" : "653125",
			"cityname" : "莎车县"
		}, {
			"cityid" : "653126",
			"cityname" : "叶城县"
		}, {
			"cityid" : "653127",
			"cityname" : "麦盖提县"
		}, {
			"cityid" : "653128",
			"cityname" : "岳普湖县"
		}, {
			"cityid" : "653129",
			"cityname" : "伽师县"
		}, {
			"cityid" : "653130",
			"cityname" : "巴楚县"
		}, {
			"cityid" : "653131",
			"cityname" : "塔什库尔干塔吉克自治县"
		} ]
	}, {
		"和田地区" : [ {
			"cityid" : "653200",
			"cityname" : "和田地区"
		}, {
			"cityid" : "653201",
			"cityname" : "和田市"
		}, {
			"cityid" : "653221",
			"cityname" : "和田县"
		}, {
			"cityid" : "653222",
			"cityname" : "墨玉县"
		}, {
			"cityid" : "653223",
			"cityname" : "皮山县"
		}, {
			"cityid" : "653224",
			"cityname" : "洛浦县"
		}, {
			"cityid" : "653225",
			"cityname" : "策勒县"
		}, {
			"cityid" : "653226",
			"cityname" : "于田县"
		}, {
			"cityid" : "653227",
			"cityname" : "民丰县"
		} ]
	}, {
		"伊犁哈萨克自治州" : [ {
			"cityid" : "654000",
			"cityname" : "伊犁哈萨克自治州"
		}, {
			"cityid" : "654002",
			"cityname" : "伊宁市"
		}, {
			"cityid" : "654003",
			"cityname" : "奎屯市"
		}, {
			"cityid" : "654021",
			"cityname" : "伊宁县"
		}, {
			"cityid" : "654022",
			"cityname" : "察布查尔锡伯自治县"
		}, {
			"cityid" : "654023",
			"cityname" : "霍城县"
		}, {
			"cityid" : "654024",
			"cityname" : "巩留县"
		}, {
			"cityid" : "654025",
			"cityname" : "新源县"
		}, {
			"cityid" : "654026",
			"cityname" : "昭苏县"
		}, {
			"cityid" : "654027",
			"cityname" : "特克斯县"
		}, {
			"cityid" : "654028",
			"cityname" : "尼勒克县"
		} ]
	}, {
		"塔城地区" : [ {
			"cityid" : "654200",
			"cityname" : "塔城地区"
		}, {
			"cityid" : "654201",
			"cityname" : "塔城市"
		}, {
			"cityid" : "654202",
			"cityname" : "乌苏市"
		}, {
			"cityid" : "654221",
			"cityname" : "额敏县"
		}, {
			"cityid" : "654223",
			"cityname" : "沙湾县"
		}, {
			"cityid" : "654224",
			"cityname" : "托里县"
		}, {
			"cityid" : "654225",
			"cityname" : "裕民县"
		}, {
			"cityid" : "654226",
			"cityname" : "和布克赛尔蒙古自治县"
		} ]
	}, {
		"阿勒泰地区" : [ {
			"cityid" : "654300",
			"cityname" : "阿勒泰地区"
		}, {
			"cityid" : "654301",
			"cityname" : "阿勒泰市"
		}, {
			"cityid" : "654321",
			"cityname" : "布尔津县"
		}, {
			"cityid" : "654322",
			"cityname" : "富蕴县"
		}, {
			"cityid" : "654323",
			"cityname" : "福海县"
		}, {
			"cityid" : "654324",
			"cityname" : "哈巴河县"
		}, {
			"cityid" : "654325",
			"cityname" : "青河县"
		}, {
			"cityid" : "654326",
			"cityname" : "吉木乃县"
		} ]
	}, {
		"自治区直辖县级行政区划" : [ {
			"cityid" : "659000",
			"cityname" : "自治区直辖县级行政区划"
		}, {
			"cityid" : "659001",
			"cityname" : "石河子市"
		}, {
			"cityid" : "659002",
			"cityname" : "阿拉尔市"
		}, {
			"cityid" : "659003",
			"cityname" : "图木舒克市"
		}, {
			"cityid" : "659004",
			"cityname" : "五家渠市"
		} ]
	} ],
	"台湾省" : [ {
		"cityid" : "710000",
		"cityname" : "台湾省"
	} ],
	"香港特别行政区" : [ {
		"cityid" : "810000",
		"cityname" : "香港特别行政区"
	} ],
	"澳门特别行政区" : [ {
		"cityid" : "820000",
		"cityname" : "澳门特别行政区"
	} ]
};